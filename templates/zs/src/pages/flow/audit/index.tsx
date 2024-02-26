// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Button } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '874567207627108352';
const FlowAudit$$Page: React.FC<PageProps> = ({
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
  const fillTacheRemark = (options_233843: any) => {
    const eventDatasetCompState: any = [
      {
        type: 'setCompState',
        dataId: 166806934924247800,
        options: {
          compId: 'BOFramer_123191',
          compLib: '@/components',
          pageJsonId: 30,
          compName: 'BOFramer',
          id: '988503',
          paramsObj: {},
          paramsObjKeyValueMap: { optResultDesc: '' },
        },
        line_number: 1,
      },
    ];
    eventDatasetCompState.params =
      [
        {
          title: '事件入参',
          name: 'options_233843',
          value: '$options_233843$',
        },
      ] || [];
    CMDGenerator(eventDatasetCompState, { options_233843 }, 'setCompState', {
      id: 'setCompState',
      name: 'setCompState',
      type: 'setCompState',
      platform: 'undefined',
    }); // console 166807476200055840
    console.log('fill end');
    const eventDatasetCompState1: any = [
      {
        type: 'setCompState',
        dataId: 166807576850131740,
        options: {
          compId: 'BOFramer_123191',
          compLib: '@/components',
          pageJsonId: 30,
          compName: 'BOFramer',
          id: '8900405',
          paramsObj: { optResultDesc: '$options_233843.handleComment$' },
          paramsObjKeyValueMap: {
            optResultDesc: '$options_233843.handleComment$',
          },
        },
        line_number: 3,
      },
    ];
    eventDatasetCompState1.params =
      [
        {
          title: '事件入参',
          name: 'options_233843',
          value: '$options_233843$',
        },
      ] || [];
    CMDGenerator(eventDatasetCompState1, { options_233843 }, 'setCompState', {
      id: 'setCompState',
      name: 'setCompState',
      type: 'setCompState',
      platform: 'undefined',
    });
  };
  const updateOrderSubmit = (options_03318: any) => {
    const eventDatacustomActionCode29: any = [
      {
        type: 'customActionCode',
        dataId: 167722960554070200,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '005362',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){var _data$ordersSubmit,_data$ordersSubmit$sv,_data$ordersSubmit$sv2,_data$ordersSubmit$sv3;console.log("\\u6D41\\u7A0B\\u5BA1\\u6279\\u5F00\\u59CB-\\u4E8B\\u4EF6\\u5165\\u53C2",options_03318);console.log("\\u6D41\\u7A0B\\u5BA1\\u6279\\u5F00\\u59CB-data.ordersSubmit",data.ordersSubmit);console.log("\\u6D41\\u7A0B\\u5BA1\\u6279\\u5F00\\u59CB-data.draft_message",data.draft_message);var itemList=(_data$ordersSubmit=data.ordersSubmit)===null||_data$ordersSubmit===void 0?void 0:(_data$ordersSubmit$sv=_data$ordersSubmit.svcCont)===null||_data$ordersSubmit$sv===void 0?void 0:(_data$ordersSubmit$sv2=_data$ordersSubmit$sv.data)===null||_data$ordersSubmit$sv2===void 0?void 0:(_data$ordersSubmit$sv3=_data$ordersSubmit$sv2.content)===null||_data$ordersSubmit$sv3===void 0?void 0:_data$ordersSubmit$sv3.itemList;var index=itemList===null||itemList===void 0?void 0:itemList.findIndex(function(item){return item.childCatalogCode===options_03318.childCatalogCode});if(index>-1){itemList[index]=options_03318;console.log("\\u6D41\\u7A0B\\u5BA1\\u6279\\u7ED3\\u675F-data.ordersSubmit",data.ordersSubmit)}};',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode29.params =
      [
        { title: '事件入参', name: 'options_03318', value: '$options_03318$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode29,
      { options_03318 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const setIsRollback = (options_890314: any) => {
    const eventDatasetDataSource5: any = [
      {
        type: 'setDataSource',
        dataId: 167723045505973000,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '725063',
          pageJsonId: 30,
          dataSourceId: 166236345165384420,
          dataSourceName: 'globalParam',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '3661234',
              code: 'workId',
              name: '属性',
              type: 'string',
              initialData: { type: 'static', value: '工单id' },
            },
            {
              attrId: '741886',
              code: 'tacheCode',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '965906',
              code: 'endLevel',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '5146853',
              code: 'firstTacheFlag',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '277256',
              code: 'flowCode',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '222796',
              code: 'readHandleType',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '773058',
              code: 'workItemId',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '800932',
              code: 'busiObjNbr',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '932944',
              code: 'isRollback',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['context', '$options_890314$'], code: '' },
            },
            {
              attrId: '380684',
              code: 'optResultDesc',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '081785',
              code: 'meetingType',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '224208',
              code: 'meetingOrderType',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 168059586278291870,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '316677',
              pageJsonId: 30,
              value: ['流程审批-isRollback', '$data.globalParam$'],
            },
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDatasetDataSource5.params =
      [
        {
          title: '事件入参',
          name: 'options_890314',
          value: '$options_890314$',
        },
      ] || [];
    CMDGenerator(eventDatasetDataSource5, { options_890314 }, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    }); // console 168059590284698880
    console.log('流程审批-设置编辑状态-事件入参', options_890314);
  };
  const hidePreviousStep = (options_6788244: any) => {
    const eventDatasysSetVisible: any = [
      {
        type: 'sysSetVisible',
        dataId: 168431551483139070,
        options: {
          compId: ['Button_30_121_905546'],
          compName: 'page',
          id: '47782414',
          pageJsonId: 30,
          visible: '',
          compid: ['Button_30_121_905546'],
        },
        line_number: 1,
      },
    ];
    eventDatasysSetVisible.params =
      [
        {
          title: '事件入参',
          name: 'options_6788244',
          value: '$options_6788244$',
        },
      ] || [];
    CMDGenerator(eventDatasysSetVisible, { options_6788244 }, 'sysSetVisible', {
      id: 'sysSetVisible',
      name: 'sysSetVisible',
      type: 'sysSetVisible',
      platform: 'undefined',
    });
  };
  const disableSubmit = (options_725406: any) => {
    const eventDatasysSetDisable: any = [
      {
        type: 'sysSetDisable',
        dataId: 168431642012165900,
        options: {
          compId: ['Button_30_121'],
          compName: 'page',
          id: '606695',
          pageJsonId: 30,
          disabled: 'true',
          compid: ['Button_30_121'],
        },
        line_number: 1,
      },
    ];
    eventDatasysSetDisable.params =
      [
        {
          title: '事件入参',
          name: 'options_725406',
          value: '$options_725406$',
        },
      ] || [];
    CMDGenerator(eventDatasysSetDisable, { options_725406 }, 'sysSetDisable', {
      id: 'sysSetDisable',
      name: 'sysSetDisable',
      type: 'sysSetDisable',
      platform: 'undefined',
    });
  };
  const assignApproveList = (options_789748: any) => {
    const eventDatacustomActionCode30: any = [
      {
        type: 'customActionCode',
        dataId: 170003600660606880,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '825049',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){data.globalParam.approveList=options_789748;console.log("\\u6D41\\u7A0B\\u6D4B\\u8BD5\\u5BA1\\u6279\\u9875\\u9762,\\u4F1A\\u7B7E\\u5217\\u8868\\u8D4B\\u503C\\uFF1A",data.globalParam.approveList)};',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode30.params =
      [
        {
          title: '事件入参',
          name: 'options_789748',
          value: '$options_789748$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode30,
      { options_789748 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const tacheFlowUpdateData = (options_1413133: any) => {
    const eventDatacustomActionCode31: any = [
      {
        type: 'customActionCode',
        dataId: 170055172906008320,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '025847',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){var sceneSubmit=options_1413133.sceneSubmit;var sceneCode=options_1413133.sceneCode;console.log("\\u73AF\\u8282\\u4E2D\\u4FEE\\u6539\\u6570\\u636E\\u53C2\\u6570\\uFF1AsceneCode = ",sceneCode);if(sceneCode=="CLS_CP_0003_0001"){data.globalParam.isRollback="1"}else if(sceneCode=="CLS_JC_0001_0002"){data.globalParam.isRollback="1"}else if(sceneCode=="CLS_JC_0001_0004"){data.globalParam.isRollback="1"}else if(sceneCode=="CLS_JC_0001_0005"){data.globalParam.isRollback="1"}else if(sceneCode=="CLS_JC_0001_0003"){data.globalParam.isRollback="1"}success(sceneSubmit)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callSelfFunc',
            dataId: 170055174236301470,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '968995',
              pageJsonId: 30,
              customFuncName: 'updateOrderSubmit',
              customFuncParams: '$data_025847$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 170055233144391900,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '682471',
              pageJsonId: 30,
              value: ['全局参数：', '$data.globalParam$'],
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode31.params =
      [
        {
          title: '事件入参',
          name: 'options_1413133',
          value: '$options_1413133$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode31,
      { options_1413133 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const checkBeforeSubmit = (options_827591: any) => {
    const eventDataifelse30: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '3044587',
            options: { context: '$data.pageData$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: {
              useManual: true,
              useObject: false,
              context: '$data.pageData.isNeedCheck$',
              operate: '==',
              manualValue: '1',
            },
            condId: '847821',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170055296700731330,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 170055300931701540,
            children: [
              {
                dataName: 'action',
                dataId: 170055563878377500,
                children: [],
                todoOptions: ['valueArray'],
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '1968665',
                  pageJsonId: 30,
                  value: ['是否需要校验：不需要校验'],
                },
                actionObjId: 'debug',
                actionObjName: 'system',
                value: 'console',
                line_number: 7,
              },
              {
                dataName: 'action',
                dataId: 170055564248229250,
                children: [],
                todoOptions: [
                  'returnType',
                  'returnValue',
                  'isPreventDefault',
                  'isStopPropagation',
                ],
                options: {
                  compId: 'return',
                  compName: 'system',
                  id: '65382',
                  pageJsonId: 30,
                  returnType: 'success',
                },
                actionObjId: 'return',
                actionObjName: 'system',
                value: 'return',
                line_number: 8,
              },
            ],
            condition: [],
            value: 'elseIf',
            desc: '',
            callback: [
              {
                type: 'console',
                dataId: 170055563878377500,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '1968665',
                  pageJsonId: 30,
                  value: ['是否需要校验：不需要校验'],
                },
                line_number: 7,
              },
              {
                type: 'return',
                dataId: 170055564248229250,
                options: {
                  compId: 'return',
                  compName: 'system',
                  id: '65382',
                  pageJsonId: 30,
                  returnType: 'success',
                },
                line_number: 8,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170055453936409340,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '965569',
              pageJsonId: 30,
              code: 'function main(data,state,success,fail){var _data$ordersSubmit,_data$ordersSubmit$sv,_data$ordersSubmit$sv2,_data$ordersSubmit$sv3;function checkBenefitAndFreeSms(item){var attrList=item===null||item===void 0?void 0:item.attrList;if(attrList&&attrList.length>0){for(var i=0;i<attrList.length;i++){var attrItem=attrList[i];if(attrItem&&attrItem["attrCode"]=="realDeliveryNum"){var val=attrItem["attrValue"];if(!val){return"\\u8BF7\\u5148\\u586B\\u5199\\u53D1\\u9001\\u91CF\\uFF08\\u5B9E\\u9645\\uFF09\\uFF01"}if(!/^[1-9]\\d*$/.test(val)){return"\\u8BF7\\u68C0\\u67E5\\u53D1\\u9001\\u91CF\\uFF08\\u5B9E\\u9645\\uFF09\\u662F\\u5426\\u586B\\u5199\\u6B63\\u786E"}else{return""}}}return"\\u8BF7\\u5148\\u586B\\u5199\\u53D1\\u9001\\u91CF\\uFF08\\u5B9E\\u9645\\uFF09\\uFF01"}}function checkFilerequired(item){var _item$customObject,_item$customObject2,_item$customObject3,_item$customObject4;var isSetMsg=false;var msg="";if(item!==null&&item!==void 0&&(_item$customObject=item.customObject)!==null&&_item$customObject!==void 0&&_item$customObject.customerFileList&&(item===null||item===void 0?void 0:(_item$customObject2=item.customObject)===null||_item$customObject2===void 0?void 0:_item$customObject2.customerFileList.length)>0&&item!==null&&item!==void 0&&(_item$customObject3=item.customObject)!==null&&_item$customObject3!==void 0&&_item$customObject3.settlementFileList&&(item===null||item===void 0?void 0:(_item$customObject4=item.customObject)===null||_item$customObject4===void 0?void 0:_item$customObject4.settlementFileList.length)>0){msg+=""}else{msg+="\\u8BF7\\u4E0A\\u4F20\\u6587\\u4EF6!"}var attrList=item===null||item===void 0?void 0:item.attrList;if(attrList&&attrList.length>0){for(var i=0;i<attrList.length;i++){var attrItem=attrList[i];if(attrItem&&attrItem["attrCode"]=="settlementAmount"){var val=attrItem["attrValue"];if(!val){msg+="\\u8BF7\\u5148\\u586B\\u5199\\uFF0C\\u7ED3\\u7B97\\u91D1\\u989D(\\u5143)!"}isSetMsg=true}}}if(!isSetMsg){msg+="\\u8BF7\\u5148\\u586B\\u5199\\uFF0C\\u7ED3\\u7B97\\u91D1\\u989D(\\u5143)!"}return msg}function checkSettlementFileList(item){var customObject=item===null||item===void 0?void 0:item.customObject;var attrList=item===null||item===void 0?void 0:item.attrList;if(!!customObject){var settlementFileList=customObject===null||customObject===void 0?void 0:customObject.settlementFileList;if(!!settlementFileList){if((settlementFileList===null||settlementFileList===void 0?void 0:settlementFileList.length)>0){if(attrList&&attrList.length>0){for(var i=0;i<attrList.length;i++){var attrItem=attrList[i];if(attrItem&&attrItem["attrCode"]=="settlementAmount"){var val=attrItem["attrValue"];if(!val){return"\\u8BF7\\u586B\\u5199\\u7ED3\\u7B97\\u91D1\\u989D!"}if(!/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,3})?$/.test(val)){return"\\u8BF7\\u68C0\\u67E5\\u7ED3\\u7B97\\u91D1\\u989D\\u662F\\u5426\\u586B\\u5199\\u6B63\\u786E!"}else{return""}}}}return"\\u8BF7\\u586B\\u5199\\u7ED3\\u7B97\\u91D1\\u989D!"}}return"\\u8BF7\\u4E0A\\u4F20\\u53CC\\u7B7E\\u6750\\u6599!"}}var needCheckSceneCodeList=["CLS_CP_0003_0001","CLS_JC_0001_0002","CLS_JC_0001_0003","CLS_JC_0001_0004","CLS_JC_0001_0005"];var itemList=((_data$ordersSubmit=data.ordersSubmit)===null||_data$ordersSubmit===void 0?void 0:(_data$ordersSubmit$sv=_data$ordersSubmit.svcCont)===null||_data$ordersSubmit$sv===void 0?void 0:(_data$ordersSubmit$sv2=_data$ordersSubmit$sv.data)===null||_data$ordersSubmit$sv2===void 0?void 0:(_data$ordersSubmit$sv3=_data$ordersSubmit$sv2.content)===null||_data$ordersSubmit$sv3===void 0?void 0:_data$ordersSubmit$sv3.itemList)||[];if(itemList&&itemList.length>0){var needCheckList=itemList.filter(function(item){return needCheckSceneCodeList.includes(item.childCatalogCode)});console.log("\\u9700\\u8981\\u6821\\u9A8C\\u7684\\u573A\\u666FneedCheckList = ",needCheckList);if(needCheckList.length>0){var errorMsg="";for(var i=0;i<needCheckList.length;i++){var item=needCheckList[i];if(item.childCatalogCode=="CLS_CP_0003_0001"){errorMsg=checkBenefitAndFreeSms(item)}if(item.childCatalogCode=="CLS_JC_0001_0002"||item.childCatalogCode=="CLS_JC_0001_0004"||item.childCatalogCode=="CLS_JC_0001_0005"){errorMsg=checkFilerequired(item)}if(item.childCatalogCode=="CLS_JC_0001_0003"){errorMsg=checkSettlementFileList(item)}}if(!errorMsg){success()}else{fail(errorMsg)}}else{success()}}else{success()}return true};',
              actionTitle: '校验需要校验的数据',
            },
            line_number: 2,
            callback1: [
              {
                type: 'console',
                dataId: 170055558214178560,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '156124',
                  pageJsonId: 30,
                  value: ['是否需要校验：校验通过'],
                },
                line_number: 3,
              },
              {
                type: 'return',
                dataId: 170055558749246600,
                options: {
                  compId: 'return',
                  compName: 'system',
                  id: '710734',
                  pageJsonId: 30,
                  returnType: 'success',
                },
                line_number: 4,
              },
            ],
            callback2: [
              {
                type: 'console',
                dataId: 170055562012367300,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '99346',
                  pageJsonId: 30,
                  value: ['是否需要校验：校验失败'],
                },
                line_number: 5,
              },
              {
                type: 'return',
                dataId: 170055562998748580,
                options: {
                  compId: 'return',
                  compName: 'system',
                  id: '858977',
                  pageJsonId: 30,
                  returnType: 'failure',
                  returnValue: '$fail_965569$',
                },
                line_number: 6,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse30.params =
      [
        {
          title: '事件入参',
          name: 'options_827591',
          value: '$options_827591$',
        },
      ] || [];
    CMDGenerator(eventDataifelse30, { options_827591 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 170055549049829800
    console.log('是否需要校验：', data?.pageData?.isNeedCheck);
  };
  const setIsNeedCheck = (options_782899: any) => {
    const eventDatasetDataSource6: any = [
      {
        type: 'setDataSource',
        dataId: 170055489061505060,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '715119',
          pageJsonId: 30,
          dataSourceId: 170055294059104800,
          dataSourceName: 'pageData',
          dataSourceRelType: 'custom',
          dataSourceSetValue: [
            {
              attrId: '4417318',
              code: 'isNeedCheck',
              name: '是否需要校验表单（当在环节中修改数据时使用）',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              value: {
                type: ['context', '$options_782899$'],
                code: 'isNeedCheck',
              },
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource6.params =
      [
        {
          title: '事件入参',
          name: 'options_782899',
          value: '$options_782899$',
        },
      ] || [];
    CMDGenerator(eventDatasetDataSource6, { options_782899 }, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    }); // console 170055546136987260
    console.log('设置是否需要校验：', options_782899);
  };
  const addFile = (options_166101: any) => {
    const eventDatacustomActionCode32: any = [
      {
        type: 'customActionCode',
        dataId: 170056832250700350,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '890878',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){var _data$ordersSubmit,_data$ordersSubmit$sv,_data$ordersSubmit$sv2,_data$ordersSubmit$sv3;console.log("====\\u9644\\u4EF6\\u6DFB\\u52A0====");var itemList=(_data$ordersSubmit=data.ordersSubmit)===null||_data$ordersSubmit===void 0?void 0:(_data$ordersSubmit$sv=_data$ordersSubmit.svcCont)===null||_data$ordersSubmit$sv===void 0?void 0:(_data$ordersSubmit$sv2=_data$ordersSubmit$sv.data)===null||_data$ordersSubmit$sv2===void 0?void 0:(_data$ordersSubmit$sv3=_data$ordersSubmit$sv2.content)===null||_data$ordersSubmit$sv3===void 0?void 0:_data$ordersSubmit$sv3.itemList;if(itemList!=null&&itemList!=undefined){itemList[0].fileInfo=options_166101}};',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode32.params =
      [
        {
          title: '事件入参',
          name: 'options_166101',
          value: '$options_166101$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode32,
      { options_166101 },
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
    fillTacheRemark,
    updateOrderSubmit,
    setIsRollback,
    hidePreviousStep,
    disableSubmit,
    assignApproveList,
    tacheFlowUpdateData,
    checkBeforeSubmit,
    setIsNeedCheck,
    addFile,
  }));

  useEffect(() => {
    // console 167722859457772670
    console.log('流程审批界面urlParam', urlParam);
    // console 167722862502434180
    console.log('流程审批state', state);
    const eventDatacustomActionCode225: any = [
      {
        type: 'customActionCode',
        dataId: 166936852024433920,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '419338',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){data.globalParam.tacheCode=state.tacheCode;data.globalParam.isRollback=state.isRollback;var coding=urlParam.busiObjNbr;console.log("coding = ",coding);if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);console.log("ordersSubmit = ",ordersSubmit);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u6570\\u636E\\u6E90\\u6570\\u636E\\uFF1A",data.ordersSubmit);success();return}}};',
          actionTitle: '设置审批单对象',
        },
        line_number: 3,
        callback1: [
          {
            type: 'console',
            dataId: 166936866733476380,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '112063',
              pageJsonId: 30,
              value: ['流程审批-ordersSubmit', '$data.ordersSubmit$'],
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode225.params = [] || [];
    CMDGenerator(eventDatacustomActionCode225, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode226: any = [
      {
        type: 'customActionCode',
        dataId: 166391328106333060,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9657334',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){var footer=document.querySelector(".View_View_30_1122");footer.style.left="".concat(footer.parentNode.getBoundingClientRect().x,"px");footer.style.right="58px"};',
        },
        line_number: 5,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode226.params = [] || [];
    CMDGenerator(eventDatacustomActionCode226, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    }); // console 166847562758437000
    console.log(urlParam?.scene);
    const eventDataifelse79: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '3877174',
            options: {
              context: '$urlParam.scene$',
              operate: 'notEmpty',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: {
              useManual: true,
              context: '$urlParam.scene$',
              operate: '!=',
              manualValue: 'V',
            },
            condId: '4501066',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166385119415152930,
        elseIfs: [],
        line_number: 7,
        callback1: [
          {
            type: 'console',
            dataId: 168984210930485730,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '47394',
              pageJsonId: 30,
              value: ['$urlParam.workItemId$', '"$urlParam.workItemId$"'],
            },
            line_number: 8,
          },
          {
            type: 'apiRequest',
            dataId: 166385155434054270,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '862299',
              pageJsonId: 30,
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'getFlowItemSimpleInfo',
              _apiCode: 'getFlowItemSimpleInfo',
              _source: 'rhin',
              _serviceId: '874132034304221184',
              _serviceTitle: '获取流程环节实例简要信息: getFlowItemSimpleInfo',
              params: 'object',
              apiRequestSetParams: [
                {
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'header',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'header',
                  dataKey: '593559_header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'path',
                  dataKey: '593559_path',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'query',
                  dataKey: '593559_query',
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
                      _id: 'body.workItemId',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      id: 'body.workItemId',
                      dataKey: '593559_body.workItemId',
                      value: { type: ['page', 'url'], code: 'workItemId' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'body',
                  dataKey: '593559_body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
            },
            line_number: 9,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '408733',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_862299?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166385155434039840,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166385155434019460,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166385155434028740,
                        children: [],
                        todoOptions: ['msgType', 'value'],
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '7283676',
                          pageJsonId: 30,
                          type: 'info',
                          value: '$reply_862299?.resultMsg$',
                        },
                        actionObjId: 'showMessage',
                        actionObjName: 'system',
                        value: 'showMessage',
                        line_number: 21,
                      },
                    ],
                    condition: [],
                    callback: [
                      {
                        type: 'showMessage',
                        dataId: 166385155434028740,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '7283676',
                          pageJsonId: 30,
                          type: 'info',
                          value: '$reply_862299?.resultMsg$',
                        },
                        line_number: 21,
                      },
                    ],
                  },
                ],
                line_number: 10,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.traceCode$',
                          operate: '==',
                          manualValue: 'APPLY_FINISH',
                        },
                        condId: '939063',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167031636804805020,
                    elseIfs: [],
                    line_number: 11,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167031641889453700,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '401653',
                          pageJsonId: 30,
                          dataSourceId: 167031628718825860,
                          dataSourceName: 'hidePass',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '879928',
                              code: 'hidePass',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              value: { type: ['customize'], code: 'Y' },
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
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.traceCode$',
                          operate: '==',
                          manualValue: 'APPLY_CREATE',
                        },
                        condId: '939063',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166867672411048160,
                    elseIfs: [],
                    line_number: 13,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 166867676494136600,
                        options: {
                          compId: 'Button_3413253_309566',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '628698',
                          visible: 'true',
                        },
                        line_number: 14,
                      },
                      {
                        type: 'setDataSource',
                        dataId: 167530857511015170,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '077217',
                          pageJsonId: 30,
                          dataSourceId: 167031628718825860,
                          dataSourceName: 'hidePass',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '879928',
                              code: 'hidePass',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              value: { type: ['customize'], code: 'Y' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 15,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '757617',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.showMeetingBtn$',
                          operate: '==',
                          manualValue: 'Y',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166385155434093820,
                    elseIfs: [],
                    line_number: 16,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 166385155434057000,
                        options: {
                          compId: 'Button_3413253',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '844053',
                          visible: 'true',
                        },
                        line_number: 17,
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '981179',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_862299?.resultData.showSubmitBtn$',
                          operate: '==',
                          manualValue: 'N',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166385155434025600,
                    elseIfs: [],
                    line_number: 18,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 166385155434082300,
                        options: {
                          compId: 'Button_30_121',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '8866812',
                          visible: '',
                        },
                        line_number: 19,
                      },
                    ],
                  },
                  {
                    type: 'setDataSource',
                    dataId: 166996530361432580,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '0746243',
                      pageJsonId: 30,
                      dataSourceId: 166236345165384420,
                      dataSourceName: 'globalParam',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '3661234',
                          code: 'workId',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static', value: '工单id' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.workId$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['workId'],
                          _idpath: ['3661234'],
                        },
                        {
                          attrId: '741886',
                          code: 'tacheCode',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.traceCode$',
                            ],
                            code: '',
                            hideAttr: true,
                          },
                          showInput: true,
                          _codePath: ['tacheCode'],
                          _idpath: ['741886'],
                        },
                        {
                          attrId: '965906',
                          code: 'endLevel',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.endLevel$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['endLevel'],
                          _idpath: ['965906'],
                        },
                        {
                          attrId: '5146853',
                          code: 'firstTacheFlag',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.firstTacheFlag$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['firstTacheFlag'],
                          _idpath: ['5146853'],
                        },
                        {
                          attrId: '277256',
                          code: 'flowCode',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.flowCode$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['flowCode'],
                          _idpath: ['277256'],
                        },
                        {
                          attrId: '222796',
                          code: 'readHandleType',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.readHandleType$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['readHandleType'],
                          _idpath: ['222796'],
                        },
                        {
                          attrId: '773058',
                          code: 'workItemId',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.workItemId$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['workItemId'],
                          _idpath: ['773058'],
                        },
                        {
                          attrId: '800932',
                          code: 'busiObjNbr',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.busiObjNbr$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['busiObjNbr'],
                          _idpath: ['800932'],
                        },
                        {
                          attrId: '932944',
                          code: 'isRollback',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: { type: [], code: '' },
                          showInput: true,
                          _codePath: ['isRollback'],
                          _idpath: ['932944'],
                        },
                        {
                          attrId: '380684',
                          code: 'optResultDesc',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['optResultDesc'],
                          _idpath: ['380684'],
                        },
                        {
                          attrId: '081785',
                          code: 'meetingType',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.meetingType$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['meetingType'],
                          _idpath: ['081785'],
                        },
                        {
                          attrId: '224208',
                          code: 'meetingOrderType',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_862299?.resultData.meetingOrderType$',
                            ],
                            hideAttr: true,
                            code: '',
                          },
                          showInput: true,
                          _codePath: ['meetingOrderType'],
                          _idpath: ['224208'],
                        },
                        {
                          attrId: '2158884',
                          code: 'approveList',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['approveList'],
                          _idpath: ['2158884'],
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 20,
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
    ];
    eventDataifelse79.params = [] || [];
    CMDGenerator(eventDataifelse79, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacustomActionCode227: any = [
      {
        type: 'customActionCode',
        dataId: 168802453017363940,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '627985',
          pageJsonId: 30,
          code: 'function main(data,state,success,fail){var _data$ordersSubmit,_data$ordersSubmit$sv,_data$ordersSubmit$sv2,_data$ordersSubmit$sv3,_data$ordersSubmit$sv4,_data$ordersSubmit2,_data$ordersSubmit2$s,_data$ordersSubmit2$s2,_data$ordersSubmit3,_data$ordersSubmit3$s,_data$ordersSubmit3$s2;console.log("\\u6D41\\u7A0B\\u5BA1\\u6279\\u4E0A\\u4E00\\u6B65-data.ordersSubmit",data.ordersSubmit);console.log("\\u6D41\\u7A0B\\u5BA1\\u6279\\u4E0A\\u4E00\\u6B65-isRollback",state.isRollback);var initShow=state.isRollback==1;var childCatalogCodes=(_data$ordersSubmit=data.ordersSubmit)===null||_data$ordersSubmit===void 0?void 0:(_data$ordersSubmit$sv=_data$ordersSubmit.svcCont)===null||_data$ordersSubmit$sv===void 0?void 0:(_data$ordersSubmit$sv2=_data$ordersSubmit$sv.data)===null||_data$ordersSubmit$sv2===void 0?void 0:(_data$ordersSubmit$sv3=_data$ordersSubmit$sv2.content)===null||_data$ordersSubmit$sv3===void 0?void 0:(_data$ordersSubmit$sv4=_data$ordersSubmit$sv3.itemList)===null||_data$ordersSubmit$sv4===void 0?void 0:_data$ordersSubmit$sv4.map(function(item){return item.childCatalogCode});if(childCatalogCodes!=null&&childCatalogCodes!=undefined){if(childCatalogCodes.indexOf("CLS_TY_0001_0004")>-1||childCatalogCodes.indexOf("CLS_JC_0003_0002")>-1){success(initShow);return}}var channelCode=(_data$ordersSubmit2=data.ordersSubmit)===null||_data$ordersSubmit2===void 0?void 0:(_data$ordersSubmit2$s=_data$ordersSubmit2.svcCont)===null||_data$ordersSubmit2$s===void 0?void 0:(_data$ordersSubmit2$s2=_data$ordersSubmit2$s.data)===null||_data$ordersSubmit2$s2===void 0?void 0:_data$ordersSubmit2$s2.channelCode;var sourceFrom=(_data$ordersSubmit3=data.ordersSubmit)===null||_data$ordersSubmit3===void 0?void 0:(_data$ordersSubmit3$s=_data$ordersSubmit3.svcCont)===null||_data$ordersSubmit3$s===void 0?void 0:(_data$ordersSubmit3$s2=_data$ordersSubmit3$s.data)===null||_data$ordersSubmit3$s2===void 0?void 0:_data$ordersSubmit3$s2.sourceFrom;success(initShow&&channelCode==="sales"&&sourceFrom==="gaap")};',
          actionTitle: '上一步是否显示',
        },
        line_number: 22,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '363279',
                options: {
                  context: '$data_627985$',
                  operate: '== true',
                  manualValue: '1',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168802453590057200,
            elseIfs: [],
            line_number: 23,
            callback1: [
              {
                type: 'setVisible',
                dataId: 168802453590184160,
                options: {
                  compId: 'Button_30_121_905546',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Button',
                  id: '952908',
                  visible: 'true',
                },
                line_number: 24,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode227.params = [] || [];
    CMDGenerator(eventDatacustomActionCode227, {}, 'customActionCode', {
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
          height: '100%',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_30_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'VerticalView_30_11',
            uid: 'VerticalView_30_11',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            width: '100%',
            overflowY: 'auto',
            margin: '0px 0px 0px 0px',
            height: '40px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_30_11')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_30_1122',
              uid: 'View_30_1122',
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
              padding: '0px 0px 0px 0px',
              width: 'auto',
              borderRadius: '0px 0px 2px 2px',
              margin: '20px 0px 0px 0px',
              position: 'fixed',
              bottom: '0',
              left: '0',
              'background-color': '#f0f0f0',
              'z-index': '3',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_1122')}
            {...injectData}
          >
            <Button
              name={'返回'}
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
                id: 'Button_30_122',
                uid: 'Button_30_122',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatahistoryGoBack: any = [
                  {
                    type: 'historyGoBack',
                    dataId: 166011929585577440,
                    shielding: true,
                    options: {
                      compId: 'page',
                      compName: 'system',
                      id: '901464',
                      pageJsonId: 30,
                    },
                    line_number: 1,
                  },
                ];
                eventDatahistoryGoBack.params =
                  [
                    {
                      title: '事件对象',
                      name: 'e',
                      value: '$e$',
                      label: '事件对象',
                    },
                  ] || [];
                CMDGenerator(eventDatahistoryGoBack, { e }, 'historyGoBack', {
                  id: 'historyGoBack',
                  name: 'historyGoBack',
                  type: 'historyGoBack',
                  platform: 'pc',
                });
                const eventDatacustomActionCode380: any = [
                  {
                    type: 'customActionCode',
                    dataId: 167409483810088450,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '12379394',
                      pageJsonId: 30,
                      code: 'function main(data,state,success,fail){window.localStorage.removeItem(urlParam.busiObjNbr);success()};',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode380.params =
                  [
                    {
                      title: '事件对象',
                      name: 'e',
                      value: '$e$',
                      label: '事件对象',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatacustomActionCode380,
                  { e },
                  'customActionCode',
                  {
                    id: 'customActionCode',
                    name: 'customActionCode',
                    type: 'customActionCode',
                    platform: 'pc',
                  },
                );
                const eventDatacustomActionCode381: any = [
                  {
                    type: 'customActionCode',
                    dataId: 169957933609499140,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '718637',
                      pageJsonId: '030387',
                      code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                      actionTitle: '如果当前页面是window.open打开',
                    },
                    line_number: 3,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode381.params =
                  [
                    {
                      title: '事件对象',
                      name: 'e',
                      value: '$e$',
                      label: '事件对象',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatacustomActionCode381,
                  { e },
                  'customActionCode',
                  {
                    id: 'customActionCode',
                    name: 'customActionCode',
                    type: 'customActionCode',
                    platform: 'pc',
                  },
                );
                const eventDataifelse357: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '517656',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$urlParam.origin$',
                          operate: '==',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167144268151983870,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 167894740803651780,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 169468501139494660,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169468502654270340,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 169468502654212100,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 169468502654215840,
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
                                  compId: 'callCustomPageFunc',
                                  compName: 'system',
                                  id: '930322',
                                  pageJsonId: 30,
                                  pathname: '/marketDeptApproveWorkbench',
                                  pageId: '953465319297417216',
                                  modalPath: '/marketDeptApproveWorkbench',
                                  customFuncName: 'refreshTable',
                                  customFuncParams: 'object',
                                  paramsObj: { originTab: '$state.originTab$' },
                                  paramsObjKeyValueMap: {
                                    originTab: '$state.originTab$',
                                  },
                                },
                                actionObjId: 'callCustomPageFunc',
                                actionObjName: 'system',
                                value: 'callCustomPageFunc',
                                tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                line_number: 9,
                              },
                            ],
                            elseIfs: [],
                            condition: [
                              {
                                condId: '382017',
                                options: {
                                  context: '$state.originTab$',
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
                                  context: '$state.originTab$',
                                  operate: '!=',
                                  manualValue: 'none',
                                },
                                condId: '807848',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            value: 'condition',
                            desc: '防止非工作台发起',
                            line_number: 8,
                          },
                          {
                            dataName: 'action',
                            dataId: 167894743131024350,
                            children: [],
                            todoOptions: [
                              'historyType',
                              'pathname',
                              'searchParams',
                            ],
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '7187898',
                              pageJsonId: 30,
                              type: 'push',
                              pathname: '/marketDeptApproveWorkbench',
                              selectedType: 'page',
                            },
                            actionObjId: 'history',
                            actionObjName: 'system',
                            value: 'history',
                            line_number: 10,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$urlParam.origin$',
                              operate: '==',
                              manualValue: '1',
                            },
                            condId: '17009',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '等于1，说明入口为市场部审批工作台',
                        callback: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '382017',
                                options: {
                                  context: '$state.originTab$',
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
                                  context: '$state.originTab$',
                                  operate: '!=',
                                  manualValue: 'none',
                                },
                                condId: '807848',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169468501139494660,
                            elseIfs: [],
                            line_number: 8,
                            callback1: [
                              {
                                type: 'callCustomPageFunc',
                                dataId: 169468502654270340,
                                options: {
                                  compId: 'callCustomPageFunc',
                                  compName: 'system',
                                  id: '930322',
                                  pageJsonId: 30,
                                  pathname: '/marketDeptApproveWorkbench',
                                  pageId: '953465319297417216',
                                  modalPath: '/marketDeptApproveWorkbench',
                                  customFuncName: 'refreshTable',
                                  customFuncParams: 'object',
                                  paramsObj: { originTab: '$state.originTab$' },
                                  paramsObjKeyValueMap: {
                                    originTab: '$state.originTab$',
                                  },
                                },
                                line_number: 9,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                          {
                            type: 'history',
                            dataId: 167894743131024350,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '7187898',
                              pageJsonId: 30,
                              type: 'push',
                              pathname: '/marketDeptApproveWorkbench',
                              selectedType: 'page',
                            },
                            line_number: 10,
                          },
                        ],
                      },
                      {
                        dataName: 'elseIf',
                        dataId: 167144274579080960,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 167144274927004450,
                            children: [],
                            todoOptions: [
                              'historyType',
                              'pathname',
                              'searchParams',
                            ],
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '3214123',
                              pageJsonId: 30,
                              type: 'push',
                              pathname: '/approveOrderTodo',
                              selectedType: 'page',
                              pageId: '878815340415455232',
                            },
                            actionObjId: 'history',
                            actionObjName: 'system',
                            value: 'history',
                            line_number: 11,
                          },
                        ],
                        condition: [],
                        callback: [
                          {
                            type: 'history',
                            dataId: 167144274927004450,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '3214123',
                              pageJsonId: 30,
                              type: 'push',
                              pathname: '/approveOrderTodo',
                              selectedType: 'page',
                              pageId: '878815340415455232',
                            },
                            line_number: 11,
                          },
                        ],
                      },
                    ],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '382017',
                            options: {
                              context: '$state.originTab$',
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
                              context: '$state.originTab$',
                              operate: '!=',
                              manualValue: 'none',
                            },
                            condId: '807848',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169468494826597340,
                        elseIfs: [],
                        line_number: 5,
                        callback1: [
                          {
                            type: 'callCustomPageFunc',
                            dataId: 169468499077975200,
                            options: {
                              compId: 'callCustomPageFunc',
                              compName: 'system',
                              id: '817992',
                              pageJsonId: 30,
                              pathname: '/approveWorkbench',
                              pageId: '922008281896452096',
                              modalPath: '/approveWorkbench',
                              customFuncName: 'refreshTable',
                              customFuncParams: 'object',
                              paramsObj: { originTab: '$state.originTab$' },
                              paramsObjKeyValueMap: {
                                originTab: '$state.originTab$',
                              },
                            },
                            line_number: 6,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        type: 'history',
                        dataId: 167144273825548770,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '1657663',
                          pageJsonId: 30,
                          type: 'push',
                          pathname: '/approveWorkbench',
                          selectedType: 'page',
                          pageId: '922008281896452096',
                          modalPath: '/approveWorkbench',
                        },
                        line_number: 7,
                      },
                    ],
                  },
                ];
                eventDataifelse357.params =
                  [
                    {
                      title: '事件对象',
                      name: 'e',
                      value: '$e$',
                      label: '事件对象',
                    },
                  ] || [];
                CMDGenerator(eventDataifelse357, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_122')}
              {...injectData}
            />
            <Button
              name={'上一步'}
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
                id: 'Button_30_121_905546',
                uid: 'Button_30_121_905546',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatahistory3: any = [
                  {
                    type: 'history',
                    dataId: 166571816327252770,
                    options: {
                      compId: 'history',
                      compName: 'system',
                      id: '0664674',
                      pageJsonId: 30,
                      pathname: '/auditOrderPrepare',
                      selectedType: 'page',
                      pageId: '884045146848604160',
                      type: 'push',
                      paramsObj: {
                        workId: '$urlParam.workId$',
                        workItemId: '$urlParam.workItemId$',
                        busiObjNbr: '$urlParam.busiObjNbr$',
                        instNbr: '$urlParam.busiObjNbr$',
                        isRollback: '$state.isRollback$',
                        scene: 'U',
                        originTab: '$state.originTab$',
                        origin: '$urlParam.origin$',
                      },
                      paramsObjKeyValueMap: {
                        workId: '$urlParam.workId$',
                        workItemId: '$urlParam.workItemId$',
                        busiObjNbr: '$urlParam.busiObjNbr$',
                        instNbr: '$urlParam.busiObjNbr$',
                        isRollback: '$state.isRollback$',
                        scene: 'U',
                        originTab: '$state.originTab$',
                        origin: '$urlParam.origin$',
                      },
                      modalPath: '/auditOrderPrepare',
                    },
                    line_number: 1,
                  },
                ];
                eventDatahistory3.params =
                  [
                    {
                      title: '事件对象',
                      value: '$e$',
                      name: 'e',
                      label: '事件对象',
                    },
                  ] || [];
                CMDGenerator(eventDatahistory3, { e }, 'history', {
                  id: 'history',
                  name: 'history',
                  type: 'history',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_121_905546')}
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
                id: 'Button_30_121',
                uid: 'Button_30_121',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                // console 166996845177788830
                console.log(
                  data?.globalParam,
                  '弹窗前打印',
                  data?.ordersSubmit,
                );
                const eventDatashowCustomModal18: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166996300072028640,
                    shielding: true,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '6724509',
                      pageJsonId: 30,
                      modalname: '/auditCommonPopup',
                      pageId: '911800134937767936',
                      modalPath: '/auditCommonPopup',
                      paramsObj: {
                        tacheCode: '$data.globalParam.tacheCode$',
                        endLevel: '$data.globalParam.endLevel$',
                        firstTacheFlag: '$data.globalParam.firstTacheFlag$',
                        hidePass: '$data.hidePass.hidePass$',
                        optResultDesc: '$data.globalParam.optResultDesc$',
                        flowCode: '$data.globalParam.flowCode$',
                        readHandleType: '$data.globalParam.readHandleType$',
                        workItemId: '$data.globalParam.workItemId$',
                        busiObjNbr: '$data.globalParam.busiObjNbr$',
                        isRollback: '$data.globalParam.isRollback$',
                        ordersSubmit: '$data.ordersSubmit$',
                        workId: '$urlParam.workId$',
                        isScreenShot: '$state.isScreenshot$',
                        fileInfoObj: '$state.fileInfoObj$',
                        instNbr: '$urlParam.instNbr$',
                      },
                      paramsObjKeyValueMap: {
                        tacheCode: '$data.globalParam.tacheCode$',
                        endLevel: '$data.globalParam.endLevel$',
                        firstTacheFlag: '$data.globalParam.firstTacheFlag$',
                        hidePass: '$data.hidePass.hidePass$',
                        optResultDesc: '$data.globalParam.optResultDesc$',
                        flowCode: '$data.globalParam.flowCode$',
                        readHandleType: '$data.globalParam.readHandleType$',
                        workItemId: '$data.globalParam.workItemId$',
                        busiObjNbr: '$data.globalParam.busiObjNbr$',
                        isRollback: '$data.globalParam.isRollback$',
                        ordersSubmit: '$data.ordersSubmit$',
                        workId: '$urlParam.workId$',
                        isScreenShot: '$state.isScreenshot$',
                        fileInfoObj: '$state.fileInfoObj$',
                        instNbr: '$urlParam.instNbr$',
                      },
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169957920685604800,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '15020795',
                          pageJsonId: '030387',
                          code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                          actionTitle: '如果当前页面是window.open打开',
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
                            condId: '517656',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$urlParam.origin$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 1678947501142275,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167894750114249180,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 169468508588180670,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 169468510580998430,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 169468510580933860,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                        shielding: true,
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 169468510580953100,
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
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '397408',
                                      pageJsonId: 30,
                                      pathname: '/marketDeptApproveWorkbench',
                                      pageId: '953465319297417216',
                                      modalPath: '/marketDeptApproveWorkbench',
                                      customFuncName: 'refreshTable',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        originTab: '$state.originTab$',
                                      },
                                      paramsObjKeyValueMap: {
                                        originTab: '$state.originTab$',
                                      },
                                    },
                                    actionObjId: 'callCustomPageFunc',
                                    actionObjName: 'system',
                                    value: 'callCustomPageFunc',
                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                    shielding: true,
                                    line_number: 9,
                                  },
                                ],
                                elseIfs: [],
                                condition: [
                                  {
                                    condId: '335828',
                                    options: {
                                      context: '$state.originTab$',
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
                                      context: '$state.originTab$',
                                      operate: '!=',
                                      manualValue: 'none',
                                    },
                                    condId: '441667',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                value: 'condition',
                                desc: '防止非工作台发起 ',
                                shielding: true,
                                line_number: 8,
                              },
                              {
                                dataName: 'action',
                                dataId: 167894750114200960,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '0980017',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/marketDeptApproveWorkbench',
                                  selectedType: 'page',
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                shielding: true,
                                line_number: 10,
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$urlParam.origin$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                condId: '17009',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '等于1，说明入口为市场部审批工作台',
                            shielding: true,
                            callback: [
                              {
                                type: 'ifelse',
                                shielding: true,
                                condition: [
                                  {
                                    condId: '335828',
                                    options: {
                                      context: '$state.originTab$',
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
                                      context: '$state.originTab$',
                                      operate: '!=',
                                      manualValue: 'none',
                                    },
                                    condId: '441667',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 169468508588180670,
                                elseIfs: [],
                                line_number: 8,
                                callback1: [
                                  {
                                    type: 'callCustomPageFunc',
                                    dataId: 169468510580998430,
                                    shielding: true,
                                    options: {
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '397408',
                                      pageJsonId: 30,
                                      pathname: '/marketDeptApproveWorkbench',
                                      pageId: '953465319297417216',
                                      modalPath: '/marketDeptApproveWorkbench',
                                      customFuncName: 'refreshTable',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        originTab: '$state.originTab$',
                                      },
                                      paramsObjKeyValueMap: {
                                        originTab: '$state.originTab$',
                                      },
                                    },
                                    line_number: 9,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'history',
                                dataId: 167894750114200960,
                                shielding: true,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '0980017',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/marketDeptApproveWorkbench',
                                  selectedType: 'page',
                                },
                                line_number: 10,
                              },
                            ],
                          },
                          {
                            dataName: 'elseIf',
                            dataId: 167894750114234180,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167894750114200580,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '186465',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/approveOrderTodo',
                                  selectedType: 'page',
                                  pageId: '878815340415455232',
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                shielding: true,
                                line_number: 11,
                              },
                            ],
                            condition: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'history',
                                dataId: 167894750114200580,
                                shielding: true,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '186465',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/approveOrderTodo',
                                  selectedType: 'page',
                                  pageId: '878815340415455232',
                                },
                                line_number: 11,
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '335828',
                                options: {
                                  context: '$state.originTab$',
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
                                  context: '$state.originTab$',
                                  operate: '!=',
                                  manualValue: 'none',
                                },
                                condId: '441667',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169468505017810940,
                            elseIfs: [],
                            line_number: 5,
                            callback1: [
                              {
                                type: 'callCustomPageFunc',
                                dataId: 169468508975221250,
                                shielding: true,
                                options: {
                                  compId: 'callCustomPageFunc',
                                  compName: 'system',
                                  id: '904183',
                                  pageJsonId: 30,
                                  pathname: '/approveWorkbench',
                                  pageId: '922008281896452096',
                                  modalPath: '/approveWorkbench',
                                  customFuncName: 'refreshTable',
                                  customFuncParams: 'object',
                                  paramsObj: { originTab: '$state.originTab$' },
                                  paramsObjKeyValueMap: {
                                    originTab: '$state.originTab$',
                                  },
                                },
                                line_number: 6,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                          {
                            type: 'history',
                            dataId: 167894750114279700,
                            shielding: true,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '5808164',
                              pageJsonId: 30,
                              type: 'push',
                              pathname: '/approveWorkbench',
                              selectedType: 'page',
                              pageId: '922008281896452096',
                              modalPath: '/approveWorkbench',
                            },
                            line_number: 7,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal18.params =
                  [
                    {
                      title: '事件对象',
                      value: '$e$',
                      name: 'e',
                      label: '事件对象',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatashowCustomModal18,
                  { e },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
                const eventDatacallSelfFunc121: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 170055469851374880,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '941025',
                      pageJsonId: 30,
                      customFuncName: 'checkBeforeSubmit',
                    },
                    line_number: 12,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 170055582309085980,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '085394',
                          pageJsonId: 30,
                          value: ['校验返回：', '$customFunc_941025$'],
                        },
                        line_number: 13,
                      },
                      {
                        type: 'showCustomModal',
                        dataId: 170055606339204770,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '8167367',
                          pageJsonId: 30,
                          modalname: '/auditCommonPopup',
                          pageId: '911800134937767936',
                          modalPath: '/auditCommonPopup',
                          paramsObj: {
                            tacheCode: '$data.globalParam.tacheCode$',
                            endLevel: '$data.globalParam.endLevel$',
                            firstTacheFlag: '$data.globalParam.firstTacheFlag$',
                            hidePass: '$data.hidePass.hidePass$',
                            optResultDesc: '$data.globalParam.optResultDesc$',
                            flowCode: '$data.globalParam.flowCode$',
                            readHandleType: '$data.globalParam.readHandleType$',
                            workItemId: '$data.globalParam.workItemId$',
                            busiObjNbr: '$data.globalParam.busiObjNbr$',
                            isRollback: '$data.globalParam.isRollback$',
                            ordersSubmit: '$data.ordersSubmit$',
                            workId: '$urlParam.workId$',
                            isScreenShot: '$state.isScreenshot$',
                            fileInfoObj: '$state.fileInfoObj$',
                            instNbr: '$urlParam.instNbr$',
                          },
                          paramsObjKeyValueMap: {
                            tacheCode: '$data.globalParam.tacheCode$',
                            endLevel: '$data.globalParam.endLevel$',
                            firstTacheFlag: '$data.globalParam.firstTacheFlag$',
                            hidePass: '$data.hidePass.hidePass$',
                            optResultDesc: '$data.globalParam.optResultDesc$',
                            flowCode: '$data.globalParam.flowCode$',
                            readHandleType: '$data.globalParam.readHandleType$',
                            workItemId: '$data.globalParam.workItemId$',
                            busiObjNbr: '$data.globalParam.busiObjNbr$',
                            isRollback: '$data.globalParam.isRollback$',
                            ordersSubmit: '$data.ordersSubmit$',
                            workId: '$urlParam.workId$',
                            isScreenShot: '$state.isScreenshot$',
                            fileInfoObj: '$state.fileInfoObj$',
                            instNbr: '$urlParam.instNbr$',
                          },
                        },
                        line_number: 14,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 170055606339212220,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '042999',
                              pageJsonId: '030387',
                              code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                              actionTitle: '如果当前页面是window.open打开',
                            },
                            line_number: 15,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '517656',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$urlParam.origin$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 170055606339252160,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170055606339215800,
                                children: [
                                  {
                                    dataName: 'condition',
                                    dataId: 170055606339272900,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 170055606339273600,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 170055606339264830,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 170055606339251000,
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
                                          compId: 'callCustomPageFunc',
                                          compName: 'system',
                                          id: '5253032',
                                          pageJsonId: 30,
                                          pathname:
                                            '/marketDeptApproveWorkbench',
                                          pageId: '953465319297417216',
                                          modalPath:
                                            '/marketDeptApproveWorkbench',
                                          customFuncName: 'refreshTable',
                                          customFuncParams: 'object',
                                          paramsObj: {
                                            originTab: '$state.originTab$',
                                          },
                                          paramsObjKeyValueMap: {
                                            originTab: '$state.originTab$',
                                          },
                                        },
                                        actionObjId: 'callCustomPageFunc',
                                        actionObjName: 'system',
                                        value: 'callCustomPageFunc',
                                        tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                        line_number: 21,
                                      },
                                    ],
                                    elseIfs: [],
                                    condition: [
                                      {
                                        condId: '335828',
                                        options: {
                                          context: '$state.originTab$',
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
                                          context: '$state.originTab$',
                                          operate: '!=',
                                          manualValue: 'none',
                                        },
                                        condId: '441667',
                                        connector: '&&',
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    value: 'condition',
                                    desc: '防止非工作台发起 ',
                                    line_number: 20,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 170055606339223100,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '503662',
                                      pageJsonId: 30,
                                      type: 'push',
                                      pathname: '/marketDeptApproveWorkbench',
                                      selectedType: 'page',
                                    },
                                    actionObjId: 'history',
                                    actionObjName: 'system',
                                    value: 'history',
                                    line_number: 22,
                                  },
                                ],
                                condition: [
                                  {
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$urlParam.origin$',
                                      operate: '==',
                                      manualValue: '1',
                                    },
                                    condId: '17009',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                desc: '等于1，说明入口为市场部审批工作台',
                                callback: [
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '335828',
                                        options: {
                                          context: '$state.originTab$',
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
                                          context: '$state.originTab$',
                                          operate: '!=',
                                          manualValue: 'none',
                                        },
                                        condId: '441667',
                                        connector: '&&',
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 170055606339272900,
                                    elseIfs: [],
                                    line_number: 20,
                                    callback1: [
                                      {
                                        type: 'callCustomPageFunc',
                                        dataId: 170055606339273600,
                                        options: {
                                          compId: 'callCustomPageFunc',
                                          compName: 'system',
                                          id: '5253032',
                                          pageJsonId: 30,
                                          pathname:
                                            '/marketDeptApproveWorkbench',
                                          pageId: '953465319297417216',
                                          modalPath:
                                            '/marketDeptApproveWorkbench',
                                          customFuncName: 'refreshTable',
                                          customFuncParams: 'object',
                                          paramsObj: {
                                            originTab: '$state.originTab$',
                                          },
                                          paramsObjKeyValueMap: {
                                            originTab: '$state.originTab$',
                                          },
                                        },
                                        line_number: 21,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                  {
                                    type: 'history',
                                    dataId: 170055606339223100,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '503662',
                                      pageJsonId: 30,
                                      type: 'push',
                                      pathname: '/marketDeptApproveWorkbench',
                                      selectedType: 'page',
                                    },
                                    line_number: 22,
                                  },
                                ],
                              },
                              {
                                dataName: 'elseIf',
                                dataId: 170055606339217860,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170055606339221980,
                                    children: [],
                                    todoOptions: [
                                      'historyType',
                                      'pathname',
                                      'searchParams',
                                    ],
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '0363516',
                                      pageJsonId: 30,
                                      type: 'push',
                                      pathname: '/approveOrderTodo',
                                      selectedType: 'page',
                                      pageId: '878815340415455232',
                                    },
                                    actionObjId: 'history',
                                    actionObjName: 'system',
                                    value: 'history',
                                    line_number: 23,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'history',
                                    dataId: 170055606339221980,
                                    options: {
                                      compId: 'history',
                                      compName: 'system',
                                      id: '0363516',
                                      pageJsonId: 30,
                                      type: 'push',
                                      pathname: '/approveOrderTodo',
                                      selectedType: 'page',
                                      pageId: '878815340415455232',
                                    },
                                    line_number: 23,
                                  },
                                ],
                              },
                            ],
                            line_number: 16,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '335828',
                                    options: {
                                      context: '$state.originTab$',
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
                                      context: '$state.originTab$',
                                      operate: '!=',
                                      manualValue: 'none',
                                    },
                                    condId: '441667',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 170055606339232220,
                                elseIfs: [],
                                line_number: 17,
                                callback1: [
                                  {
                                    type: 'callCustomPageFunc',
                                    dataId: 170055606339285000,
                                    options: {
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '092695',
                                      pageJsonId: 30,
                                      pathname: '/approveWorkbench',
                                      pageId: '922008281896452096',
                                      modalPath: '/approveWorkbench',
                                      customFuncName: 'refreshTable',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        originTab: '$state.originTab$',
                                      },
                                      paramsObjKeyValueMap: {
                                        originTab: '$state.originTab$',
                                      },
                                    },
                                    line_number: 18,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'history',
                                dataId: 170055606339209400,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '22183',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/approveWorkbench',
                                  selectedType: 'page',
                                  pageId: '922008281896452096',
                                  modalPath: '/approveWorkbench',
                                },
                                line_number: 19,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 170055603201520300,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '125714',
                          pageJsonId: 30,
                          type: 'error',
                          value: '$customFunc_941025$',
                        },
                        line_number: 24,
                      },
                    ],
                  },
                ];
                eventDatacallSelfFunc121.params =
                  [
                    {
                      title: '事件对象',
                      value: '$e$',
                      name: 'e',
                      label: '事件对象',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc121, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_30_121')}
              {...injectData}
            />
            <Button
              name={'会签'}
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
                id: 'Button_3413253',
                uid: 'Button_3413253',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal19: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166996566846342050,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '361604',
                      pageJsonId: 30,
                      modalname: '/meeting/createpop',
                      pageId: '876645169117937664',
                      paramsObj: {
                        meetingType: '$data.globalParam.meetingType$',
                        meetingOrderType: '$data.globalParam.meetingOrderType$',
                        workItemId: '$urlParam.workItemId$',
                        approveList: '$data.globalParam.approveList$',
                      },
                      paramsObjKeyValueMap: {
                        meetingType: '$data.globalParam.meetingType$',
                        meetingOrderType: '$data.globalParam.meetingOrderType$',
                        workItemId: '$urlParam.workItemId$',
                        approveList: '$data.globalParam.approveList$',
                      },
                      modalPath: '/meeting/createpop',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169957929346956260,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '7689782',
                          pageJsonId: '030387',
                          code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                          actionTitle: '如果当前页面是window.open打开',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'setVisible',
                        dataId: 166996566846334620,
                        options: {
                          compId: 'Button_30_121',
                          compLib: 'comm',
                          pageJsonId: 30,
                          compName: 'Button',
                          id: '226217',
                          visible: 'toggle',
                        },
                        line_number: 3,
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '517656',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$urlParam.origin$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167894751180618660,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167894751180624930,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 169468516044172740,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 169468517759864400,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 169468517759869280,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 16946851775980562,
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
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '584534',
                                      pageJsonId: 30,
                                      pathname: '/marketDeptApproveWorkbench',
                                      pageId: '953465319297417216',
                                      modalPath: '/marketDeptApproveWorkbench',
                                      customFuncName: 'refreshTable',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        originTab: '$state.originTab$',
                                      },
                                      paramsObjKeyValueMap: {
                                        originTab: '$state.originTab$',
                                      },
                                    },
                                    actionObjId: 'callCustomPageFunc',
                                    actionObjName: 'system',
                                    value: 'callCustomPageFunc',
                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                    line_number: 9,
                                  },
                                ],
                                elseIfs: [],
                                condition: [
                                  {
                                    condId: '11080663',
                                    options: {
                                      context: '$state.originTab$',
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
                                      context: '$state.originTab$',
                                      operate: '!=',
                                      manualValue: 'none',
                                    },
                                    condId: '751318',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                value: 'condition',
                                desc: '防止非工作台发起 ',
                                line_number: 8,
                              },
                              {
                                dataName: 'action',
                                dataId: 167894751180606530,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '1262452',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/marketDeptApproveWorkbench',
                                  selectedType: 'page',
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                line_number: 10,
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$urlParam.origin$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                condId: '17009',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '等于1，说明入口为市场部审批工作台',
                            callback: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '11080663',
                                    options: {
                                      context: '$state.originTab$',
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
                                      context: '$state.originTab$',
                                      operate: '!=',
                                      manualValue: 'none',
                                    },
                                    condId: '751318',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 169468516044172740,
                                elseIfs: [],
                                line_number: 8,
                                callback1: [
                                  {
                                    type: 'callCustomPageFunc',
                                    dataId: 169468517759864400,
                                    options: {
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '584534',
                                      pageJsonId: 30,
                                      pathname: '/marketDeptApproveWorkbench',
                                      pageId: '953465319297417216',
                                      modalPath: '/marketDeptApproveWorkbench',
                                      customFuncName: 'refreshTable',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        originTab: '$state.originTab$',
                                      },
                                      paramsObjKeyValueMap: {
                                        originTab: '$state.originTab$',
                                      },
                                    },
                                    line_number: 9,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'history',
                                dataId: 167894751180606530,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '1262452',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/marketDeptApproveWorkbench',
                                  selectedType: 'page',
                                },
                                line_number: 10,
                              },
                            ],
                          },
                          {
                            dataName: 'elseIf',
                            dataId: 167894751180639940,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167894751180619230,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '677887',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/approveOrderTodo',
                                  selectedType: 'page',
                                  pageId: '878815340415455232',
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                line_number: 11,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'history',
                                dataId: 167894751180619230,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '677887',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/approveOrderTodo',
                                  selectedType: 'page',
                                  pageId: '878815340415455232',
                                },
                                line_number: 11,
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '11080663',
                                options: {
                                  context: '$state.originTab$',
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
                                  context: '$state.originTab$',
                                  operate: '!=',
                                  manualValue: 'none',
                                },
                                condId: '751318',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169468512448924260,
                            elseIfs: [],
                            line_number: 5,
                            callback1: [
                              {
                                type: 'callCustomPageFunc',
                                dataId: 169468516731812400,
                                options: {
                                  compId: 'callCustomPageFunc',
                                  compName: 'system',
                                  id: '442369',
                                  pageJsonId: 30,
                                  pathname: '/approveWorkbench',
                                  pageId: '922008281896452096',
                                  modalPath: '/approveWorkbench',
                                  customFuncName: 'refreshTable',
                                  customFuncParams: 'object',
                                  paramsObj: { originTab: '$state.originTab$' },
                                  paramsObjKeyValueMap: {
                                    originTab: '$state.originTab$',
                                  },
                                },
                                line_number: 6,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                          {
                            type: 'history',
                            dataId: 16789475118065076,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '1161646',
                              pageJsonId: 30,
                              type: 'push',
                              pathname: '/approveWorkbench',
                              selectedType: 'page',
                              pageId: '922008281896452096',
                              modalPath: '/approveWorkbench',
                            },
                            line_number: 7,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal19.params =
                  [
                    {
                      title: '事件对象',
                      value: '$e$',
                      name: 'e',
                      label: '事件对象',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatashowCustomModal19,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_3413253')}
              {...injectData}
            />
            <Button
              name={'作废'}
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
                id: 'Button_3413253_309566',
                uid: 'Button_3413253_309566',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                // console 166997453168860350
                console.log(data?.globalParam);
                const eventDatashowCustomModal20: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166996304298597120,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '23267',
                      pageJsonId: 30,
                      modalname: '/giveupCommonPopup',
                      pageId: '912677238674382848',
                      paramsObj: {
                        tacheCode: '$data.globalParam.tacheCode$',
                        endLevel: '$data.globalParam.endLevel$',
                        workItemId: '$data.globalParam.workItemId$',
                        busiObjNbr: '$data.globalParam.busiObjNbr$',
                        workId: '$urlParam.workId$',
                      },
                      paramsObjKeyValueMap: {
                        tacheCode: '$data.globalParam.tacheCode$',
                        endLevel: '$data.globalParam.endLevel$',
                        workItemId: '$data.globalParam.workItemId$',
                        busiObjNbr: '$data.globalParam.busiObjNbr$',
                        workId: '$urlParam.workId$',
                      },
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169957930342561900,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5987442',
                          pageJsonId: '030387',
                          code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                          actionTitle: '如果当前页面是window.open打开',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '517656',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$urlParam.origin$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167894752265474100,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167894752265449950,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 169468524448486240,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 169468525851439940,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 169468525851461980,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 169468525851420030,
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
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '514628',
                                      pageJsonId: 30,
                                      pathname: '/marketDeptApproveWorkbench',
                                      pageId: '953465319297417216',
                                      modalPath: '/marketDeptApproveWorkbench',
                                      customFuncName: 'refreshTable',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        originTab: '$state.originTab$',
                                      },
                                      paramsObjKeyValueMap: {
                                        originTab: '$state.originTab$',
                                      },
                                    },
                                    actionObjId: 'callCustomPageFunc',
                                    actionObjName: 'system',
                                    value: 'callCustomPageFunc',
                                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                    line_number: 9,
                                  },
                                ],
                                elseIfs: [],
                                condition: [
                                  {
                                    condId: '0348068',
                                    options: {
                                      context: '$state.originTab$',
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
                                      context: '$state.originTab$',
                                      operate: '!=',
                                      manualValue: 'none',
                                    },
                                    condId: '821806',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                value: 'condition',
                                desc: '防止非工作台发起 ',
                                line_number: 8,
                              },
                              {
                                dataName: 'action',
                                dataId: 167894752265492160,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '038252',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/marketDeptApproveWorkbench',
                                  selectedType: 'page',
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                line_number: 10,
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$urlParam.origin$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                condId: '17009',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '等于1，说明入口为市场部审批工作台',
                            callback: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '0348068',
                                    options: {
                                      context: '$state.originTab$',
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
                                      context: '$state.originTab$',
                                      operate: '!=',
                                      manualValue: 'none',
                                    },
                                    condId: '821806',
                                    connector: '&&',
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 169468524448486240,
                                elseIfs: [],
                                line_number: 8,
                                callback1: [
                                  {
                                    type: 'callCustomPageFunc',
                                    dataId: 169468525851439940,
                                    options: {
                                      compId: 'callCustomPageFunc',
                                      compName: 'system',
                                      id: '514628',
                                      pageJsonId: 30,
                                      pathname: '/marketDeptApproveWorkbench',
                                      pageId: '953465319297417216',
                                      modalPath: '/marketDeptApproveWorkbench',
                                      customFuncName: 'refreshTable',
                                      customFuncParams: 'object',
                                      paramsObj: {
                                        originTab: '$state.originTab$',
                                      },
                                      paramsObjKeyValueMap: {
                                        originTab: '$state.originTab$',
                                      },
                                    },
                                    line_number: 9,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'history',
                                dataId: 167894752265492160,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '038252',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/marketDeptApproveWorkbench',
                                  selectedType: 'page',
                                },
                                line_number: 10,
                              },
                            ],
                          },
                          {
                            dataName: 'elseIf',
                            dataId: 167894752265492220,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167894752265460960,
                                children: [],
                                todoOptions: [
                                  'historyType',
                                  'pathname',
                                  'searchParams',
                                ],
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '863717',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/approveOrderTodo',
                                  selectedType: 'page',
                                  pageId: '878815340415455232',
                                },
                                actionObjId: 'history',
                                actionObjName: 'system',
                                value: 'history',
                                line_number: 11,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'history',
                                dataId: 167894752265460960,
                                options: {
                                  compId: 'history',
                                  compName: 'system',
                                  id: '863717',
                                  pageJsonId: 30,
                                  type: 'push',
                                  pathname: '/approveOrderTodo',
                                  selectedType: 'page',
                                  pageId: '878815340415455232',
                                },
                                line_number: 11,
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '0348068',
                                options: {
                                  context: '$state.originTab$',
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
                                  context: '$state.originTab$',
                                  operate: '!=',
                                  manualValue: 'none',
                                },
                                condId: '821806',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169468519717288900,
                            elseIfs: [],
                            line_number: 5,
                            callback1: [
                              {
                                type: 'callCustomPageFunc',
                                dataId: 169468524937396900,
                                options: {
                                  compId: 'callCustomPageFunc',
                                  compName: 'system',
                                  id: '921536',
                                  pageJsonId: 30,
                                  pathname: '/approveWorkbench',
                                  pageId: '922008281896452096',
                                  modalPath: '/approveWorkbench',
                                  customFuncName: 'refreshTable',
                                  customFuncParams: 'object',
                                  paramsObj: { originTab: '$state.originTab$' },
                                  paramsObjKeyValueMap: {
                                    originTab: '$state.originTab$',
                                  },
                                },
                                line_number: 6,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                          {
                            type: 'history',
                            dataId: 167894752265425150,
                            options: {
                              compId: 'history',
                              compName: 'system',
                              id: '8075284',
                              pageJsonId: 30,
                              type: 'push',
                              pathname: '/approveWorkbench',
                              selectedType: 'page',
                              pageId: '922008281896452096',
                              modalPath: '/approveWorkbench',
                            },
                            line_number: 7,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal20.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal20,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_3413253_309566')}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(FlowAudit$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    sceneCode: '',
    isRollback: '',
    isScreenshot: '',
    tacheCode: '',
    originTab: '',
  },
});
