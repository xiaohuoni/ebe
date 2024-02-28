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
  Card,
  Select,
  DatePicker,
  TextArea,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '990512592298106880';
const ClsCp_0017_0001$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_3690043: any) => {
    const eventDatacustomActionCode103: any = [
      {
        type: 'customActionCode',
        dataId: 167288481177521920,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '469808',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3690043;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168776990662172500,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '64788',
              pageJsonId: '537892',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'updateOrderSubmit',
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
    eventDatacustomActionCode103.params =
      [
        {
          title: '事件入参',
          name: 'options_3690043',
          value: '$options_3690043$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode103,
      { options_3690043 },
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
  }));

  useEffect(() => {
    // console 168804140188567550
    console.log('1+n state', state);
    const eventDataifelse164: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0671834',
            options: { context: '$state.workItemId$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneOrigin$',
              operate: '==',
              manualValue: 'U',
            },
            condId: '3787954',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168793961763677920,
        elseIfs: [],
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 168794073278199460,
            options: {
              compId: 'View_537892_1_573149',
              compLib: 'custom',
              pageJsonId: '537892',
              compName: 'View',
              id: '757478',
              loading: true,
            },
            line_number: 3,
          },
          {
            type: 'apiRequest',
            dataId: 168793961763694880,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '046525',
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
                      dataKey: '4302826_root.header',
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
                      dataKey: '4302826_root.path',
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
                      dataKey: '4302826_root.query',
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
                          _id: 'root.body.workItemId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          id: 'root.body.workItemId',
                          dataKey: '4302826_root.body.workItemId',
                          value: {
                            type: ['context', '$state.workItemId$'],
                            code: '',
                          },
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.body',
                      dataKey: '4302826_root.body',
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
                  dataKey: '4302826_root',
                },
              ],
              _sourceName: '获取流程环节实例简要信息-tzp',
            },
            line_number: 4,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 168794065719770780,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '988785',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _reply_;var _traceCode=(_reply_=reply_046525)===null||_reply_===void 0?void 0:_reply_.resultData.traceCode;console.log("1+N+N \\u73AF\\u8282\\u7F16\\u7801:",_traceCode);if(_traceCode==="PRODUCT_CODE_APPLICATION"){data.editable.prod=true}else if(_traceCode==="ACCOUNT_ITEM_APPLICATION"){data.editable.account=true}success()};',
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 168794065719775800,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '836418',
                      pageJsonId: '537892',
                      dataSourceId: 168793987660525800,
                      dataSourceName: 'editable',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '3236052',
                          code: 'prod',
                          name: '产品是否编辑',
                          type: 'boolean',
                          initialData: { type: 'static', value: 'false' },
                          showInput: true,
                        },
                        {
                          attrId: '850339',
                          code: 'account',
                          name: '账目是否编辑',
                          type: 'boolean',
                          initialData: { type: 'static', value: 'false' },
                          showInput: true,
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
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '894233',
                        options: {
                          context: '$data.editable.prod$',
                          operate: '== true',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168794065719783870,
                    elseIfs: [],
                    line_number: 7,
                    callback1: [
                      {
                        type: 'setDisable',
                        dataId: 168794065719716960,
                        options: {
                          compId: [
                            'Input_465592',
                            'Input_703461',
                            'Input_9325585',
                            'Input_960909',
                            'TextArea_8844328',
                            'Form_414485',
                            'Input_82528218',
                            'Input_2971792',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '504145',
                          disabled: '',
                          compid: [
                            'Input_465592',
                            'Input_703461',
                            'Input_9325585',
                            'Input_960909',
                            'TextArea_8844328',
                            'Form_414485',
                            'Input_82528218',
                            'Input_2971792',
                          ],
                        },
                        line_number: 8,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168794065719775870,
                        options: {
                          compId: [
                            'Input_465592',
                            'Input_703461',
                            'Input_9325585',
                            'Input_960909',
                            'TextArea_8844328',
                            'Input_82528218',
                            'Input_2971792',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '8283837',
                          required: 'true',
                          compid: [
                            'Input_465592',
                            'Input_703461',
                            'Input_9325585',
                            'Input_960909',
                            'TextArea_8844328',
                            'Input_82528218',
                            'Input_2971792',
                          ],
                        },
                        line_number: 9,
                      },
                    ],
                  },
                  {
                    type: 'setLoading',
                    dataId: 168794074319041760,
                    options: {
                      compId: 'View_537892_1_573149',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'View',
                      id: '101583',
                      loading: false,
                    },
                    line_number: 10,
                  },
                ],
                callback2: [
                  {
                    type: 'setLoading',
                    dataId: 168794075554071520,
                    options: {
                      compId: 'View_537892_1_573149',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'View',
                      id: '7142556',
                      loading: false,
                    },
                    line_number: 11,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse164.params = [] || [];
    CMDGenerator(eventDataifelse164, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse165: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}success(factorForm)};',
              actionTitle: 'attrList',
            },
            line_number: 13,
            callback1: [
              {
                type: 'setValue',
                dataId: 166519834725461630,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '8614445',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508:
                      '$state.itemList.approveGradeName$',
                  },
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                  ],
                },
                line_number: 14,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 168776950905080320,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '446278',
                  pageJsonId: '537892',
                  dataSourceId: 166096152690913730,
                  dataSourceName: 'sceneSubmit',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '154379',
                      code: 'catalogCode',
                      name: '类目编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogCode'],
                      _idpath: ['154379'],
                    },
                    {
                      attrId: '4562264',
                      code: 'approveGrade',
                      name: '审批等级',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['approveGrade'],
                      _idpath: ['4562264'],
                    },
                    {
                      attrId: '63768',
                      code: 'attrList',
                      name: '要素',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      value: { type: ['context', '$data_9981685$'], code: '' },
                      showInput: true,
                      _codePath: ['attrList'],
                      _idpath: ['63768'],
                    },
                    {
                      attrId: '919265',
                      code: 'fileInfo',
                      name: '附件',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      children: [],
                      showInput: true,
                      _codePath: ['fileInfo'],
                      _idpath: ['919265'],
                    },
                    {
                      attrId: '360171',
                      code: 'catalogItemCode',
                      name: '类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogItemCode'],
                      _idpath: ['360171'],
                    },
                    {
                      attrId: '420623',
                      code: 'catalogItemSubType',
                      name: '类目项子类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogItemSubType'],
                      _idpath: ['420623'],
                    },
                    {
                      attrId: '375466',
                      code: 'childCatalogCode',
                      name: '子类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['childCatalogCode'],
                      _idpath: ['375466'],
                    },
                    {
                      attrId: '9257773',
                      code: 'parentCatalogCode',
                      name: '上级类目编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['parentCatalogCode'],
                      _idpath: ['9257773'],
                    },
                    {
                      attrId: '5733013',
                      code: 'parentCatalogItemCode',
                      name: '上级类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['parentCatalogItemCode'],
                      _idpath: ['5733013'],
                    },
                    {
                      attrId: '440627',
                      code: 'childCatalogDesc',
                      name: '子类目项描述',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['childCatalogDesc'],
                      _idpath: ['440627'],
                    },
                    {
                      attrId: '177104',
                      code: 'approveGradeName',
                      name: '审批等级名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['approveGradeName'],
                      _idpath: ['177104'],
                    },
                    {
                      attrId: '13154521',
                      code: 'custMemberList',
                      name: '成员信息',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['custMemberList'],
                      _idpath: ['13154521'],
                    },
                    {
                      attrId: '5397914',
                      code: 'instList',
                      name: '多实例',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['instList'],
                      _idpath: ['5397914'],
                    },
                    {
                      attrId: '471925',
                      code: 'customObject',
                      name: '自定义数据',
                      type: 'object',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['customObject'],
                      _idpath: ['471925'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 15,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setCurrentFormValues',
                dataId: 168776957672392770,
                options: {
                  compId: 'Form_414485',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '690328',
                  params: '$data_9981685$',
                },
                line_number: 16,
              },
              {
                type: 'setCurrentFormValues',
                dataId: 168776958356224160,
                options: {
                  compId: 'Form_270033',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '978637',
                  params: '$data_9981685$',
                },
                line_number: 17,
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '673348',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.sceneOrigin$',
                      operate: '==',
                      manualValue: 'U',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168804149921446050,
                elseIfs: [],
                line_number: 18,
                callback1: [
                  {
                    type: 'getCurrentFormValues',
                    dataId: 168804149921448350,
                    options: {
                      compId: 'Form_414485',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Form',
                      id: '946833',
                    },
                    line_number: 19,
                    callback1: [
                      {
                        type: 'getCurrentFormValues',
                        dataId: 168804149921404380,
                        options: {
                          compId: 'Form_270033',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Form',
                          id: '1297327',
                        },
                        line_number: 20,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 168804149921410270,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '375835',
                              pageJsonId: '4183564',
                              code: 'function main(data,state,success,fail){var result=[];;console.log("1+N+n\\u8868\\u5355\\u6570\\u636E",Form_414485);for(var name in Form_414485){var temp={};temp["attrCode"]=name;temp["attrName"]="";temp["attrValue"]=Form_414485[name]||"";result.push(temp)}for(var _name in Form_270033){var _temp={};_temp["attrCode"]=_name;_temp["attrName"]="";_temp["attrValue"]=Form_270033[_name]||"";result.push(_temp)}console.log("1+N+n-attrList",result);data.sceneSubmit.attrList=result;success()};',
                            },
                            line_number: 21,
                            callback1: [
                              {
                                type: 'callCustomPageFunc',
                                dataId: 168804149921486240,
                                options: {
                                  compId: 'callCustomPageFunc',
                                  compName: 'system',
                                  id: '4278176',
                                  pageJsonId: '4183564',
                                  pathname: '/flow/audit',
                                  pageId: '874567207627108352',
                                  modalPath: '/flow/audit',
                                  customFuncName: 'updateOrderSubmit',
                                  customFuncParams: '$data.sceneSubmit$',
                                  paramsObj: {
                                    childCatalogCode: 'CLS_TY_0001_0004',
                                    attrList: '$data_375835$',
                                  },
                                  paramsObjKeyValueMap: {
                                    childCatalogCode: 'CLS_TY_0001_0004',
                                    attrList: '$data_375835$',
                                  },
                                },
                                line_number: 22,
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
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 168785631955480480,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '2658425',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var itemList=state.itemList;var customObject=itemList.customObject;customObject.Products=customObject.Products.map(function(item){var productInfoItem=Object.assign({productSpecNumber:item.productSpec.productSpecNumber,productSpecName:item.productSpec.productSpecName,status:item.productSpec.status,description:item.productSpec.description},item);return productInfoItem});data.sceneSubmit.customObject=customObject;console.log("1+N+N-customObject",customObject);var result={chargeItemInfo:customObject.chargeItemInfo,poSpecRatePlans:customObject.poSpecRatePlans,productInfo:customObject.Products};console.log("1+N+N-customObject-result",result);success(result)};',
              actionTitle: 'customObject',
            },
            line_number: 23,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 168785631955412900,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '533265',
                  pageJsonId: '537892',
                  dataSourceId: 166096152690913730,
                  dataSourceName: 'sceneSubmit',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '154379',
                      code: 'catalogCode',
                      name: '类目编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogCode'],
                      _idpath: ['154379'],
                    },
                    {
                      attrId: '4562264',
                      code: 'approveGrade',
                      name: '审批等级',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['approveGrade'],
                      _idpath: ['4562264'],
                    },
                    {
                      attrId: '63768',
                      code: 'attrList',
                      name: '要素',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      value: { type: [], code: '' },
                      showInput: true,
                      _codePath: ['attrList'],
                      _idpath: ['63768'],
                    },
                    {
                      attrId: '919265',
                      code: 'fileInfo',
                      name: '附件',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      children: [],
                      showInput: true,
                      _codePath: ['fileInfo'],
                      _idpath: ['919265'],
                    },
                    {
                      attrId: '360171',
                      code: 'catalogItemCode',
                      name: '类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogItemCode'],
                      _idpath: ['360171'],
                    },
                    {
                      attrId: '420623',
                      code: 'catalogItemSubType',
                      name: '类目项子类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogItemSubType'],
                      _idpath: ['420623'],
                    },
                    {
                      attrId: '375466',
                      code: 'childCatalogCode',
                      name: '子类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['childCatalogCode'],
                      _idpath: ['375466'],
                    },
                    {
                      attrId: '9257773',
                      code: 'parentCatalogCode',
                      name: '上级类目编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['parentCatalogCode'],
                      _idpath: ['9257773'],
                    },
                    {
                      attrId: '5733013',
                      code: 'parentCatalogItemCode',
                      name: '上级类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['parentCatalogItemCode'],
                      _idpath: ['5733013'],
                    },
                    {
                      attrId: '440627',
                      code: 'childCatalogDesc',
                      name: '子类目项描述',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['childCatalogDesc'],
                      _idpath: ['440627'],
                    },
                    {
                      attrId: '177104',
                      code: 'approveGradeName',
                      name: '审批等级名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['approveGradeName'],
                      _idpath: ['177104'],
                    },
                    {
                      attrId: '13154521',
                      code: 'custMemberList',
                      name: '成员信息',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['custMemberList'],
                      _idpath: ['13154521'],
                    },
                    {
                      attrId: '5397914',
                      code: 'instList',
                      name: '多实例',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['instList'],
                      _idpath: ['5397914'],
                    },
                    {
                      attrId: '471925',
                      code: 'customObject',
                      name: '自定义数据',
                      type: 'object',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['customObject'],
                      _idpath: ['471925'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 24,
                callback1: [],
                callback2: [],
              },
              {
                type: 'reloadTableData',
                dataId: 168791826535012350,
                options: {
                  compId: 'Table_242006',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '5203475',
                  data: '$data_2658425.chargeItemInfo$',
                  total: '$data_2658425.chargeItemInfo.length$',
                  current: '1',
                },
                line_number: 25,
                callback1: [
                  {
                    type: 'getTableData',
                    dataId: 168793690009361400,
                    options: {
                      compId: 'Table_242006',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '350922',
                    },
                    line_number: 26,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 168793690374403700,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '61065',
                          pageJsonId: '537892',
                          value: ['费项表格', '$tableData_350922$'],
                        },
                        line_number: 27,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'reloadTableData',
                dataId: 168791829787203600,
                options: {
                  compId: 'Table_3108885',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '057354',
                  data: '$data_2658425.productInfo$',
                  total: '$data_2658425.productInfo.length$',
                  current: '1',
                },
                line_number: 28,
                callback1: [],
              },
              {
                type: 'reloadTableData',
                dataId: 168791832981517800,
                options: {
                  compId: 'Table_69807',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '072781',
                  data: '$data_2658425.poSpecRatePlans$',
                  total: '$data_2658425.poSpecRatePlans.length$',
                  current: '1',
                },
                line_number: 29,
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
              code: 'function main(data,state,success,fail){var item=state.itemList;success(item.fileInfo)};',
              actionTitle: '附件初始化',
            },
            line_number: 30,
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
                line_number: 31,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '589936',
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
                    condId: '7876274',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746080493976000,
                elseIfs: [],
                line_number: 32,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166987741596126900,
                    options: {
                      compId: 'Table_5369494_400146',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '410871',
                      visible: '',
                    },
                    line_number: 33,
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
            line_number: 34,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166858284680591580,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '019114',
                  visible: 'true',
                },
                line_number: 35,
              },
              {
                type: 'setDisable',
                dataId: 166858285453218000,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                    'TextArea_419676',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '0326314',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                    'TextArea_419676',
                  ],
                },
                line_number: 36,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse165.params = [] || [];
    CMDGenerator(eventDataifelse165, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest307: any = [
      {
        type: 'apiRequest',
        dataId: 166858728815627600,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '671052',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '671052_header',
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
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '671052_path.attrCode',
                  value: { type: ['customize'], code: 'standardProd' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '671052_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '671052_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '671052_body',
            },
          ],
        },
        line_number: 37,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166858748293521920,
            shielding: true,
            options: {
              compId: 'Select_213898',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '130743',
              data: '$reply_671052?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 38,
            callback1: [],
          },
          {
            type: 'setDataSource',
            dataId: 167627517153967040,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '9506894',
              pageJsonId: '537892',
              dataSourceId: 167627498451102300,
              dataSourceName: 'prodSelectList',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [],
              operateType: 3,
              onlySetPatch: false,
              otherObjectArrayOptions: {},
              newData: '$reply_671052?.resultData$',
            },
            line_number: 39,
            callback1: [
              {
                type: 'console',
                dataId: 167627517153988640,
                shielding: true,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '685049',
                  pageJsonId: '537892',
                  value: ['产品实例列表', '$data.prodSelectList$'],
                },
                line_number: 40,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest307.params = [] || [];
    CMDGenerator(eventDataapiRequest307, {}, 'apiRequest', {
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
        className="View_View_537892_1_573149"
        name={'页面'}
        $$componentItem={{
          id: 'View_537892_1_573149',
          uid: 'View_537892_1_573149',
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
          width: '100%',
          height: '0A',
          overflow: 'hidden',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_573149')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'商品自动配置上架'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558_7410426',
            uid: 'Divider_52558_7410426',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_52558_7410426')}
          {...injectData}
        />
        <View
          name={'布局容器'}
          className={'fixed-form-item-label-width-150'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_3483268',
            uid: 'View_6806553_3483268',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553_3483268')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_830821',
              uid: 'HorizontalView_004602_830821',
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
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_004602_830821')
            }
            {...injectData}
          >
            <View
              className="View_View_339406_177732"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_177732',
                uid: 'View_339406_177732',
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
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_339406_177732')}
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'商品自动配置上架'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524',
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
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_6319234_3569864_15467365_781748_88437"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_88437',
                    uid: 'View_6319234_3569864_15467365_781748_88437',
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
                      'View_6319234_3569864_15467365_781748_88437',
                    )
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
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
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Card
            name={'省内商品信息卡片'}
            cardIconType={'none'}
            extendNum={3}
            title={'省内商品信息'}
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
              id: 'Card_79842901',
              uid: 'Card_79842901',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0 0 16px 0',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_79842901')}
            {...injectData}
          >
            <Form
              name={'省内商品信息表单'}
              colSpan={8}
              labelCol={'9'}
              wrapperCol={15}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_414485'}
              $$componentItem={{
                id: 'Form_414485',
                uid: 'Form_414485',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              onValuesChange={(changedFieldName: any, changedValue: any) => {
                // console 169906593078338430
                console.log('变动了。。');
                const eventDataifelse474: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '673348',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.sceneOrigin$',
                          operate: '==',
                          manualValue: 'U',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168802592569165380,
                    elseIfs: [],
                    line_number: 2,
                    callback1: [
                      {
                        type: 'getCurrentFormValues',
                        dataId: 168802600946240400,
                        options: {
                          compId: 'Form_414485',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Form',
                          id: '549628',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'getCurrentFormValues',
                            dataId: 168802600946213000,
                            options: {
                              compId: 'Form_270033',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Form',
                              id: '745568',
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 168802600946206560,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '914922',
                                  pageJsonId: '4183564',
                                  code: 'function main(data,state,success,fail){var result=[];;console.log("1+N+n\\u8868\\u5355\\u6570\\u636E",Form_414485);console.log("\\u6570\\u636E:",JSON.stringify(Form_414485));for(var name in Form_414485){var temp={};temp["attrCode"]=name;temp["attrName"]="";temp["attrValue"]=Form_414485[name];result.push(temp)}for(var _name in Form_270033){var _temp={};_temp["attrCode"]=_name;_temp["attrName"]="";_temp["attrValue"]=Form_270033[_name];result.push(_temp)}console.log("1+N+n-attrList",result);data.sceneSubmit.attrList=result;success()};',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'callCustomPageFunc',
                                    dataId: 168802600946253220,
                                    options: {
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '9569575',
                                      pageJsonId: '4183564',
                                      pathname: '/flow/audit',
                                      pageId: '874567207627108352',
                                      modalPath: '/flow/audit',
                                      customFuncName: 'updateOrderSubmit',
                                      customFuncParams: '$data.sceneSubmit$',
                                      paramsObj: {
                                        childCatalogCode: 'CLS_TY_0001_0004',
                                        attrList: '$data_914922$',
                                      },
                                      paramsObjKeyValueMap: {
                                        childCatalogCode: 'CLS_TY_0001_0004',
                                        attrList: '$data_914922$',
                                      },
                                    },
                                    line_number: 6,
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
                    ],
                  },
                ];
                eventDataifelse474.params =
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
                  eventDataifelse474,
                  { changedFieldName, changedValue },
                  'ifelse',
                  {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_414485')}
              {...injectData}
            >
              <Input
                name={'省内商品编码'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
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
                fieldName={'ngPoId'}
                maxLength={12}
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
                  id: 'Input_465592',
                  uid: 'Input_465592',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_465592')}
                {...injectData}
              />
              <Input
                name={'省内商品名称'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={1}
                fieldName={'ngPoName'}
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
                  id: 'Input_703461',
                  uid: 'Input_703461',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_703461')}
                {...injectData}
              />
              <Input
                name={'省内商品大类'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={2}
                fieldName={'ngPoClass'}
                maxLength={4}
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
                  id: 'Input_9325585',
                  uid: 'Input_9325585',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_9325585')}
                {...injectData}
              />
              <Input
                name={'省内商品大类名称'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={3}
                fieldName={'ngPoClassName'}
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
                  id: 'Input_82528218',
                  uid: 'Input_82528218',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_82528218')}
                {...injectData}
              />
              <Input
                name={'省内商品小类'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={4}
                fieldName={'ngPoClassSmall'}
                maxLength={6}
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
                  id: 'Input_960909',
                  uid: 'Input_960909',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_960909')}
                {...injectData}
              />
              <Input
                name={'省内商品小类名称'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={5}
                fieldName={'ngPoClassSmallName'}
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
                  id: 'Input_2971792',
                  uid: 'Input_2971792',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_2971792')}
                {...injectData}
              />
              <Input
                name={'省内商品描述'}
                size={'default'}
                selfSpan={24}
                labelCol={'3'}
                wrapperCol={'21'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={6}
                fieldName={'ngPoDesc'}
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
                  id: 'Input_74844',
                  uid: 'Input_74844',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_74844')}
                {...injectData}
              />
            </Form>
          </Card>
          <Card
            name={'总部商品规格信息卡片'}
            cardIconType={'none'}
            extendNum={3}
            title={'总部商品规格信息'}
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
              id: 'Card_862731',
              uid: 'Card_862731',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0 0 16px 0',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_862731')}
            {...injectData}
          >
            <Form
              name={'总部商品规格信息表单'}
              colSpan={8}
              labelCol={'9'}
              wrapperCol={15}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_270033'}
              $$componentItem={{
                id: 'Form_270033',
                uid: 'Form_270033',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_270033')}
              {...injectData}
            >
              <Select
                name={'商品规格操作'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                formItemIndex={0}
                fieldName={'productAction'}
                $$componentItem={{
                  id: 'Select_388225',
                  uid: 'Select_388225',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_388225')}
                {...injectData}
              />
              <Input
                name={'商品规格编码'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={1}
                fieldName={'poSpecNumber'}
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
                  id: 'Input_543497',
                  uid: 'Input_543497',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_543497')}
                {...injectData}
              />
              <Input
                name={'商品规格名称'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={2}
                fieldName={'poSpecName'}
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
                  id: 'Input_853085',
                  uid: 'Input_853085',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_853085')}
                {...injectData}
              />
              <Select
                name={'商品规格状态'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                formItemIndex={3}
                fieldName={'productStatus'}
                $$componentItem={{
                  id: 'Select_122215',
                  uid: 'Select_122215',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_122215')}
                {...injectData}
              />
              <Select
                name={'商品类型'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                formItemIndex={4}
                fieldName={'poSpecType'}
                $$componentItem={{
                  id: 'Select_081304',
                  uid: 'Select_081304',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_081304')}
                {...injectData}
              />
              <Select
                name={'可支持的操作类型'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                formItemIndex={5}
                fieldName={'operationSubTypeID'}
                $$componentItem={{
                  id: 'Select_46945',
                  uid: 'Select_46945',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_46945')}
                {...injectData}
              />
              <DatePicker
                name={'生效时间'}
                timeMode={'date'}
                format={'YYYY-MM-DD'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={'no'}
                startTime={''}
                endTime={''}
                placeholder={'请选择日期'}
                pickerType={'DatePicker'}
                customTip={''}
                formItemIndex={6}
                fieldName={'startDate'}
                $$componentItem={{
                  id: 'DatePicker_4913772',
                  uid: 'DatePicker_4913772',
                  type: 'DatePicker',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                defaultValue={{}}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'DatePicker_4913772')}
                {...injectData}
              />
              <DatePicker
                name={'失效时间'}
                timeMode={'date'}
                format={'YYYY-MM-DD'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={'no'}
                startTime={''}
                endTime={''}
                placeholder={'请选择日期'}
                pickerType={'DatePicker'}
                customTip={''}
                formItemIndex={7}
                fieldName={'endDate'}
                $$componentItem={{
                  id: 'DatePicker_713708',
                  uid: 'DatePicker_713708',
                  type: 'DatePicker',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                defaultValue={{}}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'DatePicker_713708')}
                {...injectData}
              />
              <Input
                name={'支持自动上架'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={8}
                fieldName={'isAutoConfig'}
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
                  id: 'Input_143701',
                  uid: 'Input_143701',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_143701')}
                {...injectData}
              />
              <DatePicker
                name={'商品规格发布时间'}
                timeMode={'date'}
                format={'YYYY-MM-DD'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={'no'}
                startTime={''}
                endTime={''}
                placeholder={'请选择日期'}
                pickerType={'DatePicker'}
                customTip={''}
                formItemIndex={9}
                fieldName={'poTimeStamp'}
                $$componentItem={{
                  id: 'DatePicker_706247',
                  uid: 'DatePicker_706247',
                  type: 'DatePicker',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                defaultValue={{}}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'DatePicker_706247')}
                {...injectData}
              />
              <Input
                name={'一经通信和信息化产品编码'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={10}
                fieldName={'productBICode'}
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
                  id: 'Input_037503',
                  uid: 'Input_037503',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_037503')}
                {...injectData}
              />
              <TextArea
                name={'商品描述'}
                selfSpan={24}
                labelCol={'3'}
                wrapperCol={21}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={11}
                fieldName={'Description'}
                $$componentItem={{
                  id: 'TextArea_911085',
                  uid: 'TextArea_911085',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'TextArea_911085')}
                {...injectData}
              />
              <Input
                name={'商品开放省'}
                size={'default'}
                selfSpan={24}
                labelCol={'3'}
                wrapperCol={21}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={12}
                fieldName={'enableCompanys'}
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
                  id: 'Input_832183',
                  uid: 'Input_832183',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_832183')}
                {...injectData}
              />
            </Form>
          </Card>
        </View>
        <Card
          name={'商品级费用项卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'商品级费用项'}
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
            id: 'Card_644029',
            uid: 'Card_644029',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_644029')}
          {...injectData}
        >
          <Table
            name={'商品级费用项表格'}
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
                title: '省内账目项',
                dataIndex: 'poBillItem',
                key: 'column1',
                className: '',
                id: '241872',
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
                id: '121735',
                dataIndex: 'poChargeItem',
                title: '总部商品费用项目',
                key: '121735',
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
                id: '515376',
                dataIndex: 'poChargeItemName',
                title: '总部商品费用项目名称',
                key: '515376',
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
                title: '一级费项编码',
                dataIndex: 'chargeCode1',
                key: 'column2',
                className: 'divider',
                id: '8488322',
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
                title: '一级费项名称',
                dataIndex: 'chargeName1',
                key: 'column3',
                className: 'divider',
                id: '94884',
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
                title: '二级费项编码',
                dataIndex: 'chargeCode2',
                key: 'column4',
                className: 'divider',
                id: '5736897',
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
                title: '二级费项名称',
                dataIndex: 'chargeName2',
                key: 'column5',
                className: 'divider',
                id: '8739753',
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
                id: '087608',
                dataIndex: 'chargeCode3',
                title: '三级费项编码',
                key: '087608',
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
                id: '636443',
                dataIndex: 'chargeName3',
                title: '三级费项名称',
                key: '636443',
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
                id: '720711',
                dataIndex: 'taxRate',
                title: '税率(%)',
                key: '720711',
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
                id: '007884',
                dataIndex: 'chargeType',
                title: '费项类型',
                key: '007884',
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
                id: '6864934',
                dataIndex: 'acctProductCode',
                title: '管会产品编码',
                key: '6864934',
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
                id: '407892',
                dataIndex: 'acctCode',
                title: '管会科目代码',
                key: '407892',
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
                id: '5451324',
                dataIndex: 'chargeBICode',
                title: '一经通信和信息化费项编码',
                key: '5451324',
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
                id: '296321',
                dataIndex: 'productBICode',
                title: '一经通信和信息化产品编码',
                key: '296321',
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
                id: '3256655',
                title: '一经通信和信息化产品名称',
                dataIndex: 'productBIName',
                key: '3256655',
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
            fixedAction={true}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            rowKey={'rowKey'}
            scroll={{ x: 1000 }}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '157089',
                checked: true,
              },
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '9678397',
                rule: '!data.editable.account',
                checked: true,
              },
            ]}
            extend={[]}
            $$componentItem={{
              id: 'Table_242006',
              uid: 'Table_242006',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal154: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168785802219369600,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '356496',
                    pageJsonId: '537892',
                    modalname: '/CLS_CP_0017_0001_feeInfo',
                    pageId: '990817782033211392',
                    modalPath: '/CLS_CP_0017_0001_feeInfo',
                    paramsObj: {
                      formData: '$row$',
                      actionType: 'V',
                      title: '商品',
                    },
                    paramsObjKeyValueMap: {
                      formData: '$row$',
                      actionType: 'V',
                      title: '商品',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal154.params =
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
                eventDatashowCustomModal154,
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
              const eventDatashowCustomModal155: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168793606143198700,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '933071',
                    pageJsonId: '537892',
                    modalname: '/CLS_CP_0017_0001_feeInfo',
                    pageId: '990817782033211392',
                    modalPath: '/CLS_CP_0017_0001_feeInfo',
                    paramsObj: {
                      formData: '$row$',
                      actionType: 'U',
                      title: '商品',
                    },
                    paramsObjKeyValueMap: {
                      formData: '$row$',
                      actionType: 'U',
                      title: '商品',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 168794169575149500,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '701207',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.sceneSubmit.customObject.chargeItemInfo[index].poBillItem=okData_933071.poBillItem;data.sceneSubmit.customObject.chargeItemInfo[index].poChargeItem=okData_933071.poChargeItem;data.sceneSubmit.customObject.chargeItemInfo[index].poChargeItemName=okData_933071.poChargeItemName;success(data.sceneSubmit.customObject.chargeItemInfo)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callCustomPageFunc',
                          dataId: 168796237487770200,
                          options: {
                            compId: 'callCustomPageFunc',
                            compName: 'system',
                            id: '547199',
                            pageJsonId: '4183564',
                            pathname: '/flow/audit',
                            pageId: '874567207627108352',
                            modalPath: '/flow/audit',
                            customFuncName: 'updateOrderSubmit',
                            customFuncParams: '$data.sceneSubmit$',
                            paramsObj: {
                              childCatalogCode: 'CLS_TY_0001_0004',
                              attrList: '$data_978247$',
                            },
                            paramsObjKeyValueMap: {
                              childCatalogCode: 'CLS_TY_0001_0004',
                              attrList: '$data_978247$',
                            },
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'reloadTableData',
                          dataId: 168796239317358660,
                          options: {
                            compId: 'Table_242006',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '630272',
                            data: '$data_701207$',
                            total: '$data_701207.length$',
                            current: '1',
                          },
                          line_number: 4,
                          callback1: [],
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal155.params =
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
                eventDatashowCustomModal155,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_242006')}
            {...injectData}
          />
        </Card>
        <Card
          name={'产品规格信息卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'产品规格信息'}
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
            id: 'Card_0571784',
            uid: 'Card_0571784',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_0571784')}
          {...injectData}
        >
          <Table
            name={'产品规格信息表格'}
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
                title: '省内产品编码',
                dataIndex: 'ngProductId',
                key: 'column1',
                className: '',
                id: '4937617',
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
                title: '省内产品名称',
                dataIndex: 'ngProductName',
                key: 'column2',
                className: 'divider',
                id: '369593',
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
                title: '省内产品大类',
                dataIndex: 'ngProductClass',
                key: 'column3',
                className: 'divider',
                id: '527274',
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
                id: '982318',
                dataIndex: 'ngProductClassName',
                title: '省内产品大类名称',
                key: '982318',
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
                id: '24831364',
                title: '省内产品小类',
                dataIndex: 'ngProductClassSmall',
                key: '24831364',
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
                id: '616111',
                dataIndex: 'ngProductClassSmallName',
                title: '省内产品小类名称',
                key: '616111',
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
                title: '省内产品描述',
                dataIndex: 'ngProductDesc',
                key: 'column4',
                className: 'divider',
                id: '7679106',
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
                title: '产品规格编号',
                dataIndex: 'productSpecNumber',
                key: 'column5',
                className: 'divider',
                id: '6113055',
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
                id: '6329137',
                title: '产品规格名称',
                dataIndex: 'productSpecName',
                key: '6329137',
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
                id: '048607',
                title: '产品规格状态',
                dataIndex: 'status',
                key: '048607',
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
                id: '6576635',
                title: '产品描述',
                dataIndex: 'description',
                key: '6576635',
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
            fixedAction={true}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            rowKey={'key'}
            scroll={{ x: 1000 }}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '157089',
                checked: true,
              },
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '9678397',
                rule: '!data.editable.account && !data.editable.prod',
                checked: true,
              },
            ]}
            extend={[]}
            $$componentItem={{
              id: 'Table_3108885',
              uid: 'Table_3108885',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal156: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168792173524629800,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '5108',
                    pageJsonId: '537892',
                    modalname: '/CLS_CP_0017_0001_prodInfo',
                    pageId: '990550518931316736',
                    modalPath: '/CLS_CP_0017_0001_prodInfo',
                    paramsObj: { formData: '$row$', actionType: 'V' },
                    paramsObjKeyValueMap: {
                      formData: '$row$',
                      actionType: 'V',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal156.params =
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
                eventDatashowCustomModal156,
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
              const eventDatashowCustomModal157: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168793620948749120,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '48726',
                    pageJsonId: '537892',
                    modalname: '/CLS_CP_0017_0001_prodInfo',
                    pageId: '990550518931316736',
                    modalPath: '/CLS_CP_0017_0001_prodInfo',
                    paramsObj: {
                      formData: '$row$',
                      actionType: 'U',
                      editable: '$data.editable$',
                    },
                    paramsObjKeyValueMap: {
                      formData: '$row$',
                      actionType: 'U',
                      editable: '$data.editable$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 168796120649933000,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '4773797',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.sceneSubmit.customObject.Products[index]=okData_48726;success(data.sceneSubmit.customObject.Products)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'reloadTableData',
                          dataId: 168796152593220030,
                          options: {
                            compId: 'Table_3108885',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '895387',
                            data: '$data_4773797$',
                            total: '$data_4773797.length$',
                            current: '1',
                          },
                          line_number: 3,
                          callback1: [],
                        },
                        {
                          type: 'callCustomPageFunc',
                          dataId: 168796259370197700,
                          options: {
                            compId: 'callCustomPageFunc',
                            compName: 'system',
                            id: '920922',
                            pageJsonId: '4183564',
                            pathname: '/flow/audit',
                            pageId: '874567207627108352',
                            modalPath: '/flow/audit',
                            customFuncName: 'updateOrderSubmit',
                            customFuncParams: '$data.sceneSubmit$',
                            paramsObj: {
                              childCatalogCode: 'CLS_TY_0001_0004',
                              attrList: '$data_978247$',
                            },
                            paramsObjKeyValueMap: {
                              childCatalogCode: 'CLS_TY_0001_0004',
                              attrList: '$data_978247$',
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
              ];
              eventDatashowCustomModal157.params =
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
                eventDatashowCustomModal157,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_3108885')}
            {...injectData}
          />
        </Card>
        <Card
          name={'商品规格资费卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'商品规格资费'}
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
            id: 'Card_88492',
            uid: 'Card_88492',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_88492')}
          {...injectData}
        >
          <Table
            name={'商品规格资费表格'}
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
                title: '资费计划标识',
                dataIndex: 'ratePlanID',
                key: 'column1',
                className: '',
                id: '4464309',
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
                title: '资费计划名称',
                dataIndex: 'ratePlanName',
                key: 'column2',
                className: 'divider',
                id: '624083',
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
                title: '资费类别',
                dataIndex: 'ratePlanSort',
                key: 'column3',
                className: 'divider',
                id: '6890194',
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
                title: '资费描述',
                dataIndex: 'Description',
                key: 'column4',
                className: 'divider',
                id: '652131',
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
                title: '叠加包周期',
                dataIndex: 'packetPeriod',
                key: 'column5',
                className: 'divider',
                id: '464905',
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
                id: '8959277',
                title: '资费计划类型',
                dataIndex: 'ratePlanType',
                key: '8959277',
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
                id: '189247',
                title: '省内资费编码',
                dataIndex: 'ratePlanProvID',
                key: '189247',
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
                id: '9296518',
                title: '期望生效时间',
                dataIndex: 'startDate',
                key: '9296518',
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
                id: '377145',
                title: '期望失效时间',
                dataIndex: 'endDate',
                key: '377145',
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
                id: '1268528',
                title: '操作类型',
                dataIndex: 'Action',
                key: '1268528',
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
            customNum={3}
            rowKey={'ratePlanID'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '157089',
                checked: true,
              },
            ]}
            extend={[]}
            $$componentItem={{
              id: 'Table_69807',
              uid: 'Table_69807',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal158: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168793597776002720,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '550661',
                    pageJsonId: '537892',
                    modalname: '/CLS_CP_0017_0001_cost',
                    pageId: '990866780278415360',
                    modalPath: '/CLS_CP_0017_0001_cost',
                    paramsObj: { title: '商品规格资费', formData: '$row$' },
                    paramsObjKeyValueMap: {
                      title: '商品规格资费',
                      formData: '$row$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal158.params =
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
                eventDatashowCustomModal158,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_69807')}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0017_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { workItemId: '', sceneOrigin: '' },
});
