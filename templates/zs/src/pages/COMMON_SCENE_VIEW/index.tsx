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
  RemoteComponent,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '961180489256411136';
const CommonSceneView$$Page: React.FC<PageProps> = ({
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
    const eventDatagetTableData3: any = [
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
    eventDatagetTableData3.params =
      [
        {
          title: '事件入参',
          name: 'options_379575',
          value: '$options_379575$',
        },
      ] || [];
    CMDGenerator(eventDatagetTableData3, { options_379575 }, 'getTableData', {
      id: 'getTableData',
      name: 'getTableData',
      type: 'getTableData',
      platform: 'undefined',
    });
    const eventDatacustomActionCode119: any = [
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
    eventDatacustomActionCode119.params =
      [
        {
          title: '事件入参',
          name: 'options_379575',
          value: '$options_379575$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode119,
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
    const eventDatagetCurrentFormValues5: any = [
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
    eventDatagetCurrentFormValues5.params =
      [
        {
          title: '事件入参',
          name: 'options_543189',
          value: '$options_543189$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues5,
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
    const eventDatacustomActionCode120: any = [
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
    eventDatacustomActionCode120.params =
      [
        {
          title: '事件入参',
          name: 'options_3690043',
          value: '$options_3690043$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode120,
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
    const eventDatacustomActionCode121: any = [
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
    eventDatacustomActionCode121.params =
      [
        {
          title: '事件入参',
          name: 'options_791765',
          value: '$options_791765$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode121,
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
    const eventDataifelse188: any = [
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
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;console.log("\\u573A\\u666F\\u89C6\\u56FE",state.itemList);data.sceneSubmit=item;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(state.itemList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 166519834725461630,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_403081',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '8614445',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_403081:
                      '$state.itemList.approveGradeName$',
                  },
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_403081',
                  ],
                },
                line_number: 3,
                callback1: [],
              },
              {
                type: 'setRemoteCompProps',
                dataId: 168077105879210400,
                options: {
                  compId: 'RemoteComponent_200605',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'RemoteComponent',
                  id: '43542',
                  rProps: '$data_9981685$',
                },
                line_number: 4,
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
              actionTitle: '附件',
            },
            line_number: 5,
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
    eventDataifelse188.params = [] || [];
    CMDGenerator(eventDataifelse188, {}, 'ifelse', {
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
        className="View_View_537892_1_573149_076327"
        name={'页面'}
        $$componentItem={{
          id: 'View_537892_1_573149_076327',
          uid: 'View_537892_1_573149_076327',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_573149_076327')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={state?.itemList?.childCatalogName}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558_7410426_9240054',
            uid: 'Divider_52558_7410426_9240054',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Divider_52558_7410426_9240054')
          }
          {...injectData}
        />
        <View
          name={'布局容器'}
          className={'fixed-form-item-label-width-150'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_3483268_704936',
            uid: 'View_6806553_3483268_704936',
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
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_6806553_3483268_704936')
          }
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_830821_2316114',
              uid: 'HorizontalView_004602_830821_2316114',
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
              refs.setComponentRef(r, 'HorizontalView_004602_830821_2316114')
            }
            {...injectData}
          >
            <View
              className="View_View_339406_177732_8018627"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_177732_8018627',
                uid: 'View_339406_177732_8018627',
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_339406_177732_8018627')
              }
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_502218',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_502218',
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
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_502218',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
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
                  text={state?.itemList?.childCatalogName}
                  $$componentItem={{
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_081343',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_081343',
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
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_081343',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_6319234_3569864_15467365_781748_88437_992093"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_88437_992093',
                    uid: 'View_6319234_3569864_15467365_781748_88437_992093',
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
                      'View_6319234_3569864_15467365_781748_88437_992093',
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_403081',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_403081',
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
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_403081',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
        </View>
        <View
          className="View_View_075386"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_075386',
            uid: 'View_075386',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_075386')}
          {...injectData}
        >
          <RemoteComponent
            name={'远程组件'}
            associatedType={'file'}
            remoteCompType={'innerRemoteComp'}
            compExtCode={''}
            compExtName={''}
            fileName={'场景视图'}
            fileCode={'scene_view'}
            $$componentItem={{
              id: 'RemoteComponent_200605',
              uid: 'RemoteComponent_200605',
              type: 'RemoteComponent',
              ...componentItem,
            }}
            appId={undefined}
            lcdpParentRenderId={undefined}
            onMessage={(msg: any) => {}}
            ref={(r: any) => refs.setComponentRef(r, 'RemoteComponent_200605')}
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_349769_35065')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(CommonSceneView$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
