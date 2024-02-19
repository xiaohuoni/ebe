// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Form,
  Input,
  Radio,
  Row,
  Select,
  StdUpload,
  Text,
  TextArea,
  View,
} from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const AuditCommonPopup$$Modal: React.FC<PageProps> = ({
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
  forwardedRef,
}) => {
  const nextTacheChange = (options_1889766: any) => {
    // console 167308492132364500
    console.log('环节切换');
    const eventDatasetRequired2: any = [
      {
        type: 'setRequired',
        dataId: 166899833897195170,
        options: {
          compId: ['Input_668689', 'Input_668689_6608047'],
          compLib: 'comm',
          pageJsonId: '530274',
          compName: 'Input',
          id: '668015',
          required: 'true',
          compid: ['Input_668689', 'Input_668689_6608047'],
        },
        line_number: 2,
      },
    ];
    eventDatasetRequired2.params =
      [
        {
          title: '事件入参',
          name: 'options_1889766',
          value: '$options_1889766$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired2, { options_1889766 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
    const eventDataclearValue11: any = [
      {
        type: 'clearValue',
        dataId: 167323192712506020,
        options: {
          compId: 'Input_668689_6608047',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Input',
          id: '929687',
        },
        line_number: 3,
      },
    ];
    eventDataclearValue11.params =
      [
        {
          title: '事件入参',
          name: 'options_1889766',
          value: '$options_1889766$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue11, { options_1889766 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatasetVisible2: any = [
      {
        type: 'setVisible',
        dataId: 166899836476221470,
        options: {
          compId: ['Input_668689_6608047'],
          compLib: 'comm',
          pageJsonId: '530274',
          compName: 'Input',
          id: '538501',
          visible: 'true',
          compid: ['Input_668689_6608047'],
        },
        line_number: 4,
      },
    ];
    eventDatasetVisible2.params =
      [
        {
          title: '事件入参',
          name: 'options_1889766',
          value: '$options_1889766$',
        },
      ] || [];
    CMDGenerator(eventDatasetVisible2, { options_1889766 }, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const eventDatasetDataSource8: any = [
      {
        type: 'setDataSource',
        dataId: 166899844388276320,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '54999328',
          pageJsonId: '530274',
          dataSourceId: 166901264859493470,
          dataSourceName: 'userPopCtrl',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '028809',
              code: 'popupType',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['EMPTY_DATA', 'string'],
                hideAttr: true,
                code: '$EMPTY_DATA.string$',
              },
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 5,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource8.params =
      [
        {
          title: '事件入参',
          name: 'options_1889766',
          value: '$options_1889766$',
        },
      ] || [];
    CMDGenerator(
      eventDatasetDataSource8,
      { options_1889766 },
      'setDataSource',
      {
        id: 'setDataSource',
        name: 'setDataSource',
        type: 'setDataSource',
        platform: 'undefined',
      },
    );
    const eventDataifelse42: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '914282',
            options: {
              useManual: true,
              useObject: false,
              context: '$options_1889766.selectTacheCode$',
              operate: '==',
              manualValue: '_EOF',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166899912256382980,
        elseIfs: [],
        line_number: 6,
        callback1: [
          {
            type: 'setVisible',
            dataId: 166899912256365220,
            options: {
              compId: ['Input_668689', 'Input_668689_6608047'],
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '3412173',
              visible: '',
              compid: ['Input_668689', 'Input_668689_6608047'],
            },
            line_number: 7,
          },
          {
            type: 'setRequired',
            dataId: 166899912256325340,
            options: {
              compId: ['Input_668689', 'Input_668689_6608047'],
              compLib: 'comm',
              pageJsonId: '530274',
              compName: 'Input',
              id: '5617067',
              required: '',
              compid: ['Input_668689', 'Input_668689_6608047'],
            },
            line_number: 8,
          },
        ],
      },
    ];
    eventDataifelse42.params =
      [
        {
          title: '事件入参',
          name: 'options_1889766',
          value: '$options_1889766$',
        },
      ] || [];
    CMDGenerator(eventDataifelse42, { options_1889766 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacustomActionCode52: any = [
      {
        type: 'customActionCode',
        dataId: 166899953107579500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '009833',
          pageJsonId: '530274',
          code: 'function main(data,state,success,fail){var result={};if(options_1889766.nextTacheList.resultData.length){options_1889766.nextTacheList.resultData.forEach(function(nextTache){if(nextTache.tacheCode===options_1889766.selectTacheCode){result=nextTache}})}return success(result)};',
        },
        line_number: 9,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166899953107506940,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '956095',
              pageJsonId: '530274',
              dataSourceId: 166901264859493470,
              dataSourceName: 'userPopCtrl',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '028809',
                  code: 'popupType',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$data_009833$'],
                    code: 'popupType',
                  },
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
          {
            type: 'ifelse',
            condition: [
              {
                condId: '5060614',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$data_009833.hideUserSelect$',
                  operate: '==',
                  manualValue: 'Y',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166899953107564300,
            elseIfs: [],
            line_number: 11,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166899953107519650,
                options: {
                  compId: ['Input_668689', 'Input_668689_6608047'],
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'Input',
                  id: '3440015',
                  visible: '',
                  compid: ['Input_668689', 'Input_668689_6608047'],
                },
                line_number: 12,
              },
              {
                type: 'setRequired',
                dataId: 166899953107599070,
                options: {
                  compId: ['Input_668689', 'Input_668689_6608047'],
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'Input',
                  id: '940839',
                  required: '',
                  compid: ['Input_668689', 'Input_668689_6608047'],
                },
                line_number: 13,
              },
              {
                type: 'setValue',
                dataId: 166901898137955780,
                options: {
                  compId: 'Input_9206452_214088',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Input',
                  id: '75532',
                  valueList: {
                    Input_9206452_214088: '$data_009833.fixedUser$',
                  },
                },
                line_number: 14,
                callback1: [],
              },
            ],
          },
          {
            type: 'setRequired',
            dataId: 166899953107598370,
            shielding: true,
            options: {
              compId: 'StdUpload_3523188',
              compLib: 'antd',
              pageJsonId: '530274',
              compName: 'StdUpload',
              id: '08414',
              required: '',
            },
            line_number: 15,
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '5060614',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$data_009833.attachementRequired$',
                  operate: '==',
                  manualValue: 'Y',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166899953107547700,
            elseIfs: [],
            line_number: 16,
            callback1: [
              {
                type: 'setRequired',
                dataId: 166899953107538430,
                shielding: true,
                options: {
                  compId: 'StdUpload_3523188',
                  compLib: 'antd',
                  pageJsonId: '530274',
                  compName: 'StdUpload',
                  id: '10651',
                  required: 'true',
                },
                line_number: 17,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode52.params =
      [
        {
          title: '事件入参',
          name: 'options_1889766',
          value: '$options_1889766$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode52,
      { options_1889766 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
    const eventDatacallSelfFunc2: any = [
      {
        type: 'callSelfFunc',
        dataId: 169951062500308930,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '1869',
          pageJsonId: 30,
          customFuncName: 'isShowRead',
          customFuncParams: 'object',
        },
        line_number: 18,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc2.params =
      [
        {
          title: '事件入参',
          name: 'options_1889766',
          value: '$options_1889766$',
        },
      ] || [];
    CMDGenerator(eventDatacallSelfFunc2, { options_1889766 }, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
  };
  const fillTacheRemark = (options_945862: any) => {
    const eventDatasetValue3: any = [
      {
        type: 'setValue',
        dataId: 166920755536727680,
        options: {
          compId: 'TextArea_4776246_432797',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'TextArea',
          id: '811648',
          valueList: {
            TextArea_4776246_432797: '$options_945862.handleComment$',
          },
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue3.params =
      [
        {
          title: '事件入参',
          name: 'options_945862',
          value: '$options_945862$',
        },
      ] || [];
    CMDGenerator(eventDatasetValue3, { options_945862 }, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
  };
  const dealSceneEvent = (options_33718422: any) => {
    const eventDatacustomActionCode53: any = [
      {
        type: 'customActionCode',
        dataId: 167393902321148200,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '73398',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){var needDealScene=[""];var list=data.ordersSubmit.param;if(list.length){var withoutDealStatusIndex=list.findIndex(function(item){return item.dealStatus===""});if(withoutDealStatusIndex>-1){fail("\\u6863\\u6B21\\u7F16\\u7801:{".concat(list[withoutDealStatusIndex].code,"},\\u8FD8\\u6709\\u672A\\u586B\\u5199\\u7684\\u4FE1\\u606F"))}else{var agreeDealStatusIndex=list.findIndex(function(item){return item.dealStatus==="agree"});if(agreeDealStatusIndex>-1){success()}else{if(agreeDealStatusIndex){fail("\\u81F3\\u5C11\\u8981\\u6709\\u4E00\\u4E2A\\u6863\\u6B21\\u5904\\u7406\\u610F\\u89C1\\u4E3A\\u901A\\u8FC7")}else{success()}}}}else{success()}}',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode53.params =
      [
        {
          title: '事件入参',
          name: 'options_33718422',
          value: '$options_33718422$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode53,
      { options_33718422 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const CLS_DZ_0001_0001_Deal = (options_19419: any) => {
    const eventDatavalidateCurrentForm1: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167809275934224480,
        options: {
          compId: 'Form_0063102_5441816',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Form',
          id: '989877',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167809276539086750,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '20167066',
              pageJsonId: 30,
              code: 'function main(data,state,success,fail){var _Form_0063102_,_state$ordersSubmit,_state$ordersSubmit$s,_state$ordersSubmit$s2,_state$ordersSubmit$s3;var isAgree=(_Form_0063102_=Form_0063102_5441816)===null||_Form_0063102_===void 0?void 0:_Form_0063102_.tachePass;console.log("\\u662F\\u5426\\u540C\\u610F",isAgree);console.log("Form_0063102_5441816",Form_0063102_5441816);var sceneInfo=(_state$ordersSubmit=state.ordersSubmit)===null||_state$ordersSubmit===void 0?void 0:(_state$ordersSubmit$s=_state$ordersSubmit.svcCont)===null||_state$ordersSubmit$s===void 0?void 0:(_state$ordersSubmit$s2=_state$ordersSubmit$s.data)===null||_state$ordersSubmit$s2===void 0?void 0:(_state$ordersSubmit$s3=_state$ordersSubmit$s2.content)===null||_state$ordersSubmit$s3===void 0?void 0:_state$ordersSubmit$s3.itemList.find(function(item){return item.childCatalogCode==="CLS_DZ_0001_0001"||item.childCatalogCode==="CLS_DZ_0001_0002"});console.log("sceneInfo",sceneInfo);console.log("state",state);if(sceneInfo){var _sceneInfo$instList;var tacheCode=state.tacheCode;var tacheCodes=["PLAN_MANAGER","CITY_DEPT_MANAGER,MARKET_DEPT_BRANCH,CHANNEL_DEPT_MANAGER","CHANNEL_OPERATOR"];var tacheStatus=tacheCodes.findIndex(function(item){return item.indexOf(tacheCode)>-1});if(tacheStatus>-1){data.formData.isRollback="1"}console.log("tacheStatus",tacheStatus);if(((_sceneInfo$instList=sceneInfo.instList)===null||_sceneInfo$instList===void 0?void 0:_sceneInfo$instList.length)>0){var gradeList=sceneInfo.instList.map(function(item){var gradeItem={};item.instAttrList.forEach(function(instAttItem){gradeItem[instAttItem.attrCode]=instAttItem.attrValue});return gradeItem});console.log("gradeList",gradeList);if(isAgree==="pass"){var withoutDealStatusIndex=gradeList.findIndex(function(item){return!item.handleIdea});console.log("withoutDealStatusIndex",withoutDealStatusIndex);if(withoutDealStatusIndex>-1){fail("\\u8BF7\\u9009\\u62E9"+gradeList[withoutDealStatusIndex].gradeId+"\\u7684\\u5904\\u7406\\u610F\\u89C1");return}gradeList=gradeList.filter(function(item){return item.handleIdea=="1"});console.log("\\u901A\\u8FC7\\u7684-gradeList",gradeList);if(tacheStatus===0){var withoutRequiredFieldIndex=gradeList.findIndex(function(item){return!item.activityType});console.log("withoutRequiredFieldIndex",withoutRequiredFieldIndex);if(withoutRequiredFieldIndex>-1){fail("\\u8BF7\\u8865\\u5145"+gradeList[withoutRequiredFieldIndex].gradeId+"\\u4E2D\\u7684\\u5FC5\\u586B\\u4FE1\\u606F");return}}else if(tacheStatus===2){var passGradeList=gradeList.filter(function(item){return item.handleIdea=="1"});var _withoutRequiredFieldIndex=passGradeList.findIndex(function(item){return!item.activityType||!item.busiZone||!item.cityZone||!item.isIncludedRaffleChangeActivity||!item.isIncludedPopProject||!item.isIncludedServiceReminderProject||!item.moduleLinkFirst||!item.moduleLinkSecond});console.log("_withoutRequiredFieldIndex",_withoutRequiredFieldIndex);if(_withoutRequiredFieldIndex>-1){fail("\\u8BF7\\u8865\\u5145"+passGradeList[_withoutRequiredFieldIndex].gradeId+"\\u4E2D\\u7684\\u5FC5\\u586B\\u4FE1\\u606F");return}}var agreeDealStatusIndex=gradeList.findIndex(function(item){return item.handleIdea=="1"});console.log("agreeDealStatusIndex",agreeDealStatusIndex);if(agreeDealStatusIndex===-1){if(tacheStatus===0){fail("\\u81F3\\u5C11\\u8981\\u6709\\u4E00\\u4E2A\\u6863\\u6B21\\u5904\\u7406\\u610F\\u89C1\\u4E3A\\u201C\\u901A\\u8FC7\\u201D\\uFF0C\\u5168\\u4E3A\\u201C\\u4E0D\\u901A\\u8FC7\\u201D\\u65F6\\uFF0C\\u8BF7\\u9009\\u62E9\\u201C\\u4E0D\\u540C\\u610F\\u201D\\u4F5C\\u5E9F\\u6B64\\u6B21\\u5BA1\\u6279");return}else if(tacheStatus===1||tacheStatus===2){fail("\\u81F3\\u5C11\\u8981\\u6709\\u4E00\\u4E2A\\u6863\\u6B21\\u5904\\u7406\\u610F\\u89C1\\u4E3A\\u201C\\u901A\\u8FC7\\u201D\\uFF0C\\u5168\\u4E3A\\u201C\\u4E0D\\u901A\\u8FC7\\u201D\\u65F6\\uFF0C\\u8BF7\\u9009\\u62E9\\u201C\\u4E0D\\u540C\\u610F\\u201D\\u5E76\\u9000\\u56DE\\u7B56\\u5212\\u73AF\\u8282");return}}}else{var _state$ordersSubmit2,_state$ordersSubmit2$,_state$ordersSubmit2$2,_state$ordersSubmit2$3,_state$ordersSubmit2$4;state.ordersSubmit.svcCont.data.content.itemList=(_state$ordersSubmit2=state.ordersSubmit)===null||_state$ordersSubmit2===void 0?void 0:(_state$ordersSubmit2$=_state$ordersSubmit2.svcCont)===null||_state$ordersSubmit2$===void 0?void 0:(_state$ordersSubmit2$2=_state$ordersSubmit2$.data)===null||_state$ordersSubmit2$2===void 0?void 0:(_state$ordersSubmit2$3=_state$ordersSubmit2$2.content)===null||_state$ordersSubmit2$3===void 0?void 0:(_state$ordersSubmit2$4=_state$ordersSubmit2$3.itemList)===null||_state$ordersSubmit2$4===void 0?void 0:_state$ordersSubmit2$4.map(function(item){item.instList=item.instList.map(function(instItem){var hasHandleIdea=instItem.instAttrList.findIndex(function(instAttrItem){return instAttrItem.attrCode=="handleIdea"})>-1;if(hasHandleIdea){instItem.instAttrList=instItem.instAttrList.map(function(instAttrItem){if(instAttrItem.attrCode=="handleIdea"&&tacheStatus=="0"){if(sceneInfo.childCatalogCode=="CLS_DZ_0001_0002"){instAttrItem.attrValue="3"}else{instAttrItem.attrValue="0"}}else if(instAttrItem.attrCode=="handleIdea"&&instAttrItem.attrValue!="1"){if(sceneInfo.childCatalogCode=="CLS_DZ_0001_0002"){instAttrItem.attrValue="3"}else{instAttrItem.attrValue="0"}}return instAttrItem})}else{if(sceneInfo.childCatalogCode=="CLS_DZ_0001_0002"){instItem.instAttrList.push({attrCode:"handleIdea",attrName:"",attrValue:"3"})}else{instItem.instAttrList.push({attrCode:"handleIdea",attrName:"",attrValue:"0"})}}return instItem});return item})}}}success()}',
              actionTitle: '通过校验则执行原有审批处理逻辑',
            },
            line_number: 2,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 167809276539001800,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '6858342',
                  pageJsonId: 30,
                  customFuncName: 'approvalDeal',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'showMessage',
                dataId: 167809442714779400,
                shielding: true,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '672854',
                  pageJsonId: 30,
                  type: 'success',
                  value: '成功',
                },
                line_number: 4,
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 167809276539091070,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '648115',
                  pageJsonId: 30,
                  type: 'error',
                  value: '$fail_20167066$',
                },
                line_number: 5,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm1.params =
      [
        { title: '事件入参', name: 'options_19419', value: '$options_19419$' },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm1,
      { options_19419 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const approvalDeal = (options_363221: any) => {
    const eventDatavalidateCurrentForm2: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167808327732810720,
        options: {
          compId: 'Form_0063102_5441816',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Form',
          id: '972253',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168489741442625470,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '111572',
              pageJsonId: 30,
              code: 'function main(data,state,success,fail){var formData=Form_0063102_5441816;console.log("form:");console.log(formData);var tacheRemark=formData.tacheRemark||"";var tachePass=formData.tachePass;if(tachePass=="refuse"&&tacheRemark.trim()==""){fail("\\u5BA1\\u6279\\u610F\\u89C1\\u5185\\u5BB9\\u4E3A\\u7A7A");return}var handleStaff={};console.log("\\u5BA1\\u6279\\u5904\\u7406\\u5F39\\u7A97-state.ordersSubmit.svcCont",state.ordersSubmit.svcCont);if(state.ordersSubmit.svcCont!=undefined&&state.ordersSubmit.svcCont!=null){handleStaff.handleStaffCode=Form_0063102_5441816.nextStaff;handleStaff.handleStaffName=Form_0063102_5441816.nextStaffName;state.ordersSubmit.svcCont.data.content.flowInfo.tacheNode=Form_0063102_5441816.nextTache;state.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList=[];state.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList.push(handleStaff);window.localStorage.removeItem(state.ordersSubmit.svcCont.data.orderNbr)}console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u63D0\\u4EA4-isRollback",state.isRollback);console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u63D0\\u4EA4-formData",data.formData);var flowAssociationParams=undefined;if(state.isRollback=="1"){var key="gaap-flowAssociationParams-"+state.instNbr;flowAssociationParams=window.sessionStorage.getItem(key)}success(flowAssociationParams)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setLoading',
                dataId: 168489741442629220,
                options: {
                  compId: 'View_30_1',
                  compLib: 'custom',
                  pageJsonId: 30,
                  compName: 'View',
                  id: '604465',
                  loading: true,
                },
                line_number: 3,
              },
              {
                type: 'apiRequest',
                dataId: 168489741442653000,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '0065813',
                  pageJsonId: 30,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  serviceVersionId: '882904961025191936',
                  versionCode: '1.0',
                  _serviceType: 'orchestration',
                  _source: 'rhin',
                  _serviceId: '890049764606439424',
                  _serviceTitle:
                    '保存数据并流转摩卡流程-tzp: saveDataAndDealFlow',
                  params: 'object',
                  _capabilityCode: 'saveDataAndDealFlow',
                  _apiCode: 'saveDataAndDealFlow',
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
                          dataKey: '0065813_root.header',
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
                          dataKey: '0065813_root.path',
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
                          dataKey: '0065813_root.query',
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
                              code: 'nextTache',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.nextTache',
                              compType: 'Input',
                              name: 'nextTache',
                              parents: ['root', 'body'],
                              id: 'root.body.nextTache',
                              dataKey: '0065813_root.body.nextTache',
                              value: {
                                type: [
                                  'form',
                                  'Form_0063102_5441816',
                                  'getFieldsValue',
                                ],
                                code: 'nextTache',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-7',
                            },
                            {
                              code: 'tacheCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.tacheCode',
                              compType: 'Input',
                              name: 'tacheCode',
                              parents: ['root', 'body'],
                              id: 'root.body.tacheCode',
                              dataKey: '0065813_root.body.tacheCode',
                              value: {
                                type: ['datasource', 'fixedParam', 'data'],
                                code: 'tacheCode',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-13',
                            },
                            {
                              code: 'nextStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.nextStaff',
                              compType: 'Input',
                              name: 'nextStaff',
                              parents: ['root', 'body'],
                              id: 'root.body.nextStaff',
                              dataKey: '0065813_root.body.nextStaff',
                              value: {
                                type: [
                                  'form',
                                  'Form_0063102_5441816',
                                  'getFieldsValue',
                                ],
                                code: 'nextStaff',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-12',
                            },
                            {
                              code: 'workItemId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.workItemId',
                              compType: 'Input',
                              name: 'workItemId',
                              parents: ['root', 'body'],
                              id: 'root.body.workItemId',
                              dataKey: '0065813_root.body.workItemId',
                              value: {
                                type: ['datasource', 'fixedParam', 'data'],
                                code: 'workItemId',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-14',
                            },
                            {
                              code: 'parentWorkItemId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.parentWorkItemId',
                              compType: 'Input',
                              name: 'parentWorkItemId',
                              parents: ['root', 'body'],
                              id: 'root.body.parentWorkItemId',
                              dataKey: '0065813_root.body.parentWorkItemId',
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                            },
                            {
                              code: 'isRollback',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.isRollback',
                              compType: 'Input',
                              name: 'isRollback',
                              parents: ['root', 'body'],
                              id: 'root.body.isRollback',
                              dataKey: '0065813_root.body.isRollback',
                              value: {
                                type: ['datasource', 'formData', 'data'],
                                code: 'isRollback',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                            },
                            {
                              code: 'tacheRemark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.tacheRemark',
                              compType: 'Input',
                              name: 'tacheRemark',
                              parents: ['root', 'body'],
                              id: 'root.body.tacheRemark',
                              dataKey: '0065813_root.body.tacheRemark',
                              value: {
                                type: ['context', '$Form_0063102_5441816$'],
                                code: 'tacheRemark',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                            },
                            {
                              code: 'mergeTitle',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.mergeTitle',
                              compType: 'Input',
                              name: 'mergeTitle',
                              parents: ['root', 'body'],
                              id: 'root.body.mergeTitle',
                              dataKey: '0065813_root.body.mergeTitle',
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-3',
                            },
                            {
                              code: 'parentWorkId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.parentWorkId',
                              compType: 'Input',
                              name: 'parentWorkId',
                              parents: ['root', 'body'],
                              id: 'root.body.parentWorkId',
                              dataKey: '0065813_root.body.parentWorkId',
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-4',
                            },
                            {
                              code: 'orderMessage',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.orderMessage',
                              compType: 'Input',
                              name: 'orderMessage',
                              parents: ['root', 'body'],
                              id: 'root.body.orderMessage',
                              dataKey: '0065813_root.body.orderMessage',
                              value: {
                                type: ['context', '$state.ordersSubmit$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-5',
                            },
                            {
                              code: 'workId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.workId',
                              compType: 'Input',
                              name: 'workId',
                              parents: ['root', 'body'],
                              id: 'root.body.workId',
                              dataKey: '0065813_root.body.workId',
                              value: {
                                type: ['datasource', 'fixedParam', 'data'],
                                code: 'workId',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-6',
                            },
                            {
                              code: 'tachePass',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.tachePass',
                              compType: 'Input',
                              name: 'tachePass',
                              parents: ['root', 'body'],
                              id: 'root.body.tachePass',
                              dataKey: '0065813_root.body.tachePass',
                              value: {
                                type: [
                                  'form',
                                  'Form_0063102_5441816',
                                  'getFieldsValue',
                                ],
                                code: 'tachePass',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-11',
                            },
                            {
                              code: 'busiObjNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.busiObjNbr',
                              compType: 'Input',
                              name: 'busiObjNbr',
                              parents: ['root', 'body'],
                              id: 'root.body.busiObjNbr',
                              dataKey: '0065813_root.body.busiObjNbr',
                              value: {
                                type: ['datasource', 'fixedParam', 'data'],
                                code: 'busiObjNbr',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-9',
                            },
                            {
                              code: 'endLevel',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.endLevel',
                              compType: 'Input',
                              name: 'endLevel',
                              parents: ['root', 'body'],
                              id: 'root.body.endLevel',
                              dataKey: '0065813_root.body.endLevel',
                              value: {
                                type: ['datasource', 'fixedParam', 'data'],
                                code: 'endLevel',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-10',
                            },
                            {
                              code: 'tacheAttachments',
                              attrType: 'objectArray',
                              children: [
                                {
                                  code: 'fileName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.tacheAttachments.fileName',
                                  compType: 'Input',
                                  name: 'fileName',
                                  parents: ['root', 'body', 'tacheAttachments'],
                                  id: 'root.body.tacheAttachments.fileName',
                                  dataKey:
                                    '0065813_root.body.tacheAttachments.fileName',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-17',
                                  key: '0-3-17-0',
                                  parentCode: 'tacheAttachments',
                                },
                                {
                                  code: 'url',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.tacheAttachments.url',
                                  compType: 'Input',
                                  name: 'url',
                                  parents: ['root', 'body', 'tacheAttachments'],
                                  id: 'root.body.tacheAttachments.url',
                                  dataKey:
                                    '0065813_root.body.tacheAttachments.url',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-17',
                                  key: '0-3-17-1',
                                  parentCode: 'tacheAttachments',
                                },
                                {
                                  code: 'fileId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.tacheAttachments.fileId',
                                  compType: 'Input',
                                  name: 'fileId',
                                  parents: ['root', 'body', 'tacheAttachments'],
                                  id: 'root.body.tacheAttachments.fileId',
                                  dataKey:
                                    '0065813_root.body.tacheAttachments.fileId',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-17',
                                  key: '0-3-17-2',
                                  parentCode: 'tacheAttachments',
                                },
                              ],
                              _id: 'root.body.tacheAttachments',
                              compType: 'Input',
                              name: 'tacheAttachments',
                              parents: ['root', 'body'],
                              id: 'root.body.tacheAttachments',
                              dataKey: '0065813_root.body.tacheAttachments',
                              value: {
                                type: ['context', '$Form_0063102_5441816$'],
                                code: 'tacheAttachements',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-17',
                            },
                            {
                              code: 'sameList',
                              attrType: 'objectArray',
                              children: [
                                {
                                  code: 'workItemId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.workItemId',
                                  compType: 'Input',
                                  name: 'workItemId',
                                  parents: ['root', 'body', 'sameList'],
                                  id: 'root.body.sameList.workItemId',
                                  dataKey:
                                    '0065813_root.body.sameList.workItemId',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-16',
                                  key: '0-3-16-7',
                                  parentCode: 'sameList',
                                },
                                {
                                  code: 'busiObjNbr',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.busiObjNbr',
                                  compType: 'Input',
                                  name: 'busiObjNbr',
                                  parents: ['root', 'body', 'sameList'],
                                  id: 'root.body.sameList.busiObjNbr',
                                  dataKey:
                                    '0065813_root.body.sameList.busiObjNbr',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-16',
                                  key: '0-3-16-5',
                                  parentCode: 'sameList',
                                },
                                {
                                  code: 'tachePass',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.tachePass',
                                  compType: 'Input',
                                  name: 'tachePass',
                                  parents: ['root', 'body', 'sameList'],
                                  id: 'root.body.sameList.tachePass',
                                  dataKey:
                                    '0065813_root.body.sameList.tachePass',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-16',
                                  key: '0-3-16-3',
                                  parentCode: 'sameList',
                                },
                                {
                                  code: 'workId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.workId',
                                  compType: 'Input',
                                  name: 'workId',
                                  parents: ['root', 'body', 'sameList'],
                                  id: 'root.body.sameList.workId',
                                  dataKey: '0065813_root.body.sameList.workId',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-16',
                                  key: '0-3-16-6',
                                  parentCode: 'sameList',
                                },
                                {
                                  code: 'tacheRemark',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.tacheRemark',
                                  compType: 'Input',
                                  name: 'tacheRemark',
                                  parents: ['root', 'body', 'sameList'],
                                  id: 'root.body.sameList.tacheRemark',
                                  dataKey:
                                    '0065813_root.body.sameList.tacheRemark',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-16',
                                  key: '0-3-16-0',
                                  parentCode: 'sameList',
                                },
                                {
                                  code: 'nextStaff',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.nextStaff',
                                  compType: 'Input',
                                  name: 'nextStaff',
                                  parents: ['root', 'body', 'sameList'],
                                  id: 'root.body.sameList.nextStaff',
                                  dataKey:
                                    '0065813_root.body.sameList.nextStaff',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-16',
                                  key: '0-3-16-1',
                                  parentCode: 'sameList',
                                },
                                {
                                  code: 'nextTache',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.nextTache',
                                  compType: 'Input',
                                  name: 'nextTache',
                                  parents: ['root', 'body', 'sameList'],
                                  id: 'root.body.sameList.nextTache',
                                  dataKey:
                                    '0065813_root.body.sameList.nextTache',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-16',
                                  key: '0-3-16-2',
                                  parentCode: 'sameList',
                                },
                                {
                                  code: 'nextStaffName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.nextStaffName',
                                  compType: 'Input',
                                  name: 'nextStaffName',
                                  parents: ['root', 'body', 'sameList'],
                                  id: 'root.body.sameList.nextStaffName',
                                  dataKey:
                                    '0065813_root.body.sameList.nextStaffName',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-16',
                                  key: '0-3-16-4',
                                  parentCode: 'sameList',
                                },
                              ],
                              _id: 'root.body.sameList',
                              compType: 'Input',
                              name: 'sameList',
                              parents: ['root', 'body'],
                              id: 'root.body.sameList',
                              dataKey: '0065813_root.body.sameList',
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-16',
                            },
                            {
                              code: 'copyUserList',
                              attrType: 'objectArray',
                              children: [
                                {
                                  code: 'userCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.copyUserList.userCode',
                                  compType: 'Input',
                                  name: 'userCode',
                                  parents: ['root', 'body', 'copyUserList'],
                                  id: 'root.body.copyUserList.userCode',
                                  dataKey:
                                    '0065813_root.body.copyUserList.userCode',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-15',
                                  key: '0-3-15-1',
                                  parentCode: 'copyUserList',
                                },
                                {
                                  code: 'userName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.copyUserList.userName',
                                  compType: 'Input',
                                  name: 'userName',
                                  parents: ['root', 'body', 'copyUserList'],
                                  id: 'root.body.copyUserList.userName',
                                  dataKey:
                                    '0065813_root.body.copyUserList.userName',
                                  parentType: 'objectArray',
                                  parentKey: '0-3-15',
                                  key: '0-3-15-0',
                                  parentCode: 'copyUserList',
                                },
                              ],
                              _id: 'root.body.copyUserList',
                              compType: 'Input',
                              name: 'copyUserList',
                              parents: ['root', 'body'],
                              id: 'root.body.copyUserList',
                              dataKey: '0065813_root.body.copyUserList',
                              value: {
                                type: [
                                  'form',
                                  'Form_0063102_5441816',
                                  'getFieldsValue',
                                ],
                                code: 'copyUserList',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-15',
                            },
                            {
                              code: 'flowAssociationParams',
                              name: '流程流转需要的参数',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.flowAssociationParams',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-8',
                              id: 'root.body.flowAssociationParams',
                              dataKey:
                                '0065813_root.body.flowAssociationParams',
                              value: {
                                type: ['context', '$data_111572$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'root.body',
                          dataKey: '0065813_root.body',
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
                      dataKey: '0065813_root',
                    },
                  ],
                  _sourceName: '保存数据并流转摩卡流程-tzp',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '387594',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_0065813?.resultCode$',
                          operate: '==',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168489741442648960,
                    elseIfs: [],
                    line_number: 5,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '07211994',
                            options: {
                              context: '$reply_0065813?.resultData.busiObjNbr$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168489741442654660,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168489741442621800,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168489741442662800,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '941374',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '流程流转成功',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                line_number: 17,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 168489741442662800,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '941374',
                                  pageJsonId: 30,
                                  type: 'success',
                                  value: '流程流转成功',
                                },
                                line_number: 17,
                              },
                            ],
                          },
                        ],
                        line_number: 6,
                        callback1: [
                          {
                            type: 'showCustomModal',
                            dataId: 168489741442656830,
                            shielding: true,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '413001',
                              pageJsonId: 30,
                              modalname: '/auditConfirmPopup',
                              pageId: '917353379070562304',
                              paramsObj: {
                                nextStaffName:
                                  '$reply_0065813?.resultData.nextStaffName$',
                                instNbr:
                                  '$reply_0065813?.resultData.busiObjNbr$',
                                nextTacheName:
                                  '$reply_0065813?.resultData.traceName$',
                              },
                              paramsObjKeyValueMap: {
                                nextStaffName:
                                  '$reply_0065813?.resultData.nextStaffName$',
                                instNbr:
                                  '$reply_0065813?.resultData.busiObjNbr$',
                                nextTacheName:
                                  '$reply_0065813?.resultData.traceName$',
                              },
                              modalPath: '/auditConfirmPopup',
                            },
                            line_number: 7,
                            callback1: [
                              {
                                type: 'closeModal',
                                dataId: 168489741442698780,
                                shielding: true,
                                options: {
                                  compId: 'closeModal',
                                  compName: 'page',
                                  id: '569867',
                                  pageJsonId: 30,
                                },
                                line_number: 8,
                              },
                              {
                                type: 'okCallbackData',
                                dataId: 168489741442699230,
                                shielding: true,
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '0907213',
                                  pageJsonId: 30,
                                },
                                line_number: 9,
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '1972264',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context:
                                    '$reply_0065813?.resultData?.dcBusiObjInfoDTO?.childCatalogCode$',
                                  operate: '==',
                                  manualValue: 'CLS_GL_0003_0001',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169511975461337340,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 169511975761417760,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 169511976762450780,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 169511976762494180,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 169511976762421380,
                                            children: [],
                                            todoOptions: [],
                                            options: {
                                              compId: 'closeModal',
                                              compName: 'page',
                                              id: '6763685',
                                              pageJsonId: 30,
                                            },
                                            actionObjId: 'closeModal',
                                            actionObjName: 'page',
                                            value: 'closeModal',
                                            line_number: 15,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 169511976762439040,
                                            children: [],
                                            todoOptions: ['setParams'],
                                            options: {
                                              compId: 'okCallbackData',
                                              compName: 'page',
                                              id: '828667',
                                              pageJsonId: 30,
                                            },
                                            actionObjId: 'okCallbackData',
                                            actionObjName: 'page',
                                            value: 'okCallbackData',
                                            line_number: 16,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [
                                          {
                                            title: '弹窗确认回调参数',
                                            name: 'okData_680734',
                                            value: '$okData_736419$',
                                          },
                                        ],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 169511976762486100,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                      },
                                    ],
                                    todoOptions: ['modalname', 'compState'],
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '736419',
                                      pageJsonId: 30,
                                      modalname: '/auditConfirmPopup',
                                      pageId: '917353379070562304',
                                      paramsObj: {
                                        nextStaffName:
                                          '$reply_0065813?.resultData.nextStaffName$',
                                        instNbr:
                                          '$reply_0065813?.resultData.busiObjNbr$',
                                        nextTacheName:
                                          '$reply_0065813?.resultData.traceName$',
                                      },
                                      paramsObjKeyValueMap: {
                                        nextStaffName:
                                          '$reply_0065813?.resultData.nextStaffName$',
                                        instNbr:
                                          '$reply_0065813?.resultData.busiObjNbr$',
                                        nextTacheName:
                                          '$reply_0065813?.resultData.traceName$',
                                      },
                                      modalPath: '/auditConfirmPopup',
                                    },
                                    actionObjId: 'showCustomModal',
                                    actionObjName: 'page',
                                    value: 'showCustomModal',
                                    line_number: 14,
                                  },
                                ],
                                condition: [],
                                value: 'elseIf',
                                callback: [
                                  {
                                    type: 'showCustomModal',
                                    dataId: 169511976762450780,
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '736419',
                                      pageJsonId: 30,
                                      modalname: '/auditConfirmPopup',
                                      pageId: '917353379070562304',
                                      paramsObj: {
                                        nextStaffName:
                                          '$reply_0065813?.resultData.nextStaffName$',
                                        instNbr:
                                          '$reply_0065813?.resultData.busiObjNbr$',
                                        nextTacheName:
                                          '$reply_0065813?.resultData.traceName$',
                                      },
                                      paramsObjKeyValueMap: {
                                        nextStaffName:
                                          '$reply_0065813?.resultData.nextStaffName$',
                                        instNbr:
                                          '$reply_0065813?.resultData.busiObjNbr$',
                                        nextTacheName:
                                          '$reply_0065813?.resultData.traceName$',
                                      },
                                      modalPath: '/auditConfirmPopup',
                                    },
                                    line_number: 14,
                                    callback1: [
                                      {
                                        type: 'closeModal',
                                        dataId: 169511976762421380,
                                        options: {
                                          compId: 'closeModal',
                                          compName: 'page',
                                          id: '6763685',
                                          pageJsonId: 30,
                                        },
                                        line_number: 15,
                                      },
                                      {
                                        type: 'okCallbackData',
                                        dataId: 169511976762439040,
                                        options: {
                                          compId: 'okCallbackData',
                                          compName: 'page',
                                          id: '828667',
                                          pageJsonId: 30,
                                        },
                                        line_number: 16,
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 10,
                            callback1: [
                              {
                                type: 'showModal',
                                dataId: 169511989098136200,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '9387177',
                                  pageJsonId: 30,
                                  type: 'success',
                                  title: '提交成功',
                                  content: '当前会签成功，等待其他人会签结果',
                                },
                                line_number: 11,
                                callback1: [
                                  {
                                    type: 'closeModal',
                                    dataId: 169511990952578600,
                                    options: {
                                      compId: 'closeModal',
                                      compName: 'page',
                                      id: '648939',
                                      pageJsonId: 30,
                                    },
                                    line_number: 12,
                                  },
                                  {
                                    type: 'okCallbackData',
                                    dataId: 169511991259497950,
                                    options: {
                                      compId: 'okCallbackData',
                                      compName: 'page',
                                      id: '69486',
                                      pageJsonId: 30,
                                    },
                                    line_number: 13,
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
                  {
                    type: 'setLoading',
                    dataId: 168489741442644480,
                    options: {
                      compId: 'View_30_1',
                      compLib: 'custom',
                      pageJsonId: 30,
                      compName: 'View',
                      id: '2793109',
                      loading: false,
                    },
                    line_number: 18,
                  },
                ],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 168489741442657500,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '905372',
                      pageJsonId: 30,
                      type: 'error',
                      value: '流程流转失败',
                    },
                    line_number: 19,
                  },
                  {
                    type: 'setLoading',
                    dataId: 168489741442634700,
                    options: {
                      compId: 'View_30_1',
                      compLib: 'custom',
                      pageJsonId: 30,
                      compName: 'View',
                      id: '05243',
                      loading: false,
                    },
                    line_number: 20,
                  },
                ],
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 168489741442674800,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '078725',
                  pageJsonId: 30,
                  type: 'warn',
                  value: '$fail_111572$',
                },
                line_number: 21,
              },
            ],
          },
        ],
        callback2: [
          {
            type: 'showMessage',
            dataId: 167808327732850000,
            options: {
              compId: 'showMessage',
              compName: 'system',
              id: '786242',
              pageJsonId: 30,
              type: 'warn',
              value: '表单校验失败，请确认',
            },
            line_number: 22,
          },
        ],
      },
    ];
    eventDatavalidateCurrentForm2.params =
      [
        {
          title: '事件入参',
          name: 'options_363221',
          value: '$options_363221$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm2,
      { options_363221 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const CLS_JC_0003_0002_Deal = (options_389438: any) => {
    const eventDatavalidateCurrentForm3: any = [
      {
        type: 'validateCurrentForm',
        dataId: 168767408796171500,
        options: {
          compId: 'Form_0063102_5441816',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Form',
          id: '9135936',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168767411594409250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '113972',
              pageJsonId: '228228',
              code: 'function main(data,state,success,fail){var _Form_0063102_;var isAgree=(_Form_0063102_=Form_0063102_5441816)===null||_Form_0063102_===void 0?void 0:_Form_0063102_.tachePass;console.log("\\u662F\\u5426\\u540C\\u610F",isAgree);console.log("Form_0063102_5441816",Form_0063102_5441816);if(isAgree==="pass"){var _state$ordersSubmit,_state$ordersSubmit$s,_state$ordersSubmit$s2,_state$ordersSubmit$s3;var sceneInfo=(_state$ordersSubmit=state.ordersSubmit)===null||_state$ordersSubmit===void 0?void 0:(_state$ordersSubmit$s=_state$ordersSubmit.svcCont)===null||_state$ordersSubmit$s===void 0?void 0:(_state$ordersSubmit$s2=_state$ordersSubmit$s.data)===null||_state$ordersSubmit$s2===void 0?void 0:(_state$ordersSubmit$s3=_state$ordersSubmit$s2.content)===null||_state$ordersSubmit$s3===void 0?void 0:_state$ordersSubmit$s3.itemList.find(function(item){return item.childCatalogCode==="CLS_JC_0003_0002"});console.log("=======\\u7EA2\\u540D\\u5355\\u5230\\u671F-\\u573A\\u666F\\u8981\\u7D20\\u4FE1\\u606F=======",sceneInfo);if(sceneInfo){var redList=sceneInfo.instList.map(function(item){var redItem={};item.instAttrList.forEach(function(instAttItem){redItem[instAttItem.attrCode]=instAttItem.attrValue});return redItem});console.log("redList",redList);var withoutDelayIndex=redList===null||redList===void 0?void 0:redList.findIndex(function(item){return!item.isDelay});console.log("=======\\u7EA2\\u540D\\u5355\\u5230\\u671F-\\u5B58\\u5728\\u65E0\\u5EF6\\u671F\\u5217\\u8868=======",withoutDelayIndex);if(withoutDelayIndex>-1){fail("\\u8BF7\\u56DE\\u5230\\u5BA1\\u6279\\u8BE6\\u60C5\\u754C\\u9762\\uFF0C\\u5B8C\\u6210\\u7EA2\\u540D\\u5355\\u5EF6\\u671F\\u76F8\\u5173\\u4FE1\\u606F\\u586B\\u5199");return}}}success()};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 168767413626562460,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '559075',
                  pageJsonId: 30,
                  customFuncName: 'approvalDeal',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 168767414934627800,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '2348905',
                  pageJsonId: 30,
                  type: 'error',
                  value: '$fail_113972$',
                },
                line_number: 4,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm3.params =
      [
        {
          title: '事件入参',
          name: 'options_389438',
          value: '$options_389438$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm3,
      { options_389438 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const CLS_CP_0017_0001_Deal = (options_2302947: any) => {
    const eventDatavalidateCurrentForm4: any = [
      {
        type: 'validateCurrentForm',
        dataId: 168794504992245600,
        options: {
          compId: 'Form_0063102_5441816',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Form',
          id: '407182',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168794504992228400,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '489612',
              pageJsonId: 30,
              code: 'function main(data,state,success,fail){var _Form_0063102_,_state$ordersSubmit,_state$ordersSubmit$s,_state$ordersSubmit$s2,_state$ordersSubmit$s3;var isAgree=(_Form_0063102_=Form_0063102_5441816)===null||_Form_0063102_===void 0?void 0:_Form_0063102_.tachePass;console.log("\\u662F\\u5426\\u540C\\u610F",isAgree);console.log("Form_0063102_5441816",Form_0063102_5441816);var sceneInfo=(_state$ordersSubmit=state.ordersSubmit)===null||_state$ordersSubmit===void 0?void 0:(_state$ordersSubmit$s=_state$ordersSubmit.svcCont)===null||_state$ordersSubmit$s===void 0?void 0:(_state$ordersSubmit$s2=_state$ordersSubmit$s.data)===null||_state$ordersSubmit$s2===void 0?void 0:(_state$ordersSubmit$s3=_state$ordersSubmit$s2.content)===null||_state$ordersSubmit$s3===void 0?void 0:_state$ordersSubmit$s3.itemList.find(function(item){return item.childCatalogCode==="CLS_CP_0017_0001"});console.log("sceneInfo",sceneInfo);console.log("state",state);if(sceneInfo&&isAgree==="pass"){var tacheCode=state.tacheCode;if(tacheCode==="PRODUCT_CODE_APPLICATION"){data.formData.isRollback="1";var noProdAttrCodes=["ngPoId","ngPoName","ngPoDesc","ngPoClass","ngPoClassName","ngPoClassSmall","ngPoClassSmallName"];var hasNgPo=sceneInfo.attrList.findIndex(function(item){return noProdAttrCodes.indexOf(item.attrCode)>-1});console.log("\\u7701\\u5185\\u5546\\u54C1 hasNgPo",hasNgPo);if(hasNgPo===-1){fail("\\u8BF7\\u586B\\u5199\\u7701\\u5185\\u5546\\u54C1\\u4FE1\\u606F\\u5FC5\\u586B\\u9879\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u5BA1\\u6279");return}var _index=sceneInfo.attrList.findIndex(function(item){console.log("\\u7701\\u5185\\u5546\\u54C1",item.attrCode);console.log("\\u7701\\u5185\\u5546\\u54C1",item.attrValue);console.log("\\u7701\\u5185\\u5546\\u54C1",noProdAttrCodes.indexOf(item.attrCode));if(noProdAttrCodes.indexOf(item.attrCode)>-1&&!item.attrValue){return true}return false});console.log("\\u7701\\u5185\\u5546\\u54C1 _index",_index);if(_index>-1){fail("\\u8BF7\\u586B\\u5199\\u7701\\u5185\\u5546\\u54C1\\u4FE1\\u606F\\u5FC5\\u586B\\u9879\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u5BA1\\u6279");return}var productsConfigInfo=["ngProductId","ngProductName","ngProductClass","ngProductClassName","ngProductClassSmall","ngProductClassSmallName","ngProductDesc"];var _index2=sceneInfo.customObject.Products.findIndex(function(item){return!item.ngProductId||!item.ngProductName||!item.ngProductClass||!item.ngProductClassName||!item.ngProductClassSmall||!item.ngProductClassSmallName||!item.ngProductDesc});if(_index2>-1){fail("\\u8BF7\\u586B\\u5199\\u4EA7\\u54C1\\u89C4\\u683C\\u4FE1\\u606F\\u5217\\u8868\\u4E2D\\u7701\\u5185\\u4EA7\\u54C1\\u76F8\\u5173\\u4FE1\\u606F\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u5BA1\\u6279");return}}else if(tacheCode==="ACCOUNT_ITEM_APPLICATION"){data.formData.isRollback="1";var _index4=sceneInfo.customObject.chargeItemInfo.findIndex(function(item){return!item.poBillItem});if(_index4>-1){fail("\\u8BF7\\u586B\\u5199\\u5546\\u54C1\\u7EA7\\u8D39\\u7528\\u9879\\u5217\\u8868\\u4E2D\\u7701\\u5185\\u8D26\\u76EE\\u9879\\u4FE1\\u606F\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u5BA1\\u6279");return}var _index5=sceneInfo.customObject.Products.findIndex(function(item){var _item$productChargeIt;var _index3=(_item$productChargeIt=item.productChargeItemInfo)===null||_item$productChargeIt===void 0?void 0:_item$productChargeIt.findIndex(function(cItem){return!cItem.productBillItem});if(_index3>-1){return true}return false});if(_index5>-1){fail("\\u8BF7\\u586B\\u5199\\u4EA7\\u54C1\\u89C4\\u683C\\u8BE6\\u60C5\\u4FE1\\u606F\\u4E2D\\uFF0C\\u4EA7\\u54C1\\u7EA7\\u8D39\\u9879\\u4FE1\\u606F\\u7684\\u7701\\u5185\\u8D26\\u76EE\\u9879\\u4FE1\\u606F\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u5BA1\\u6279");return}}}success()}',
              actionTitle: '通过校验则执行原有审批处理逻辑',
            },
            line_number: 2,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 168794504992283680,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '856553',
                  pageJsonId: 30,
                  customFuncName: 'approvalDeal',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'showMessage',
                dataId: 168794504992219330,
                shielding: true,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '622237',
                  pageJsonId: 30,
                  type: 'success',
                  value: '成功',
                },
                line_number: 4,
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 168794504992208260,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '053502',
                  pageJsonId: 30,
                  type: 'error',
                  value: '$fail_489612$',
                },
                line_number: 5,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm4.params =
      [
        {
          title: '事件入参',
          name: 'options_2302947',
          value: '$options_2302947$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm4,
      { options_2302947 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const isShowRead = (options_46995849: any) => {
    const eventDatagetCurrentFormValues3: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 169951024618749860,
        options: {
          compId: 'Form_0063102_5441816',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Form',
          id: '85562',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.flowCode$',
                  operate: '==',
                  manualValue: 'SMS_AGENT_EXIT_CITY_FLOW',
                },
                condId: '7338688',
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
                  manualValue: 'CITY_BRANCH_LEADER',
                },
                condId: '56677',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$Form_0063102_5441816$',
                  operate: 'notEmpty',
                  manualValue: '',
                },
                condId: '884235',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  context: '$Form_0063102_5441816.nextTache$',
                  operate: '==',
                  manualValue: 'PROVINCE_GE_PROJECT_MANAGER',
                },
                condId: '8716804',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$Form_0063102_5441816.tachePass$',
                  operate: '==',
                  manualValue: 'pass',
                },
                condId: '995891',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169951025743908200,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 169951025743952830,
                children: [
                  {
                    dataName: 'action',
                    dataId: 169951025743910880,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: 'Input_668689_0650375_084025',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Input',
                      id: '214221',
                      visible: '',
                    },
                    actionObjId: 'Input_668689_0650375_084025',
                    actionObjName: 'Input',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 4,
                  },
                  {
                    dataName: 'action',
                    dataId: 169951025743965380,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 169951025743917060,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                    ],
                    todoOptions: ['compId', 'valueList'],
                    options: {
                      compId: [
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Input',
                      id: '178794',
                      valueList: {
                        Input_9206452_583366_90175265: '',
                        Input_668689_0650375_084025: '',
                      },
                      compid: [
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    actionObjId: 'Input_9206452_583366_90175265',
                    actionObjName: 'Input',
                    value: 'setValue',
                    compLib: 'comm',
                    line_number: 5,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.tacheCode$',
                      operate: '==',
                      manualValue: 'CITY_BRANCH_LEADER',
                    },
                    condId: '14415576',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.flowCode$',
                      operate: '==',
                      manualValue: 'SMS_AGENT_EXIT_CITY_FLOW',
                    },
                    condId: '118787256',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$Form_0063102_5441816$',
                      operate: 'notEmpty',
                      manualValue: 'CITY_LEADER',
                    },
                    condId: '395111',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$Form_0063102_5441816.nextTache$',
                      operate: '!=',
                      manualValue: 'PROVINCE_GE_PROJECT_MANAGER',
                    },
                    condId: '9939142',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                value: 'elseIf',
                desc: '',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 169951025743910880,
                    options: {
                      compId: 'Input_668689_0650375_084025',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Input',
                      id: '214221',
                      visible: '',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'setValue',
                    dataId: 169951025743965380,
                    options: {
                      compId: [
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Input',
                      id: '178794',
                      valueList: {
                        Input_9206452_583366_90175265: '',
                        Input_668689_0650375_084025: '',
                      },
                      compid: [
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    line_number: 5,
                    callback1: [],
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'setVisible',
                dataId: 169951025743902270,
                options: {
                  compId: 'Input_668689_0650375_084025',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Input',
                  id: '969864',
                  visible: 'true',
                },
                line_number: 3,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetCurrentFormValues3.params =
      [
        {
          title: '事件入参',
          name: 'options_46995849',
          value: '$options_46995849$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues3,
      { options_46995849 },
      'getCurrentFormValues',
      {
        id: 'getCurrentFormValues',
        name: 'getCurrentFormValues',
        type: 'getCurrentFormValues',
        platform: 'undefined',
      },
    );
  };
  const CLS_JC_0004_0003_DEAL = (options_508355: any) => {
    const eventDatavalidateCurrentForm5: any = [
      {
        type: 'validateCurrentForm',
        dataId: 170480659147300960,
        options: {
          compId: 'Form_0063102_5441816',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Form',
          id: '129542',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170480659147305800,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '159407',
              pageJsonId: 30,
              code: 'function main(data,state,success,fail){var _Form_0063102_;var isAgree=(_Form_0063102_=Form_0063102_5441816)===null||_Form_0063102_===void 0?void 0:_Form_0063102_.tachePass;console.log("sceneInfo",sceneInfo);console.log("state",state);success()}',
              actionTitle: '通过校验则执行原有审批处理逻辑',
            },
            line_number: 2,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 170480659147356600,
                shielding: true,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '756351',
                  pageJsonId: 30,
                  customFuncName: 'approvalDeal',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'showMessage',
                dataId: 170480659147340600,
                shielding: true,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '726723',
                  pageJsonId: 30,
                  type: 'success',
                  value: '成功',
                },
                line_number: 4,
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 170480659147314020,
                shielding: true,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '151052',
                  pageJsonId: 30,
                  type: 'error',
                  value: '$fail_159407$',
                },
                line_number: 5,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '347591',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.tacheCode$',
                  operate: '==',
                  manualValue: 'APPLY_FINISH',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170480682492415900,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 170480685922916930,
                children: [
                  {
                    dataName: 'action',
                    dataId: 170480686103334200,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 170480686103382100,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 170480686103311520,
                        children: [],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: ['customFuncName', 'customFuncParams'],
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '890931',
                      pageJsonId: 30,
                      customFuncName: 'approvalDeal',
                    },
                    actionObjId: 'callSelfFunc',
                    actionObjName: 'system',
                    value: 'callSelfFunc',
                    line_number: 12,
                  },
                ],
                condition: [],
                value: 'elseIf',
                callback: [
                  {
                    type: 'callSelfFunc',
                    dataId: 170480686103334200,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '890931',
                      pageJsonId: 30,
                      customFuncName: 'approvalDeal',
                    },
                    line_number: 12,
                    callback1: [],
                    callback2: [],
                  },
                ],
              },
            ],
            line_number: 6,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 170480687047391420,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '636852',
                  pageJsonId: 30,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'queryBusiObjItemByOrderNbr',
                  _apiCode: 'queryBusiObjItemByOrderNbr',
                  _source: 'rhin',
                  _sourceName: '根据审批单号查询DcBusiObjItemDTO',
                  _serviceId: '1061974540563865600',
                  _serviceTitle:
                    '根据审批单号查询DcBusiObjItemDTO: queryBusiObjItemByOrderNbr',
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
                          dataKey: '636852_root.header',
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
                          dataKey: '636852_root.path',
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
                          dataKey: '636852_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'busiObjNbr',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.busiObjNbr',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.busiObjNbr',
                              dataKey: '636852_root.body.busiObjNbr',
                              value: {
                                type: ['context', '$state.busiObjNbr$'],
                                code: '',
                              },
                            },
                            {
                              code: 'childCatalogCode',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.childCatalogCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.childCatalogCode',
                              dataKey: '636852_root.body.childCatalogCode',
                              value: {
                                type: ['customize'],
                                code: 'CLS_JC_0004_0003',
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
                          dataKey: '636852_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '636852_root',
                    },
                  ],
                  params: 'object',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 170480694085294370,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '265216',
                      pageJsonId: 30,
                      code: 'function main(data,state,success,fail){var _response$resultData;var response=reply_636852;if(response!==null&&response!==void 0&&(_response$resultData=response.resultData)!==null&&_response$resultData!==void 0&&_response$resultData.dcBusiObjItemAttrList){for(var i=0;i<(response===null||response===void 0?void 0:(_response$resultData2=response.resultData)===null||_response$resultData2===void 0?void 0:_response$resultData2.dcBusiObjItemAttrList.length);++i){var _response$resultData2,_response$resultData3;var dcBusiObjItemAttr=response===null||response===void 0?void 0:(_response$resultData3=response.resultData)===null||_response$resultData3===void 0?void 0:_response$resultData3.dcBusiObjItemAttrList[i];if(dcBusiObjItemAttr.attrCode=="acceptResult"&&"1"==dcBusiObjItemAttr.attrValue){success();return}}}fail("\\u91CD\\u8981\\u6210\\u5458\\u672A\\u5168\\u90E8\\u53D7\\u7406\\u6210\\u529F,\\u65E0\\u6CD5\\u8FDB\\u884C\\u5F52\\u6863\\u63D0\\u4EA4")};',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 170480704795541900,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2730763',
                          pageJsonId: 30,
                          customFuncName: 'approvalDeal',
                        },
                        line_number: 9,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'showMessage',
                        dataId: 170480705771912500,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '3750103',
                          pageJsonId: 30,
                          type: 'success',
                          value: '成功',
                        },
                        line_number: 10,
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 170480706328462600,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '8838364',
                          pageJsonId: 30,
                          type: 'info',
                          value: '$fail_265216$',
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
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm5.params =
      [
        {
          title: '事件入参',
          name: 'options_508355',
          value: '$options_508355$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm5,
      { options_508355 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const setNetValue = (options_924679: any) => {
    const eventDatagetValue43: any = [
      {
        type: 'getValue',
        dataId: 170493831696476500,
        options: {
          compId: 'Radio_774135_211748',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Radio',
          id: '617146',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '8623089',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$value_617146$',
                  operate: '==',
                  manualValue: 'refuse',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170493836253429660,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 170493837580722750,
                children: [
                  {
                    dataName: 'action',
                    dataId: 170493838043812900,
                    children: [],
                    todoOptions: ['msgType', 'value', 'duration'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '577904',
                      pageJsonId: 30,
                      type: 'info',
                      value: '不同意时才可选择',
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
                    dataId: 170493838043812900,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '577904',
                      pageJsonId: 30,
                      type: 'info',
                      value: '不同意时才可选择',
                    },
                    line_number: 6,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 170493859381306720,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '275968',
                  pageJsonId: '2540494',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  customFuncName: 'fillTacheRemark',
                  customFuncParams: '$options_924679$',
                  modalPath: '/flow/audit',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 170493901625966140,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '842286',
                  pageJsonId: 30,
                  value: ['审批意见赋值--事件入参-', '$options_924679$'],
                },
                line_number: 4,
              },
              {
                type: 'setValue',
                dataId: 170493910640213470,
                options: {
                  compId: 'TextArea_4776246_432797',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'TextArea',
                  id: '4325807',
                  valueList: {
                    TextArea_4776246_432797:
                      '$options_924679.row.handleComment$',
                  },
                },
                line_number: 5,
                callback1: [],
              },
            ],
          },
          {
            type: 'console',
            dataId: 170493841454586700,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '35880466',
              pageJsonId: 30,
              value: ['是否通过', '$value_617146$'],
            },
            line_number: 7,
          },
        ],
      },
    ];
    eventDatagetValue43.params =
      [
        {
          title: '事件入参',
          name: 'options_924679',
          value: '$options_924679$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue43, { options_924679 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    nextTacheChange,
    fillTacheRemark,
    dealSceneEvent,
    CLS_DZ_0001_0001_Deal,
    approvalDeal,
    CLS_JC_0003_0002_Deal,
    CLS_CP_0017_0001_Deal,
    isShowRead,
    CLS_JC_0004_0003_DEAL,
    setNetValue,
  }));

  useEffect(() => {
    // console 167747799849010340
    console.log('审批处理弹窗-state', state);
    const eventDatasetVisible12: any = [
      {
        type: 'setVisible',
        dataId: 169681765076523600,
        options: {
          compId: ['Input_668689_0650375', 'Input_668689_0650375_084025'],
          compLib: 'comm',
          pageJsonId: '530274',
          compName: 'Input',
          id: '134554',
          visible: '',
          compid: ['Input_668689_0650375', 'Input_668689_0650375_084025'],
        },
        line_number: 2,
      },
    ];
    eventDatasetVisible12.params = [] || [];
    CMDGenerator(eventDatasetVisible12, {}, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const eventDataifelse109: any = [
      {
        type: 'ifelse',
        condition: [
          {
            options: { context: '$state.tacheCode$', operate: 'notEmpty' },
            condId: '29876',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166899596126493630,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166899596126549660,
            children: [
              {
                dataName: 'action',
                dataId: 166901046082642200,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 166901046082678530,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                ],
                todoOptions: ['compId', 'valueList'],
                options: {
                  compId: 'TextArea_4776246_432797',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'TextArea',
                  id: '7529063',
                  valueList: {
                    TextArea_4776246_432797: '$state.optResultDesc$',
                  },
                },
                actionObjId: 'TextArea_4776246_432797',
                actionObjName: 'TextArea',
                value: 'setValue',
                compLib: 'comm',
                line_number: 51,
              },
            ],
            condition: [
              {
                options: {
                  context: '$state.optResultDesc$',
                  operate: 'notEmpty',
                },
                condId: '9920066',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '处理意见变更时',
            callback: [
              {
                type: 'setValue',
                dataId: 166901046082642200,
                options: {
                  compId: 'TextArea_4776246_432797',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'TextArea',
                  id: '7529063',
                  valueList: {
                    TextArea_4776246_432797: '$state.optResultDesc$',
                  },
                },
                line_number: 51,
                callback1: [],
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
                condId: '879687',
                options: {
                  context: '$state.optResultDesc$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170167186774134530,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 170167191059142530,
                children: [
                  {
                    dataName: 'action',
                    dataId: 170167191899863170,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 170167191899884800,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                    ],
                    todoOptions: ['compId', 'valueList'],
                    options: {
                      compId: 'TextArea_4776246_432797',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'TextArea',
                      id: '019445',
                      valueList: { TextArea_4776246_432797: '同意' },
                    },
                    actionObjId: 'TextArea_4776246_432797',
                    actionObjName: 'TextArea',
                    value: 'setValue',
                    compLib: 'comm',
                    line_number: 6,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.hidePass$',
                      operate: '!=',
                      manualValue: 'Y',
                    },
                    condId: '412946',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                value: 'elseIf',
                desc: '否则如果有同意与不同意选项，赋值为同意',
                callback: [
                  {
                    type: 'setValue',
                    dataId: 170167191899863170,
                    options: {
                      compId: 'TextArea_4776246_432797',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'TextArea',
                      id: '019445',
                      valueList: { TextArea_4776246_432797: '同意' },
                    },
                    line_number: 6,
                    callback1: [],
                  },
                ],
              },
            ],
            line_number: 4,
            callback1: [
              {
                type: 'setValue',
                dataId: 170167190348257730,
                options: {
                  compId: 'TextArea_4776246_432797',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'TextArea',
                  id: '842054',
                  valueList: {
                    TextArea_4776246_432797: '$state.optResultDesc$',
                  },
                },
                line_number: 5,
                callback1: [],
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '400362',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.hidePass$',
                  operate: '==',
                  manualValue: 'Y',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166899596126483070,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 169477191550262530,
                children: [
                  {
                    dataName: 'action',
                    dataId: 169477192037633570,
                    children: [],
                    todoOptions: ['required', 'selectComp'],
                    options: {
                      compId: 'TextArea_4776246_432797',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'TextArea',
                      id: '8376432',
                      required: 'true',
                    },
                    actionObjId: 'TextArea_4776246_432797',
                    actionObjName: 'TextArea',
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
                    dataId: 169477192037633570,
                    options: {
                      compId: 'TextArea_4776246_432797',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'TextArea',
                      id: '8376432',
                      required: 'true',
                    },
                    line_number: 9,
                  },
                ],
              },
            ],
            line_number: 7,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166899596126452800,
                options: {
                  compId: ['Radio_774135', 'Radio_774135_211748'],
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'Radio',
                  id: '245886',
                  visible: '',
                  compid: ['Radio_774135', 'Radio_774135_211748'],
                },
                line_number: 8,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '400362',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.readHandleType$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166899596126488030,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166899596126483040,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166899596126491330,
                    children: [],
                    todoOptions: ['visible'],
                    options: {
                      compId: [
                        'Input_668689_0650375',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '584867',
                      visible: 'true',
                      compid: [
                        'Input_668689_0650375',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    actionObjId: 'Input_668689_0650375',
                    actionObjName: 'Input',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 13,
                  },
                  {
                    dataName: 'action',
                    dataId: 166899596126493280,
                    children: [],
                    todoOptions: ['required'],
                    options: {
                      compId: [
                        'Input_668689_0650375',
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '3203135',
                      required: '',
                      compid: [
                        'Input_668689_0650375',
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    actionObjId: 'Input_668689_0650375',
                    actionObjName: 'Input',
                    value: 'setRequired',
                    compLib: 'comm',
                    line_number: 14,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.readHandleType$',
                      operate: '==',
                      manualValue: '1',
                    },
                    condId: '355009',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '选择阅办(1)',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 166899596126491330,
                    options: {
                      compId: [
                        'Input_668689_0650375',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '584867',
                      visible: 'true',
                      compid: [
                        'Input_668689_0650375',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    line_number: 13,
                  },
                  {
                    type: 'setRequired',
                    dataId: 166899596126493280,
                    options: {
                      compId: [
                        'Input_668689_0650375',
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '3203135',
                      required: '',
                      compid: [
                        'Input_668689_0650375',
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    line_number: 14,
                  },
                ],
              },
              {
                dataName: 'elseIf',
                dataId: 166899596126418080,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166899596126440700,
                    children: [],
                    todoOptions: ['visible'],
                    options: {
                      compId: [
                        'Input_668689_0650375',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '010939',
                      visible: 'true',
                      compid: [
                        'Input_668689_0650375',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    actionObjId: 'Input_668689_0650375',
                    actionObjName: 'Input',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 15,
                  },
                  {
                    dataName: 'action',
                    dataId: 166899596126409900,
                    children: [],
                    todoOptions: ['required'],
                    options: {
                      compId: [
                        'Input_668689_0650375',
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '650682',
                      required: 'true',
                      compid: [
                        'Input_668689_0650375',
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    actionObjId: 'Input_668689_0650375',
                    actionObjName: 'Input',
                    value: 'setRequired',
                    compLib: 'comm',
                    line_number: 16,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.readHandleType$',
                      operate: '==',
                      manualValue: '2',
                    },
                    condId: '938819',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '强制阅办(2)',
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 166899596126440700,
                    options: {
                      compId: [
                        'Input_668689_0650375',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '010939',
                      visible: 'true',
                      compid: [
                        'Input_668689_0650375',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    line_number: 15,
                  },
                  {
                    type: 'setRequired',
                    dataId: 166899596126409900,
                    options: {
                      compId: [
                        'Input_668689_0650375',
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                      compLib: 'comm',
                      pageJsonId: '530274',
                      compName: 'Input',
                      id: '650682',
                      required: 'true',
                      compid: [
                        'Input_668689_0650375',
                        'Input_9206452_583366_90175265',
                        'Input_668689_0650375_084025',
                      ],
                    },
                    line_number: 16,
                  },
                ],
              },
            ],
            line_number: 10,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166899596126410660,
                options: {
                  compId: [
                    'Input_668689_0650375',
                    'Input_668689_0650375_084025',
                  ],
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'Input',
                  id: '588368',
                  visible: '',
                  compid: [
                    'Input_668689_0650375',
                    'Input_668689_0650375_084025',
                  ],
                },
                line_number: 11,
              },
              {
                type: 'setRequired',
                dataId: 166899596126464670,
                options: {
                  compId: [
                    'Input_668689_0650375',
                    'Input_9206452_583366_90175265',
                    'Input_668689_0650375_084025',
                  ],
                  compLib: 'comm',
                  pageJsonId: '530274',
                  compName: 'Input',
                  id: '525729',
                  required: '',
                  compid: [
                    'Input_668689_0650375',
                    'Input_9206452_583366_90175265',
                    'Input_668689_0650375_084025',
                  ],
                },
                line_number: 12,
              },
            ],
          },
          {
            type: 'setDataSource',
            dataId: 166899596126526660,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '142523',
              pageJsonId: '530274',
              dataSourceId: 166899946028154100,
              dataSourceName: 'fixedParam',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '714046',
                  code: 'endLevel',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.endLevel$'], code: '' },
                },
                {
                  attrId: '780846',
                  code: 'tacheCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.tacheCode$'], code: '' },
                },
                {
                  attrId: '376666',
                  code: 'firstTacheFlag',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.firstTacheFlag$'],
                    code: '',
                  },
                },
                {
                  attrId: '5555417',
                  code: 'flowCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.flowCode$'], code: '' },
                },
                {
                  attrId: '676017',
                  code: 'readHandleType',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.readHandleType$'],
                    code: '',
                  },
                },
                {
                  attrId: '734868',
                  code: 'workItemId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.workItemId$'], code: '' },
                },
                {
                  attrId: '570592',
                  code: 'hidePass',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.hidePass$'], code: '' },
                },
                {
                  attrId: '964184',
                  code: 'workId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.workId$'], code: '' },
                },
                {
                  attrId: '1464807',
                  code: 'busiObjNbr',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.busiObjNbr$'], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 17,
            callback1: [],
            callback2: [],
          },
          {
            type: 'setDataSource',
            dataId: 166920775722231140,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '941545',
              pageJsonId: 30,
              dataSourceId: 166920773432750430,
              dataSourceName: 'formData',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '990657',
                  code: 'ordersSubmit',
                  name: '属性',
                  type: 'object',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.ordersSubmit$'],
                    code: '',
                  },
                },
                {
                  attrId: '49774121',
                  code: 'isRollback',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$state.isRollback$'], code: '' },
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
                dataId: 168059563939037630,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '6165505',
                  pageJsonId: 30,
                  value: ['审批处理-formdata', '$data.formData$'],
                },
                line_number: 19,
              },
              {
                type: 'console',
                dataId: 168059567098222270,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '347824',
                  pageJsonId: 30,
                  value: ['审批处理-组件状态 isRollback', '$state.isRollback$'],
                },
                line_number: 20,
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 170591106516182460,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '7298258',
              pageJsonId: 30,
              code: 'function main(data,state,success,fail){if(state.isRollback=="1"){success()}else{fail()}};',
              actionTitle: '如果是回退起草人，获取并设置流程流转参数',
            },
            line_number: 21,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 170591106516153600,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '5568597',
                  pageJsonId: 30,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'extractFlowAssociationParams',
                  _apiCode: 'extractFlowAssociationParams',
                  _source: 'rhin',
                  _sourceName: '提取流程流转参数-hyj',
                  _serviceId: '1065566140853374976',
                  _serviceTitle:
                    '提取流程流转参数-hyj: extractFlowAssociationParams',
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
                          dataKey: '522635_root.header',
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
                          dataKey: '522635_root.path',
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
                          dataKey: '522635_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'svcCont',
                              name: '新增节点',
                              attrType: 'object',
                              _id: 'root.body.svcCont',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.svcCont',
                              dataKey: '522635_root.body.svcCont',
                              value: {
                                type: ['context', '$state.ordersSubmit$'],
                                code: 'svcCont',
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
                          dataKey: '522635_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '522635_root',
                    },
                  ],
                  params: 'object',
                },
                line_number: 22,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 170591106516194940,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '702132',
                      pageJsonId: 30,
                      dataSourceId: 170424776141239040,
                      dataSourceName: 'pageData',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '696574',
                          code: 'flowAssociationParams',
                          name: '流程流转需要的参数',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: {
                            type: ['context', '$reply_5568597?.resultData$'],
                            code: '',
                            hideAttr: true,
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 23,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'reloadDataSource',
                    dataId: 170591108570103420,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '84942',
                      pageJsonId: '530274',
                      dataSourceId: 166899604180262620,
                      dataSourceName: 'nextTacheList',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '4067582',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          key: 'header',
                          _codePath: ['header'],
                          _idpath: ['4067582'],
                        },
                        {
                          attrId: '8239965',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          key: 'path',
                          _codePath: ['path'],
                          _idpath: ['8239965'],
                        },
                        {
                          attrId: '963245',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          key: 'query',
                          _codePath: ['query'],
                          _idpath: ['963245'],
                        },
                        {
                          attrId: '2028282',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '104702',
                              code: 'tacheCode',
                              name: 'tacheCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.tacheCode',
                              _codePath: ['body', 'tacheCode'],
                              _idpath: ['2028282', '104702'],
                            },
                            {
                              attrId: '054334',
                              code: 'flowCode',
                              name: 'flowCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.flowCode',
                              _codePath: ['body', 'flowCode'],
                              _idpath: ['2028282', '054334'],
                            },
                            {
                              attrId: '77602',
                              code: 'tachePass',
                              name: 'tachePass',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.tachePass',
                              value: {
                                type: [
                                  'form',
                                  'Form_0063102_5441816',
                                  'getFieldsValue',
                                ],
                                code: 'tachePass',
                              },
                              _codePath: ['body', 'tachePass'],
                              _idpath: ['2028282', '77602'],
                            },
                            {
                              attrId: '007501',
                              code: 'endLevel',
                              name: 'endLevel',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.endLevel',
                              value: {
                                type: ['context', '$state.endLevel$'],
                                code: '',
                              },
                              _codePath: ['body', 'endLevel'],
                              _idpath: ['2028282', '007501'],
                            },
                            {
                              attrId: '447578',
                              code: 'orderType',
                              name: 'orderType',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.orderType',
                              _codePath: ['body', 'orderType'],
                              _idpath: ['2028282', '447578'],
                            },
                            {
                              attrId: '1950086',
                              code: 'workId',
                              name: 'workId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.workId',
                              _codePath: ['body', 'workId'],
                              _idpath: ['2028282', '1950086'],
                            },
                            {
                              attrId: '44774524',
                              code: 'workItemId',
                              name: 'workItemId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.workItemId',
                              value: {
                                type: ['context', '$state.workItemId$'],
                                code: '',
                              },
                              _codePath: ['body', 'workItemId'],
                              _idpath: ['2028282', '44774524'],
                            },
                            {
                              attrId: '055846',
                              code: 'flowAssociationParams',
                              name: '流程相关的页面参数',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'flowAssociationParams'],
                              _idpath: ['2028282', '055846'],
                              value: {
                                type: [
                                  'context',
                                  '$reply_5568597?.resultData$',
                                ],
                                code: '',
                                hideAttr: true,
                              },
                            },
                            {
                              attrId: '67828',
                              code: 'level',
                              name: '最高审批等级',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'level'],
                              _idpath: ['2028282', '67828'],
                            },
                            {
                              attrId: '259759',
                              code: 'sameList',
                              name: 'sameList',
                              type: 'objectArray',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              children: [
                                {
                                  attrId: '811219',
                                  code: 'meetingRemark',
                                  name: 'meetingRemark',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'meetingRemark',
                                  ],
                                  _idpath: ['2028282', '259759', '811219'],
                                },
                                {
                                  attrId: '6113832',
                                  code: 'nextStaff',
                                  name: 'nextStaff',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'nextStaff'],
                                  _idpath: ['2028282', '259759', '6113832'],
                                },
                                {
                                  attrId: '984343',
                                  code: 'createStaff',
                                  name: 'createStaff',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'createStaff',
                                  ],
                                  _idpath: ['2028282', '259759', '984343'],
                                },
                                {
                                  attrId: '780118',
                                  code: 'createStaffName',
                                  name: 'createStaffName',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'createStaffName',
                                  ],
                                  _idpath: ['2028282', '259759', '780118'],
                                },
                                {
                                  attrId: '6253935',
                                  code: 'createTime',
                                  name: 'createTime',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'createTime'],
                                  _idpath: ['2028282', '259759', '6253935'],
                                },
                                {
                                  attrId: '337065',
                                  code: 'effectDate',
                                  name: 'effectDate',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'effectDate'],
                                  _idpath: ['2028282', '259759', '337065'],
                                },
                                {
                                  attrId: '637292',
                                  code: 'handleObjCode',
                                  name: 'handleObjCode',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'handleObjCode',
                                  ],
                                  _idpath: ['2028282', '259759', '637292'],
                                },
                                {
                                  attrId: '59523',
                                  code: 'nextStaffName',
                                  name: 'nextStaffName',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'nextStaffName',
                                  ],
                                  _idpath: ['2028282', '259759', '59523'],
                                },
                                {
                                  attrId: '2144276',
                                  code: 'nextTache',
                                  name: 'nextTache',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'nextTache'],
                                  _idpath: ['2028282', '259759', '2144276'],
                                },
                                {
                                  attrId: '4793034',
                                  code: 'approveOrdNbr',
                                  name: 'approveOrdNbr',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'approveOrdNbr',
                                  ],
                                  _idpath: ['2028282', '259759', '4793034'],
                                },
                                {
                                  attrId: '051125',
                                  code: 'busiObjStatus',
                                  name: 'busiObjStatus',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'busiObjStatus',
                                  ],
                                  _idpath: ['2028282', '259759', '051125'],
                                },
                                {
                                  attrId: '227237',
                                  code: 'busiObjSubType',
                                  name: 'busiObjSubType',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'busiObjSubType',
                                  ],
                                  _idpath: ['2028282', '259759', '227237'],
                                },
                                {
                                  attrId: '008727',
                                  code: 'lastHandleTime',
                                  name: 'lastHandleTime',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'lastHandleTime',
                                  ],
                                  _idpath: ['2028282', '259759', '008727'],
                                },
                                {
                                  attrId: '311233',
                                  code: 'workId',
                                  name: 'workId',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'workId'],
                                  _idpath: ['2028282', '259759', '311233'],
                                },
                                {
                                  attrId: '2347154',
                                  code: 'workItemId',
                                  name: 'workItemId',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'workItemId'],
                                  _idpath: ['2028282', '259759', '2347154'],
                                },
                                {
                                  attrId: '5904394',
                                  code: 'tacheCode',
                                  name: 'tacheCode',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'tacheCode'],
                                  _idpath: ['2028282', '259759', '5904394'],
                                },
                                {
                                  attrId: '0060695',
                                  code: 'tacheName',
                                  name: 'tacheName',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'tacheName'],
                                  _idpath: ['2028282', '259759', '0060695'],
                                },
                                {
                                  attrId: '9728522',
                                  code: 'tachePass',
                                  name: 'tachePass',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'tachePass'],
                                  _idpath: ['2028282', '259759', '9728522'],
                                },
                                {
                                  attrId: '39711129',
                                  code: 'tacheRemark',
                                  name: 'tacheRemark',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'tacheRemark',
                                  ],
                                  _idpath: ['2028282', '259759', '39711129'],
                                },
                                {
                                  attrId: '565718',
                                  code: 'handleStaffName',
                                  name: 'handleStaffName',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'handleStaffName',
                                  ],
                                  _idpath: ['2028282', '259759', '565718'],
                                },
                                {
                                  attrId: '98636',
                                  code: 'keyId',
                                  name: 'keyId',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'keyId'],
                                  _idpath: ['2028282', '259759', '98636'],
                                },
                                {
                                  attrId: '2039836',
                                  code: 'title',
                                  name: 'title',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'sameList', 'title'],
                                  _idpath: ['2028282', '259759', '2039836'],
                                },
                                {
                                  attrId: '560007',
                                  code: 'handleObjType',
                                  name: 'handleObjType',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: [
                                    'body',
                                    'sameList',
                                    'handleObjType',
                                  ],
                                  _idpath: ['2028282', '259759', '560007'],
                                },
                              ],
                              _codePath: ['body', 'sameList'],
                              _idpath: ['2028282', '259759'],
                            },
                          ],
                          key: 'body',
                          _codePath: ['body'],
                          _idpath: ['2028282'],
                        },
                      ],
                      dataSourceSetValue: [
                        {
                          attrId: '410909',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '933087',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '3794316',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '267188',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'objectArray',
                          children: [
                            {
                              attrId: '295962',
                              code: 'fixedUser',
                              name: '新增节点',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '171249',
                              code: 'popupType',
                              name: '选人弹窗类型',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '673078',
                              code: 'tacheName',
                              name: '环节名称',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '718605',
                              code: 'tacheCode',
                              name: '环节编码',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '0348458',
                              code: 'hideUserSelect',
                              name: '新增节点',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                          ],
                        },
                      ],
                      otherObjectArrayOptions: {},
                    },
                    line_number: 24,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '975184',
                            options: {
                              useManual: true,
                              useObject: false,
                              context:
                                '$refData.current.nextTacheList.resultData.length$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170591108570104900,
                        elseIfs: [],
                        line_number: 25,
                        callback1: [
                          {
                            type: 'console',
                            dataId: 170591108570107700,
                            shielding: true,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '8123113',
                              pageJsonId: '6260603',
                              value: ['我只有一条数据'],
                            },
                            line_number: 26,
                          },
                          {
                            type: 'setValue',
                            dataId: 170591108570144060,
                            options: {
                              compId: ['Select_6041524_150172'],
                              compLib: 'comm',
                              pageJsonId: '6260603',
                              compName: 'Select',
                              id: '583904',
                              value:
                                '$refData.current.nextTacheList.resultData[0].tacheCode$',
                              valueList: {
                                Select_6041524_150172:
                                  '$refData.current.nextTacheList.resultData[0].tacheCode$',
                              },
                              compid: ['Select_6041524_150172'],
                            },
                            line_number: 27,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 170591108570170370,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '024744',
                                  pageJsonId: '6260603',
                                  code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                },
                                line_number: 28,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 170591108570176160,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '021962',
                                      pageJsonId: '6260603',
                                      customFuncName: 'nextTacheChange',
                                      customFuncParams: '$data_024744$',
                                    },
                                    line_number: 29,
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
                      {
                        type: 'customActionCode',
                        dataId: 170591108570129920,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '068703',
                          pageJsonId: 30,
                          actionTitle: '下一处理环节过滤',
                          code: 'function main(data,state,success,fail){var content=data.formData.ordersSubmit.svcCont.data.content;var c=content.itemList[0].childCatalogCode;if(c=="CLS_JC_0013_0001"||c=="CLS_JC_0013_0002"||c=="CLS_JC_0013_0003"||c=="CLS_JC_0013_0004"||c=="CLS_JC_0013_0005"){var flowCode=content.flowInfo.flowCode;var tacheCode=data.fixedParam.tacheCode;var attrList=content.itemList[0].attrList;console.log(attrList);var invoiceScene=attrList.filter(function(obj){return obj.attrCode=="invoiceScene"})[0].attrValue;var taxAmount=attrList.filter(function(obj){return obj.attrCode=="taxAmount"})[0].attrValue;var end=data.nextTacheList.resultData.filter(function(v){return v.tacheCode=="RETURN_CLOUD_HALL"});if(end!=undefined&&end!=null&&end.length>0){console.log("\\u5339\\u914D\\u5230\\u8FD4\\u56DE\\u4E91\\u5385----\\u76F4\\u63A5\\u8FD4\\u56DE");return}if(flowCode=="TICKET_ACCOUNT_COUNTY_FLOW"){console.log("\\u53BF\\u7EA7\\u8FC7\\u6EE4");if(tacheCode=="COUNTY_COMPANY_THREE_MANAGER"){console.log("\\u533A\\u53BF\\u516C\\u53F8\\u4E09\\u7EA7\\u7ECF\\u7406\\u8FC7\\u6EE4----");if(invoiceScene!="3"&&invoiceScene!="4"&&parseFloat(taxAmount)<100000){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"TAX_ACCOUNTANT","tacheName":"\\u7A0E\\u52A1\\u4F1A\\u8BA1"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"GOVERNMENT_THREE_MANAGER","tacheName":"\\u653F\\u4F01\\u5206\\u7BA1\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}else if(tacheCode=="TAX_ACCOUNTANT"){if(invoiceScene=="3"||invoiceScene=="4"){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}else if(flowCode=="TICKET_ACCOUNT_CITY_FLOW"){if(tacheCode=="TAX_ACCOUNTANT"){if(parseFloat(invoiceScene)>=300000&&(invoiceScene=="3"||invoiceScene=="4")){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}else if(flowCode=="TICKET_ACCOUNT_PROVINCE_FLOW"){if(tacheCode=="TAX_ACCOUNTANT"){if(parseFloat(invoiceScene)>=300000&&(invoiceScene=="3"||invoiceScene=="4")){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}}};',
                        },
                        line_number: 30,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 170591108570130700,
                            options: {
                              compId: ['Select_6041524_150172'],
                              compLib: 'comm',
                              pageJsonId: '6260603',
                              compName: 'Select',
                              id: '790791',
                              value:
                                '$refData.current.nextTacheList.resultData[0].tacheCode$',
                              valueList: {
                                Select_6041524_150172:
                                  '$data.nextTacheList.resultData[0].tacheCode$',
                              },
                              compid: ['Select_6041524_150172'],
                            },
                            line_number: 31,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'console',
                        dataId: 170591108570130050,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '1300775',
                          pageJsonId: 30,
                          value: [
                            '========STATE======',
                            '$data$',
                            '$urlParam$',
                          ],
                        },
                        line_number: 32,
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
                type: 'reloadDataSource',
                dataId: 170591135245163400,
                options: {
                  compId: 'reloadDataSource',
                  compName: 'page',
                  id: '39504',
                  pageJsonId: '530274',
                  dataSourceId: 166899604180262620,
                  dataSourceName: 'nextTacheList',
                  dataSourceRelType: 'service',
                  dataSourceReloadFilter: [
                    {
                      attrId: '4067582',
                      code: 'header',
                      name: '请求头参数',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      key: 'header',
                      _codePath: ['header'],
                      _idpath: ['4067582'],
                    },
                    {
                      attrId: '8239965',
                      code: 'path',
                      name: '请求路径参数',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      key: 'path',
                      _codePath: ['path'],
                      _idpath: ['8239965'],
                    },
                    {
                      attrId: '963245',
                      code: 'query',
                      name: 'URL 参数',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      key: 'query',
                      _codePath: ['query'],
                      _idpath: ['963245'],
                    },
                    {
                      attrId: '2028282',
                      code: 'body',
                      name: '请求体',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                      children: [
                        {
                          attrId: '104702',
                          code: 'tacheCode',
                          name: 'tacheCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.tacheCode',
                          _codePath: ['body', 'tacheCode'],
                          _idpath: ['2028282', '104702'],
                        },
                        {
                          attrId: '054334',
                          code: 'flowCode',
                          name: 'flowCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.flowCode',
                          _codePath: ['body', 'flowCode'],
                          _idpath: ['2028282', '054334'],
                        },
                        {
                          attrId: '77602',
                          code: 'tachePass',
                          name: 'tachePass',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.tachePass',
                          value: {
                            type: [
                              'form',
                              'Form_0063102_5441816',
                              'getFieldsValue',
                            ],
                            code: 'tachePass',
                          },
                          _codePath: ['body', 'tachePass'],
                          _idpath: ['2028282', '77602'],
                        },
                        {
                          attrId: '007501',
                          code: 'endLevel',
                          name: 'endLevel',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.endLevel',
                          value: {
                            type: ['context', '$state.endLevel$'],
                            code: '',
                          },
                          _codePath: ['body', 'endLevel'],
                          _idpath: ['2028282', '007501'],
                        },
                        {
                          attrId: '447578',
                          code: 'orderType',
                          name: 'orderType',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.orderType',
                          _codePath: ['body', 'orderType'],
                          _idpath: ['2028282', '447578'],
                        },
                        {
                          attrId: '1950086',
                          code: 'workId',
                          name: 'workId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.workId',
                          _codePath: ['body', 'workId'],
                          _idpath: ['2028282', '1950086'],
                        },
                        {
                          attrId: '44774524',
                          code: 'workItemId',
                          name: 'workItemId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          key: 'body.workItemId',
                          value: {
                            type: ['context', '$state.workItemId$'],
                            code: '',
                          },
                          _codePath: ['body', 'workItemId'],
                          _idpath: ['2028282', '44774524'],
                        },
                        {
                          attrId: '055846',
                          code: 'flowAssociationParams',
                          name: '流程相关的页面参数',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'flowAssociationParams'],
                          _idpath: ['2028282', '055846'],
                          value: { type: [], code: '' },
                        },
                        {
                          attrId: '67828',
                          code: 'level',
                          name: '最高审批等级',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'level'],
                          _idpath: ['2028282', '67828'],
                        },
                        {
                          attrId: '259759',
                          code: 'sameList',
                          name: 'sameList',
                          type: 'objectArray',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          children: [
                            {
                              attrId: '811219',
                              code: 'meetingRemark',
                              name: 'meetingRemark',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'meetingRemark'],
                              _idpath: ['2028282', '259759', '811219'],
                            },
                            {
                              attrId: '6113832',
                              code: 'nextStaff',
                              name: 'nextStaff',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'nextStaff'],
                              _idpath: ['2028282', '259759', '6113832'],
                            },
                            {
                              attrId: '984343',
                              code: 'createStaff',
                              name: 'createStaff',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'createStaff'],
                              _idpath: ['2028282', '259759', '984343'],
                            },
                            {
                              attrId: '780118',
                              code: 'createStaffName',
                              name: 'createStaffName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: [
                                'body',
                                'sameList',
                                'createStaffName',
                              ],
                              _idpath: ['2028282', '259759', '780118'],
                            },
                            {
                              attrId: '6253935',
                              code: 'createTime',
                              name: 'createTime',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'createTime'],
                              _idpath: ['2028282', '259759', '6253935'],
                            },
                            {
                              attrId: '337065',
                              code: 'effectDate',
                              name: 'effectDate',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'effectDate'],
                              _idpath: ['2028282', '259759', '337065'],
                            },
                            {
                              attrId: '637292',
                              code: 'handleObjCode',
                              name: 'handleObjCode',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'handleObjCode'],
                              _idpath: ['2028282', '259759', '637292'],
                            },
                            {
                              attrId: '59523',
                              code: 'nextStaffName',
                              name: 'nextStaffName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'nextStaffName'],
                              _idpath: ['2028282', '259759', '59523'],
                            },
                            {
                              attrId: '2144276',
                              code: 'nextTache',
                              name: 'nextTache',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'nextTache'],
                              _idpath: ['2028282', '259759', '2144276'],
                            },
                            {
                              attrId: '4793034',
                              code: 'approveOrdNbr',
                              name: 'approveOrdNbr',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'approveOrdNbr'],
                              _idpath: ['2028282', '259759', '4793034'],
                            },
                            {
                              attrId: '051125',
                              code: 'busiObjStatus',
                              name: 'busiObjStatus',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'busiObjStatus'],
                              _idpath: ['2028282', '259759', '051125'],
                            },
                            {
                              attrId: '227237',
                              code: 'busiObjSubType',
                              name: 'busiObjSubType',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'busiObjSubType'],
                              _idpath: ['2028282', '259759', '227237'],
                            },
                            {
                              attrId: '008727',
                              code: 'lastHandleTime',
                              name: 'lastHandleTime',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'lastHandleTime'],
                              _idpath: ['2028282', '259759', '008727'],
                            },
                            {
                              attrId: '311233',
                              code: 'workId',
                              name: 'workId',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'workId'],
                              _idpath: ['2028282', '259759', '311233'],
                            },
                            {
                              attrId: '2347154',
                              code: 'workItemId',
                              name: 'workItemId',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'workItemId'],
                              _idpath: ['2028282', '259759', '2347154'],
                            },
                            {
                              attrId: '5904394',
                              code: 'tacheCode',
                              name: 'tacheCode',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'tacheCode'],
                              _idpath: ['2028282', '259759', '5904394'],
                            },
                            {
                              attrId: '0060695',
                              code: 'tacheName',
                              name: 'tacheName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'tacheName'],
                              _idpath: ['2028282', '259759', '0060695'],
                            },
                            {
                              attrId: '9728522',
                              code: 'tachePass',
                              name: 'tachePass',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'tachePass'],
                              _idpath: ['2028282', '259759', '9728522'],
                            },
                            {
                              attrId: '39711129',
                              code: 'tacheRemark',
                              name: 'tacheRemark',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'tacheRemark'],
                              _idpath: ['2028282', '259759', '39711129'],
                            },
                            {
                              attrId: '565718',
                              code: 'handleStaffName',
                              name: 'handleStaffName',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: [
                                'body',
                                'sameList',
                                'handleStaffName',
                              ],
                              _idpath: ['2028282', '259759', '565718'],
                            },
                            {
                              attrId: '98636',
                              code: 'keyId',
                              name: 'keyId',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'keyId'],
                              _idpath: ['2028282', '259759', '98636'],
                            },
                            {
                              attrId: '2039836',
                              code: 'title',
                              name: 'title',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'title'],
                              _idpath: ['2028282', '259759', '2039836'],
                            },
                            {
                              attrId: '560007',
                              code: 'handleObjType',
                              name: 'handleObjType',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'sameList', 'handleObjType'],
                              _idpath: ['2028282', '259759', '560007'],
                            },
                          ],
                          _codePath: ['body', 'sameList'],
                          _idpath: ['2028282', '259759'],
                        },
                      ],
                      key: 'body',
                      _codePath: ['body'],
                      _idpath: ['2028282'],
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '410909',
                      code: 'resultMsg',
                      name: 'resultMsg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '933087',
                      code: 'resultMsgCode',
                      name: 'resultMsgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3794316',
                      code: 'resultCode',
                      name: 'resultCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '267188',
                      code: 'resultData',
                      name: 'resultData',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '295962',
                          code: 'fixedUser',
                          name: '新增节点',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '171249',
                          code: 'popupType',
                          name: '选人弹窗类型',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '673078',
                          code: 'tacheName',
                          name: '环节名称',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '718605',
                          code: 'tacheCode',
                          name: '环节编码',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '0348458',
                          code: 'hideUserSelect',
                          name: '新增节点',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                      ],
                    },
                  ],
                  otherObjectArrayOptions: {},
                },
                line_number: 33,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '975184',
                        options: {
                          useManual: true,
                          useObject: false,
                          context:
                            '$refData.current.nextTacheList.resultData.length$',
                          operate: '==',
                          manualValue: '1',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 170591135245173820,
                    elseIfs: [],
                    line_number: 34,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 170591135245112670,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '2983075',
                          pageJsonId: '6260603',
                          value: ['我只有一条数据'],
                        },
                        line_number: 35,
                      },
                      {
                        type: 'setValue',
                        dataId: 170591135245185380,
                        options: {
                          compId: ['Select_6041524_150172'],
                          compLib: 'comm',
                          pageJsonId: '6260603',
                          compName: 'Select',
                          id: '70814796',
                          value:
                            '$refData.current.nextTacheList.resultData[0].tacheCode$',
                          valueList: {
                            Select_6041524_150172:
                              '$refData.current.nextTacheList.resultData[0].tacheCode$',
                          },
                          compid: ['Select_6041524_150172'],
                        },
                        line_number: 36,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 170591135245177150,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '639822',
                              pageJsonId: '6260603',
                              code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                            },
                            line_number: 37,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 170591135245114020,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '924615',
                                  pageJsonId: '6260603',
                                  customFuncName: 'nextTacheChange',
                                  customFuncParams: '$data_639822$',
                                },
                                line_number: 38,
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
                  {
                    type: 'customActionCode',
                    dataId: 170591135245165920,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '315322',
                      pageJsonId: 30,
                      actionTitle: '下一处理环节过滤',
                      code: 'function main(data,state,success,fail){var content=data.formData.ordersSubmit.svcCont.data.content;var c=content.itemList[0].childCatalogCode;if(c=="CLS_JC_0013_0001"||c=="CLS_JC_0013_0002"||c=="CLS_JC_0013_0003"||c=="CLS_JC_0013_0004"||c=="CLS_JC_0013_0005"){var flowCode=content.flowInfo.flowCode;var tacheCode=data.fixedParam.tacheCode;var attrList=content.itemList[0].attrList;console.log(attrList);var invoiceScene=attrList.filter(function(obj){return obj.attrCode=="invoiceScene"})[0].attrValue;var taxAmount=attrList.filter(function(obj){return obj.attrCode=="taxAmount"})[0].attrValue;var end=data.nextTacheList.resultData.filter(function(v){return v.tacheCode=="RETURN_CLOUD_HALL"});if(end!=undefined&&end!=null&&end.length>0){console.log("\\u5339\\u914D\\u5230\\u8FD4\\u56DE\\u4E91\\u5385----\\u76F4\\u63A5\\u8FD4\\u56DE");return}if(flowCode=="TICKET_ACCOUNT_COUNTY_FLOW"){console.log("\\u53BF\\u7EA7\\u8FC7\\u6EE4");if(tacheCode=="COUNTY_COMPANY_THREE_MANAGER"){console.log("\\u533A\\u53BF\\u516C\\u53F8\\u4E09\\u7EA7\\u7ECF\\u7406\\u8FC7\\u6EE4----");if(invoiceScene!="3"&&invoiceScene!="4"&&parseFloat(taxAmount)<100000){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"TAX_ACCOUNTANT","tacheName":"\\u7A0E\\u52A1\\u4F1A\\u8BA1"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"GOVERNMENT_THREE_MANAGER","tacheName":"\\u653F\\u4F01\\u5206\\u7BA1\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}else if(tacheCode=="TAX_ACCOUNTANT"){if(invoiceScene=="3"||invoiceScene=="4"){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}else if(flowCode=="TICKET_ACCOUNT_CITY_FLOW"){if(tacheCode=="TAX_ACCOUNTANT"){if(parseFloat(invoiceScene)>=300000&&(invoiceScene=="3"||invoiceScene=="4")){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}else if(flowCode=="TICKET_ACCOUNT_PROVINCE_FLOW"){if(tacheCode=="TAX_ACCOUNTANT"){if(parseFloat(invoiceScene)>=300000&&(invoiceScene=="3"||invoiceScene=="4")){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}}};',
                    },
                    line_number: 39,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 170591135245107260,
                        options: {
                          compId: ['Select_6041524_150172'],
                          compLib: 'comm',
                          pageJsonId: '6260603',
                          compName: 'Select',
                          id: '6653802',
                          value:
                            '$refData.current.nextTacheList.resultData[0].tacheCode$',
                          valueList: {
                            Select_6041524_150172:
                              '$data.nextTacheList.resultData[0].tacheCode$',
                          },
                          compid: ['Select_6041524_150172'],
                        },
                        line_number: 40,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'console',
                    dataId: 170591135245117280,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '347015',
                      pageJsonId: 30,
                      value: ['========STATE======', '$data$', '$urlParam$'],
                    },
                    line_number: 41,
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            type: 'reloadDataSource',
            dataId: 170424783625333920,
            shielding: true,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '90083',
              pageJsonId: '530274',
              dataSourceId: 166899604180262620,
              dataSourceName: 'nextTacheList',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '4067582',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  key: 'header',
                  _codePath: ['header'],
                  _idpath: ['4067582'],
                },
                {
                  attrId: '8239965',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  key: 'path',
                  _codePath: ['path'],
                  _idpath: ['8239965'],
                },
                {
                  attrId: '963245',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  key: 'query',
                  _codePath: ['query'],
                  _idpath: ['963245'],
                },
                {
                  attrId: '2028282',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  children: [
                    {
                      attrId: '104702',
                      code: 'tacheCode',
                      name: 'tacheCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.tacheCode',
                      _codePath: ['body', 'tacheCode'],
                      _idpath: ['2028282', '104702'],
                    },
                    {
                      attrId: '054334',
                      code: 'flowCode',
                      name: 'flowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.flowCode',
                      _codePath: ['body', 'flowCode'],
                      _idpath: ['2028282', '054334'],
                    },
                    {
                      attrId: '77602',
                      code: 'tachePass',
                      name: 'tachePass',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.tachePass',
                      value: {
                        type: [
                          'form',
                          'Form_0063102_5441816',
                          'getFieldsValue',
                        ],
                        code: 'tachePass',
                      },
                      _codePath: ['body', 'tachePass'],
                      _idpath: ['2028282', '77602'],
                    },
                    {
                      attrId: '007501',
                      code: 'endLevel',
                      name: 'endLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.endLevel',
                      value: {
                        type: ['context', '$state.endLevel$'],
                        code: '',
                      },
                      _codePath: ['body', 'endLevel'],
                      _idpath: ['2028282', '007501'],
                    },
                    {
                      attrId: '447578',
                      code: 'orderType',
                      name: 'orderType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.orderType',
                      _codePath: ['body', 'orderType'],
                      _idpath: ['2028282', '447578'],
                    },
                    {
                      attrId: '1950086',
                      code: 'workId',
                      name: 'workId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.workId',
                      _codePath: ['body', 'workId'],
                      _idpath: ['2028282', '1950086'],
                    },
                    {
                      attrId: '44774524',
                      code: 'workItemId',
                      name: 'workItemId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.workItemId',
                      value: {
                        type: ['context', '$state.workItemId$'],
                        code: '',
                      },
                      _codePath: ['body', 'workItemId'],
                      _idpath: ['2028282', '44774524'],
                    },
                    {
                      attrId: '055846',
                      code: 'flowAssociationParams',
                      name: '流程相关的页面参数',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _codePath: ['body', 'flowAssociationParams'],
                      _idpath: ['2028282', '055846'],
                      value: {
                        type: ['datasource', 'pageData', 'data'],
                        code: 'flowAssociationParams',
                      },
                    },
                    {
                      attrId: '67828',
                      code: 'level',
                      name: '最高审批等级',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      _codePath: ['body', 'level'],
                      _idpath: ['2028282', '67828'],
                    },
                    {
                      attrId: '259759',
                      code: 'sameList',
                      name: 'sameList',
                      type: 'objectArray',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      children: [
                        {
                          attrId: '811219',
                          code: 'meetingRemark',
                          name: 'meetingRemark',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'meetingRemark'],
                          _idpath: ['2028282', '259759', '811219'],
                        },
                        {
                          attrId: '6113832',
                          code: 'nextStaff',
                          name: 'nextStaff',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'nextStaff'],
                          _idpath: ['2028282', '259759', '6113832'],
                        },
                        {
                          attrId: '984343',
                          code: 'createStaff',
                          name: 'createStaff',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'createStaff'],
                          _idpath: ['2028282', '259759', '984343'],
                        },
                        {
                          attrId: '780118',
                          code: 'createStaffName',
                          name: 'createStaffName',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'createStaffName'],
                          _idpath: ['2028282', '259759', '780118'],
                        },
                        {
                          attrId: '6253935',
                          code: 'createTime',
                          name: 'createTime',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'createTime'],
                          _idpath: ['2028282', '259759', '6253935'],
                        },
                        {
                          attrId: '337065',
                          code: 'effectDate',
                          name: 'effectDate',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'effectDate'],
                          _idpath: ['2028282', '259759', '337065'],
                        },
                        {
                          attrId: '637292',
                          code: 'handleObjCode',
                          name: 'handleObjCode',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'handleObjCode'],
                          _idpath: ['2028282', '259759', '637292'],
                        },
                        {
                          attrId: '59523',
                          code: 'nextStaffName',
                          name: 'nextStaffName',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'nextStaffName'],
                          _idpath: ['2028282', '259759', '59523'],
                        },
                        {
                          attrId: '2144276',
                          code: 'nextTache',
                          name: 'nextTache',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'nextTache'],
                          _idpath: ['2028282', '259759', '2144276'],
                        },
                        {
                          attrId: '4793034',
                          code: 'approveOrdNbr',
                          name: 'approveOrdNbr',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'approveOrdNbr'],
                          _idpath: ['2028282', '259759', '4793034'],
                        },
                        {
                          attrId: '051125',
                          code: 'busiObjStatus',
                          name: 'busiObjStatus',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'busiObjStatus'],
                          _idpath: ['2028282', '259759', '051125'],
                        },
                        {
                          attrId: '227237',
                          code: 'busiObjSubType',
                          name: 'busiObjSubType',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'busiObjSubType'],
                          _idpath: ['2028282', '259759', '227237'],
                        },
                        {
                          attrId: '008727',
                          code: 'lastHandleTime',
                          name: 'lastHandleTime',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'lastHandleTime'],
                          _idpath: ['2028282', '259759', '008727'],
                        },
                        {
                          attrId: '311233',
                          code: 'workId',
                          name: 'workId',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'workId'],
                          _idpath: ['2028282', '259759', '311233'],
                        },
                        {
                          attrId: '2347154',
                          code: 'workItemId',
                          name: 'workItemId',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'workItemId'],
                          _idpath: ['2028282', '259759', '2347154'],
                        },
                        {
                          attrId: '5904394',
                          code: 'tacheCode',
                          name: 'tacheCode',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'tacheCode'],
                          _idpath: ['2028282', '259759', '5904394'],
                        },
                        {
                          attrId: '0060695',
                          code: 'tacheName',
                          name: 'tacheName',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'tacheName'],
                          _idpath: ['2028282', '259759', '0060695'],
                        },
                        {
                          attrId: '9728522',
                          code: 'tachePass',
                          name: 'tachePass',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'tachePass'],
                          _idpath: ['2028282', '259759', '9728522'],
                        },
                        {
                          attrId: '39711129',
                          code: 'tacheRemark',
                          name: 'tacheRemark',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'tacheRemark'],
                          _idpath: ['2028282', '259759', '39711129'],
                        },
                        {
                          attrId: '565718',
                          code: 'handleStaffName',
                          name: 'handleStaffName',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'handleStaffName'],
                          _idpath: ['2028282', '259759', '565718'],
                        },
                        {
                          attrId: '98636',
                          code: 'keyId',
                          name: 'keyId',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'keyId'],
                          _idpath: ['2028282', '259759', '98636'],
                        },
                        {
                          attrId: '2039836',
                          code: 'title',
                          name: 'title',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'title'],
                          _idpath: ['2028282', '259759', '2039836'],
                        },
                        {
                          attrId: '560007',
                          code: 'handleObjType',
                          name: 'handleObjType',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _codePath: ['body', 'sameList', 'handleObjType'],
                          _idpath: ['2028282', '259759', '560007'],
                        },
                      ],
                      _codePath: ['body', 'sameList'],
                      _idpath: ['2028282', '259759'],
                    },
                  ],
                  key: 'body',
                  _codePath: ['body'],
                  _idpath: ['2028282'],
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '410909',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '933087',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '3794316',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '267188',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '295962',
                      code: 'fixedUser',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '171249',
                      code: 'popupType',
                      name: '选人弹窗类型',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '673078',
                      code: 'tacheName',
                      name: '环节名称',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '718605',
                      code: 'tacheCode',
                      name: '环节编码',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0348458',
                      code: 'hideUserSelect',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                  ],
                },
              ],
              otherObjectArrayOptions: {},
            },
            line_number: 42,
            callback1: [
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '975184',
                    options: {
                      useManual: true,
                      useObject: false,
                      context:
                        '$refData.current.nextTacheList.resultData.length$',
                      operate: '==',
                      manualValue: '1',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 170424783625392260,
                elseIfs: [],
                line_number: 43,
                callback1: [
                  {
                    type: 'console',
                    dataId: 170424783625369540,
                    shielding: true,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '947014',
                      pageJsonId: '6260603',
                      value: ['我只有一条数据'],
                    },
                    line_number: 44,
                  },
                  {
                    type: 'setValue',
                    dataId: 170424783625397340,
                    shielding: true,
                    options: {
                      compId: ['Select_6041524_150172'],
                      compLib: 'comm',
                      pageJsonId: '6260603',
                      compName: 'Select',
                      id: '561405',
                      value:
                        '$refData.current.nextTacheList.resultData[0].tacheCode$',
                      valueList: {
                        Select_6041524_150172:
                          '$refData.current.nextTacheList.resultData[0].tacheCode$',
                      },
                      compid: ['Select_6041524_150172'],
                    },
                    line_number: 45,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 170424783625324580,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '3307422',
                          pageJsonId: '6260603',
                          code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                        },
                        line_number: 46,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 170424783625358370,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '086352',
                              pageJsonId: '6260603',
                              customFuncName: 'nextTacheChange',
                              customFuncParams: '$data_3307422$',
                            },
                            line_number: 47,
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
              {
                type: 'customActionCode',
                dataId: 170424783625349600,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '179701',
                  pageJsonId: 30,
                  actionTitle: '下一处理环节过滤',
                  code: 'function main(data,state,success,fail){var content=data.formData.ordersSubmit.svcCont.data.content;var c=content.itemList[0].childCatalogCode;if(c=="CLS_JC_0013_0001"||c=="CLS_JC_0013_0002"||c=="CLS_JC_0013_0003"||c=="CLS_JC_0013_0004"||c=="CLS_JC_0013_0005"){var flowCode=content.flowInfo.flowCode;var tacheCode=data.fixedParam.tacheCode;var attrList=content.itemList[0].attrList;console.log(attrList);var invoiceScene=attrList.filter(function(obj){return obj.attrCode=="invoiceScene"})[0].attrValue;var taxAmount=attrList.filter(function(obj){return obj.attrCode=="taxAmount"})[0].attrValue;var end=data.nextTacheList.resultData.filter(function(v){return v.tacheCode=="RETURN_CLOUD_HALL"});if(end!=undefined&&end!=null&&end.length>0){console.log("\\u5339\\u914D\\u5230\\u8FD4\\u56DE\\u4E91\\u5385----\\u76F4\\u63A5\\u8FD4\\u56DE");return}if(flowCode=="TICKET_ACCOUNT_COUNTY_FLOW"){console.log("\\u53BF\\u7EA7\\u8FC7\\u6EE4");if(tacheCode=="COUNTY_COMPANY_THREE_MANAGER"){console.log("\\u533A\\u53BF\\u516C\\u53F8\\u4E09\\u7EA7\\u7ECF\\u7406\\u8FC7\\u6EE4----");if(invoiceScene!="3"&&invoiceScene!="4"&&parseFloat(taxAmount)<100000){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"TAX_ACCOUNTANT","tacheName":"\\u7A0E\\u52A1\\u4F1A\\u8BA1"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"GOVERNMENT_THREE_MANAGER","tacheName":"\\u653F\\u4F01\\u5206\\u7BA1\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}else if(tacheCode=="TAX_ACCOUNTANT"){if(invoiceScene=="3"||invoiceScene=="4"){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}else if(flowCode=="TICKET_ACCOUNT_CITY_FLOW"){if(tacheCode=="TAX_ACCOUNTANT"){if(parseFloat(invoiceScene)>=300000&&(invoiceScene=="3"||invoiceScene=="4")){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}else if(flowCode=="TICKET_ACCOUNT_PROVINCE_FLOW"){if(tacheCode=="TAX_ACCOUNTANT"){if(parseFloat(invoiceScene)>=300000&&(invoiceScene=="3"||invoiceScene=="4")){data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"CITY_BUSINESS_TWO_MANAGER","tacheName":"\\u5E02\\u4E1A\\u52A1\\u5206\\u7BA1\\u4E8C\\u7EA7\\u7ECF\\u7406"}];success()}else{data.nextTacheList.resultData=[{"popupType":"org","tacheCode":"FINANCE_THREE_MANAGER","tacheName":"\\u8D22\\u52A1\\u90E8\\u4E09\\u7EA7\\u7ECF\\u7406"}];success()}}}}};',
                },
                line_number: 48,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 170424783625339600,
                    shielding: true,
                    options: {
                      compId: ['Select_6041524_150172'],
                      compLib: 'comm',
                      pageJsonId: '6260603',
                      compName: 'Select',
                      id: '5435586',
                      value:
                        '$refData.current.nextTacheList.resultData[0].tacheCode$',
                      valueList: {
                        Select_6041524_150172:
                          '$data.nextTacheList.resultData[0].tacheCode$',
                      },
                      compid: ['Select_6041524_150172'],
                    },
                    line_number: 49,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 170424783625394430,
                shielding: true,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '086524',
                  pageJsonId: 30,
                  value: ['========STATE======', '$data$', '$urlParam$'],
                },
                line_number: 50,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse109.params = [] || [];
    CMDGenerator(eventDataifelse109, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacustomActionCode231: any = [
      {
        type: 'customActionCode',
        dataId: 167541110517136260,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '488635',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){console.log("\\u5BA1\\u6279\\u5904\\u7406\\u5F39\\u7A97-state",state)};',
        },
        line_number: 52,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode231.params = [] || [];
    CMDGenerator(eventDatacustomActionCode231, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode232: any = [
      {
        type: 'customActionCode',
        dataId: 170487638131120030,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '5821905',
          pageJsonId: 30,
          actionTitle: '判断是否展示驻地网页面',
          code: 'function main(data,state,success,fail){var flowCode=state===null||state===void 0?void 0:state.flowCode;if(flowCode=="CELL_NET_COUNTY_FLOW"){success()}};',
        },
        line_number: 53,
        callback1: [
          {
            type: 'setPageSrc',
            dataId: 170487647358008960,
            options: {
              compId: 'Pageview_098802',
              compLib: 'comm',
              pageJsonId: 30,
              compName: 'Pageview',
              id: '3486304',
              pathname: '/selectNet',
              selectedType: 'page',
              pageId: '1062290793887260672',
              modalPath: '/selectNet',
            },
            line_number: 54,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode232.params = [] || [];
    CMDGenerator(eventDatacustomActionCode232, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_30__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_30_1',
          uid: 'View_30_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => (refs['View_30_1'] = r)}
        {...injectData}
      >
        <Row
          name={'行容器'}
          colSpan={12}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_628506',
            uid: 'Row_628506',
            type: 'Row',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => (refs['Row_628506'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            formItemIndex={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_860362',
              uid: 'View_860362',
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
            ref={(r: any) => (refs['View_860362'] = r)}
            {...injectData}
          >
            <Form
              name={'表单'}
              colSpan={24}
              labelCol={8}
              wrapperCol={'16'}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_0063102'}
              $$componentItem={{
                id: 'Form_0063102_5441816',
                uid: 'Form_0063102_5441816',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '8px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_0063102_5441816'] = r)}
              {...injectData}
            >
              <Radio
                name={'是否通过'}
                radioType={'Radio'}
                optionMarginRight={0}
                selfSpan={24}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={true}
                formItemIndex={0}
                fieldName={'tachePass'}
                defaultValue={'pass'}
                dataSource={[
                  { id: '862079', label: '同意', value: 'pass' },
                  { id: '722802', label: '不同意', value: 'refuse' },
                ]}
                $$componentItem={{
                  id: 'Radio_774135_211748',
                  uid: 'Radio_774135_211748',
                  type: 'Radio',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataifelse406: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '961099',
                          options: { operate: 'empty' },
                          conditionType: 'checkValue',
                          objType: 'TextArea',
                          objId: 'TextArea_4776246_432797',
                        },
                      ],
                      dataId: 167289864236092800,
                      elseIfs: [],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'clearValue',
                          dataId: 167289888267578620,
                          options: {
                            compId: 'TextArea_4776246_432797',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'TextArea',
                            id: '092352',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse406.params =
                    [
                      {
                        title: '单选组取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(eventDataifelse406, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                  const eventDataclearValue92: any = [
                    {
                      type: 'clearValue',
                      dataId: 166117141387250340,
                      options: {
                        compId: 'Select_6041524_150172',
                        compLib: 'comm',
                        pageJsonId: '530274',
                        compName: 'Select',
                        id: '859948',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDataclearValue92.params =
                    [
                      {
                        title: '单选组取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(eventDataclearValue92, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue93: any = [
                    {
                      type: 'clearValue',
                      dataId: 166210670801825440,
                      options: {
                        compId: 'Input_668689_6608047',
                        compLib: 'comm',
                        pageJsonId: '530274',
                        compName: 'Input',
                        id: '2257707',
                      },
                      line_number: 4,
                    },
                  ];
                  eventDataclearValue93.params =
                    [
                      {
                        title: '单选组取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(eventDataclearValue93, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse407: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '146032',
                          options: {
                            useManual: true,
                            useObject: false,
                            operate: '==',
                            manualValue: 'refuse',
                          },
                          conditionType: 'checkValue',
                          objType: 'Radio',
                          objId: 'Radio_774135_211748',
                        },
                      ],
                      dataId: 166117027326730500,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166117033996744670,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170167094548216420,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 170167094548238560,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170167210278874720,
                                      children: [],
                                      todoOptions: ['valueArray'],
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '844167',
                                        pageJsonId: 30,
                                        value: ['审批意见：', '$value_217634$'],
                                      },
                                      actionObjId: 'debug',
                                      actionObjName: 'system',
                                      value: 'console',
                                      line_number: 24,
                                    },
                                    {
                                      dataName: 'condition',
                                      dataId: 170167094548237300,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 170167094548275940,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 170167094548283230,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                            },
                                          ],
                                          todoOptions: ['compId', 'valueList'],
                                          options: {
                                            compId: 'TextArea_4776246_432797',
                                            compLib: 'comm',
                                            pageJsonId: 30,
                                            compName: 'TextArea',
                                            id: '683891',
                                            valueList: {
                                              TextArea_4776246_432797: '同意',
                                            },
                                          },
                                          actionObjId:
                                            'TextArea_4776246_432797',
                                          actionObjName: 'TextArea',
                                          value: 'setValue',
                                          compLib: 'comm',
                                          line_number: 26,
                                        },
                                      ],
                                      elseIfs: [],
                                      condition: [
                                        {
                                          condId: '077183',
                                          options: {
                                            context: '$value_217634$',
                                            operate: 'empty',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                        {
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context: '$value_217634$',
                                            operate: '==',
                                            manualValue: '不同意',
                                          },
                                          condId: '73361',
                                          connector: '||',
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      value: 'condition',
                                      desc: '如果没有值或值为不同意，赋值成同意',
                                      line_number: 25,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                },
                              ],
                              todoOptions: [],
                              options: {
                                compId: 'TextArea_4776246_432797',
                                compLib: 'comm',
                                pageJsonId: 30,
                                compName: 'TextArea',
                                id: '217634',
                              },
                              actionObjId: 'TextArea_4776246_432797',
                              actionObjName: 'TextArea',
                              value: 'getValue',
                              compLib: 'comm',
                              line_number: 23,
                            },
                            {
                              dataName: 'action',
                              dataId: 166117160398699070,
                              children: [],
                              todoOptions: ['visible'],
                              options: {
                                compId: 'Select_6041524_150172',
                                compLib: 'comm',
                                pageJsonId: '530274',
                                compName: 'Select',
                                id: '731469',
                                visible: 'true',
                              },
                              actionObjId: 'Select_6041524_150172',
                              actionObjName: 'Select',
                              value: 'setVisible',
                              compLib: 'comm',
                              line_number: 27,
                            },
                            {
                              dataName: 'action',
                              dataId: 166210677212206180,
                              children: [],
                              todoOptions: ['visible'],
                              options: {
                                compId: 'Input_668689_6608047',
                                compLib: 'comm',
                                pageJsonId: '530274',
                                compName: 'Input',
                                id: '351506',
                                visible: 'true',
                              },
                              actionObjId: 'Input_668689_6608047',
                              actionObjName: 'Input',
                              value: 'setVisible',
                              compLib: 'comm',
                              line_number: 28,
                            },
                            {
                              dataName: 'action',
                              dataId: 166236961046413600,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166236961046419360,
                                  children: [
                                    {
                                      dataName: 'condition',
                                      dataId: 166368111522588380,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 166368111522547230,
                                          children: [],
                                          todoOptions: ['valueArray'],
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '555361',
                                            pageJsonId: '6260603',
                                            value: ['我只有一条数据'],
                                          },
                                          actionObjId: 'debug',
                                          actionObjName: 'system',
                                          value: 'console',
                                          shielding: true,
                                          line_number: 31,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 166368111522535600,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 166368111522546850,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 166368111522578430,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 166368111522548400,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 166368111522520300,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 166368111522560800,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 166368111522507740,
                                                              children: [],
                                                              value:
                                                                'callback2',
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
                                                            id: '856161',
                                                            pageJsonId:
                                                              '6260603',
                                                            customFuncName:
                                                              'nextTacheChange',
                                                            customFuncParams:
                                                              '$data_406126$',
                                                          },
                                                          actionObjId:
                                                            'callSelfFunc',
                                                          actionObjName:
                                                            'system',
                                                          value: 'callSelfFunc',
                                                          line_number: 34,
                                                        },
                                                      ],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 166368111522540960,
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
                                                    id: '406126',
                                                    pageJsonId: '6260603',
                                                    code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                                  },
                                                  actionObjId:
                                                    'customActionCode',
                                                  actionObjName: 'page',
                                                  value: 'customActionCode',
                                                  line_number: 33,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                            },
                                          ],
                                          todoOptions: ['value'],
                                          options: {
                                            compId: 'Select_6041524_150172',
                                            compLib: 'comm',
                                            pageJsonId: '6260603',
                                            compName: 'Select',
                                            id: '894812',
                                            value:
                                              '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                          },
                                          actionObjId: 'Select_6041524_150172',
                                          actionObjName: 'Select',
                                          value: 'setValue',
                                          compLib: 'comm',
                                          line_number: 32,
                                        },
                                      ],
                                      elseIfs: [],
                                      condition: [
                                        {
                                          condId: '975184',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context:
                                              '$refData.current.nextTacheList.resultData.length$',
                                            operate: '==',
                                            manualValue: '1',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      desc: '如果只有一条数据',
                                      line_number: 30,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 166236961046401900,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                },
                              ],
                              todoOptions: [
                                'selectServerDataSource',
                                'dataSourceReloadFilter',
                              ],
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '625243',
                                pageJsonId: '530274',
                                dataSourceId: 166899604180262620,
                                dataSourceName: 'nextTacheList',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '4067582',
                                    code: 'header',
                                    name: '请求头参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '8239965',
                                    code: 'path',
                                    name: '请求路径参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '963245',
                                    code: 'query',
                                    name: 'URL 参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '2028282',
                                    code: 'body',
                                    name: '请求体',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    children: [
                                      {
                                        attrId: '055846',
                                        code: 'flowAssociationParams',
                                        name: '流程相关的页面参数',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'datasource',
                                            'pageData',
                                            'data',
                                          ],
                                          code: 'flowAssociationParams',
                                        },
                                      },
                                      {
                                        attrId: '77602',
                                        code: 'tachePass',
                                        name: 'tachePass',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'form',
                                            'Form_0063102_5441816',
                                            'getFieldsValue',
                                          ],
                                          code: 'tachePass',
                                        },
                                      },
                                      {
                                        attrId: '054334',
                                        code: 'flowCode',
                                        name: 'flowCode',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '447578',
                                        code: 'orderType',
                                        name: 'orderType',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '67828',
                                        code: 'level',
                                        name: '最高审批等级',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '1950086',
                                        code: 'workId',
                                        name: 'workId',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '44774524',
                                        code: 'workItemId',
                                        name: 'workItemId',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'datasource',
                                            'fixedParam',
                                            'data',
                                          ],
                                          code: 'workItemId',
                                        },
                                      },
                                      {
                                        attrId: '104702',
                                        code: 'tacheCode',
                                        name: 'tacheCode',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '007501',
                                        code: 'endLevel',
                                        name: 'endLevel',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'datasource',
                                            'fixedParam',
                                            'data',
                                          ],
                                          code: 'endLevel',
                                        },
                                      },
                                      {
                                        attrId: '259759',
                                        code: 'sameList',
                                        name: 'sameList',
                                        type: 'objectArray',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '811219',
                                            code: 'meetingRemark',
                                            name: 'meetingRemark',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '6113832',
                                            code: 'nextStaff',
                                            name: 'nextStaff',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '984343',
                                            code: 'createStaff',
                                            name: 'createStaff',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '780118',
                                            code: 'createStaffName',
                                            name: 'createStaffName',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '6253935',
                                            code: 'createTime',
                                            name: 'createTime',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '337065',
                                            code: 'effectDate',
                                            name: 'effectDate',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '637292',
                                            code: 'handleObjCode',
                                            name: 'handleObjCode',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '59523',
                                            code: 'nextStaffName',
                                            name: 'nextStaffName',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '2144276',
                                            code: 'nextTache',
                                            name: 'nextTache',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '4793034',
                                            code: 'approveOrdNbr',
                                            name: 'approveOrdNbr',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '051125',
                                            code: 'busiObjStatus',
                                            name: 'busiObjStatus',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '227237',
                                            code: 'busiObjSubType',
                                            name: 'busiObjSubType',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '008727',
                                            code: 'lastHandleTime',
                                            name: 'lastHandleTime',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '311233',
                                            code: 'workId',
                                            name: 'workId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '2347154',
                                            code: 'workItemId',
                                            name: 'workItemId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '5904394',
                                            code: 'tacheCode',
                                            name: 'tacheCode',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '0060695',
                                            code: 'tacheName',
                                            name: 'tacheName',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '9728522',
                                            code: 'tachePass',
                                            name: 'tachePass',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '39711129',
                                            code: 'tacheRemark',
                                            name: 'tacheRemark',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '565718',
                                            code: 'handleStaffName',
                                            name: 'handleStaffName',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '98636',
                                            code: 'keyId',
                                            name: 'keyId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '2039836',
                                            code: 'title',
                                            name: 'title',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '560007',
                                            code: 'handleObjType',
                                            name: 'handleObjType',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              actionObjId: 'reloadDataSource',
                              actionObjName: 'page',
                              value: 'reloadDataSource',
                              line_number: 29,
                            },
                            {
                              dataName: 'action',
                              dataId: 167004892856738140,
                              children: [],
                              todoOptions: ['required', 'selectComp'],
                              options: {
                                compId: 'TextArea_4776246_432797',
                                compLib: 'comm',
                                pageJsonId: 30,
                                compName: 'TextArea',
                                id: '7691286',
                                required: 'true',
                              },
                              actionObjId: 'TextArea_4776246_432797',
                              actionObjName: 'TextArea',
                              value: 'setRequired',
                              compLib: 'comm',
                              shielding: true,
                              line_number: 35,
                            },
                          ],
                          condition: [],
                          desc: '值为通过',
                          callback: [
                            {
                              type: 'getValue',
                              dataId: 170167094548216420,
                              options: {
                                compId: 'TextArea_4776246_432797',
                                compLib: 'comm',
                                pageJsonId: 30,
                                compName: 'TextArea',
                                id: '217634',
                              },
                              line_number: 23,
                              callback1: [
                                {
                                  type: 'console',
                                  dataId: 170167210278874720,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '844167',
                                    pageJsonId: 30,
                                    value: ['审批意见：', '$value_217634$'],
                                  },
                                  line_number: 24,
                                },
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '077183',
                                      options: {
                                        context: '$value_217634$',
                                        operate: 'empty',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                    {
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$value_217634$',
                                        operate: '==',
                                        manualValue: '不同意',
                                      },
                                      condId: '73361',
                                      connector: '||',
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 170167094548237300,
                                  elseIfs: [],
                                  line_number: 25,
                                  callback1: [
                                    {
                                      type: 'setValue',
                                      dataId: 170167094548275940,
                                      options: {
                                        compId: 'TextArea_4776246_432797',
                                        compLib: 'comm',
                                        pageJsonId: 30,
                                        compName: 'TextArea',
                                        id: '683891',
                                        valueList: {
                                          TextArea_4776246_432797: '同意',
                                        },
                                      },
                                      line_number: 26,
                                      callback1: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: 'setVisible',
                              dataId: 166117160398699070,
                              options: {
                                compId: 'Select_6041524_150172',
                                compLib: 'comm',
                                pageJsonId: '530274',
                                compName: 'Select',
                                id: '731469',
                                visible: 'true',
                              },
                              line_number: 27,
                            },
                            {
                              type: 'setVisible',
                              dataId: 166210677212206180,
                              options: {
                                compId: 'Input_668689_6608047',
                                compLib: 'comm',
                                pageJsonId: '530274',
                                compName: 'Input',
                                id: '351506',
                                visible: 'true',
                              },
                              line_number: 28,
                            },
                            {
                              type: 'reloadDataSource',
                              dataId: 166236961046413600,
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '625243',
                                pageJsonId: '530274',
                                dataSourceId: 166899604180262620,
                                dataSourceName: 'nextTacheList',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '4067582',
                                    code: 'header',
                                    name: '请求头参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '8239965',
                                    code: 'path',
                                    name: '请求路径参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '963245',
                                    code: 'query',
                                    name: 'URL 参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '2028282',
                                    code: 'body',
                                    name: '请求体',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    children: [
                                      {
                                        attrId: '055846',
                                        code: 'flowAssociationParams',
                                        name: '流程相关的页面参数',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'datasource',
                                            'pageData',
                                            'data',
                                          ],
                                          code: 'flowAssociationParams',
                                        },
                                      },
                                      {
                                        attrId: '77602',
                                        code: 'tachePass',
                                        name: 'tachePass',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'form',
                                            'Form_0063102_5441816',
                                            'getFieldsValue',
                                          ],
                                          code: 'tachePass',
                                        },
                                      },
                                      {
                                        attrId: '054334',
                                        code: 'flowCode',
                                        name: 'flowCode',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '447578',
                                        code: 'orderType',
                                        name: 'orderType',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '67828',
                                        code: 'level',
                                        name: '最高审批等级',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '1950086',
                                        code: 'workId',
                                        name: 'workId',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '44774524',
                                        code: 'workItemId',
                                        name: 'workItemId',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'datasource',
                                            'fixedParam',
                                            'data',
                                          ],
                                          code: 'workItemId',
                                        },
                                      },
                                      {
                                        attrId: '104702',
                                        code: 'tacheCode',
                                        name: 'tacheCode',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '007501',
                                        code: 'endLevel',
                                        name: 'endLevel',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'datasource',
                                            'fixedParam',
                                            'data',
                                          ],
                                          code: 'endLevel',
                                        },
                                      },
                                      {
                                        attrId: '259759',
                                        code: 'sameList',
                                        name: 'sameList',
                                        type: 'objectArray',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '811219',
                                            code: 'meetingRemark',
                                            name: 'meetingRemark',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '6113832',
                                            code: 'nextStaff',
                                            name: 'nextStaff',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '984343',
                                            code: 'createStaff',
                                            name: 'createStaff',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '780118',
                                            code: 'createStaffName',
                                            name: 'createStaffName',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '6253935',
                                            code: 'createTime',
                                            name: 'createTime',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '337065',
                                            code: 'effectDate',
                                            name: 'effectDate',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '637292',
                                            code: 'handleObjCode',
                                            name: 'handleObjCode',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '59523',
                                            code: 'nextStaffName',
                                            name: 'nextStaffName',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '2144276',
                                            code: 'nextTache',
                                            name: 'nextTache',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '4793034',
                                            code: 'approveOrdNbr',
                                            name: 'approveOrdNbr',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '051125',
                                            code: 'busiObjStatus',
                                            name: 'busiObjStatus',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '227237',
                                            code: 'busiObjSubType',
                                            name: 'busiObjSubType',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '008727',
                                            code: 'lastHandleTime',
                                            name: 'lastHandleTime',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '311233',
                                            code: 'workId',
                                            name: 'workId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '2347154',
                                            code: 'workItemId',
                                            name: 'workItemId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '5904394',
                                            code: 'tacheCode',
                                            name: 'tacheCode',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '0060695',
                                            code: 'tacheName',
                                            name: 'tacheName',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '9728522',
                                            code: 'tachePass',
                                            name: 'tachePass',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '39711129',
                                            code: 'tacheRemark',
                                            name: 'tacheRemark',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '565718',
                                            code: 'handleStaffName',
                                            name: 'handleStaffName',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '98636',
                                            code: 'keyId',
                                            name: 'keyId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '2039836',
                                            code: 'title',
                                            name: 'title',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '560007',
                                            code: 'handleObjType',
                                            name: 'handleObjType',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              line_number: 29,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '975184',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context:
                                          '$refData.current.nextTacheList.resultData.length$',
                                        operate: '==',
                                        manualValue: '1',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 166368111522588380,
                                  elseIfs: [],
                                  line_number: 30,
                                  callback1: [
                                    {
                                      type: 'console',
                                      dataId: 166368111522547230,
                                      shielding: true,
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '555361',
                                        pageJsonId: '6260603',
                                        value: ['我只有一条数据'],
                                      },
                                      line_number: 31,
                                    },
                                    {
                                      type: 'setValue',
                                      dataId: 166368111522535600,
                                      options: {
                                        compId: 'Select_6041524_150172',
                                        compLib: 'comm',
                                        pageJsonId: '6260603',
                                        compName: 'Select',
                                        id: '894812',
                                        value:
                                          '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                      },
                                      line_number: 32,
                                      callback1: [
                                        {
                                          type: 'customActionCode',
                                          dataId: 166368111522578430,
                                          options: {
                                            compId: 'customActionCode',
                                            compName: 'page',
                                            id: '406126',
                                            pageJsonId: '6260603',
                                            code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                          },
                                          line_number: 33,
                                          callback1: [
                                            {
                                              type: 'callSelfFunc',
                                              dataId: 166368111522520300,
                                              options: {
                                                compId: 'callSelfFunc',
                                                compName: 'system',
                                                id: '856161',
                                                pageJsonId: '6260603',
                                                customFuncName:
                                                  'nextTacheChange',
                                                customFuncParams:
                                                  '$data_406126$',
                                              },
                                              line_number: 34,
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
                              callback2: [],
                            },
                            {
                              type: 'setRequired',
                              dataId: 167004892856738140,
                              shielding: true,
                              options: {
                                compId: 'TextArea_4776246_432797',
                                compLib: 'comm',
                                pageJsonId: 30,
                                compName: 'TextArea',
                                id: '7691286',
                                required: 'true',
                              },
                              line_number: 35,
                            },
                          ],
                        },
                      ],
                      line_number: 5,
                      callback1: [
                        {
                          type: 'getValue',
                          dataId: 170167096942892200,
                          options: {
                            compId: 'TextArea_4776246_432797',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'TextArea',
                            id: '71521',
                          },
                          line_number: 6,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 170167208287285280,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '065339',
                                pageJsonId: 30,
                                value: ['审批意见：', '$value_71521$'],
                              },
                              line_number: 7,
                            },
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '077183',
                                  options: {
                                    context: '$value_71521$',
                                    operate: 'empty',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                                {
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$value_71521$',
                                    operate: '==',
                                    manualValue: '同意',
                                  },
                                  condId: '3660031',
                                  connector: '||',
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 170167096942890940,
                              elseIfs: [],
                              line_number: 8,
                              callback1: [
                                {
                                  type: 'setValue',
                                  dataId: 170167096942878600,
                                  options: {
                                    compId: 'TextArea_4776246_432797',
                                    compLib: 'comm',
                                    pageJsonId: 30,
                                    compName: 'TextArea',
                                    id: '471489',
                                    valueList: {
                                      TextArea_4776246_432797: '不同意',
                                    },
                                  },
                                  line_number: 9,
                                  callback1: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'setVisible',
                          dataId: 166236694988686400,
                          options: {
                            compId: 'Input_668689_6608047',
                            compLib: 'comm',
                            pageJsonId: '530274',
                            compName: 'Input',
                            id: '3881435',
                            visible: '',
                          },
                          line_number: 10,
                        },
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '993841',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$state.firstTacheFlag$',
                                operate: '==',
                                manualValue: 'Y',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166237948836877000,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166237956035378880,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166237957532121660,
                                  children: [],
                                  todoOptions: ['visible'],
                                  options: {
                                    compId: 'Select_6041524_150172',
                                    compLib: 'comm',
                                    pageJsonId: '530274',
                                    compName: 'Select',
                                    id: '436883',
                                    visible: 'true',
                                  },
                                  actionObjId: 'Select_6041524_150172',
                                  actionObjName: 'Select',
                                  value: 'setVisible',
                                  compLib: 'comm',
                                  line_number: 13,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166237956571346340,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 166237956571417920,
                                      children: [
                                        {
                                          dataName: 'condition',
                                          dataId: 166366266490631680,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 16636627126532904,
                                              children: [],
                                              todoOptions: ['valueArray'],
                                              options: {
                                                compId: 'debug',
                                                compName: 'system',
                                                id: '589715',
                                                pageJsonId: '530274',
                                                value: ['111'],
                                              },
                                              actionObjId: 'debug',
                                              actionObjName: 'system',
                                              value: 'console',
                                              shielding: true,
                                              line_number: 16,
                                            },
                                          ],
                                          elseIfs: [],
                                          condition: [
                                            {
                                              condId: '608065',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context:
                                                  '$data.nextTacheList.length$',
                                                operate: '==',
                                                manualValue: '1',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          shielding: true,
                                          line_number: 15,
                                        },
                                        {
                                          dataName: 'condition',
                                          dataId: 166368109878682940,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 166368109878672640,
                                              children: [],
                                              todoOptions: ['valueArray'],
                                              options: {
                                                compId: 'debug',
                                                compName: 'system',
                                                id: '696208',
                                                pageJsonId: '6260603',
                                                value: ['我只有一条数据'],
                                              },
                                              actionObjId: 'debug',
                                              actionObjName: 'system',
                                              value: 'console',
                                              shielding: true,
                                              line_number: 18,
                                            },
                                            {
                                              dataName: 'action',
                                              dataId: 166368109878682240,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 166368109878678080,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 166368109878607550,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 166368109878679650,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'action',
                                                              dataId: 166368109878606820,
                                                              children: [
                                                                {
                                                                  dataName:
                                                                    'callback',
                                                                  dataId: 166368109878693000,
                                                                  children: [],
                                                                  value:
                                                                    'callback1',
                                                                  params: [],
                                                                },
                                                                {
                                                                  dataName:
                                                                    'callback',
                                                                  dataId: 166368109878668060,
                                                                  children: [],
                                                                  value:
                                                                    'callback2',
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
                                                                compName:
                                                                  'system',
                                                                id: '731022',
                                                                pageJsonId:
                                                                  '6260603',
                                                                customFuncName:
                                                                  'nextTacheChange',
                                                                customFuncParams:
                                                                  '$data_1337368$',
                                                              },
                                                              actionObjId:
                                                                'callSelfFunc',
                                                              actionObjName:
                                                                'system',
                                                              value:
                                                                'callSelfFunc',
                                                              line_number: 21,
                                                            },
                                                          ],
                                                          value: 'callback1',
                                                          params: [],
                                                        },
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 166368109878607230,
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
                                                        compId:
                                                          'customActionCode',
                                                        compName: 'page',
                                                        id: '1337368',
                                                        pageJsonId: '6260603',
                                                        code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                                      },
                                                      actionObjId:
                                                        'customActionCode',
                                                      actionObjName: 'page',
                                                      value: 'customActionCode',
                                                      line_number: 20,
                                                    },
                                                  ],
                                                  value: 'callback1',
                                                  params: [],
                                                },
                                              ],
                                              todoOptions: ['value'],
                                              options: {
                                                compId: 'Select_6041524_150172',
                                                compLib: 'comm',
                                                pageJsonId: '6260603',
                                                compName: 'Select',
                                                id: '550143',
                                                value:
                                                  '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                                valueList: {
                                                  Select_6041524_150172:
                                                    '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                                },
                                              },
                                              actionObjId:
                                                'Select_6041524_150172',
                                              actionObjName: 'Select',
                                              value: 'setValue',
                                              compLib: 'comm',
                                              line_number: 19,
                                            },
                                          ],
                                          elseIfs: [],
                                          condition: [
                                            {
                                              condId: '975184',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context:
                                                  '$refData.current.nextTacheList.resultData.length$',
                                                operate: '==',
                                                manualValue: '1',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          desc: '如果只有一条数据',
                                          line_number: 17,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 166237956571493470,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: [
                                    'selectServerDataSource',
                                    'dataSourceReloadFilter',
                                  ],
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '706432',
                                    pageJsonId: '530274',
                                    dataSourceId: 166899604180262620,
                                    dataSourceName: 'nextTacheList',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '4067582',
                                        code: 'header',
                                        name: '请求头参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '8239965',
                                        code: 'path',
                                        name: '请求路径参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '963245',
                                        code: 'query',
                                        name: 'URL 参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '2028282',
                                        code: 'body',
                                        name: '请求体',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '055846',
                                            code: 'flowAssociationParams',
                                            name: '流程相关的页面参数',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'datasource',
                                                'pageData',
                                                'data',
                                              ],
                                              code: 'flowAssociationParams',
                                            },
                                          },
                                          {
                                            attrId: '77602',
                                            code: 'tachePass',
                                            name: 'tachePass',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'form',
                                                'Form_0063102_5441816',
                                                'getFieldsValue',
                                              ],
                                              code: 'tachePass',
                                            },
                                          },
                                          {
                                            attrId: '054334',
                                            code: 'flowCode',
                                            name: 'flowCode',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '447578',
                                            code: 'orderType',
                                            name: 'orderType',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '67828',
                                            code: 'level',
                                            name: '最高审批等级',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '1950086',
                                            code: 'workId',
                                            name: 'workId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '44774524',
                                            code: 'workItemId',
                                            name: 'workItemId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'datasource',
                                                'fixedParam',
                                                'data',
                                              ],
                                              code: 'workItemId',
                                            },
                                          },
                                          {
                                            attrId: '104702',
                                            code: 'tacheCode',
                                            name: 'tacheCode',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'datasource',
                                                'fixedParam',
                                                'data',
                                              ],
                                              code: 'tacheCode',
                                            },
                                          },
                                          {
                                            attrId: '007501',
                                            code: 'endLevel',
                                            name: 'endLevel',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'datasource',
                                                'fixedParam',
                                                'data',
                                              ],
                                              code: 'endLevel',
                                            },
                                          },
                                          {
                                            attrId: '259759',
                                            code: 'sameList',
                                            name: 'sameList',
                                            type: 'objectArray',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            children: [
                                              {
                                                attrId: '811219',
                                                code: 'meetingRemark',
                                                name: 'meetingRemark',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '6113832',
                                                code: 'nextStaff',
                                                name: 'nextStaff',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '984343',
                                                code: 'createStaff',
                                                name: 'createStaff',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '780118',
                                                code: 'createStaffName',
                                                name: 'createStaffName',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '6253935',
                                                code: 'createTime',
                                                name: 'createTime',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '337065',
                                                code: 'effectDate',
                                                name: 'effectDate',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '637292',
                                                code: 'handleObjCode',
                                                name: 'handleObjCode',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '59523',
                                                code: 'nextStaffName',
                                                name: 'nextStaffName',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2144276',
                                                code: 'nextTache',
                                                name: 'nextTache',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '4793034',
                                                code: 'approveOrdNbr',
                                                name: 'approveOrdNbr',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '051125',
                                                code: 'busiObjStatus',
                                                name: 'busiObjStatus',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '227237',
                                                code: 'busiObjSubType',
                                                name: 'busiObjSubType',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '008727',
                                                code: 'lastHandleTime',
                                                name: 'lastHandleTime',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '311233',
                                                code: 'workId',
                                                name: 'workId',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2347154',
                                                code: 'workItemId',
                                                name: 'workItemId',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '5904394',
                                                code: 'tacheCode',
                                                name: 'tacheCode',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '0060695',
                                                code: 'tacheName',
                                                name: 'tacheName',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '9728522',
                                                code: 'tachePass',
                                                name: 'tachePass',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '39711129',
                                                code: 'tacheRemark',
                                                name: 'tacheRemark',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '565718',
                                                code: 'handleStaffName',
                                                name: 'handleStaffName',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '98636',
                                                code: 'keyId',
                                                name: 'keyId',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2039836',
                                                code: 'title',
                                                name: 'title',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '560007',
                                                code: 'handleObjType',
                                                name: 'handleObjType',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  actionObjId: 'reloadDataSource',
                                  actionObjName: 'page',
                                  value: 'reloadDataSource',
                                  line_number: 14,
                                },
                              ],
                              condition: [],
                              callback: [
                                {
                                  type: 'setVisible',
                                  dataId: 166237957532121660,
                                  options: {
                                    compId: 'Select_6041524_150172',
                                    compLib: 'comm',
                                    pageJsonId: '530274',
                                    compName: 'Select',
                                    id: '436883',
                                    visible: 'true',
                                  },
                                  line_number: 13,
                                },
                                {
                                  type: 'reloadDataSource',
                                  dataId: 166237956571346340,
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '706432',
                                    pageJsonId: '530274',
                                    dataSourceId: 166899604180262620,
                                    dataSourceName: 'nextTacheList',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '4067582',
                                        code: 'header',
                                        name: '请求头参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '8239965',
                                        code: 'path',
                                        name: '请求路径参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '963245',
                                        code: 'query',
                                        name: 'URL 参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '2028282',
                                        code: 'body',
                                        name: '请求体',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '055846',
                                            code: 'flowAssociationParams',
                                            name: '流程相关的页面参数',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'datasource',
                                                'pageData',
                                                'data',
                                              ],
                                              code: 'flowAssociationParams',
                                            },
                                          },
                                          {
                                            attrId: '77602',
                                            code: 'tachePass',
                                            name: 'tachePass',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'form',
                                                'Form_0063102_5441816',
                                                'getFieldsValue',
                                              ],
                                              code: 'tachePass',
                                            },
                                          },
                                          {
                                            attrId: '054334',
                                            code: 'flowCode',
                                            name: 'flowCode',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '447578',
                                            code: 'orderType',
                                            name: 'orderType',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '67828',
                                            code: 'level',
                                            name: '最高审批等级',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '1950086',
                                            code: 'workId',
                                            name: 'workId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '44774524',
                                            code: 'workItemId',
                                            name: 'workItemId',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'datasource',
                                                'fixedParam',
                                                'data',
                                              ],
                                              code: 'workItemId',
                                            },
                                          },
                                          {
                                            attrId: '104702',
                                            code: 'tacheCode',
                                            name: 'tacheCode',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'datasource',
                                                'fixedParam',
                                                'data',
                                              ],
                                              code: 'tacheCode',
                                            },
                                          },
                                          {
                                            attrId: '007501',
                                            code: 'endLevel',
                                            name: 'endLevel',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'datasource',
                                                'fixedParam',
                                                'data',
                                              ],
                                              code: 'endLevel',
                                            },
                                          },
                                          {
                                            attrId: '259759',
                                            code: 'sameList',
                                            name: 'sameList',
                                            type: 'objectArray',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            children: [
                                              {
                                                attrId: '811219',
                                                code: 'meetingRemark',
                                                name: 'meetingRemark',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '6113832',
                                                code: 'nextStaff',
                                                name: 'nextStaff',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '984343',
                                                code: 'createStaff',
                                                name: 'createStaff',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '780118',
                                                code: 'createStaffName',
                                                name: 'createStaffName',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '6253935',
                                                code: 'createTime',
                                                name: 'createTime',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '337065',
                                                code: 'effectDate',
                                                name: 'effectDate',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '637292',
                                                code: 'handleObjCode',
                                                name: 'handleObjCode',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '59523',
                                                code: 'nextStaffName',
                                                name: 'nextStaffName',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2144276',
                                                code: 'nextTache',
                                                name: 'nextTache',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '4793034',
                                                code: 'approveOrdNbr',
                                                name: 'approveOrdNbr',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '051125',
                                                code: 'busiObjStatus',
                                                name: 'busiObjStatus',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '227237',
                                                code: 'busiObjSubType',
                                                name: 'busiObjSubType',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '008727',
                                                code: 'lastHandleTime',
                                                name: 'lastHandleTime',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '311233',
                                                code: 'workId',
                                                name: 'workId',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2347154',
                                                code: 'workItemId',
                                                name: 'workItemId',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '5904394',
                                                code: 'tacheCode',
                                                name: 'tacheCode',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '0060695',
                                                code: 'tacheName',
                                                name: 'tacheName',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '9728522',
                                                code: 'tachePass',
                                                name: 'tachePass',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '39711129',
                                                code: 'tacheRemark',
                                                name: 'tacheRemark',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '565718',
                                                code: 'handleStaffName',
                                                name: 'handleStaffName',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '98636',
                                                code: 'keyId',
                                                name: 'keyId',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2039836',
                                                code: 'title',
                                                name: 'title',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '560007',
                                                code: 'handleObjType',
                                                name: 'handleObjType',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 14,
                                  callback1: [
                                    {
                                      type: 'ifelse',
                                      shielding: true,
                                      condition: [
                                        {
                                          condId: '608065',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context:
                                              '$data.nextTacheList.length$',
                                            operate: '==',
                                            manualValue: '1',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 166366266490631680,
                                      elseIfs: [],
                                      line_number: 15,
                                      callback1: [
                                        {
                                          type: 'console',
                                          dataId: 16636627126532904,
                                          shielding: true,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '589715',
                                            pageJsonId: '530274',
                                            value: ['111'],
                                          },
                                          line_number: 16,
                                        },
                                      ],
                                    },
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '975184',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context:
                                              '$refData.current.nextTacheList.resultData.length$',
                                            operate: '==',
                                            manualValue: '1',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 166368109878682940,
                                      elseIfs: [],
                                      line_number: 17,
                                      callback1: [
                                        {
                                          type: 'console',
                                          dataId: 166368109878672640,
                                          shielding: true,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '696208',
                                            pageJsonId: '6260603',
                                            value: ['我只有一条数据'],
                                          },
                                          line_number: 18,
                                        },
                                        {
                                          type: 'setValue',
                                          dataId: 166368109878682240,
                                          options: {
                                            compId: 'Select_6041524_150172',
                                            compLib: 'comm',
                                            pageJsonId: '6260603',
                                            compName: 'Select',
                                            id: '550143',
                                            value:
                                              '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                            valueList: {
                                              Select_6041524_150172:
                                                '$refData.current.nextTacheList.resultData[0].tacheCode$',
                                            },
                                          },
                                          line_number: 19,
                                          callback1: [
                                            {
                                              type: 'customActionCode',
                                              dataId: 166368109878607550,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '1337368',
                                                pageJsonId: '6260603',
                                                code: 'function main(data,state,success,fail){return success({"nextTacheList":refData.current.nextTacheList,"selectTacheCode":refData.current.nextTacheList.resultData[0].tacheCode})};',
                                              },
                                              line_number: 20,
                                              callback1: [
                                                {
                                                  type: 'callSelfFunc',
                                                  dataId: 166368109878606820,
                                                  options: {
                                                    compId: 'callSelfFunc',
                                                    compName: 'system',
                                                    id: '731022',
                                                    pageJsonId: '6260603',
                                                    customFuncName:
                                                      'nextTacheChange',
                                                    customFuncParams:
                                                      '$data_1337368$',
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
                              type: 'setVisible',
                              dataId: 166237955020183550,
                              options: {
                                compId: 'Select_6041524_150172',
                                compLib: 'comm',
                                pageJsonId: '530274',
                                compName: 'Select',
                                id: '6619175',
                                visible: '',
                              },
                              line_number: 12,
                            },
                          ],
                        },
                        {
                          type: 'setRequired',
                          dataId: 167004891033652220,
                          shielding: true,
                          options: {
                            compId: 'TextArea_4776246_432797',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'TextArea',
                            id: '6912475',
                            required: 'true',
                          },
                          line_number: 22,
                        },
                      ],
                    },
                  ];
                  eventDataifelse407.params =
                    [
                      {
                        title: '单选组取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(eventDataifelse407, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc307: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 169951064394161020,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '9129586',
                        pageJsonId: 30,
                        customFuncName: 'isShowRead',
                        customFuncParams: 'object',
                      },
                      line_number: 36,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc307.params =
                    [
                      {
                        title: '单选组取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc307,
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
                ref={(r: any) => (refs['Radio_774135_211748'] = r)}
                {...injectData}
              />
              <Select
                name={'下一处理环节'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={'14'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={true}
                filter={'none'}
                classification={'default'}
                placeholder={'请选择'}
                formItemIndex={1}
                fieldName={'nextTache'}
                allowClear={true}
                dataSource={getStaticDataSourceService(
                  data?.nextTacheList?.resultData,
                  'tacheName',
                  'tacheCode',
                )}
                $$componentItem={{
                  id: 'Select_6041524_150172',
                  uid: 'Select_6041524_150172',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatagetValue162: any = [
                    {
                      type: 'getValue',
                      dataId: 169277076018339740,
                      options: {
                        compId: 'Radio_774135_211748',
                        compLib: 'comm',
                        pageJsonId: 30,
                        compName: 'Radio',
                        id: '766371',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 169277077410618940,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '9723095',
                            pageJsonId: '6260603',
                            code: 'function main(data,state,success,fail){console.log(e);var showRemark=false;var ordersSubmit=state.ordersSubmit;if(value_766371=="pass"&&ordersSubmit&&ordersSubmit.svcCont&&ordersSubmit.svcCont.data&&ordersSubmit.svcCont.data.content){var content=ordersSubmit.svcCont.data.content;if(content.itemList&&content.itemList.filter(function(item){return item.childCatalogCode=="CLS_CP_0007_0007"}).length>0){console.log("====\\u5F53\\u524D\\u8FDB\\u5165\\u4E92\\u8054\\u7F51\\u4E13\\u7EBF\\u5224\\u65AD====",content.itemList);var item=content.itemList.filter(function(item){return item.childCatalogCode=="CLS_CP_0007_0007"})[0];for(var i=0;i<item.instList.length;++i){var instTemp=item.instList[i];var instAttrTemp=instTemp.instAttrList.filter(function(temp){return temp.attrCode=="isBig"&&temp.attrValue=="1"});if(instAttrTemp!==undefined&&instAttrTemp!==null){if(state.tacheCode==="CITY_DEPT_BRANCH_MANAGER"&&e!=="CITY_DEPT_MANAGER"){return fail({failMsg:"\\u6839\\u636E\\u5927\\u5E26\\u5BBD\\u4E92\\u8054\\u7F51\\u4E13\\u7EBF\\u5BA1\\u6279\\u8981\\u6C42\\uFF0C\\u4E0B\\u4E00\\u73AF\\u8282\\u9700\\u63D0\\u4EA4\\u81F3\\u3010\\u5E02\\u516C\\u53F8\\u90E8\\u95E8\\u6B63\\u804C\\u3011"})}if(state.tacheCode==="CITY_DEPT_MANAGER"&&e!=="CITY_BRANCH_LEADER"){return fail({failMsg:"\\u6839\\u636E\\u5927\\u5E26\\u5BBD\\u4E92\\u8054\\u7F51\\u4E13\\u7EBF\\u5BA1\\u6279\\u8981\\u6C42\\uFF0C\\u4E0B\\u4E00\\u73AF\\u8282\\u9700\\u63D0\\u4EA4\\u81F3\\u3010\\u5E02\\u516C\\u53F8\\u526F\\u603B\\u7ECF\\u7406\\u3011"})}if(state.tacheCode==="CITY_BRANCH_LEADER"&&!(e=="CITY_LEADER"||e=="PROVINCE_DEPT_MANAGER")){return fail({failMsg:"\\u6839\\u636E\\u5927\\u5E26\\u5BBD\\u4E92\\u8054\\u7F51\\u4E13\\u7EBF\\u5BA1\\u6279\\u8981\\u6C42\\uFF0C\\u4E0B\\u4E00\\u73AF\\u8282\\u9700\\u63D0\\u4EA4\\u81F3\\u3010\\u5E02\\u516C\\u53F8\\u603B\\u7ECF\\u7406\\u3011\\u6216\\u3010\\u7701\\u516C\\u53F8\\u90E8\\u95E8\\u5BA4\\u7ECF\\u7406\\u3011"})}}}if((state.tacheCode==="CITY_BRANCH_LEADER"||state.tacheCode==="CITY_LEADER")&&e=="PROVINCE_DEPT_MANAGER"){showRemark=true}}}return success({"nextTacheList":data.nextTacheList,"selectTacheCode":e,"showRemark":showRemark})};',
                            actionTitle: '',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 169277077410604160,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '629926',
                                pageJsonId: '6260603',
                                customFuncName: 'nextTacheChange',
                                customFuncParams: '$data_9723095$',
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '9318254',
                                  options: {
                                    context: '$data_9723095.showRemark$',
                                    operate: '== true',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 169286580633441280,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 169286587590473500,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 169286590519208480,
                                      children: [],
                                      todoOptions: ['visible', 'selectComp'],
                                      options: {
                                        compId: ['Text_770741'],
                                        compName: 'page',
                                        id: '8494798',
                                        pageJsonId: 30,
                                        visible: '',
                                        compid: ['Text_770741'],
                                      },
                                      actionObjId: 'sysSetVisible',
                                      actionObjName: 'page',
                                      value: 'sysSetVisible',
                                      line_number: 6,
                                    },
                                  ],
                                  condition: [],
                                  value: 'elseIf',
                                  callback: [
                                    {
                                      type: 'sysSetVisible',
                                      dataId: 169286590519208480,
                                      options: {
                                        compId: ['Text_770741'],
                                        compName: 'page',
                                        id: '8494798',
                                        pageJsonId: 30,
                                        visible: '',
                                        compid: ['Text_770741'],
                                      },
                                      line_number: 6,
                                    },
                                  ],
                                },
                              ],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'sysSetVisible',
                                  dataId: 16928659120178780,
                                  options: {
                                    compId: ['Text_770741'],
                                    compName: 'page',
                                    id: '7350218',
                                    pageJsonId: 30,
                                    visible: 'true',
                                    compid: ['Text_770741'],
                                  },
                                  line_number: 5,
                                },
                              ],
                            },
                          ],
                          callback2: [
                            {
                              type: 'showModal',
                              dataId: 169277077410644030,
                              options: {
                                compId: 'showModal',
                                compName: 'page',
                                id: '081691',
                                pageJsonId: 30,
                                type: 'info',
                                title: '下一步处理环节选择失败',
                                content: '$fail_9723095.failMsg$',
                              },
                              line_number: 7,
                              callback1: [
                                {
                                  type: 'clearValue',
                                  dataId: 169277077410602370,
                                  options: {
                                    compId: 'Select_6041524_150172',
                                    compLib: 'comm',
                                    pageJsonId: 30,
                                    compName: 'Select',
                                    id: '5920164',
                                  },
                                  line_number: 8,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169286592665473100,
                                  options: {
                                    compId: ['Text_770741'],
                                    compName: 'page',
                                    id: '406938',
                                    pageJsonId: 30,
                                    visible: '',
                                    compid: ['Text_770741'],
                                  },
                                  line_number: 9,
                                },
                              ],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                    },
                  ];
                  eventDatagetValue162.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDatagetValue162, { e }, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                  const eventDatacustomActionCode451: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166368062992132030,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '803468',
                        pageJsonId: '6260603',
                        code: 'function main(data,state,success,fail){console.log(e);var ordersSubmit=state.ordersSubmit;if(ordersSubmit&&ordersSubmit.svcCont&&ordersSubmit.svcCont.data&&ordersSubmit.svcCont.data.content){var content=ordersSubmit.svcCont.data.content;if(content.itemList&&content.itemList.filter(function(item){return item.childCatalogCode=="CLS_CP_0007_0007"}).length>0){console.log("====\\u5F53\\u524D\\u8FDB\\u5165\\u4E92\\u8054\\u7F51\\u4E13\\u7EBF\\u5224\\u65AD====",content.itemList);var item=content.itemList.filter(function(item){return item.childCatalogCode=="CLS_CP_0007_0007"})[0];for(var i=0;i<item.instList.length;++i){var instTemp=item.instList[i];var instAttrTemp=instTemp.instAttrList.filter(function(temp){return temp.attrCode=="isBig"&&temp.attrValue=="1"});if(instAttrTemp!==undefined&&instAttrTemp!==null){if(state.tacheCode==="CITY_DEPT_BRANCH_MANAGER"&&e!=="CITY_DEPT_MANAGER"){return fail({failMsg:"\\u6839\\u636E\\u5927\\u5E26\\u5BBD\\u4E92\\u8054\\u7F51\\u4E13\\u7EBF\\u5BA1\\u6279\\u8981\\u6C42\\uFF0C\\u4E0B\\u4E00\\u73AF\\u8282\\u9700\\u63D0\\u4EA4\\u81F3\\u3010\\u5E02\\u516C\\u53F8\\u90E8\\u95E8\\u6B63\\u804C\\u3011"})}if(state.tacheCode==="CITY_DEPT_MANAGER"&&e!=="CITY_BRANCH_LEADER"){return fail({failMsg:"\\u6839\\u636E\\u5927\\u5E26\\u5BBD\\u4E92\\u8054\\u7F51\\u4E13\\u7EBF\\u5BA1\\u6279\\u8981\\u6C42\\uFF0C\\u4E0B\\u4E00\\u73AF\\u8282\\u9700\\u63D0\\u4EA4\\u81F3\\u3010\\u5E02\\u516C\\u53F8\\u526F\\u603B\\u7ECF\\u7406\\u3011"})}if(state.tacheCode==="CITY_BRANCH_LEADER"&&!(e=="CITY_LEADER"||e=="PROVINCE_DEPT_MANAGER")){return fail({failMsg:"\\u6839\\u636E\\u5927\\u5E26\\u5BBD\\u4E92\\u8054\\u7F51\\u4E13\\u7EBF\\u5BA1\\u6279\\u8981\\u6C42\\uFF0C\\u4E0B\\u4E00\\u73AF\\u8282\\u9700\\u63D0\\u4EA4\\u81F3\\u3010\\u5E02\\u516C\\u53F8\\u603B\\u7ECF\\u7406\\u3011\\u6216\\u3010\\u7701\\u516C\\u53F8\\u90E8\\u95E8\\u5BA4\\u7ECF\\u7406\\u3011"})}}}}}return success({"nextTacheList":data.nextTacheList,"selectTacheCode":e})};',
                        actionTitle: '',
                      },
                      line_number: 10,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 166368062992137860,
                          shielding: true,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '2638336',
                            pageJsonId: '6260603',
                            customFuncName: 'nextTacheChange',
                            customFuncParams: '$data_803468$',
                          },
                          line_number: 11,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [
                        {
                          type: 'showModal',
                          dataId: 169208547118190080,
                          shielding: true,
                          options: {
                            compId: 'showModal',
                            compName: 'page',
                            id: '9073373',
                            pageJsonId: 30,
                            type: 'info',
                            title: '下一步处理环节选择失败',
                            content: '$fail_803468.failMsg$',
                          },
                          line_number: 12,
                          callback1: [
                            {
                              type: 'clearValue',
                              dataId: 169208554745946750,
                              shielding: true,
                              options: {
                                compId: 'Select_6041524_150172',
                                compLib: 'comm',
                                pageJsonId: 30,
                                compName: 'Select',
                                id: '113202',
                              },
                              line_number: 13,
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDatacustomActionCode451.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode451,
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
                ref={(r: any) => (refs['Select_6041524_150172'] = r)}
                {...injectData}
              />
              <Input
                name={'下一步处理人'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={'14'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'选择处理人'}
                postfixIconPosition={'before'}
                required={true}
                placeholder={'请选择处理人'}
                formItemIndex={2}
                fieldName={'nextStaffName'}
                postfixStyle={'3'}
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
                  id: 'Input_668689_6608047',
                  uid: 'Input_668689_6608047',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatagetSelectedData157: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 166547684276573920,
                      options: {
                        compId: 'Select_6041524_150172',
                        compLib: 'comm',
                        pageJsonId: '530274',
                        compName: 'Select',
                        id: '1932047',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '417841',
                              options: {
                                context: '$data.userPopCtrl.popupType$',
                                operate: '==',
                                useManual: true,
                                manualValue: 'post',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 16659723928556222,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166597344303980830,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166597344881641600,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 166597344881645300,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 166597344881630400,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 166597344881636060,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                              elseIfs: [],
                                            },
                                          ],
                                          todoOptions: ['value'],
                                          options: {
                                            compId: 'Input_668689_6608047',
                                            compLib: 'comm',
                                            pageJsonId: '530274',
                                            compName: 'Input',
                                            id: '288118',
                                            value:
                                              '$okData_1424606.staffSelect.userName$',
                                            valueList: {
                                              Input_668689_6608047:
                                                '$okData_1424606.staffSelect.userName$',
                                            },
                                          },
                                          actionObjId: 'Input_668689_6608047',
                                          actionObjName: 'Input',
                                          value: 'setValue',
                                          compLib: 'comm',
                                          elseIfs: [],
                                          line_number: 7,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 16659734488161124,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 166597344881695360,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                              elseIfs: [],
                                            },
                                          ],
                                          todoOptions: ['value'],
                                          options: {
                                            compId: 'Input_9206452_214088',
                                            compLib: 'comm',
                                            pageJsonId: '530274',
                                            compName: 'Input',
                                            id: '306824',
                                            value:
                                              '$okData_1424606.staffSelect.userCode$',
                                            valueList: {
                                              Input_9206452_214088:
                                                '$okData_1424606.staffSelect.orgUserRelId$',
                                            },
                                          },
                                          actionObjId: 'Input_9206452_214088',
                                          actionObjName: 'Input',
                                          value: 'setValue',
                                          compLib: 'comm',
                                          elseIfs: [],
                                          line_number: 8,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [
                                        {
                                          title: '弹窗确认回调参数',
                                          name: 'okData_016049',
                                          value: '$okData_1424606$',
                                        },
                                      ],
                                      elseIfs: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 166597344881613600,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      elseIfs: [],
                                    },
                                  ],
                                  todoOptions: ['modalname', 'compState'],
                                  options: {
                                    compId: 'showCustomModal',
                                    compName: 'page',
                                    id: '1424606',
                                    pageJsonId: '530274',
                                    modalname: '/audit/selectoneuser',
                                    pageId: '881887068344979456',
                                    paramsObj: {
                                      tacheCode:
                                        '$selectedData_1932047[0].value$',
                                      flowCode: '$data.fixedParam.flowCode$',
                                      workItemId:
                                        '$data.fixedParam.workItemId$',
                                    },
                                    paramsObjKeyValueMap: {
                                      tacheCode:
                                        '$selectedData_1932047[0].value$',
                                      flowCode: '$data.fixedParam.flowCode$',
                                      workItemId:
                                        '$data.fixedParam.workItemId$',
                                    },
                                  },
                                  actionObjId: 'showCustomModal',
                                  actionObjName: 'page',
                                  value: 'showCustomModal',
                                  elseIfs: [],
                                  line_number: 6,
                                },
                              ],
                              condition: [],
                              elseIfs: [],
                              callback: [
                                {
                                  type: 'showCustomModal',
                                  dataId: 166597344881641600,
                                  options: {
                                    compId: 'showCustomModal',
                                    compName: 'page',
                                    id: '1424606',
                                    pageJsonId: '530274',
                                    modalname: '/audit/selectoneuser',
                                    pageId: '881887068344979456',
                                    paramsObj: {
                                      tacheCode:
                                        '$selectedData_1932047[0].value$',
                                      flowCode: '$data.fixedParam.flowCode$',
                                      workItemId:
                                        '$data.fixedParam.workItemId$',
                                    },
                                    paramsObjKeyValueMap: {
                                      tacheCode:
                                        '$selectedData_1932047[0].value$',
                                      flowCode: '$data.fixedParam.flowCode$',
                                      workItemId:
                                        '$data.fixedParam.workItemId$',
                                    },
                                  },
                                  line_number: 6,
                                  callback1: [
                                    {
                                      type: 'setValue',
                                      dataId: 166597344881630400,
                                      options: {
                                        compId: 'Input_668689_6608047',
                                        compLib: 'comm',
                                        pageJsonId: '530274',
                                        compName: 'Input',
                                        id: '288118',
                                        value:
                                          '$okData_1424606.staffSelect.userName$',
                                        valueList: {
                                          Input_668689_6608047:
                                            '$okData_1424606.staffSelect.userName$',
                                        },
                                      },
                                      line_number: 7,
                                      callback1: [],
                                    },
                                    {
                                      type: 'setValue',
                                      dataId: 16659734488161124,
                                      options: {
                                        compId: 'Input_9206452_214088',
                                        compLib: 'comm',
                                        pageJsonId: '530274',
                                        compName: 'Input',
                                        id: '306824',
                                        value:
                                          '$okData_1424606.staffSelect.userCode$',
                                        valueList: {
                                          Input_9206452_214088:
                                            '$okData_1424606.staffSelect.orgUserRelId$',
                                        },
                                      },
                                      line_number: 8,
                                      callback1: [],
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
                              type: 'showCustomModal',
                              dataId: 166597239957664580,
                              options: {
                                compId: 'showCustomModal',
                                compName: 'page',
                                id: '443613',
                                pageJsonId: '530274',
                                modalname: '/audit/selectonepostuser',
                                pageId: '897014700989980672',
                                paramsObj: {
                                  tacheCode: '$selectedData_1932047[0].value$',
                                  flowCode: '$data.fixedParam.flowCode$',
                                },
                                paramsObjKeyValueMap: {
                                  tacheCode: '$selectedData_1932047[0].value$',
                                  flowCode: '$data.fixedParam.flowCode$',
                                },
                                modalPath: '/audit/selectonepostuser',
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'setValue',
                                  dataId: 166597239957605150,
                                  options: {
                                    compId: 'Input_668689_6608047',
                                    compLib: 'comm',
                                    pageJsonId: '530274',
                                    compName: 'Input',
                                    id: '694321',
                                    value: '$okData_443613.userName$',
                                    valueList: {
                                      Input_668689_6608047:
                                        '$okData_443613.userName$',
                                    },
                                  },
                                  line_number: 4,
                                  callback1: [],
                                },
                                {
                                  type: 'setValue',
                                  dataId: 166597239957634750,
                                  options: {
                                    compId: 'Input_9206452_214088',
                                    compLib: 'comm',
                                    pageJsonId: '530274',
                                    compName: 'Input',
                                    id: '6445214',
                                    value: '$okData_443613.userCode$',
                                    valueList: {
                                      Input_9206452_214088:
                                        '$okData_443613.orgUserRelId$',
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
                      callback2: [
                        {
                          type: 'showMessage',
                          dataId: 166547754215848640,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '719037',
                            pageJsonId: '530274',
                            type: 'info',
                            value: '请先选择下一处理环节',
                          },
                          line_number: 9,
                        },
                      ],
                    },
                  ];
                  eventDatagetSelectedData157.params = [] || [];
                  CMDGenerator(
                    eventDatagetSelectedData157,
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
                ref={(r: any) => (refs['Input_668689_6608047'] = r)}
                {...injectData}
              />
              <Input
                name={'处理人隐藏框'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={'14'}
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
                fieldName={'nextStaff'}
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
                  id: 'Input_9206452_214088',
                  uid: 'Input_9206452_214088',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_9206452_214088'] = r)}
                {...injectData}
              />
              <TextArea
                name={'审批意见'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={'14'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={4}
                fieldName={'tacheRemark'}
                className={'shenpiyijian'}
                maxLength={256}
                $$componentItem={{
                  id: 'TextArea_4776246_432797',
                  uid: 'TextArea_4776246_432797',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['TextArea_4776246_432797'] = r)}
                {...injectData}
              />
              <Input
                name={'抄送阅办'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={'14'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'选择抄送人'}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                formItemIndex={5}
                fieldName={'copyUserNameList'}
                postfixStyle={'3'}
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
                  id: 'Input_668689_0650375_084025',
                  uid: 'Input_668689_0650375_084025',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatashowCustomModal67: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166210687833854000,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '016049',
                        pageJsonId: '530274',
                        modalname: '/read/selectuserlist',
                        pageId: '1029331982738386944',
                        modalPath: '/read/selectuserlist',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 166536919364399330,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '449058',
                            pageJsonId: '530274',
                            value: ['$okData_016049$'],
                          },
                          line_number: 2,
                        },
                        {
                          type: 'setValue',
                          dataId: 166536917165723040,
                          options: {
                            compId: 'Input_668689_0650375_084025',
                            compLib: 'comm',
                            pageJsonId: '530274',
                            compName: 'Input',
                            id: '537468',
                            value: '$okData_016049.staffNameList$',
                            valueList: {
                              Input_668689_0650375_084025:
                                '$okData_016049.staffNameList$',
                            },
                          },
                          line_number: 3,
                          callback1: [],
                        },
                        {
                          type: 'setValue',
                          dataId: 166536917492150800,
                          options: {
                            compId: 'Input_9206452_583366_90175265',
                            compLib: 'comm',
                            pageJsonId: '530274',
                            compName: 'Input',
                            id: '970829',
                            value: '$okData_016049.staffIdList$',
                          },
                          line_number: 4,
                          callback1: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal67.params = [] || [];
                  CMDGenerator(
                    eventDatashowCustomModal67,
                    {},
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Input_668689_0650375_084025'] = r)}
                {...injectData}
              />
              <Radio
                name={'通用意见'}
                radioType={'Radio.Button'}
                optionMarginRight={10}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                formItemIndex={6}
                fieldName={'commonComment'}
                dataSource={getStaticDataSourceService(
                  data?.commonComments?.resultData,
                  'handleComment',
                  'handleComment',
                )}
                $$componentItem={{
                  id: 'Radio_349884',
                  uid: 'Radio_349884',
                  type: 'Radio',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatasetValue29: any = [
                    {
                      type: 'setValue',
                      dataId: 167029062015787070,
                      options: {
                        compId: 'TextArea_4776246_432797',
                        compLib: 'comm',
                        pageJsonId: 30,
                        compName: 'TextArea',
                        id: '879665',
                        valueList: {
                          TextArea_4776246_432797: '$e.target.value$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                    },
                  ];
                  eventDatasetValue29.params =
                    [
                      {
                        title: '单选组取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(eventDatasetValue29, { e }, 'setValue', {
                    id: 'setValue',
                    name: 'setValue',
                    type: 'setValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue94: any = [
                    {
                      type: 'clearValue',
                      dataId: 167029073418030080,
                      options: {
                        compId: 'Radio_349884',
                        compLib: 'comm',
                        pageJsonId: 30,
                        compName: 'Radio',
                        id: '5503736',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue94.params =
                    [
                      {
                        title: '单选组取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(eventDataclearValue94, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Radio_349884'] = r)}
                {...injectData}
              />
              <Text
                name={'备注'}
                content={'烦请领导协助流转至省公司刘心乐处，以便确认是否合规'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_770741',
                  uid: 'Text_770741',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                schema={{
                  compType: 1,
                  props: {
                    formItemIndex: 7,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: 'rgba(208, 2, 27, 1)',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  padding: '0px 0px 0px 100px',
                }}
                ref={(r: any) => (refs['Text_770741'] = r)}
                {...injectData}
              />
              <Input
                name={'抄送人隐藏框'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={'14'}
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
                fieldName={'copyUserList'}
                pageSrc={'/common/comment/listpage'}
                pageId={'907443177794400256'}
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
                  id: 'Input_9206452_583366_90175265',
                  uid: 'Input_9206452_583366_90175265',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_9206452_583366_90175265'] = r)}
                {...injectData}
              />
              <StdUpload
                name={'附件'}
                uploadStyle={'click'}
                listType={'text'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                fileNameEncode={false}
                isWatermark={false}
                optionalFile={false}
                fileName={'file'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={'16'}
                acceptType={[]}
                withCredentials={true}
                numberLimit={1}
                singleFileMaxSize={99}
                uploadText={'点击上传'}
                deleteIcon={{
                  deleteIconTheme: 'outlined',
                  deleteIconType: 'delete',
                  deleteIconIsIconFont: false,
                  showRemoveIcon: true,
                }}
                downloadIcon={{
                  downloadIconTheme: 'outlined',
                  downloadIconType: 'download',
                  downloadIconIsIconFont: false,
                  showDownloadIcon: true,
                }}
                previewIcon={{
                  previewIconTheme: 'outlined',
                  previewIconType: 'eye',
                  previewIconIsIconFont: false,
                  showPreviewIcon: true,
                }}
                formItemIndex={9}
                fieldName={'tacheAttachments'}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'StdUpload_3523188_48947',
                  uid: 'StdUpload_3523188_48947',
                  type: 'StdUpload',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['StdUpload_3523188_48947'] = r)}
                {...injectData}
              />
            </Form>
          </View>
          <Pageview
            name={'页面容器'}
            pageViewCompState={{}}
            pageSrc={'/common/comment/listpage'}
            pageId={'907443177794400256'}
            style={{ height: '100%', width: '100%' }}
            ref={(r: any) => (refs['Pageview_098802'] = r)}
            {...injectData}
          />
        </Row>
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'View_30_1122_56129022_411221',
            uid: 'View_30_1122_56129022_411221',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 0px 12px 0px',
            width: '100%',
            borderRadius: '0px 0px 2px 2px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 1px 0px 0px #e7e8ea inset',
          }}
          ref={(r: any) => (refs['View_30_1122_56129022_411221'] = r)}
          {...injectData}
        >
          <Button
            name={'取消'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            classification={'default'}
            type={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_30_122_408084_070965',
              uid: 'Button_30_122_408084_070965',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatacloseModal123: any = [
                {
                  type: 'closeModal',
                  dataId: 166928058970586270,
                  options: {
                    compId: 'closeModal',
                    compName: 'page',
                    id: '152619',
                    pageJsonId: 30,
                  },
                  line_number: 1,
                },
              ];
              eventDatacloseModal123.params =
                [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
              CMDGenerator(eventDatacloseModal123, { e }, 'closeModal', {
                id: 'closeModal',
                name: 'closeModal',
                type: 'closeModal',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Button_30_122_408084_070965'] = r)}
            {...injectData}
          />
          <Button
            name={'提交'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            classification={'default'}
            type={'primary'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_30_121_490898_246542',
              uid: 'Button_30_121_490898_246542',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '0px 0px 0px 24px' }}
            onClick={(e: any) => {
              const eventDataifelse408: any = [
                {
                  type: 'ifelse',
                  condition: [
                    {
                      condId: '637044',
                      options: {
                        useManual: true,
                        useObject: false,
                        context: '$state.isScreenShot$',
                        operate: '==',
                        manualValue: '1',
                      },
                      conditionType: 'checkContextValue',
                      objType: 'system',
                      objId: 'sys',
                    },
                  ],
                  dataId: 167100160276699780,
                  elseIfs: [],
                  line_number: 1,
                  callback1: [
                    {
                      type: 'apiRequest',
                      dataId: 167100161255829700,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '836085',
                        pageJsonId: 30,
                        sync: false,
                        actionTitle: '',
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'saveFIleInfo',
                        _apiCode: 'saveFIleInfo',
                        _source: 'rhin',
                        _serviceId: '877444731684675584',
                        _serviceTitle: '插入附件信息-hdb: saveFIleInfo',
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
                            dataKey: '836085_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '836085_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '836085_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'fileId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileId',
                                compType: 'Input',
                                name: 'fileId',
                                parents: ['body'],
                                id: 'body.fileId',
                                dataKey: '836085_body.fileId',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.fileId$',
                                },
                              },
                              {
                                code: 'fileCode',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileCode',
                                compType: 'Input',
                                name: 'fileCode',
                                parents: ['body'],
                                id: 'body.fileCode',
                                dataKey: '836085_body.fileCode',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.fileCode$',
                                },
                              },
                              {
                                code: 'tacheCode',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.tacheCode',
                                compType: 'Input',
                                name: 'tacheCode',
                                parents: ['body'],
                                id: 'body.tacheCode',
                                dataKey: '836085_body.tacheCode',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.tacheCode$',
                                },
                              },
                              {
                                code: 'fileName',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileName',
                                compType: 'Input',
                                name: 'fileName',
                                parents: ['body'],
                                id: 'body.fileName',
                                dataKey: '836085_body.fileName',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.fileName$',
                                },
                              },
                              {
                                code: 'fileType',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileType',
                                compType: 'Input',
                                name: 'fileType',
                                parents: ['body'],
                                id: 'body.fileType',
                                dataKey: '836085_body.fileType',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.fileType$',
                                },
                              },
                              {
                                code: 'fileStatus',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileStatus',
                                compType: 'Input',
                                name: 'fileStatus',
                                parents: ['body'],
                                id: 'body.fileStatus',
                                dataKey: '836085_body.fileStatus',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.fileStatus$',
                                },
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
                                dataKey: '836085_body.createStaff',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.createStaff$',
                                },
                              },
                              {
                                code: 'createDate',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createDate',
                                compType: 'Input',
                                name: 'createDate',
                                parents: ['body'],
                                id: 'body.createDate',
                                dataKey: '836085_body.createDate',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.createDate$',
                                },
                              },
                              {
                                code: 'createDepart',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.createDepart',
                                compType: 'Input',
                                name: 'createDepart',
                                parents: ['body'],
                                id: 'body.createDepart',
                                dataKey: '836085_body.createDepart',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.createDepart$',
                                },
                              },
                              {
                                code: 'fileUrl',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileUrl',
                                compType: 'Input',
                                name: 'fileUrl',
                                parents: ['body'],
                                id: 'body.fileUrl',
                                dataKey: '836085_body.fileUrl',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.fileUrl$',
                                },
                              },
                              {
                                code: 'filePath',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.filePath',
                                compType: 'Input',
                                name: 'filePath',
                                parents: ['body'],
                                id: 'body.filePath',
                                dataKey: '836085_body.filePath',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.filePath$',
                                },
                              },
                              {
                                code: 'fileServerType',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileServerType',
                                compType: 'Input',
                                name: 'fileServerType',
                                parents: ['body'],
                                id: 'body.fileServerType',
                                dataKey: '836085_body.fileServerType',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.fileServerType$',
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
                                dataKey: '836085_body.catalogCode',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.catalogCode$',
                                },
                              },
                              {
                                code: 'fileInstType',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileInstType',
                                compType: 'Input',
                                name: 'fileInstType',
                                parents: ['body'],
                                id: 'body.fileInstType',
                                dataKey: '836085_body.fileInstType',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.fileTypeName$',
                                },
                              },
                              {
                                code: 'fileInstNbr',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileInstNbr',
                                compType: 'Input',
                                name: 'fileInstNbr',
                                parents: ['body'],
                                id: 'body.fileInstNbr',
                                dataKey: '836085_body.fileInstNbr',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.instNbr$',
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
                                dataKey: '836085_body.workId',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.workId$',
                                },
                              },
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
                                dataKey: '836085_body.workItemId',
                                value: {
                                  type: ['customize'],
                                  code: '$state.fileInfoObj.workItemId$',
                                },
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '836085_body',
                          },
                        ],
                        _sourceName: '插入附件信息-hdb',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                },
              ];
              eventDataifelse408.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDataifelse408, { e }, 'ifelse', {
                id: 'ifelse',
                name: 'ifelse',
                type: 'ifelse',
                platform: 'pc',
              });
              const eventDatacustomActionCode452: any = [
                {
                  type: 'customActionCode',
                  dataId: 167808409189531300,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '634401',
                    pageJsonId: 30,
                    code: 'function main(data,state,success,fail){var _state$ordersSubmit,_state$ordersSubmit$s,_state$ordersSubmit$s2,_state$ordersSubmit$s3;var catalogCodes=state===null||state===void 0?void 0:(_state$ordersSubmit=state.ordersSubmit)===null||_state$ordersSubmit===void 0?void 0:(_state$ordersSubmit$s=_state$ordersSubmit.svcCont)===null||_state$ordersSubmit$s===void 0?void 0:(_state$ordersSubmit$s2=_state$ordersSubmit$s.data)===null||_state$ordersSubmit$s2===void 0?void 0:(_state$ordersSubmit$s3=_state$ordersSubmit$s2.content)===null||_state$ordersSubmit$s3===void 0?void 0:_state$ordersSubmit$s3.itemList.map(function(item){return item.childCatalogCode});console.log("\\u5BA1\\u6279\\u5904\\u7406-catalogCodes",catalogCodes);if((catalogCodes===null||catalogCodes===void 0?void 0:catalogCodes.length)>0){if(catalogCodes.indexOf("CLS_DZ_0001_0001")>-1||catalogCodes.indexOf("CLS_DZ_0001_0002")>-1){success("CLS_DZ_0001_0001");return}else if(catalogCodes.indexOf("CLS_JC_0003_0002")>-1){success("CLS_JC_0003_0002");return}else if(catalogCodes.indexOf("CLS_CP_0017_0001")>-1){success("CLS_CP_0017_0001");return}else if(catalogCodes.indexOf("CLS_JC_0004_0003")>-1){success("CLS_JC_0004_0003");return}}fail()};',
                    actionTitle: '判断是否有需特殊处理的场景',
                  },
                  line_number: 3,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '7116812',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$data_634401$',
                            operate: '==',
                            manualValue: 'CLS_DZ_0001_0001',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167808443363803170,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 168767443062480000,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 168767447271186300,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 168767447271151780,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 168767447271147420,
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
                                id: '187891',
                                pageJsonId: 30,
                                customFuncName: 'CLS_JC_0003_0002_Deal',
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              line_number: 6,
                            },
                          ],
                          condition: [
                            {
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$data_634401$',
                                operate: '==',
                                manualValue: 'CLS_JC_0003_0002',
                              },
                              condId: '2777735',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          value: 'elseIf',
                          desc: '场景包含红名单到期提醒',
                          callback: [
                            {
                              type: 'callSelfFunc',
                              dataId: 168767447271186300,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '187891',
                                pageJsonId: 30,
                                customFuncName: 'CLS_JC_0003_0002_Deal',
                              },
                              line_number: 6,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                        {
                          dataName: 'elseIf',
                          dataId: 168794545296299600,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 168794547731407230,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 168794547731413150,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 168794547731482460,
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
                                id: '7110003',
                                pageJsonId: 30,
                                customFuncName: 'CLS_CP_0017_0001_Deal',
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              line_number: 7,
                            },
                          ],
                          condition: [
                            {
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$data_634401$',
                                operate: '==',
                                manualValue: 'CLS_CP_0017_0001',
                              },
                              condId: '233753',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          value: 'elseIf',
                          desc: '1+N+N',
                          callback: [
                            {
                              type: 'callSelfFunc',
                              dataId: 168794547731407230,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '7110003',
                                pageJsonId: 30,
                                customFuncName: 'CLS_CP_0017_0001_Deal',
                              },
                              line_number: 7,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                        {
                          dataName: 'elseIf',
                          dataId: 170480670721940740,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170480674684934750,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 170480674684952540,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 170480674684952350,
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
                                id: '014139',
                                pageJsonId: 30,
                                customFuncName: 'CLS_JC_0004_0003_DEAL',
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              line_number: 8,
                            },
                          ],
                          condition: [
                            {
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$data_634401$',
                                operate: '==',
                                manualValue: 'CLS_JC_0004_0003',
                              },
                              condId: '611456',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          value: 'elseIf',
                          desc: '重要集团增减',
                          callback: [
                            {
                              type: 'callSelfFunc',
                              dataId: 170480674684934750,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '014139',
                                pageJsonId: 30,
                                customFuncName: 'CLS_JC_0004_0003_DEAL',
                              },
                              line_number: 8,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      line_number: 4,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 167808464939992770,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '98602',
                            pageJsonId: 30,
                            customFuncName: 'CLS_DZ_0001_0001_Deal',
                          },
                          line_number: 5,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                    },
                  ],
                  callback2: [
                    {
                      type: 'callSelfFunc',
                      dataId: 167808442925479300,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '537134',
                        pageJsonId: 30,
                        customFuncName: 'approvalDeal',
                      },
                      line_number: 9,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                },
              ];
              eventDatacustomActionCode452.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode452,
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
            ref={(r: any) => (refs['Button_30_121_490898_246542'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AuditCommonPopup$$Modal, {
  pageId: '911800134937767936',
  hasLogin: false,
  dataSource,
  defaultState: {
    tacheCode: '',
    endLevel: '',
    firstTacheFlag: '',
    hidePass: '',
    optResultDesc: '',
    flowCode: '',
    readHandleType: '',
    workItemId: '',
    busiObjNbr: '',
    isRollback: '',
    ordersSubmit: '',
    workId: '',
    isScreenShot: '',
    fileInfoObj: '',
  },
});
