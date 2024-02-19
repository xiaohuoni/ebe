// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  HorizontalView,
  Input,
  Row,
  Select,
  StdUpload,
  Table,
  Text,
  TextArea,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_537892__ .Form_449441_1900385_965292_804694_0429677_280477_612369_3241812 .custom-box div:nth-child(1){min-width:20px;}.__CustomClass_537892__ .Form_449441_1900385_965292_804694_0429677_280477_612369_3241812 .custom-box .pcfactory-legacy-form-explain{min-width:150px;}.__CustomClass_537892__ .View_908992 span::before{display:inline-block;margin-right:4px;color:#ff4d4f;font-size:12px;font-family:SimSun,sans-serif;line-height:1;content:"*";}.__CustomClass_537892__ .Checkbox_905314 .custom-check-box span:nth-child(2){padding-right:0;padding-left:3px;}.__CustomClass_537892__ .Checkbox_705778 .custom-check-box span:nth-child(2){padding-right:0;padding-left:3px;}.__CustomClass_537892__ .Checkbox_6298215 .custom-check-box span:nth-child(2){padding-right:0;padding-left:3px;}.__CustomClass_537892__ .Checkbox_581346 .custom-check-box span:nth-child(2){padding-right:0;padding-left:3px;}.__CustomClass_537892__ .Checkbox_711864 .custom-check-box span:nth-child(2){padding-right:0;padding-left:3px;}.__CustomClass_537892__ .Table_8700198_3717786 .custom-table-class .pcfactory-table-row .pcfactory-table-cell:last-child{max-width:400px;}',

  '537892',
);

const ClsJc_0001_0003copy$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1964167: any) => {
    const eventDatacustomActionCode49: any = [
      {
        type: 'customActionCode',
        dataId: 167282598295127330,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '478997',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_1964167;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282599351063650,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '2334123',
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
    eventDatacustomActionCode49.params =
      [
        {
          title: '事件入参',
          name: 'options_1964167',
          value: '$options_1964167$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode49,
      { options_1964167 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const calBudget = (options_740271: any) => {
    const eventDatagetCurrentFormValues1: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 170260798233245730,
        options: {
          compId:
            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '485141',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170260798658490080,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '967481',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var form=Form_449441_1900385_965292_804694_0429677_280477_612369_3241812;var smallCakeNum=parseFloat(form["serviceResourceSmallCake"]||0);var flowerNum=parseFloat(form["serviceResourceFlower"]||0);var cakeNum=parseFloat(form["serviceResourceCake"]||0);var voucherNum=parseFloat(form["serviceResourceVoucher"]||0);var otherPrice=parseFloat(form["serviceResourceOther"]||0);console.log("smallCakeNum = ",smallCakeNum);console.log("flowerNum = ",flowerNum);console.log("cakeNum = ",cakeNum);console.log("voucherNum = ",voucherNum);console.log("otherPrice = ",otherPrice);var price=100*smallCakeNum+200*flowerNum+200*cakeNum+100*voucherNum+otherPrice;success(price.toFixed(3))};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 170260828325376450,
                options: {
                  compId: 'Input_9687',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '821924',
                  valueList: { Input_9687: '$data_967481$' },
                },
                line_number: 3,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatagetCurrentFormValues1.params =
      [
        {
          title: '事件入参',
          name: 'options_740271',
          value: '$options_740271$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues1,
      { options_740271 },
      'getCurrentFormValues',
      {
        id: 'getCurrentFormValues',
        name: 'getCurrentFormValues',
        type: 'getCurrentFormValues',
        platform: 'undefined',
      },
    );
  };
  const setRequired = (options_612197: any) => {
    const eventDatagetCurrentFormValues2: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 170260852774334560,
        options: {
          compId:
            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '726572',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170260853211889440,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '604485',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var form=Form_449441_1900385_965292_804694_0429677_280477_612369_3241812;var isSmallCake=form["isSmallCake"];var isFlower=form["isFlower"];var isCake=form["isCake"];var isVoucher=form["isVoucher"];var isOther=form["isOther"];var smallCakeNum=form["serviceResourceSmallCake"]||undefined;var flowerNum=form["serviceResourceFlower"]||undefined;var cakeNum=form["serviceResourceCake"]||undefined;var voucherNum=form["serviceResourceVoucher"]||undefined;var otherPrice=form["serviceResourceOther"]||undefined;var flag="";if(!isSmallCake&&!isFlower&&!isCake&&!isVoucher&&!isOther){fail()}else{if(isSmallCake&&!smallCakeNum){flag+="smallCake ";console.log("\\uFF0BsmallCake")}if(isFlower&&!flowerNum){flag+="flower ";console.log("\\uFF0Bflower")}if(isCake&&!cakeNum){flag+="cake ";console.log("\\uFF0Bcake")}if(isVoucher&&!voucherNum){flag+="voucherNum ";console.log("\\uFF0BvoucherNum")}if(isOther&&!otherPrice){flag+="otherPrice";console.log("\\uFF0BotherPrice")}success(flag)}};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'sysSetRequired',
                dataId: 170260866744726530,
                shielding: true,
                options: {
                  compId: [
                    'Input_848939',
                    'Input_3812606',
                    'Input_649445',
                    'Input_665686',
                    'Input_419549',
                  ],
                  compName: 'page',
                  id: '876138',
                  pageJsonId: '537892',
                  required: '',
                  compid: [
                    'Input_848939',
                    'Input_3812606',
                    'Input_649445',
                    'Input_665686',
                    'Input_419549',
                  ],
                },
                line_number: 3,
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '5345625',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_604485$',
                      operate: 'contains',
                      manualValue: 'smallCake',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170261088027507330,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170261933848317400,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170261934470746500,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: 'Input_848939',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '927076',
                          required: '',
                        },
                        actionObjId: 'Input_848939',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 6,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'setRequired',
                        dataId: 170261934470746500,
                        options: {
                          compId: 'Input_848939',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '927076',
                          required: '',
                        },
                        line_number: 6,
                      },
                    ],
                  },
                ],
                line_number: 4,
                callback1: [
                  {
                    type: 'setRequired',
                    dataId: 170261916996549280,
                    options: {
                      compId: 'Input_848939',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '340493',
                      required: 'true',
                    },
                    line_number: 5,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '5345625',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_604485$',
                      operate: 'contains',
                      manualValue: 'flower',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170261918990435400,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170261934779964860,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170261935073952200,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_3812606'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '0268068',
                          required: '',
                          compid: ['Input_3812606'],
                        },
                        actionObjId: 'Input_848939',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 9,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'setRequired',
                        dataId: 170261935073952200,
                        options: {
                          compId: ['Input_3812606'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '0268068',
                          required: '',
                          compid: ['Input_3812606'],
                        },
                        line_number: 9,
                      },
                    ],
                  },
                ],
                line_number: 7,
                callback1: [
                  {
                    type: 'setRequired',
                    dataId: 170261918990488030,
                    options: {
                      compId: ['Input_3812606'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '19894',
                      required: 'true',
                      compid: ['Input_3812606'],
                    },
                    line_number: 8,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '5345625',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_604485$',
                      operate: 'contains',
                      manualValue: 'cake',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170261919106340960,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170261935508434460,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170261936587800200,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_649445'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '8999928',
                          required: '',
                          compid: ['Input_649445'],
                        },
                        actionObjId: 'Input_848939',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 12,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'setRequired',
                        dataId: 170261936587800200,
                        options: {
                          compId: ['Input_649445'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '8999928',
                          required: '',
                          compid: ['Input_649445'],
                        },
                        line_number: 12,
                      },
                    ],
                  },
                ],
                line_number: 10,
                callback1: [
                  {
                    type: 'setRequired',
                    dataId: 170261919106369500,
                    options: {
                      compId: ['Input_649445'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '599647',
                      required: 'true',
                      compid: ['Input_649445'],
                    },
                    line_number: 11,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '5345625',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_604485$',
                      operate: 'contains',
                      manualValue: 'voucher',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170261919234979870,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170261937023094820,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170261937177636220,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_665686'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '216169',
                          required: '',
                          compid: ['Input_665686'],
                        },
                        actionObjId: 'Input_848939',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 15,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'setRequired',
                        dataId: 170261937177636220,
                        options: {
                          compId: ['Input_665686'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '216169',
                          required: '',
                          compid: ['Input_665686'],
                        },
                        line_number: 15,
                      },
                    ],
                  },
                ],
                line_number: 13,
                callback1: [
                  {
                    type: 'setRequired',
                    dataId: 170261919234982140,
                    options: {
                      compId: ['Input_665686'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '981167',
                      required: 'true',
                      compid: ['Input_665686'],
                    },
                    line_number: 14,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '5345625',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_604485$',
                      operate: 'contains',
                      manualValue: 'otherPrice',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170261923378955620,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170261937657903230,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170261937812955140,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_419549'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '247966',
                          required: '',
                          compid: ['Input_419549'],
                        },
                        actionObjId: 'Input_848939',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 18,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'setRequired',
                        dataId: 170261937812955140,
                        options: {
                          compId: ['Input_419549'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '247966',
                          required: '',
                          compid: ['Input_419549'],
                        },
                        line_number: 18,
                      },
                    ],
                  },
                ],
                line_number: 16,
                callback1: [
                  {
                    type: 'setRequired',
                    dataId: 170261923378992300,
                    options: {
                      compId: ['Input_419549'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '014166',
                      required: 'true',
                      compid: ['Input_419549'],
                    },
                    line_number: 17,
                  },
                ],
              },
            ],
            callback2: [
              {
                type: 'sysSetRequired',
                dataId: 170260868924870000,
                options: {
                  compId: [
                    'Input_848939',
                    'Input_3812606',
                    'Input_649445',
                    'Input_665686',
                    'Input_419549',
                  ],
                  compName: 'page',
                  id: '689897',
                  pageJsonId: '537892',
                  required: 'true',
                  compid: [
                    'Input_848939',
                    'Input_3812606',
                    'Input_649445',
                    'Input_665686',
                    'Input_419549',
                  ],
                },
                line_number: 19,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetCurrentFormValues2.params =
      [
        {
          title: '事件入参',
          name: 'options_612197',
          value: '$options_612197$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues2,
      { options_612197 },
      'getCurrentFormValues',
      {
        id: 'getCurrentFormValues',
        name: 'getCurrentFormValues',
        type: 'getCurrentFormValues',
        platform: 'undefined',
      },
    );
  };
  const customNodeFileUpload = (options_289169: any) => {
    const eventDatacustomActionCode50: any = [
      {
        type: 'customActionCode',
        dataId: 170349851272733470,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '6937006',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var info=options_289169;if(!data.sceneSubmit.customObject){data.sceneSubmit.customObject={}}if(info.type&&info.type=="0"){data.sceneSubmit.fileInfo=info.fileList}else if(info.type&&info.type=="1"){data.sceneSubmit.customObject.settlementFileList=info.fileList}success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170349887550630750,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '597767',
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
                },
                {
                  attrId: '4562264',
                  code: 'approveGrade',
                  name: '审批等级',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '63768',
                  code: 'attrList',
                  name: '要素',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '919265',
                  code: 'fileInfo',
                  name: '附件',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  children: [],
                },
                {
                  attrId: '360171',
                  code: 'catalogItemCode',
                  name: '类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '420623',
                  code: 'catalogItemSubType',
                  name: '类目项子类型',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '375466',
                  code: 'childCatalogCode',
                  name: '子类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9257773',
                  code: 'parentCatalogCode',
                  name: '上级类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '5733013',
                  code: 'parentCatalogItemCode',
                  name: '上级类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '440627',
                  code: 'childCatalogDesc',
                  name: '子类目项描述',
                  type: 'string',
                  initialData: { type: 'static' },
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
                {
                  attrId: '5397914',
                  code: 'instList',
                  name: '多实例',
                  type: 'objectArray',
                  initialData: { type: 'static' },
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
          {
            type: 'ifelse',
            condition: [
              {
                condId: '98149',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$options_289169.type$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170435694493285060,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 170435702245132670,
                children: [
                  {
                    dataName: 'action',
                    dataId: 170435705212658750,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 170435705212660300,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 170435705212657000,
                        children: [],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: ['customFuncName', 'customFuncParams'],
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '5041994',
                      pageJsonId: '537892',
                      customFuncName: 'updateData',
                      customFuncParams: 'object',
                    },
                    actionObjId: 'callSelfFunc',
                    actionObjName: 'system',
                    value: 'callSelfFunc',
                    line_number: 5,
                  },
                ],
                condition: [],
                value: 'elseIf',
                desc: '如果是1，说明是结算附件',
                callback: [
                  {
                    type: 'callSelfFunc',
                    dataId: 170435705212658750,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '5041994',
                      pageJsonId: '537892',
                      customFuncName: 'updateData',
                      customFuncParams: 'object',
                    },
                    line_number: 5,
                    callback1: [],
                    callback2: [],
                  },
                ],
              },
            ],
            line_number: 3,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 170435701355690020,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '018214',
                  pageJsonId: '537892',
                  pathname: '/commonAuditOrder',
                  pageId: '872682457815691264',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/commonAuditOrder',
                },
                line_number: 4,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode50.params =
      [
        {
          title: '事件入参',
          name: 'options_289169',
          value: '$options_289169$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode50,
      { options_289169 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const initSelection = (options_585353: any) => {
    const eventDataapiRequest26: any = [
      {
        type: 'apiRequest',
        dataId: 170373047660521900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '94965268',
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
                  dataKey: '85671_root.header',
                  key: '0-0',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '85671_root.path',
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
                  dataKey: '85671_root.query',
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
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '85671_root.body.catalogCode',
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
                      dataKey: '85671_root.body.attrCode',
                      value: { type: ['customize'], code: 'satisficationFile' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '85671_root.body',
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
              dataKey: '85671_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 170373047660582500,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '5157217',
              pageJsonId: '537892',
              value: ['$reply_94965268?.resultData$'],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 170373047660528700,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '170846',
              pageJsonId: '537892',
              actionTitle: '处理返回数据',
              code: 'function main(data,state,success,fail){var _reply_;var resData=(_reply_=reply_94965268)===null||_reply_===void 0?void 0:_reply_.resultData;console.log("\\u67E5\\u8BE2\\u6EE1\\u610F\\u5EA6\\u63D0\\u5347\\u9644\\u4EF6\\u6570\\u636E\\uFF1A",resData);var resObj={};for(var i=0;i<resData.length;i++){var item=resData[i];if(item.attrValueName=="\\u7ED3\\u7B97\\u9644\\u4EF6"){resObj["settlementFile"]=item.attrValueId}}success(resObj)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 170373047660532300,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '1832506',
                  pageJsonId: '537892',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryDcAttrValueListByPraAttrValueId',
                  _apiCode: 'qryDcAttrValueListByPraAttrValueId',
                  _source: 'rhin',
                  _sourceName: '根据上级属性值id查询下级属性值列表-zrj',
                  _serviceId: '1002049113331240960',
                  _serviceTitle:
                    '根据上级属性值id查询下级属性值列表-zrj: qryDcAttrValueListByPraAttrValueId',
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
                          dataKey: '1832506_root.header',
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
                          dataKey: '1832506_root.path',
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
                          dataKey: '1832506_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'attrValue',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.attrValue',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.attrValue',
                              dataKey: '1832506_root.body.attrValue',
                            },
                            {
                              code: 'attrValueName',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.attrValueName',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.attrValueName',
                              dataKey: '1832506_root.body.attrValueName',
                            },
                            {
                              code: 'pageSize',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.pageSize',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                              id: 'root.body.pageSize',
                              dataKey: '1832506_root.body.pageSize',
                              value: { type: ['customize'], code: '1000' },
                            },
                            {
                              code: 'pageNum',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.pageNum',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-3',
                              id: 'root.body.pageNum',
                              dataKey: '1832506_root.body.pageNum',
                            },
                            {
                              code: 'attrValueId',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.attrValueId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-4',
                              id: 'root.body.attrValueId',
                              dataKey: '1832506_root.body.attrValueId',
                              value: {
                                type: ['context', '$data_170846$'],
                                code: 'settlementFile',
                              },
                            },
                            {
                              code: 'attrId',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.attrId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-5',
                              id: 'root.body.attrId',
                              dataKey: '1832506_root.body.attrId',
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                          id: 'root.body',
                          dataKey: '1832506_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '1832506_root',
                    },
                  ],
                  params: 'object',
                  actionTitle: '获取结算附件的附件类型',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 170373047660575040,
                    options: {
                      compId: 'Select_764216',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '818498',
                      data: '$reply_1832506?.resultData?.records$',
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
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest26.params =
      [
        {
          title: '事件入参',
          name: 'options_585353',
          value: '$options_585353$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest26, { options_585353 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest27: any = [
      {
        type: 'apiRequest',
        dataId: 170373049283694050,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '736879',
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
                      dataKey: '115742_root.body.catalogCode',
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
                      dataKey: '115742_root.body.attrCode',
                      value: { type: ['customize'], code: 'serviceItem' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '115742_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
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
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '115742_root',
            },
          ],
        },
        line_number: 6,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170373049283681950,
            options: {
              compId: 'Select_1514685',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '973201',
              data: '$reply_736879?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 7,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest27.params =
      [
        {
          title: '事件入参',
          name: 'options_585353',
          value: '$options_585353$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest27, { options_585353 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest28: any = [
      {
        type: 'apiRequest',
        dataId: 170373050546383970,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '348125',
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
                      dataKey: '372595_root.body.catalogCode',
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
                      dataKey: '372595_root.body.attrCode',
                      value: { type: ['customize'], code: 'approvedFiles' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '372595_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
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
                  dataKey: '372595_root.header',
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
                  dataKey: '372595_root.path',
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
                  dataKey: '372595_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '372595_root',
            },
          ],
        },
        line_number: 8,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170373050546310050,
            options: {
              compId: 'Select_522405',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '950218',
              data: '$reply_348125?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 9,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest28.params =
      [
        {
          title: '事件入参',
          name: 'options_585353',
          value: '$options_585353$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest28, { options_585353 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest29: any = [
      {
        type: 'apiRequest',
        dataId: 170442437533824860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '377474',
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
                  parents: ['root', 'body'],
                  id: 'body.catalogCode',
                  dataKey: '088178_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['root', 'body'],
                  id: 'body.attrCode',
                  dataKey: '088178_body.attrCode',
                  value: { type: ['customize'], code: 'attachmentType' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-1',
                  _deletable: true,
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '088178_body',
              parentType: 'object',
              parentKey: '0',
              key: '0-3',
              _deletable: true,
            },
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
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
            },
          ],
        },
        line_number: 10,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170442440059002180,
            options: {
              compId: 'Select_166518',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '5575393',
              data: '$reply_377474?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 11,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest29.params =
      [
        {
          title: '事件入参',
          name: 'options_585353',
          value: '$options_585353$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest29, { options_585353 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
  };
  const deliveryExtraParams = (options_685701: any) => {
    const eventDataifelse41: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '8041325',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.tacheCode$',
              operate: '==',
              manualValue: 'APPLY_CREATE',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: {
              useManual: true,
              useObject: false,
              context: '$state.tacheCode$',
              operate: '==',
              manualValue: 'CreateOrder',
            },
            condId: '974317',
            connector: '||',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170381939961314880,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170381948704529920,
            options: {
              compId: 'Checkbox_581346',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Checkbox',
              id: '444469',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 170381948704565470,
                options: {
                  compId: 'Select_522405',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Select',
                  id: '893604',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170381948704591600,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '837995',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var approvedFile=value_893604=="1001"?"1":"0";var isVoucher=value_444469?"1":"0";var obj={approvedFile:approvedFile,isVoucher:isVoucher};var key="gaap-flowAssociationParams-"+(!!urlParam.instNbr?urlParam.instNbr:state.fileInstNbr);window.sessionStorage.setItem(key,JSON.stringify(obj));success()};',
                      actionTitle: '处理数据',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse41.params =
      [
        {
          title: '事件入参',
          name: 'options_685701',
          value: '$options_685701$',
        },
      ] || [];
    CMDGenerator(eventDataifelse41, { options_685701 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const updateData = (options_770011: any) => {
    const eventDatacallCustomPageFunc1: any = [
      {
        type: 'callCustomPageFunc',
        dataId: 170435712815444320,
        options: {
          compId: 'callCustomPageFunc',
          compName: 'system',
          id: '3130428',
          pageJsonId: '537892',
          pathname: '/flow/audit',
          pageId: '874567207627108352',
          modalPath: '/flow/audit',
          customFuncName: 'tacheFlowUpdateData',
          customFuncParams: 'object',
          paramsObj: {
            sceneSubmit: '$data.sceneSubmit$',
            sceneCode: '$state.catalogCode$',
          },
          paramsObjKeyValueMap: {
            sceneSubmit: '$data.sceneSubmit$',
            sceneCode: '$state.catalogCode$',
          },
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallCustomPageFunc1.params =
      [
        {
          title: '事件入参',
          name: 'options_770011',
          value: '$options_770011$',
        },
      ] || [];
    CMDGenerator(
      eventDatacallCustomPageFunc1,
      { options_770011 },
      'callCustomPageFunc',
      {
        id: 'callCustomPageFunc',
        name: 'callCustomPageFunc',
        type: 'callCustomPageFunc',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
    calBudget,
    setRequired,
    customNodeFileUpload,
    initSelection,
    deliveryExtraParams,
    updateData,
  }));

  useEffect(() => {
    // console 170358617926777500
    console.log('urlParam入参：', urlParam, 'state入参：', state);
    const eventDatacustomActionCode229: any = [
      {
        type: 'customActionCode',
        dataId: 170254479658507360,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '879385',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var dom=document.querySelector(".custom-form .pcfactory-row .pcfactory-col:nth-child(4)");if(dom){dom.classList.remove("pcfactory-col-8");dom.classList.add("pcfactory-col-2")}var dom2=document.querySelector(".custom-form .pcfactory-row .pcfactory-col:nth-child(5)");if(dom2){dom2.classList.remove("pcfactory-col-8");dom2.classList.add("pcfactory-col-5")}var dom3=document.querySelector(".custom-form .pcfactory-row .pcfactory-col:nth-child(6)");if(dom3){dom3.classList.remove("pcfactory-col-8");dom3.classList.add("pcfactory-col-5")}var dom4=document.querySelector(".custom-form .pcfactory-row .pcfactory-col:nth-child(7)");if(dom4){dom4.classList.remove("pcfactory-col-8");dom4.classList.add("pcfactory-col-5")}var dom5=document.querySelector(".custom-form .pcfactory-row .pcfactory-col:nth-child(8)");if(dom5){dom5.classList.remove("pcfactory-col-8");dom5.classList.add("pcfactory-col-5")}var dom6=document.querySelector(".custom-form .pcfactory-row .pcfactory-col:nth-child(9)");if(dom6){dom6.classList.remove("pcfactory-col-8");dom6.classList.add("pcfactory-col-2")}var dom7=document.querySelector(".custom-form .pcfactory-row .pcfactory-col:nth-child(10)");if(dom7){dom7.classList.remove("pcfactory-col-8");dom7.classList.add("pcfactory-col-2")}var dom8=document.querySelector(".custom-form .pcfactory-row .pcfactory-col:nth-child(11)");if(dom8){dom8.classList.remove("pcfactory-col-8");dom8.classList.add("pcfactory-col-5")}};',
          actionTitle: '修改服务资源的列占比',
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode229.params = [] || [];
    CMDGenerator(eventDatacustomActionCode229, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDataapiRequest172: any = [
      {
        type: 'apiRequest',
        dataId: 170349676820656930,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9308445',
          pageJsonId: '0521965',
          sync: true,
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
                  dataKey: '717262_root.header',
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
                      dataKey: '717262_root.path.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'SUPPORTED_PREVIEW_ATTACHMENT',
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
                  dataKey: '717262_root.path',
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
                  dataKey: '717262_root.query',
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
                  dataKey: '717262_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '717262_root',
            },
          ],
          params: 'object',
        },
        line_number: 3,
        callback1: [
          {
            type: 'console',
            dataId: 170349676820643870,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '86667',
              pageJsonId: '0521965',
              value: [
                '查询SUPPORTED_PREVIEW_ATTACHMENT结果：',
                '$reply_9308445?.resultData$',
              ],
            },
            line_number: 4,
          },
          {
            type: 'customActionCode',
            dataId: 170349676820600450,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '40671',
              pageJsonId: '0521965',
              code: 'function main(data,state,success,fail){var _reply_;var list=((_reply_=reply_9308445)===null||_reply_===void 0?void 0:_reply_.resultData)||[];var str="\\\\.(allSupported)$";if(list&&list.length>0){str=list.map(function(item){return item.attrValue}).join("|");console.log("str = ",str);str="\\\\.("+str+")$"}var reg=new RegExp(str,"i");success(reg)};',
              actionTitle: '构建正则',
            },
            line_number: 5,
            callback1: [
              {
                type: 'console',
                dataId: 170349676820797380,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '2427036',
                  pageJsonId: '0521965',
                  value: ['支持的文件预览格式：', '$data_40671$'],
                },
                line_number: 6,
              },
              {
                type: 'setDataSource',
                dataId: 170349676820700540,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '2754832',
                  pageJsonId: '0521965',
                  dataSourceId: 170253484023336740,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '3315173',
                      code: 'isVoucher',
                      name: '咪咕礼券是否选中（1选中，0未选中）',
                      type: 'string',
                      initialData: { type: 'static', value: '0' },
                      showInput: true,
                      _codePath: ['isVoucher'],
                      _idpath: ['3315173'],
                    },
                    {
                      attrId: '4697525',
                      code: 'serviceItem',
                      name: '服务项目值',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceItem'],
                      _idpath: ['4697525'],
                    },
                    {
                      attrId: '0589206',
                      code: 'supportedSuffix',
                      name: '支持的文件后缀',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['supportedSuffix'],
                      _idpath: ['0589206'],
                      value: { type: ['context', '$data_40671$'], code: '' },
                    },
                    {
                      attrId: '48367',
                      code: '$state.tacheCode$',
                      name: '流程流转参数保存',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['$state.tacheCode$'],
                      _idpath: ['48367'],
                    },
                    {
                      attrId: '08423',
                      code: 'createStaff',
                      name: '起草人',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['createStaff'],
                      _idpath: ['08423'],
                    },
                    {
                      attrId: '240493',
                      code: 'isShowDel',
                      name: '双签附件是否显示删除0否1是',
                      type: 'string',
                      initialData: { type: 'static', value: '0' },
                      showInput: true,
                      _codePath: ['isShowDel'],
                      _idpath: ['240493'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
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
    eventDataapiRequest172.params = [] || [];
    CMDGenerator(eventDataapiRequest172, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest173: any = [
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
                  attrId: '13154521',
                  code: 'custMemberList',
                  name: '成员信息',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '5397914',
                  code: 'instList',
                  name: '多实例',
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
                dataId: 166444018774646720,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '343439',
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
    eventDataapiRequest173.params = [] || [];
    CMDGenerator(eventDataapiRequest173, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest174: any = [
      {
        type: 'apiRequest',
        dataId: 170418584705350560,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '476353',
          pageJsonId: '0521965',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'gainDraftMsg',
          _apiCode: 'gainDraftMsg',
          _source: 'rhin',
          _serviceId: '874490760619208704',
          _serviceTitle: '获取起草人信息-hdb: gainDraftMsg',
          params: 'object',
          _sourceName: '获取起草人信息-hdb',
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
                  dataKey: '82504_root.header',
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
                  dataKey: '82504_root.path',
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
                  dataKey: '82504_root.query',
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
                  dataKey: '82504_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '82504_root',
            },
          ],
        },
        line_number: 11,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170418584705390660,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '058257',
              pageJsonId: '0521965',
              dataSourceId: 170253484023336740,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '3315173',
                  code: 'isVoucher',
                  name: '咪咕礼券是否选中（1选中，0未选中）',
                  type: 'string',
                  initialData: { type: 'static', value: '0' },
                  showInput: true,
                  _codePath: ['isVoucher'],
                  _idpath: ['3315173'],
                },
                {
                  attrId: '4697525',
                  code: 'serviceItem',
                  name: '服务项目值',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['serviceItem'],
                  _idpath: ['4697525'],
                },
                {
                  attrId: '0589206',
                  code: 'supportedSuffix',
                  name: '支持的文件后缀',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['supportedSuffix'],
                  _idpath: ['0589206'],
                },
                {
                  attrId: '48367',
                  code: '$state.tacheCode$',
                  name: '流程流转参数保存',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['$state.tacheCode$'],
                  _idpath: ['48367'],
                },
                {
                  attrId: '08423',
                  code: 'createStaff',
                  name: '起草人',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['createStaff'],
                  _idpath: ['08423'],
                  value: {
                    type: ['context', '$reply_476353?.resultData.staffName$'],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '240493',
                  code: 'isShowDel',
                  name: '双签附件是否显示删除0否1是',
                  type: 'string',
                  initialData: { type: 'static', value: '0' },
                  showInput: true,
                  _codePath: ['isShowDel'],
                  _idpath: ['240493'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 12,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 170418584705364130,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '5638584',
              pageJsonId: '0521965',
              value: ['$reply_476353$'],
            },
            line_number: 13,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest174.params = [] || [];
    CMDGenerator(eventDataapiRequest174, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc21: any = [
      {
        type: 'callSelfFunc',
        dataId: 170373056228175740,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '122673',
          pageJsonId: '537892',
          customFuncName: 'initSelection',
          customFuncParams: 'object',
        },
        line_number: 14,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc21.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc21, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataifelse105: any = [
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
        line_number: 15,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){var attrCode=attrList[i].attrCode;var attrValue=attrList[i].attrValue;console.log("\\u5F53\\u524D\\u53C2\\u4E0EattrCode = ",attrCode);console.log("\\u5F53\\u524D\\u53C2\\u4E0EattrValue = ",attrValue);console.log("\\u5F53\\u524DfactorForm = ",factorForm);switch(attrCode){case"serviceResourceSmallCake":factorForm["serviceResourceSmallCake"]=attrValue;factorForm["isSmallCake"]=!!attrValue;break;case"serviceResourceFlower":factorForm["serviceResourceFlower"]=attrValue;factorForm["isFlower"]=!!attrValue;break;case"serviceResourceCake":factorForm["serviceResourceCake"]=attrValue;factorForm["isCake"]=!!attrValue;break;case"serviceResourceVoucher":factorForm["serviceResourceVoucher"]=attrValue;factorForm["isVoucher"]=!!attrValue;break;case"serviceResourceOther":factorForm["serviceResourceOther"]=attrValue;factorForm["isOther"]=!!attrValue;break;default:factorForm[attrCode]=attrValue;}}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;data.sceneSubmit.attrList=item.attrList;var infoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var _i=0;_i<instList.length;_i++){feeObj[instList[_i].attrCode]=instList[_i].attrValue}feeObj.rowId=parseInt(v.instCode);infoList.push(feeObj)}});data.infoList=infoList;var customObject=item["customObject"]||{};var customerFileList=item["fileInfo"];var settlementFileList=customObject["settlementFileList"];data.customerFileList=customerFileList;data.settlementFileList=settlementFileList;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 16,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '4193593',
                    options: { context: '$data_9981685$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$data_9981685.isSmallCake$',
                      operate: '== true',
                    },
                    condId: '837054',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170373023433127460,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170374501066248480,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170374501637003520,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_848939'],
                          compName: 'page',
                          id: '317521',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_848939'],
                        },
                        actionObjId: 'sysSetRequired',
                        actionObjName: 'page',
                        value: 'sysSetRequired',
                        line_number: 19,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'sysSetRequired',
                        dataId: 170374501637003520,
                        options: {
                          compId: ['Input_848939'],
                          compName: 'page',
                          id: '317521',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_848939'],
                        },
                        line_number: 19,
                      },
                    ],
                  },
                ],
                line_number: 17,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 170373210940901100,
                    options: {
                      compId: 'Input_848939',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '277816',
                      disabled: '',
                    },
                    line_number: 18,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '4193593',
                    options: { context: '$data_9981685$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$data_9981685.isFlower$',
                      operate: '== true',
                    },
                    condId: '837054',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170373213941870500,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170374503358241630,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170374503492751940,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_3812606'],
                          compName: 'page',
                          id: '6514317',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_3812606'],
                        },
                        actionObjId: 'sysSetRequired',
                        actionObjName: 'page',
                        value: 'sysSetRequired',
                        line_number: 22,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'sysSetRequired',
                        dataId: 170374503492751940,
                        options: {
                          compId: ['Input_3812606'],
                          compName: 'page',
                          id: '6514317',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_3812606'],
                        },
                        line_number: 22,
                      },
                    ],
                  },
                ],
                line_number: 20,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 170373213941884000,
                    options: {
                      compId: ['Input_3812606'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '7459007',
                      disabled: '',
                      compid: ['Input_3812606'],
                    },
                    line_number: 21,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '4193593',
                    options: { context: '$data_9981685$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$data_9981685.isCake$',
                      operate: '== true',
                    },
                    condId: '837054',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170373216797390050,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170374504197151940,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170374504402570620,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_649445'],
                          compName: 'page',
                          id: '800501',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_649445'],
                        },
                        actionObjId: 'sysSetRequired',
                        actionObjName: 'page',
                        value: 'sysSetRequired',
                        line_number: 25,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'sysSetRequired',
                        dataId: 170374504402570620,
                        options: {
                          compId: ['Input_649445'],
                          compName: 'page',
                          id: '800501',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_649445'],
                        },
                        line_number: 25,
                      },
                    ],
                  },
                ],
                line_number: 23,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 170373216797339620,
                    options: {
                      compId: ['Input_649445'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '955345',
                      disabled: '',
                      compid: ['Input_649445'],
                    },
                    line_number: 24,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '4193593',
                    options: { context: '$data_9981685$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$data_9981685.isVoucher$',
                      operate: '== true',
                    },
                    condId: '837054',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170373216960231870,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170374505504410340,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170374505744932160,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_665686'],
                          compName: 'page',
                          id: '0200933',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_665686'],
                        },
                        actionObjId: 'sysSetRequired',
                        actionObjName: 'page',
                        value: 'sysSetRequired',
                        line_number: 28,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'sysSetRequired',
                        dataId: 170374505744932160,
                        options: {
                          compId: ['Input_665686'],
                          compName: 'page',
                          id: '0200933',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_665686'],
                        },
                        line_number: 28,
                      },
                    ],
                  },
                ],
                line_number: 26,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 170373216960234500,
                    options: {
                      compId: ['Input_665686'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '519595',
                      disabled: '',
                      compid: ['Input_665686'],
                    },
                    line_number: 27,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '4193593',
                    options: { context: '$data_9981685$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$data_9981685.isOther$',
                      operate: '== true',
                    },
                    condId: '837054',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170373239608592060,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 170374507146373440,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170374507306596400,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: ['Input_419549'],
                          compName: 'page',
                          id: '631484',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_419549'],
                        },
                        actionObjId: 'sysSetRequired',
                        actionObjName: 'page',
                        value: 'sysSetRequired',
                        line_number: 31,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'sysSetRequired',
                        dataId: 170374507306596400,
                        options: {
                          compId: ['Input_419549'],
                          compName: 'page',
                          id: '631484',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Input_419549'],
                        },
                        line_number: 31,
                      },
                    ],
                  },
                ],
                line_number: 29,
                callback1: [
                  {
                    type: 'setDisable',
                    dataId: 170373239608584320,
                    options: {
                      compId: ['Input_419549'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '775897',
                      disabled: '',
                      compid: ['Input_419549'],
                    },
                    line_number: 30,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '4193593',
                    options: { context: '$data_9981685$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$data_9981685.approvedFiles$',
                      operate: '==',
                      useManual: true,
                      manualValue: '1001',
                    },
                    condId: '837054',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170373340841096030,
                elseIfs: [],
                line_number: 32,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 170373357770357100,
                    options: {
                      compId: ['Input_098387', 'Input_056563'],
                      compName: 'page',
                      id: '1136418',
                      pageJsonId: '537892',
                      visible: 'true',
                      compid: ['Input_098387', 'Input_056563'],
                    },
                    line_number: 33,
                  },
                ],
              },
              {
                type: 'setDataSource',
                dataId: 166305500105467000,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '013094',
                  pageJsonId: '537892',
                  dataSourceId: 169993114559322180,
                  dataSourceName: 'infoList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '906024',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupId'],
                      _idpath: ['906024'],
                    },
                    {
                      attrId: '0346427',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupName'],
                      _idpath: ['0346427'],
                    },
                    {
                      attrId: '494685',
                      code: 'msisdn',
                      name: '手机号码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['msisdn'],
                      _idpath: ['494685'],
                    },
                    {
                      attrId: '238293',
                      code: 'name',
                      name: '客户姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['name'],
                      _idpath: ['238293'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                  targetDataSourcePaths: [],
                },
                line_number: 34,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166546751813763400,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '6848837',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 35,
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
            line_number: 36,
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
                line_number: 37,
                callback1: [],
                callback2: [],
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
            line_number: 38,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166546756013795970,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '94079282',
                  visible: 'true',
                },
                line_number: 39,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: [
                    'Row_851124',
                    'Table_8700198',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_304342_6986628_433547',
                    'Button_061196_858258',
                    'Button_5473437',
                    'Form_170013',
                  ],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Table_8700198',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_304342_6986628_433547',
                    'Button_061196_858258',
                    'Button_5473437',
                    'Form_170013',
                  ],
                  visible: '',
                },
                line_number: 40,
              },
              {
                type: 'setVisible',
                dataId: 166557516797863070,
                options: {
                  compId: 'Table_8700198_3717786',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '1487314',
                  visible: 'true',
                },
                line_number: 41,
              },
              {
                type: 'setDisable',
                dataId: 166546757565618340,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                    'Form_814689',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '491958',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                    'Form_814689',
                  ],
                },
                line_number: 42,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.tacheCode$',
                  operate: '==',
                  manualValue: 'APPLY_FINISH',
                },
                condId: '2833213',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                condId: '665271',
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.scene$',
                      operate: '==',
                      manualValue: 'U',
                    },
                    condId: '993559',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$urlParam.scene$',
                      operate: '==',
                      manualValue: 'U',
                    },
                    condId: '0974655',
                    connector: '||',
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
                    condId: '090955',
                    connector: '||',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$urlParam.sceneOrigin$',
                      operate: '==',
                      manualValue: 'U',
                    },
                    condId: '334476',
                    connector: '||',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                connector: '&&',
              },
            ],
            dataId: 170435459806704100,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 170436039687860580,
                children: [
                  {
                    dataName: 'action',
                    dataId: 170436040704543600,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: [
                        'View_113487',
                        'View_27774205',
                        'Select_764216',
                        'View_1502',
                        'View_696523',
                      ],
                      compName: 'page',
                      id: '599999',
                      pageJsonId: '537892',
                      visible: '',
                      compid: [
                        'View_113487',
                        'View_27774205',
                        'Select_764216',
                        'View_1502',
                        'View_696523',
                      ],
                    },
                    actionObjId: 'sysSetVisible',
                    actionObjName: 'page',
                    value: 'sysSetVisible',
                    line_number: 48,
                  },
                  {
                    dataName: 'action',
                    dataId: 170436043861132220,
                    children: [],
                    todoOptions: ['disabled', 'selectComp'],
                    options: {
                      compId: ['Input_6196355'],
                      compName: 'page',
                      id: '376878',
                      pageJsonId: '537892',
                      disabled: 'true',
                      compid: ['Input_6196355'],
                    },
                    actionObjId: 'sysSetDisable',
                    actionObjName: 'page',
                    value: 'sysSetDisable',
                    line_number: 49,
                  },
                ],
                condition: [],
                value: 'elseIf',
                callback: [
                  {
                    type: 'sysSetVisible',
                    dataId: 170436040704543600,
                    options: {
                      compId: [
                        'View_113487',
                        'View_27774205',
                        'Select_764216',
                        'View_1502',
                        'View_696523',
                      ],
                      compName: 'page',
                      id: '599999',
                      pageJsonId: '537892',
                      visible: '',
                      compid: [
                        'View_113487',
                        'View_27774205',
                        'Select_764216',
                        'View_1502',
                        'View_696523',
                      ],
                    },
                    line_number: 48,
                  },
                  {
                    type: 'sysSetDisable',
                    dataId: 170436043861132220,
                    options: {
                      compId: ['Input_6196355'],
                      compName: 'page',
                      id: '376878',
                      pageJsonId: '537892',
                      disabled: 'true',
                      compid: ['Input_6196355'],
                    },
                    line_number: 49,
                  },
                ],
              },
            ],
            line_number: 43,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 170435466307602100,
                options: {
                  compId: ['View_2528996'],
                  compName: 'page',
                  id: '26581',
                  pageJsonId: '537892',
                  visible: 'true',
                  compid: ['View_2528996'],
                },
                line_number: 44,
              },
              {
                type: 'callCustomPageFunc',
                dataId: 170435459806701920,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '1831927',
                  pageJsonId: '537892',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'setIsNeedCheck',
                  customFuncParams: 'object',
                  paramsObj: { isNeedCheck: '1' },
                  paramsObjKeyValueMap: { isNeedCheck: '1' },
                },
                line_number: 45,
                callback1: [
                  {
                    type: 'console',
                    dataId: 170435459806726200,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '6293653',
                      pageJsonId: '537892',
                      value: ['1表示需要数字校验'],
                    },
                    line_number: 46,
                  },
                ],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 170436108705852380,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '7386296',
                  pageJsonId: '537892',
                  dataSourceId: 170253484023336740,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '3315173',
                      code: 'isVoucher',
                      name: '咪咕礼券是否选中（1选中，0未选中）',
                      type: 'string',
                      initialData: { type: 'static', value: '0' },
                      showInput: true,
                    },
                    {
                      attrId: '4697525',
                      code: 'serviceItem',
                      name: '服务项目值',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '0589206',
                      code: 'supportedSuffix',
                      name: '支持的文件后缀',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '48367',
                      code: '$state.tacheCode$',
                      name: '流程流转参数保存',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '08423',
                      code: 'createStaff',
                      name: '起草人',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '240493',
                      code: 'isShowDel',
                      name: '双签附件是否显示删除0否1是',
                      type: 'string',
                      initialData: { type: 'static', value: '0' },
                      showInput: true,
                      value: { type: ['customize'], code: '1' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 47,
                callback1: [],
                callback2: [],
              },
            ],
          },
          {
            type: 'callSelfFunc',
            dataId: 170436226395765820,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '569603',
              pageJsonId: '537892',
              customFuncName: 'deliveryExtraParams',
              customFuncParams: 'object',
            },
            line_number: 50,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse105.params = [] || [];
    CMDGenerator(eventDataifelse105, {}, 'ifelse', {
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
          dividerText={'满意度提升活动审批单'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558',
            uid: 'Divider_52558',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_52558'] = r)}
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
                overflowY: 'hidden',
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs[
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254'
                  ] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'满意度提升活动审批单'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_241037',
                    uid: 'View_6319234_3569864_15467365_781748_241037',
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
                    (refs['View_6319234_3569864_15467365_781748_241037'] = r)
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775'
                    ] = r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素'}
            colSpan={8}
            labelCol={'6'}
            wrapperCol={18}
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
            className={
              'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812'
            }
            $$componentItem={{
              id: 'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
              uid: 'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource79: any = [
                {
                  type: 'setDataSource',
                  dataId: 167051118069269700,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '240043',
                    pageJsonId: '537892',
                    dataSourceId: 167051116912078750,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '371174',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: { type: [], code: '' },
                        _codePath: ['reason'],
                        _idpath: ['371174'],
                      },
                      {
                        attrId: '351233',
                        code: 'serviceItem',
                        name: '服务项目',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceItem'],
                        _idpath: ['351233'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'serviceItem',
                        },
                      },
                      {
                        attrId: '2220604',
                        code: 'serviceDate',
                        name: '服务时间',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceDate'],
                        _idpath: ['2220604'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'serviceDate',
                        },
                      },
                      {
                        attrId: '79368',
                        code: 'serviceSummary',
                        name: '服务概述',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceSummary'],
                        _idpath: ['79368'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'serviceSummary',
                        },
                      },
                      {
                        attrId: '382156',
                        code: 'serviceResourceOther',
                        name: '服务资源-其他\t',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceResourceOther'],
                        _idpath: ['382156'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'serviceResourceOther',
                        },
                      },
                      {
                        attrId: '436792',
                        code: 'serviceResourceCake',
                        name: '服务资源-蛋糕（200元）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceResourceCake'],
                        _idpath: ['436792'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'serviceResourceCake',
                        },
                      },
                      {
                        attrId: '466739',
                        code: 'budget',
                        name: '预算金额（元）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['budget'],
                        _idpath: ['466739'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'budget',
                        },
                      },
                      {
                        attrId: '540612',
                        code: 'groupName',
                        name: '集团名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['groupName'],
                        _idpath: ['540612'],
                      },
                      {
                        attrId: '4370244',
                        code: 'serviceResourceFlower',
                        name: '服务资源-鲜花（200元）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceResourceFlower'],
                        _idpath: ['4370244'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'serviceResourceFlower',
                        },
                      },
                      {
                        attrId: '8152763',
                        code: 'serviceResourceSmallCake',
                        name: '服务资源-小糕点（100元）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceResourceSmallCake'],
                        _idpath: ['8152763'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'serviceResourceSmallCake',
                        },
                      },
                      {
                        attrId: '8216438',
                        code: 'servicePeopleNum',
                        name: '服务人数',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['servicePeopleNum'],
                        _idpath: ['8216438'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'servicePeopleNum',
                        },
                      },
                      {
                        attrId: '9187672',
                        code: 'groupId',
                        name: '集团编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['groupId'],
                        _idpath: ['9187672'],
                      },
                      {
                        attrId: '25805049',
                        code: 'serviceResourceVoucher',
                        name: '服务资源-咪咕礼卷（100元）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceResourceVoucher'],
                        _idpath: ['25805049'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'serviceResourceVoucher',
                        },
                      },
                      {
                        attrId: '06957',
                        code: 'customerName',
                        name: '客户姓名',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['customerName'],
                        _idpath: ['06957'],
                      },
                      {
                        attrId: '0436343',
                        code: 'msisdn',
                        name: '手机号码',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['msisdn'],
                        _idpath: ['0436343'],
                      },
                      {
                        attrId: '052291',
                        code: 'approvedFiles',
                        name: '已审批文件',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['approvedFiles'],
                        _idpath: ['052291'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'approvedFiles',
                        },
                      },
                      {
                        attrId: '1742476',
                        code: 'approvedFileName',
                        name: '文件名',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['approvedFileName'],
                        _idpath: ['1742476'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'approvedFileName',
                        },
                      },
                      {
                        attrId: '04152952',
                        code: 'approvedFileCode',
                        name: '文件号',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['approvedFileCode'],
                        _idpath: ['04152952'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'approvedFileCode',
                        },
                      },
                      {
                        attrId: '194965',
                        code: 'isFlower',
                        name: '是否选择鲜花',
                        type: 'boolean',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['isFlower'],
                        _idpath: ['194965'],
                      },
                      {
                        attrId: '727604',
                        code: 'isVoucher',
                        name: '是否选择咪咕礼券',
                        type: 'boolean',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['isVoucher'],
                        _idpath: ['727604'],
                      },
                      {
                        attrId: '814475',
                        code: 'isSmallCake',
                        name: '是否选择小糕点',
                        type: 'boolean',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['isSmallCake'],
                        _idpath: ['814475'],
                      },
                      {
                        attrId: '890983',
                        code: 'isCake',
                        name: '是否选择蛋糕',
                        type: 'boolean',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['isCake'],
                        _idpath: ['890983'],
                      },
                      {
                        attrId: '059193',
                        code: 'isOther',
                        name: '是否选择其他',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['isOther'],
                        _idpath: ['059193'],
                      },
                      {
                        attrId: '871579',
                        code: 'settlementAmount',
                        name: '结算金额',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['settlementAmount'],
                        _idpath: ['871579'],
                      },
                      {
                        attrId: '844773',
                        code: 'serviceResource',
                        name: '服务资源（审批内容使用）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['serviceResource'],
                        _idpath: ['844773'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 167051126083817120,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '295751',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];console.log("\\u5F53\\u524D\\u6539\\u53D8\\u5B57\\u6BB5\\u7F16\\u7801\\uFF1B",changedFieldName);console.log("\\u5F53\\u524D\\u6539\\u53D8\\u5B57\\u6BB5\\u503C\\uFF1B",changedValue);var obj=data.factorForm;var serviceResource=[];for(var key in obj){if(["isSmallCake","isFlower","isCake","isVoucher","isOther","serviceResource"].includes(key)){continue}var val=obj[key];if(key=="serviceResourceSmallCake"&&!!val){serviceResource.push("\\u5C0F\\u7CD5\\u70B9(100\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceFlower"&&!!val){serviceResource.push("\\u9C9C\\u82B1(200\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceCake"&&!!val){serviceResource.push("\\u86CB\\u7CD5(200\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceVoucher"&&!!val){serviceResource.push("\\u54AA\\u5495\\u793C\\u5238(100\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceOther"&&!!val){serviceResource.push("\\u5176\\u4ED6:"+val+"\\u5143")}attrList.push({"attrCode":key,"attrName":"","attrValue":val})}attrList.push({"attrCode":"serviceResource","attrName":"","attrValue":serviceResource.join("\\u3001")});data.sceneSubmit.attrList=attrList;console.log("data.sceneSubmit.attrList",data.sceneSubmit.attrList);success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 167051126083824420,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '6032214',
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
              eventDatasetDataSource79.params =
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
                eventDatasetDataSource79,
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
              (refs[
                'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812'
              ] = r)
            }
            {...injectData}
          >
            <Select
              name={'服务项目'}
              size={'default'}
              selfSpan={8}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              formItemIndex={0}
              fieldName={'serviceItem'}
              value={data?.factorForm?.serviceItem}
              $$componentItem={{
                id: 'Select_1514685',
                uid: 'Select_1514685',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataifelse387: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '172747',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$data.pageData.serviceItem$',
                          operate: '==',
                          manualValue: '1003',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$e$',
                          operate: '!=',
                          manualValue: '1003',
                        },
                        condId: '8857379',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 170349363785602720,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 170349392157362460,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 170349401706493020,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 170349401706428960,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170349401706493700,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 170349401706402880,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 170349401706491680,
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
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '8439776',
                                      pageJsonId: '537892',
                                      pathname: '/auditOrderPrepare',
                                      pageId: '884045146848604160',
                                      customFuncName: 'getFactor',
                                      customFuncParams: '$data.sceneSubmit$',
                                      modalPath: '/auditOrderPrepare',
                                    },
                                    actionObjId: 'callParentCustomFunc',
                                    actionObjName: 'system',
                                    value: 'callParentCustomFunc',
                                    line_number: 6,
                                  },
                                ],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 170349401706488260,
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
                              id: '217481',
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
                                },
                                {
                                  attrId: '4562264',
                                  code: 'approveGrade',
                                  name: '审批等级',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '63768',
                                  code: 'attrList',
                                  name: '要素',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '919265',
                                  code: 'fileInfo',
                                  name: '附件',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                  children: [],
                                },
                                {
                                  attrId: '360171',
                                  code: 'catalogItemCode',
                                  name: '类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '420623',
                                  code: 'catalogItemSubType',
                                  name: '类目项子类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '375466',
                                  code: 'childCatalogCode',
                                  name: '子类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '9257773',
                                  code: 'parentCatalogCode',
                                  name: '上级类目编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '5733013',
                                  code: 'parentCatalogItemCode',
                                  name: '上级类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '440627',
                                  code: 'childCatalogDesc',
                                  name: '子类目项描述',
                                  type: 'string',
                                  initialData: { type: 'static' },
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
                                {
                                  attrId: '5397914',
                                  code: 'instList',
                                  name: '多实例',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['EMPTY_DATA', 'array'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.array$',
                                  },
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
                            line_number: 5,
                          },
                          {
                            dataName: 'action',
                            dataId: 170349402103073760,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 170349402103019600,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 170349402103072640,
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
                              id: '54537',
                              pageJsonId: '537892',
                              dataSourceId: 169993114559322180,
                              dataSourceName: 'infoList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '906024',
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '0346427',
                                  code: 'groupName',
                                  name: '集团名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '494685',
                                  code: 'msisdn',
                                  name: '手机号码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '238293',
                                  code: 'name',
                                  name: '客户姓名',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                              ],
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            actionObjId: 'setDataSource',
                            actionObjName: 'page',
                            value: 'setDataSource',
                            line_number: 7,
                          },
                        ],
                        condition: [
                          {
                            condId: '440982',
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data.pageData.serviceItem$',
                                  operate: '==',
                                  manualValue: '1001',
                                },
                                condId: '9008306',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data.pageData.serviceItem$',
                                  operate: '==',
                                  manualValue: '1002',
                                },
                                condId: '637235',
                                connector: '||',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                          },
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$e$',
                              operate: '==',
                              manualValue: '1003',
                            },
                            condId: '1718782',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        value: 'elseIf',
                        desc: '如果从其他两个两个枚举换成投诉修复',
                        callback: [
                          {
                            type: 'setDataSource',
                            dataId: 170349401706493020,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '217481',
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
                                },
                                {
                                  attrId: '4562264',
                                  code: 'approveGrade',
                                  name: '审批等级',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '63768',
                                  code: 'attrList',
                                  name: '要素',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '919265',
                                  code: 'fileInfo',
                                  name: '附件',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                  children: [],
                                },
                                {
                                  attrId: '360171',
                                  code: 'catalogItemCode',
                                  name: '类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '420623',
                                  code: 'catalogItemSubType',
                                  name: '类目项子类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '375466',
                                  code: 'childCatalogCode',
                                  name: '子类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '9257773',
                                  code: 'parentCatalogCode',
                                  name: '上级类目编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '5733013',
                                  code: 'parentCatalogItemCode',
                                  name: '上级类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '440627',
                                  code: 'childCatalogDesc',
                                  name: '子类目项描述',
                                  type: 'string',
                                  initialData: { type: 'static' },
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
                                {
                                  attrId: '5397914',
                                  code: 'instList',
                                  name: '多实例',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['EMPTY_DATA', 'array'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.array$',
                                  },
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 5,
                            callback1: [
                              {
                                type: 'callParentCustomFunc',
                                dataId: 170349401706493700,
                                options: {
                                  compId: 'callParentCustomFunc',
                                  compName: 'system',
                                  id: '8439776',
                                  pageJsonId: '537892',
                                  pathname: '/auditOrderPrepare',
                                  pageId: '884045146848604160',
                                  customFuncName: 'getFactor',
                                  customFuncParams: '$data.sceneSubmit$',
                                  modalPath: '/auditOrderPrepare',
                                },
                                line_number: 6,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'setDataSource',
                            dataId: 170349402103073760,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '54537',
                              pageJsonId: '537892',
                              dataSourceId: 169993114559322180,
                              dataSourceName: 'infoList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '906024',
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '0346427',
                                  code: 'groupName',
                                  name: '集团名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '494685',
                                  code: 'msisdn',
                                  name: '手机号码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '238293',
                                  code: 'name',
                                  name: '客户姓名',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                              ],
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 7,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 170349390992347500,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '666321',
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
                            },
                            {
                              attrId: '4562264',
                              code: 'approveGrade',
                              name: '审批等级',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '63768',
                              code: 'attrList',
                              name: '要素',
                              type: 'objectArray',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '919265',
                              code: 'fileInfo',
                              name: '附件',
                              type: 'objectArray',
                              initialData: { type: 'static' },
                              children: [],
                            },
                            {
                              attrId: '360171',
                              code: 'catalogItemCode',
                              name: '类目项编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '420623',
                              code: 'catalogItemSubType',
                              name: '类目项子类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '375466',
                              code: 'childCatalogCode',
                              name: '子类目项编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '9257773',
                              code: 'parentCatalogCode',
                              name: '上级类目编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '5733013',
                              code: 'parentCatalogItemCode',
                              name: '上级类目项编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '440627',
                              code: 'childCatalogDesc',
                              name: '子类目项描述',
                              type: 'string',
                              initialData: { type: 'static' },
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
                            {
                              attrId: '5397914',
                              code: 'instList',
                              name: '多实例',
                              type: 'objectArray',
                              initialData: { type: 'static' },
                              value: {
                                type: ['EMPTY_DATA', 'array'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.array$',
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
                            type: 'callParentCustomFunc',
                            dataId: 170349390992387600,
                            options: {
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '830545',
                              pageJsonId: '537892',
                              pathname: '/auditOrderPrepare',
                              pageId: '884045146848604160',
                              customFuncName: 'getFactor',
                              customFuncParams: '$data.sceneSubmit$',
                              modalPath: '/auditOrderPrepare',
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 170349391505117120,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '7406169',
                          pageJsonId: '537892',
                          dataSourceId: 169993114559322180,
                          dataSourceName: 'infoList',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '906024',
                              code: 'groupId',
                              name: '集团编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                            },
                            {
                              attrId: '0346427',
                              code: 'groupName',
                              name: '集团名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                            },
                            {
                              attrId: '494685',
                              code: 'msisdn',
                              name: '手机号码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                            },
                            {
                              attrId: '238293',
                              code: 'name',
                              name: '客户姓名',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                            },
                          ],
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
                  },
                ];
                eventDataifelse387.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse387, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
                const eventDatasetDataSource81: any = [
                  {
                    type: 'setDataSource',
                    dataId: 170349406185288670,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '118457',
                      pageJsonId: '537892',
                      dataSourceId: 170253484023336740,
                      dataSourceName: 'pageData',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '3315173',
                          code: 'isVoucher',
                          name: '咪咕礼券是否选中（1选中，0未选中）',
                          type: 'string',
                          initialData: { type: 'static', value: '0' },
                          showInput: true,
                          _codePath: ['isVoucher'],
                          _idpath: ['3315173'],
                        },
                        {
                          attrId: '4697525',
                          code: 'serviceItem',
                          name: '服务项目值',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceItem'],
                          _idpath: ['4697525'],
                          value: { type: ['context', '$e$'], code: '' },
                        },
                        {
                          attrId: '0589206',
                          code: 'supportedSuffix',
                          name: '支持的文件后缀',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['supportedSuffix'],
                          _idpath: ['0589206'],
                        },
                        {
                          attrId: '48367',
                          code: '$state.tacheCode$',
                          name: '流程流转参数保存',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['$state.tacheCode$'],
                          _idpath: ['48367'],
                        },
                        {
                          attrId: '08423',
                          code: 'createStaff',
                          name: '起草人',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['createStaff'],
                          _idpath: ['08423'],
                        },
                        {
                          attrId: '240493',
                          code: 'isShowDel',
                          name: '双签附件是否显示删除0否1是',
                          type: 'string',
                          initialData: { type: 'static', value: '0' },
                          showInput: true,
                          _codePath: ['isShowDel'],
                          _idpath: ['240493'],
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 8,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource81.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatasetDataSource81, { e }, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Select_1514685'] = r)}
              {...injectData}
            />
            <DatePicker
              name={'服务时间'}
              timeMode={'date'}
              format={'YYYY-MM-DD'}
              size={'default'}
              selfSpan={8}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              limitRange={'no'}
              startTime={''}
              endTime={''}
              placeholder={'请选择日期'}
              pickerType={'DatePicker'}
              customTip={''}
              formItemIndex={1}
              fieldName={'serviceDate'}
              value={data?.factorForm?.serviceDate}
              $$componentItem={{
                id: 'DatePicker_6606197',
                uid: 'DatePicker_6606197',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              defaultValue={undefined}
              isFormRootChild={true}
              ref={(r: any) => (refs['DatePicker_6606197'] = r)}
              {...injectData}
            />
            <Input
              name={'服务人数'}
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
              formItemIndex={2}
              fieldName={'servicePeopleNum'}
              regexp={[
                {
                  id: '1923351',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于等于0的整数',
                  pattern: '/^[0-9]+$/;',
                },
              ]}
              value={data?.factorForm?.servicePeopleNum}
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
                id: 'Input_3484515',
                uid: 'Input_3484515',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_3484515'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: '#ffffff' }}
              className={'View_908992'}
              $$componentItem={{
                id: 'View_908992',
                uid: 'View_908992',
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
                  formItemIndex: 3,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'right',
                display: 'flex',
                flexDirection: 'column',
                padding: '4px 0px 0px 0px',
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flexWrap: 'nowrap',
              }}
              ref={(r: any) => (refs['View_908992'] = r)}
              {...injectData}
            >
              <Text
                name={'服务资源：'}
                content={'服务资源：'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_7791025',
                  uid: 'Text_7791025',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 12,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_7791025'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              className={'custom-box'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_6456678',
                uid: 'View_6456678',
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
                  formItemIndex: 4,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 8px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                lineHeight: '0px',
              }}
              ref={(r: any) => (refs['View_6456678'] = r)}
              {...injectData}
            >
              <Checkbox
                name={'复选框'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                text={''}
                selfSpan={''}
                labelCol={'16'}
                wrapperCol={'8'}
                fieldName={'isSmallCake'}
                defaultChecked={false}
                required={false}
                className={'Checkbox_905314'}
                value={data?.factorForm?.isSmallCake}
                $$componentItem={{
                  id: 'Checkbox_905314',
                  uid: 'Checkbox_905314',
                  type: 'Checkbox',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '0px 0px 0px 0px' }}
                onChange={(e: any) => {
                  const eventDataifelse388: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '476981',
                          options: {
                            context: '$e.target.checked$',
                            operate: '== true',
                            manualValue: '1',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 170253659800779330,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 170253665681638500,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170253669162717980,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 170253669162790050,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170260838987587360,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 170260838987505280,
                                          children: [],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 170260838987597020,
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
                                        id: '90993',
                                        pageJsonId: '537892',
                                        customFuncName: 'calBudget',
                                        customFuncParams: 'object',
                                      },
                                      actionObjId: 'callSelfFunc',
                                      actionObjName: 'system',
                                      value: 'callSelfFunc',
                                      line_number: 4,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                },
                              ],
                              todoOptions: ['compId', 'valueList'],
                              options: {
                                compId: 'Input_848939',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_848939: '' },
                              },
                              actionObjId: 'Input_848939',
                              actionObjName: 'Input',
                              value: 'setValue',
                              compLib: 'comm',
                              line_number: 3,
                            },
                            {
                              dataName: 'action',
                              dataId: 170253667723336350,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: 'Input_848939',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              actionObjId: 'Input_848939',
                              actionObjName: 'Input',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          value: 'elseIf',
                          callback: [
                            {
                              type: 'setValue',
                              dataId: 170253669162717980,
                              options: {
                                compId: 'Input_848939',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_848939: '' },
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 170260838987587360,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '90993',
                                    pageJsonId: '537892',
                                    customFuncName: 'calBudget',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                            {
                              type: 'setDisable',
                              dataId: 170253667723336350,
                              options: {
                                compId: 'Input_848939',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 170253665377474530,
                          options: {
                            compId: 'Input_848939',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Input',
                            id: '408596',
                            disabled: '',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse388.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(eventDataifelse388, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc254: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260871584937630,
                      shielding: true,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '799943',
                        pageJsonId: '537892',
                        customFuncName: 'setRequired',
                        customFuncParams: 'object',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc254.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc254,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetTimeout2: any = [
                    {
                      type: 'setTimeout',
                      dataId: 170260968763754850,
                      options: {
                        compId: 'setTimeout',
                        compName: 'system',
                        id: '7743025',
                        pageJsonId: '537892',
                        interval: 1,
                      },
                      line_number: 7,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 170260969563911100,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '130336',
                            pageJsonId: '537892',
                            customFuncName: 'setRequired',
                            customFuncParams: 'object',
                          },
                          line_number: 8,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDatasetTimeout2.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(eventDatasetTimeout2, { e }, 'setTimeout', {
                    id: 'setTimeout',
                    name: 'setTimeout',
                    type: 'setTimeout',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Checkbox_905314'] = r)}
                {...injectData}
              />
              <Text
                name={'小糕点（100元）'}
                content={'小糕点（100元）'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_626607',
                  uid: 'Text_626607',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 12,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  width: '100px',
                }}
                ref={(r: any) => (refs['Text_626607'] = r)}
                {...injectData}
              />
              <Input
                name={'服务资源'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'份'}
                postfixIconPosition={'before'}
                required={true}
                placeholder={'请输入'}
                fieldName={'serviceResourceSmallCake'}
                regexp={[
                  {
                    id: '260468',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '请输入大于0且最多1位小数的数',
                    pattern: '/^(?!0$)(?!0\\.0*$)([1-9]\\d*|0)(\\.\\d{1})?$/',
                  },
                ]}
                value={data?.factorForm?.serviceResourceSmallCake}
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
                  id: 'Input_848939',
                  uid: 'Input_848939',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                style={{ flex: 1, minWidth: '150px' }}
                onChange={(e: any) => {
                  const eventDatacallSelfFunc255: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260832836948800,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '326857',
                        pageJsonId: '537892',
                        customFuncName: 'calBudget',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc255.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc255,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Input_848939'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              className={'custom-box'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_625343',
                uid: 'View_625343',
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
                  formItemIndex: 5,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 8px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                lineHeight: '0px',
              }}
              ref={(r: any) => (refs['View_625343'] = r)}
              {...injectData}
            >
              <Checkbox
                name={'复选框'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                text={''}
                selfSpan={''}
                labelCol={'16'}
                wrapperCol={'8'}
                fieldName={'isFlower'}
                defaultChecked={false}
                required={false}
                className={'Checkbox_705778'}
                value={data?.factorForm?.isFlower}
                $$componentItem={{
                  id: 'Checkbox_705778',
                  uid: 'Checkbox_705778',
                  type: 'Checkbox',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '8px 0px 0px 0px' }}
                onChange={(e: any) => {
                  const eventDataifelse389: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '476981',
                          options: {
                            context: '$e.target.checked$',
                            operate: '== true',
                            manualValue: '1',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 170253659800779330,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 170253665681638500,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170253669162717980,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 170253669162790050,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170260839627753100,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 170260839627738240,
                                          children: [],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 170260839627735870,
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
                                        id: '418334',
                                        pageJsonId: '537892',
                                        customFuncName: 'calBudget',
                                        customFuncParams: 'object',
                                      },
                                      actionObjId: 'callSelfFunc',
                                      actionObjName: 'system',
                                      value: 'callSelfFunc',
                                      line_number: 4,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                },
                              ],
                              todoOptions: ['compId', 'valueList'],
                              options: {
                                compId: 'Input_3812606',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_3812606: '' },
                              },
                              actionObjId: 'Input_3812606',
                              actionObjName: 'Input',
                              value: 'setValue',
                              compLib: 'comm',
                              line_number: 3,
                            },
                            {
                              dataName: 'action',
                              dataId: 170253667723336350,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: 'Input_3812606',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              actionObjId: 'Input_3812606',
                              actionObjName: 'Input',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          value: 'elseIf',
                          callback: [
                            {
                              type: 'setValue',
                              dataId: 170253669162717980,
                              options: {
                                compId: 'Input_3812606',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_3812606: '' },
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 170260839627753100,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '418334',
                                    pageJsonId: '537892',
                                    customFuncName: 'calBudget',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                            {
                              type: 'setDisable',
                              dataId: 170253667723336350,
                              options: {
                                compId: 'Input_3812606',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 170253665377474530,
                          options: {
                            compId: 'Input_3812606',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Input',
                            id: '408596',
                            disabled: '',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse389.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(eventDataifelse389, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc256: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260872424361570,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '258855',
                        pageJsonId: '537892',
                        customFuncName: 'setRequired',
                        customFuncParams: 'object',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc256.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc256,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Checkbox_705778'] = r)}
                {...injectData}
              />
              <Text
                name={'鲜花（200元）'}
                content={'鲜花（200元）'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_7406928',
                  uid: 'Text_7406928',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 12,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  width: '90px',
                }}
                ref={(r: any) => (refs['Text_7406928'] = r)}
                {...injectData}
              />
              <Input
                name={'服务资源'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'份'}
                postfixIconPosition={'before'}
                required={true}
                placeholder={'请输入'}
                fieldName={'serviceResourceFlower'}
                regexp={[
                  {
                    id: '260468',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '请输入大于0且最多1位小数的数',
                    pattern: '/^(?!0$)(?!0\\.0*$)([1-9]\\d*|0)(\\.\\d{1})?$/',
                  },
                ]}
                value={data?.factorForm?.serviceResourceFlower}
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
                  id: 'Input_3812606',
                  uid: 'Input_3812606',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                style={{ minWidth: '150px' }}
                onChange={(e: any) => {
                  const eventDatacallSelfFunc257: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260833628504300,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '54392',
                        pageJsonId: '537892',
                        customFuncName: 'calBudget',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc257.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc257,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Input_3812606'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              className={'custom-box'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_464164',
                uid: 'View_464164',
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
                  formItemIndex: 6,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 8px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                lineHeight: '0px',
              }}
              ref={(r: any) => (refs['View_464164'] = r)}
              {...injectData}
            >
              <Checkbox
                name={'复选框'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                text={''}
                selfSpan={''}
                labelCol={'16'}
                wrapperCol={'8'}
                fieldName={'isCake'}
                defaultChecked={false}
                required={false}
                className={'Checkbox_6298215'}
                value={data?.factorForm?.serviceResourceCake}
                $$componentItem={{
                  id: 'Checkbox_6298215',
                  uid: 'Checkbox_6298215',
                  type: 'Checkbox',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '8px 0px 0px 0px' }}
                onChange={(e: any) => {
                  const eventDataifelse390: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '476981',
                          options: {
                            context: '$e.target.checked$',
                            operate: '== true',
                            manualValue: '1',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 170253659800779330,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 170253665681638500,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170253669162717980,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 170253669162790050,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170260840171499000,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 170260840171477900,
                                          children: [],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 170260840171403800,
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
                                        id: '176255',
                                        pageJsonId: '537892',
                                        customFuncName: 'calBudget',
                                        customFuncParams: 'object',
                                      },
                                      actionObjId: 'callSelfFunc',
                                      actionObjName: 'system',
                                      value: 'callSelfFunc',
                                      line_number: 4,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                },
                              ],
                              todoOptions: ['compId', 'valueList'],
                              options: {
                                compId: 'Input_649445',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_649445: '' },
                              },
                              actionObjId: 'Input_649445',
                              actionObjName: 'Input',
                              value: 'setValue',
                              compLib: 'comm',
                              line_number: 3,
                            },
                            {
                              dataName: 'action',
                              dataId: 170253667723336350,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: 'Input_649445',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              actionObjId: 'Input_649445',
                              actionObjName: 'Input',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          value: 'elseIf',
                          callback: [
                            {
                              type: 'setValue',
                              dataId: 170253669162717980,
                              options: {
                                compId: 'Input_649445',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_649445: '' },
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 170260840171499000,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '176255',
                                    pageJsonId: '537892',
                                    customFuncName: 'calBudget',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                            {
                              type: 'setDisable',
                              dataId: 170253667723336350,
                              options: {
                                compId: 'Input_649445',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 170253665377474530,
                          options: {
                            compId: 'Input_649445',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Input',
                            id: '408596',
                            disabled: '',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse390.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(eventDataifelse390, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc258: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260872960500220,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '9183965',
                        pageJsonId: '537892',
                        customFuncName: 'setRequired',
                        customFuncParams: 'object',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc258.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc258,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Checkbox_6298215'] = r)}
                {...injectData}
              />
              <Text
                name={'蛋糕（200元）'}
                content={'蛋糕（200元）'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_2072414',
                  uid: 'Text_2072414',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 12,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  width: '90px',
                }}
                ref={(r: any) => (refs['Text_2072414'] = r)}
                {...injectData}
              />
              <Input
                name={'服务资源'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'份'}
                postfixIconPosition={'before'}
                required={true}
                placeholder={'请输入'}
                fieldName={'serviceResourceCake'}
                regexp={[
                  {
                    id: '260468',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '请输入大于0且最多1位小数的数',
                    pattern: '/^(?!0$)(?!0\\.0*$)([1-9]\\d*|0)(\\.\\d{1})?$/',
                  },
                ]}
                value={data?.factorForm?.serviceResourceCake}
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
                  id: 'Input_649445',
                  uid: 'Input_649445',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                style={{ minWidth: '150px' }}
                onChange={(e: any) => {
                  const eventDatacallSelfFunc259: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260834038997630,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '73186',
                        pageJsonId: '537892',
                        customFuncName: 'calBudget',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc259.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc259,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Input_649445'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              className={'custom-box'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_05478',
                uid: 'View_05478',
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
                  formItemIndex: 7,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 8px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                lineHeight: '0px',
              }}
              ref={(r: any) => (refs['View_05478'] = r)}
              {...injectData}
            >
              <Checkbox
                name={'复选框'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                text={''}
                selfSpan={''}
                labelCol={'16'}
                wrapperCol={'8'}
                fieldName={'isVoucher'}
                defaultChecked={false}
                required={false}
                className={'Checkbox_581346'}
                value={data?.factorForm?.isVoucher}
                $$componentItem={{
                  id: 'Checkbox_581346',
                  uid: 'Checkbox_581346',
                  type: 'Checkbox',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '8px 0px 0px 0px' }}
                onChange={(e: any) => {
                  const eventDataifelse391: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '476981',
                          options: {
                            context: '$e.target.checked$',
                            operate: '== true',
                            manualValue: '1',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 170253659800779330,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 170253665681638500,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170253669162717980,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 170253669162790050,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170260840736633380,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 170260840736685120,
                                          children: [],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 170260840736661660,
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
                                        id: '418141',
                                        pageJsonId: '537892',
                                        customFuncName: 'calBudget',
                                        customFuncParams: 'object',
                                      },
                                      actionObjId: 'callSelfFunc',
                                      actionObjName: 'system',
                                      value: 'callSelfFunc',
                                      line_number: 4,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                },
                              ],
                              todoOptions: ['compId', 'valueList'],
                              options: {
                                compId: 'Input_665686',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_665686: '' },
                              },
                              actionObjId: 'Input_665686',
                              actionObjName: 'Input',
                              value: 'setValue',
                              compLib: 'comm',
                              line_number: 3,
                            },
                            {
                              dataName: 'action',
                              dataId: 170253667723336350,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: 'Input_665686',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              actionObjId: 'Input_665686',
                              actionObjName: 'Input',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          value: 'elseIf',
                          callback: [
                            {
                              type: 'setValue',
                              dataId: 170253669162717980,
                              options: {
                                compId: 'Input_665686',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_665686: '' },
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 170260840736633380,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '418141',
                                    pageJsonId: '537892',
                                    customFuncName: 'calBudget',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                            {
                              type: 'setDisable',
                              dataId: 170253667723336350,
                              options: {
                                compId: 'Input_665686',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 170253665377474530,
                          options: {
                            compId: 'Input_665686',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Input',
                            id: '408596',
                            disabled: '',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse391.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(eventDataifelse391, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc260: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260873427930300,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '098863',
                        pageJsonId: '537892',
                        customFuncName: 'setRequired',
                        customFuncParams: 'object',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc260.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc260,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatacallSelfFunc261: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170381952155393340,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '0920192',
                        pageJsonId: '537892',
                        customFuncName: 'deliveryExtraParams',
                        customFuncParams: 'object',
                      },
                      line_number: 7,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc261.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc261,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Checkbox_581346'] = r)}
                {...injectData}
              />
              <Text
                name={'咪咕礼券（100元）'}
                content={'咪咕礼券（100元）'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_796086',
                  uid: 'Text_796086',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 12,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  width: '116px',
                  flex: '',
                }}
                ref={(r: any) => (refs['Text_796086'] = r)}
                {...injectData}
              />
              <Input
                name={'服务资源'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'份'}
                postfixIconPosition={'before'}
                required={true}
                placeholder={'请输入'}
                fieldName={'serviceResourceVoucher'}
                regexp={[
                  {
                    id: '260468',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '请输入大于0且最多1位小数的数',
                    pattern: '/^(?!0$)(?!0\\.0*$)([1-9]\\d*|0)(\\.\\d{1})?$/',
                  },
                ]}
                value={data?.factorForm?.serviceResourceVoucher}
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
                  id: 'Input_665686',
                  uid: 'Input_665686',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                style={{ minWidth: '150px' }}
                onChange={(e: any) => {
                  const eventDatacallSelfFunc262: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260834448396380,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '8572053',
                        pageJsonId: '537892',
                        customFuncName: 'calBudget',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc262.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc262,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Input_665686'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_768536',
                uid: 'View_768536',
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
                  formItemIndex: 8,
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
              ref={(r: any) => (refs['View_768536'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_1644',
                uid: 'View_1644',
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
                  formItemIndex: 9,
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
              ref={(r: any) => (refs['View_1644'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              className={'custom-box'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_309492',
                uid: 'View_309492',
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
                  formItemIndex: 10,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                lineHeight: '0px',
              }}
              ref={(r: any) => (refs['View_309492'] = r)}
              {...injectData}
            >
              <Checkbox
                name={'复选框'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                text={''}
                selfSpan={''}
                labelCol={'16'}
                wrapperCol={'8'}
                fieldName={'isOther'}
                defaultChecked={false}
                required={false}
                className={'Checkbox_711864'}
                value={data?.factorForm?.isOther}
                $$componentItem={{
                  id: 'Checkbox_711864',
                  uid: 'Checkbox_711864',
                  type: 'Checkbox',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '8px 0px 0px 0px' }}
                onChange={(e: any) => {
                  const eventDataifelse392: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '476981',
                          options: {
                            context: '$e.target.checked$',
                            operate: '== true',
                            manualValue: '1',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 170253659800779330,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 170253665681638500,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170253669162717980,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 170253669162790050,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170260841282361150,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 170260841282331800,
                                          children: [],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 170260841282381470,
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
                                        id: '676122',
                                        pageJsonId: '537892',
                                        customFuncName: 'calBudget',
                                        customFuncParams: 'object',
                                      },
                                      actionObjId: 'callSelfFunc',
                                      actionObjName: 'system',
                                      value: 'callSelfFunc',
                                      line_number: 4,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                },
                              ],
                              todoOptions: ['compId', 'valueList'],
                              options: {
                                compId: 'Input_419549',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_419549: '' },
                              },
                              actionObjId: 'Input_419549',
                              actionObjName: 'Input',
                              value: 'setValue',
                              compLib: 'comm',
                              line_number: 3,
                            },
                            {
                              dataName: 'action',
                              dataId: 170253667723336350,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: 'Input_419549',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              actionObjId: 'Input_419549',
                              actionObjName: 'Input',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          value: 'elseIf',
                          callback: [
                            {
                              type: 'setValue',
                              dataId: 170253669162717980,
                              options: {
                                compId: 'Input_419549',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '5784145',
                                valueList: { Input_419549: '' },
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 170260841282361150,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '676122',
                                    pageJsonId: '537892',
                                    customFuncName: 'calBudget',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                            {
                              type: 'setDisable',
                              dataId: 170253667723336350,
                              options: {
                                compId: 'Input_419549',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '1946606',
                                disabled: 'true',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 170253665377474530,
                          options: {
                            compId: 'Input_419549',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Input',
                            id: '408596',
                            disabled: '',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse392.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(eventDataifelse392, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc263: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260873858053600,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '4538157',
                        pageJsonId: '537892',
                        customFuncName: 'setRequired',
                        customFuncParams: 'object',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc263.params =
                    [
                      {
                        title: '复选框取值',
                        name: 'e',
                        value: '$e.target.checked$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc263,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Checkbox_711864'] = r)}
                {...injectData}
              />
              <Text
                name={'其他'}
                content={'其他'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_4416207',
                  uid: 'Text_4416207',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 12,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  width: 'fit-content',
                  margin: '0px 5px 0px 0px',
                }}
                ref={(r: any) => (refs['Text_4416207'] = r)}
                {...injectData}
              />
              <Input
                name={'服务资源'}
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
                fieldName={'serviceResourceOther'}
                regexp={[
                  {
                    id: '260468',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 2,
                    message: '请输入大于等于0且最多3位小数的数',
                    pattern: '/^(?!0$)(?!0\\.0*$)([1-9]\\d*|0)(\\.\\d{1,3})?$/',
                  },
                ]}
                value={data?.factorForm?.serviceResourceOther}
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
                  id: 'Input_419549',
                  uid: 'Input_419549',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                style={{ minWidth: '150px' }}
                onChange={(e: any) => {
                  const eventDatacallSelfFunc264: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 170260834882793100,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '7709695',
                        pageJsonId: '537892',
                        customFuncName: 'calBudget',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc264.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc264,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Input_419549'] = r)}
                {...injectData}
              />
            </View>
            <TextArea
              name={'服务概述'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'serviceSummary'}
              value={data?.factorForm?.serviceSummary}
              formItemIndex={11}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              $$componentItem={{
                id: 'TextArea_77716',
                uid: 'TextArea_77716',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_77716'] = r)}
              {...injectData}
            />
            <Input
              name={'预算金额'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'系统自动计算'}
              formItemIndex={12}
              fieldName={'budget'}
              value={data?.factorForm?.budget}
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
                id: 'Input_9687',
                uid: 'Input_9687',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_9687'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_6523137',
                uid: 'View_6523137',
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
                  formItemIndex: 13,
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
              ref={(r: any) => (refs['View_6523137'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_600082',
                uid: 'View_600082',
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
                  formItemIndex: 14,
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
              ref={(r: any) => (refs['View_600082'] = r)}
              {...injectData}
            />
            <Select
              name={'已审批文件'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              formItemIndex={15}
              fieldName={'approvedFiles'}
              value={data?.factorForm?.approvedFiles}
              $$componentItem={{
                id: 'Select_522405',
                uid: 'Select_522405',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataifelse393: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '763821',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$e$',
                          operate: '==',
                          manualValue: '1001',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 17035806165255872,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 170358067800926400,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 170358072846880540,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: ['Input_056563', 'Input_098387'],
                              compName: 'page',
                              id: '137718322',
                              pageJsonId: '537892',
                              visible: '',
                              compid: ['Input_056563', 'Input_098387'],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 3,
                          },
                          {
                            dataName: 'action',
                            dataId: 170358073959226340,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 170358073959212900,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                            ],
                            todoOptions: ['compId', 'valueList'],
                            options: {
                              compId: ['Input_098387', 'Input_056563'],
                              compName: 'page',
                              id: '589037',
                              pageJsonId: '537892',
                              compid: ['Input_098387', 'Input_056563'],
                              valueList: { Input_098387: '', Input_056563: '' },
                            },
                            actionObjId: 'sysSetValue',
                            actionObjName: 'page',
                            value: 'sysSetValue',
                            line_number: 4,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'sysSetVisible',
                            dataId: 170358072846880540,
                            options: {
                              compId: ['Input_056563', 'Input_098387'],
                              compName: 'page',
                              id: '137718322',
                              pageJsonId: '537892',
                              visible: '',
                              compid: ['Input_056563', 'Input_098387'],
                            },
                            line_number: 3,
                          },
                          {
                            type: 'sysSetValue',
                            dataId: 170358073959226340,
                            options: {
                              compId: ['Input_098387', 'Input_056563'],
                              compName: 'page',
                              id: '589037',
                              pageJsonId: '537892',
                              compid: ['Input_098387', 'Input_056563'],
                              valueList: { Input_098387: '', Input_056563: '' },
                            },
                            line_number: 4,
                            callback1: [],
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 170358071559041500,
                        options: {
                          compId: ['Input_056563', 'Input_098387'],
                          compName: 'page',
                          id: '429819',
                          pageJsonId: '537892',
                          visible: 'true',
                          compid: ['Input_056563', 'Input_098387'],
                        },
                        line_number: 2,
                      },
                    ],
                  },
                ];
                eventDataifelse393.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse393, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc265: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 170381953365454900,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '68451',
                      pageJsonId: '537892',
                      customFuncName: 'deliveryExtraParams',
                      customFuncParams: 'object',
                    },
                    line_number: 5,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc265.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc265, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Select_522405'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={'6'}
              wrapperCol={18}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_299771',
                uid: 'View_299771',
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
                  formItemIndex: 16,
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
              ref={(r: any) => (refs['View_299771'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={'6'}
              wrapperCol={18}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_303398',
                uid: 'View_303398',
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
                  formItemIndex: 17,
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
              ref={(r: any) => (refs['View_303398'] = r)}
              {...injectData}
            />
            <Input
              name={'文件号'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={18}
              fieldName={'approvedFileCode'}
              value={data?.factorForm?.approvedFileCode}
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
                id: 'Input_098387',
                uid: 'Input_098387',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_098387'] = r)}
              {...injectData}
            />
            <Input
              name={'文件名'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={20}
              fieldName={'approvedFileName'}
              value={data?.factorForm?.approvedFileName}
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
                id: 'Input_056563',
                uid: 'Input_056563',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_056563'] = r)}
              {...injectData}
            />
          </Form>
        </View>
        <Row
          name={'行容器'}
          colSpan={6}
          gutterHorizontal={0}
          gutterVertical={0}
          formItemIndex={19}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_3637475',
            uid: 'Row_3637475',
            type: 'Row',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '20px 0px 0px 0px' }}
          ref={(r: any) => (refs['Row_3637475'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_800665',
              uid: 'View_800665',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 0px',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            ref={(r: any) => (refs['View_800665'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
              $$componentItem={{
                id: 'View_4179346',
                uid: 'View_4179346',
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
                width: '6px',
                height: '22px',
                borderRadius: '10px 10px 10px 10px',
              }}
              ref={(r: any) => (refs['View_4179346'] = r)}
              {...injectData}
            />
            <Text
              name={'客户活动清单'}
              content={'客户活动清单'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_5856485',
                uid: 'Text_5856485',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#1c242e',
                backgroundColor: 'rgba(255, 255, 255,0)',
                margin: '0px 0px 0px 8px',
              }}
              ref={(r: any) => (refs['Text_5856485'] = r)}
              {...injectData}
            />
          </View>
        </Row>
        <Row
          name={'行容器'}
          colSpan={12}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_851',
            uid: 'Row_851',
            type: 'Row',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '0px 0px 0px 0px' }}
          ref={(r: any) => (refs['Row_851'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_632947',
              uid: 'View_632947',
              type: 'View',
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
              lineHeight: '100%px',
              height: '100%',
              justifyContent: 'flex-end',
            }}
            ref={(r: any) => (refs['View_632947'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_859813',
              uid: 'View_859813',
              type: 'View',
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
              justifyContent: 'flex-end',
            }}
            ref={(r: any) => (refs['View_859813'] = r)}
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
                id: 'Button_683498',
                uid: 'Button_683498',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatagetValue156: any = [
                  {
                    type: 'getValue',
                    dataId: 170262330959171650,
                    options: {
                      compId: 'Select_1514685',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '168561',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '582654',
                            options: {
                              context: '$value_168561$',
                              operate: 'empty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170262332578712400,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170262340704297800,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 170262682114014200,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 170262682114004600,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170262700962336770,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 170262700962355400,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 170262700962357340,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170262700962340740,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170262700962382500,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170262700962325000,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170262700962338850,
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
                                                          compId:
                                                            'setDataSource',
                                                          compName: 'page',
                                                          id: '526477',
                                                          pageJsonId: '537892',
                                                          dataSourceId: 169993114559322180,
                                                          dataSourceName:
                                                            'infoList',
                                                          dataSourceRelType:
                                                            'custom',
                                                          dataSourceSetValue: [
                                                            {
                                                              attrId: '906024',
                                                              code: 'groupId',
                                                              name: '集团编码',
                                                              type: 'string',
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              showInput: false,
                                                              _codePath: [
                                                                'groupId',
                                                              ],
                                                              _idpath: [
                                                                '906024',
                                                              ],
                                                            },
                                                            {
                                                              attrId: '0346427',
                                                              code: 'groupName',
                                                              name: '集团名称',
                                                              type: 'string',
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              showInput: false,
                                                              _codePath: [
                                                                'groupName',
                                                              ],
                                                              _idpath: [
                                                                '0346427',
                                                              ],
                                                            },
                                                            {
                                                              attrId: '494685',
                                                              code: 'msisdn',
                                                              name: '手机号码',
                                                              type: 'string',
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              showInput: false,
                                                              _codePath: [
                                                                'msisdn',
                                                              ],
                                                              _idpath: [
                                                                '494685',
                                                              ],
                                                            },
                                                            {
                                                              attrId: '238293',
                                                              code: 'customerName',
                                                              name: '客户姓名',
                                                              type: 'string',
                                                              initialData: {
                                                                type: 'static',
                                                              },
                                                              showInput: false,
                                                              _codePath: [
                                                                'customerName',
                                                              ],
                                                              _idpath: [
                                                                '238293',
                                                              ],
                                                            },
                                                          ],
                                                          operateType: 1,
                                                          onlySetPatch: true,
                                                          otherObjectArrayOptions:
                                                            {},
                                                          targetDataSourcePaths:
                                                            [],
                                                        },
                                                        actionObjId:
                                                          'setDataSource',
                                                        actionObjName: 'page',
                                                        value: 'setDataSource',
                                                        line_number: 7,
                                                      },
                                                      {
                                                        dataName: 'action',
                                                        dataId: 170262700962345340,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170262700962372800,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 170262700962387070,
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
                                                          id: '55764',
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
                                                        line_number: 8,
                                                      },
                                                    ],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170262700962385500,
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
                                                  id: '695405',
                                                  pageJsonId: '537892',
                                                  code: 'function main(data,state,success,fail){console.log("\\u5F39\\u7A97\\u8FD4\\u56DE:",okData_4699992);var res=okData_4699992;var infoList=data.infoList||[];console.log("infoList = ",infoList);if(infoList.length>0){var maxRowId=1;for(var i=0;i<infoList.length;i++){var rowId=parseInt(infoList[i]["rowId"]);if(maxRowId<=rowId){maxRowId=rowId}}res.rowId=parseInt(maxRowId)+1}else{res.rowId=1}infoList.unshift(res);var instList=[];for(var key in res){instList.push({"attrCode":key,"attrName":"","attrValue":res[key]})}var instObj={"instCode":res.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.unshift(instObj)}else{var instList=[];instList.unshift(instObj);data.sceneSubmit.instList=instList}data.infoList=infoList;success()};',
                                                },
                                                actionObjId: 'customActionCode',
                                                actionObjName: 'page',
                                                value: 'customActionCode',
                                                line_number: 6,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [
                                              {
                                                title: '弹窗确认回调参数',
                                                name: 'okData_75216',
                                                value: '$okData_4699992$',
                                              },
                                            ],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 170262700962352930,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                          },
                                        ],
                                        todoOptions: ['modalname', 'compState'],
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'page',
                                          id: '4699992',
                                          pageJsonId: '537892',
                                          modalname: '/kehuhuodongqingdan9496',
                                          pageId: '1052839002190835712',
                                          paramsObj: {
                                            phone: '$value_24586657$',
                                            lanId: '$state.lanId$',
                                            catalogCode: '$state.catalogCode$',
                                            agencyList: '$data.agencyList$',
                                            infoList: '$data.infoList$',
                                            staffCode: '$state.staffCode$',
                                            isCoreFlag: '$data_211563$',
                                            orderNbr: '$state.orderNbr$',
                                          },
                                          paramsObjKeyValueMap: {
                                            phone: '$value_24586657$',
                                            lanId: '$state.lanId$',
                                            catalogCode: '$state.catalogCode$',
                                            isCoreFlag: '$data_211563$',
                                            agencyList: '$data.agencyList$',
                                            infoList: '$data.infoList$',
                                            staffCode: '$state.staffCode$',
                                            orderNbr: '$state.orderNbr$',
                                          },
                                          modalPath: '/kehuhuodongqingdan9496',
                                        },
                                        actionObjId: 'showCustomModal',
                                        actionObjName: 'page',
                                        value: 'showCustomModal',
                                        line_number: 5,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 170262682114018700,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['actionTitle', 'editorCode'],
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '211563',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var serviceItemVal=value_168561;if(serviceItemVal==1003){success(2)}else{success(1)}};',
                                  actionTitle: '',
                                },
                                actionObjId: 'customActionCode',
                                actionObjName: 'page',
                                value: 'customActionCode',
                                tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                line_number: 4,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'customActionCode',
                                dataId: 170262682114014200,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '211563',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var serviceItemVal=value_168561;if(serviceItemVal==1003){success(2)}else{success(1)}};',
                                  actionTitle: '',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'showCustomModal',
                                    dataId: 170262700962336770,
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '4699992',
                                      pageJsonId: '537892',
                                      modalname: '/kehuhuodongqingdan9496',
                                      pageId: '1052839002190835712',
                                      paramsObj: {
                                        phone: '$value_24586657$',
                                        lanId: '$state.lanId$',
                                        catalogCode: '$state.catalogCode$',
                                        agencyList: '$data.agencyList$',
                                        infoList: '$data.infoList$',
                                        staffCode: '$state.staffCode$',
                                        isCoreFlag: '$data_211563$',
                                        orderNbr: '$state.orderNbr$',
                                      },
                                      paramsObjKeyValueMap: {
                                        phone: '$value_24586657$',
                                        lanId: '$state.lanId$',
                                        catalogCode: '$state.catalogCode$',
                                        isCoreFlag: '$data_211563$',
                                        agencyList: '$data.agencyList$',
                                        infoList: '$data.infoList$',
                                        staffCode: '$state.staffCode$',
                                        orderNbr: '$state.orderNbr$',
                                      },
                                      modalPath: '/kehuhuodongqingdan9496',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 170262700962357340,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '695405',
                                          pageJsonId: '537892',
                                          code: 'function main(data,state,success,fail){console.log("\\u5F39\\u7A97\\u8FD4\\u56DE:",okData_4699992);var res=okData_4699992;var infoList=data.infoList||[];console.log("infoList = ",infoList);if(infoList.length>0){var maxRowId=1;for(var i=0;i<infoList.length;i++){var rowId=parseInt(infoList[i]["rowId"]);if(maxRowId<=rowId){maxRowId=rowId}}res.rowId=parseInt(maxRowId)+1}else{res.rowId=1}infoList.unshift(res);var instList=[];for(var key in res){instList.push({"attrCode":key,"attrName":"","attrValue":res[key]})}var instObj={"instCode":res.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.unshift(instObj)}else{var instList=[];instList.unshift(instObj);data.sceneSubmit.instList=instList}data.infoList=infoList;success()};',
                                        },
                                        line_number: 6,
                                        callback1: [
                                          {
                                            type: 'setDataSource',
                                            dataId: 170262700962382500,
                                            options: {
                                              compId: 'setDataSource',
                                              compName: 'page',
                                              id: '526477',
                                              pageJsonId: '537892',
                                              dataSourceId: 169993114559322180,
                                              dataSourceName: 'infoList',
                                              dataSourceRelType: 'custom',
                                              dataSourceSetValue: [
                                                {
                                                  attrId: '906024',
                                                  code: 'groupId',
                                                  name: '集团编码',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                  _codePath: ['groupId'],
                                                  _idpath: ['906024'],
                                                },
                                                {
                                                  attrId: '0346427',
                                                  code: 'groupName',
                                                  name: '集团名称',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                  _codePath: ['groupName'],
                                                  _idpath: ['0346427'],
                                                },
                                                {
                                                  attrId: '494685',
                                                  code: 'msisdn',
                                                  name: '手机号码',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                  _codePath: ['msisdn'],
                                                  _idpath: ['494685'],
                                                },
                                                {
                                                  attrId: '238293',
                                                  code: 'customerName',
                                                  name: '客户姓名',
                                                  type: 'string',
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  showInput: false,
                                                  _codePath: ['customerName'],
                                                  _idpath: ['238293'],
                                                },
                                              ],
                                              operateType: 1,
                                              onlySetPatch: true,
                                              otherObjectArrayOptions: {},
                                              targetDataSourcePaths: [],
                                            },
                                            line_number: 7,
                                            callback1: [],
                                            callback2: [],
                                          },
                                          {
                                            type: 'callParentCustomFunc',
                                            dataId: 170262700962345340,
                                            options: {
                                              compId: 'callParentCustomFunc',
                                              compName: 'system',
                                              id: '55764',
                                              pageJsonId: '537892',
                                              pathname: '/auditOrderPrepare',
                                              pageId: '884045146848604160',
                                              customFuncName: 'getFactor',
                                              customFuncParams:
                                                '$data.sceneSubmit$',
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
                            dataId: 170262337613382000,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '9021856',
                              pageJsonId: '537892',
                              type: 'warn',
                              value: '请先选择服务项目！',
                            },
                            line_number: 3,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue156.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatagetValue156, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_683498'] = r)}
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
              type={'danger'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_026256',
                uid: 'Button_026256',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelectedKey28: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 169932349476947520,
                    options: {
                      compId: 'Table_8700198_3717786',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '7288851',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '03277678',
                            options: {
                              context: '$selectedRowKeys_7288851$',
                              operate: 'empty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169932351065352500,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 169932354346547620,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169932354954849440,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 169932354954890140,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 169932354954837470,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 169932354954812130,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 169932354954841100,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169932354954838900,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169932354954885980,
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
                                                  id: '751256',
                                                  pageJsonId: '537892',
                                                  dataSourceId: 169993114559322180,
                                                  dataSourceName: 'infoList',
                                                  dataSourceRelType: 'custom',
                                                  dataSourceSetValue: [
                                                    {
                                                      attrId: '6566124',
                                                      code: 'groupId',
                                                      name: '集团编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '60996',
                                                      code: 'groupName',
                                                      name: '集团名称',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '906024',
                                                      code: 'agencyName',
                                                      name: '代理商名称',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '0346427',
                                                      code: 'basicAccessNumber',
                                                      name: '基本接入号',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '494685',
                                                      code: 'busiAccessNumber',
                                                      name: '业务接入号',
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
                                                actionObjId: 'setDataSource',
                                                actionObjName: 'page',
                                                value: 'setDataSource',
                                                line_number: 6,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 170124659545326660,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170124659545378460,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 170124659545399780,
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
                                                  id: '3010176',
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
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '4562264',
                                                      code: 'approveGrade',
                                                      name: '审批等级',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '63768',
                                                      code: 'attrList',
                                                      name: '要素',
                                                      type: 'objectArray',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '919265',
                                                      code: 'fileInfo',
                                                      name: '附件',
                                                      type: 'objectArray',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      children: [],
                                                    },
                                                    {
                                                      attrId: '360171',
                                                      code: 'catalogItemCode',
                                                      name: '类目项编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '420623',
                                                      code: 'catalogItemSubType',
                                                      name: '类目项子类型',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '375466',
                                                      code: 'childCatalogCode',
                                                      name: '子类目项编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '9257773',
                                                      code: 'parentCatalogCode',
                                                      name: '上级类目编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '5733013',
                                                      code: 'parentCatalogItemCode',
                                                      name: '上级类目项编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '440627',
                                                      code: 'childCatalogDesc',
                                                      name: '子类目项描述',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '177104',
                                                      code: 'approveGradeName',
                                                      name: '审批等级名称',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '13154521',
                                                      code: 'custMemberList',
                                                      name: '成员信息',
                                                      type: 'objectArray',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '5397914',
                                                      code: 'instList',
                                                      name: '多实例',
                                                      type: 'objectArray',
                                                      initialData: {
                                                        type: 'static',
                                                      },
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
                                                line_number: 7,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 169932354954824830,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169932354954890400,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 169932379189229250,
                                                        children: [],
                                                        todoOptions: [],
                                                        options: {
                                                          compId:
                                                            'Table_8700198_3717786',
                                                          compLib: 'comm',
                                                          pageJsonId: '537892',
                                                          compName: 'Table',
                                                          id: '628399',
                                                        },
                                                        actionObjId:
                                                          'Table_8700198_3717786',
                                                        actionObjName: 'Table',
                                                        value:
                                                          'clearTableSelected',
                                                        compLib: 'comm',
                                                        line_number: 9,
                                                      },
                                                    ],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169932354954850400,
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
                                                  id: '676069',
                                                  pageJsonId: '537892',
                                                  pathname:
                                                    '/auditOrderPrepare',
                                                  pageId: '884045146848604160',
                                                  customFuncName: 'getFactor',
                                                  customFuncParams:
                                                    '$data.sceneSubmit$',
                                                  modalPath:
                                                    '/auditOrderPrepare',
                                                },
                                                actionObjId:
                                                  'callParentCustomFunc',
                                                actionObjName: 'system',
                                                value: 'callParentCustomFunc',
                                                line_number: 8,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 169932354954824930,
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
                                          id: '25397954',
                                          pageJsonId: '537892',
                                          code: 'function main(data,state,success,fail){var infoList=data.infoList;var sel=selectedRowKeys_7288851;console.log("sel = ",sel);var res=[];var instList=[];if(sel!=undefined&&sel.length>0){infoList.forEach(function(v){var exit=sel.findIndex(function(item){return item==v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.infoList=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item==v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}console.log("instList = ",instList);console.log("data.sceneSubmit = ",data.sceneSubmit);success()};',
                                        },
                                        actionObjId: 'customActionCode',
                                        actionObjName: 'page',
                                        value: 'customActionCode',
                                        line_number: 5,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 169932354954833150,
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
                                  id: '6494697',
                                  pageJsonId: '537892',
                                  type: 'confirm',
                                  title: '温馨提示',
                                  content: '您确定要删除吗?',
                                  okText: '确认',
                                },
                                actionObjId: 'showModal',
                                actionObjName: 'page',
                                value: 'showModal',
                                line_number: 4,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'showModal',
                                dataId: 169932354954849440,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '6494697',
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
                                    dataId: 169932354954837470,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '25397954',
                                      pageJsonId: '537892',
                                      code: 'function main(data,state,success,fail){var infoList=data.infoList;var sel=selectedRowKeys_7288851;console.log("sel = ",sel);var res=[];var instList=[];if(sel!=undefined&&sel.length>0){infoList.forEach(function(v){var exit=sel.findIndex(function(item){return item==v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.infoList=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item==v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}console.log("instList = ",instList);console.log("data.sceneSubmit = ",data.sceneSubmit);success()};',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 169932354954841100,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '751256',
                                          pageJsonId: '537892',
                                          dataSourceId: 169993114559322180,
                                          dataSourceName: 'infoList',
                                          dataSourceRelType: 'custom',
                                          dataSourceSetValue: [
                                            {
                                              attrId: '6566124',
                                              code: 'groupId',
                                              name: '集团编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '60996',
                                              code: 'groupName',
                                              name: '集团名称',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '906024',
                                              code: 'agencyName',
                                              name: '代理商名称',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '0346427',
                                              code: 'basicAccessNumber',
                                              name: '基本接入号',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '494685',
                                              code: 'busiAccessNumber',
                                              name: '业务接入号',
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
                                        type: 'setDataSource',
                                        dataId: 170124659545326660,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '3010176',
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
                                            },
                                            {
                                              attrId: '4562264',
                                              code: 'approveGrade',
                                              name: '审批等级',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '63768',
                                              code: 'attrList',
                                              name: '要素',
                                              type: 'objectArray',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '919265',
                                              code: 'fileInfo',
                                              name: '附件',
                                              type: 'objectArray',
                                              initialData: { type: 'static' },
                                              children: [],
                                            },
                                            {
                                              attrId: '360171',
                                              code: 'catalogItemCode',
                                              name: '类目项编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '420623',
                                              code: 'catalogItemSubType',
                                              name: '类目项子类型',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '375466',
                                              code: 'childCatalogCode',
                                              name: '子类目项编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '9257773',
                                              code: 'parentCatalogCode',
                                              name: '上级类目编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '5733013',
                                              code: 'parentCatalogItemCode',
                                              name: '上级类目项编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '440627',
                                              code: 'childCatalogDesc',
                                              name: '子类目项描述',
                                              type: 'string',
                                              initialData: { type: 'static' },
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
                                            {
                                              attrId: '5397914',
                                              code: 'instList',
                                              name: '多实例',
                                              type: 'objectArray',
                                              initialData: { type: 'static' },
                                            },
                                          ],
                                          operateType: 1,
                                          onlySetPatch: true,
                                          otherObjectArrayOptions: {},
                                          targetDataSourcePaths: [],
                                        },
                                        line_number: 7,
                                        callback1: [],
                                        callback2: [],
                                      },
                                      {
                                        type: 'callParentCustomFunc',
                                        dataId: 169932354954824830,
                                        options: {
                                          compId: 'callParentCustomFunc',
                                          compName: 'system',
                                          id: '676069',
                                          pageJsonId: '537892',
                                          pathname: '/auditOrderPrepare',
                                          pageId: '884045146848604160',
                                          customFuncName: 'getFactor',
                                          customFuncParams:
                                            '$data.sceneSubmit$',
                                          modalPath: '/auditOrderPrepare',
                                        },
                                        line_number: 8,
                                        callback1: [
                                          {
                                            type: 'clearTableSelected',
                                            dataId: 169932379189229250,
                                            options: {
                                              compId: 'Table_8700198_3717786',
                                              compLib: 'comm',
                                              pageJsonId: '537892',
                                              compName: 'Table',
                                              id: '628399',
                                            },
                                            line_number: 9,
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
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 169932352922621800,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '593447',
                              pageJsonId: '537892',
                              type: 'warn',
                              value: '清先选择数据！',
                            },
                            line_number: 3,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey28.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey28,
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
              ref={(r: any) => (refs['Button_026256'] = r)}
              {...injectData}
            />
            <Button
              name={'清空'}
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
                id: 'Button_5473437',
                uid: 'Button_5473437',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 10px 0px 0px' }}
              onClick={(e: any) => {
                const eventDataifelse394: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '913482',
                        options: {
                          context: '$data.infoList$',
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
                          context: '$data.infoList.length$',
                          operate: '>',
                          manualValue: '0',
                        },
                        condId: '225057',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168654928547086080,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 168654933664453340,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168654934060454430,
                            children: [],
                            todoOptions: ['msgType', 'value', 'duration'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '3807376',
                              pageJsonId: '537892',
                              type: 'info',
                              value: '暂无数据！',
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                            line_number: 6,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 168654934060454430,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '3807376',
                              pageJsonId: '537892',
                              type: 'info',
                              value: '暂无数据！',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'showModal',
                        dataId: 168654933030972830,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '465026',
                          pageJsonId: '537892',
                          type: 'confirm',
                          title: '温馨提示',
                          content: '您确定要清空全部数据吗?',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 168654933030923420,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '543478',
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
                                },
                                {
                                  attrId: '4562264',
                                  code: 'approveGrade',
                                  name: '审批等级',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '63768',
                                  code: 'attrList',
                                  name: '要素',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '919265',
                                  code: 'fileInfo',
                                  name: '附件',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                  children: [],
                                },
                                {
                                  attrId: '360171',
                                  code: 'catalogItemCode',
                                  name: '类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '420623',
                                  code: 'catalogItemSubType',
                                  name: '类目项子类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '375466',
                                  code: 'childCatalogCode',
                                  name: '子类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '9257773',
                                  code: 'parentCatalogCode',
                                  name: '上级类目编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '5733013',
                                  code: 'parentCatalogItemCode',
                                  name: '上级类目项编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '440627',
                                  code: 'childCatalogDesc',
                                  name: '子类目项描述',
                                  type: 'string',
                                  initialData: { type: 'static' },
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
                                {
                                  attrId: '5397914',
                                  code: 'instList',
                                  name: '多实例',
                                  type: 'objectArray',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['EMPTY_DATA', 'array'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.array$',
                                  },
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
                                type: 'callParentCustomFunc',
                                dataId: 168654933030954900,
                                options: {
                                  compId: 'callParentCustomFunc',
                                  compName: 'system',
                                  id: '115292',
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
                          {
                            type: 'setDataSource',
                            dataId: 168655582339309540,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '429442',
                              pageJsonId: '537892',
                              dataSourceId: 169993114559322180,
                              dataSourceName: 'infoList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '906024',
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['groupId'],
                                  _idpath: ['906024'],
                                },
                                {
                                  attrId: '0346427',
                                  code: 'groupName',
                                  name: '集团名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['groupName'],
                                  _idpath: ['0346427'],
                                },
                                {
                                  attrId: '494685',
                                  code: 'msisdn',
                                  name: '手机号码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['msisdn'],
                                  _idpath: ['494685'],
                                },
                                {
                                  attrId: '238293',
                                  code: 'name',
                                  name: '客户姓名',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['name'],
                                  _idpath: ['238293'],
                                },
                              ],
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDataifelse394.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataifelse394, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_5473437'] = r)}
              {...injectData}
            />
          </View>
        </Row>
        <Table
          name={'信息表格'}
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
              className: '',
              id: '8677166',
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
              className: 'divider',
              id: '260524',
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
              title: '手机号码',
              key: 'msisdn',
              dataIndex: 'msisdn',
              className: 'divider',
              id: '7010345',
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
              title: '客户姓名',
              key: 'customerName',
              dataIndex: 'name',
              className: 'divider',
              id: '586297',
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
          selectType={'checkbox'}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={{ type: 'checkbox' }}
          showHead={false}
          showTotal={true}
          showSizeChanger={true}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          dataSource={data?.infoList}
          fieldName={'data.MemberInfo.length'}
          total={data?.infoList?.length}
          hiddenAction={false}
          rowKey={'rowId'}
          rowActions={[]}
          extend={[]}
          adjustModel={'fill'}
          className={'Table_8700198_3717786'}
          dataSourceFromDataSourceConfig={'data.infoList'}
          $$componentItem={{
            id: 'Table_8700198_3717786',
            uid: 'Table_8700198_3717786',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '10px 0px 10px 0px' }}
          onRowEdit={(rowId: any, row: any, index: any) => {}}
          ref={(r: any) => (refs['Table_8700198_3717786'] = r)}
          {...injectData}
        />
        <Form
          name={'申请原因表单'}
          colSpan={24}
          labelCol={'8'}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_814689'}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.factorForm}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_814689',
            uid: 'Form_814689',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={(changedFieldName: any, changedValue: any) => {
            const eventDatasetDataSource82: any = [
              {
                type: 'setDataSource',
                dataId: 170373410305934180,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '906382',
                  pageJsonId: '537892',
                  dataSourceId: 167051116912078750,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '371174',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_814689', 'getFieldsValue'],
                        code: 'reason',
                      },
                      _codePath: ['reason'],
                      _idpath: ['371174'],
                    },
                    {
                      attrId: '351233',
                      code: 'serviceItem',
                      name: '服务项目',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceItem'],
                      _idpath: ['351233'],
                    },
                    {
                      attrId: '2220604',
                      code: 'serviceDate',
                      name: '服务时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceDate'],
                      _idpath: ['2220604'],
                    },
                    {
                      attrId: '8216438',
                      code: 'servicePeopleNum',
                      name: '服务人数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['servicePeopleNum'],
                      _idpath: ['8216438'],
                    },
                    {
                      attrId: '8152763',
                      code: 'serviceResourceSmallCake',
                      name: '服务资源-小糕点（100元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceResourceSmallCake'],
                      _idpath: ['8152763'],
                    },
                    {
                      attrId: '4370244',
                      code: 'serviceResourceFlower',
                      name: '服务资源-鲜花（200元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceResourceFlower'],
                      _idpath: ['4370244'],
                    },
                    {
                      attrId: '436792',
                      code: 'serviceResourceCake',
                      name: '服务资源-蛋糕（200元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceResourceCake'],
                      _idpath: ['436792'],
                    },
                    {
                      attrId: '25805049',
                      code: 'serviceResourceVoucher',
                      name: '服务资源-咪咕礼卷（100元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceResourceVoucher'],
                      _idpath: ['25805049'],
                    },
                    {
                      attrId: '382156',
                      code: 'serviceResourceOther',
                      name: '服务资源-其他\t',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceResourceOther'],
                      _idpath: ['382156'],
                    },
                    {
                      attrId: '79368',
                      code: 'serviceSummary',
                      name: '服务概述',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceSummary'],
                      _idpath: ['79368'],
                    },
                    {
                      attrId: '466739',
                      code: 'budget',
                      name: '预算金额（元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['budget'],
                      _idpath: ['466739'],
                    },
                    {
                      attrId: '06957',
                      code: 'customerName',
                      name: '客户姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['customerName'],
                      _idpath: ['06957'],
                    },
                    {
                      attrId: '0436343',
                      code: 'msisdn',
                      name: '手机号码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['msisdn'],
                      _idpath: ['0436343'],
                    },
                    {
                      attrId: '540612',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupName'],
                      _idpath: ['540612'],
                    },
                    {
                      attrId: '9187672',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupId'],
                      _idpath: ['9187672'],
                    },
                    {
                      attrId: '052291',
                      code: 'approvedFiles',
                      name: '已审批文件',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['approvedFiles'],
                      _idpath: ['052291'],
                    },
                    {
                      attrId: '1742476',
                      code: 'approvedFileName',
                      name: '文件名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['approvedFileName'],
                      _idpath: ['1742476'],
                    },
                    {
                      attrId: '04152952',
                      code: 'approvedFileCode',
                      name: '文件号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['approvedFileCode'],
                      _idpath: ['04152952'],
                    },
                    {
                      attrId: '814475',
                      code: 'isSmallCake',
                      name: '是否选择小糕点',
                      type: 'boolean',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['isSmallCake'],
                      _idpath: ['814475'],
                    },
                    {
                      attrId: '194965',
                      code: 'isFlower',
                      name: '是否选择鲜花',
                      type: 'boolean',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['isFlower'],
                      _idpath: ['194965'],
                    },
                    {
                      attrId: '890983',
                      code: 'isCake',
                      name: '是否选择蛋糕',
                      type: 'boolean',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['isCake'],
                      _idpath: ['890983'],
                    },
                    {
                      attrId: '727604',
                      code: 'isVoucher',
                      name: '是否选择咪咕礼券',
                      type: 'boolean',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['isVoucher'],
                      _idpath: ['727604'],
                    },
                    {
                      attrId: '059193',
                      code: 'isOther',
                      name: '是否选择其他',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['isOther'],
                      _idpath: ['059193'],
                    },
                    {
                      attrId: '871579',
                      code: 'settlementAmount',
                      name: '结算金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['settlementAmount'],
                      _idpath: ['871579'],
                    },
                    {
                      attrId: '844773',
                      code: 'serviceResource',
                      name: '服务资源（审批内容使用）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['serviceResource'],
                      _idpath: ['844773'],
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170373411020871580,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '12542',
                      pageJsonId: '537892',
                      actionTitle: '',
                      code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;var serviceResource=[];for(var key in obj){if(["isSmallCake","isFlower","isCake","isVoucher","isOther","serviceResource"].includes(key)){continue}var val=obj[key];if(key=="serviceResourceSmallCake"&&!!val){serviceResource.push("\\u5C0F\\u7CD5\\u70B9(100\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceFlower"&&!!val){serviceResource.push("\\u9C9C\\u82B1(200\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceCake"&&!!val){serviceResource.push("\\u86CB\\u7CD5(200\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceVoucher"&&!!val){serviceResource.push("\\u54AA\\u5495\\u793C\\u5238(100\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceOther"&&!!val){serviceResource.push("\\u5176\\u4ED6:"+val+"\\u5143")}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}attrList.push({"attrCode":"serviceResource","attrName":"","attrValue":serviceResource.join("\\u3001")});data.sceneSubmit.attrList=attrList;console.log("data.sceneSubmit.attrList",data.sceneSubmit.attrList);success(attrList)};',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 170373411020882940,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '12501',
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
            eventDatasetDataSource82.params =
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
              eventDatasetDataSource82,
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
          ref={(r: any) => (refs['Form_814689'] = r)}
          {...injectData}
        >
          <TextArea
            name={'申请原因'}
            selfSpan={24}
            labelCol={'2'}
            wrapperCol={22}
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
            $$componentItem={{
              id: 'Input_7242206_974846_973427',
              uid: 'Input_7242206_974846_973427',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_7242206_974846_973427'] = r)}
            {...injectData}
          />
        </Form>
        <View
          name={'布局容器'}
          className={'fixed-form-item-label-width-120'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_058962',
            uid: 'View_058962',
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
            margin: '0px 0px 24px 0px',
          }}
          ref={(r: any) => (refs['View_058962'] = r)}
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
            className={'fixed-form-item-label-width-120'}
            $$componentItem={{
              id: 'Form_170013',
              uid: 'Form_170013',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_170013'] = r)}
            {...injectData}
          >
            <Select
              name={'附件'}
              size={'default'}
              selfSpan={8}
              labelCol={'6'}
              wrapperCol={18}
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
                id: 'Select_166518',
                uid: 'Select_166518',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_166518'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_930498',
                uid: 'View_930498',
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
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
              }}
              ref={(r: any) => (refs['View_930498'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                formItemIndex={2}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_001795',
                  uid: 'View_001795',
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
                  width: 'fit-content',
                }}
                ref={(r: any) => (refs['View_001795'] = r)}
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
                  numberLimit={50}
                  singleFileMaxSize={99}
                  uploadText={'文件上传'}
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
                  tipIcon={{
                    type: 'question-circle',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  tipContent={'最大上次大小'}
                  icon={{
                    type: undefined,
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'StdUpload_2448245',
                    uid: 'StdUpload_2448245',
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
                    // console 168422735688877800
                    console.log(
                      file,
                      file?.response?.resultMsg,
                      '文件上传打印',
                    );
                    const eventDatasetLoading139: any = [
                      {
                        type: 'setLoading',
                        dataId: 169501717461630720,
                        options: {
                          compId: 'Table_6106139',
                          compLib: 'comm',
                          pageJsonId: '0521965',
                          compName: 'Table',
                          id: '275225',
                          loading: false,
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetLoading139.params =
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
                      eventDatasetLoading139,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'setLoading',
                      {
                        id: 'setLoading',
                        name: 'setLoading',
                        type: 'setLoading',
                        platform: 'pc',
                      },
                    );
                    const eventDataifelse396: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '81120545',
                            options: {
                              context: '$file.response.resultCode$',
                              operate: '==',
                              useManual: true,
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168422623246716860,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168422635973024060,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168422638076056160,
                                children: [],
                                todoOptions: ['msgType', 'value', 'duration'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '431444',
                                  pageJsonId: '0521965',
                                  type: 'error',
                                  value: '$file?.response?.resultMsg$',
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
                            desc: '失败',
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 168422638076056160,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '431444',
                                  pageJsonId: '0521965',
                                  type: 'error',
                                  value: '$file?.response?.resultMsg$',
                                },
                                line_number: 8,
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '81120545',
                                options: {
                                  context:
                                    '$file.response.resultObject.fileId$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 16842264781748392,
                            elseIfs: [],
                            line_number: 4,
                            callback1: [
                              {
                                type: 'getSelectedData',
                                dataId: 168422647817427550,
                                options: {
                                  compId: 'Select_166518',
                                  compLib: 'comm',
                                  pageJsonId: '0521965',
                                  compName: 'Select',
                                  id: '128722',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 168422647817440350,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '822291',
                                      pageJsonId: '537892',
                                      dataSourceId: 170358356580483100,
                                      dataSourceName: 'customerFileList',
                                      dataSourceRelType: 'custom',
                                      dataSourceSetValue: [
                                        {
                                          attrId: '427524',
                                          code: 'fileName',
                                          name: '附件名称',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: ['context', '$file?.name$'],
                                            code: '',
                                          },
                                        },
                                        {
                                          attrId: '395642',
                                          code: 'filePath',
                                          name: '附件文件路径',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                        },
                                        {
                                          attrId: '9224574',
                                          code: 'fileServerType',
                                          name: '附件文件服务器类型',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                        },
                                        {
                                          attrId: '360744',
                                          code: 'fileSubType',
                                          name: '属性',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                        },
                                        {
                                          attrId: '671702',
                                          code: 'fileUrl',
                                          name: '附件url地址',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: ['customize'],
                                            code: '$file?.response?.resultObject?.filePathInServer$',
                                          },
                                        },
                                        {
                                          attrId: '562669',
                                          code: 'tacheCode',
                                          name: '环节编码',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: ['customize'],
                                            code: '$state.tacheCode$',
                                          },
                                        },
                                        {
                                          attrId: '794167',
                                          code: 'fileCode',
                                          name: '文件编码',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: [
                                              'context',
                                              '$file?.response?.resultObject?.fileId$',
                                            ],
                                            code: '',
                                          },
                                        },
                                        {
                                          attrId: '169508',
                                          code: 'createTime',
                                          name: '创建时间',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: ['customize'],
                                            code: '$file?.response?.resultObject?.statusDate$',
                                          },
                                        },
                                        {
                                          attrId: '393088',
                                          code: 'createStaff',
                                          name: '创建人',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: [
                                              'datasource',
                                              'pageData',
                                              'data',
                                            ],
                                            code: 'createStaff',
                                          },
                                        },
                                        {
                                          attrId: '7990377',
                                          code: 'fileTypeName',
                                          name: '附件类型',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: [
                                              'context',
                                              '$selectedData_128722[0]$',
                                            ],
                                            code: 'label',
                                          },
                                        },
                                        {
                                          attrId: '062419',
                                          code: 'fileType',
                                          name: '附件分类-大类',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: [
                                              'context',
                                              '$selectedData_128722[0]$',
                                            ],
                                            code: 'value',
                                          },
                                        },
                                      ],
                                      operateType: 0,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                      targetDataSourcePaths: [],
                                    },
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 170365876925527100,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '678845',
                                          pageJsonId: '537892',
                                          customFuncName:
                                            'customNodeFileUpload',
                                          customFuncParams: 'object',
                                          paramsObj: {
                                            fileList: '$data.customerFileList$',
                                            type: '0',
                                          },
                                          paramsObjKeyValueMap: {
                                            fileList: '$data.customerFileList$',
                                            type: '0',
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
                        ],
                      },
                    ];
                    eventDataifelse396.params =
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
                      eventDataifelse396,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'ifelse',
                      {
                        id: 'ifelse',
                        name: 'ifelse',
                        type: 'ifelse',
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
                    const eventDatasetLoading140: any = [
                      {
                        type: 'setLoading',
                        dataId: 169501716221466140,
                        options: {
                          compId: 'Table_6106139',
                          compLib: 'comm',
                          pageJsonId: '0521965',
                          compName: 'Table',
                          id: '327957',
                          loading: true,
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetLoading140.params =
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
                      eventDatasetLoading140,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'setLoading',
                      {
                        id: 'setLoading',
                        name: 'setLoading',
                        type: 'setLoading',
                        platform: 'pc',
                      },
                    );
                    const eventDatacustomActionCode438: any = [
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
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode438.params =
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
                      eventDatacustomActionCode438,
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
                  onCheckUpload={() => {
                    const eventDatagetSelectedData137: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 167282045114744320,
                        options: {
                          compId: 'Select_166518',
                          compLib: 'comm',
                          pageJsonId: '0521965',
                          compName: 'Select',
                          id: '6790626',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'return',
                            dataId: 168662238584408830,
                            options: {
                              compId: 'return',
                              compName: 'system',
                              id: '583295',
                              pageJsonId: '0521965',
                              returnType: 'success',
                              returnValue: '1',
                            },
                            line_number: 2,
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 167349109195087360,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '88392',
                              pageJsonId: '0521965',
                              type: 'error',
                              value: '请选择附件类型！',
                            },
                            line_number: 3,
                          },
                          {
                            type: 'return',
                            dataId: 167282045906701950,
                            options: {
                              compId: 'return',
                              compName: 'system',
                              id: '344968',
                              pageJsonId: '0521965',
                              returnType: 'failure',
                              returnValue: '0',
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData137.params = [] || [];
                    CMDGenerator(
                      eventDatagetSelectedData137,
                      {},
                      'getSelectedData',
                      {
                        id: 'getSelectedData',
                        name: 'getSelectedData',
                        type: 'getSelectedData',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['StdUpload_2448245'] = r)}
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  content={'最大上传100M'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_4571265',
                    uid: 'Text_4571265',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: 12,
                    lineHeight: '24px',
                    color: 'rgba(251, 18, 5, 1)',
                  }}
                  ref={(r: any) => (refs['Text_4571265'] = r)}
                  {...injectData}
                />
              </View>
              <Text
                name={'文本'}
                content={'请上传立项依据\n若为已审批文件，请上传附件'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_336212',
                  uid: 'Text_336212',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  fontSize: 12,
                  lineHeight: '24px',
                  color: 'rgba(251, 18, 5, 1)',
                  margin: '0px 0px 0px 6px',
                }}
                ref={(r: any) => (refs['Text_336212'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_11053',
                uid: 'View_11053',
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
                  formItemIndex: 3,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                textAlign: 'right',
              }}
              ref={(r: any) => (refs['View_11053'] = r)}
              {...injectData}
            />
          </Form>
          <Table
            name={'客户活动清单表格'}
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
                title: '附件名称',
                key: 'fileName',
                dataIndex: 'fileName',
                className: '',
                id: '883964',
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
                id: '160235',
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
                id: '255388',
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
                id: '068395',
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
            formItemIndex={0}
            labelCol={8}
            wrapperCol={16}
            dataSource={data?.customerFileList}
            rowKey={'fileCode'}
            rowActions={[
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '648461',
                rule: "state.scene === 'V'",
                checked: true,
              },
            ]}
            extend={[
              {
                id: '385847',
                title: '下载',
                iconPos: 'left',
                icon: {
                  type: 'download',
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                },
                checked: true,
              },
              {
                id: '686213',
                title: '预览',
                iconPos: 'left',
                icon: {
                  type: 'eye',
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                },
                rule: '!(data.pageData.supportedSuffix.test(row.fileName))',
                checked: true,
              },
            ]}
            dataSourceFromDataSourceConfig={'data.customerFileList'}
            $$componentItem={{
              id: 'Table_6106139',
              uid: 'Table_6106139',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatasetLoading141: any = [
                {
                  type: 'setLoading',
                  dataId: 170381572472354180,
                  options: {
                    compId: 'Table_6106139',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '11576',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading141.params =
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
                eventDatasetLoading141,
                { rowId, row, index },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatacustomActionCode439: any = [
                {
                  type: 'customActionCode',
                  dataId: 167153035178204580,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '368337',
                    pageJsonId: '0521965',
                    code: 'function main(data,state,success,fail){var customerFileList=data.customerFileList;var filterdFileList=customerFileList.filter(function(item){return item.fileCode!=rowId});console.log("rowId",rowId);console.log("\\u8FC7\\u6EE4\\u540E\\u7684\\u6587\\u4EF6\\u8282\\u70B9\\uFF1A",filterdFileList);success(filterdFileList)};',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 167153038462980130,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '756846',
                        pageJsonId: '0521965',
                        dataSourceId: 170358356580483100,
                        dataSourceName: 'customerFileList',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '427524',
                            code: 'fileName',
                            name: '附件名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '395642',
                            code: 'filePath',
                            name: '附件文件路径',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '9224574',
                            code: 'fileServerType',
                            name: '附件文件服务器类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '360744',
                            code: 'fileSubType',
                            name: '属性',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '671702',
                            code: 'fileUrl',
                            name: '附件url地址',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '562669',
                            code: 'tacheCode',
                            name: '环节编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '794167',
                            code: 'fileCode',
                            name: '文件编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '169508',
                            code: 'createTime',
                            name: '创建时间',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '393088',
                            code: 'createStaff',
                            name: '创建人',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '7990377',
                            code: 'fileTypeName',
                            name: '附件类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '062419',
                            code: 'fileType',
                            name: '附件分类-大类',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                        ],
                        operateType: 3,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                        newData: '$data_368337$',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 170381531455227520,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '79855',
                            pageJsonId: '537892',
                            customFuncName: 'customNodeFileUpload',
                            customFuncParams: 'object',
                            paramsObj: {
                              type: '0',
                              fileList: '$data.customerFileList$',
                            },
                            paramsObjKeyValueMap: {
                              type: '0',
                              fileList: '$data.customerFileList$',
                            },
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'setLoading',
                              dataId: 170381573358777920,
                              options: {
                                compId: 'Table_6106139',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Table',
                                id: '06529',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 170381573560921380,
                              options: {
                                compId: 'Table_6106139',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Table',
                                id: '0453803',
                                loading: false,
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 1703815746616302,
                          options: {
                            compId: 'Table_6106139',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '130739',
                            loading: false,
                          },
                          line_number: 7,
                        },
                      ],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode439.params =
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
                eventDatacustomActionCode439,
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
              const eventDatadownloadByFileId25: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 167153043640615460,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '250574',
                    pageJsonId: '0521965',
                    data: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatadownloadByFileId25.params =
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
                eventDatadownloadByFileId25,
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
            onClickBtn2={(rowId: any, row: any, index: any) => {
              const eventDatapreviewFile17: any = [
                {
                  type: 'previewFile',
                  dataId: 169501659899501440,
                  options: {
                    compId: 'previewFile',
                    compName: 'page',
                    id: '9678283',
                    pageJsonId: '0521965',
                    fileId: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatapreviewFile17.params =
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
                eventDatapreviewFile17,
                { rowId, row, index },
                'previewFile',
                {
                  id: 'previewFile',
                  name: 'previewFile',
                  type: 'previewFile',
                  platform: 'pc',
                },
              ); // console 169881822252756930
              console.log(row);
              // console 170010354733287400
              console.log(data?.pageParam);
            }}
            ref={(r: any) => (refs['Table_6106139'] = r)}
            {...injectData}
          />
        </View>
        <View
          name={'布局容器'}
          className={'fixed-form-item-label-width-120'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_2528996',
            uid: 'View_2528996',
            type: 'View',
            ...componentItem,
          }}
          disabled={
            `${functorsMap?.IF(state?.tacheCode == 'APPLY_FINISH', 1, 2)}` ===
            '3'
          }
          visible={
            `${functorsMap?.IF(state?.tacheCode == 'APPLY_FINISH', 1, 2)}` !==
            '2'
          }
          readOnly={
            `${functorsMap?.IF(state?.tacheCode == 'APPLY_FINISH', 1, 2)}` ===
            '4'
          }
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            margin: '0px 0px 24px 0px',
          }}
          ref={(r: any) => (refs['View_2528996'] = r)}
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
            className={'fixed-form-item-label-width-120'}
            $$componentItem={{
              id: 'Form_053276',
              uid: 'Form_053276',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '8px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_053276'] = r)}
            {...injectData}
          >
            <Input
              name={'结算金额'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'settlementAmount'}
              value={data?.factorForm?.settlementAmount}
              regexp={[
                {
                  id: '18434',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多3位小数的数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,3})?$/',
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
                id: 'Input_6196355',
                uid: 'Input_6196355',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatasetDataSource84: any = [
                  {
                    type: 'setDataSource',
                    dataId: 170435717769374180,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '397872',
                      pageJsonId: '537892',
                      dataSourceId: 167051116912078750,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '371174',
                          code: 'reason',
                          name: '申请原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['reason'],
                          _idpath: ['371174'],
                        },
                        {
                          attrId: '351233',
                          code: 'serviceItem',
                          name: '服务项目',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceItem'],
                          _idpath: ['351233'],
                        },
                        {
                          attrId: '2220604',
                          code: 'serviceDate',
                          name: '服务时间',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceDate'],
                          _idpath: ['2220604'],
                        },
                        {
                          attrId: '8216438',
                          code: 'servicePeopleNum',
                          name: '服务人数',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['servicePeopleNum'],
                          _idpath: ['8216438'],
                        },
                        {
                          attrId: '8152763',
                          code: 'serviceResourceSmallCake',
                          name: '服务资源-小糕点（100元）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceResourceSmallCake'],
                          _idpath: ['8152763'],
                        },
                        {
                          attrId: '4370244',
                          code: 'serviceResourceFlower',
                          name: '服务资源-鲜花（200元）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceResourceFlower'],
                          _idpath: ['4370244'],
                        },
                        {
                          attrId: '436792',
                          code: 'serviceResourceCake',
                          name: '服务资源-蛋糕（200元）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceResourceCake'],
                          _idpath: ['436792'],
                        },
                        {
                          attrId: '25805049',
                          code: 'serviceResourceVoucher',
                          name: '服务资源-咪咕礼卷（100元）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceResourceVoucher'],
                          _idpath: ['25805049'],
                        },
                        {
                          attrId: '382156',
                          code: 'serviceResourceOther',
                          name: '服务资源-其他\t',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceResourceOther'],
                          _idpath: ['382156'],
                        },
                        {
                          attrId: '79368',
                          code: 'serviceSummary',
                          name: '服务概述',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceSummary'],
                          _idpath: ['79368'],
                        },
                        {
                          attrId: '466739',
                          code: 'budget',
                          name: '预算金额（元）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['budget'],
                          _idpath: ['466739'],
                        },
                        {
                          attrId: '06957',
                          code: 'customerName',
                          name: '客户姓名',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['customerName'],
                          _idpath: ['06957'],
                        },
                        {
                          attrId: '0436343',
                          code: 'msisdn',
                          name: '手机号码',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['msisdn'],
                          _idpath: ['0436343'],
                        },
                        {
                          attrId: '540612',
                          code: 'groupName',
                          name: '集团名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['groupName'],
                          _idpath: ['540612'],
                        },
                        {
                          attrId: '9187672',
                          code: 'groupId',
                          name: '集团编码',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['groupId'],
                          _idpath: ['9187672'],
                        },
                        {
                          attrId: '052291',
                          code: 'approvedFiles',
                          name: '已审批文件',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['approvedFiles'],
                          _idpath: ['052291'],
                        },
                        {
                          attrId: '1742476',
                          code: 'approvedFileName',
                          name: '文件名',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['approvedFileName'],
                          _idpath: ['1742476'],
                        },
                        {
                          attrId: '04152952',
                          code: 'approvedFileCode',
                          name: '文件号',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['approvedFileCode'],
                          _idpath: ['04152952'],
                        },
                        {
                          attrId: '814475',
                          code: 'isSmallCake',
                          name: '是否选择小糕点',
                          type: 'boolean',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['isSmallCake'],
                          _idpath: ['814475'],
                        },
                        {
                          attrId: '194965',
                          code: 'isFlower',
                          name: '是否选择鲜花',
                          type: 'boolean',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['isFlower'],
                          _idpath: ['194965'],
                        },
                        {
                          attrId: '890983',
                          code: 'isCake',
                          name: '是否选择蛋糕',
                          type: 'boolean',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['isCake'],
                          _idpath: ['890983'],
                        },
                        {
                          attrId: '727604',
                          code: 'isVoucher',
                          name: '是否选择咪咕礼券',
                          type: 'boolean',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['isVoucher'],
                          _idpath: ['727604'],
                        },
                        {
                          attrId: '059193',
                          code: 'isOther',
                          name: '是否选择其他',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['isOther'],
                          _idpath: ['059193'],
                        },
                        {
                          attrId: '871579',
                          code: 'settlementAmount',
                          name: '结算金额',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['settlementAmount'],
                          _idpath: ['871579'],
                          value: {
                            type: ['context', '$e.target.value$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '844773',
                          code: 'serviceResource',
                          name: '服务资源（审批内容使用）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['serviceResource'],
                          _idpath: ['844773'],
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
                        dataId: 170435728618389100,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '774856',
                          pageJsonId: '537892',
                          actionTitle: '',
                          code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;var serviceResource=[];for(var key in obj){if(["isSmallCake","isFlower","isCake","isVoucher","isOther","serviceResource"].includes(key)){continue}var val=obj[key];if(key=="serviceResourceSmallCake"&&!!val){serviceResource.push("\\u5C0F\\u7CD5\\u70B9(100\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceFlower"&&!!val){serviceResource.push("\\u9C9C\\u82B1(200\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceCake"&&!!val){serviceResource.push("\\u86CB\\u7CD5(200\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceVoucher"&&!!val){serviceResource.push("\\u54AA\\u5495\\u793C\\u5238(100\\u5143):"+val+"\\u4EFD")}else if(key=="serviceResourceOther"&&!!val){serviceResource.push("\\u5176\\u4ED6:"+val+"\\u5143")}attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}attrList.push({"attrCode":"serviceResource","attrName":"","attrValue":serviceResource.join("\\u3001")});data.sceneSubmit.attrList=attrList;console.log("data.sceneSubmit.attrList",data.sceneSubmit.attrList);success(attrList)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 170435733884624400,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '028811',
                              pageJsonId: '537892',
                              customFuncName: 'updateData',
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
                eventDatasetDataSource84.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatasetDataSource84, { e }, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_6196355'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_113487',
                uid: 'View_113487',
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
              ref={(r: any) => (refs['View_113487'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_27774205',
                uid: 'View_27774205',
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
              ref={(r: any) => (refs['View_27774205'] = r)}
              {...injectData}
            />
            <Select
              name={'附件'}
              size={'default'}
              selfSpan={8}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'accessory'}
              formItemIndex={3}
              $$componentItem={{
                id: 'Select_764216',
                uid: 'Select_764216',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_764216'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_1502',
                uid: 'View_1502',
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
                  formItemIndex: 4,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
              }}
              ref={(r: any) => (refs['View_1502'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                formItemIndex={2}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_069425',
                  uid: 'View_069425',
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
                  width: 'fit-content',
                }}
                ref={(r: any) => (refs['View_069425'] = r)}
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
                  numberLimit={50}
                  singleFileMaxSize={99}
                  uploadText={'文件上传'}
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
                  tipIcon={{
                    type: 'question-circle',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  tipContent={'最大上次大小'}
                  icon={{
                    type: undefined,
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'StdUpload_233225',
                    uid: 'StdUpload_233225',
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
                    // console 168422735688877800
                    console.log(
                      file,
                      file?.response?.resultMsg,
                      '文件上传打印',
                    );
                    const eventDatasetLoading144: any = [
                      {
                        type: 'setLoading',
                        dataId: 169501717461630720,
                        options: {
                          compId: 'Table_027569',
                          compLib: 'comm',
                          pageJsonId: '0521965',
                          compName: 'Table',
                          id: '275225',
                          loading: false,
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetLoading144.params =
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
                      eventDatasetLoading144,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'setLoading',
                      {
                        id: 'setLoading',
                        name: 'setLoading',
                        type: 'setLoading',
                        platform: 'pc',
                      },
                    );
                    const eventDataifelse398: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '81120545',
                            options: {
                              context: '$file.response.resultCode$',
                              operate: '==',
                              useManual: true,
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168422623246716860,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168422635973024060,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168422638076056160,
                                children: [],
                                todoOptions: ['msgType', 'value', 'duration'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '431444',
                                  pageJsonId: '0521965',
                                  type: 'error',
                                  value: '$file?.response?.resultMsg$',
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
                            desc: '失败',
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 168422638076056160,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '431444',
                                  pageJsonId: '0521965',
                                  type: 'error',
                                  value: '$file?.response?.resultMsg$',
                                },
                                line_number: 8,
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '81120545',
                                options: {
                                  context:
                                    '$file.response.resultObject.fileId$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 16842264781748392,
                            elseIfs: [],
                            line_number: 4,
                            callback1: [
                              {
                                type: 'getSelectedData',
                                dataId: 168422647817427550,
                                options: {
                                  compId: 'Select_764216',
                                  compLib: 'comm',
                                  pageJsonId: '0521965',
                                  compName: 'Select',
                                  id: '128722',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 170365883260874900,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '0979646',
                                      pageJsonId: '537892',
                                      dataSourceId: 170358376585197440,
                                      dataSourceName: 'settlementFileList',
                                      dataSourceRelType: 'custom',
                                      dataSourceSetValue: [
                                        {
                                          attrId: '898149',
                                          code: 'fileName',
                                          name: '附件名称',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: ['context', '$file?.name$'],
                                            code: '',
                                          },
                                          _codePath: ['fileName'],
                                          _idpath: ['898149'],
                                        },
                                        {
                                          attrId: '0155867',
                                          code: 'filePath',
                                          name: '附件文件路径',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['filePath'],
                                          _idpath: ['0155867'],
                                        },
                                        {
                                          attrId: '914586',
                                          code: 'fileServerType',
                                          name: '附件文件服务器类型',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['fileServerType'],
                                          _idpath: ['914586'],
                                        },
                                        {
                                          attrId: '876202',
                                          code: 'fileSubType',
                                          name: '属性',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['fileSubType'],
                                          _idpath: ['876202'],
                                        },
                                        {
                                          attrId: '095823',
                                          code: 'fileUrl',
                                          name: '附件url地址',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: ['customize'],
                                            code: '$file?.response?.resultObject?.filePathInServer$',
                                          },
                                          _codePath: ['fileUrl'],
                                          _idpath: ['095823'],
                                        },
                                        {
                                          attrId: '3863655',
                                          code: 'tacheCode',
                                          name: '环节编码',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: ['customize'],
                                            code: '$state.tacheCode$',
                                          },
                                          _codePath: ['tacheCode'],
                                          _idpath: ['3863655'],
                                        },
                                        {
                                          attrId: '159894',
                                          code: 'fileCode',
                                          name: '文件编码',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: [
                                              'context',
                                              '$file?.response?.resultObject?.fileId$',
                                            ],
                                            code: '',
                                          },
                                          _codePath: ['fileCode'],
                                          _idpath: ['159894'],
                                        },
                                        {
                                          attrId: '899143',
                                          code: 'createTime',
                                          name: '创建时间',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: ['customize'],
                                            code: '$file?.response?.resultObject?.statusDate$',
                                          },
                                          _codePath: ['createTime'],
                                          _idpath: ['899143'],
                                        },
                                        {
                                          attrId: '526118',
                                          code: 'createStaff',
                                          name: '创建人',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: [
                                              'datasource',
                                              'pageData',
                                              'data',
                                            ],
                                            code: 'createStaff',
                                          },
                                          _codePath: ['createStaff'],
                                          _idpath: ['526118'],
                                        },
                                        {
                                          attrId: '389996',
                                          code: 'fileTypeName',
                                          name: '附件类型',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: [
                                              'context',
                                              '$selectedData_128722[0]$',
                                            ],
                                            code: 'label',
                                          },
                                          _codePath: ['fileTypeName'],
                                          _idpath: ['389996'],
                                        },
                                        {
                                          attrId: '949532',
                                          code: 'fileType',
                                          name: '附件分类-大类',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          value: {
                                            type: [
                                              'context',
                                              '$selectedData_128722[0]$',
                                            ],
                                            code: 'value',
                                          },
                                          _codePath: ['fileType'],
                                          _idpath: ['949532'],
                                        },
                                      ],
                                      operateType: 0,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                      targetDataSourcePaths: [],
                                    },
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 170365883260807360,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '978015',
                                          pageJsonId: '537892',
                                          customFuncName:
                                            'customNodeFileUpload',
                                          customFuncParams: 'object',
                                          paramsObj: {
                                            fileList:
                                              '$data.settlementFileList$',
                                            type: '1',
                                          },
                                          paramsObjKeyValueMap: {
                                            fileList:
                                              '$data.settlementFileList$',
                                            type: '1',
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
                        ],
                      },
                    ];
                    eventDataifelse398.params =
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
                      eventDataifelse398,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'ifelse',
                      {
                        id: 'ifelse',
                        name: 'ifelse',
                        type: 'ifelse',
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
                    const eventDatasetLoading145: any = [
                      {
                        type: 'setLoading',
                        dataId: 169501716221466140,
                        options: {
                          compId: 'Table_027569',
                          compLib: 'comm',
                          pageJsonId: '0521965',
                          compName: 'Table',
                          id: '327957',
                          loading: true,
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetLoading145.params =
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
                      eventDatasetLoading145,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'setLoading',
                      {
                        id: 'setLoading',
                        name: 'setLoading',
                        type: 'setLoading',
                        platform: 'pc',
                      },
                    );
                    const eventDatacustomActionCode441: any = [
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
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode441.params =
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
                      eventDatacustomActionCode441,
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
                  onCheckUpload={() => {
                    const eventDatagetSelectedData139: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 167282045114744320,
                        options: {
                          compId: 'Select_764216',
                          compLib: 'comm',
                          pageJsonId: '0521965',
                          compName: 'Select',
                          id: '6790626',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'return',
                            dataId: 168662238584408830,
                            options: {
                              compId: 'return',
                              compName: 'system',
                              id: '583295',
                              pageJsonId: '0521965',
                              returnType: 'success',
                              returnValue: '1',
                            },
                            line_number: 2,
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 167349109195087360,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '88392',
                              pageJsonId: '0521965',
                              type: 'error',
                              value: '请选择附件类型！',
                            },
                            line_number: 3,
                          },
                          {
                            type: 'return',
                            dataId: 167282045906701950,
                            options: {
                              compId: 'return',
                              compName: 'system',
                              id: '344968',
                              pageJsonId: '0521965',
                              returnType: 'failure',
                              returnValue: '0',
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData139.params = [] || [];
                    CMDGenerator(
                      eventDatagetSelectedData139,
                      {},
                      'getSelectedData',
                      {
                        id: 'getSelectedData',
                        name: 'getSelectedData',
                        type: 'getSelectedData',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['StdUpload_233225'] = r)}
                  {...injectData}
                />
                <Text
                  name={'文本'}
                  content={'最大上传100M'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_103394',
                    uid: 'Text_103394',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: 12,
                    lineHeight: '24px',
                    color: 'rgba(251, 18, 5, 1)',
                  }}
                  ref={(r: any) => (refs['Text_103394'] = r)}
                  {...injectData}
                />
              </View>
              <Text
                name={'文本'}
                content={
                  '请上传双签材料（需备注服务时间、集团名称、服务对象、服务资源）'
                }
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_58318',
                  uid: 'Text_58318',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  fontSize: 12,
                  lineHeight: '24px',
                  color: 'rgba(251, 18, 5, 1)',
                  margin: '0px 0px 0px 6px',
                }}
                ref={(r: any) => (refs['Text_58318'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_696523',
                uid: 'View_696523',
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
                  formItemIndex: 6,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                textAlign: 'right',
              }}
              ref={(r: any) => (refs['View_696523'] = r)}
              {...injectData}
            />
          </Form>
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
                title: '附件名称',
                key: 'fileName',
                dataIndex: 'fileName',
                className: '',
                id: '883964',
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
                id: '160235',
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
                id: '255388',
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
                id: '068395',
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
            formItemIndex={0}
            labelCol={8}
            wrapperCol={16}
            dataSource={data?.settlementFileList}
            rowKey={'fileCode'}
            rowActions={[
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '648461',
                rule: "state.scene === 'V' && data.pageData.isShowDel == 0",
                checked: true,
              },
            ]}
            extend={[
              {
                id: '385847',
                title: '下载',
                iconPos: 'left',
                icon: {
                  type: 'download',
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                },
                checked: true,
              },
              {
                id: '686213',
                title: '预览',
                iconPos: 'left',
                icon: {
                  type: 'eye',
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                },
                rule: '!(data.pageData.supportedSuffix.test(row.fileName))',
                checked: true,
              },
            ]}
            dataSourceFromDataSourceConfig={'data.settlementFileList'}
            $$componentItem={{
              id: 'Table_027569',
              uid: 'Table_027569',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatasetLoading146: any = [
                {
                  type: 'setLoading',
                  dataId: 170436129801762500,
                  options: {
                    compId: 'Table_027569',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '449636',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading146.params =
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
                eventDatasetLoading146,
                { rowId, row, index },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatacustomActionCode442: any = [
                {
                  type: 'customActionCode',
                  dataId: 170381535739148700,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '507918',
                    pageJsonId: '0521965',
                    code: 'function main(data,state,success,fail){var settlementFileList=data.settlementFileList;var filterdFileList=settlementFileList.filter(function(item){return item.fileCode!=rowId});success(filterdFileList)};',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 170381535739153470,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '216344',
                        pageJsonId: '0521965',
                        dataSourceId: 170358376585197440,
                        dataSourceName: 'settlementFileList',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '898149',
                            code: 'fileName',
                            name: '附件名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '0155867',
                            code: 'filePath',
                            name: '附件文件路径',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '914586',
                            code: 'fileServerType',
                            name: '附件文件服务器类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '876202',
                            code: 'fileSubType',
                            name: '属性',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '095823',
                            code: 'fileUrl',
                            name: '附件url地址',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '3863655',
                            code: 'tacheCode',
                            name: '环节编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '159894',
                            code: 'fileCode',
                            name: '文件编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '899143',
                            code: 'createTime',
                            name: '创建时间',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '526118',
                            code: 'createStaff',
                            name: '创建人',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '389996',
                            code: 'fileTypeName',
                            name: '附件类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                          {
                            attrId: '949532',
                            code: 'fileType',
                            name: '附件分类-大类',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                          },
                        ],
                        operateType: 3,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                        newData: '$data_507918$',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 170381535739103700,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '56352',
                            pageJsonId: '537892',
                            customFuncName: 'customNodeFileUpload',
                            customFuncParams: 'object',
                            paramsObj: { type: '1', fileList: '$data_507918$' },
                            paramsObjKeyValueMap: {
                              type: '1',
                              fileList: '$data_507918$',
                            },
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'setLoading',
                              dataId: 170436131369833630,
                              options: {
                                compId: 'Table_027569',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Table',
                                id: '658081',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 170436131730444350,
                              options: {
                                compId: 'Table_027569',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Table',
                                id: '2912605',
                                loading: false,
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [
                    {
                      type: 'setLoading',
                      dataId: 170436130799145630,
                      options: {
                        compId: 'Table_027569',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '8294492',
                        loading: false,
                      },
                      line_number: 7,
                    },
                  ],
                },
              ];
              eventDatacustomActionCode442.params =
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
                eventDatacustomActionCode442,
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
              const eventDatadownloadByFileId26: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 167153043640615460,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '250574',
                    pageJsonId: '0521965',
                    data: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatadownloadByFileId26.params =
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
                eventDatadownloadByFileId26,
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
            onClickBtn2={(rowId: any, row: any, index: any) => {
              const eventDatapreviewFile18: any = [
                {
                  type: 'previewFile',
                  dataId: 169501659899501440,
                  options: {
                    compId: 'previewFile',
                    compName: 'page',
                    id: '9678283',
                    pageJsonId: '0521965',
                    fileId: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatapreviewFile18.params =
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
                eventDatapreviewFile18,
                { rowId, row, index },
                'previewFile',
                {
                  id: 'previewFile',
                  name: 'previewFile',
                  type: 'previewFile',
                  platform: 'pc',
                },
              ); // console 169881822252756930
              console.log(row);
              // console 170010354733287400
              console.log(data?.pageParam);
            }}
            ref={(r: any) => (refs['Table_027569'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0001_0003copy$$Page, {
  pageId: '1067021977694228480',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
