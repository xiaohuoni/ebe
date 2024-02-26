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
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1031964846599802880';
const ClsCp_0002_0023$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1783384: any) => {
    const eventDatacustomActionCode116: any = [
      {
        type: 'customActionCode',
        dataId: 169338732385885100,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9111964',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_46757335;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 169338732385849630,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '964249',
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
    eventDatacustomActionCode116.params =
      [
        {
          title: '事件入参',
          name: 'options_1783384',
          value: '$options_1783384$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode116,
      { options_1783384 },
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
    const eventDataifelse186: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '989006',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169337308710677600,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 169337308710641000,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9632803',
              pageJsonId: '7946678',
              code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){if(itemList.attrList[i].attrCode=="preInvoiceAmount"&&itemList.attrList[i].attrValue!=null&&itemList.attrList[i].attrValue!=""){itemList.attrList[i].attrValue=parseFloat(itemList.attrList[i].attrValue)/100}if(itemList.attrList[i].attrCode=="customerType"&&itemList.attrList[i].attrValue!=null&&itemList.attrList[i].attrValue!=""){itemList.attrList[i].attrValue="\\u96C6\\u56E2\\u5BA2\\u6237"}form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}data.dataform=form;success(form)};',
              actionTitle: '表单加载',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 169337308710667500,
                shielding: true,
                options: {
                  compId: ['Input_195994'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '7679584',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_195994: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_195994'],
                },
                line_number: 3,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 169337316153027780,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '081753',
                  pageJsonId: '831017',
                  dataSourceId: 169337306051553440,
                  dataSourceName: 'dataform',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'customerScoreRegisteredCapital',
                      name: '注册资金客户得分',
                      type: 'string',
                      attrId: '34759',
                      initialData: {
                        type: 'static',
                        value: '注册资金客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreRegisteredCapital'],
                      _idpath: ['34759'],
                    },
                    {
                      code: 'isSafetyControlCustomerScore',
                      name: '是否具有独立的安全管控能力客户得分',
                      type: 'string',
                      attrId: '67994',
                      initialData: {
                        type: 'static',
                        value: '是否具有独立的安全管控能力客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isSafetyControlCustomerScore'],
                      _idpath: ['67994'],
                    },
                    {
                      code: 'usageScopeCustomerScore',
                      name: '使用范围客户得分',
                      type: 'string',
                      attrId: '79205',
                      initialData: {
                        type: 'static',
                        value: '使用范围客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['usageScopeCustomerScore'],
                      _idpath: ['79205'],
                    },
                    {
                      code: 'customerScoreTariffDiscounts',
                      name: '资费折扣客户得分',
                      type: 'string',
                      attrId: '88413',
                      initialData: {
                        type: 'static',
                        value: '资费折扣客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreTariffDiscounts'],
                      _idpath: ['88413'],
                    },
                    {
                      code: 'customerScoreUsageScenarios',
                      name: '使用场景客户得分',
                      type: 'string',
                      attrId: '106669',
                      initialData: {
                        type: 'static',
                        value: '使用场景客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreUsageScenarios'],
                      _idpath: ['106669'],
                    },
                    {
                      code: 'customerScoreControlMeasuresUsed',
                      name: '采用的管控措施客户得分',
                      type: 'string',
                      attrId: '132926',
                      initialData: {
                        type: 'static',
                        value: '采用的管控措施客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreControlMeasuresUsed'],
                      _idpath: ['132926'],
                    },
                    {
                      code: 'ratingRulesPackageTraffic',
                      name: '套餐流量评分细则',
                      type: 'string',
                      attrId: '139898',
                      initialData: {
                        type: 'static',
                        value: '套餐流量评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['ratingRulesPackageTraffic'],
                      _idpath: ['139898'],
                    },
                    {
                      code: 'isSceneInspectionCustomerScoring',
                      name: '是否进行现场考察评分细则',
                      type: 'string',
                      attrId: '163202',
                      initialData: {
                        type: 'static',
                        value: '是否进行现场考察评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isSceneInspectionCustomerScoring'],
                      _idpath: ['163202'],
                    },
                    {
                      code: 'isCustomerScoreCooperateHistory',
                      name: '是否有合作历史客户得分',
                      type: 'string',
                      attrId: '406092',
                      initialData: {
                        type: 'static',
                        value: '是否有合作历史客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isCustomerScoreCooperateHistory'],
                      _idpath: ['406092'],
                    },
                    {
                      code: 'isScoringRuleCooperateHistory',
                      name: '是否有合作历史评分细则',
                      type: 'string',
                      attrId: '676048',
                      initialData: {
                        type: 'static',
                        value: '是否有合作历史评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isScoringRuleCooperateHistory'],
                      _idpath: ['676048'],
                    },
                    {
                      code: 'usageScopeScoringRules',
                      name: '使用范围评分细则',
                      type: 'string',
                      attrId: '689679',
                      initialData: {
                        type: 'static',
                        value: '使用范围评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['usageScopeScoringRules'],
                      _idpath: ['689679'],
                    },
                    {
                      code: 'customerScoreAgreementPeriod',
                      name: '协议期内开卡数量客户得分',
                      type: 'string',
                      attrId: '722031',
                      initialData: {
                        type: 'static',
                        value: '协议期内开卡数量客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreAgreementPeriod'],
                      _idpath: ['722031'],
                    },
                    {
                      code: 'detailedRulesRegisteredCapital',
                      name: '注册资金评分细则',
                      type: 'string',
                      attrId: '723342',
                      initialData: {
                        type: 'static',
                        value: '注册资金评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['detailedRulesRegisteredCapital'],
                      _idpath: ['723342'],
                    },
                    {
                      code: 'scoringRulesUnitType',
                      name: '单位类型评分细则',
                      type: 'string',
                      attrId: '876812',
                      initialData: {
                        type: 'static',
                        value: '单位类型评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesUnitType'],
                      _idpath: ['876812'],
                    },
                    {
                      code: 'usageFunctionRatingRules',
                      name: '使用功能评分细则',
                      type: 'string',
                      attrId: '915375',
                      initialData: {
                        type: 'static',
                        value: '使用功能评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['usageFunctionRatingRules'],
                      _idpath: ['915375'],
                    },
                    {
                      code: 'scoringRulesBusinessLicense',
                      name: '营业执照注册时间评分细则',
                      type: 'string',
                      attrId: '930865',
                      initialData: {
                        type: 'static',
                        value: '营业执照注册时间评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesBusinessLicense'],
                      _idpath: ['930865'],
                    },
                    {
                      code: 'scoringRulesControlMeasuresUsed',
                      name: '采用的管控措施评分细则',
                      type: 'string',
                      attrId: '988165',
                      initialData: {
                        type: 'static',
                        value: '采用的管控措施评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesControlMeasuresUsed'],
                      _idpath: ['988165'],
                    },
                    {
                      code: 'customerScoreUnitType',
                      name: '单位类型客户得分',
                      type: 'string',
                      attrId: '1404595',
                      initialData: {
                        type: 'static',
                        value: '单位类型客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreUnitType'],
                      _idpath: ['1404595'],
                    },
                    {
                      code: 'isSceneInspectionScoringRules',
                      name: '是否进行现场考察评分细则',
                      type: 'string',
                      attrId: '1467954',
                      initialData: {
                        type: 'static',
                        value: '是否进行现场考察评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isSceneInspectionScoringRules'],
                      _idpath: ['1467954'],
                    },
                    {
                      code: 'scoringRulesAgreementPeriod',
                      name: '协议期内开卡数量评分细则',
                      type: 'string',
                      attrId: '1559787',
                      initialData: {
                        type: 'static',
                        value: '协议期内开卡数量评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesAgreementPeriod'],
                      _idpath: ['1559787'],
                    },
                    {
                      code: 'usageFunctionCustomerScore',
                      name: '使用功能评分细则',
                      type: 'string',
                      attrId: '2564837',
                      initialData: {
                        type: 'static',
                        value: '使用功能评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['usageFunctionCustomerScore'],
                      _idpath: ['2564837'],
                    },
                    {
                      code: 'customerScoreBusinessLicense',
                      name: '营业执照注册时间客户得分',
                      type: 'string',
                      attrId: '4739545',
                      initialData: {
                        type: 'static',
                        value: '营业执照注册时间客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreBusinessLicense'],
                      _idpath: ['4739545'],
                    },
                    {
                      code: 'customerScorePackageTraffic',
                      name: '套餐流量客户得分',
                      type: 'string',
                      attrId: '5002203',
                      initialData: {
                        type: 'static',
                        value: '套餐流量客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScorePackageTraffic'],
                      _idpath: ['5002203'],
                    },
                    {
                      code: 'scoringRulesUsageScenarios',
                      name: '使用场景评分细则',
                      type: 'string',
                      attrId: '8677207',
                      initialData: {
                        type: 'static',
                        value: '使用场景评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesUsageScenarios'],
                      _idpath: ['8677207'],
                    },
                    {
                      code: 'ratingRulesTariffDiscounts',
                      name: '资费折扣评分细则',
                      type: 'string',
                      attrId: '28047938',
                      initialData: {
                        type: 'static',
                        value: '资费折扣评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['ratingRulesTariffDiscounts'],
                      _idpath: ['28047938'],
                    },
                    {
                      code: 'HarassGovernToAuditFlowLifeCycle',
                      name: '建设骚扰治理保障名单审批单环节到达送稽核',
                      type: 'string',
                      attrId: '30123884',
                      initialData: {
                        type: 'static',
                        value: '建设骚扰治理保障名单审批单环节到达送稽核',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['HarassGovernToAuditFlowLifeCycle'],
                      _idpath: ['30123884'],
                    },
                    {
                      code: 'totalCustomerScore',
                      name: '客户总得分',
                      type: 'string',
                      attrId: '025028',
                      initialData: { type: 'static', value: '客户总得分' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['totalCustomerScore'],
                      _idpath: ['025028'],
                    },
                    {
                      code: 'isSafetyControlScoringRule',
                      name: '是否具有独立的安全管控能力评分细则',
                      type: 'string',
                      attrId: '011913',
                      initialData: {
                        type: 'static',
                        value: '是否具有独立的安全管控能力评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isSafetyControlScoringRule'],
                      _idpath: ['011913'],
                    },
                    {
                      attrId: '364015',
                      code: 'other',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['other'],
                      _idpath: ['364015'],
                    },
                    {
                      attrId: '691173',
                      code: 'reason',
                      name: '原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['691173'],
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
          {
            type: 'customActionCode',
            dataId: 169773019809448700,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '169188',
              pageJsonId: '7946678',
              code: 'function main(data,state,success,fail){console.log("=======INTER========");console.log(data);console.log(state);var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}data.dataform=form;var defaultList=[{"projectCode":"1","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u5355\\u4F4D\\u8D44\\u8D28","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u5355\\u4F4D\\u7C7B\\u578B","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"8","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"2","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u5355\\u4F4D\\u8D44\\u8D28","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u662F\\u5426\\u6709\\u5408\\u4F5C\\u5386\\u53F2","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"3","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"3","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u5355\\u4F4D\\u8D44\\u8D28","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u8425\\u4E1A\\u6267\\u7167\\u6CE8\\u518C\\u65F6\\u95F4","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"5","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"4","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u5355\\u4F4D\\u8D44\\u8D28","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u6CE8\\u518C\\u8D44\\u91D1","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"3","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"5","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u5355\\u4F4D\\u8D44\\u8D28","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u662F\\u5426\\u8FDB\\u884C\\u73B0\\u573A\\u8003\\u5BDF","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"3","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"6","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u4F7F\\u7528\\u60C5\\u51B5","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u4F7F\\u7528\\u8303\\u56F4","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"5","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"7","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u4F7F\\u7528\\u60C5\\u51B5","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u4F7F\\u7528\\u573A\\u666F","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"5","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"8","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u4F7F\\u7528\\u60C5\\u51B5","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u4F7F\\u7528\\u529F\\u80FD","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"5","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"9","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u4F7F\\u7528\\u60C5\\u51B5","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u534F\\u8BAE\\u671F\\u5185\\u5F00\\u5361\\u6570\\u91CF","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"5","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"10","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u4F7F\\u7528\\u60C5\\u51B5","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u5957\\u9910\\u6D41\\u91CF","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"5","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"11","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u8D44\\u8D39\\u6298\\u6263","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u8D44\\u8D39\\u6298\\u6263","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"20","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"12","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u5B89\\u5168\\u7BA1\\u7406\\u60C5\\u51B5","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u91C7\\u7528\\u7684\\u7BA1\\u63A7\\u63AA\\u65BD","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"30","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]},{"projectCode":"13","projectAttrList":[{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectName","attrValue":"\\u5B89\\u5168\\u7BA1\\u7406\\u60C5\\u51B5","attrName":"\\u6838\\u5B9E\\u9879\\u76EE"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"projectDetail","attrValue":"\\u662F\\u5426\\u5177\\u6709\\u72EC\\u7ACB\\u7684\\u5B89\\u5168\\u7BA1\\u63A7\\u80FD\\u529B","attrName":"\\u6838\\u5B9E\\u7EC6\\u9879"},{"attrValueDesc":"\\u5B9A\\u503C\\u65E0\\u9700\\u6539","attrCode":"maxScore","attrValue":"3","attrName":"\\u6700\\u9AD8\\u5F97\\u5206"}]}];console.log("=============DATA===========");console.log(data);console.log("===========STATE============");console.log(state);for(var i=0;i<defaultList.length;i++){var project=defaultList[i];var request=itemList.customObject.projectList;var requestProject=request.find(function(item){return item.projectCode===project.projectCode});if(requestProject){project.projectAttrList=project.projectAttrList.concat(requestProject.projectAttrList)}}itemList.customObject.projectList=defaultList;console.log("===============itemList=========");console.log(itemList);console.log("===============defaultList=========");console.log(defaultList);var projectList=[];itemList.customObject.projectList.forEach(function(v){var feeObj={};var instList=v.projectAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}feeObj.rowId=v.instCode;projectList.push(feeObj)}});data.projectList=projectList;console.log("=======result======");console.log(data);console.log(state);success(projectList)};',
            },
            line_number: 5,
            callback1: [
              {
                type: 'setValue',
                dataId: 169773019809428670,
                options: {
                  compId: ['Input_195994'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '229736',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_195994: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_195994'],
                },
                line_number: 6,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 169773019809446200,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '445539',
                  pageJsonId: '7946678',
                  dataSourceId: 169337306051553440,
                  dataSourceName: 'dataform',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'isSafetyControlCustomerScore',
                      name: '是否具有独立的安全管控能力客户得分',
                      type: 'string',
                      attrId: '67994',
                      initialData: {
                        type: 'static',
                        value: '是否具有独立的安全管控能力客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isSafetyControlCustomerScore'],
                      _idpath: ['67994'],
                    },
                    {
                      code: 'ratingRulesTariffDiscounts',
                      name: '资费折扣评分细则',
                      type: 'string',
                      attrId: '28047938',
                      initialData: {
                        type: 'static',
                        value: '资费折扣评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['ratingRulesTariffDiscounts'],
                      _idpath: ['28047938'],
                    },
                    {
                      code: 'customerScorePackageTraffic',
                      name: '套餐流量客户得分',
                      type: 'string',
                      attrId: '5002203',
                      initialData: {
                        type: 'static',
                        value: '套餐流量客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScorePackageTraffic'],
                      _idpath: ['5002203'],
                    },
                    {
                      code: 'scoringRulesAgreementPeriod',
                      name: '协议期内开卡数量评分细则',
                      type: 'string',
                      attrId: '1559787',
                      initialData: {
                        type: 'static',
                        value: '协议期内开卡数量评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesAgreementPeriod'],
                      _idpath: ['1559787'],
                    },
                    {
                      code: 'usageFunctionRatingRules',
                      name: '使用功能评分细则',
                      type: 'string',
                      attrId: '915375',
                      initialData: {
                        type: 'static',
                        value: '使用功能评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['usageFunctionRatingRules'],
                      _idpath: ['915375'],
                    },
                    {
                      code: 'customerScoreUsageScenarios',
                      name: '使用场景客户得分',
                      type: 'string',
                      attrId: '106669',
                      initialData: {
                        type: 'static',
                        value: '使用场景客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreUsageScenarios'],
                      _idpath: ['106669'],
                    },
                    {
                      code: 'usageScopeScoringRules',
                      name: '使用范围评分细则',
                      type: 'string',
                      attrId: '689679',
                      initialData: {
                        type: 'static',
                        value: '使用范围评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['usageScopeScoringRules'],
                      _idpath: ['689679'],
                    },
                    {
                      code: 'isSceneInspectionCustomerScoring',
                      name: '是否进行现场考察评分细则',
                      type: 'string',
                      attrId: '163202',
                      initialData: {
                        type: 'static',
                        value: '是否进行现场考察评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isSceneInspectionCustomerScoring'],
                      _idpath: ['163202'],
                    },
                    {
                      code: 'detailedRulesRegisteredCapital',
                      name: '注册资金评分细则',
                      type: 'string',
                      attrId: '723342',
                      initialData: {
                        type: 'static',
                        value: '注册资金评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['detailedRulesRegisteredCapital'],
                      _idpath: ['723342'],
                    },
                    {
                      code: 'totalCustomerScore',
                      name: '客户总得分',
                      type: 'string',
                      attrId: '025028',
                      initialData: { type: 'static', value: '客户总得分' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['totalCustomerScore'],
                      _idpath: ['025028'],
                    },
                    {
                      code: 'isSafetyControlScoringRule',
                      name: '是否具有独立的安全管控能力评分细则',
                      type: 'string',
                      attrId: '011913',
                      initialData: {
                        type: 'static',
                        value: '是否具有独立的安全管控能力评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isSafetyControlScoringRule'],
                      _idpath: ['011913'],
                    },
                    {
                      code: 'customerScoreControlMeasuresUsed',
                      name: '采用的管控措施客户得分',
                      type: 'string',
                      attrId: '132926',
                      initialData: {
                        type: 'static',
                        value: '采用的管控措施客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreControlMeasuresUsed'],
                      _idpath: ['132926'],
                    },
                    {
                      code: 'ratingRulesPackageTraffic',
                      name: '套餐流量评分细则',
                      type: 'string',
                      attrId: '139898',
                      initialData: {
                        type: 'static',
                        value: '套餐流量评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['ratingRulesPackageTraffic'],
                      _idpath: ['139898'],
                    },
                    {
                      code: 'scoringRulesControlMeasuresUsed',
                      name: '采用的管控措施评分细则',
                      type: 'string',
                      attrId: '988165',
                      initialData: {
                        type: 'static',
                        value: '采用的管控措施评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesControlMeasuresUsed'],
                      _idpath: ['988165'],
                    },
                    {
                      code: 'customerScoreTariffDiscounts',
                      name: '资费折扣客户得分',
                      type: 'string',
                      attrId: '88413',
                      initialData: {
                        type: 'static',
                        value: '资费折扣客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreTariffDiscounts'],
                      _idpath: ['88413'],
                    },
                    {
                      code: 'scoringRulesUsageScenarios',
                      name: '使用场景评分细则',
                      type: 'string',
                      attrId: '8677207',
                      initialData: {
                        type: 'static',
                        value: '使用场景评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesUsageScenarios'],
                      _idpath: ['8677207'],
                    },
                    {
                      code: 'customerScoreAgreementPeriod',
                      name: '协议期内开卡数量客户得分',
                      type: 'string',
                      attrId: '722031',
                      initialData: {
                        type: 'static',
                        value: '协议期内开卡数量客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreAgreementPeriod'],
                      _idpath: ['722031'],
                    },
                    {
                      code: 'isSceneInspectionScoringRules',
                      name: '是否进行现场考察评分细则',
                      type: 'string',
                      attrId: '1467954',
                      initialData: {
                        type: 'static',
                        value: '是否进行现场考察评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isSceneInspectionScoringRules'],
                      _idpath: ['1467954'],
                    },
                    {
                      code: 'usageScopeCustomerScore',
                      name: '使用范围客户得分',
                      type: 'string',
                      attrId: '79205',
                      initialData: {
                        type: 'static',
                        value: '使用范围客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['usageScopeCustomerScore'],
                      _idpath: ['79205'],
                    },
                    {
                      code: 'usageFunctionCustomerScore',
                      name: '使用功能评分细则',
                      type: 'string',
                      attrId: '2564837',
                      initialData: {
                        type: 'static',
                        value: '使用功能评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['usageFunctionCustomerScore'],
                      _idpath: ['2564837'],
                    },
                    {
                      code: 'customerScoreRegisteredCapital',
                      name: '注册资金客户得分',
                      type: 'string',
                      attrId: '34759',
                      initialData: {
                        type: 'static',
                        value: '注册资金客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreRegisteredCapital'],
                      _idpath: ['34759'],
                    },
                    {
                      code: 'scoringRulesBusinessLicense',
                      name: '营业执照注册时间评分细则',
                      type: 'string',
                      attrId: '930865',
                      initialData: {
                        type: 'static',
                        value: '营业执照注册时间评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesBusinessLicense'],
                      _idpath: ['930865'],
                    },
                    {
                      code: 'HarassGovernToAuditFlowLifeCycle',
                      name: '建设骚扰治理保障名单审批单环节到达送稽核',
                      type: 'string',
                      attrId: '30123884',
                      initialData: {
                        type: 'static',
                        value: '建设骚扰治理保障名单审批单环节到达送稽核',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['HarassGovernToAuditFlowLifeCycle'],
                      _idpath: ['30123884'],
                    },
                    {
                      code: 'customerScoreBusinessLicense',
                      name: '营业执照注册时间客户得分',
                      type: 'string',
                      attrId: '4739545',
                      initialData: {
                        type: 'static',
                        value: '营业执照注册时间客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreBusinessLicense'],
                      _idpath: ['4739545'],
                    },
                    {
                      code: 'isScoringRuleCooperateHistory',
                      name: '是否有合作历史评分细则',
                      type: 'string',
                      attrId: '676048',
                      initialData: {
                        type: 'static',
                        value: '是否有合作历史评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isScoringRuleCooperateHistory'],
                      _idpath: ['676048'],
                    },
                    {
                      code: 'isCustomerScoreCooperateHistory',
                      name: '是否有合作历史客户得分',
                      type: 'string',
                      attrId: '406092',
                      initialData: {
                        type: 'static',
                        value: '是否有合作历史客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['isCustomerScoreCooperateHistory'],
                      _idpath: ['406092'],
                    },
                    {
                      code: 'customerScoreUnitType',
                      name: '单位类型客户得分',
                      type: 'string',
                      attrId: '1404595',
                      initialData: {
                        type: 'static',
                        value: '单位类型客户得分',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['customerScoreUnitType'],
                      _idpath: ['1404595'],
                    },
                    {
                      code: 'scoringRulesUnitType',
                      name: '单位类型评分细则',
                      type: 'string',
                      attrId: '876812',
                      initialData: {
                        type: 'static',
                        value: '单位类型评分细则',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['scoringRulesUnitType'],
                      _idpath: ['876812'],
                    },
                    {
                      attrId: '364015',
                      code: 'other',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['other'],
                      _idpath: ['364015'],
                    },
                    {
                      attrId: '691173',
                      code: 'reason',
                      name: '原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['691173'],
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
                type: 'console',
                dataId: 169773019809476960,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '748469',
                  pageJsonId: '7946678',
                  value: ['======DATA=====', '$data$'],
                },
                line_number: 8,
              },
            ],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 169773028107775100,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '320831',
              pageJsonId: '831017',
              value: ['==========STATE==========', '$data$', '$state$'],
            },
            line_number: 9,
          },
        ],
      },
    ];
    eventDataifelse186.params = [] || [];
    CMDGenerator(eventDataifelse186, {}, 'ifelse', {
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
      className="__CustomClass_831017__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_831017_1',
          uid: 'View_831017_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_831017_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_3432586',
            uid: 'View_3432586',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_3432586')}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'物联网客户准入审批单'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_379535',
              uid: 'Divider_379535',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => refs.setComponentRef(r, 'Divider_379535')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_223878',
              uid: 'View_223878',
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
              overflowY: 'hidden',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_223878')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_7450078',
                uid: 'HorizontalView_7450078',
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
                height: 'auto',
                overflowY: 'hidden',
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'HorizontalView_7450078')
              }
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_454299',
                  uid: 'View_454299',
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
                  height: 'auto',
                  overflowY: 'hidden',
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_454299')}
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
                    id: 'Form_129741',
                    uid: 'Form_129741',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => refs.setComponentRef(r, 'Form_129741')}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'物联网客户准入审批单'}
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
                    tipContent={'$$'}
                    $$componentItem={{
                      id: 'Checkbox_594285',
                      uid: 'Checkbox_594285',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Checkbox_594285')}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_021995',
                      uid: 'View_021995',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_021995')}
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
                      id: 'Input_195994',
                      uid: 'Input_195994',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Input_195994')}
                    {...injectData}
                  />
                </Form>
              </View>
            </HorizontalView>
          </View>
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
                title: '核实项目',
                key: 'projectName',
                dataIndex: 'projectName',
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
                title: '核实细项',
                key: 'projectDetail',
                dataIndex: 'projectDetail',
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
                title: '最高得分',
                key: 'maxScore',
                dataIndex: 'maxScore',
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
                title: '评分细则',
                key: 'scoreRule',
                dataIndex: 'scoreRule',
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
                title: '客户得分',
                key: 'customerScore',
                dataIndex: 'customerScore',
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
            rowKeyType={'auto'}
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
            dataSource={data?.projectList}
            rowKey={undefined}
            dataSourceFromDataSourceConfig={'data.projectList'}
            $$componentItem={{
              id: 'Table_2925253',
              uid: 'Table_2925253',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            ref={(r: any) => refs.setComponentRef(r, 'Table_2925253')}
            {...injectData}
          />
          <Form
            name={'表单'}
            colSpan={12}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_48042'}
            $$componentItem={{
              id: 'Form_48042',
              uid: 'Form_48042',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '0px 0px 0px 0px',
              margin: '16px 16px 16px 16px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_48042')}
            {...injectData}
          >
            <Input
              name={'客户总得分'}
              size={'default'}
              selfSpan={12}
              labelCol={4}
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
              fieldName={'totalCustomerScore'}
              value={data?.dataform?.totalCustomerScore}
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
                id: 'Input_3708364',
                uid: 'Input_3708364',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3708364')}
              {...injectData}
            />
          </Form>
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_10902')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0023$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
