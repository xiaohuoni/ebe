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
  Select,
  Button,
  Table,
  TextArea,
  Row,
  StdUpload,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '978861351187705856';
const ClsCp_0007_0004$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1664475: any) => {
    const eventDatacustomActionCode99: any = [
      {
        type: 'customActionCode',
        dataId: 167288416708159500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '83521017',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_1664475;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167288417960832540,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '8382416',
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
    eventDatacustomActionCode99.params =
      [
        {
          title: '事件入参',
          name: 'options_1664475',
          value: '$options_1664475$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode99,
      { options_1664475 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const updateProdList = (options_279476: any) => {
    const eventDatacustomActionCode100: any = [
      {
        type: 'customActionCode',
        dataId: 168568738652313700,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '4860554',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var prodList=options_279476.prodList;var instList=[];for(var i=0;i<prodList.length;i++){var obj={};var list=[];for(var key in prodList[i]){if(key==="rowId"){obj.instCode=prodList[i][key]}else{list.push({"attrCode":key,"attrName":"","attrValue":prodList[i][key]})}}obj.instAttrList=list;instList.push(obj)}data.sceneSubmit.instList=instList;success(instList)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168568818242953380,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '931117',
              pageJsonId: '537892',
              pathname: '/auditOrderPrepare',
              pageId: '884045146848604160',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
              modalPath: '/auditOrderPrepare',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 168569168905807740,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '040522',
                  pageJsonId: '537892',
                  dataSourceId: 168568547760017760,
                  dataSourceName: 'prodList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '149906',
                      code: 'productName',
                      name: '产品',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '459557',
                      code: 'count',
                      name: '条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '7004187',
                      code: 'depositReceived',
                      name: '安装费实收（元/条）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '121493',
                      code: 'actualPaymentOfInstallationFee',
                      name: '保证金实收（元/条）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '456373',
                      code: 'contractPeriod',
                      name: '合约期（月）',
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
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode100.params =
      [
        {
          title: '事件入参',
          name: 'options_279476',
          value: '$options_279476$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode100,
      { options_279476 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    ); // console 168569144128377800
    console.log('产品列表信息：', options_279476);
  };
  const calTotalNum = (options_189457: any) => {
    const eventDatacustomActionCode101: any = [
      {
        type: 'customActionCode',
        dataId: 168569863229560700,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '173687',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var bandNum=0;var tvNum=0;var prodList=options_189457.prodList;for(var i=0;i<prodList.length;i++){if(prodList[i]["productName"]==1001){bandNum+=parseInt(prodList[i]["count"])}else if(prodList[i]["productName"]==1002){tvNum+=parseInt(prodList[i]["count"])}}success({bandNum:bandNum,tvNum:tvNum})};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168569890118026900,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '245714',
              pageJsonId: '537892',
              dataSourceId: 167110507843814850,
              dataSourceName: 'factorForm',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '981789',
                  code: 'reason',
                  name: '申请原因',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '148281',
                  code: 'belongingCity',
                  name: '归属地市',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '90974',
                  code: 'marketingEfficiencyRatio',
                  name: '营销效益比',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '498022',
                  code: 'priceOfEnterpriseInstallationFee',
                  name: '企宽安装费目录价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '2937934',
                  code: 'priceOfEnterpriseDeposit',
                  name: '企宽保证金目录价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '3330296',
                  code: 'totalNumberOfEnterpriseBroadband',
                  name: '企宽总条数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_173687$'],
                    code: 'bandNum',
                  },
                },
                {
                  attrId: '9534704',
                  code: 'internetTVInstallationFeePrice',
                  name: '互联网电视安装费目录价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '157223',
                  code: 'internetTVMarginPrice',
                  name: '互联网电视保证金目录价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '373452',
                  code: 'totalNumberOfInternetTV',
                  name: '互联网电视总条数',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: { type: ['context', '$data_173687$'], code: 'tvNum' },
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
                type: 'callSelfFunc',
                dataId: 170192981375032700,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '2533516',
                  pageJsonId: '537892',
                  customFuncName: 'calDifference',
                  customFuncParams: 'object',
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
    eventDatacustomActionCode101.params =
      [
        {
          title: '事件入参',
          name: 'options_189457',
          value: '$options_189457$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode101,
      { options_189457 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const calDifference = (options_365285: any) => {
    const eventDatagetValue66: any = [
      {
        type: 'getValue',
        dataId: 170192922258432060,
        options: {
          compId: 'Input_totalNumberOfInternetTV_678625',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '998425',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170192922953548450,
            options: {
              compId: 'Input_totalNumberOfEnterpriseBroadband_47517',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '681138',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170193195972922750,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '989105',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var bandwidthNum=value_681138;var tvNum=value_998425;var prodList=data.prodList;var tvTotal=prodList.reduce(function(total,item){if(item["productName"]==1002){return total+item["count"]*item["actualPaymentOfInstallationFee"]}return total},0);var tvBandDifference=(tvNum-bandwidthNum)*100-tvTotal;data.factorForm.tvBandDifference=tvBandDifference;success(tvBandDifference)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 170193195972910900,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '972494',
                      pageJsonId: '537892',
                      dataSourceId: 167110507843814850,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '981789',
                          code: 'reason',
                          name: '申请原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '148281',
                          code: 'belongingCity',
                          name: '归属地市',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '90974',
                          code: 'marketingEfficiencyRatio',
                          name: '营销效益比',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '498022',
                          code: 'priceOfEnterpriseInstallationFee',
                          name: '企宽安装费目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '2937934',
                          code: 'priceOfEnterpriseDeposit',
                          name: '企宽保证金目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '3330296',
                          code: 'totalNumberOfEnterpriseBroadband',
                          name: '企宽总条数',
                          type: 'string',
                          initialData: { type: 'static', value: '0' },
                          showInput: true,
                        },
                        {
                          attrId: '9534704',
                          code: 'internetTVInstallationFeePrice',
                          name: '互联网电视安装费目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '157223',
                          code: 'internetTVMarginPrice',
                          name: '互联网电视保证金目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '373452',
                          code: 'totalNumberOfInternetTV',
                          name: '互联网电视总条数',
                          type: 'string',
                          initialData: { type: 'static', value: '0' },
                          showInput: true,
                        },
                        {
                          attrId: '240031',
                          code: 'tvBandDifference',
                          name: '((互联网电视总条数-企宽总条数)*100) - 互联网电视总安装费',
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
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue66.params =
      [
        {
          title: '事件入参',
          name: 'options_365285',
          value: '$options_365285$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue66, { options_365285 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
    updateProdList,
    calTotalNum,
    calDifference,
  }));

  useEffect(() => {
    // console 170048193288716640
    console.log('state = ', state?.zoneCode);
    const eventDataapiRequest298: any = [
      {
        type: 'apiRequest',
        dataId: 166972730483911740,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '28454',
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
              dataKey: '088178_path',
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
              dataKey: '088178_query',
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
                  dataKey: '088178_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '088178_body',
              key: '3',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166972730815123000,
            options: {
              compId: 'Input_690228_5400337',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '234832',
              data: '$reply_28454?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValueCode',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest298.params = [] || [];
    CMDGenerator(eventDataapiRequest298, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest299: any = [
      {
        type: 'apiRequest',
        dataId: 16856760230016580,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '821823',
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
                      dataKey: '821823_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
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
                      dataKey: '821823_root.body.attrCode',
                      value: { type: ['customize'], code: 'belongingCity' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '821823_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '821823_root',
              _deletable: true,
            },
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168567608443895700,
            options: {
              compId: 'Select_1677317',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '121651',
              data: '$reply_821823?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest299.params = [] || [];
    CMDGenerator(eventDataapiRequest299, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest300: any = [
      {
        type: 'apiRequest',
        dataId: 168569207274029020,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '660975',
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
                      dataKey: '660975_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
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
                      dataKey: '660975_root.body.attrCode',
                      value: { type: ['customize'], code: 'productName' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '660975_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '660975_root',
              _deletable: true,
            },
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 6,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 168569211908078900,
            options: {
              compId: 'Table_37532',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Table',
              id: '0902658',
              colName: 'productName',
              data: '$reply_660975?.resultData$',
            },
            line_number: 7,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest300.params = [] || [];
    CMDGenerator(eventDataapiRequest300, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest301: any = [
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
        line_number: 8,
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
                  attrId: '9061844',
                  code: 'customObject',
                  name: '属性',
                  type: 'object',
                  initialData: { type: 'static' },
                  children: [
                    {
                      attrId: '659635',
                      code: 'band',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      parentKey: 'customObject',
                    },
                    {
                      attrId: '220409',
                      code: 'tv',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      parentKey: 'customObject',
                    },
                  ],
                },
                {
                  attrId: '165167',
                  code: 'instList',
                  name: '属性',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 9,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444056411337440,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '335573',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/auditOrderPrepare',
                },
                line_number: 10,
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
    eventDataapiRequest301.params = [] || [];
    CMDGenerator(eventDataapiRequest301, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse160: any = [
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
            dataId: 168570065555545440,
            children: [
              {
                dataName: 'action',
                dataId: 168570066090079260,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 168570066090054620,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 168570066090073150,
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
                  id: '1081854',
                  pageJsonId: '537892',
                  dataSourceId: 167110507843814850,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '981789',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '148281',
                      code: 'belongingCity',
                      name: '归属地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '90974',
                      code: 'marketingEfficiencyRatio',
                      name: '营销效益比',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '498022',
                      code: 'priceOfEnterpriseInstallationFee',
                      name: '企宽安装费目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '2937934',
                      code: 'priceOfEnterpriseDeposit',
                      name: '企宽保证金目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '3330296',
                      code: 'totalNumberOfEnterpriseBroadband',
                      name: '企宽总条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '9534704',
                      code: 'internetTVInstallationFeePrice',
                      name: '互联网电视安装费目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '157223',
                      code: 'internetTVMarginPrice',
                      name: '互联网电视保证金目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '373452',
                      code: 'totalNumberOfInternetTV',
                      name: '互联网电视总条数',
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
                actionObjId: 'setDataSource',
                actionObjName: 'page',
                value: 'setDataSource',
                line_number: 26,
              },
              {
                dataName: 'action',
                dataId: 168594464001671780,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 168594464001694720,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168594464001670850,
                        children: [],
                        todoOptions: ['valueArray'],
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '04811',
                          pageJsonId: '537892',
                          value: [
                            '查询的BAND_TV_PRICE：',
                            '$reply_223411?.resultData$',
                          ],
                        },
                        actionObjId: 'debug',
                        actionObjName: 'system',
                        value: 'console',
                        line_number: 28,
                      },
                      {
                        dataName: 'action',
                        dataId: 168594464001663580,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168594464001646720,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168594609039443900,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 168594609039458400,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 168594609039442300,
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
                                  id: '70441836',
                                  pageJsonId: '537892',
                                  dataSourceId: 167110507843814850,
                                  dataSourceName: 'factorForm',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
                                    {
                                      attrId: '981789',
                                      code: 'reason',
                                      name: '申请原因',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '148281',
                                      code: 'belongingCity',
                                      name: '归属地市',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                      value: {
                                        type: ['context', '$data_5204057$'],
                                        code: 'landCode',
                                      },
                                    },
                                    {
                                      attrId: '90974',
                                      code: 'marketingEfficiencyRatio',
                                      name: '营销效益比',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '498022',
                                      code: 'priceOfEnterpriseInstallationFee',
                                      name: '企宽安装费目录价',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                      value: {
                                        type: ['context', '$data_5204057$'],
                                        code: 'priceOfEnterpriseInstallationFee',
                                      },
                                    },
                                    {
                                      attrId: '2937934',
                                      code: 'priceOfEnterpriseDeposit',
                                      name: '企宽保证金目录价',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                      value: {
                                        type: ['context', '$data_5204057$'],
                                        code: 'priceOfEnterpriseDeposit',
                                      },
                                    },
                                    {
                                      attrId: '3330296',
                                      code: 'totalNumberOfEnterpriseBroadband',
                                      name: '企宽总条数',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '9534704',
                                      code: 'internetTVInstallationFeePrice',
                                      name: '互联网电视安装费目录价',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                      value: {
                                        type: ['context', '$data_5204057$'],
                                        code: 'internetTVInstallationFeePrice',
                                      },
                                    },
                                    {
                                      attrId: '157223',
                                      code: 'internetTVMarginPrice',
                                      name: '互联网电视保证金目录价',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                      value: {
                                        type: ['context', '$data_5204057$'],
                                        code: 'internetTVMarginPrice',
                                      },
                                    },
                                    {
                                      attrId: '373452',
                                      code: 'totalNumberOfInternetTV',
                                      name: '互联网电视总条数',
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
                                actionObjId: 'setDataSource',
                                actionObjName: 'page',
                                value: 'setDataSource',
                                line_number: 30,
                              },
                              {
                                dataName: 'condition',
                                dataId: 168594649724328500,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168594656679618200,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: [
                                        'Input_marketingEfficiencyRatio_299703',
                                      ],
                                      compName: 'page',
                                      id: '793069',
                                      pageJsonId: '537892',
                                      required: 'true',
                                      compid: [
                                        'Input_marketingEfficiencyRatio_299703',
                                      ],
                                    },
                                    actionObjId: 'sysSetRequired',
                                    actionObjName: 'page',
                                    value: 'sysSetRequired',
                                    line_number: 32,
                                  },
                                ],
                                elseIfs: [],
                                condition: [
                                  {
                                    condId: '272096',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$data_5204057.landCode$',
                                      operate: '==',
                                      manualValue: '598',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                value: 'condition',
                                desc: '如果归属地是三明',
                                line_number: 31,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 168594464001666050,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168672297237441540,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 168672297237456540,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 168672297237444320,
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
                                  id: '5465824',
                                  pageJsonId: '537892',
                                  dataSourceId: 167110507843814850,
                                  dataSourceName: 'factorForm',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
                                    {
                                      attrId: '981789',
                                      code: 'reason',
                                      name: '申请原因',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '148281',
                                      code: 'belongingCity',
                                      name: '归属地市',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                      value: {
                                        type: ['customize'],
                                        code: '590',
                                      },
                                    },
                                    {
                                      attrId: '90974',
                                      code: 'marketingEfficiencyRatio',
                                      name: '营销效益比',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '498022',
                                      code: 'priceOfEnterpriseInstallationFee',
                                      name: '企宽安装费目录价',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '2937934',
                                      code: 'priceOfEnterpriseDeposit',
                                      name: '企宽保证金目录价',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '3330296',
                                      code: 'totalNumberOfEnterpriseBroadband',
                                      name: '企宽总条数',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '0',
                                      },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '9534704',
                                      code: 'internetTVInstallationFeePrice',
                                      name: '互联网电视安装费目录价',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '157223',
                                      code: 'internetTVMarginPrice',
                                      name: '互联网电视保证金目录价',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '373452',
                                      code: 'totalNumberOfInternetTV',
                                      name: '互联网电视总条数',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '0',
                                      },
                                      showInput: true,
                                    },
                                  ],
                                  operateType: 1,
                                  onlySetPatch: true,
                                  otherObjectArrayOptions: {},
                                  targetDataSourcePaths: [],
                                },
                                actionObjId: 'setDataSource',
                                actionObjName: 'page',
                                value: 'setDataSource',
                                line_number: 33,
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
                          id: '5204057',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var _reply_;var priceList=(_reply_=reply_223411)===null||_reply_===void 0?void 0:_reply_.resultData;var landCode=state.zoneCode;console.log("priceList = ",priceList);var list=[];if(!!landCode){list=priceList.filter(function(item){return item.attrValue==landCode})}else{landCode="590";list=priceList.filter(function(item){return item.attrValue=="591"})}console.log("list = ",list);if(list.length>0){var value=JSON.parse(list[0]["attrValueDesc"]);console.log("\\u89E3\\u6790\\u51FA\\u7684value = ",value);success({priceOfEnterpriseInstallationFee:value.priceOfEnterpriseInstallationFee,priceOfEnterpriseDeposit:value.priceOfEnterpriseDeposit,internetTVInstallationFeePrice:value.internetTVInstallationFeePrice,internetTVMarginPrice:value.internetTVMarginPrice,landCode:landCode})}};',
                        },
                        actionObjId: 'customActionCode',
                        actionObjName: 'page',
                        value: 'customActionCode',
                        tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                        line_number: 29,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 168594464001611620,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '223411',
                  pageJsonId: '537892',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryAttrValueList',
                  _apiCode: 'qryAttrValueList',
                  _source: 'rhin',
                  _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
                  _serviceId: '878820809863368704',
                  _serviceTitle:
                    '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
                          dataKey: '112907_root.header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          children: [
                            {
                              code: 'attrCode',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'T',
                              defaultValue: '',
                              _id: 'root.path.attrCode',
                              compType: 'Input',
                              parents: ['root', 'path'],
                              parentType: 'object',
                              parentKey: '0-1',
                              key: '0-1-0',
                              id: 'root.path.attrCode',
                              dataKey: '112907_root.path.attrCode',
                              value: {
                                type: ['customize'],
                                code: 'BAND_TV_PRICE',
                              },
                            },
                          ],
                          _id: 'root.path',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-1',
                          id: 'root.path',
                          dataKey: '112907_root.path',
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
                          dataKey: '112907_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                          id: 'root.body',
                          dataKey: '112907_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '112907_root',
                    },
                  ],
                },
                actionObjId: 'apiRequest',
                actionObjName: 'system',
                value: 'apiRequest',
                line_number: 27,
              },
            ],
            condition: [],
            value: 'elseIf',
            callback: [
              {
                type: 'setDataSource',
                dataId: 168570066090079260,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '1081854',
                  pageJsonId: '537892',
                  dataSourceId: 167110507843814850,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '981789',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '148281',
                      code: 'belongingCity',
                      name: '归属地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '90974',
                      code: 'marketingEfficiencyRatio',
                      name: '营销效益比',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '498022',
                      code: 'priceOfEnterpriseInstallationFee',
                      name: '企宽安装费目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '2937934',
                      code: 'priceOfEnterpriseDeposit',
                      name: '企宽保证金目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '3330296',
                      code: 'totalNumberOfEnterpriseBroadband',
                      name: '企宽总条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '9534704',
                      code: 'internetTVInstallationFeePrice',
                      name: '互联网电视安装费目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '157223',
                      code: 'internetTVMarginPrice',
                      name: '互联网电视保证金目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '373452',
                      code: 'totalNumberOfInternetTV',
                      name: '互联网电视总条数',
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
                line_number: 26,
                callback1: [],
                callback2: [],
              },
              {
                type: 'apiRequest',
                dataId: 168594464001671780,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '223411',
                  pageJsonId: '537892',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryAttrValueList',
                  _apiCode: 'qryAttrValueList',
                  _source: 'rhin',
                  _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
                  _serviceId: '878820809863368704',
                  _serviceTitle:
                    '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
                          dataKey: '112907_root.header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          children: [
                            {
                              code: 'attrCode',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'T',
                              defaultValue: '',
                              _id: 'root.path.attrCode',
                              compType: 'Input',
                              parents: ['root', 'path'],
                              parentType: 'object',
                              parentKey: '0-1',
                              key: '0-1-0',
                              id: 'root.path.attrCode',
                              dataKey: '112907_root.path.attrCode',
                              value: {
                                type: ['customize'],
                                code: 'BAND_TV_PRICE',
                              },
                            },
                          ],
                          _id: 'root.path',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-1',
                          id: 'root.path',
                          dataKey: '112907_root.path',
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
                          dataKey: '112907_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                          id: 'root.body',
                          dataKey: '112907_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '112907_root',
                    },
                  ],
                },
                line_number: 27,
                callback1: [
                  {
                    type: 'console',
                    dataId: 168594464001670850,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '04811',
                      pageJsonId: '537892',
                      value: [
                        '查询的BAND_TV_PRICE：',
                        '$reply_223411?.resultData$',
                      ],
                    },
                    line_number: 28,
                  },
                  {
                    type: 'customActionCode',
                    dataId: 168594464001663580,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '5204057',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var _reply_;var priceList=(_reply_=reply_223411)===null||_reply_===void 0?void 0:_reply_.resultData;var landCode=state.zoneCode;console.log("priceList = ",priceList);var list=[];if(!!landCode){list=priceList.filter(function(item){return item.attrValue==landCode})}else{landCode="590";list=priceList.filter(function(item){return item.attrValue=="591"})}console.log("list = ",list);if(list.length>0){var value=JSON.parse(list[0]["attrValueDesc"]);console.log("\\u89E3\\u6790\\u51FA\\u7684value = ",value);success({priceOfEnterpriseInstallationFee:value.priceOfEnterpriseInstallationFee,priceOfEnterpriseDeposit:value.priceOfEnterpriseDeposit,internetTVInstallationFeePrice:value.internetTVInstallationFeePrice,internetTVMarginPrice:value.internetTVMarginPrice,landCode:landCode})}};',
                    },
                    line_number: 29,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 168594609039443900,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '70441836',
                          pageJsonId: '537892',
                          dataSourceId: 167110507843814850,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '981789',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '148281',
                              code: 'belongingCity',
                              name: '归属地市',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_5204057$'],
                                code: 'landCode',
                              },
                            },
                            {
                              attrId: '90974',
                              code: 'marketingEfficiencyRatio',
                              name: '营销效益比',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '498022',
                              code: 'priceOfEnterpriseInstallationFee',
                              name: '企宽安装费目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_5204057$'],
                                code: 'priceOfEnterpriseInstallationFee',
                              },
                            },
                            {
                              attrId: '2937934',
                              code: 'priceOfEnterpriseDeposit',
                              name: '企宽保证金目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_5204057$'],
                                code: 'priceOfEnterpriseDeposit',
                              },
                            },
                            {
                              attrId: '3330296',
                              code: 'totalNumberOfEnterpriseBroadband',
                              name: '企宽总条数',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9534704',
                              code: 'internetTVInstallationFeePrice',
                              name: '互联网电视安装费目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_5204057$'],
                                code: 'internetTVInstallationFeePrice',
                              },
                            },
                            {
                              attrId: '157223',
                              code: 'internetTVMarginPrice',
                              name: '互联网电视保证金目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$data_5204057$'],
                                code: 'internetTVMarginPrice',
                              },
                            },
                            {
                              attrId: '373452',
                              code: 'totalNumberOfInternetTV',
                              name: '互联网电视总条数',
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
                        line_number: 30,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '272096',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data_5204057.landCode$',
                              operate: '==',
                              manualValue: '598',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168594649724328500,
                        elseIfs: [],
                        line_number: 31,
                        callback1: [
                          {
                            type: 'sysSetRequired',
                            dataId: 168594656679618200,
                            options: {
                              compId: ['Input_marketingEfficiencyRatio_299703'],
                              compName: 'page',
                              id: '793069',
                              pageJsonId: '537892',
                              required: 'true',
                              compid: ['Input_marketingEfficiencyRatio_299703'],
                            },
                            line_number: 32,
                          },
                        ],
                      },
                    ],
                    callback2: [
                      {
                        type: 'setDataSource',
                        dataId: 168672297237441540,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '5465824',
                          pageJsonId: '537892',
                          dataSourceId: 167110507843814850,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '981789',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '148281',
                              code: 'belongingCity',
                              name: '归属地市',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: { type: ['customize'], code: '590' },
                            },
                            {
                              attrId: '90974',
                              code: 'marketingEfficiencyRatio',
                              name: '营销效益比',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '498022',
                              code: 'priceOfEnterpriseInstallationFee',
                              name: '企宽安装费目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '2937934',
                              code: 'priceOfEnterpriseDeposit',
                              name: '企宽保证金目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '3330296',
                              code: 'totalNumberOfEnterpriseBroadband',
                              name: '企宽总条数',
                              type: 'string',
                              initialData: { type: 'static', value: '0' },
                              showInput: true,
                            },
                            {
                              attrId: '9534704',
                              code: 'internetTVInstallationFeePrice',
                              name: '互联网电视安装费目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '157223',
                              code: 'internetTVMarginPrice',
                              name: '互联网电视保证金目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '373452',
                              code: 'totalNumberOfInternetTV',
                              name: '互联网电视总条数',
                              type: 'string',
                              initialData: { type: 'static', value: '0' },
                              showInput: true,
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 33,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        line_number: 11,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){console.log("state",state);var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;var prodList=[];var instList=item.instList;if(instList!=undefined&&instList.length>0){for(var _i=0;_i<instList.length;_i++){var list=instList[_i].instAttrList;var obj={};for(var j=0;j<list.length;j++){obj[list[j]["attrCode"]]=list[j]["attrValue"]}obj.rowId=instList[_i]["instCode"];prodList.push(obj)}}data.prodList=prodList;data.sceneSubmit=item;success(data.factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 12,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166452278875593470,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '057455',
                  pageJsonId: '537892',
                  dataSourceId: 167110507843814850,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '981789',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['981789'],
                    },
                    {
                      attrId: '148281',
                      code: 'belongingCity',
                      name: '归属地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['belongingCity'],
                      _idpath: ['148281'],
                    },
                    {
                      attrId: '90974',
                      code: 'marketingEfficiencyRatio',
                      name: '营销效益比',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['marketingEfficiencyRatio'],
                      _idpath: ['90974'],
                    },
                    {
                      attrId: '498022',
                      code: 'priceOfEnterpriseInstallationFee',
                      name: '企宽安装费目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['priceOfEnterpriseInstallationFee'],
                      _idpath: ['498022'],
                    },
                    {
                      attrId: '2937934',
                      code: 'priceOfEnterpriseDeposit',
                      name: '企宽保证金目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['priceOfEnterpriseDeposit'],
                      _idpath: ['2937934'],
                    },
                    {
                      attrId: '3330296',
                      code: 'totalNumberOfEnterpriseBroadband',
                      name: '企宽总条数',
                      type: 'string',
                      initialData: { type: 'static', value: '0' },
                      showInput: true,
                      _codePath: ['totalNumberOfEnterpriseBroadband'],
                      _idpath: ['3330296'],
                    },
                    {
                      attrId: '9534704',
                      code: 'internetTVInstallationFeePrice',
                      name: '互联网电视安装费目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['internetTVInstallationFeePrice'],
                      _idpath: ['9534704'],
                    },
                    {
                      attrId: '157223',
                      code: 'internetTVMarginPrice',
                      name: '互联网电视保证金目录价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['internetTVMarginPrice'],
                      _idpath: ['157223'],
                    },
                    {
                      attrId: '373452',
                      code: 'totalNumberOfInternetTV',
                      name: '互联网电视总条数',
                      type: 'string',
                      initialData: { type: 'static', value: '0' },
                      showInput: true,
                      _codePath: ['totalNumberOfInternetTV'],
                      _idpath: ['373452'],
                    },
                    {
                      attrId: '240031',
                      code: 'tvBandDifference',
                      name: '((互联网电视总条数-企宽总条数)*100) - 互联网电视总安装费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['tvBandDifference'],
                      _idpath: ['240031'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 13,
                callback1: [
                  {
                    type: 'console',
                    dataId: 167083255666605470,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '617487',
                      pageJsonId: '537892',
                      value: ['itemList', '$data.sceneSubmit$'],
                    },
                    line_number: 14,
                  },
                ],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '080688',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_9981685.belongingCity$',
                      operate: '==',
                      manualValue: '598',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168594663697949120,
                elseIfs: [],
                line_number: 15,
                callback1: [
                  {
                    type: 'sysSetRequired',
                    dataId: 168594671575187550,
                    options: {
                      compId: ['Input_marketingEfficiencyRatio_299703'],
                      compName: 'page',
                      id: '890337',
                      pageJsonId: '537892',
                      required: 'true',
                      compid: ['Input_marketingEfficiencyRatio_299703'],
                    },
                    line_number: 16,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'setValue',
            dataId: 166452285539661980,
            options: {
              compId: 'Input_361479_887285_2150708',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '52851846',
              value: '$state.itemList.approveGradeName$',
              valueList: {
                Input_361479_887285_2150708:
                  '$state.itemList.approveGradeName$',
              },
            },
            line_number: 17,
            callback1: [],
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
                    condId: '3020498',
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
                    condId: '166874',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746218124685220,
                elseIfs: [],
                line_number: 20,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746219759637280,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '7137135',
                      visible: '',
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
                type: 'setDisable',
                dataId: 166176050746976930,
                options: {
                  compId: [
                    'Form_449441',
                    'Form_449441_818139_523829',
                    'Form_449441_818139_722544_132852_5749023',
                    'Input_361479_887285_2150708',
                    'Form_449441_1900385_965292_804694_0429677_280477_695905',
                    'Form_3885024',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '142454',
                  disabled: 'true',
                  compid: [
                    'Form_449441',
                    'Form_449441_818139_523829',
                    'Form_449441_818139_722544_132852_5749023',
                    'Input_361479_887285_2150708',
                    'Form_449441_1900385_965292_804694_0429677_280477_695905',
                    'Form_3885024',
                  ],
                },
                line_number: 23,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: [
                    'Row_851124',
                    'CheckboxGroup_259984',
                    'Button_149499',
                    'Button_5125682',
                    'Table_37532',
                  ],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'CheckboxGroup_259984',
                    'Button_149499',
                    'Button_5125682',
                    'Table_37532',
                  ],
                  visible: '',
                },
                line_number: 24,
              },
              {
                type: 'setVisible',
                dataId: 166253668703982820,
                options: {
                  compId: ['Input_361479_887285_2150708', 'Table_846148'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '782781',
                  visible: 'true',
                  compid: ['Input_361479_887285_2150708', 'Table_846148'],
                },
                line_number: 25,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse160.params = [] || [];
    CMDGenerator(eventDataifelse160, {}, 'ifelse', {
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
          dividerText={'企宽互联网电视免安装费免保证金'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_212427',
            uid: 'Divider_212427',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_212427')}
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
                  id: 'Form_4311097_9385662',
                  uid: 'Form_4311097_9385662',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Form_4311097_9385662')
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'企宽互联网电视免安装费免保证金'}
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
                    id: 'Checkbox_882584_5289015_934499',
                    uid: 'Checkbox_882584_5289015_934499',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Checkbox_882584_5289015_934499')
                  }
                  {...injectData}
                />
                <View
                  className="View_View_310701"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_310701',
                    uid: 'View_310701',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_310701')}
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
                    id: 'Input_361479_887285_2150708',
                    uid: 'Input_361479_887285_2150708',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_361479_887285_2150708')
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_3885024'}
            formItemIndex={9}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.factorForm}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_3885024',
              uid: 'Form_3885024',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource133: any = [
                {
                  type: 'setDataSource',
                  dataId: 168499853079938200,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '957907',
                    pageJsonId: '537892',
                    dataSourceId: 167110507843814850,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '981789',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: { type: [], code: '' },
                        _codePath: ['reason'],
                        _idpath: ['981789'],
                      },
                      {
                        attrId: '148281',
                        code: 'belongingCity',
                        name: '归属地市',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_3885024', 'getFieldsValue'],
                          code: 'belongingCity',
                        },
                        _codePath: ['belongingCity'],
                        _idpath: ['148281'],
                      },
                      {
                        attrId: '90974',
                        code: 'marketingEfficiencyRatio',
                        name: '营销效益比',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_3885024', 'getFieldsValue'],
                          code: 'marketingEfficiencyRatio',
                        },
                        _codePath: ['marketingEfficiencyRatio'],
                        _idpath: ['90974'],
                      },
                      {
                        attrId: '498022',
                        code: 'priceOfEnterpriseInstallationFee',
                        name: '企宽安装费目录价',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_3885024', 'getFieldsValue'],
                          code: 'priceOfEnterpriseInstallationFee',
                        },
                        _codePath: ['priceOfEnterpriseInstallationFee'],
                        _idpath: ['498022'],
                      },
                      {
                        attrId: '2937934',
                        code: 'priceOfEnterpriseDeposit',
                        name: '企宽保证金目录价',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_3885024', 'getFieldsValue'],
                          code: 'priceOfEnterpriseDeposit',
                        },
                        _codePath: ['priceOfEnterpriseDeposit'],
                        _idpath: ['2937934'],
                      },
                      {
                        attrId: '3330296',
                        code: 'totalNumberOfEnterpriseBroadband',
                        name: '企宽总条数',
                        type: 'string',
                        initialData: { type: 'static', value: '0' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_3885024', 'getFieldsValue'],
                          code: 'totalNumberOfEnterpriseBroadband',
                        },
                        _codePath: ['totalNumberOfEnterpriseBroadband'],
                        _idpath: ['3330296'],
                      },
                      {
                        attrId: '9534704',
                        code: 'internetTVInstallationFeePrice',
                        name: '互联网电视安装费目录价',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_3885024', 'getFieldsValue'],
                          code: 'internetTVInstallationFeePrice',
                        },
                        _codePath: ['internetTVInstallationFeePrice'],
                        _idpath: ['9534704'],
                      },
                      {
                        attrId: '157223',
                        code: 'internetTVMarginPrice',
                        name: '互联网电视保证金目录价',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_3885024', 'getFieldsValue'],
                          code: 'internetTVMarginPrice',
                        },
                        _codePath: ['internetTVMarginPrice'],
                        _idpath: ['157223'],
                      },
                      {
                        attrId: '373452',
                        code: 'totalNumberOfInternetTV',
                        name: '互联网电视总条数',
                        type: 'string',
                        initialData: { type: 'static', value: '0' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_3885024', 'getFieldsValue'],
                          code: 'totalNumberOfInternetTV',
                        },
                        _codePath: ['totalNumberOfInternetTV'],
                        _idpath: ['373452'],
                      },
                      {
                        attrId: '240031',
                        code: 'tvBandDifference',
                        name: '((互联网电视总条数-企宽总条数)*100) - 互联网电视总安装费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['tvBandDifference'],
                        _idpath: ['240031'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 168568472593481500,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '655978',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;console.log("\\u6807\\u51C6\\u5316-data.factorForm",data.factorForm);for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u6807\\u51C6\\u5316-attrList",attrList);success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 168568491632567580,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '531974',
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
              eventDatasetDataSource133.params =
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
                eventDatasetDataSource133,
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_3885024')}
            {...injectData}
          >
            <Select
              name={'归属地市'}
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
              formItemIndex={0}
              fieldName={'belongingCity'}
              value={data?.factorForm?.belongingCity}
              $$componentItem={{
                id: 'Select_1677317',
                uid: 'Select_1677317',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_1677317')}
              {...injectData}
            />
            <Input
              name={'营销效益比'}
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
              fieldName={'marketingEfficiencyRatio'}
              value={data?.factorForm?.marketingEfficiencyRatio}
              formItemIndex={1}
              regexp={[
                {
                  id: '963727',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于等于0且最多2位小数的数',
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
                id: 'Input_marketingEfficiencyRatio_299703',
                uid: 'Input_marketingEfficiencyRatio_299703',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_marketingEfficiencyRatio_299703')
              }
              {...injectData}
            />
            <View
              className="View_View_1657434"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_1657434',
                uid: 'View_1657434',
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
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_1657434')}
              {...injectData}
            />
            <Input
              name={'企宽安装费目录价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/条'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'无'}
              fieldName={'priceOfEnterpriseInstallationFee'}
              value={data?.factorForm?.priceOfEnterpriseInstallationFee}
              formItemIndex={3}
              prefixIcon={{
                prefixIconType: '',
                prefixIconTheme: '',
                prefixIconFontAddress: '',
                prefixIconIsIconFont: false,
                prefixIconIconFileInfo: {},
              }}
              icon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_priceOfEnterpriseInstallationFee_739559',
                uid: 'Input_priceOfEnterpriseInstallationFee_739559',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Input_priceOfEnterpriseInstallationFee_739559',
                )
              }
              {...injectData}
            />
            <Input
              name={'企宽保证金目录价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/条'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'无'}
              fieldName={'priceOfEnterpriseDeposit'}
              value={data?.factorForm?.priceOfEnterpriseDeposit}
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
                id: 'Input_priceOfEnterpriseDeposit_241256',
                uid: 'Input_priceOfEnterpriseDeposit_241256',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_priceOfEnterpriseDeposit_241256')
              }
              {...injectData}
            />
            <Input
              name={'企宽总条数'}
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
              placeholder={'自动计算'}
              fieldName={'totalNumberOfEnterpriseBroadband'}
              value={data?.factorForm?.totalNumberOfEnterpriseBroadband}
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
                id: 'Input_totalNumberOfEnterpriseBroadband_47517',
                uid: 'Input_totalNumberOfEnterpriseBroadband_47517',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Input_totalNumberOfEnterpriseBroadband_47517',
                )
              }
              {...injectData}
            />
            <Input
              name={'互联网电视安装费目录价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/条'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'无'}
              fieldName={'internetTVInstallationFeePrice'}
              value={data?.factorForm?.internetTVInstallationFeePrice}
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
                id: 'Input_internetTVInstallationFeePrice_034259',
                uid: 'Input_internetTVInstallationFeePrice_034259',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Input_internetTVInstallationFeePrice_034259',
                )
              }
              {...injectData}
            />
            <Input
              name={'互联网电视保证金目录价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/条'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'无'}
              fieldName={'internetTVMarginPrice'}
              value={data?.factorForm?.internetTVMarginPrice}
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
                id: 'Input_internetTVMarginPrice_659755',
                uid: 'Input_internetTVMarginPrice_659755',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_internetTVMarginPrice_659755')
              }
              {...injectData}
            />
            <Input
              name={'互联网电视总条数'}
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
              placeholder={'自动计算'}
              fieldName={'totalNumberOfInternetTV'}
              value={data?.factorForm?.totalNumberOfInternetTV}
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
                id: 'Input_totalNumberOfInternetTV_678625',
                uid: 'Input_totalNumberOfInternetTV_678625',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_totalNumberOfInternetTV_678625')
              }
              {...injectData}
            />
          </Form>
          <View
            className="View_View_1106239"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_1106239',
              uid: 'View_1106239',
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
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_1106239')}
            {...injectData}
          >
            <View
              className="View_View_369278"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_369278',
                uid: 'View_369278',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'right',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 24px 0px 0px',
                width: '100%',
                margin: '0px 0px 0px 0px',
                alignItems: 'center',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_369278')}
              {...injectData}
            >
              <View
                className="View_View_764352"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_764352',
                  uid: 'View_764352',
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
                  height: '50px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_764352')}
                {...injectData}
              />
              <Button
                name={'增加产品'}
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
                  id: 'Button_5125682',
                  uid: 'Button_5125682',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '20px 20px 20px 20px' }}
                onClick={(e: any) => {
                  const eventDatashowCustomModal138: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 168567637320526180,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '502869',
                        pageJsonId: '537892',
                        modalname: '/chanpinxinxi2777',
                        pageId: '981367920350507008',
                        modalPath: '/chanpinxinxi2777',
                        paramsObj: {
                          sceneCode: '$state.catalogCode$',
                          belongingCity: '$data.factorForm.belongingCity$',
                        },
                        paramsObjKeyValueMap: {
                          sceneCode: '$state.catalogCode$',
                          belongingCity: '$data.factorForm.belongingCity$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 168567640348891940,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '2057154',
                            pageJsonId: '537892',
                            value: ['弹窗返回'],
                          },
                          line_number: 2,
                        },
                        {
                          type: 'customActionCode',
                          dataId: 168568694272040580,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '091701',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){var prodInfo=okData_502869;console.log("\\u5F53\\u524D\\u8FD4\\u56DE\\u7684\\u6570\\u636E\\uFF1A",prodInfo);prodInfo.rowId=Date.now();if(!data.prodList){data.prodList=[]}data.prodList.unshift(prodInfo);success(data.prodList)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 168568833332047200,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '0648484',
                                pageJsonId: '537892',
                                customFuncName: 'updateProdList',
                                customFuncParams: 'object',
                                paramsObj: { prodList: '$data_091701$' },
                                paramsObjKeyValueMap: {
                                  prodList: '$data_091701$',
                                },
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 168569895829367170,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '093522',
                                pageJsonId: '537892',
                                customFuncName: 'calTotalNum',
                                customFuncParams: 'object',
                                paramsObj: { prodList: '$data_091701$' },
                                paramsObjKeyValueMap: {
                                  prodList: '$data_091701$',
                                },
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
                  eventDatashowCustomModal138.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal138,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_5125682')}
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
                  id: 'Button_149499',
                  uid: 'Button_149499',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelectedKey52: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 168569765645826800,
                      options: {
                        compId: 'Table_37532',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '8454964',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '883655',
                              options: {
                                context: '$selectedRowKeys_8454964$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 168569787093313660,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 168569789371378900,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 168569790157711330,
                                  children: [],
                                  todoOptions: ['msgType', 'value', 'duration'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '898737',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    duration: 1,
                                    value: '请选择数据！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                  line_number: 8,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              desc: '',
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 168569790157711330,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '898737',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    duration: 1,
                                    value: '请选择数据！',
                                  },
                                  line_number: 8,
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'showModal',
                              dataId: 168569788987649060,
                              options: {
                                compId: 'showModal',
                                compName: 'page',
                                id: '2371887',
                                pageJsonId: '537892',
                                type: 'confirm',
                                title: '温馨提示',
                                okText: '确定',
                                cancelText: '取消',
                                content: '您确定要删除吗?',
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'customActionCode',
                                  dataId: 168569801401699740,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '598217',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var ids=selectedRowKeys_8454964;console.log("\\u9009\\u4E2D\\u7684\\u7EC4\\u4EF6\\uFF1A",ids);var _loop=function _loop(i){data.prodList=data.prodList.filter(function(item){return item.rowId!=ids[i]})};for(var i=0;i<ids.length;i++){_loop(i)}console.log("\\u8FC7\\u6EE4\\u540E\\u7684\\u503C\\uFF1A",data.prodList);success(data.prodList)};',
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 168672670559740480,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '959184',
                                        pageJsonId: '537892',
                                        dataSourceId: 168568547760017760,
                                        dataSourceName: 'prodList',
                                        dataSourceRelType: 'custom',
                                        dataSourceSetValue: [
                                          {
                                            attrId: '149906',
                                            code: 'productName',
                                            name: '产品',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: false,
                                          },
                                          {
                                            attrId: '459557',
                                            code: 'count',
                                            name: '条数',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: false,
                                          },
                                          {
                                            attrId: '7004187',
                                            code: 'depositReceived',
                                            name: '安装费实收（元/条）',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: false,
                                          },
                                          {
                                            attrId: '121493',
                                            code: 'actualPaymentOfInstallationFee',
                                            name: '保证金实收（元/条）',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: false,
                                          },
                                          {
                                            attrId: '456373',
                                            code: 'contractPeriod',
                                            name: '合约期（月）',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: false,
                                          },
                                        ],
                                        newData: '$data_598217$',
                                        operateType: 3,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                        targetDataSourcePaths: [],
                                      },
                                      line_number: 5,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 168569818381325100,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '569383',
                                        pageJsonId: '537892',
                                        customFuncName: 'updateProdList',
                                        customFuncParams: 'object',
                                        paramsObj: {
                                          prodList: '$data_598217$',
                                        },
                                        paramsObjKeyValueMap: {
                                          prodList: '$data_598217$',
                                        },
                                      },
                                      line_number: 6,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 168569904106929250,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '5120236',
                                        pageJsonId: '537892',
                                        customFuncName: 'calTotalNum',
                                        customFuncParams: 'object',
                                        paramsObj: {
                                          prodList: '$data_598217$',
                                        },
                                        paramsObjKeyValueMap: {
                                          prodList: '$data_598217$',
                                        },
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
                        {
                          type: 'console',
                          dataId: 168610693377282100,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '0897824',
                            pageJsonId: '537892',
                            value: ['选中数据：', '$selectedRowKeys_8454964$'],
                          },
                          line_number: 9,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelectedKey52.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey52,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_149499')}
                {...injectData}
              />
            </View>
            <Table
              name={'编辑表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={5}
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
                  title: '产品',
                  key: 'productName',
                  dataIndex: 'productName',
                  className: '',
                  id: '766475',
                  staticService: {
                    labelKey: 'attrValueName',
                    valueKey: 'attrValue',
                  },
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
                  title: '条数',
                  key: 'count',
                  dataIndex: 'count',
                  className: 'divider',
                  id: '85816',
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
                  title: '安装费实收（元/条）',
                  key: 'depositReceived',
                  dataIndex: 'actualPaymentOfInstallationFee',
                  className: 'divider',
                  id: '7919194',
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
                  title: '保证金实收（元/条）',
                  key: 'actualPaymentOfInstallationFee',
                  dataIndex: 'depositReceived',
                  className: 'divider',
                  id: '739162',
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
                  title: '合约期（月）',
                  key: 'contractPeriod',
                  dataIndex: 'contractPeriod',
                  className: 'divider',
                  id: '45096648',
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
              bordered={'border'}
              size={'middle'}
              fixedAction={true}
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
                  title: '修改',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'edit' },
                  type: 'edit',
                  id: '288117',
                  rule: "state.scene === 'V'",
                  checked: true,
                },
                {
                  title: '删除',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'delete' },
                  type: 'delete',
                  id: '1484972',
                  rule: "state.scene === 'V'",
                  checked: true,
                },
              ]}
              extend={[]}
              dataSource={data?.prodList}
              total={data?.prodList?.length || 0}
              dataSourceFromDataSourceConfig={'data.prodList'}
              $$componentItem={{
                id: 'Table_37532',
                uid: 'Table_37532',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              onRowEdit={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal139: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 168568841511519230,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '1325334',
                      pageJsonId: '537892',
                      modalname: '/chanpinxinxi2777',
                      pageId: '981367920350507008',
                      modalPath: '/chanpinxinxi2777',
                      paramsObj: {
                        prodInfo: '$row$',
                        sceneCode: '$state.catalogCode$',
                        belongingCity: '$data.factorForm.belongingCity$',
                      },
                      paramsObjKeyValueMap: {
                        prodInfo: '$row$',
                        sceneCode: '$state.catalogCode$',
                        belongingCity: '$data.factorForm.belongingCity$',
                      },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 168569232832916480,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '256038',
                          pageJsonId: '537892',
                          value: ['修改后的数据：', '$okData_1325334$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'console',
                        dataId: 168569234909810400,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '452858',
                          pageJsonId: '537892',
                          value: ['产品列表：', '$data.prodList$'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'customActionCode',
                        dataId: 168568843982254880,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5804534',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var updatedInfo=okData_1325334;data.prodList=data.prodList.filter(function(item){return item.rowId!==updatedInfo.rowId});data.prodList.unshift(updatedInfo);success(data.prodList)};',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 168568904573021860,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '951399',
                              pageJsonId: '537892',
                              customFuncName: 'updateProdList',
                              customFuncParams: 'object',
                              paramsObj: { prodList: '$data_5804534$' },
                              paramsObjKeyValueMap: {
                                prodList: '$data_5804534$',
                              },
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'setDataSource',
                            dataId: 168569271969651800,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '4912743',
                              pageJsonId: '537892',
                              dataSourceId: 168568547760017760,
                              dataSourceName: 'prodList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '149906',
                                  code: 'productName',
                                  name: '产品',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '459557',
                                  code: 'count',
                                  name: '条数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '7004187',
                                  code: 'depositReceived',
                                  name: '安装费实收（元/条）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '121493',
                                  code: 'actualPaymentOfInstallationFee',
                                  name: '保证金实收（元/条）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '456373',
                                  code: 'contractPeriod',
                                  name: '合约期（月）',
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
                            line_number: 6,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 168569900161462140,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '7256061',
                              pageJsonId: '537892',
                              customFuncName: 'calTotalNum',
                              customFuncParams: 'object',
                              paramsObj: { prodList: '$data_5804534$' },
                              paramsObjKeyValueMap: {
                                prodList: '$data_5804534$',
                              },
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
                eventDatashowCustomModal139.params =
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
                  eventDatashowCustomModal139,
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
              onRowDelete={(rowId: any, row: any, index: any) => {
                const eventDatacustomActionCode529: any = [
                  {
                    type: 'customActionCode',
                    dataId: 168568907555269220,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '772179',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){data.prodList=data.prodList.filter(function(item){return item.rowId!=rowId});success(data.prodList)};',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 168568964687140350,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '210306',
                          pageJsonId: '537892',
                          customFuncName: 'updateProdList',
                          customFuncParams: 'object',
                          paramsObj: { prodList: '$data_772179$' },
                          paramsObjKeyValueMap: { prodList: '$data_772179$' },
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 168569902112213820,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '661056',
                          pageJsonId: '537892',
                          customFuncName: 'calTotalNum',
                          customFuncParams: 'object',
                          paramsObj: { prodList: '$data_772179$' },
                          paramsObjKeyValueMap: { prodList: '$data_772179$' },
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode529.params =
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
                  eventDatacustomActionCode529,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_37532')}
              {...injectData}
            />
            <Table
              name={'详情表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={5}
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
                  title: '产品',
                  key: 'productName',
                  dataIndex: 'productName',
                  className: '',
                  id: '766475',
                  staticDataSource: [
                    { id: '4322126', label: '企业宽带', value: '1001' },
                    { id: '62592', label: '互联网电视', value: '1002' },
                  ],
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
                  title: '条数',
                  key: 'count',
                  dataIndex: 'count',
                  className: 'divider',
                  id: '85816',
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
                  title: '安装费实收（元/条）',
                  key: 'depositReceived',
                  dataIndex: 'actualPaymentOfInstallationFee',
                  className: 'divider',
                  id: '7919194',
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
                  title: '保证金实收（元/条）',
                  key: 'actualPaymentOfInstallationFee',
                  dataIndex: 'depositReceived',
                  className: 'divider',
                  id: '739162',
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
                  title: '合约期（月）',
                  key: 'contractPeriod',
                  dataIndex: 'contractPeriod',
                  className: 'divider',
                  id: '45096648',
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
              bordered={'border'}
              size={'middle'}
              fixedAction={true}
              showHead={false}
              showTotal={true}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              rowKey={'rowId'}
              rowActions={[]}
              extend={[]}
              dataSource={data?.prodList}
              total={data?.prodList?.length || 0}
              dataSourceFromDataSourceConfig={'data.prodList'}
              $$componentItem={{
                id: 'Table_846148',
                uid: 'Table_846148',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              rowSelection={undefined}
              onRowEdit={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal140: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 168568841511519230,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '1325334',
                      pageJsonId: '537892',
                      modalname: '/chanpinxinxi2777',
                      pageId: '981367920350507008',
                      modalPath: '/chanpinxinxi2777',
                      paramsObj: {
                        prodInfo: '$row$',
                        sceneCode: '$state.catalogCode$',
                        belongingCity: '$data.factorForm.belongingCity$',
                      },
                      paramsObjKeyValueMap: {
                        prodInfo: '$row$',
                        sceneCode: '$state.catalogCode$',
                        belongingCity: '$data.factorForm.belongingCity$',
                      },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 168569232832916480,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '256038',
                          pageJsonId: '537892',
                          value: ['修改后的数据：', '$okData_1325334$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'console',
                        dataId: 168569234909810400,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '452858',
                          pageJsonId: '537892',
                          value: ['产品列表：', '$data.prodList$'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'customActionCode',
                        dataId: 168568843982254880,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5804534',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var updatedInfo=okData_1325334;data.prodList=data.prodList.filter(function(item){return item.rowId!==updatedInfo.rowId});data.prodList.unshift(updatedInfo);success(data.prodList)};',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 168568904573021860,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '951399',
                              pageJsonId: '537892',
                              customFuncName: 'updateProdList',
                              customFuncParams: 'object',
                              paramsObj: { prodList: '$data_5804534$' },
                              paramsObjKeyValueMap: {
                                prodList: '$data_5804534$',
                              },
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'setDataSource',
                            dataId: 168569271969651800,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '4912743',
                              pageJsonId: '537892',
                              dataSourceId: 168568547760017760,
                              dataSourceName: 'prodList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '149906',
                                  code: 'productName',
                                  name: '产品',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '459557',
                                  code: 'count',
                                  name: '条数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '7004187',
                                  code: 'depositReceived',
                                  name: '安装费实收（元/条）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '121493',
                                  code: 'actualPaymentOfInstallationFee',
                                  name: '保证金实收（元/条）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '456373',
                                  code: 'contractPeriod',
                                  name: '合约期（月）',
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
                            line_number: 6,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 168569900161462140,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '7256061',
                              pageJsonId: '537892',
                              customFuncName: 'calTotalNum',
                              customFuncParams: 'object',
                              paramsObj: { prodList: '$data_5804534$' },
                              paramsObjKeyValueMap: {
                                prodList: '$data_5804534$',
                              },
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
                eventDatashowCustomModal140.params =
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
                  eventDatashowCustomModal140,
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
              onRowDelete={(rowId: any, row: any, index: any) => {
                const eventDatacustomActionCode530: any = [
                  {
                    type: 'customActionCode',
                    dataId: 168568907555269220,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '772179',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){data.prodList=data.prodList.filter(function(item){return item.rowId!=rowId});success(data.prodList)};',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 168568964687140350,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '210306',
                          pageJsonId: '537892',
                          customFuncName: 'updateProdList',
                          customFuncParams: 'object',
                          paramsObj: { prodList: '$data_772179$' },
                          paramsObjKeyValueMap: { prodList: '$data_772179$' },
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 168569902112213820,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '661056',
                          pageJsonId: '537892',
                          customFuncName: 'calTotalNum',
                          customFuncParams: 'object',
                          paramsObj: { prodList: '$data_772179$' },
                          paramsObjKeyValueMap: { prodList: '$data_772179$' },
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode530.params =
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
                  eventDatacustomActionCode530,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_846148')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_80424"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_80424',
              uid: 'View_80424',
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
              width: '98%',
              margin: '10px 0px 0px 10px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_80424')}
            {...injectData}
          >
            <Form
              name={'要素'}
              colSpan={8}
              labelCol={'8'}
              wrapperCol={16}
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
              $$componentItem={{
                id: 'Form_449441_1900385_965292_804694_0429677_280477_695905',
                uid: 'Form_449441_1900385_965292_804694_0429677_280477_695905',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
              onValuesChange={(changedFieldName: any, changedValue: any) => {
                const eventDatasetDataSource134: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166124391997578100,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '3788211',
                      pageJsonId: '537892',
                      dataSourceId: 167110507843814850,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '981789',
                          code: 'reason',
                          name: '申请原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'form',
                              'Form_449441_1900385_965292_804694_0429677_280477_695905',
                              'getFieldsValue',
                            ],
                            code: 'reason',
                          },
                          showInput: true,
                          _codePath: ['reason'],
                          _idpath: ['981789'],
                        },
                        {
                          attrId: '90974',
                          code: 'marketingEfficiencyRatio',
                          name: '营销效益比',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['marketingEfficiencyRatio'],
                          _idpath: ['90974'],
                        },
                        {
                          attrId: '148281',
                          code: 'belongingCity',
                          name: '归属地市',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['belongingCity'],
                          _idpath: ['148281'],
                        },
                        {
                          attrId: '157223',
                          code: 'internetTVMarginPrice',
                          name: '互联网电视保证金目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['internetTVMarginPrice'],
                          _idpath: ['157223'],
                        },
                        {
                          attrId: '373452',
                          code: 'totalNumberOfInternetTV',
                          name: '互联网电视总条数',
                          type: 'string',
                          initialData: { type: 'static', value: '0' },
                          showInput: true,
                          _codePath: ['totalNumberOfInternetTV'],
                          _idpath: ['373452'],
                        },
                        {
                          attrId: '498022',
                          code: 'priceOfEnterpriseInstallationFee',
                          name: '企宽安装费目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['priceOfEnterpriseInstallationFee'],
                          _idpath: ['498022'],
                        },
                        {
                          attrId: '2937934',
                          code: 'priceOfEnterpriseDeposit',
                          name: '企宽保证金目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['priceOfEnterpriseDeposit'],
                          _idpath: ['2937934'],
                        },
                        {
                          attrId: '3330296',
                          code: 'totalNumberOfEnterpriseBroadband',
                          name: '企宽总条数',
                          type: 'string',
                          initialData: { type: 'static', value: '0' },
                          showInput: true,
                          _codePath: ['totalNumberOfEnterpriseBroadband'],
                          _idpath: ['3330296'],
                        },
                        {
                          attrId: '9534704',
                          code: 'internetTVInstallationFeePrice',
                          name: '互联网电视安装费目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['internetTVInstallationFeePrice'],
                          _idpath: ['9534704'],
                        },
                        {
                          attrId: '240031',
                          code: 'tvBandDifference',
                          name: '((互联网电视总条数-企宽总条数)*100) - 互联网电视总安装费',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['tvBandDifference'],
                          _idpath: ['240031'],
                        },
                      ],
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
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
                eventDatasetDataSource134.params =
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
                  eventDatasetDataSource134,
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
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Form_449441_1900385_965292_804694_0429677_280477_695905',
                )
              }
              {...injectData}
            >
              <TextArea
                name={'申请原因'}
                selfSpan={24}
                labelCol={'2'}
                wrapperCol={'22'}
                titleTip={'text'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={true}
                placeholder={'请输入'}
                fieldName={'reason'}
                value={data?.factorForm?.reason}
                formItemIndex={0}
                tipIcon={{
                  theme: 'outlined',
                  type: 'question-circle',
                  isIconFont: false,
                }}
                tipContent={
                  '与我司签订企业宽带和互联网电视业务，签约XX年。因该客户XX情况（对客户的重要性进行说明，作为减免的参考）'
                }
                $$componentItem={{
                  id: 'Input_7242206_854739',
                  uid: 'Input_7242206_854739',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_7242206_854739')
                }
                {...injectData}
              />
            </Form>
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
                id: 'Form_395851_1727917',
                uid: 'Form_395851_1727917',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_395851_1727917')}
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
                  id: 'Input_690228_5400337',
                  uid: 'Input_690228_5400337',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_690228_5400337')
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512"
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512',
                  uid: 'View_22346374_875512',
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
                  refs.setComponentRef(r, 'View_22346374_875512')
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
                    id: 'StdUpload_6230546_867413',
                    uid: 'StdUpload_6230546_867413',
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
                    const eventDatagetSelectedData240: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166246761889983230,
                        options: {
                          compId: 'Input_690228_5400337',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '3614746',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166246762492480400,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '1394106',
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
                                    code: '$selectedData_3614746[0].value$',
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
                                    code: '$selectedData_3614746[0].label$',
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
                                dataId: 166246762492403230,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '5345422',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166246762492427260,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '3234276',
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
                            dataId: 166260609329755040,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '4424945',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData240.params =
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
                      eventDatagetSelectedData240,
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
                    const eventDatacustomActionCode532: any = [
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
                    eventDatacustomActionCode532.params =
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
                      eventDatacustomActionCode532,
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
                    refs.setComponentRef(r, 'StdUpload_6230546_867413')
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
              const eventDatacustomActionCode533: any = [
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
              eventDatacustomActionCode533.params =
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
                eventDatacustomActionCode533,
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
              const eventDatadownloadByFileId45: any = [
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
              eventDatadownloadByFileId45.params =
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
                eventDatadownloadByFileId45,
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_681099')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0007_0004$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
