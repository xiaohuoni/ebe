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
  Table,
  TextArea,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsDz_0001_0001$$Page: React.FC<PageProps> = ({
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
  const updataSubmitDataProdList = (options_379575: any) => {
    const eventDatacustomActionCode167: any = [
      {
        type: 'customActionCode',
        dataId: 166859813995785100,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '438453',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("\\u66F4\\u65B0\\u7535\\u6E20\\u5217\\u8868\\u63D0\\u4EA4\\u6570\\u636E",data.gradeList);data.initGradeList=data.initGradeList.map(function(item){var gradeItem=data.gradeList.find(function(cItem){return item.gradeId===cItem.gradeId});return Object.assign(item,gradeItem)});var instList=data.initGradeList.map(function(item){var _arr=[];for(var name in item){if(item.hasOwnProperty(name))_arr.push({"attrCode":name,"attrName":"","attrValue":item[name]})}return{"instCode":item.key,"instAttrList":_arr}});console.log("\\u66F4\\u65B0\\u540E\\u7535\\u6E20\\u5217\\u8868\\u63D0\\u4EA4\\u6570\\u636E",instList);success(instList)};',
        },
        line_number: 1,
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
            line_number: 2,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 167722944900135170,
                shielding: true,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '512052',
                  pageJsonId: '537892',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  customFuncName: 'updateOrderSubmit',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/flow/audit',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '056837',
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
                dataId: 168681656499718300,
                elseIfs: [],
                line_number: 4,
                callback1: [
                  {
                    type: 'callCustomPageFunc',
                    dataId: 168681659337184960,
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '321821',
                      pageJsonId: '537892',
                      pathname: '/flow/audit',
                      pageId: '874567207627108352',
                      customFuncName: 'updateOrderSubmit',
                      customFuncParams: '$data.sceneSubmit$',
                      modalPath: '/flow/audit',
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
          {
            type: 'clearTableSelected',
            dataId: 167747729378319780,
            options: {
              compId: 'Table_093003_975455_588034',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Table',
              id: '9926149',
            },
            line_number: 6,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode167.params =
      [
        {
          title: '事件入参',
          name: 'options_379575',
          value: '$options_379575$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode167,
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
    const eventDatagetCurrentFormValues6: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 167333212685112900,
        options: {
          compId: 'Form_190947_1873837_623598',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '116101',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167333214073229980,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6590864',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){console.log("\\u63D0\\u4EA4\\u8868\\u5355\\u6570\\u636E",Form_190947_1873837_623598);var attrList=[];var obj=Form_190947_1873837_623598;for(var key in obj){if(obj.hasOwnProperty(key)){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}}success(attrList)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167333247727684580,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '912053',
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
                      value: { type: ['context', '$data_6590864$'], code: '' },
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
                    dataId: 167714293480496000,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '7949113',
                      pageJsonId: '537892',
                      pathname: '/auditDealWith-PC',
                      pageId: '884773713167953920',
                      modalPath: '/auditDealWith-PC',
                      customFuncName: 'getFactor',
                      customFuncParams: '$data.sceneSubmit$',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 167714293966574300,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '588943',
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
            callback2: [],
          },
        ],
      },
    ];
    eventDatagetCurrentFormValues6.params =
      [
        {
          title: '事件入参',
          name: 'options_543189',
          value: '$options_543189$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues6,
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
    const eventDatacustomActionCode168: any = [
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
    eventDatacustomActionCode168.params =
      [
        {
          title: '事件入参',
          name: 'options_3690043',
          value: '$options_3690043$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode168,
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
  const batchDeal = (options_4690173: any) => {
    const eventDatagetTableSelected: any = [
      {
        type: 'getTableSelected',
        dataId: 167333355768450100,
        options: {
          compId: 'Table_093003_975455_588034',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Table',
          id: '55483846',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167333355768448960,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '579923',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var tabelSelectors=selectedRows_55483846;if((tabelSelectors===null||tabelSelectors===void 0?void 0:tabelSelectors.length)>0){data.gradeList=data.gradeList.map(function(item){var _index=tabelSelectors.findIndex(function(selector){return selector.gradeId===item.gradeId});if(_index>-1){var _options_;console.log("\\u5904\\u7406\\u72B6\\u6001",options_4690173);item.handleIdea=((_options_=options_4690173)===null||_options_===void 0?void 0:_options_.handleIdea)||""}return item});success(data.gradeList)}else{fail()}};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167746509959838300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '51708',
                  pageJsonId: '537892',
                  dataSourceId: 166858698843021470,
                  dataSourceName: 'gradeList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '15005',
                      code: 'handleIdea',
                      name: '处理意见',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '9556997',
                      code: 'gradeCond',
                      name: '变更情况',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '538373',
                      code: 'gradeCode',
                      name: '档次编码',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '2738356',
                      code: 'gradeName',
                      name: '档次名称',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '357193',
                      code: 'gradeDesc',
                      name: '档次描述',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '419172',
                      code: 'aimCustAttr',
                      name: '针对客户属性',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '6867386',
                      code: 'isAssignTagCust',
                      name: '是否指定目标客户',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '187083',
                      code: 'saleInure',
                      name: '营销方案生效时间',
                      type: 'string',
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
                    type: 'callSelfFunc',
                    dataId: 167746511129212350,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '9366024',
                      pageJsonId: '537892',
                      customFuncName: 'updataSubmitDataProdList',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'clearTableSelected',
                    dataId: 167747720355076580,
                    options: {
                      compId: 'Table_093003_975455_588034',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '149419',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'reloadTableData',
                    dataId: 168681374996944830,
                    options: {
                      compId: 'Table_093003_975455_588034',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '365363',
                      data: '$data_579923$',
                      total: '$data_579923.length$',
                      current: '1',
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
                type: 'showMessage',
                dataId: 167333355768438980,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '71996212',
                  pageJsonId: '537892',
                  type: 'info',
                  value: '请先选择表格数据',
                },
                line_number: 7,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelected.params =
      [
        {
          title: '事件入参',
          name: 'options_4690173',
          value: '$options_4690173$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetTableSelected,
      { options_4690173 },
      'getTableSelected',
      {
        id: 'getTableSelected',
        name: 'getTableSelected',
        type: 'getTableSelected',
        platform: 'undefined',
      },
    );
  };
  const initTable = (options_20826: any) => {
    const eventDatacustomActionCode169: any = [
      {
        type: 'customActionCode',
        dataId: 167601950147311650,
        shielding: true,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '8946417',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;console.log("\\u73AF\\u8282\\u72B6\\u6001-tacheCode",tacheCode);var tacheCodes=["PLAN_MANAGER","CITY_DEPT_MANAGER,MARKET_DEPT_BRANCH,CHANNEL_DEPT_MANAGER","CHANNEL_OPERATOR"];var index=tacheCodes.findIndex(function(item){return item.indexOf(tacheCode)>-1});console.log("\\u73AF\\u8282\\u72B6\\u6001-index",index);success(index)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167601957024770800,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '755828',
              pageJsonId: '537892',
              dataSourceId: 167601886578764400,
              dataSourceName: 'tacheInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '480817',
                  code: 'tacheStatus',
                  name: '环节状态',
                  type: 'string',
                  initialData: { type: 'static', value: '-1' },
                  value: { type: ['context', '$data_8946417$'], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167713953842370940,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '40284',
                  pageJsonId: '537892',
                  dataSourceId: 166858698843021470,
                  dataSourceName: 'gradeList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '15005',
                      code: 'prodId',
                      name: '处理意见',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '9556997',
                      code: 'gradeCond',
                      name: '变更情况',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '538373',
                      code: 'gradeCode',
                      name: '档次编码',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '2738356',
                      code: 'gradeName',
                      name: '档次名称',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '357193',
                      code: 'gradeDesc',
                      name: '档次描述',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '419172',
                      code: 'aimCustAttr',
                      name: '针对客户属性',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '6867386',
                      code: 'isAssignTagCust',
                      name: '是否指定目标客户',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '187083',
                      code: 'saleInure',
                      name: '营销方案生效时间',
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
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '626343',
                    options: {
                      context: '$state.sceneOrigin$',
                      operate: 'empty',
                      manualValue: 'U',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.sceneOrigin$',
                      operate: '!=',
                      manualValue: 'U',
                    },
                    condId: '9215332',
                    connector: '||',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167747871745296830,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 167747876659539500,
                    children: [
                      {
                        dataName: 'condition',
                        dataId: 167747877119640860,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 167747877119723460,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: ['View_836897_8898268'],
                              compLib: 'custom',
                              pageJsonId: '537892',
                              compName: 'View',
                              id: '763019',
                              visible: 'true',
                              compid: ['View_836897_8898268'],
                            },
                            actionObjId: 'View_836897',
                            actionObjName: 'View',
                            value: 'setVisible',
                            compLib: 'custom',
                            shielding: true,
                            line_number: 8,
                          },
                          {
                            dataName: 'action',
                            dataId: 167747877119719700,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: ['View_836897'],
                              compLib: 'custom',
                              pageJsonId: '537892',
                              compName: 'View',
                              id: '236052',
                              visible: '',
                              compid: ['View_836897'],
                            },
                            actionObjId: 'View_836897_8898268',
                            actionObjName: 'View',
                            value: 'setVisible',
                            compLib: 'custom',
                            shielding: true,
                            line_number: 9,
                          },
                        ],
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167747877119749280,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167747877119707940,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['View_836897'],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '698039',
                                  visible: 'true',
                                  compid: ['View_836897'],
                                },
                                actionObjId: 'View_836897',
                                actionObjName: 'View',
                                value: 'setVisible',
                                compLib: 'custom',
                                shielding: true,
                                line_number: 10,
                              },
                              {
                                dataName: 'action',
                                dataId: 167747877119740350,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['View_836897_8898268'],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '732817',
                                  visible: '',
                                  compid: ['View_836897_8898268'],
                                },
                                actionObjId: 'View_836897_8898268',
                                actionObjName: 'View',
                                value: 'setVisible',
                                compLib: 'custom',
                                shielding: true,
                                line_number: 11,
                              },
                            ],
                            condition: [],
                            desc: '其他环节',
                            shielding: true,
                            callback: [
                              {
                                type: 'setVisible',
                                dataId: 167747877119707940,
                                shielding: true,
                                options: {
                                  compId: ['View_836897'],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '698039',
                                  visible: 'true',
                                  compid: ['View_836897'],
                                },
                                line_number: 10,
                              },
                              {
                                type: 'setVisible',
                                dataId: 167747877119740350,
                                shielding: true,
                                options: {
                                  compId: ['View_836897_8898268'],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '732817',
                                  visible: '',
                                  compid: ['View_836897_8898268'],
                                },
                                line_number: 11,
                              },
                            ],
                          },
                        ],
                        condition: [
                          {
                            condId: '2989883',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data.tacheInfo.tacheStatus$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '领导审批环节(控制表格显隐)',
                        shielding: true,
                        line_number: 7,
                      },
                    ],
                    condition: [],
                    desc: '处理',
                    shielding: true,
                    callback: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '2989883',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data.tacheInfo.tacheStatus$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167747877119640860,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167747877119749280,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167747877119707940,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['View_836897'],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '698039',
                                  visible: 'true',
                                  compid: ['View_836897'],
                                },
                                actionObjId: 'View_836897',
                                actionObjName: 'View',
                                value: 'setVisible',
                                compLib: 'custom',
                                shielding: true,
                                line_number: 10,
                              },
                              {
                                dataName: 'action',
                                dataId: 167747877119740350,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['View_836897_8898268'],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '732817',
                                  visible: '',
                                  compid: ['View_836897_8898268'],
                                },
                                actionObjId: 'View_836897_8898268',
                                actionObjName: 'View',
                                value: 'setVisible',
                                compLib: 'custom',
                                shielding: true,
                                line_number: 11,
                              },
                            ],
                            condition: [],
                            desc: '其他环节',
                            shielding: true,
                            callback: [
                              {
                                type: 'setVisible',
                                dataId: 167747877119707940,
                                shielding: true,
                                options: {
                                  compId: ['View_836897'],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '698039',
                                  visible: 'true',
                                  compid: ['View_836897'],
                                },
                                line_number: 10,
                              },
                              {
                                type: 'setVisible',
                                dataId: 167747877119740350,
                                shielding: true,
                                options: {
                                  compId: ['View_836897_8898268'],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '732817',
                                  visible: '',
                                  compid: ['View_836897_8898268'],
                                },
                                line_number: 11,
                              },
                            ],
                          },
                        ],
                        line_number: 7,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 167747877119723460,
                            shielding: true,
                            options: {
                              compId: ['View_836897_8898268'],
                              compLib: 'custom',
                              pageJsonId: '537892',
                              compName: 'View',
                              id: '763019',
                              visible: 'true',
                              compid: ['View_836897_8898268'],
                            },
                            line_number: 8,
                          },
                          {
                            type: 'setVisible',
                            dataId: 167747877119719700,
                            shielding: true,
                            options: {
                              compId: ['View_836897'],
                              compLib: 'custom',
                              pageJsonId: '537892',
                              compName: 'View',
                              id: '236052',
                              visible: '',
                              compid: ['View_836897'],
                            },
                            line_number: 9,
                          },
                        ],
                      },
                    ],
                  },
                ],
                line_number: 4,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 167747874333277860,
                    shielding: true,
                    options: {
                      compId: ['View_836897'],
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'View',
                      id: '911052',
                      visible: 'true',
                      compid: ['View_836897'],
                    },
                    line_number: 5,
                  },
                  {
                    type: 'setVisible',
                    dataId: 167747875002291200,
                    shielding: true,
                    options: {
                      compId: ['View_836897_8898268'],
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'View',
                      id: '928853',
                      visible: '',
                      compid: ['View_836897_8898268'],
                    },
                    line_number: 6,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 167722288831437380,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '875426',
              pageJsonId: '537892',
              actionTitle: '根据环节状态修改审批单编辑状态',
              code: 'function main(data,state,success,fail){if(data_8946417=="0"||data_8946417=="1"||data_8946417=="2"){console.log("\\u7535\\u6E20-\\u8BBE\\u7F6E\\u73AF\\u8282\\u72B6\\u6001",data_8946417);success(1)}};',
            },
            line_number: 12,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 167723048374902530,
                shielding: true,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '1336758',
                  pageJsonId: '537892',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  customFuncName: 'setIsRollback',
                  customFuncParams: '$data_875426$',
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
    ];
    eventDatacustomActionCode169.params =
      [
        { title: '事件入参', name: 'options_20826', value: '$options_20826$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode169,
      { options_20826 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
    const eventDatacustomActionCode170: any = [
      {
        type: 'customActionCode',
        dataId: 168681045181955940,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '275608',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("\\u7535\\u6E20\\u521D\\u59CB\\u5316-\\u4E8B\\u4EF6\\u5165\\u53C2",options_20826);var initGradeList=options_20826.initGradeList||[];var tacheCode=options_20826.tacheCode||null;var tacheCodes=["PLAN_MANAGER","CITY_DEPT_MANAGER,MARKET_DEPT_BRANCH,CHANNEL_DEPT_MANAGER","CHANNEL_OPERATOR"];var index=tacheCodes.findIndex(function(item){return item.indexOf(tacheCode)>-1});console.log("\\u7535\\u6E20\\u521D\\u59CB\\u5316-\\u73AF\\u8282\\u72B6\\u6001",index);if(index===0){data.gradeList=initGradeList.filter(function(item){return item.handleIdea!="0"&&item.handleIdea!="3"}).map(function(item){if(state.sceneOrigin=="U"){item.handleIdea=""}return item});;}else{var gradeList=initGradeList.filter(function(item){return item.handleIdea!="0"&&item.handleIdea!="3"});if(gradeList.length>0){if(state.sceneOrigin=="U"&&index!=-1){data.gradeList=gradeList.map(function(item){item.handleIdea="";return item})}else{data.gradeList=gradeList}}else{data.gradeList=[]}}console.log("\\u7535\\u6E20-\\u6863\\u6B21\\u5217\\u8868",data.gradeList);success(index)};',
          actionTitle: '场景表格数据回填',
        },
        line_number: 14,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168681045181975300,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '352085',
              pageJsonId: '537892',
              dataSourceId: 166858698843021470,
              dataSourceName: 'gradeList',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '2738356',
                  code: 'gradeName',
                  name: '档次名称',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                },
                {
                  attrId: '357193',
                  code: 'gradeDesc',
                  name: '档次描述',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                },
                {
                  attrId: '15005',
                  code: 'handleIdea',
                  name: '处理意见',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9556997',
                  code: 'modifyType',
                  name: '变更情况',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '538373',
                  code: 'gradeId',
                  name: '档次编码',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                },
                {
                  attrId: '419172',
                  code: 'guestId',
                  name: '针对客户属性',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                },
                {
                  attrId: '6867386',
                  code: 'openObjectType',
                  name: '是否指定目标客户',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '187083',
                  code: 'gradeStartDate',
                  name: '营销方案生效时间',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              newData: '$data_275608$',
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 15,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 168681045181932770,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '373816',
                  pageJsonId: '537892',
                  customFuncName: 'updataSubmitDataProdList',
                },
                line_number: 16,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 168681045181906600,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '357122',
                  pageJsonId: '537892',
                  dataSourceId: 167601886578764400,
                  dataSourceName: 'tacheInfo',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '480817',
                      code: 'tacheStatus',
                      name: '环节状态',
                      type: 'string',
                      initialData: { type: 'static', value: '-1' },
                      value: { type: ['context', '$data_275608$'], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 17,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '626343',
                        options: {
                          context: '$state.sceneOrigin$',
                          operate: 'empty',
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
                          context: '$state.sceneOrigin$',
                          operate: '==',
                          manualValue: 'V',
                        },
                        condId: '7008144',
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
                          manualValue: 'R',
                        },
                        condId: '378093',
                        connector: '||',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168681045181926980,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 168681045181927600,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 168681045181913950,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168681045181981950,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: [
                                    'View_836897_8898268',
                                    'View_836897_8898268_3011325',
                                  ],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '6788917',
                                  visible: 'true',
                                  compid: [
                                    'View_836897_8898268',
                                    'View_836897_8898268_3011325',
                                  ],
                                },
                                actionObjId: 'View_836897',
                                actionObjName: 'View',
                                value: 'setVisible',
                                compLib: 'custom',
                                line_number: 22,
                              },
                              {
                                dataName: 'action',
                                dataId: 168681045181958700,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: [
                                    'View_836897',
                                    'View_836897_988729',
                                    'View_167873',
                                    'View_885504',
                                  ],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '929466',
                                  visible: '',
                                  compid: [
                                    'View_836897',
                                    'View_836897_988729',
                                    'View_167873',
                                    'View_885504',
                                  ],
                                },
                                actionObjId: 'View_836897_8898268',
                                actionObjName: 'View',
                                value: 'setVisible',
                                compLib: 'custom',
                                line_number: 23,
                              },
                              {
                                dataName: 'action',
                                dataId: 168681364624726850,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 168681364624720400,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['dataSource', 'total', 'curPage'],
                                options: {
                                  compId: 'Table_093003_975455_588034',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Table',
                                  id: '990629',
                                  data: '$data.gradeList$',
                                  total: '$data.gradeList.length$',
                                  current: '1',
                                },
                                actionObjId: 'Table_093003_975455_588034',
                                actionObjName: 'Table',
                                value: 'reloadTableData',
                                compLib: 'comm',
                                line_number: 24,
                              },
                            ],
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 168681045181936770,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168681045181985600,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: [
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '5290213',
                                      visible: 'true',
                                      compid: [
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                    },
                                    actionObjId: 'View_836897',
                                    actionObjName: 'View',
                                    value: 'setVisible',
                                    compLib: 'custom',
                                    line_number: 25,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168681045181928700,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: [
                                        'View_167873',
                                        'View_836897_8898268_3011325',
                                        'View_836897_8898268',
                                        'View_885504',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '878928',
                                      visible: '',
                                      compid: [
                                        'View_167873',
                                        'View_836897_8898268_3011325',
                                        'View_836897_8898268',
                                        'View_885504',
                                      ],
                                    },
                                    actionObjId: 'View_836897_8898268',
                                    actionObjName: 'View',
                                    value: 'setVisible',
                                    compLib: 'custom',
                                    line_number: 26,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168681289512889400,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168681289512868700,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                    ],
                                    todoOptions: [
                                      'dataSource',
                                      'total',
                                      'curPage',
                                    ],
                                    options: {
                                      compId:
                                        'Table_093003_975455_588034_3119085',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Table',
                                      id: '343209',
                                      data: '$data.gradeList$',
                                      total: '$data.gradeList.length$',
                                      current: '1',
                                    },
                                    actionObjId:
                                      'Table_093003_975455_588034_3119085',
                                    actionObjName: 'Table',
                                    value: 'reloadTableData',
                                    compLib: 'comm',
                                    line_number: 27,
                                  },
                                ],
                                condition: [
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$data_275608$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    condId: '380543',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$data_275608$',
                                      operate: '==',
                                      manualValue: '2',
                                    },
                                    condId: '7339215',
                                    connector: '||',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                value: 'elseIf',
                                desc: '策划或者省经办',
                                callback: [
                                  {
                                    type: 'setVisible',
                                    dataId: 168681045181985600,
                                    options: {
                                      compId: [
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '5290213',
                                      visible: 'true',
                                      compid: [
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                    },
                                    line_number: 25,
                                  },
                                  {
                                    type: 'setVisible',
                                    dataId: 168681045181928700,
                                    options: {
                                      compId: [
                                        'View_167873',
                                        'View_836897_8898268_3011325',
                                        'View_836897_8898268',
                                        'View_885504',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '878928',
                                      visible: '',
                                      compid: [
                                        'View_167873',
                                        'View_836897_8898268_3011325',
                                        'View_836897_8898268',
                                        'View_885504',
                                      ],
                                    },
                                    line_number: 26,
                                  },
                                  {
                                    type: 'reloadTableData',
                                    dataId: 168681289512889400,
                                    options: {
                                      compId:
                                        'Table_093003_975455_588034_3119085',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Table',
                                      id: '343209',
                                      data: '$data.gradeList$',
                                      total: '$data.gradeList.length$',
                                      current: '1',
                                    },
                                    line_number: 27,
                                    callback1: [],
                                  },
                                ],
                              },
                              {
                                dataName: 'elseIf',
                                dataId: 168681045181932740,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168681045181944320,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: ['View_167873', 'View_885504'],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '329853',
                                      visible: 'true',
                                      compid: ['View_167873', 'View_885504'],
                                    },
                                    actionObjId: 'View_836897',
                                    actionObjName: 'View',
                                    value: 'setVisible',
                                    compLib: 'custom',
                                    line_number: 28,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168681045181973150,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: [
                                        'View_836897_8898268',
                                        'View_836897_8898268_3011325',
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '436026',
                                      visible: '',
                                      compid: [
                                        'View_836897_8898268',
                                        'View_836897_8898268_3011325',
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                    },
                                    actionObjId: 'View_836897_8898268',
                                    actionObjName: 'View',
                                    value: 'setVisible',
                                    compLib: 'custom',
                                    line_number: 29,
                                  },
                                ],
                                condition: [],
                                desc: '其他环节',
                                callback: [
                                  {
                                    type: 'setVisible',
                                    dataId: 168681045181944320,
                                    options: {
                                      compId: ['View_167873', 'View_885504'],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '329853',
                                      visible: 'true',
                                      compid: ['View_167873', 'View_885504'],
                                    },
                                    line_number: 28,
                                  },
                                  {
                                    type: 'setVisible',
                                    dataId: 168681045181973150,
                                    options: {
                                      compId: [
                                        'View_836897_8898268',
                                        'View_836897_8898268_3011325',
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '436026',
                                      visible: '',
                                      compid: [
                                        'View_836897_8898268',
                                        'View_836897_8898268_3011325',
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                    },
                                    line_number: 29,
                                  },
                                ],
                              },
                            ],
                            condition: [
                              {
                                condId: '2989883',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data_275608$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '领导审批环节(控制表格显隐)',
                            line_number: 21,
                          },
                        ],
                        condition: [],
                        desc: '处理',
                        callback: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '2989883',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data_275608$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 168681045181913950,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 168681045181936770,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168681045181985600,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: [
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '5290213',
                                      visible: 'true',
                                      compid: [
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                    },
                                    actionObjId: 'View_836897',
                                    actionObjName: 'View',
                                    value: 'setVisible',
                                    compLib: 'custom',
                                    line_number: 25,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168681045181928700,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: [
                                        'View_167873',
                                        'View_836897_8898268_3011325',
                                        'View_836897_8898268',
                                        'View_885504',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '878928',
                                      visible: '',
                                      compid: [
                                        'View_167873',
                                        'View_836897_8898268_3011325',
                                        'View_836897_8898268',
                                        'View_885504',
                                      ],
                                    },
                                    actionObjId: 'View_836897_8898268',
                                    actionObjName: 'View',
                                    value: 'setVisible',
                                    compLib: 'custom',
                                    line_number: 26,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168681289512889400,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168681289512868700,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                    ],
                                    todoOptions: [
                                      'dataSource',
                                      'total',
                                      'curPage',
                                    ],
                                    options: {
                                      compId:
                                        'Table_093003_975455_588034_3119085',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Table',
                                      id: '343209',
                                      data: '$data.gradeList$',
                                      total: '$data.gradeList.length$',
                                      current: '1',
                                    },
                                    actionObjId:
                                      'Table_093003_975455_588034_3119085',
                                    actionObjName: 'Table',
                                    value: 'reloadTableData',
                                    compLib: 'comm',
                                    line_number: 27,
                                  },
                                ],
                                condition: [
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$data_275608$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    condId: '380543',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$data_275608$',
                                      operate: '==',
                                      manualValue: '2',
                                    },
                                    condId: '7339215',
                                    connector: '||',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                value: 'elseIf',
                                desc: '策划或者省经办',
                                callback: [
                                  {
                                    type: 'setVisible',
                                    dataId: 168681045181985600,
                                    options: {
                                      compId: [
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '5290213',
                                      visible: 'true',
                                      compid: [
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                    },
                                    line_number: 25,
                                  },
                                  {
                                    type: 'setVisible',
                                    dataId: 168681045181928700,
                                    options: {
                                      compId: [
                                        'View_167873',
                                        'View_836897_8898268_3011325',
                                        'View_836897_8898268',
                                        'View_885504',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '878928',
                                      visible: '',
                                      compid: [
                                        'View_167873',
                                        'View_836897_8898268_3011325',
                                        'View_836897_8898268',
                                        'View_885504',
                                      ],
                                    },
                                    line_number: 26,
                                  },
                                  {
                                    type: 'reloadTableData',
                                    dataId: 168681289512889400,
                                    options: {
                                      compId:
                                        'Table_093003_975455_588034_3119085',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Table',
                                      id: '343209',
                                      data: '$data.gradeList$',
                                      total: '$data.gradeList.length$',
                                      current: '1',
                                    },
                                    line_number: 27,
                                    callback1: [],
                                  },
                                ],
                              },
                              {
                                dataName: 'elseIf',
                                dataId: 168681045181932740,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168681045181944320,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: ['View_167873', 'View_885504'],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '329853',
                                      visible: 'true',
                                      compid: ['View_167873', 'View_885504'],
                                    },
                                    actionObjId: 'View_836897',
                                    actionObjName: 'View',
                                    value: 'setVisible',
                                    compLib: 'custom',
                                    line_number: 28,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168681045181973150,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: [
                                        'View_836897_8898268',
                                        'View_836897_8898268_3011325',
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '436026',
                                      visible: '',
                                      compid: [
                                        'View_836897_8898268',
                                        'View_836897_8898268_3011325',
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                    },
                                    actionObjId: 'View_836897_8898268',
                                    actionObjName: 'View',
                                    value: 'setVisible',
                                    compLib: 'custom',
                                    line_number: 29,
                                  },
                                ],
                                condition: [],
                                desc: '其他环节',
                                callback: [
                                  {
                                    type: 'setVisible',
                                    dataId: 168681045181944320,
                                    options: {
                                      compId: ['View_167873', 'View_885504'],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '329853',
                                      visible: 'true',
                                      compid: ['View_167873', 'View_885504'],
                                    },
                                    line_number: 28,
                                  },
                                  {
                                    type: 'setVisible',
                                    dataId: 168681045181973150,
                                    options: {
                                      compId: [
                                        'View_836897_8898268',
                                        'View_836897_8898268_3011325',
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                      compLib: 'custom',
                                      pageJsonId: '537892',
                                      compName: 'View',
                                      id: '436026',
                                      visible: '',
                                      compid: [
                                        'View_836897_8898268',
                                        'View_836897_8898268_3011325',
                                        'View_836897_988729',
                                        'View_836897',
                                      ],
                                    },
                                    line_number: 29,
                                  },
                                ],
                              },
                            ],
                            line_number: 21,
                            callback1: [
                              {
                                type: 'setVisible',
                                dataId: 168681045181981950,
                                options: {
                                  compId: [
                                    'View_836897_8898268',
                                    'View_836897_8898268_3011325',
                                  ],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '6788917',
                                  visible: 'true',
                                  compid: [
                                    'View_836897_8898268',
                                    'View_836897_8898268_3011325',
                                  ],
                                },
                                line_number: 22,
                              },
                              {
                                type: 'setVisible',
                                dataId: 168681045181958700,
                                options: {
                                  compId: [
                                    'View_836897',
                                    'View_836897_988729',
                                    'View_167873',
                                    'View_885504',
                                  ],
                                  compLib: 'custom',
                                  pageJsonId: '537892',
                                  compName: 'View',
                                  id: '929466',
                                  visible: '',
                                  compid: [
                                    'View_836897',
                                    'View_836897_988729',
                                    'View_167873',
                                    'View_885504',
                                  ],
                                },
                                line_number: 23,
                              },
                              {
                                type: 'reloadTableData',
                                dataId: 168681364624726850,
                                options: {
                                  compId: 'Table_093003_975455_588034',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Table',
                                  id: '990629',
                                  data: '$data.gradeList$',
                                  total: '$data.gradeList.length$',
                                  current: '1',
                                },
                                line_number: 24,
                                callback1: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    line_number: 18,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 168681045181903800,
                        options: {
                          compId: ['View_167873', 'View_885504'],
                          compLib: 'custom',
                          pageJsonId: '537892',
                          compName: 'View',
                          id: '5045642',
                          visible: 'true',
                          compid: ['View_167873', 'View_885504'],
                        },
                        line_number: 19,
                      },
                      {
                        type: 'setVisible',
                        dataId: 168681045181901200,
                        options: {
                          compId: [
                            'View_836897_8898268',
                            'View_836897_8898268_3011325',
                            'View_836897_988729',
                            'View_836897',
                          ],
                          compLib: 'custom',
                          pageJsonId: '537892',
                          compName: 'View',
                          id: '098851',
                          visible: '',
                          compid: [
                            'View_836897_8898268',
                            'View_836897_8898268_3011325',
                            'View_836897_988729',
                            'View_836897',
                          ],
                        },
                        line_number: 20,
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
    eventDatacustomActionCode170.params =
      [
        { title: '事件入参', name: 'options_20826', value: '$options_20826$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode170,
      { options_20826 },
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
    batchDeal,
    initTable,
  }));

  useEffect(() => {
    const eventDatacustomActionCode290: any = [
      {
        type: 'customActionCode',
        dataId: 168078752255864060,
        shielding: true,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '231968',
          pageJsonId: '537892',
          actionTitle: '设置isRollback',
          code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;console.log("\\u73AF\\u8282\\u72B6\\u6001-tacheCode",tacheCode);if(tacheCode){var tacheCodes=["PLAN_MANAGER","CITY_DEPT_MANAGER,MARKET_DEPT_BRANCH,CHANNEL_DEPT_MANAGER","CHANNEL_OPERATOR"];var index=tacheCodes.findIndex(function(item){return item.indexOf(tacheCode)>-1});console.log("\\u73AF\\u8282\\u72B6\\u6001-index",index);if(index>-1){success("1")}}else{fail("\\u83B7\\u53D6\\u73AF\\u8282\\u7F16\\u7801\\u5931\\u8D25\\uFF0C\\u8BF7\\u91CD\\u65B0\\u8FDB\\u5165")}};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168078772894267100,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '063931',
              pageJsonId: '537892',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              customFuncName: 'setIsRollback',
              customFuncParams: '$data_231968$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [
          {
            type: 'showMessage',
            dataId: 168078777783056770,
            shielding: true,
            options: {
              compId: 'showMessage',
              compName: 'system',
              id: '5085472',
              pageJsonId: '537892',
              type: 'error',
              value: '$fail_231968$',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDatacustomActionCode290.params = [] || [];
    CMDGenerator(eventDatacustomActionCode290, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    }); // console 167842943591907400
    console.log('电渠-state', state);
    const eventDataapiRequest461: any = [
      {
        type: 'apiRequest',
        dataId: 166972712891641950,
        shielding: true,
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
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166972713254645200,
            shielding: true,
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
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest461.params = [] || [];
    CMDGenerator(eventDataapiRequest461, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest462: any = [
      {
        type: 'apiRequest',
        dataId: 167713545448014700,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '365383',
          pageJsonId: '537892',
          sync: false,
          actionTitle: '获取活动类型',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selUndertakeOrderType',
          _apiCode: 'selUndertakeOrderType',
          _source: 'rhin',
          _serviceId: '943051720903716864',
          _serviceTitle: '承办单类型查询接口: selUndertakeOrderType',
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
              dataKey: '365383_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '365383_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '365383_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'queryType',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.queryType',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.queryType',
                  dataKey: '365383_body.queryType',
                  value: { type: ['customize'], code: '1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '365383_body',
            },
          ],
        },
        line_number: 7,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167713557436786240,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '1221336',
              pageJsonId: '537892',
              dataSourceId: 167713503828070050,
              dataSourceName: 'gradeSelectorListData',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '1085994',
                  code: 'activityTypeList',
                  name: '活动类型列表',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                  value: { type: [], code: '' },
                },
                {
                  attrId: '569692',
                  code: 'cityZoneList',
                  name: '地市专区',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                },
                {
                  attrId: '160574',
                  code: 'busiZoneList',
                  name: '业务专区',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                  value: { type: [], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 8,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 167817117587177120,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '741592',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var arr=reply_365383.resultData.content.actList.actInfo;var _arr=arr.map(function(item){var _item$actChildList;if((item===null||item===void 0?void 0:(_item$actChildList=item.actChildList)===null||_item$actChildList===void 0?void 0:_item$actChildList.length)>0){item.actChildList=item===null||item===void 0?void 0:item.actChildList.map(function(actItem){actItem.checkAble=false;return actItem})}item.checkAble=false;return item});console.log("activityType;",_arr);success(_arr)};',
            },
            line_number: 9,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167817169461416350,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '647143',
                  pageJsonId: '537892',
                  dataSourceId: 167713503828070050,
                  dataSourceName: 'gradeSelectorListData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '1085994',
                      code: 'activityTypeList',
                      name: '活动类型列表',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: ['context', '$data_741592$'], code: '' },
                    },
                    {
                      attrId: '569692',
                      code: 'cityZoneList',
                      name: '地市专区',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '160574',
                      code: 'busiZoneList',
                      name: '业务专区',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
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
        ],
        callback2: [
          {
            type: 'customActionCode',
            dataId: 167930298265339040,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '255091',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){success([])};',
            },
            line_number: 11,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167930298265306880,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '252195',
                  pageJsonId: '537892',
                  dataSourceId: 167713503828070050,
                  dataSourceName: 'gradeSelectorListData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '1085994',
                      code: 'activityTypeList',
                      name: '活动类型列表',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: ['context', '$data_255091$'], code: '' },
                    },
                    {
                      attrId: '569692',
                      code: 'cityZoneList',
                      name: '地市专区',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '160574',
                      code: 'busiZoneList',
                      name: '业务专区',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 12,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataapiRequest462.params = [] || [];
    CMDGenerator(eventDataapiRequest462, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest463: any = [
      {
        type: 'apiRequest',
        dataId: 167713586748020770,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '1431995',
          pageJsonId: '537892',
          sync: false,
          actionTitle: '获取业务专区',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selUndertakeOrderType',
          _apiCode: 'selUndertakeOrderType',
          _source: 'rhin',
          _serviceId: '943051720903716864',
          _serviceTitle: '承办单类型查询接口: selUndertakeOrderType',
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
              dataKey: '1431995_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '1431995_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '1431995_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'queryType',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.queryType',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.queryType',
                  dataKey: '1431995_body.queryType',
                  value: { type: ['customize'], code: '2' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '1431995_body',
            },
          ],
        },
        line_number: 13,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167713586748068100,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '973151',
              pageJsonId: '537892',
              dataSourceId: 167713503828070050,
              dataSourceName: 'gradeSelectorListData',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '1085994',
                  code: 'activityTypeList',
                  name: '活动类型列表',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                  value: { type: [], code: '' },
                },
                {
                  attrId: '569692',
                  code: 'cityZoneList',
                  name: '地市专区',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                },
                {
                  attrId: '160574',
                  code: 'busiZoneList',
                  name: '业务专区',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                  value: {
                    type: ['customize'],
                    code: '$reply_1431995.resultData.content.typeList.typeItem$',
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
        callback2: [
          {
            type: 'customActionCode',
            dataId: 167930300634945860,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '112296',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){success([])};',
            },
            line_number: 15,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167930301651720200,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '391849',
                  pageJsonId: '537892',
                  dataSourceId: 167713503828070050,
                  dataSourceName: 'gradeSelectorListData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '1085994',
                      code: 'activityTypeList',
                      name: '活动类型列表',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '569692',
                      code: 'cityZoneList',
                      name: '地市专区',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '160574',
                      code: 'busiZoneList',
                      name: '业务专区',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: ['context', '$data_112296$'], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 16,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataapiRequest463.params = [] || [];
    CMDGenerator(eventDataapiRequest463, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest464: any = [
      {
        type: 'apiRequest',
        dataId: 167713602943174940,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9543237',
          pageJsonId: '537892',
          sync: false,
          actionTitle: '获取地市专区',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selUndertakeOrderType',
          _apiCode: 'selUndertakeOrderType',
          _source: 'rhin',
          _serviceId: '943051720903716864',
          _serviceTitle: '承办单类型查询接口: selUndertakeOrderType',
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
              dataKey: '9543237_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9543237_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9543237_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'queryType',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.queryType',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.queryType',
                  dataKey: '9543237_body.queryType',
                  value: { type: ['customize'], code: '3' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9543237_body',
            },
          ],
        },
        line_number: 17,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167713602943187900,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '1133344',
              pageJsonId: '537892',
              dataSourceId: 167713503828070050,
              dataSourceName: 'gradeSelectorListData',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '1085994',
                  code: 'activityTypeList',
                  name: '活动类型列表',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                  value: { type: [], code: '' },
                },
                {
                  attrId: '569692',
                  code: 'cityZoneList',
                  name: '地市专区',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                  value: {
                    type: ['customize'],
                    code: '$reply_9543237.resultData.content.typeList.typeItem$',
                  },
                },
                {
                  attrId: '160574',
                  code: 'busiZoneList',
                  name: '业务专区',
                  type: 'objectArray',
                  initialData: { type: 'static', value: '[]' },
                  value: { type: [], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 18,
            callback1: [
              {
                type: 'console',
                dataId: 167747768490494940,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '545367',
                  pageJsonId: '537892',
                  value: ['地市专区', '$data.gradeSelectorListData$'],
                },
                line_number: 19,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [
          {
            type: 'customActionCode',
            dataId: 167930303631660860,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '533329',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){success([])};',
            },
            line_number: 20,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167930303631639900,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '768966',
                  pageJsonId: '537892',
                  dataSourceId: 167713503828070050,
                  dataSourceName: 'gradeSelectorListData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '1085994',
                      code: 'activityTypeList',
                      name: '活动类型列表',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '569692',
                      code: 'cityZoneList',
                      name: '地市专区',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: ['context', '$data_533329$'], code: '' },
                    },
                    {
                      attrId: '160574',
                      code: 'busiZoneList',
                      name: '业务专区',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 21,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataapiRequest464.params = [] || [];
    CMDGenerator(eventDataapiRequest464, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest465: any = [
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
        line_number: 22,
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
            line_number: 23,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444018774646720,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '343439',
                  pageJsonId: '537892',
                  pathname: '/auditDealWith-PC',
                  pageId: '884773713167953920',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/auditDealWith-PC',
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
    eventDataapiRequest465.params = [] || [];
    CMDGenerator(eventDataapiRequest465, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse242: any = [
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
        line_number: 25,
        callback1: [
          {
            type: 'setValue',
            dataId: 167498167944479170,
            options: {
              compId: [
                'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303',
              ],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '1411793',
              value: '$state.itemList.approveGradeName$',
              valueList: {
                Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303:
                  '$state.itemList.approveGradeName$',
              },
              compid: [
                'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303',
              ],
            },
            line_number: 26,
            callback1: [],
          },
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit.attrList=item.attrList;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.catalogCode=item.catalogCode;data.sceneSubmit.childCatalogCode=item.childCatalogCode;data.sceneSubmit.instList=item.instList;var initGradeList=[];console.log("state.itemList",state.itemList);item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}feeObj.key=v.instCode;initGradeList.push(feeObj)}});data.initGradeList=initGradeList;console.log("\\u521D\\u59CB\\u5316\\u6863\\u6B21\\u5217\\u8868",initGradeList);success(initGradeList)};',
              actionTitle: '场景表格数据回填',
            },
            line_number: 27,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167746445647134880,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '3748619',
                  pageJsonId: '537892',
                  dataSourceId: 167746404064534980,
                  dataSourceName: 'initGradeList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '339449',
                      code: 'param',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 28,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '0671834',
                    options: {
                      context: '$state.workItemId$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168680947742592860,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 168680947746045120,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168680947746028580,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168680947746069920,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 168680947746086560,
                            children: [],
                            value: 'callback2',
                            params: [],
                          },
                        ],
                        todoOptions: ['customFuncName', 'customFuncParams'],
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '56684',
                          pageJsonId: '537892',
                          customFuncName: 'initTable',
                          customFuncParams: 'object',
                          paramsObj: { initGradeList: '$data_9981685$' },
                          paramsObjKeyValueMap: {
                            initGradeList: '$data_9981685$',
                          },
                        },
                        actionObjId: 'callSelfFunc',
                        actionObjName: 'system',
                        value: 'callSelfFunc',
                        line_number: 32,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    desc: '详情',
                    callback: [
                      {
                        type: 'callSelfFunc',
                        dataId: 168680947746028580,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '56684',
                          pageJsonId: '537892',
                          customFuncName: 'initTable',
                          customFuncParams: 'object',
                          paramsObj: { initGradeList: '$data_9981685$' },
                          paramsObjKeyValueMap: {
                            initGradeList: '$data_9981685$',
                          },
                        },
                        line_number: 32,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                line_number: 29,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 168680947746055800,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '6378125',
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
                    line_number: 30,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 168680947746014100,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '660622',
                          pageJsonId: '537892',
                          customFuncName: 'initTable',
                          customFuncParams: 'object',
                          paramsObj: {
                            tacheCode: '$reply_6378125?.resultData.traceCode$',
                            initGradeList: '$data_9981685$',
                          },
                          paramsObjKeyValueMap: {
                            tacheCode: '$reply_6378125?.resultData.traceCode$',
                            initGradeList: '$data_9981685$',
                          },
                        },
                        line_number: 31,
                        callback1: [],
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
            type: 'customActionCode',
            dataId: 166132820169451970,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '859603',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
              actionTitle: '附件值回填',
            },
            line_number: 33,
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
                line_number: 34,
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
                line_number: 35,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166987741596126900,
                    options: {
                      compId: [
                        'Table_5369494_400146',
                        'View_4949093_2824552_899078',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '410871',
                      visible: '',
                      compid: [
                        'Table_5369494_400146',
                        'View_4949093_2824552_899078',
                      ],
                    },
                    line_number: 36,
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
              code: 'function main(data,state,success,fail){var item=state.itemList;var _form={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){_form[attrList[i].attrCode]=attrList[i].attrValue}}data.saleAtyInfo=_form;console.log("\\u8425\\u9500\\u6D3B\\u52A8\\u4FE1\\u606F",_form);success(_form)};',
              actionTitle: '场景表单要素回填',
            },
            line_number: 37,
            callback1: [
              {
                type: 'setCurrentFormValues',
                dataId: 167333429266477800,
                options: {
                  compId: 'Form_190947_1873837_623598',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '565715827',
                  params: '$data_94043$',
                },
                line_number: 38,
              },
              {
                type: 'setDataSource',
                dataId: 167713803344426530,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '5688163',
                  pageJsonId: '537892',
                  dataSourceId: 166519807387797900,
                  dataSourceName: 'saleAtyInfo',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '739205',
                      code: 'activityId',
                      name: '营销活动编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['activityId'],
                      _idpath: ['739205'],
                    },
                    {
                      attrId: '252243',
                      code: 'activityName',
                      name: '营销活动名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['activityName'],
                      _idpath: ['252243'],
                    },
                    {
                      attrId: '137802',
                      code: 'activityDesc',
                      name: '营销活动描述',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['activityDesc'],
                      _idpath: ['137802'],
                    },
                  ],
                  newData: '$data_94043$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 39,
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
            line_number: 40,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166858284680591580,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '019114',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303',
                  ],
                },
                line_number: 41,
              },
              {
                type: 'setDisable',
                dataId: 166858285453218000,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '0326314',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508',
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303',
                  ],
                },
                line_number: 42,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse242.params = [] || [];
    CMDGenerator(eventDataifelse242, {}, 'ifelse', {
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
          id: 'View_537892_1_573149_701132',
          uid: 'View_537892_1_573149_701132',
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
        ref={(r: any) => (refs['View_537892_1_573149_701132'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'电渠营销案上架'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558_7410426_0513435',
            uid: 'Divider_52558_7410426_0513435',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_52558_7410426_0513435'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          className={'fixed-form-item-label-width-150'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_3483268_062749',
            uid: 'View_6806553_3483268_062749',
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
          ref={(r: any) => (refs['View_6806553_3483268_062749'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_830821_1770203',
              uid: 'HorizontalView_004602_830821_1770203',
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
            ref={(r: any) => (refs['HorizontalView_004602_830821_1770203'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_177732_031805',
                uid: 'View_339406_177732_031805',
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
              ref={(r: any) => (refs['View_339406_177732_031805'] = r)}
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_109586',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_109586',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs[
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_109586'
                  ] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'电渠营销案上架'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_63674',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_63674',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_63674'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_88437_8005128',
                    uid: 'View_6319234_3569864_15467365_781748_88437_8005128',
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
                    (refs[
                      'View_6319234_3569864_15467365_781748_88437_8005128'
                    ] = r)
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_1546303'
                    ] = r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'场景要素'}
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
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={''}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_190947_1873837_623598',
              uid: 'Form_190947_1873837_623598',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_190947_1873837_623598'] = r)}
            {...injectData}
          >
            <Input
              name={'活动编码'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'activityId'}
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
                id: 'Input_379441_56819334_28852',
                uid: 'Input_379441_56819334_28852',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_379441_56819334_28852'] = r)}
              {...injectData}
            />
            <Input
              name={'活动名称'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'activityName'}
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
                id: 'Input_0360323_306855_648804',
                uid: 'Input_0360323_306855_648804',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_0360323_306855_648804'] = r)}
              {...injectData}
            />
            <TextArea
              name={'活动描述'}
              selfSpan={24}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'activityDesc'}
              $$componentItem={{
                id: 'TextArea_56357',
                uid: 'TextArea_56357',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_56357'] = r)}
              {...injectData}
            />
          </Form>
          <Row
            name={'行容器'}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_851124_503615_8495153',
              uid: 'Row_851124_503615_8495153',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '16px 0px 0px 0px' }}
            ref={(r: any) => (refs['Row_851124_503615_8495153'] = r)}
            {...injectData}
          >
            <View
              name={'详情档次表格容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_885504',
                uid: 'View_885504',
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
              ref={(r: any) => (refs['View_885504'] = r)}
              {...injectData}
            >
              <Table
                name={'场景表格'}
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
                    title: '处理意见',
                    key: 'prodId',
                    dataIndex: 'handleIdea',
                    className: '',
                    id: '301539',
                    staticDataSource: [
                      { id: '1479646', label: '通过', value: '1' },
                      { id: '351456', label: '不通过', value: '0' },
                      { id: '7840555', label: '不通过', value: '3' },
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
                    title: '变更情况',
                    key: 'gradeCond',
                    dataIndex: 'modifyType',
                    className: 'divider',
                    id: '007768',
                    staticDataSource: [
                      { id: '6357413', label: '新建', value: '1' },
                      { id: '203874', label: '调整', value: '2' },
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
                    title: '档次编码',
                    key: 'gradeCode',
                    dataIndex: 'gradeId',
                    className: 'divider',
                    id: '545074',
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
                    title: '档次名称',
                    key: 'gradeName',
                    dataIndex: 'gradeName',
                    className: 'divider',
                    id: '996759',
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
                    title: '档次描述',
                    key: 'gradeDesc',
                    dataIndex: 'gradeDesc',
                    className: 'divider',
                    id: '617464',
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
                    title: '针对客户属性',
                    key: 'aimCustAttr',
                    dataIndex: 'guestId',
                    className: 'divider',
                    id: '811411',
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
                    title: '是否指定目标客户',
                    key: 'isAssignTagCust',
                    dataIndex: 'openObjectType',
                    className: 'divider',
                    id: '182729',
                    staticDataSource: attrDataMap['PUB_001'],
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
                    title: '营销方案生效时间',
                    key: 'saleInure',
                    dataIndex: 'gradeStartDate',
                    className: 'divider',
                    id: '7180276',
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
                dataSource={data?.gradeList}
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '7408393',
                    checked: true,
                  },
                ]}
                extend={[]}
                actionWidth={160}
                rowKey={'gradeId'}
                tableColorFormat={[
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(126, 211, 33, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '1',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(217, 0, 27, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '0',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: '#d9001b',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '3',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(126, 211, 33, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '1',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(217, 0, 27, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '0',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: '#d9001b',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '3',
                          },
                        ],
                      },
                    ],
                  },
                ]}
                dataSourceFromDataSourceConfig={'data.gradeList'}
                $$componentItem={{
                  id: 'Table_8169276',
                  uid: 'Table_8169276',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '16px 0px 16px 0px' }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal221: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 167324950367922300,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '224589',
                        pageJsonId: '537892',
                        modalname: '/yingxiaohuodongdangci5110',
                        pageId: '928551575885271040',
                        modalPath: '/yingxiaohuodongdangci5110',
                        paramsObj: {
                          promotionPlanData: '$row$',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                        },
                        paramsObjKeyValueMap: {
                          promotionPlanData: '$row$',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167514974715024400,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '93443',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){console.log("\\u5F39\\u7A97\\u786E\\u8BA4\\u56DE\\u8C03\\u53C2\\u6570",okData_224589);console.log("data.gradeList",data.gradeList);data.gradeList[index]=Object.assign(data.gradeList[index],okData_224589);success()};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167636049986569570,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '3979073',
                                pageJsonId: '537892',
                                dataSourceId: 166858698843021470,
                                dataSourceName: 'gradeList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '2738356',
                                    code: 'gradeName',
                                    name: '档次名称',
                                    type: 'string',
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '357193',
                                    code: 'gradeDesc',
                                    name: '档次描述',
                                    type: 'string',
                                    initialData: { type: 'static', value: '' },
                                  },
                                ],
                                newData: '$data_93443$',
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'console',
                                  dataId: 167714095013840200,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '307448',
                                    pageJsonId: '537892',
                                    value: ['修改完', '$data.gradeList$'],
                                  },
                                  line_number: 4,
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167714299139705250,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '085187',
                                    pageJsonId: '537892',
                                    customFuncName: 'updataSubmitDataProdList',
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
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal221.params =
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
                    eventDatashowCustomModal221,
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
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal222: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 167324945398196130,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '0519966',
                        pageJsonId: '537892',
                        modalname: '/yingxiaohuodongdangci5110',
                        pageId: '928551575885271040',
                        modalPath: '/yingxiaohuodongdangci5110',
                        paramsObj: {
                          sceneType: 'V',
                          promotionPlanData: '$row$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                        },
                        paramsObjKeyValueMap: {
                          sceneType: 'V',
                          promotionPlanData: '$row$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                          bizId: '',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal222.params =
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
                    eventDatashowCustomModal222,
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
                ref={(r: any) => (refs['Table_8169276'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'无多选档次表格容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_836897',
                uid: 'View_836897',
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
              ref={(r: any) => (refs['View_836897'] = r)}
              {...injectData}
            >
              <Table
                name={'场景表格'}
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
                    title: '处理意见',
                    dataIndex: 'handleIdea',
                    key: 'column1',
                    className: '',
                    id: '521798',
                    staticDataSource: [
                      { id: '95921', label: '通过', value: '1' },
                      { id: '112264', label: '不通过', value: '0' },
                      { id: '348484', label: '不通过', value: '3' },
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
                    title: '变更情况',
                    dataIndex: 'modifyType',
                    key: 'column2',
                    className: 'divider',
                    id: '611717',
                    staticDataSource: [
                      { id: '91611', label: '新建', value: '1' },
                      { id: '305437', label: '调整', value: '2' },
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
                    title: '档次编码',
                    dataIndex: 'gradeId',
                    key: 'column3',
                    className: 'divider',
                    id: '88102265',
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
                    title: '档次名称',
                    dataIndex: 'gradeName',
                    key: 'column4',
                    className: 'divider',
                    id: '125807',
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
                    title: '档次描述',
                    dataIndex: 'gradeDesc',
                    key: 'column5',
                    className: 'divider',
                    id: '958897',
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
                    title: '针对客户属性',
                    dataIndex: 'guestId',
                    key: 'column6',
                    className: 'divider',
                    id: '2834705',
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
                    id: '5301933',
                    title: '是否指定目标客户',
                    dataIndex: 'openObjectType',
                    key: '5301933',
                    className: 'divider',
                    staticDataSource: attrDataMap['PUB_001'],
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
                    id: '478706',
                    title: '营销方案生效时间',
                    dataIndex: 'gradeStartDate',
                    key: '478706',
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
                dataSource={''}
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '7408393',
                    checked: true,
                  },
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '9661952',
                    rule: '',
                    checked: true,
                  },
                ]}
                extend={[]}
                actionWidth={160}
                rowKey={'gradeId'}
                tableColorFormat={[
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(126, 211, 33, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '1',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(217, 0, 27, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '0',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: '#d9001b',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '3',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(126, 211, 33, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '1',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(217, 0, 27, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '0',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: '#d9001b',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '3',
                          },
                        ],
                      },
                    ],
                  },
                ]}
                $$componentItem={{
                  id: 'Table_093003_975455_588034_3119085',
                  uid: 'Table_093003_975455_588034_3119085',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '16px 0px 16px 0px' }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal223: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 167324950367922300,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '224589',
                        pageJsonId: '537892',
                        modalname: '/yingxiaohuodongdangci5110',
                        pageId: '928551575885271040',
                        modalPath: '/yingxiaohuodongdangci5110',
                        paramsObj: {
                          promotionPlanData: '$row$',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                        },
                        paramsObjKeyValueMap: {
                          promotionPlanData: '$row$',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167514974715024400,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '93443',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){console.log("\\u5F39\\u7A97\\u786E\\u8BA4\\u56DE\\u8C03\\u53C2\\u6570",okData_224589);console.log("data.gradeList",data.gradeList);data.gradeList[index]=Object.assign(data.gradeList[index],okData_224589);success(data.gradeList)};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167636049986569570,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '3979073',
                                pageJsonId: '537892',
                                dataSourceId: 166858698843021470,
                                dataSourceName: 'gradeList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '2738356',
                                    code: 'gradeName',
                                    name: '档次名称',
                                    type: 'string',
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '357193',
                                    code: 'gradeDesc',
                                    name: '档次描述',
                                    type: 'string',
                                    initialData: { type: 'static', value: '' },
                                  },
                                ],
                                newData: '$data_93443$',
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'reloadTableData',
                                  dataId: 168681302722021000,
                                  options: {
                                    compId:
                                      'Table_093003_975455_588034_3119085',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Table',
                                    id: '319967',
                                    data: '$data_93443$',
                                    total: '$data_93443.length$',
                                    current: '1',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                },
                                {
                                  type: 'console',
                                  dataId: 167714095013840200,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '307448',
                                    pageJsonId: '537892',
                                    value: ['修改完', '$data.gradeList$'],
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167714299139705250,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '085187',
                                    pageJsonId: '537892',
                                    customFuncName: 'updataSubmitDataProdList',
                                  },
                                  line_number: 6,
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
                  eventDatashowCustomModal223.params =
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
                    eventDatashowCustomModal223,
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
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal224: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 167324945398196130,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '0519966',
                        pageJsonId: '537892',
                        modalname: '/yingxiaohuodongdangci5110',
                        pageId: '928551575885271040',
                        modalPath: '/yingxiaohuodongdangci5110',
                        paramsObj: {
                          sceneType: 'V',
                          promotionPlanData: '$row$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                        },
                        paramsObjKeyValueMap: {
                          sceneType: 'V',
                          promotionPlanData: '$row$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                          bizId: '',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal224.params =
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
                    eventDatashowCustomModal224,
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
                ref={(r: any) =>
                  (refs['Table_093003_975455_588034_3119085'] = r)
                }
                {...injectData}
              />
            </View>
            <View
              name={'多选档次表格容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_836897_8898268',
                uid: 'View_836897_8898268',
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
              ref={(r: any) => (refs['View_836897_8898268'] = r)}
              {...injectData}
            >
              <Table
                name={'场景表格'}
                isFlexColumn={false}
                extendNum={1}
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
                    title: '处理意见',
                    dataIndex: 'handleIdea',
                    key: 'column1',
                    className: '',
                    id: '4199146',
                    staticDataSource: [
                      { id: '313355', label: '通过', value: '1' },
                      { id: '48969355', label: '不通过', value: '0' },
                      { id: '317181', label: '不通过', value: '3' },
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
                    title: '变更情况',
                    dataIndex: 'modifyType',
                    key: 'column2',
                    className: 'divider',
                    id: '8499276',
                    staticDataSource: [
                      { id: '891605', label: '新建', value: '1' },
                      { id: '0944', label: '调整', value: '2' },
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
                    title: '档次编码',
                    dataIndex: 'gradeId',
                    key: 'column3',
                    className: 'divider',
                    id: '6335133',
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
                    title: '档次名称',
                    dataIndex: 'gradeName',
                    key: 'column4',
                    className: 'divider',
                    id: '9565586',
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
                    title: '档次描述',
                    dataIndex: 'gradeDesc',
                    key: 'column5',
                    className: 'divider',
                    id: '017572',
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
                    title: '针对客户属性',
                    dataIndex: 'guestId',
                    key: 'column6',
                    className: 'divider',
                    id: '605662',
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
                    id: '39068793',
                    title: '是否指定目标客户',
                    dataIndex: 'openObjectType',
                    key: '39068793',
                    className: 'divider',
                    staticDataSource: attrDataMap['PUB_001'],
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
                    id: '48437444',
                    title: '营销方案生效时间',
                    dataIndex: 'gradeStartDate',
                    key: '48437444',
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
                rowSelection={{ type: 'checkbox' }}
                showHead={false}
                showTotal={false}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                dataSource={''}
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '7408393',
                    checked: true,
                  },
                ]}
                extend={[]}
                actionWidth={160}
                rowKey={'gradeId'}
                tableColorFormat={[
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(126, 211, 33, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '1',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(208, 2, 27, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '0',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: '#d9001b',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        items: [
                          {
                            code: 'handleIdea',
                            name: '处理意见',
                            operator: '=',
                            operatorName: '等于',
                            relation: '',
                            relationName: '',
                            value: '3',
                          },
                        ],
                        relation: '',
                        relationName: '',
                      },
                    ],
                  },
                ]}
                colorFormatInfo={[
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(126, 211, 33, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '1',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: 'rgba(208, 2, 27, 1)',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '0',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    formStyle: 4,
                    field: 'handleIdea',
                    foreColor: '#d9001b',
                    backColor: 'rgba(255, 255, 255, 0)',
                    conditions: [
                      {
                        relation: '',
                        items: [
                          {
                            code: 'handleIdea',
                            operator: '=',
                            relation: '',
                            value: '3',
                          },
                        ],
                      },
                    ],
                  },
                ]}
                $$componentItem={{
                  id: 'Table_093003_975455_588034',
                  uid: 'Table_093003_975455_588034',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '16px 0px 16px 0px' }}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal225: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 167324945398196130,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '0519966',
                        pageJsonId: '537892',
                        modalname: '/yingxiaohuodongdangci5110',
                        pageId: '928551575885271040',
                        modalPath: '/yingxiaohuodongdangci5110',
                        paramsObj: {
                          sceneType: 'V',
                          promotionPlanData: '$row$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                        },
                        paramsObjKeyValueMap: {
                          sceneType: 'V',
                          promotionPlanData: '$row$',
                          gradeSelectorListData: '$data.gradeSelectorListData$',
                          tacheStatus: '$data.tacheInfo.tacheStatus$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal225.params =
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
                    eventDatashowCustomModal225,
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
                ref={(r: any) => (refs['Table_093003_975455_588034'] = r)}
                {...injectData}
              />
              <View
                name={'表格按钮容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_852425',
                  uid: 'View_852425',
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
                  margin: '0px 0px 16px 0px',
                }}
                ref={(r: any) => (refs['View_852425'] = r)}
                {...injectData}
              >
                <Button
                  name={'通过'}
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
                    id: 'Button_832224',
                    uid: 'Button_832224',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc591: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167746538224324580,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '060626',
                          pageJsonId: '537892',
                          customFuncName: 'batchDeal',
                          customFuncParams: 'object',
                          paramsObj: { handleIdea: '1' },
                          paramsObjKeyValueMap: { handleIdea: '1' },
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc591.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc591,
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
                  ref={(r: any) => (refs['Button_832224'] = r)}
                  {...injectData}
                />
                <Button
                  name={'不通过'}
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
                    id: 'Button_487669',
                    uid: 'Button_487669',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc592: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167746539933339840,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '61317',
                          pageJsonId: '537892',
                          customFuncName: 'batchDeal',
                          customFuncParams: 'object',
                          paramsObj: { handleIdea: '0' },
                          paramsObjKeyValueMap: { handleIdea: '0' },
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc592.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc592,
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
                  ref={(r: any) => (refs['Button_487669'] = r)}
                  {...injectData}
                />
              </View>
            </View>
          </Row>
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
          ref={(r: any) => (refs['BOFramer_349769_535362'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsDz_0001_0001$$Page, {
  pageId: '928548392908632064',
  hasLogin: false,
  dataSource,
  defaultState: { sceneOrigin: '', workItemId: '' },
});
