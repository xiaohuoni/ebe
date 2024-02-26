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
  TextArea,
  Button,
  Row,
  Table,
  Select,
  StdUpload,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '909992776404652032';
const ClsCp_0016_0001$$Page: React.FC<PageProps> = ({
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
  const updataSubmitDataProdList = (options_379575: any) => {
    const eventDatagetTableData4: any = [
      {
        type: 'getTableData',
        dataId: 166859684429948860,
        shielding: true,
        options: {
          compId: 'Table_093003_975455',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Table',
          id: '282046',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 166859685337740500,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '107915',
              pageJsonId: '537892',
              value: ['更新表格事件-表格数据', '$tableData_282046$'],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 166859686826823700,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '370086',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){console.log("\\u66F4\\u65B0\\u4EA7\\u54C1\\u63D0\\u4EA4\\u6570\\u636E-\\u4E8B\\u4EF6\\u5165\\u53C2",options_379575);var instList=options_379575.map(function(item){var _arr=[];for(var key in item){if(item.hasOwnProperty(key))_arr.push({"attrCode":key,"attrName":"","attrValue":item[key]})}return{"instCode":item.__RowId__,"instAttrList":_arr}});console.log("\\u66F4\\u65B0\\u540E\\u4EA7\\u54C1\\u5217\\u8868\\u63D0\\u4EA4\\u6570\\u636E",instList);success(instList)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166859686826859170,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '099106',
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
                      value: { type: ['context', '$data_370086$'], code: '' },
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
                    dataId: 166859686826895100,
                    shielding: true,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '760403',
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
                  {
                    type: 'console',
                    dataId: 166859686826820030,
                    shielding: true,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '0732933',
                      pageJsonId: '537892',
                      value: ['产品提交数据', '$data.sceneSubmit$'],
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
      },
    ];
    eventDatagetTableData4.params =
      [
        {
          title: '事件入参',
          name: 'options_379575',
          value: '$options_379575$',
        },
      ] || [];
    CMDGenerator(eventDatagetTableData4, { options_379575 }, 'getTableData', {
      id: 'getTableData',
      name: 'getTableData',
      type: 'getTableData',
      platform: 'undefined',
    });
    const eventDatacustomActionCode188: any = [
      {
        type: 'customActionCode',
        dataId: 166859813995785100,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '438453',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("\\u66F4\\u65B0\\u4EA7\\u54C1\\u63D0\\u4EA4\\u6570\\u636E-\\u4E8B\\u4EF6\\u5165\\u53C2",data.prodList);var instList=data.prodList.map(function(item){var _arr=[];for(var name in item){if(item.hasOwnProperty(name))_arr.push({"attrCode":name,"attrName":"","attrValue":item[name]})}return{"instCode":item.key,"instAttrList":_arr}});console.log("\\u66F4\\u65B0\\u540E\\u4EA7\\u54C1\\u5217\\u8868\\u63D0\\u4EA4\\u6570\\u636E",instList);success(instList)};',
        },
        line_number: 7,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166859813995742340,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '580273',
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
                  value: { type: ['context', '$data_438453$'], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 8,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166859813995726200,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '014082',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                },
                line_number: 9,
                callback1: [],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 166859813995737660,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '305627',
                  pageJsonId: '537892',
                  value: ['产品提交数据', '$data.sceneSubmit$'],
                },
                line_number: 10,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode188.params =
      [
        {
          title: '事件入参',
          name: 'options_379575',
          value: '$options_379575$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode188,
      { options_379575 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const updataSubmitDataFormData = (options_543189: any) => {
    const eventDatagetCurrentFormValues8: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 166859611130438080,
        options: {
          compId: 'Form_190947_1873837',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '692279',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166859611809543500,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6066416',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){console.log("\\u63D0\\u4EA4\\u8868\\u5355\\u6570\\u636E",Form_190947_1873837);var attrList=[];var obj=Form_190947_1873837;for(var key in obj){if(obj.hasOwnProperty(key)){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}}success(attrList)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166859648532066530,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '3757663',
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
                      value: { type: ['context', '$data_6066416$'], code: '' },
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
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'callParentCustomFunc',
                    dataId: 166859650841718660,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '185869',
                      pageJsonId: '537892',
                      pathname: '/auditOrderPrepare',
                      pageId: '884045146848604160',
                      modalPath: '/auditOrderPrepare',
                      customFuncName: 'getFactor',
                      customFuncParams: '$data.sceneSubmit$',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'console',
                    dataId: 166859653177717220,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '243254',
                      pageJsonId: '537892',
                      value: ['提交数据', '$data.sceneSubmit$'],
                    },
                    line_number: 5,
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
    eventDatagetCurrentFormValues8.params =
      [
        {
          title: '事件入参',
          name: 'options_543189',
          value: '$options_543189$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues8,
      { options_543189 },
      'getCurrentFormValues',
      {
        id: 'getCurrentFormValues',
        name: 'getCurrentFormValues',
        type: 'getCurrentFormValues',
        platform: 'undefined',
      },
    );
  };
  const fileUpload = (options_3690043: any) => {
    const eventDatacustomActionCode189: any = [
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
            type: 'callParentCustomFunc',
            dataId: 167288482427221730,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '2362084',
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
    eventDatacustomActionCode189.params =
      [
        {
          title: '事件入参',
          name: 'options_3690043',
          value: '$options_3690043$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode189,
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
  const setFormData = (options_791765: any) => {
    const eventDatacustomActionCode190: any = [
      {
        type: 'customActionCode',
        dataId: 167633987520414940,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '881525',
          pageJsonId: '376566',
          code: 'function main(data,state,success,fail){var _data$prodList;var accAdd=function accAdd(num1,num2){var r1,r2,m,c;try{r1=num1.toString().split(".")[1].length}catch(e){r1=0}try{r2=num2.toString().split(".")[1].length}catch(e){r2=0}c=Math.abs(r1-r2);m=Math.pow(10,Math.max(r1,r2));if(c>0){var cm=Math.pow(10,c);if(r1>r2){num1=Number(num1.toString().replace(".",""));num2=Number(num2.toString().replace(".",""))*cm}else{num1=Number(num1.toString().replace(".",""))*cm;num2=Number(num2.toString().replace(".",""))}}else{num1=Number(num1.toString().replace(".",""));num2=Number(num2.toString().replace(".",""))}return(num1+num2)/m};var agreementTotalAmount=0;var secondDiscountAmount=0;var settlementAmount=0;(_data$prodList=data.prodList)===null||_data$prodList===void 0?void 0:_data$prodList.forEach(function(item){agreementTotalAmount=accAdd(agreementTotalAmount,parseFloat(item.agreementTotalAmount));secondDiscountAmount=accAdd(secondDiscountAmount,parseFloat(item.secondDiscountAmount));settlementAmount=accAdd(settlementAmount,parseFloat(item.settlementAmount));console.log("item.agreementTotalAmount",parseFloat(item.agreementTotalAmount));console.log("item.secondDiscountAmount",parseFloat(item.secondDiscountAmount));console.log("item.settlementAmount",parseFloat(item.settlementAmount))});console.log("===================");console.log("agreementTotalAmount",agreementTotalAmount);console.log("secondDiscountAmount",secondDiscountAmount);console.log("settlementAmount",settlementAmount);success({agreementTotalAmount:agreementTotalAmount,secondDiscountAmount:secondDiscountAmount,settlementAmount:settlementAmount})};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 167633987520468320,
            options: {
              compId: [
                'Input_379441_56819334',
                'Input_0360323_306855',
                'Input_661573_036761',
              ],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '509662',
              valueList: {
                Input_379441_56819334: '$data_881525.agreementTotalAmount$',
                Input_0360323_306855: '$data_881525.secondDiscountAmount$',
                Input_661573_036761: '$data_881525.settlementAmount$',
              },
              compid: [
                'Input_379441_56819334',
                'Input_0360323_306855',
                'Input_661573_036761',
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 167633987520453200,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '988201',
                  pageJsonId: '537892',
                  customFuncName: 'updataSubmitDataFormData',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
            ],
          },
          {
            type: 'callSelfFunc',
            dataId: 167633987520415800,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '62107874',
              pageJsonId: '537892',
              customFuncName: 'updataSubmitDataProdList',
            },
            line_number: 4,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode190.params =
      [
        {
          title: '事件入参',
          name: 'options_791765',
          value: '$options_791765$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode190,
      { options_791765 },
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
    updataSubmitDataProdList,
    updataSubmitDataFormData,
    fileUpload,
    setFormData,
  }));

  useEffect(() => {
    const eventDataapiRequest509: any = [
      {
        type: 'apiRequest',
        dataId: 166972712891641950,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '454058',
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
            dataId: 166972713254645200,
            options: {
              compId:
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_5568693',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '6237643',
              data: '$reply_454058?.resultData$',
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
    eventDataapiRequest509.params = [] || [];
    CMDGenerator(eventDataapiRequest509, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest510: any = [
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
            line_number: 4,
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
    eventDataapiRequest510.params = [] || [];
    CMDGenerator(eventDataapiRequest510, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse264: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;var prodList=[];console.log(" state",state);console.log(" state.itemList",state.itemList);item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){if(instList[i].attrCode==="agreementTotalAmount"||instList[i].attrCode==="settlementAmount"||instList[i].attrCode==="secondDiscountAmount"||instList[i].attrCode==="otherCost"){feeObj[instList[i].attrCode]=parseFloat(instList[i].attrValue)}else{feeObj[instList[i].attrCode]=instList[i].attrValue}if(instList[i].attrCode==="marketList"){feeObj[instList[i].attrCode]=JSON.parse(instList[i].attrValue)}}feeObj.key=v.instCode;prodList.push(feeObj)}});console.log("\\u8BE6\\u60C5-prodList",prodList);success(prodList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
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
                  dataSourceId: 166858698843021470,
                  dataSourceName: 'prodList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '15005',
                      code: 'prodId',
                      name: '产品标识',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '9556997',
                      code: 'prodName',
                      name: '产品',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '538373',
                      code: 'agreementTotalAmount',
                      name: '协议总金额（元）',
                      type: 'number',
                      initialData: { type: 'static', value: '0' },
                    },
                    {
                      attrId: '2738356',
                      code: 'secondDiscountAmount',
                      name: '二次优惠（元）',
                      type: 'number',
                      initialData: { type: 'static', value: '0' },
                    },
                    {
                      attrId: '357193',
                      code: 'settlementAmount',
                      name: '结算金额（元）',
                      type: 'number',
                      initialData: { type: 'static', value: '0' },
                    },
                    {
                      attrId: '419172',
                      code: 'otherCost',
                      name: '其它成本（元）',
                      type: 'number',
                      initialData: { type: 'static', value: '0' },
                    },
                    {
                      attrId: '6867386',
                      code: 'estimateOutBillDate',
                      name: '预计出账日期',
                      type: 'date',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '187083',
                      code: 'key',
                      name: '主键',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: false,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'reloadTableData',
                    dataId: 167635716836923200,
                    options: {
                      compId: 'Table_093003_975455',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '752082',
                      data: '$data_9981685$',
                    },
                    line_number: 10,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 166860523577591870,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '1820227',
                  pageJsonId: '537892',
                  value: ['表格详情', '$data_9981685$'],
                },
                line_number: 11,
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
            line_number: 12,
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
                line_number: 13,
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
                line_number: 14,
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
                    line_number: 15,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 166860111116770660,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '94043',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}console.log("\\u8BE6\\u60C5-factorForm",factorForm);success(factorForm)};',
            },
            line_number: 16,
            callback1: [
              {
                type: 'console',
                dataId: 166860119441120900,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '309402',
                  pageJsonId: '537892',
                  value: ['标准化一次性产品表单', '$data_94043$'],
                },
                line_number: 17,
              },
              {
                type: 'setValue',
                dataId: 166860606851595360,
                options: {
                  compId: [
                    'Input_379441_56819334',
                    'Input_0360323_306855',
                    'Input_661573_036761',
                    'TextArea_419676',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '80164',
                  valueList: {
                    Input_379441_56819334:
                      '$data_94043.agreementTotalAmountTotal$',
                    Input_0360323_306855:
                      '$data_94043.secondDiscountAmountTotal$',
                    Input_661573_036761: '$data_94043.settlementAmountTotal$',
                    TextArea_419676: '$data_94043.reason$',
                  },
                  compid: [
                    'Input_379441_56819334',
                    'Input_0360323_306855',
                    'Input_661573_036761',
                    'TextArea_419676',
                  ],
                },
                line_number: 18,
                callback1: [],
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
            line_number: 19,
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
                line_number: 20,
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
                line_number: 21,
              },
              {
                type: 'setVisible',
                dataId: 166858297210874720,
                options: {
                  compId: [
                    'HorizontalView_00895_069307',
                    'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_73676282',
                    'View_37170591_329379',
                  ],
                  compLib: 'custom',
                  pageJsonId: '537892',
                  compName: 'View',
                  id: '229006',
                  visible: '',
                  compid: [
                    'HorizontalView_00895_069307',
                    'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_73676282',
                    'View_37170591_329379',
                  ],
                },
                line_number: 22,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse264.params = [] || [];
    CMDGenerator(eventDataifelse264, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest511: any = [
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
        line_number: 23,
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
            line_number: 24,
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
            line_number: 25,
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
                line_number: 26,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest511.params = [] || [];
    CMDGenerator(eventDataapiRequest511, {}, 'apiRequest', {
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
          dividerText={'标准化产品一次性大额出账'}
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
                  text={'标准化产品一次性大额出账'}
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
            rowSpace={16}
            formCode={'Form_190947'}
            $$componentItem={{
              id: 'Form_190947_1873837',
              uid: 'Form_190947_1873837',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource230: any = [
                {
                  type: 'setDataSource',
                  dataId: 168508462344013570,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '6986674',
                    pageJsonId: '537892',
                    dataSourceId: 168508461583429760,
                    dataSourceName: 'formData',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        attrId: '4205563',
                        code: 'agreementTotalAmountTotal',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static', value: '0' },
                        showInput: true,
                        _codePath: ['agreementTotalAmountTotal'],
                        _idpath: ['4205563'],
                        value: {
                          type: [
                            'form',
                            'Form_190947_1873837',
                            'getFieldsValue',
                          ],
                          code: 'agreementTotalAmountTotal',
                        },
                      },
                      {
                        attrId: '001277',
                        code: 'secondDiscountAmountTotal',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static', value: '0' },
                        showInput: true,
                        _codePath: ['secondDiscountAmountTotal'],
                        _idpath: ['001277'],
                        value: {
                          type: [
                            'form',
                            'Form_190947_1873837',
                            'getFieldsValue',
                          ],
                          code: 'secondDiscountAmountTotal',
                        },
                      },
                      {
                        attrId: '081791',
                        code: 'settlementAmountTotal',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static', value: '0' },
                        showInput: true,
                        _codePath: ['settlementAmountTotal'],
                        _idpath: ['081791'],
                        value: {
                          type: [
                            'form',
                            'Form_190947_1873837',
                            'getFieldsValue',
                          ],
                          code: 'settlementAmountTotal',
                        },
                      },
                      {
                        attrId: '381204',
                        code: 'reason',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['reason'],
                        _idpath: ['381204'],
                        value: {
                          type: [
                            'form',
                            'Form_190947_1873837',
                            'getFieldsValue',
                          ],
                          code: 'reason',
                        },
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
                      dataId: 168508463927188160,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '589497',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.formData;console.log("\\u6807\\u51C6\\u5316-data.formData",data.formData);for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u6807\\u51C6\\u5316-attrList",attrList);success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 168508463927103780,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '1582698',
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
              eventDatasetDataSource230.params =
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
                eventDatasetDataSource230,
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_190947_1873837')}
            {...injectData}
          >
            <Input
              name={'协议总金额合计'}
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
              required={false}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'agreementTotalAmountTotal'}
              defaultValue={'0'}
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
                id: 'Input_379441_56819334',
                uid: 'Input_379441_56819334',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_379441_56819334')}
              {...injectData}
            />
            <Input
              name={'二次优惠合计'}
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
              required={false}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'secondDiscountAmountTotal'}
              defaultValue={'0'}
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
                id: 'Input_0360323_306855',
                uid: 'Input_0360323_306855',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_0360323_306855')}
              {...injectData}
            />
            <Input
              name={'结算合计'}
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
              required={false}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'settlementAmountTotal'}
              defaultValue={'0'}
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
                id: 'Input_661573_036761',
                uid: 'Input_661573_036761',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_661573_036761')}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'8'}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'reason'}
              $$componentItem={{
                id: 'TextArea_419676',
                uid: 'TextArea_419676',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_419676')}
              {...injectData}
            />
          </Form>
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_37170591_329379',
              uid: 'View_37170591_329379',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'block',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              textAlign: 'right',
              margin: '16px 0px 0px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_37170591_329379')}
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
                id: 'Button_438297_834004',
                uid: 'Button_438297_834004',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal248: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 16762752664987864,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '839273',
                      pageJsonId: '537892',
                      modalname: '/biaozhunhuayicixingdaeshenqingtanchuang5063',
                      pageId: '942326976701939712',
                      paramsObj: {
                        prodList: '$data.prodSelectList$',
                        orderNbr: '$state.fileInstNbr$',
                      },
                      paramsObjKeyValueMap: {
                        prodList: '$data.prodSelectList$',
                        orderNbr: '$state.fileInstNbr$',
                      },
                      modalPath: '/biaozhunhuayicixingdaeshenqingtanchuang5063',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167627878421870940,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '7905307',
                          pageJsonId: '376566',
                          code: 'function main(data,state,success,fail){var arr=data.prodList.map(function(item){return item});arr.push(okData_839273);data.prodList.push(okData_839273);success(arr)};',
                          actionTitle: '更新产品列表',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 167627878421834750,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '3815445',
                              pageJsonId: '376566',
                              dataSourceId: 166858698843021470,
                              dataSourceName: 'prodList',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '15005',
                                  code: 'prodId',
                                  name: '产品标识',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '9556997',
                                  code: 'prodName',
                                  name: '产品',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '538373',
                                  code: 'agreementTotalAmount',
                                  name: '协议总金额（元）',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '2738356',
                                  code: 'secondDiscountAmount',
                                  name: '二次优惠（元）',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '357193',
                                  code: 'settlementAmount',
                                  name: '结算金额（元）',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '419172',
                                  code: 'otherCost',
                                  name: '其它成本（元）',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '6867386',
                                  code: 'estimateOutBillDate',
                                  name: '预计出账日期',
                                  type: 'date',
                                  initialData: { type: 'static' },
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '187083',
                                  code: 'key',
                                  name: '主键',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                              ],
                              newData: '$data_7905307$',
                              operateType: 3,
                              onlySetPatch: false,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 167633965954982900,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '317353',
                                  pageJsonId: '537892',
                                  customFuncName: 'setFormData',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                              {
                                type: 'console',
                                dataId: 167635555594893100,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '672638',
                                  pageJsonId: '537892',
                                  value: ['新增后-prodList', '$data.prodList$'],
                                },
                                line_number: 5,
                              },
                              {
                                type: 'reloadTableData',
                                dataId: 167635637998946180,
                                options: {
                                  compId: 'Table_093003_975455',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Table',
                                  id: '539304',
                                  data: '$data_7905307$',
                                },
                                line_number: 6,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                        callback2: [
                          {
                            type: 'console',
                            dataId: 167627878421803520,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '938618',
                              pageJsonId: '537892',
                              value: ['新增产品失败'],
                            },
                            line_number: 7,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal248.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal248,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_438297_834004')}
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
              id: 'Row_851124_503615',
              uid: 'Row_851124_503615',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '8px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Row_851124_503615')}
            {...injectData}
          >
            <Table
              name={'表格'}
              isFlexColumn={false}
              extendNum={2}
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
                  title: '产品',
                  dataIndex: 'prodName',
                  key: 'column1',
                  className: '',
                  id: '816719',
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
                  title: '协议总金额（元）',
                  dataIndex: 'agreementTotalAmount',
                  key: 'column2',
                  className: 'divider',
                  id: '138659',
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
                  title: '二次优惠（元）',
                  dataIndex: 'secondDiscountAmount',
                  key: 'column3',
                  className: 'divider',
                  id: '645687',
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
                  title: '结算金额（元）',
                  dataIndex: 'settlementAmount',
                  key: 'column4',
                  className: 'divider',
                  id: '3840864',
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
                  title: '其它成本（元）',
                  dataIndex: 'otherCost',
                  key: 'column5',
                  className: 'divider',
                  id: '6171544',
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
                  title: '预计出账日期',
                  dataIndex: 'estimateOutBillDate',
                  key: 'column6',
                  className: 'divider',
                  id: '10009',
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
              dataSource={''}
              rowActions={[
                {
                  title: '编辑',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'edit' },
                  type: 'edit',
                  id: '9661952',
                  rule: "state.scene === 'V'",
                  checked: true,
                },
                {
                  title: '删除',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'delete' },
                  type: 'delete',
                  id: '298369',
                  rule: "state.scene === 'V'",
                  checked: true,
                },
              ]}
              extend={[]}
              actionWidth={160}
              rowKey={'key'}
              $$componentItem={{
                id: 'Table_093003_975455',
                uid: 'Table_093003_975455',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '16px 0px 16px 0px' }}
              onRowEdit={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal249: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 167628021087488800,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '609175',
                      pageJsonId: '537892',
                      modalname: '/biaozhunhuayicixingdaeshenqingtanchuang5063',
                      pageId: '942326976701939712',
                      paramsObj: {
                        prodList: '$data.prodSelectList$',
                        rowData: '$row$',
                      },
                      paramsObjKeyValueMap: {
                        prodList: '$data.prodSelectList$',
                        rowData: '$row$',
                      },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167628133079347260,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5395675',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){console.log("\\u4FEE\\u6539\\u884C\\u7D22\\u5F15",index);var arr=data.prodList.map(function(item,_index){if(index===_index){return okData_609175}else{return item}});console.log("\\u4FEE\\u6539\\u540Edata.prodList",arr);success(arr)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 167628137235650500,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '0256365',
                              pageJsonId: '537892',
                              dataSourceId: 166858698843021470,
                              dataSourceName: 'prodList',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '15005',
                                  code: 'prodId',
                                  name: '产品标识',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '9556997',
                                  code: 'prodName',
                                  name: '产品',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '538373',
                                  code: 'agreementTotalAmount',
                                  name: '协议总金额（元）',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                },
                                {
                                  attrId: '2738356',
                                  code: 'secondDiscountAmount',
                                  name: '二次优惠（元）',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                },
                                {
                                  attrId: '357193',
                                  code: 'settlementAmount',
                                  name: '结算金额（元）',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                },
                                {
                                  attrId: '419172',
                                  code: 'otherCost',
                                  name: '其它成本（元）',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                },
                                {
                                  attrId: '6867386',
                                  code: 'estimateOutBillDate',
                                  name: '预计出账日期',
                                  type: 'date',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '187083',
                                  code: 'key',
                                  name: '主键',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                              ],
                              itemIndex: '',
                              operateType: 3,
                              onlySetPatch: false,
                              otherObjectArrayOptions: {},
                              newData: '$data_5395675$',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'reloadTableData',
                                dataId: 167635674932472420,
                                options: {
                                  compId: 'Table_093003_975455',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Table',
                                  id: '856718',
                                  data: '$data_5395675$',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167635675560336670,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '1725666',
                                      pageJsonId: '537892',
                                      customFuncName: 'setFormData',
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
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal249.params =
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
                  eventDatashowCustomModal249,
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
                const eventDatadelTableRow: any = [
                  {
                    type: 'delTableRow',
                    dataId: 167635621972879900,
                    options: {
                      compId: 'Table_093003_975455',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '219766',
                      params: '$rowId$',
                    },
                    line_number: 1,
                  },
                ];
                eventDatadelTableRow.params =
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
                  eventDatadelTableRow,
                  { rowId, row, index },
                  'delTableRow',
                  {
                    id: 'delTableRow',
                    name: 'delTableRow',
                    type: 'delTableRow',
                    platform: 'pc',
                  },
                );
                const eventDatagetTableData7: any = [
                  {
                    type: 'getTableData',
                    dataId: 167635623976767040,
                    options: {
                      compId: 'Table_093003_975455',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '0268944',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 167635623976733600,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '956822',
                          pageJsonId: '537892',
                          value: ['删除后产品数据', '$tableData_0268944$'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'setDataSource',
                        dataId: 167635649375702720,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '468318',
                          pageJsonId: '537892',
                          dataSourceId: 166858698843021470,
                          dataSourceName: 'prodList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '15005',
                              code: 'prodId',
                              name: '产品标识',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '9556997',
                              code: 'prodName',
                              name: '产品',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '538373',
                              code: 'agreementTotalAmount',
                              name: '协议总金额（元）',
                              type: 'number',
                              initialData: { type: 'static', value: '0' },
                            },
                            {
                              attrId: '2738356',
                              code: 'secondDiscountAmount',
                              name: '二次优惠（元）',
                              type: 'number',
                              initialData: { type: 'static', value: '0' },
                            },
                            {
                              attrId: '357193',
                              code: 'settlementAmount',
                              name: '结算金额（元）',
                              type: 'number',
                              initialData: { type: 'static', value: '0' },
                            },
                            {
                              attrId: '419172',
                              code: 'otherCost',
                              name: '其它成本（元）',
                              type: 'number',
                              initialData: { type: 'static', value: '0' },
                            },
                            {
                              attrId: '6867386',
                              code: 'estimateOutBillDate',
                              name: '预计出账日期',
                              type: 'date',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '187083',
                              code: 'key',
                              name: '主键',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          newData: '$tableData_0268944$',
                          operateType: 3,
                          onlySetPatch: false,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'console',
                            dataId: 167635651100355000,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '18639096',
                              pageJsonId: '537892',
                              value: ['删除后产品数据2', '$data.prodList$'],
                            },
                            line_number: 5,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 167635685613062900,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '918382',
                              pageJsonId: '537892',
                              customFuncName: 'setFormData',
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
                ];
                eventDatagetTableData7.params =
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
                  eventDatagetTableData7,
                  { rowId, row, index },
                  'getTableData',
                  {
                    id: 'getTableData',
                    name: 'getTableData',
                    type: 'getTableData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Table_093003_975455')}
              {...injectData}
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
              colSpace={12}
              rowSpace={16}
              formCode={'Form_395851'}
              $$componentItem={{
                id: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_73676282',
                uid: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_73676282',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_73676282',
                )
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
                  id: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_5568693',
                  uid: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_5568693',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_5568693',
                  )
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_016034',
                  uid: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_016034',
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
                    'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_016034',
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_960908',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_960908',
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
                    const eventDatagetSelectedData405: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166858301972544200,
                        options: {
                          compId:
                            'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_5568693',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '373345',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166858303187791580,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '889932',
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
                                    code: '$selectedData_373345[0].value$',
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
                                    code: '$selectedData_373345[0].label$',
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
                                dataId: 166858303187894300,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '501879',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166858303187871400,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '48483',
                                      pageJsonId: '537892',
                                      value: ['$data_501879$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166858303187861540,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '112914',
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
                            dataId: 166987782683534180,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '26363',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData405.params =
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
                      eventDatagetSelectedData405,
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
                    const eventDatacustomActionCode755: any = [
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
                    eventDatacustomActionCode755.params =
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
                      eventDatacustomActionCode755,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_960908',
                    )
                  }
                  {...injectData}
                />
              </View>
            </Form>
          </Row>
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_2824552',
            uid: 'View_4949093_2824552',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_4949093_2824552')}
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
              id: 'Table_5369494_400146',
              uid: 'Table_5369494_400146',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode756: any = [
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
              eventDatacustomActionCode756.params =
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
                eventDatacustomActionCode756,
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
              const eventDatadownloadByFileId93: any = [
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
              eventDatadownloadByFileId93.params =
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
                eventDatadownloadByFileId93,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_5369494_400146')}
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_349769')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0016_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
