// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1052839002190835712';
const Kehuhuodongqingdan9496$$Modal: React.FC<PageProps> = ({
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
  parentEngineId = pageId,
}) => {
  const jugdeAfterSearch = (options_1984904: any) => {
    // console 170607794309133570
    console.log('事件入参：', options_1984904);
    const eventDatasetDataSource7: any = [
      {
        type: 'setDataSource',
        dataId: 170623806606606620,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '839688',
          pageJsonId: '0552286',
          dataSourceId: 170623798713982660,
          dataSourceName: 'pageData',
          dataSourceRelType: 'custom',
          dataSourceSetValue: [
            {
              attrId: '97534',
              code: 'isAllowConfirm',
              name: '是否能够允许点击确认(0不行1可以)',
              type: 'string',
              initialData: { type: 'static', value: '0' },
              showInput: true,
              value: { type: ['customize'], code: '0' },
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
    ];
    eventDatasetDataSource7.params =
      [
        {
          title: '事件入参',
          name: 'options_1984904',
          value: '$options_1984904$',
        },
      ] || [];
    CMDGenerator(
      eventDatasetDataSource7,
      { options_1984904 },
      'setDataSource',
      {
        id: 'setDataSource',
        name: 'setDataSource',
        type: 'setDataSource',
        platform: 'undefined',
      },
    );
    const eventDataapiRequest22: any = [
      {
        type: 'apiRequest',
        dataId: 170623807087933340,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '079635',
          pageJsonId: 31,
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryGroupMemberInfo',
          _apiCode: 'queryGroupMemberInfo',
          _source: 'rhin',
          _serviceId: '887259504713355264',
          _serviceTitle: '查询集团成员详细信息服务-hdb: queryGroupMemberInfo',
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
                  dataKey: '379184_root.header',
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
                  dataKey: '379184_root.path',
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
                  dataKey: '379184_root.query',
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
                      code: 'orderNbr',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.orderNbr',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      id: 'root.body.orderNbr',
                      dataKey: '379184_root.body.orderNbr',
                      value: {
                        type: ['context', '$state.orderNbr$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'homeCity',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.homeCity',
                      compType: 'Input',
                      name: 'homeCity',
                      parents: ['root', 'body'],
                      id: 'root.body.homeCity',
                      dataKey: '379184_root.body.homeCity',
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                    {
                      code: 'objType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.objType',
                      compType: 'Input',
                      name: 'objType',
                      parents: ['root', 'body'],
                      id: 'root.body.objType',
                      dataKey: '379184_root.body.objType',
                      value: { type: ['customize'], code: '2' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                    },
                    {
                      code: 'objId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.objId',
                      compType: 'Input',
                      name: 'objId',
                      parents: ['root', 'body'],
                      id: 'root.body.objId',
                      dataKey: '379184_root.body.objId',
                      value: {
                        type: ['context', '$options_1984904$'],
                        code: 'phone',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-3',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '379184_root.body',
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
              dataKey: '379184_root',
            },
          ],
          _sourceName: '查询集团成员详细信息服务-hdb',
        },
        line_number: 3,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170623807087934200,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '455195',
              pageJsonId: 31,
              code: 'function main(data,state,success,fail){console.log("\\u5BA2\\u6237\\u6D3B\\u52A8\\u6E05\\u5355-\\u96C6\\u56E2\\u4FE1\\u606F\\u67E5\\u8BE2\\u7ED3\\u679C",reply_079635);var resultData=reply_079635.resultData;if((resultData===null||resultData===void 0?void 0:resultData.length)>0){var groupId=options_1984904.groupId;var filterdList=resultData.filter(function(item){return item.groupId==groupId});if(filterdList.length>0){success(resultData[0])}else{fail("\\u60A8\\u8F93\\u5165\\u7684\\u624B\\u673A\\u53F7\\u4E0D\\u5C5E\\u4E8E\\u8BE5\\u96C6\\u56E2\\uFF0C\\u8BF7\\u6838\\u5B9E")}}else{fail("\\u67E5\\u8BE2\\u4E0D\\u5230\\u8BE5\\u624B\\u673A\\u53F7\\u5173\\u8054\\u7684\\u96C6\\u56E2\\u4FE1\\u606F")}};',
              actionTitle: '获取返回的第一个数据',
            },
            line_number: 4,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170623807087916100,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '8208744',
                  pageJsonId: 31,
                  code: 'function main(data,state,success,fail){var resultData=data_455195;var officialLevel=resultData.officialLevel||"";var memberType=resultData.memberType||"";var keyType=resultData.keyType||"";var otherOfficialLevels=["1","2","3","4","5","6","7"];var otherMemberTypes=["2","4","8","9","11","12","13"];var otherKeyTypes=["9","99"];var importantMemberOfficialLevel=["1","2","3","4","5","6","7"];var importantMemberType=["3","5","7"];var importantMemberKeyType=["1","2","3","6","8"];var hasImportantMemberOfficialLevel=importantMemberOfficialLevel.indexOf(officialLevel)>-1;var hasImportantMemberMemberType=importantMemberType.indexOf(memberType)>-1;var hasImportantMemberKeyType=importantMemberKeyType.indexOf(keyType)>-1;console.log("hasImportantMemberOfficialLevel",hasImportantMemberOfficialLevel);console.log("hasImportantMemberMemberType",hasImportantMemberMemberType);console.log("hasImportantMemberKeyType",hasImportantMemberKeyType);if(state.isCoreFlag==0){if(hasImportantMemberOfficialLevel||hasImportantMemberMemberType||hasImportantMemberKeyType){fail("\\u8BE5\\u624B\\u673A\\u53F7\\u7801\\u5F52\\u5C5E\\u4E0D\\u662F\\u666E\\u901A\\u6210\\u5458\\uFF01\\u65E0\\u6CD5\\u6DFB\\u52A0");return false}}else if(state.isCoreFlag==1){if(!hasImportantMemberOfficialLevel&&!hasImportantMemberMemberType&&!hasImportantMemberKeyType){fail("\\u8BE5\\u624B\\u673A\\u53F7\\u7801\\u5F52\\u5C5E\\u4E0D\\u662F\\u91CD\\u8981\\u6210\\u5458\\uFF01\\u65E0\\u6CD5\\u6DFB\\u52A0");return false}}else if(state.isCoreFlag==2){}if(state.isCoreFlag==0&&otherOfficialLevels.indexOf(officialLevel)>-1){resultData.officialLevel=""}if(otherMemberTypes.indexOf(memberType)>-1){resultData.memberType=""}success(resultData)};',
                  actionTitle: '校验手机号码类型',
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'console',
                    dataId: 170623807087944540,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '727988',
                      pageJsonId: 31,
                      value: ['手机号查询集团信息', '$data_8208744$'],
                    },
                    line_number: 6,
                  },
                  {
                    type: 'setValue',
                    dataId: 170623807087930080,
                    options: {
                      compId: ['Input_851776'],
                      compLib: 'comm',
                      pageJsonId: '0552286',
                      compName: 'Input',
                      id: '596336',
                      valueList: { Input_851776: '$data_455195.name$' },
                      compid: ['Input_851776'],
                    },
                    line_number: 7,
                    callback1: [],
                  },
                  {
                    type: 'callSelfFunc',
                    dataId: 170623807087994370,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '629817',
                      pageJsonId: '0552286',
                      customFuncName: 'qryCountAndMoneyThisYear',
                      customFuncParams: 'object',
                      paramsObj: { phone: '$options_1984904.phone$' },
                      paramsObjKeyValueMap: {
                        phone: '$options_1984904.phone$',
                      },
                    },
                    line_number: 8,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 170623807087918430,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '839312',
                      pageJsonId: 31,
                      type: 'warn',
                      value: '$fail_8208744$',
                    },
                    line_number: 9,
                  },
                ],
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 170623807087943900,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '3229114',
                  pageJsonId: 31,
                  type: 'error',
                  value: '$fail_455195$',
                },
                line_number: 10,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest22.params =
      [
        {
          title: '事件入参',
          name: 'options_1984904',
          value: '$options_1984904$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest22, { options_1984904 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
  };
  const qryCountAndMoneyThisYear = (options_602421: any) => {
    const eventDataapiRequest23: any = [
      {
        type: 'apiRequest',
        dataId: 170618775194413100,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '377912',
          pageJsonId: '0552286',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCountAndMoneyThisYear',
          _apiCode: 'qryCountAndMoneyThisYear',
          _source: 'rhin',
          _sourceName: '查询本年已投放次数与已投放金额-hyj',
          _serviceId: '1067791181192089600',
          _serviceTitle:
            '查询本年已投放次数与已投放金额-hyj: qryCountAndMoneyThisYear',
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
                  dataKey: '377912_root.header',
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
                  dataKey: '377912_root.path',
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
                  dataKey: '377912_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'attrValueCode',
                      name: '手机号',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.attrValueCode',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.attrValueCode',
                      dataKey: '377912_root.body.attrValueCode',
                      value: {
                        type: ['context', '$options_602421$'],
                        code: 'phone',
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
                  dataKey: '377912_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '377912_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 170618777292701020,
            options: {
              compId: ['Input_082239', 'Input_98356'],
              compLib: 'comm',
              pageJsonId: '0552286',
              compName: 'Input',
              id: '81592',
              valueList: {
                Input_082239: '$reply_377912?.resultData.throwCountThisYear$',
                Input_98356: '$reply_377912?.resultData.throwMoneyThisYear$',
              },
              compid: ['Input_082239', 'Input_98356'],
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'console',
            dataId: 170618792863380830,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '77434',
              pageJsonId: '0552286',
              value: ['$reply_377912$'],
            },
            line_number: 3,
          },
          {
            type: 'setDataSource',
            dataId: 170623810853450500,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '464314',
              pageJsonId: '0552286',
              dataSourceId: 170623798713982660,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '97534',
                  code: 'isAllowConfirm',
                  name: '是否能够允许点击确认(0不行1可以)',
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
            line_number: 4,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest23.params =
      [
        {
          title: '事件入参',
          name: 'options_602421',
          value: '$options_602421$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest23, { options_602421 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    jugdeAfterSearch,
    qryCountAndMoneyThisYear,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm16: any = [
      {
        type: 'validateCurrentForm',
        dataId: 170263184788816350,
        options: {
          compId: 'Form_5300746',
          compLib: 'comm',
          pageJsonId: '0552286',
          compName: 'Form',
          id: '323656',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '544489',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$data.pageData.isAllowConfirm$',
                  operate: '==',
                  manualValue: '1',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170623812439404000,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 170623815409042880,
                children: [
                  {
                    dataName: 'action',
                    dataId: 170623816114945950,
                    children: [],
                    todoOptions: ['msgType', 'value', 'duration'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '970693',
                      pageJsonId: '0552286',
                      type: 'info',
                      value: '数据查询中，请稍后再试！',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                    line_number: 7,
                  },
                ],
                condition: [],
                value: 'elseIf',
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 170623816114945950,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '970693',
                      pageJsonId: '0552286',
                      type: 'info',
                      value: '数据查询中，请稍后再试！',
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170623815015333380,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '594817',
                  pageJsonId: '0552286',
                  code: 'function main(data,state,success,fail){var form=Form_5300746;var info=Object.assign(form,data.info);var infoList=state.infoList||[];if(infoList.length>0){var list=infoList.filter(function(item){return item.msisdn==form["msisdn"]});if(list.length>0){fail()}else{success(info)}}else{success(info)}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 170623815015357920,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '819342',
                      pageJsonId: '0552286',
                      params: '$data_594817$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 170623815015314900,
                    options: { compId: 'page', compName: 'page', id: '771368' },
                    line_number: 5,
                  },
                ],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 170623815015319840,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '315294',
                      pageJsonId: '0552286',
                      type: 'error',
                      value: '当前手机号码已被添加！',
                    },
                    line_number: 6,
                  },
                ],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm16.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm16, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal2: any = [
      {
        type: 'closeModal',
        dataId: '10962_1',
        options: { compId: 'page', compName: 'page', id: '767968' },
        line_number: 1,
      },
    ];
    eventDatacloseModal2.params = [] || [];
    CMDGenerator(eventDatacloseModal2, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
    onCancel,
  }));

  useEffect(() => {
    const eventDataapiRequest120: any = [
      {
        type: 'apiRequest',
        dataId: 170614817139040130,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '054554',
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
                  dataKey: '054554_root.header',
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
                  dataKey: '054554_root.path',
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
                  dataKey: '054554_root.query',
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
                      dataKey: '054554_root.body.catalogCode',
                      value: { type: ['customize'], code: 'CLS_JC_0001_0003' },
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
                      dataKey: '054554_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'serviceResourceType',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '054554_root.body',
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
              dataKey: '054554_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170614823324969470,
            options: {
              compId: 'Select_103552',
              compLib: 'comm',
              pageJsonId: '0552286',
              compName: 'Select',
              id: '781844',
              data: '$reply_054554?.resultData$',
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
    eventDataapiRequest120.params = [] || [];
    CMDGenerator(eventDataapiRequest120, {}, 'apiRequest', {
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
      className="__CustomClass_0552286__"
    >
      <View
        className="View_View_0552286_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_0552286_1',
          uid: 'View_0552286_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_0552286_1')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={24}
          labelCol={'6'}
          wrapperCol={'16'}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_5300746'}
          formColumns={[
            {
              id: 'Input_51217',
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '手机号码',
                basicStatus: 1,
                size: 'default',
                selfSpan: '',
                labelCol: '6',
                wrapperCol: '16',
                titleTip: 'notext',
                tipLocation: 'after',
                tipContent: '',
                tipPlacement: 'top',
                prefixIconPosition: 'before',
                postfix: '搜索',
                postfixIconPosition: 'before',
                required: true,
                placeholder: '请输入',
                formItemIndex: 0,
                fieldName: 'msisdn',
                icon: {
                  type: 'search',
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                },
                type: 'search',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
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
              alias: 'DformInput',
              setEvents: [],
              isLabelDropBoxChild: false,
              components: [],
            },
            {
              id: 'Input_851776',
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '客户名称',
                basicStatus: 1,
                size: 'default',
                selfSpan: '',
                labelCol: '6',
                wrapperCol: '16',
                titleTip: 'notext',
                tipLocation: 'after',
                tipContent: '',
                tipPlacement: 'top',
                prefixIconPosition: 'before',
                postfix: '',
                postfixIconPosition: 'before',
                required: true,
                placeholder: '请输入',
                formItemIndex: 1,
                fieldName: 'customerName',
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
              alias: 'DformInput',
              setEvents: [],
              isLabelDropBoxChild: false,
              components: [],
            },
            {
              id: 'Input_9803176',
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '集团编码',
                basicStatus: 1,
                size: 'default',
                selfSpan: '',
                labelCol: '6',
                wrapperCol: '16',
                titleTip: 'notext',
                tipLocation: 'after',
                tipContent: '',
                tipPlacement: 'top',
                prefixIconPosition: 'before',
                postfix: '',
                postfixIconPosition: 'before',
                required: true,
                placeholder: '请输入',
                formItemIndex: 2,
                fieldName: 'groupId',
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
              alias: 'DformInput',
              setEvents: [],
              isLabelDropBoxChild: false,
              components: [],
            },
            {
              id: 'Input_513018',
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '集团名称',
                basicStatus: 1,
                size: 'default',
                selfSpan: '',
                labelCol: '6',
                wrapperCol: '16',
                titleTip: 'notext',
                tipLocation: 'after',
                tipContent: '',
                tipPlacement: 'top',
                prefixIconPosition: 'before',
                postfix: '',
                postfixIconPosition: 'before',
                required: true,
                placeholder: '请输入',
                formItemIndex: 3,
                fieldName: 'groupName',
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
              alias: 'DformInput',
              setEvents: [],
              isLabelDropBoxChild: false,
              components: [],
            },
          ]}
          $$componentItem={{
            id: 'Form_5300746',
            uid: 'Form_5300746',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_5300746')}
          {...injectData}
        >
          <Input
            name={'集团编码'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={' 选择'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'选择后回填'}
            formItemIndex={0}
            fieldName={'groupId'}
            icon={{
              type: 'select',
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            postfixStyle={'3'}
            prefixIcon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'Input_9803176',
              uid: 'Input_9803176',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onIconClick={() => {
              const eventDatashowCustomModal24: any = [
                {
                  type: 'showCustomModal',
                  dataId: 170607507582696350,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '4567154',
                    pageJsonId: '0552286',
                    modalname: '/groupInfoSel',
                    pageId: '899848269504155648',
                    modalPath: '/groupInfoSel',
                    paramsObj: {
                      orderNbr: '$state.orderNbr$',
                      groupCode: '1000',
                    },
                    paramsObjKeyValueMap: {
                      orderNbr: '$state.orderNbr$',
                      groupCode: '1000',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 170607712795772320,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '743421',
                        pageJsonId: '0552286',
                        value: ['弹窗回调：', '$okData_4567154$'],
                      },
                      line_number: 2,
                    },
                    {
                      type: 'setValue',
                      dataId: 170607622890675840,
                      options: {
                        compId: ['Input_9803176', 'Input_513018'],
                        compLib: 'comm',
                        pageJsonId: '0552286',
                        compName: 'Input',
                        id: '90387',
                        valueList: {
                          Input_9803176: '$okData_4567154[0].groupId$',
                          Input_513018: '$okData_4567154[0].groupName$',
                        },
                        compid: ['Input_9803176', 'Input_513018'],
                      },
                      line_number: 3,
                      callback1: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal24.params = [] || [];
              CMDGenerator(eventDatashowCustomModal24, {}, 'showCustomModal', {
                id: 'showCustomModal',
                name: 'showCustomModal',
                type: 'showCustomModal',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_9803176')}
            {...injectData}
          />
          <Input
            name={'集团名称'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'选择后回填'}
            formItemIndex={1}
            fieldName={'groupName'}
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
              id: 'Input_513018',
              uid: 'Input_513018',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_513018')}
            {...injectData}
          />
          <Input
            name={'手机号码'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={' 搜索'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={2}
            fieldName={'msisdn'}
            icon={{
              type: 'search',
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            postfixStyle={'3'}
            prefixIcon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'Input_51217',
              uid: 'Input_51217',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onIconClick={() => {
              const eventDatagetValue135: any = [
                {
                  type: 'getValue',
                  dataId: 170607604595332300,
                  options: {
                    compId: 'Input_9803176',
                    compLib: 'comm',
                    pageJsonId: '0552286',
                    compName: 'Input',
                    id: '245893',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '411647',
                          options: {
                            context: '$value_245893$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 170607604819765100,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 170607608214751780,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170607608704473820,
                              children: [],
                              todoOptions: ['msgType', 'value', 'duration'],
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '535115',
                                pageJsonId: '0552286',
                                type: 'warn',
                                value: '请先选择集团！',
                              },
                              actionObjId: 'showMessage',
                              actionObjName: 'system',
                              value: 'showMessage',
                              tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                              line_number: 9,
                            },
                          ],
                          condition: [],
                          value: 'elseIf',
                          callback: [
                            {
                              type: 'showMessage',
                              dataId: 170607608704473820,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '535115',
                                pageJsonId: '0552286',
                                type: 'warn',
                                value: '请先选择集团！',
                              },
                              line_number: 9,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'getValue',
                          dataId: 170607606077512200,
                          options: {
                            compId: 'Input_51217',
                            compLib: 'comm',
                            pageJsonId: '0552286',
                            compName: 'Input',
                            id: '8372694',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '134524',
                                  options: {
                                    context: '$value_8372694$',
                                    operate: 'empty',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 170607606077535330,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 170607606077596100,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170607606077504030,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 170607606077597200,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 170607606077587900,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 170607606077522560,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 170607606077527230,
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
                                                id: '743368',
                                                pageJsonId: '0552286',
                                                customFuncName:
                                                  'jugdeAfterSearch',
                                                customFuncParams: 'object',
                                                paramsObj: {
                                                  phone: '$value_8372694$',
                                                  groupId: '$value_245893$',
                                                },
                                                paramsObjKeyValueMap: {
                                                  phone: '$value_8372694$',
                                                  groupId: '$value_245893$',
                                                },
                                              },
                                              actionObjId: 'callSelfFunc',
                                              actionObjName: 'system',
                                              value: 'callSelfFunc',
                                              line_number: 7,
                                            },
                                          ],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 170607606077597220,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 170607606077505100,
                                              children: [],
                                              todoOptions: [
                                                'msgType',
                                                'value',
                                                'duration',
                                              ],
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '077965',
                                                pageJsonId: '0552286',
                                                type: 'warn',
                                                value: '$fail_225494$',
                                              },
                                              actionObjId: 'showMessage',
                                              actionObjName: 'system',
                                              value: 'showMessage',
                                              tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                              line_number: 8,
                                            },
                                          ],
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
                                        id: '225494',
                                        pageJsonId: '0552286',
                                        code: 'function main(data,state,success,fail){var phone=/^1[3-9]\\d{9}$/g;if(phone.test(value_8372694)){success()}else{fail("\\u8BF7\\u8F93\\u5165\\u6B63\\u786E\\u7684\\u624B\\u673A\\u53F7\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u67E5\\u8BE2")}};',
                                        actionTitle: '校验手机号码格式',
                                      },
                                      actionObjId: 'customActionCode',
                                      actionObjName: 'page',
                                      value: 'customActionCode',
                                      tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                      line_number: 6,
                                    },
                                  ],
                                  condition: [],
                                  value: 'elseIf',
                                  desc: '',
                                  callback: [
                                    {
                                      type: 'customActionCode',
                                      dataId: 170607606077504030,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '225494',
                                        pageJsonId: '0552286',
                                        code: 'function main(data,state,success,fail){var phone=/^1[3-9]\\d{9}$/g;if(phone.test(value_8372694)){success()}else{fail("\\u8BF7\\u8F93\\u5165\\u6B63\\u786E\\u7684\\u624B\\u673A\\u53F7\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u67E5\\u8BE2")}};',
                                        actionTitle: '校验手机号码格式',
                                      },
                                      line_number: 6,
                                      callback1: [
                                        {
                                          type: 'callSelfFunc',
                                          dataId: 170607606077587900,
                                          options: {
                                            compId: 'callSelfFunc',
                                            compName: 'system',
                                            id: '743368',
                                            pageJsonId: '0552286',
                                            customFuncName: 'jugdeAfterSearch',
                                            customFuncParams: 'object',
                                            paramsObj: {
                                              phone: '$value_8372694$',
                                              groupId: '$value_245893$',
                                            },
                                            paramsObjKeyValueMap: {
                                              phone: '$value_8372694$',
                                              groupId: '$value_245893$',
                                            },
                                          },
                                          line_number: 7,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                      callback2: [
                                        {
                                          type: 'showMessage',
                                          dataId: 170607606077505100,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '077965',
                                            pageJsonId: '0552286',
                                            type: 'warn',
                                            value: '$fail_225494$',
                                          },
                                          line_number: 8,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'showMessage',
                                  dataId: 170607606077516200,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '6217034',
                                    pageJsonId: '0552286',
                                    type: 'warn',
                                    value: '手机号码不能为空！',
                                  },
                                  line_number: 5,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ];
              eventDatagetValue135.params = [] || [];
              CMDGenerator(eventDatagetValue135, {}, 'getValue', {
                id: 'getValue',
                name: 'getValue',
                type: 'getValue',
                platform: 'pc',
              });
            }}
            onChange={(e: any) => {
              const eventDatasysSetValue1: any = [
                {
                  type: 'sysSetValue',
                  dataId: 170625202443896670,
                  options: {
                    compId: ['Input_851776', 'Input_082239', 'Input_98356'],
                    compName: 'page',
                    id: '2743214',
                    pageJsonId: '0552286',
                    compid: ['Input_851776', 'Input_082239', 'Input_98356'],
                    valueList: {
                      Input_851776: '',
                      Input_082239: '',
                      Input_98356: '',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                },
              ];
              eventDatasysSetValue1.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatasysSetValue1, { e }, 'sysSetValue', {
                id: 'sysSetValue',
                name: 'sysSetValue',
                type: 'sysSetValue',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_51217')}
            {...injectData}
          />
          <Input
            name={'客户名称'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'搜索后回填'}
            formItemIndex={3}
            fieldName={'name'}
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
              id: 'Input_851776',
              uid: 'Input_851776',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_851776')}
            {...injectData}
          />
          <Select
            name={'服务资源类型'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={4}
            fieldName={'serviceResourceType'}
            $$componentItem={{
              id: 'Select_103552',
              uid: 'Select_103552',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDataifelse359: any = [
                {
                  type: 'ifelse',
                  condition: [
                    {
                      condId: '1790282',
                      options: {
                        useManual: true,
                        useObject: false,
                        context: '$e$',
                        operate: '==',
                        manualValue: '1005',
                      },
                      conditionType: 'checkContextValue',
                      objType: 'system',
                      objId: 'sys',
                    },
                  ],
                  dataId: 170614803046625180,
                  elseIfs: [
                    {
                      dataName: 'elseIf',
                      dataId: 170614805315339460,
                      children: [
                        {
                          dataName: 'action',
                          dataId: 170625851268342240,
                          children: [],
                          todoOptions: ['disabled', 'selectComp'],
                          options: {
                            compId: 'Input_4631073',
                            compLib: 'comm',
                            pageJsonId: '0552286',
                            compName: 'Input',
                            id: '2313186',
                            disabled: 'true',
                          },
                          actionObjId: 'Input_4631073',
                          actionObjName: 'Input',
                          value: 'setDisable',
                          compLib: 'comm',
                          line_number: 4,
                        },
                        {
                          dataName: 'condition',
                          dataId: 170625836203026560,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 170625844160205470,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 170625844160253100,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                              ],
                              todoOptions: ['compId', 'valueList'],
                              options: {
                                compId: 'Input_4631073',
                                compLib: 'comm',
                                pageJsonId: '0552286',
                                compName: 'Input',
                                id: '367382',
                                valueList: { Input_4631073: '100' },
                              },
                              actionObjId: 'Input_4631073',
                              actionObjName: 'Input',
                              value: 'setValue',
                              compLib: 'comm',
                              line_number: 6,
                            },
                          ],
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 170625844577300740,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 170625846878621730,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 170625846878628160,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: ['compId', 'valueList'],
                                  options: {
                                    compId: 'Input_4631073',
                                    compLib: 'comm',
                                    pageJsonId: '0552286',
                                    compName: 'Input',
                                    id: '2374957',
                                    valueList: { Input_4631073: '200' },
                                  },
                                  actionObjId: 'Input_4631073',
                                  actionObjName: 'Input',
                                  value: 'setValue',
                                  compLib: 'comm',
                                  line_number: 7,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              desc: '鲜花（200元）/ 蛋糕（200元）',
                              callback: [
                                {
                                  type: 'setValue',
                                  dataId: 170625846878621730,
                                  options: {
                                    compId: 'Input_4631073',
                                    compLib: 'comm',
                                    pageJsonId: '0552286',
                                    compName: 'Input',
                                    id: '2374957',
                                    valueList: { Input_4631073: '200' },
                                  },
                                  line_number: 7,
                                  callback1: [],
                                },
                              ],
                            },
                          ],
                          condition: [
                            {
                              condId: '619952',
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
                            {
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$e$',
                                operate: '==',
                                manualValue: '1004',
                              },
                              condId: '5494603',
                              connector: '||',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          value: 'condition',
                          desc: '小糕点（100元）/ 咪咕礼券（100元）',
                          line_number: 5,
                        },
                      ],
                      condition: [],
                      value: 'elseIf',
                      callback: [
                        {
                          type: 'setDisable',
                          dataId: 170625851268342240,
                          options: {
                            compId: 'Input_4631073',
                            compLib: 'comm',
                            pageJsonId: '0552286',
                            compName: 'Input',
                            id: '2313186',
                            disabled: 'true',
                          },
                          line_number: 4,
                        },
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '619952',
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
                            {
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$e$',
                                operate: '==',
                                manualValue: '1004',
                              },
                              condId: '5494603',
                              connector: '||',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 170625836203026560,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 170625844577300740,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 170625846878621730,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 170625846878628160,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: ['compId', 'valueList'],
                                  options: {
                                    compId: 'Input_4631073',
                                    compLib: 'comm',
                                    pageJsonId: '0552286',
                                    compName: 'Input',
                                    id: '2374957',
                                    valueList: { Input_4631073: '200' },
                                  },
                                  actionObjId: 'Input_4631073',
                                  actionObjName: 'Input',
                                  value: 'setValue',
                                  compLib: 'comm',
                                  line_number: 7,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              desc: '鲜花（200元）/ 蛋糕（200元）',
                              callback: [
                                {
                                  type: 'setValue',
                                  dataId: 170625846878621730,
                                  options: {
                                    compId: 'Input_4631073',
                                    compLib: 'comm',
                                    pageJsonId: '0552286',
                                    compName: 'Input',
                                    id: '2374957',
                                    valueList: { Input_4631073: '200' },
                                  },
                                  line_number: 7,
                                  callback1: [],
                                },
                              ],
                            },
                          ],
                          line_number: 5,
                          callback1: [
                            {
                              type: 'setValue',
                              dataId: 170625844160205470,
                              options: {
                                compId: 'Input_4631073',
                                compLib: 'comm',
                                pageJsonId: '0552286',
                                compName: 'Input',
                                id: '367382',
                                valueList: { Input_4631073: '100' },
                              },
                              line_number: 6,
                              callback1: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDisable',
                      dataId: 170625849993248060,
                      options: {
                        compId: 'Input_4631073',
                        compLib: 'comm',
                        pageJsonId: '0552286',
                        compName: 'Input',
                        id: '325353',
                        disabled: '',
                      },
                      line_number: 2,
                    },
                    {
                      type: 'setValue',
                      dataId: 170614806565388130,
                      options: {
                        compId: 'Input_4631073',
                        compLib: 'comm',
                        pageJsonId: '0552286',
                        compName: 'Input',
                        id: '380602625',
                        valueList: { Input_4631073: '' },
                      },
                      line_number: 3,
                      callback1: [],
                    },
                  ],
                },
              ];
              eventDataifelse359.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(eventDataifelse359, { e }, 'ifelse', {
                id: 'ifelse',
                name: 'ifelse',
                type: 'ifelse',
                platform: 'pc',
              });
              const eventDatagetSelectedData68: any = [
                {
                  type: 'getSelectedData',
                  dataId: 170614858668803140,
                  options: {
                    compId: 'Select_103552',
                    compLib: 'comm',
                    pageJsonId: '0552286',
                    compName: 'Select',
                    id: '7389359',
                  },
                  line_number: 8,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 170614859121479300,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '79739138',
                        pageJsonId: '0552286',
                        dataSourceId: 170614854198438200,
                        dataSourceName: 'info',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '9378892',
                            code: 'serviceResourceTypeName',
                            name: '服务资源类型名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$selectedData_7389359[0]$'],
                              code: 'label',
                            },
                          },
                          {
                            attrId: '929552',
                            code: 'serviceResourceType',
                            name: '服务资源类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$selectedData_7389359[0]$'],
                              code: 'value',
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 9,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatagetSelectedData68.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(
                eventDatagetSelectedData68,
                { e },
                'getSelectedData',
                {
                  id: 'getSelectedData',
                  name: 'getSelectedData',
                  type: 'getSelectedData',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Select_103552')}
            {...injectData}
          />
          <Input
            name={'服务资源金额(元)'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={5}
            fieldName={'serviceResourceMoney'}
            regexp={[
              {
                id: '548914',
                title: '按钮1',
                iconPos: 'left',
                regexpType: 2,
                message: '请输入大于0且最多2位小数的数',
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
              id: 'Input_4631073',
              uid: 'Input_4631073',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_4631073')}
            {...injectData}
          />
          <Input
            name={'本年已投放次数'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'接口回填'}
            formItemIndex={7}
            fieldName={'throwCountThisYear'}
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
              id: 'Input_082239',
              uid: 'Input_082239',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_082239')}
            {...injectData}
          />
          <Input
            name={'本年已投放金额(元)'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'接口回填'}
            formItemIndex={8}
            fieldName={'throwMoneyThisYear'}
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
              id: 'Input_98356',
              uid: 'Input_98356',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_98356')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(Kehuhuodongqingdan9496$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    orderNbr: '',
    isCoreFlag: '',
    infoList: '',
    staffCode: '',
  },
});
