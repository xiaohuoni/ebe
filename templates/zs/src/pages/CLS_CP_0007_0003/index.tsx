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
  TextArea,
  VerticalView,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0007_0003$$Page: React.FC<PageProps> = ({
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
    const eventDatagetValue67: any = [
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
    eventDatagetValue67.params =
      [
        {
          title: '事件入参',
          name: 'options_3240296',
          value: '$options_3240296$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue67, { options_3240296 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const jointAddr = (options_289242: any) => {
    const eventDatacustomActionCode104: any = [
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
    eventDatacustomActionCode104.params =
      [
        {
          title: '事件入参',
          name: 'options_289242',
          value: '$options_289242$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode104,
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
    const eventDatacustomActionCode105: any = [
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
    eventDatacustomActionCode105.params =
      [
        {
          title: '事件入参',
          name: 'options_104394',
          value: '$options_104394$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode105,
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
    const eventDataapiRequest308: any = [
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
    eventDataapiRequest308.params = [] || [];
    CMDGenerator(eventDataapiRequest308, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest309: any = [
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
    eventDataapiRequest309.params = [] || [];
    CMDGenerator(eventDataapiRequest309, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse166: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;console.log("\\u9700\\u8981\\u56DE\\u586B\\u7684\\u6570\\u636E\\u6E90",item);data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;var instList=[];if(item.instList!=null&&item.instList.length>0){for(var i=0;i<item.instList.length;++i){var instTemp={};var inst=item.instList[i];instTemp.rowId=inst.instCode;for(var j=0;j<inst.instAttrList.length;++j){instTemp[inst.instAttrList[j].attrCode]=inst.instAttrList[j].attrValue}instList.push(instTemp)}}data.instList=instList;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success()};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132641356637300,
                shielding: true,
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
                      showInput: true,
                      _codePath: ['city'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '182276',
                      code: 'area',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['area'],
                      _idpath: ['182276'],
                    },
                    {
                      attrId: '905721',
                      code: 'country',
                      name: '街道/乡/镇',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['country'],
                      _idpath: ['905721'],
                    },
                    {
                      attrId: '500673',
                      code: 'district',
                      name: '片区',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['district'],
                      _idpath: ['500673'],
                    },
                    {
                      attrId: '007551',
                      code: 'street',
                      name: '街、路、行政村、居委会',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['street'],
                      _idpath: ['007551'],
                    },
                    {
                      attrId: '303741',
                      code: 'doorplate',
                      name: '写字楼、小区（组团）、单位大院、自然村等',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['doorplate'],
                      _idpath: ['303741'],
                    },
                    {
                      attrId: '725859',
                      code: 'floorName',
                      name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['floorName'],
                      _idpath: ['725859'],
                    },
                    {
                      attrId: '7467836',
                      code: 'element',
                      name: '楼号或单元号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['element'],
                      _idpath: ['7467836'],
                    },
                    {
                      attrId: '1586552',
                      code: 'roomName',
                      name: '房间号、户名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['roomName'],
                      _idpath: ['1586552'],
                    },
                    {
                      attrId: '996532',
                      code: 'installAddr',
                      name: '安装地址',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['installAddr'],
                      _idpath: ['996532'],
                    },
                    {
                      attrId: '7370567',
                      code: 'setMeal',
                      name: '套餐',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['setMeal'],
                      _idpath: ['7370567'],
                    },
                    {
                      attrId: '8998593',
                      code: 'bandwidthUp',
                      name: '上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthUp'],
                      _idpath: ['8998593'],
                    },
                    {
                      attrId: '569754',
                      code: 'total',
                      name: '条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['total'],
                      _idpath: ['569754'],
                    },
                    {
                      attrId: '410393',
                      code: 'totalBandwidthUp',
                      name: '总上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['totalBandwidthUp'],
                      _idpath: ['410393'],
                    },
                    {
                      attrId: '087569',
                      code: 'houseNum',
                      name: '门牌号(含胡同)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['houseNum'],
                      _idpath: ['087569'],
                    },
                    {
                      attrId: '0644498',
                      code: 'cityName',
                      name: '地市名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['cityName'],
                      _idpath: ['0644498'],
                    },
                    {
                      attrId: '451514',
                      code: 'areaName',
                      name: '区域名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['areaName'],
                      _idpath: ['451514'],
                    },
                    {
                      attrId: '219589',
                      code: 'countryName',
                      name: '乡镇名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['countryName'],
                      _idpath: ['219589'],
                    },
                    {
                      attrId: '7224988',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['7224988'],
                    },
                    {
                      attrId: '4746',
                      code: 'triggerApprovalConditions',
                      name: '触发审批条件',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['triggerApprovalConditions'],
                      _idpath: ['4746'],
                    },
                    {
                      attrId: '226962',
                      code: 'overallBnefitRatio',
                      name: '整体效益比',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['overallBnefitRatio'],
                      _idpath: ['226962'],
                    },
                    {
                      attrId: '486652',
                      code: 'totalRevenueContractPeriod',
                      name: '合约期内总收入',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['totalRevenueContractPeriod'],
                      _idpath: ['486652'],
                    },
                    {
                      attrId: '826101',
                      code: 'InstallationFeeSettlement',
                      name: '装机费结算',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['InstallationFeeSettlement'],
                      _idpath: ['826101'],
                    },
                    {
                      attrId: '047827',
                      code: 'estimatedTotalRemuneration',
                      name: '预计总酬金支出',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['estimatedTotalRemuneration'],
                      _idpath: ['047827'],
                    },
                    {
                      attrId: '0373492',
                      code: 'equipmentCost',
                      name: '设备费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['equipmentCost'],
                      _idpath: ['0373492'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 167051607168969660,
                    shielding: true,
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
                      _sourceName: '根据父区域ID查询所有子区域-tsm',
                    },
                    line_number: 9,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 167051619896137100,
                        shielding: true,
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
                        line_number: 10,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'apiRequest',
                    dataId: 167051607586481380,
                    shielding: true,
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
                      _sourceName: '根据父区域ID查询所有子区域-tsm',
                    },
                    line_number: 11,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 167051607586425800,
                        shielding: true,
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
                        line_number: 12,
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
                  valueList: {
                    Input_361479_887285_2150708_7460276_60627:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 13,
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
            line_number: 14,
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
                line_number: 15,
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
                line_number: 16,
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
                    line_number: 17,
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
            line_number: 18,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166599480827529820,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_60627',
                    'Table_477379',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '6776648',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_60627',
                    'Table_477379',
                  ],
                },
                line_number: 19,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: ['Row_851124', 'VerticalView_060817'],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: ['Row_851124', 'VerticalView_060817'],
                  visible: '',
                },
                line_number: 20,
              },
              {
                type: 'setDisable',
                dataId: 166599483528244300,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_60627',
                    'Form_449441_1900385_068038',
                    'Form_449441_1900385_068038_425388',
                    'Form_996584',
                    'Button_081329',
                    'Button_029776',
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
                    'Form_996584',
                    'Button_081329',
                    'Button_029776',
                  ],
                },
                line_number: 21,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse166.params = [] || [];
    CMDGenerator(eventDataifelse166, {}, 'ifelse', {
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
            formCode={'Form_996584'}
            formItemIndex={1}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.factorForm}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_996584',
              uid: 'Form_996584',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource138: any = [
                {
                  type: 'setDataSource',
                  dataId: 170116285830172500,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '859248',
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
                        showInput: true,
                      },
                      {
                        attrId: '182276',
                        code: 'area',
                        name: '区县',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '905721',
                        code: 'country',
                        name: '街道/乡/镇',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '500673',
                        code: 'district',
                        name: '片区',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '007551',
                        code: 'street',
                        name: '街、路、行政村、居委会',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '087569',
                        code: 'houseNum',
                        name: '门牌号(含胡同)',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '303741',
                        code: 'doorplate',
                        name: '写字楼、小区（组团）、单位大院、自然村等',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '725859',
                        code: 'floorName',
                        name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '7467836',
                        code: 'element',
                        name: '楼号或单元号',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '1586552',
                        code: 'roomName',
                        name: '房间号、户名',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '996532',
                        code: 'installAddr',
                        name: '安装地址',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '7370567',
                        code: 'setMeal',
                        name: '套餐',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '8998593',
                        code: 'bandwidthUp',
                        name: '上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '569754',
                        code: 'total',
                        name: '条数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '410393',
                        code: 'totalBandwidthUp',
                        name: '总上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '0644498',
                        code: 'cityName',
                        name: '地市名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '451514',
                        code: 'areaName',
                        name: '区域名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '219589',
                        code: 'countryName',
                        name: '乡镇名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '7224988',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_996584', 'getFieldsValue'],
                          code: 'reason',
                        },
                      },
                      {
                        attrId: '486652',
                        code: 'totalRevenueContractPeriod',
                        name: '合约期内总收入',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_996584', 'getFieldsValue'],
                          code: 'totalRevenueContractPeriod',
                        },
                      },
                      {
                        attrId: '047827',
                        code: 'estimatedTotalRemuneration',
                        name: '预计总酬金支出',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_996584', 'getFieldsValue'],
                          code: 'estimatedTotalRemuneration',
                        },
                      },
                      {
                        attrId: '0373492',
                        code: 'equipmentCost',
                        name: '设备费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_996584', 'getFieldsValue'],
                          code: 'equipmentCost',
                        },
                      },
                      {
                        attrId: '826101',
                        code: 'InstallationFeeSettlement',
                        name: '装机费结算',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_996584', 'getFieldsValue'],
                          code: 'InstallationFeeSettlement',
                        },
                      },
                      {
                        attrId: '226962',
                        code: 'overallBnefitRatio',
                        name: '整体效益比',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_996584', 'getFieldsValue'],
                          code: 'overallBnefitRatio',
                        },
                      },
                      {
                        attrId: '4746',
                        code: 'triggerApprovalConditions',
                        name: '触发审批条件',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_996584', 'getFieldsValue'],
                          code: 'triggerApprovalConditions',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 170131526178042800,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '410438',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){if(obj[key]==null||obj[key]==undefined){continue}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 170131526178090980,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '0324372',
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
              eventDatasetDataSource138.params =
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
                eventDatasetDataSource138,
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
            ref={(r: any) => (refs['Form_996584'] = r)}
            {...injectData}
          >
            <Input
              name={'合约期内总收入'}
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
              fieldName={'totalRevenueContractPeriod'}
              value={data?.factorForm?.totalRevenueContractPeriod}
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
                id: 'Input_totalRevenueContractPeriod_177289',
                uid: 'Input_totalRevenueContractPeriod_177289',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_totalRevenueContractPeriod_177289'] = r)
              }
              {...injectData}
            />
            <Input
              name={'预计总酬金支出'}
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
              fieldName={'estimatedTotalRemuneration'}
              value={data?.factorForm?.estimatedTotalRemuneration}
              formItemIndex={1}
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
                id: 'Input_estimatedTotalRemuneration_8718516',
                uid: 'Input_estimatedTotalRemuneration_8718516',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_estimatedTotalRemuneration_8718516'] = r)
              }
              {...injectData}
            />
            <Input
              name={'设备费'}
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
              fieldName={'equipmentCost'}
              value={data?.factorForm?.equipmentCost}
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
                id: 'Input_equipmentCost_944076',
                uid: 'Input_equipmentCost_944076',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_equipmentCost_944076'] = r)}
              {...injectData}
            />
            <Input
              name={'装机费结算'}
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
              fieldName={'InstallationFeeSettlement'}
              value={data?.factorForm?.InstallationFeeSettlement}
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
                id: 'Input_InstallationFeeSettlement_746167',
                uid: 'Input_InstallationFeeSettlement_746167',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_InstallationFeeSettlement_746167'] = r)
              }
              {...injectData}
            />
            <Input
              name={'整体效益比'}
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
              fieldName={'overallBnefitRatio'}
              value={data?.factorForm?.overallBnefitRatio}
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
                id: 'Input_overallBnefitRatio_005263',
                uid: 'Input_overallBnefitRatio_005263',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_overallBnefitRatio_005263'] = r)}
              {...injectData}
            />
            <Input
              name={'触发审批条件'}
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
              fieldName={'triggerApprovalConditions'}
              value={data?.factorForm?.triggerApprovalConditions}
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
                id: 'Input_triggerApprovalConditions_943583',
                uid: 'Input_triggerApprovalConditions_943583',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_triggerApprovalConditions_943583'] = r)
              }
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              formItemIndex={6}
              $$componentItem={{
                id: 'Input_reason_5113102',
                uid: 'Input_reason_5113102',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_reason_5113102'] = r)}
              {...injectData}
            />
          </Form>
          <VerticalView
            name={'上下布局'}
            $$componentItem={{
              id: 'VerticalView_060817',
              uid: 'VerticalView_060817',
              type: 'VerticalView',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => (refs['VerticalView_060817'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_0052634',
                uid: 'View_0052634',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'inline-block',
                padding: '0px 0px 0px 0px',
                height: '30%',
                width: '100%',
                textAlign: 'right',
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['View_0052634'] = r)}
              {...injectData}
            >
              <Row
                name={'行容器'}
                colSpan={2}
                gutterHorizontal={0}
                gutterVertical={0}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'Row_715437',
                  uid: 'Row_715437',
                  type: 'Row',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '10px 10px 10px 10px' }}
                ref={(r: any) => (refs['Row_715437'] = r)}
                {...injectData}
              >
                <Button
                  name={'新增'}
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
                    id: 'Button_081329',
                    uid: 'Button_081329',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatashowCustomModal159: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 166314610874318850,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '611628',
                          pageJsonId: '537892',
                          modalname: '/networkAcrossProvincecopycopynew',
                          pageId: '1046978235419439104',
                          paramsObj: {
                            phone: '$value_24586657$',
                            lanId: '$state.lanId$',
                            catalogCode: '$state.catalogCode$',
                            isCoreFlag: '1',
                            popType: '1',
                          },
                          paramsObjKeyValueMap: {
                            phone: '$value_24586657$',
                            lanId: '$state.lanId$',
                            catalogCode: '$state.catalogCode$',
                            isCoreFlag: '1',
                            popType: '1',
                          },
                          modalPath: '/networkAcrossProvincecopycopynew',
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
                              code: 'function main(data,state,success,fail){data.instList.push(okData_611628);var instList=[];for(var key in okData_611628){if(key!="rowId"){var obj={"attrCode":key,"attrName":"","attrValue":okData_611628[key]};instList.push(obj)}}var instObj={"instCode":okData_611628.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.push(instObj)}else{var instList=[];instList.push(instObj);data.sceneSubmit.instList=instList}success()};',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 166314610874380700,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '6286842',
                                  pageJsonId: '537892',
                                  dataSourceId: 170116363627190560,
                                  dataSourceName: 'instList',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
                                    {
                                      attrId: '608251',
                                      code: 'setMeal',
                                      name: '套餐',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '392586',
                                      code: 'total',
                                      name: '受理后总条数',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '43058',
                                      code: 'bandwidthUp',
                                      name: '上行带宽',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '783715',
                                      code: 'totalBandwidthUp',
                                      name: '受理后上行带宽总和',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '035665',
                                      code: 'city',
                                      name: '地市',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '283233',
                                      code: 'cityName',
                                      name: '地市名称',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '62468',
                                      code: 'area',
                                      name: '区县',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '1203095',
                                      code: 'areaName',
                                      name: '区县名称',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '007514',
                                      code: 'country',
                                      name: '街道/乡/镇',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '045901',
                                      code: 'street',
                                      name: '街/村',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '598604',
                                      code: 'houseNum',
                                      name: '号/弄',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '895889',
                                      code: 'installAddr',
                                      name: '安装地址',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '1811391',
                                      code: 'doorplate',
                                      name: '楼宇/单位',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '805025',
                                      code: 'floorName',
                                      name: '单元楼号',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '915269',
                                      code: 'element',
                                      name: '层号',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '533551',
                                      code: 'roomName',
                                      name: '房间号',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '0054264',
                                      code: 'busiType',
                                      name: '业务类型',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '458158',
                                      code: 'busiTypeName',
                                      name: '业务类型名称',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '8650327',
                                      code: 'currentTimeAcceptTotal',
                                      name: '本次受理条数',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '730632',
                                      code: 'stockTotal',
                                      name: '存量条数',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '6941186',
                                      code: 'currentTimeTotalBandwidthUp',
                                      name: '本次上行带宽总和',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                    {
                                      attrId: '468285',
                                      code: 'stockTotalBandwidthUp',
                                      name: '存量上行带宽总和',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: false,
                                    },
                                  ],
                                  operateType: 1,
                                  onlySetPatch: true,
                                  otherObjectArrayOptions: {},
                                  targetDataSourcePaths: [],
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 168785590427602940,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '2177787',
                                      pageJsonId: '537892',
                                      value: ['$data.feeInfo$', '父界面数据源'],
                                    },
                                    line_number: 4,
                                  },
                                ],
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
                    eventDatashowCustomModal159.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatashowCustomModal159,
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
                  ref={(r: any) => (refs['Button_081329'] = r)}
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
                    id: 'Button_029776',
                    uid: 'Button_029776',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 10px 0px 10px' }}
                  onClick={(e: any) => {
                    const eventDatagetTableSelectedKey53: any = [
                      {
                        type: 'getTableSelectedKey',
                        dataId: 166538785844549920,
                        shielding: true,
                        options: {
                          compId: 'Table_8700198',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '18302646',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '9152338',
                                options: {
                                  context: '$selectedRowKeys_18302646[0]$',
                                  operate: 'empty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                condId: '6181125',
                                condition: [
                                  {
                                    options: {
                                      context: '$selectedRowKeys_18302646$',
                                      operate: 'notEmpty',
                                    },
                                    condId: '0586874',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context:
                                        '$selectedRowKeys_18302646.length$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    condId: '771025',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                connector: '||',
                              },
                            ],
                            dataId: 168654906013354240,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 168654926059620800,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168654926520267040,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168654926520240400,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 168654926520279260,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 168654926520211260,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 168654926520248060,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 168654926520285570,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                        shielding: true,
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 168654926520207100,
                                                        children: [],
                                                        value: 'callback2',
                                                        params: [],
                                                        shielding: true,
                                                      },
                                                    ],
                                                    todoOptions: [
                                                      'selectAllDataSource',
                                                      'dataSourceSetValue',
                                                      'onlySetPatch',
                                                    ],
                                                    options: {
                                                      compId: 'setDataSource',
                                                      compName: 'page',
                                                      id: '2058217',
                                                      pageJsonId: '537892',
                                                      dataSourceId: 170116363627190560,
                                                      dataSourceName:
                                                        'instList',
                                                      dataSourceRelType:
                                                        'custom',
                                                      dataSourceSetValue: [
                                                        {
                                                          attrId: '608251',
                                                          code: 'setMeal',
                                                          name: '套餐',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '392586',
                                                          code: 'total',
                                                          name: '受理后总条数',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '43058',
                                                          code: 'bandwidthUp',
                                                          name: '上行带宽',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '783715',
                                                          code: 'totalBandwidthUp',
                                                          name: '受理后上行带宽总和',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '035665',
                                                          code: 'city',
                                                          name: '地市',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '283233',
                                                          code: 'cityName',
                                                          name: '地市名称',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '62468',
                                                          code: 'area',
                                                          name: '区县',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '1203095',
                                                          code: 'areaName',
                                                          name: '区县名称',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '007514',
                                                          code: 'country',
                                                          name: '街道/乡/镇',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '045901',
                                                          code: 'street',
                                                          name: '街/村',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '598604',
                                                          code: 'houseNum',
                                                          name: '号/弄',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '895889',
                                                          code: 'installAddr',
                                                          name: '安装地址',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '1811391',
                                                          code: 'doorplate',
                                                          name: '楼宇/单位',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '805025',
                                                          code: 'floorName',
                                                          name: '单元楼号',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '915269',
                                                          code: 'element',
                                                          name: '层号',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '533551',
                                                          code: 'roomName',
                                                          name: '房间号',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '0054264',
                                                          code: 'busiType',
                                                          name: '业务类型',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '458158',
                                                          code: 'busiTypeName',
                                                          name: '业务类型名称',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '8650327',
                                                          code: 'currentTimeAcceptTotal',
                                                          name: '本次受理条数',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '730632',
                                                          code: 'stockTotal',
                                                          name: '存量条数',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '6941186',
                                                          code: 'currentTimeTotalBandwidthUp',
                                                          name: '本次上行带宽总和',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '468285',
                                                          code: 'stockTotalBandwidthUp',
                                                          name: '存量上行带宽总和',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                      ],
                                                      operateType: 1,
                                                      onlySetPatch: true,
                                                      otherObjectArrayOptions:
                                                        {},
                                                      targetDataSourcePaths: [],
                                                    },
                                                    actionObjId:
                                                      'setDataSource',
                                                    actionObjName: 'page',
                                                    value: 'setDataSource',
                                                    shielding: true,
                                                    line_number: 6,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 168654926520282600,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 168654926520273570,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                        shielding: true,
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 168654926520286700,
                                                        children: [],
                                                        value: 'callback2',
                                                        params: [],
                                                        shielding: true,
                                                      },
                                                    ],
                                                    todoOptions: [
                                                      'pathname',
                                                      'customFuncName',
                                                      'customFuncParams',
                                                    ],
                                                    options: {
                                                      compId:
                                                        'callParentCustomFunc',
                                                      compName: 'system',
                                                      id: '999275',
                                                      pageJsonId: '537892',
                                                      pathname:
                                                        '/auditOrderPrepare',
                                                      pageId:
                                                        '884045146848604160',
                                                      customFuncName:
                                                        'getFactor',
                                                      customFuncParams:
                                                        '$data.sceneSubmit$',
                                                      modalPath:
                                                        '/auditOrderPrepare',
                                                    },
                                                    actionObjId:
                                                      'callParentCustomFunc',
                                                    actionObjName: 'system',
                                                    value:
                                                      'callParentCustomFunc',
                                                    shielding: true,
                                                    line_number: 7,
                                                  },
                                                ],
                                                value: 'callback1',
                                                params: [],
                                                shielding: true,
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 168654926520222430,
                                                children: [],
                                                value: 'callback2',
                                                params: [],
                                                shielding: true,
                                              },
                                            ],
                                            todoOptions: [
                                              'actionTitle',
                                              'editorCode',
                                            ],
                                            options: {
                                              compId: 'customActionCode',
                                              compName: 'page',
                                              id: '4412927',
                                              pageJsonId: '537892',
                                              code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_18302646;var res=[];var instList=[];console.log(sel);if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){console.log(item+"======"+v.rowId);return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}console.log(res);success()};',
                                            },
                                            actionObjId: 'customActionCode',
                                            actionObjName: 'page',
                                            value: 'customActionCode',
                                            shielding: true,
                                            line_number: 5,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [],
                                        shielding: true,
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 168654926520226020,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                        shielding: true,
                                      },
                                    ],
                                    todoOptions: [
                                      'modalType',
                                      'title',
                                      'content',
                                      'okText',
                                      'cancelText',
                                    ],
                                    options: {
                                      compId: 'showModal',
                                      compName: 'page',
                                      id: '0062955',
                                      pageJsonId: '537892',
                                      type: 'confirm',
                                      title: '温馨提示',
                                      content: '您确定要删除吗?',
                                      okText: '确认',
                                    },
                                    actionObjId: 'showModal',
                                    actionObjName: 'page',
                                    value: 'showModal',
                                    shielding: true,
                                    line_number: 4,
                                  },
                                ],
                                condition: [],
                                value: 'elseIf',
                                shielding: true,
                                callback: [
                                  {
                                    type: 'showModal',
                                    dataId: 168654926520267040,
                                    shielding: true,
                                    options: {
                                      compId: 'showModal',
                                      compName: 'page',
                                      id: '0062955',
                                      pageJsonId: '537892',
                                      type: 'confirm',
                                      title: '温馨提示',
                                      content: '您确定要删除吗?',
                                      okText: '确认',
                                    },
                                    line_number: 4,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 168654926520279260,
                                        shielding: true,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '4412927',
                                          pageJsonId: '537892',
                                          code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_18302646;var res=[];var instList=[];console.log(sel);if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){console.log(item+"======"+v.rowId);return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}console.log(res);success()};',
                                        },
                                        line_number: 5,
                                        callback1: [
                                          {
                                            type: 'setDataSource',
                                            dataId: 168654926520248060,
                                            shielding: true,
                                            options: {
                                              compId: 'setDataSource',
                                              compName: 'page',
                                              id: '2058217',
                                              pageJsonId: '537892',
                                              dataSourceId: 170116363627190560,
                                              dataSourceName: 'instList',
                                              dataSourceRelType: 'custom',
                                              dataSourceSetValue: [
                                                {
                                                  attrId: '608251',
                                                  code: 'setMeal',
                                                  name: '套餐',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '392586',
                                                  code: 'total',
                                                  name: '受理后总条数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '43058',
                                                  code: 'bandwidthUp',
                                                  name: '上行带宽',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '783715',
                                                  code: 'totalBandwidthUp',
                                                  name: '受理后上行带宽总和',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '035665',
                                                  code: 'city',
                                                  name: '地市',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '283233',
                                                  code: 'cityName',
                                                  name: '地市名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '62468',
                                                  code: 'area',
                                                  name: '区县',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '1203095',
                                                  code: 'areaName',
                                                  name: '区县名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '007514',
                                                  code: 'country',
                                                  name: '街道/乡/镇',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '045901',
                                                  code: 'street',
                                                  name: '街/村',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '598604',
                                                  code: 'houseNum',
                                                  name: '号/弄',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '895889',
                                                  code: 'installAddr',
                                                  name: '安装地址',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '1811391',
                                                  code: 'doorplate',
                                                  name: '楼宇/单位',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '805025',
                                                  code: 'floorName',
                                                  name: '单元楼号',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '915269',
                                                  code: 'element',
                                                  name: '层号',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '533551',
                                                  code: 'roomName',
                                                  name: '房间号',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '0054264',
                                                  code: 'busiType',
                                                  name: '业务类型',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '458158',
                                                  code: 'busiTypeName',
                                                  name: '业务类型名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '8650327',
                                                  code: 'currentTimeAcceptTotal',
                                                  name: '本次受理条数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '730632',
                                                  code: 'stockTotal',
                                                  name: '存量条数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '6941186',
                                                  code: 'currentTimeTotalBandwidthUp',
                                                  name: '本次上行带宽总和',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '468285',
                                                  code: 'stockTotalBandwidthUp',
                                                  name: '存量上行带宽总和',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                              ],
                                              operateType: 1,
                                              onlySetPatch: true,
                                              otherObjectArrayOptions: {},
                                              targetDataSourcePaths: [],
                                            },
                                            line_number: 6,
                                            callback1: [],
                                            callback2: [],
                                          },
                                          {
                                            type: 'callParentCustomFunc',
                                            dataId: 168654926520282600,
                                            shielding: true,
                                            options: {
                                              compId: 'callParentCustomFunc',
                                              compName: 'system',
                                              id: '999275',
                                              pageJsonId: '537892',
                                              pathname: '/auditOrderPrepare',
                                              pageId: '884045146848604160',
                                              customFuncName: 'getFactor',
                                              customFuncParams:
                                                '$data.sceneSubmit$',
                                              modalPath: '/auditOrderPrepare',
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
                              },
                            ],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 168654924558098530,
                                shielding: true,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '495988',
                                  pageJsonId: '537892',
                                  type: 'info',
                                  value: '请先选择数据！',
                                },
                                line_number: 3,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatagetTableSelectedKey53.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatagetTableSelectedKey53,
                      { e },
                      'getTableSelectedKey',
                      {
                        id: 'getTableSelectedKey',
                        name: 'getTableSelectedKey',
                        type: 'getTableSelectedKey',
                        platform: 'pc',
                      },
                    );
                    const eventDatagetTableSelectedKey54: any = [
                      {
                        type: 'getTableSelectedKey',
                        dataId: 170131329550383300,
                        options: {
                          compId: 'Table_7846676',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '4788063',
                        },
                        line_number: 8,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '9152338',
                                options: {
                                  context: '$selectedRowKeys_4788063$',
                                  operate: 'empty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                condId: '6181125',
                                condition: [
                                  {
                                    options: {
                                      context: '$selectedRowKeys_4788063$',
                                      operate: 'notEmpty',
                                    },
                                    condId: '0586874',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context:
                                        '$selectedRowKeys_4788063.length$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    condId: '771025',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                connector: '||',
                              },
                            ],
                            dataId: 170131330193895900,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170131330193839000,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170131330193872400,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 170131330193873800,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 170131330193816930,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 17013133019386840,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170131330193828320,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170131330193808960,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170131330193867800,
                                                        children: [],
                                                        value: 'callback2',
                                                        params: [],
                                                      },
                                                    ],
                                                    todoOptions: [
                                                      'selectAllDataSource',
                                                      'dataSourceSetValue',
                                                      'onlySetPatch',
                                                    ],
                                                    options: {
                                                      compId: 'setDataSource',
                                                      compName: 'page',
                                                      id: '9541562',
                                                      pageJsonId: '537892',
                                                      dataSourceId: 170116363627190560,
                                                      dataSourceName:
                                                        'instList',
                                                      dataSourceRelType:
                                                        'custom',
                                                      dataSourceSetValue: [
                                                        {
                                                          attrId: '608251',
                                                          code: 'setMeal',
                                                          name: '套餐',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '392586',
                                                          code: 'total',
                                                          name: '受理后总条数',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '43058',
                                                          code: 'bandwidthUp',
                                                          name: '上行带宽',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '783715',
                                                          code: 'totalBandwidthUp',
                                                          name: '受理后上行带宽总和',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '035665',
                                                          code: 'city',
                                                          name: '地市',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '283233',
                                                          code: 'cityName',
                                                          name: '地市名称',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '62468',
                                                          code: 'area',
                                                          name: '区县',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '1203095',
                                                          code: 'areaName',
                                                          name: '区县名称',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '007514',
                                                          code: 'country',
                                                          name: '街道/乡/镇',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '045901',
                                                          code: 'street',
                                                          name: '街/村',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '598604',
                                                          code: 'houseNum',
                                                          name: '号/弄',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '895889',
                                                          code: 'installAddr',
                                                          name: '安装地址',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '1811391',
                                                          code: 'doorplate',
                                                          name: '楼宇/单位',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '805025',
                                                          code: 'floorName',
                                                          name: '单元楼号',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '915269',
                                                          code: 'element',
                                                          name: '层号',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '533551',
                                                          code: 'roomName',
                                                          name: '房间号',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '0054264',
                                                          code: 'busiType',
                                                          name: '业务类型',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '458158',
                                                          code: 'busiTypeName',
                                                          name: '业务类型名称',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '8650327',
                                                          code: 'currentTimeAcceptTotal',
                                                          name: '本次受理条数',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '730632',
                                                          code: 'stockTotal',
                                                          name: '存量条数',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '6941186',
                                                          code: 'currentTimeTotalBandwidthUp',
                                                          name: '本次上行带宽总和',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                        {
                                                          attrId: '468285',
                                                          code: 'stockTotalBandwidthUp',
                                                          name: '存量上行带宽总和',
                                                          type: 'string',
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          showInput: false,
                                                        },
                                                      ],
                                                      operateType: 1,
                                                      onlySetPatch: true,
                                                      otherObjectArrayOptions:
                                                        {},
                                                      targetDataSourcePaths: [],
                                                    },
                                                    actionObjId:
                                                      'setDataSource',
                                                    actionObjName: 'page',
                                                    value: 'setDataSource',
                                                    line_number: 13,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170131330193866180,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170131330193857150,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170131330193845660,
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
                                                        'callParentCustomFunc',
                                                      compName: 'system',
                                                      id: '288747',
                                                      pageJsonId: '537892',
                                                      pathname:
                                                        '/auditOrderPrepare',
                                                      pageId:
                                                        '884045146848604160',
                                                      customFuncName:
                                                        'getFactor',
                                                      customFuncParams:
                                                        '$data.sceneSubmit$',
                                                      modalPath:
                                                        '/auditOrderPrepare',
                                                    },
                                                    actionObjId:
                                                      'callParentCustomFunc',
                                                    actionObjName: 'system',
                                                    value:
                                                      'callParentCustomFunc',
                                                    line_number: 14,
                                                  },
                                                ],
                                                value: 'callback1',
                                                params: [],
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 170131330193871040,
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
                                              id: '8644385',
                                              pageJsonId: '537892',
                                              code: 'function main(data,state,success,fail){var feeInfo=data.instList;var sel=selectedRowKeys_4788063;var res=[];var instList=[];console.log(sel);if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){console.log(item+"======"+v.rowId);return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.instList=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}console.log(res);success()};',
                                            },
                                            actionObjId: 'customActionCode',
                                            actionObjName: 'page',
                                            value: 'customActionCode',
                                            line_number: 12,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 170131350381157820,
                                            children: [],
                                            todoOptions: ['valueArray'],
                                            options: {
                                              compId: 'debug',
                                              compName: 'system',
                                              id: '166444',
                                              pageJsonId: '537892',
                                              value: [
                                                '删除完之后的sceneSubmit',
                                                '$data.sceneSubmit$',
                                              ],
                                            },
                                            actionObjId: 'debug',
                                            actionObjName: 'system',
                                            value: 'console',
                                            line_number: 15,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 170131330193895460,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                      },
                                    ],
                                    todoOptions: [
                                      'modalType',
                                      'title',
                                      'content',
                                      'okText',
                                      'cancelText',
                                    ],
                                    options: {
                                      compId: 'showModal',
                                      compName: 'page',
                                      id: '838681',
                                      pageJsonId: '537892',
                                      type: 'confirm',
                                      title: '温馨提示',
                                      content: '您确定要删除吗?',
                                      okText: '确认',
                                    },
                                    actionObjId: 'showModal',
                                    actionObjName: 'page',
                                    value: 'showModal',
                                    line_number: 11,
                                  },
                                ],
                                condition: [],
                                value: 'elseIf',
                                callback: [
                                  {
                                    type: 'showModal',
                                    dataId: 170131330193872400,
                                    options: {
                                      compId: 'showModal',
                                      compName: 'page',
                                      id: '838681',
                                      pageJsonId: '537892',
                                      type: 'confirm',
                                      title: '温馨提示',
                                      content: '您确定要删除吗?',
                                      okText: '确认',
                                    },
                                    line_number: 11,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 170131330193816930,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '8644385',
                                          pageJsonId: '537892',
                                          code: 'function main(data,state,success,fail){var feeInfo=data.instList;var sel=selectedRowKeys_4788063;var res=[];var instList=[];console.log(sel);if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){console.log(item+"======"+v.rowId);return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.instList=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}console.log(res);success()};',
                                        },
                                        line_number: 12,
                                        callback1: [
                                          {
                                            type: 'setDataSource',
                                            dataId: 170131330193828320,
                                            options: {
                                              compId: 'setDataSource',
                                              compName: 'page',
                                              id: '9541562',
                                              pageJsonId: '537892',
                                              dataSourceId: 170116363627190560,
                                              dataSourceName: 'instList',
                                              dataSourceRelType: 'custom',
                                              dataSourceSetValue: [
                                                {
                                                  attrId: '608251',
                                                  code: 'setMeal',
                                                  name: '套餐',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '392586',
                                                  code: 'total',
                                                  name: '受理后总条数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '43058',
                                                  code: 'bandwidthUp',
                                                  name: '上行带宽',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '783715',
                                                  code: 'totalBandwidthUp',
                                                  name: '受理后上行带宽总和',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '035665',
                                                  code: 'city',
                                                  name: '地市',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '283233',
                                                  code: 'cityName',
                                                  name: '地市名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '62468',
                                                  code: 'area',
                                                  name: '区县',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '1203095',
                                                  code: 'areaName',
                                                  name: '区县名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '007514',
                                                  code: 'country',
                                                  name: '街道/乡/镇',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '045901',
                                                  code: 'street',
                                                  name: '街/村',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '598604',
                                                  code: 'houseNum',
                                                  name: '号/弄',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '895889',
                                                  code: 'installAddr',
                                                  name: '安装地址',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '1811391',
                                                  code: 'doorplate',
                                                  name: '楼宇/单位',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '805025',
                                                  code: 'floorName',
                                                  name: '单元楼号',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '915269',
                                                  code: 'element',
                                                  name: '层号',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '533551',
                                                  code: 'roomName',
                                                  name: '房间号',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '0054264',
                                                  code: 'busiType',
                                                  name: '业务类型',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '458158',
                                                  code: 'busiTypeName',
                                                  name: '业务类型名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '8650327',
                                                  code: 'currentTimeAcceptTotal',
                                                  name: '本次受理条数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '730632',
                                                  code: 'stockTotal',
                                                  name: '存量条数',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '6941186',
                                                  code: 'currentTimeTotalBandwidthUp',
                                                  name: '本次上行带宽总和',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                },
                                                {
                                                  attrId: '468285',
                                                  code: 'stockTotalBandwidthUp',
                                                  name: '存量上行带宽总和',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
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
                                            type: 'callParentCustomFunc',
                                            dataId: 170131330193866180,
                                            options: {
                                              compId: 'callParentCustomFunc',
                                              compName: 'system',
                                              id: '288747',
                                              pageJsonId: '537892',
                                              pathname: '/auditOrderPrepare',
                                              pageId: '884045146848604160',
                                              customFuncName: 'getFactor',
                                              customFuncParams:
                                                '$data.sceneSubmit$',
                                              modalPath: '/auditOrderPrepare',
                                            },
                                            line_number: 14,
                                            callback1: [],
                                            callback2: [],
                                          },
                                        ],
                                        callback2: [],
                                      },
                                      {
                                        type: 'console',
                                        dataId: 170131350381157820,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '166444',
                                          pageJsonId: '537892',
                                          value: [
                                            '删除完之后的sceneSubmit',
                                            '$data.sceneSubmit$',
                                          ],
                                        },
                                        line_number: 15,
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 9,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 170131330193884350,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '944896',
                                  pageJsonId: '537892',
                                  type: 'info',
                                  value: '请先选择数据！',
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatagetTableSelectedKey54.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatagetTableSelectedKey54,
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
                  ref={(r: any) => (refs['Button_029776'] = r)}
                  {...injectData}
                />
              </Row>
            </View>
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_39819',
                uid: 'View_39819',
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
                height: '100%',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_39819'] = r)}
              {...injectData}
            >
              <Table
                name={'表格'}
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
                    key: 'busiTypeName',
                    dataIndex: 'busiTypeName',
                    className: '',
                    id: '815836',
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
                    title: '安装地址',
                    key: 'installAddr',
                    dataIndex: 'installAddr',
                    className: 'divider',
                    id: '0986738',
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
                    id: '5411166',
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
                    title: '受理后上行带宽总和',
                    key: 'totalBandwidthUp',
                    dataIndex: 'totalBandwidthUp',
                    className: 'divider',
                    id: '326729',
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
                    title: '本次受理条数',
                    key: 'currentTimeAcceptTotal',
                    dataIndex: 'currentTimeAcceptTotal',
                    className: 'divider',
                    id: '633955',
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
                    title: '本次上行带宽总和',
                    key: 'currentTimeTotalBandwidthUp',
                    dataIndex: 'currentTimeTotalBandwidthUp',
                    className: 'divider',
                    id: '6307606',
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
                    title: '存量条数',
                    key: 'stockTotal',
                    dataIndex: 'stockTotal',
                    className: 'divider',
                    id: '277837',
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
                    title: '存量上行带宽总和',
                    key: 'stockTotalBandwidthUp',
                    dataIndex: 'stockTotalBandwidthUp',
                    className: 'divider',
                    id: '277232',
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
                rowSelection={{ type: 'checkbox' }}
                showHead={false}
                showTotal={false}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                dataSource={data?.instList}
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '756502',
                    isIcon: false,
                    checked: true,
                  },
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '584845',
                    checked: true,
                  },
                ]}
                extend={[]}
                rowKey={'rowId'}
                dataSourceFromDataSourceConfig={'data.instList'}
                $$componentItem={{
                  id: 'Table_7846676',
                  uid: 'Table_7846676',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal160: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 170131126335141820,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '7253494',
                        pageJsonId: '537892',
                        modalname: '/networkAcrossProvincecopycopynew',
                        pageId: '1046978235419439104',
                        modalPath: '/networkAcrossProvincecopycopynew',
                        paramsObj: {
                          feeInfo: '$row$',
                          popType: 'view',
                          catalogCode: '$state.catalogCode$',
                        },
                        paramsObjKeyValueMap: {
                          feeInfo: '$row$',
                          popType: 'view',
                          catalogCode: '$state.catalogCode$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal160.params =
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
                    eventDatashowCustomModal160,
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
                  const eventDatashowCustomModal161: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 170131243960134500,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '673939',
                        pageJsonId: '537892',
                        modalname: '/networkAcrossProvincecopycopynew',
                        pageId: '1046978235419439104',
                        modalPath: '/networkAcrossProvincecopycopynew',
                        paramsObj: {
                          feeInfo: '$row$',
                          popType: 'edit',
                          catalogCode: '$state.catalogCode$',
                        },
                        paramsObjKeyValueMap: {
                          feeInfo: '$row$',
                          popType: 'edit',
                          catalogCode: '$state.catalogCode$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 170131245706545380,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '3707655',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.instList=data.instList.filter(function(v){return v.rowId!=okData_673939.rowId});data.instList.push(okData_673939);var instList=[];for(var key in okData_673939){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_673939[key]})}}var instObj={"instCode":okData_673939.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_673939.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 170131245706585540,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '5360524',
                                pageJsonId: '537892',
                                dataSourceId: 170116363627190560,
                                dataSourceName: 'instList',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '608251',
                                    code: 'setMeal',
                                    name: '套餐',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '392586',
                                    code: 'total',
                                    name: '受理后总条数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '43058',
                                    code: 'bandwidthUp',
                                    name: '上行带宽',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '783715',
                                    code: 'totalBandwidthUp',
                                    name: '受理后上行带宽总和',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '035665',
                                    code: 'city',
                                    name: '地市',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '283233',
                                    code: 'cityName',
                                    name: '地市名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '62468',
                                    code: 'area',
                                    name: '区县',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '1203095',
                                    code: 'areaName',
                                    name: '区县名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '007514',
                                    code: 'country',
                                    name: '街道/乡/镇',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '045901',
                                    code: 'street',
                                    name: '街/村',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '598604',
                                    code: 'houseNum',
                                    name: '号/弄',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '895889',
                                    code: 'installAddr',
                                    name: '安装地址',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '1811391',
                                    code: 'doorplate',
                                    name: '楼宇/单位',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '805025',
                                    code: 'floorName',
                                    name: '单元楼号',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '915269',
                                    code: 'element',
                                    name: '层号',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '533551',
                                    code: 'roomName',
                                    name: '房间号',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '0054264',
                                    code: 'busiType',
                                    name: '业务类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '458158',
                                    code: 'busiTypeName',
                                    name: '业务类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '8650327',
                                    code: 'currentTimeAcceptTotal',
                                    name: '本次受理条数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '730632',
                                    code: 'stockTotal',
                                    name: '存量条数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '6941186',
                                    code: 'currentTimeTotalBandwidthUp',
                                    name: '本次上行带宽总和',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                  {
                                    attrId: '468285',
                                    code: 'stockTotalBandwidthUp',
                                    name: '存量上行带宽总和',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callParentCustomFunc',
                              dataId: 170131245706581380,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '342838',
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
                  eventDatashowCustomModal161.params =
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
                    eventDatashowCustomModal161,
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
                ref={(r: any) => (refs['Table_7846676'] = r)}
                {...injectData}
              />
            </View>
          </VerticalView>
          <Table
            name={'表格'}
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
                key: 'busiTypeName',
                dataIndex: 'busiTypeName',
                className: '',
                id: '815836',
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
                title: '安装地址',
                key: 'installAddr',
                dataIndex: 'installAddr',
                className: 'divider',
                id: '0986738',
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
                id: '5411166',
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
                title: '受理后上行带宽总和',
                key: 'totalBandwidthUp',
                dataIndex: 'totalBandwidthUp',
                className: 'divider',
                id: '326729',
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
                title: '本次受理条数',
                key: 'currentTimeAcceptTotal',
                dataIndex: 'currentTimeAcceptTotal',
                className: 'divider',
                id: '633955',
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
                title: '本次上行带宽总和',
                key: 'currentTimeTotalBandwidthUp',
                dataIndex: 'currentTimeTotalBandwidthUp',
                className: 'divider',
                id: '6307606',
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
                title: '存量条数',
                key: 'stockTotal',
                dataIndex: 'stockTotal',
                className: 'divider',
                id: '277837',
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
                title: '存量上行带宽总和',
                key: 'stockTotalBandwidthUp',
                dataIndex: 'stockTotalBandwidthUp',
                className: 'divider',
                id: '277232',
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
            customNum={3}
            dataSource={data?.instList}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '756502',
                isIcon: false,
                checked: true,
              },
            ]}
            extend={[]}
            rowKey={'rowId'}
            dataSourceFromDataSourceConfig={'data.instList'}
            $$componentItem={{
              id: 'Table_477379',
              uid: 'Table_477379',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal162: any = [
                {
                  type: 'showCustomModal',
                  dataId: 170131126335141820,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '7253494',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvincecopycopynew',
                    pageId: '1046978235419439104',
                    modalPath: '/networkAcrossProvincecopycopynew',
                    paramsObj: {
                      feeInfo: '$row$',
                      popType: 'view',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      popType: 'view',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal162.params =
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
                eventDatashowCustomModal162,
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
              const eventDatashowCustomModal163: any = [
                {
                  type: 'showCustomModal',
                  dataId: 170131243960134500,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '673939',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvincecopycopynew',
                    pageId: '1046978235419439104',
                    modalPath: '/networkAcrossProvincecopycopynew',
                    paramsObj: {
                      feeInfo: '$row$',
                      popType: 'edit',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      popType: 'edit',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 170131245706545380,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '3707655',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.instList=data.instList.filter(function(v){return v.rowId!=okData_673939.rowId});data.instList.push(okData_673939);var instList=[];for(var key in okData_673939){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_673939[key]})}}var instObj={"instCode":okData_673939.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_673939.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 170131245706585540,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '5360524',
                            pageJsonId: '537892',
                            dataSourceId: 170116363627190560,
                            dataSourceName: 'instList',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                attrId: '608251',
                                code: 'setMeal',
                                name: '套餐',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '392586',
                                code: 'total',
                                name: '受理后总条数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '43058',
                                code: 'bandwidthUp',
                                name: '上行带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '783715',
                                code: 'totalBandwidthUp',
                                name: '受理后上行带宽总和',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '035665',
                                code: 'city',
                                name: '地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '283233',
                                code: 'cityName',
                                name: '地市名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '62468',
                                code: 'area',
                                name: '区县',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '1203095',
                                code: 'areaName',
                                name: '区县名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '007514',
                                code: 'country',
                                name: '街道/乡/镇',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '045901',
                                code: 'street',
                                name: '街/村',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '598604',
                                code: 'houseNum',
                                name: '号/弄',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '895889',
                                code: 'installAddr',
                                name: '安装地址',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '1811391',
                                code: 'doorplate',
                                name: '楼宇/单位',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '805025',
                                code: 'floorName',
                                name: '单元楼号',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '915269',
                                code: 'element',
                                name: '层号',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '533551',
                                code: 'roomName',
                                name: '房间号',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '0054264',
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '458158',
                                code: 'busiTypeName',
                                name: '业务类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '8650327',
                                code: 'currentTimeAcceptTotal',
                                name: '本次受理条数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '730632',
                                code: 'stockTotal',
                                name: '存量条数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '6941186',
                                code: 'currentTimeTotalBandwidthUp',
                                name: '本次上行带宽总和',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '468285',
                                code: 'stockTotalBandwidthUp',
                                name: '存量上行带宽总和',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callParentCustomFunc',
                          dataId: 170131245706581380,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '342838',
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
              eventDatashowCustomModal163.params =
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
                eventDatashowCustomModal163,
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
            ref={(r: any) => (refs['Table_477379'] = r)}
            {...injectData}
          />
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
                    const eventDatagetSelectedData244: any = [
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
                    eventDatagetSelectedData244.params =
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
                      eventDatagetSelectedData244,
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
                    const eventDatacustomActionCode541: any = [
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
                    eventDatacustomActionCode541.params =
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
                      eventDatacustomActionCode541,
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
              const eventDatacustomActionCode542: any = [
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
              eventDatacustomActionCode542.params =
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
                eventDatacustomActionCode542,
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
              const eventDatadownloadByFileId47: any = [
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
              eventDatadownloadByFileId47.params =
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
                eventDatadownloadByFileId47,
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

export default withPageHOC(ClsCp_0007_0003$$Page, {
  pageId: '1046251530979487744',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
