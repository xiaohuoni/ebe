// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Input,
  DatePicker,
  Select,
  CheckboxGroup,
  Button,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '886851191046930432';
const MemberInfo$$Modal: React.FC<PageProps> = ({
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
  const loadSelectOptions = (options_9633757: any) => {
    const eventDatareloadSelectData10: any = [
      {
        type: 'reloadSelectData',
        dataId: 167764073470434050,
        options: {
          compId: 'Select_8379702',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Select',
          id: '357006',
          data: '$state.selectOptionsData.memberType$',
          labelKey: 'attrValueName',
          valueKey: 'attrValue',
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatareloadSelectData10.params =
      [
        {
          title: '事件入参',
          name: 'options_9633757',
          value: '$options_9633757$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadSelectData10,
      { options_9633757 },
      'reloadSelectData',
      {
        id: 'reloadSelectData',
        name: 'reloadSelectData',
        type: 'reloadSelectData',
        platform: 'undefined',
      },
    );
    const eventDatareloadSelectData11: any = [
      {
        type: 'reloadSelectData',
        dataId: 167764127779300200,
        options: {
          compId: 'Select_309312',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Select',
          id: '717621',
          data: '$state.selectOptionsData.officialLevel$',
          labelKey: 'attrValueName',
          valueKey: 'attrValue',
        },
        line_number: 2,
        callback1: [],
      },
    ];
    eventDatareloadSelectData11.params =
      [
        {
          title: '事件入参',
          name: 'options_9633757',
          value: '$options_9633757$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadSelectData11,
      { options_9633757 },
      'reloadSelectData',
      {
        id: 'reloadSelectData',
        name: 'reloadSelectData',
        type: 'reloadSelectData',
        platform: 'undefined',
      },
    );
    const eventDatareloadSelectData12: any = [
      {
        type: 'reloadSelectData',
        dataId: 167764137169585920,
        options: {
          compId: 'Select_609468',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Select',
          id: '375144',
          data: '$state.selectOptionsData.keyType$',
          labelKey: 'attrValueName',
          valueKey: 'attrValue',
        },
        line_number: 3,
        callback1: [],
      },
    ];
    eventDatareloadSelectData12.params =
      [
        {
          title: '事件入参',
          name: 'options_9633757',
          value: '$options_9633757$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadSelectData12,
      { options_9633757 },
      'reloadSelectData',
      {
        id: 'reloadSelectData',
        name: 'reloadSelectData',
        type: 'reloadSelectData',
        platform: 'undefined',
      },
    );
    const eventDatareloadRCData: any = [
      {
        type: 'reloadRCData',
        dataId: 167841679572393700,
        options: {
          compId: 'Input_23389',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'CheckboxGroup',
          id: '1196395',
          data: '$state.selectOptionsData.noDisturbScope$',
          labelKey: 'attrValueName',
          valueKey: 'attrValue',
        },
        line_number: 4,
        callback1: [],
      },
    ];
    eventDatareloadRCData.params =
      [
        {
          title: '事件入参',
          name: 'options_9633757',
          value: '$options_9633757$',
        },
      ] || [];
    CMDGenerator(eventDatareloadRCData, { options_9633757 }, 'reloadRCData', {
      id: 'reloadRCData',
      name: 'reloadRCData',
      type: 'reloadRCData',
      platform: 'undefined',
    });
  };
  const queryGroupInfo = (options_68892: any) => {
    const eventDatacustomActionCode181: any = [
      {
        type: 'customActionCode',
        dataId: 167774350726237920,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '686789',
          pageJsonId: 31,
          code: 'function main(data,state,success,fail){console.log("\\u6210\\u5458\\u589E\\u51CF-\\u96C6\\u56E2\\u4FE1\\u606F\\u67E5\\u8BE2\\u7ED3\\u679C\\u4E8B\\u4EF6\\u5165\\u53C2",options_68892);var resultData=options_68892;var officialLevel=resultData.officialLevel||"";var memberType=resultData.memberType||"";var keyType=resultData.keyType||"";var otherMemberTypes=["2","4","8","9","11","12","13"];var importantMemberOfficialLevel=["1","2","3","4","5","6","7"];var importantMemberType=["3","5","7"];var importantMemberKeyType=["1","2","3","6","8"];var hasImportantMemberOfficialLevel=importantMemberOfficialLevel.indexOf(officialLevel)>-1;var hasImportantMemberMemberType=importantMemberType.indexOf(memberType)>-1;var hasImportantMemberKeyType=importantMemberKeyType.indexOf(keyType)>-1;console.log("hasImportantMemberOfficialLevel",hasImportantMemberOfficialLevel);console.log("hasImportantMemberMemberType",hasImportantMemberMemberType);console.log("hasImportantMemberKeyType",hasImportantMemberKeyType);if(!hasImportantMemberOfficialLevel&&!hasImportantMemberMemberType&&!hasImportantMemberKeyType){fail("\\u8BE5\\u624B\\u673A\\u5F52\\u5C5E\\u666E\\u901A\\u6210\\u5458\\uFF0C\\u6B64\\u4E1A\\u52A1\\u4EC5\\u9650\\u91CD\\u8981\\u6210\\u5458\\u529E\\u7406");return false}if(otherMemberTypes.indexOf(memberType)>-1){resultData.memberType=""}success(resultData)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 167774350726274000,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '275382',
              pageJsonId: 31,
              value: ['手机号查询集团信息', '$data_686789$'],
            },
            line_number: 2,
          },
          {
            type: 'setCurrentFormValues',
            dataId: 167774366151049120,
            options: {
              compId: 'Form_31_1121',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Form',
              id: '291911',
              params: '$data_686789$',
            },
            line_number: 3,
          },
          {
            type: 'customActionCode',
            dataId: 167841227969327170,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '757038',
              pageJsonId: 31,
              code: 'function main(data,state,success,fail){data.formData=Object.assign(data.formData||{},data_686789);var arr=[];arr.push(data_686789);success(arr)};',
            },
            line_number: 4,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 167841385466828300,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '193531',
                  pageJsonId: 31,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'groupCustomerInfo',
                  _apiCode: 'groupCustomerInfo',
                  _source: 'rhin',
                  _serviceId: '915442281117552640',
                  _serviceTitle: '查询集团详情-hdb: groupCustomerInfo',
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
                      dataKey: '193531_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '193531_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '193531_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'objType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.objType',
                          compType: 'Input',
                          name: 'objType',
                          parents: ['body'],
                          id: 'body.objType',
                          dataKey: '193531_body.objType',
                        },
                        {
                          code: 'objId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.objId',
                          compType: 'Input',
                          name: 'objId',
                          parents: ['body'],
                          id: 'body.objId',
                          dataKey: '193531_body.objId',
                        },
                        {
                          code: 'instanceList',
                          name: '新增节点',
                          attrType: 'objectArray',
                          _id: 'body.instanceList',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.instanceList',
                          dataKey: '193531_body.instanceList',
                          value: {
                            type: ['context', '$data_757038$'],
                            code: '',
                          },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '193531_body',
                    },
                  ],
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167841409038678500,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '042263',
                      pageJsonId: 31,
                      code: 'function main(data,state,success,fail){var _reply_,_reply_$resultData;console.log("reply_193531",reply_193531.resultData);if(((_reply_=reply_193531)===null||_reply_===void 0?void 0:(_reply_$resultData=_reply_.resultData)===null||_reply_$resultData===void 0?void 0:_reply_$resultData.length)>0){success(reply_193531.resultData[0])}};',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 167841435639404930,
                        options: {
                          compId: ['Input_statusName_53895'],
                          compLib: 'comm',
                          pageJsonId: 31,
                          compName: 'Input',
                          id: '283666',
                          valueList: {
                            Input_statusName_53895: '$data_042263.statusName$',
                          },
                          compid: ['Input_statusName_53895'],
                        },
                        line_number: 7,
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
        ],
        callback2: [
          {
            type: 'showMessage',
            dataId: 167774350726268380,
            options: {
              compId: 'showMessage',
              compName: 'system',
              id: '675134',
              pageJsonId: 31,
              type: 'warn',
              value: '$fail_686789$',
            },
            line_number: 8,
          },
        ],
      },
    ];
    eventDatacustomActionCode181.params =
      [
        { title: '事件入参', name: 'options_68892', value: '$options_68892$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode181,
      { options_68892 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const noDisturbScopeChange = (options_10698: any) => {
    const eventDatagetValue98: any = [
      {
        type: 'getValue',
        dataId: 168170014076403040,
        options: {
          compId: 'Input_23389',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'CheckboxGroup',
          id: '431389',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168170014667605280,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9489007',
              pageJsonId: 31,
              code: 'function main(data,state,success,fail){var _value_;console.log("\\u514D\\u6253\\u6270-\\u503C\\u53D8\\u66F4-value_431389",value_431389);if(((_value_=value_431389)===null||_value_===void 0?void 0:_value_.length)>0){success(value_431389.toString())}else{data.formData.noDisturbScope=undefined;fail(undefined)}};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 168170077593228860,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '93556',
                  pageJsonId: 31,
                  dataSourceId: 167763664856801300,
                  dataSourceName: 'formData',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '968753',
                      code: 'officialLevelName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '042825',
                      code: 'memberTypeName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '648216',
                      code: 'keyTypeName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '456755',
                      code: 'noDisturbScope',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: ['context', '$data_9489007$'], code: '' },
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
            callback2: [
              {
                type: 'setValue',
                dataId: 168662070713983550,
                options: {
                  compId: 'Input_23389',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'CheckboxGroup',
                  id: '411701',
                  valueList: { Input_23389: '$fail_9489007$' },
                },
                line_number: 4,
                callback1: [],
              },
              {
                type: 'console',
                dataId: 168662075801236960,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '1712446',
                  pageJsonId: 31,
                  value: ['失败回调值', '$fail_9489007$'],
                },
                line_number: 5,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue98.params =
      [
        { title: '事件入参', name: 'options_10698', value: '$options_10698$' },
      ] || [];
    CMDGenerator(eventDatagetValue98, { options_10698 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    loadSelectOptions,
    queryGroupInfo,
    noDisturbScopeChange,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm58: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167765236921294720,
        options: {
          compId: 'Form_31_1121',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Form',
          id: '6915953',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167774375687630900,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '0431222',
              pageJsonId: 31,
              code: 'function main(data,state,success,fail){var _state$memberInfo;var resultData;console.log("\\u4FEE\\u6539\\u524Dstate.memberInfo",state.memberInfo);console.log("\\u4FEE\\u6539\\u524DForm_31_1121",Form_31_1121);console.log("\\u4FEE\\u6539\\u524Ddata.formData",data.formData);if(state!==null&&state!==void 0&&(_state$memberInfo=state.memberInfo)!==null&&_state$memberInfo!==void 0&&_state$memberInfo.rowId){resultData=Object.assign(state.memberInfo,data.formData,Form_31_1121,{noDisturbScope:data.formData.noDisturbScope})}else{resultData=Object.assign(data.formData||{},Form_31_1121,{rowId:new Date().getTime(),noDisturbScope:data.formData.noDisturbScope})}var officialLevel=resultData.officialLevel;var memberType=resultData.memberType;var keyType=resultData.keyType;var importantMember=["1,2,3,4,5,6,7","3,5,7","1,2,3,6,8"];var hasImportantMember=importantMember.findIndex(function(item,i){if(i===0){return item.indexOf(officialLevel)>-1}else if(i===1){return item.indexOf(memberType)>-1}else if(i===2){return item.indexOf(keyType)>-1}})>-1;if(!hasImportantMember){fail("\\u8BE5\\u624B\\u673A\\u5F52\\u5C5E\\u666E\\u901A\\u6210\\u5458\\uFF0C\\u6B64\\u4E1A\\u52A1\\u4EC5\\u9650\\u91CD\\u8981\\u6210\\u5458\\u529E\\u7406");return false}success(resultData)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 167774375687653100,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '1865088',
                  pageJsonId: 31,
                  params: '$data_0431222$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 167774375687631780,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '6120645',
                  pageJsonId: 31,
                },
                line_number: 4,
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 167835477391196740,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '880531',
                  pageJsonId: 31,
                  type: 'error',
                  value: '$fail_0431222$',
                },
                line_number: 5,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm58.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm58, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal74: any = [
      {
        type: 'closeModal',
        dataId: '545098_1',
        options: { compId: 'page', compName: 'page', id: '9354904' },
        line_number: 1,
      },
    ];
    eventDatacloseModal74.params = [] || [];
    CMDGenerator(eventDatacloseModal74, {}, 'closeModal', {
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
    // console 167765037690329380
    console.log('state', state);
    const eventDatacallSelfFunc41: any = [
      {
        type: 'callSelfFunc',
        dataId: 167764045909686560,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '521713',
          pageJsonId: 31,
          customFuncName: 'loadSelectOptions',
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc41.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc41, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataifelse255: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '484819',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166324252198304130,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'setDisable',
            dataId: 167021069939839100,
            options: {
              compId: 'Form_31_1121',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Form',
              id: '9374505',
              disabled: 'true',
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDataifelse255.params = [] || [];
    CMDGenerator(eventDataifelse255, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse256: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '048967',
            options: { context: '$state.memberInfo$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167841275515545820,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167841277870182500,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '120533',
              pageJsonId: 31,
              code: 'function main(data,state,success,fail){data.formData=state.memberInfo;success()};',
            },
            line_number: 6,
            callback1: [
              {
                type: 'setCurrentFormValues',
                dataId: 167841277870116740,
                options: {
                  compId: 'Form_31_1121',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Form',
                  id: '8731973',
                  params: '$state.memberInfo$',
                },
                line_number: 7,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse256.params = [] || [];
    CMDGenerator(eventDataifelse256, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_31_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_31_11')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
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
              margin: '0px 0px 0px 0px',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_31_112')}
            {...injectData}
          >
            <Form
              name={'表单'}
              header={'标题'}
              colSpan={12}
              colSpace={16}
              rowSpace={16}
              labelCol={8}
              wrapperCol={16}
              layout={'horizontal'}
              genRuleType={'key'}
              formType={'normal'}
              relationDataSource={data?.MemberInfo}
              busiObjectId={'886805849749016577'}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={() => {
                const eventDatasetDataSource221: any = [
                  {
                    type: 'setDataSource',
                    dataId: 167021024284158300,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '023585',
                      pageJsonId: 31,
                      dataSourceId: 166304804411681470,
                      dataSourceName: 'MemberInfo',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '7007954',
                          code: 'msisdn',
                          name: '手机号码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'msisdn',
                          },
                        },
                        {
                          attrId: '9566397',
                          code: 'memberJoinDate',
                          name: '纳入成员骨干时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'memberJoinDate',
                          },
                        },
                        {
                          attrId: '840388',
                          code: 'groupId',
                          name: '集团编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'groupId',
                          },
                        },
                        {
                          attrId: '146567',
                          code: 'groupName',
                          name: '集团名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'groupName',
                          },
                        },
                        {
                          attrId: '606111',
                          code: 'groupLevelName',
                          name: '价值等级',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'groupLevelName',
                          },
                        },
                        {
                          attrId: '292069',
                          code: 'statusName',
                          name: '集团状态',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'statusName',
                          },
                        },
                        {
                          attrId: '669499',
                          code: 'memberType',
                          name: '成员类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '088257',
                          code: 'officialLevel',
                          name: '行政级别',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '507061',
                          code: 'keyType',
                          name: '关键人标识',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '286049',
                          code: 'duty',
                          name: '职务',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'duty',
                          },
                        },
                        {
                          attrId: '163206',
                          code: 'cutOffTime',
                          name: '免扰截至时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'cutOffTime',
                          },
                        },
                        {
                          attrId: '384631',
                          code: 'noDisturbScope',
                          name: '免扰范围',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                        },
                        {
                          attrId: '7546488',
                          code: 'name',
                          name: '姓名',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '262831',
                          code: 'tradeclassTop',
                          name: '行业类型ID',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '442727',
                          code: 'customerId',
                          name: '客户ID',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '464926',
                          code: 'supervise',
                          name: '看管人员',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'supervise',
                          },
                        },
                        {
                          attrId: '0327732',
                          code: 'keyTypeName',
                          name: '关键人标识名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'keyTypeName',
                          },
                        },
                        {
                          attrId: '823974',
                          code: 'memberTypeName',
                          name: '成员类型名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'memberTypeName',
                          },
                        },
                        {
                          attrId: '187795',
                          code: 'officialLevelName',
                          name: '行政级别名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'officialLevelName',
                          },
                        },
                        {
                          attrId: '095668',
                          code: 'tradeclassTopName',
                          name: '行业类型名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '6948413',
                          code: 'rowId',
                          name: '行ID',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource221.params = [] || [];
                CMDGenerator(eventDatasetDataSource221, {}, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_31_1121')}
              {...injectData}
            >
              <Input
                name={'手机号码'}
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
                fieldName={'msisdn'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                formItemIndex={0}
                icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
                prefixIcon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Input_msisdn_9598107_208738',
                  uid: 'Input_msisdn_9598107_208738',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatagetValue237: any = [
                    {
                      type: 'getValue',
                      dataId: 166324222918363400,
                      options: {
                        compId: 'Input_msisdn_9598107_208738',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Input',
                        id: '141129',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167869318496718980,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '2118169',
                            pageJsonId: 31,
                            actionTitle: '手机号校验',
                            code: 'function main(data,state,success,fail){var phone=/^1[3-9]\\d{9}$/g;if(phone.test(value_141129)){success()}else{fail("\\u6E05\\u8F93\\u5165\\u6B63\\u786E\\u7684\\u624B\\u673A\\u53F7\\u540E\\uFF0C\\u518D\\u8FDB\\u884C\\u67E5\\u8BE2")}};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '277232',
                                  options: {
                                    context: '$value_141129$',
                                    operate: 'notEmpty',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 167869324200044100,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 167869324200051040,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 167869324200030820,
                                      children: [],
                                      todoOptions: ['msgType', 'value'],
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '499196',
                                        pageJsonId: 31,
                                        type: 'error',
                                        value: '请输入手机号码',
                                      },
                                      actionObjId: 'showMessage',
                                      actionObjName: 'system',
                                      value: 'showMessage',
                                      line_number: 7,
                                    },
                                  ],
                                  condition: [],
                                  callback: [
                                    {
                                      type: 'showMessage',
                                      dataId: 167869324200030820,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '499196',
                                        pageJsonId: 31,
                                        type: 'error',
                                        value: '请输入手机号码',
                                      },
                                      line_number: 7,
                                    },
                                  ],
                                },
                              ],
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'apiRequest',
                                  dataId: 167869324200063550,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '5246',
                                    pageJsonId: 31,
                                    sync: false,
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode: 'queryGroupMemberInfo',
                                    _apiCode: 'queryGroupMemberInfo',
                                    _source: 'rhin',
                                    _serviceId: '887259504713355264',
                                    _serviceTitle:
                                      '查询集团成员详细信息服务-hdb: queryGroupMemberInfo',
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
                                        dataKey: '5246_header',
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
                                        dataKey: '5246_path',
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
                                        dataKey: '5246_query',
                                        key: '2',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'homeCity',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'body.homeCity',
                                            compType: 'Input',
                                            name: 'homeCity',
                                            parents: ['body'],
                                            id: 'body.homeCity',
                                            dataKey: '5246_body.homeCity',
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-1',
                                          },
                                          {
                                            code: 'objType',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'body.objType',
                                            compType: 'Input',
                                            name: 'objType',
                                            parents: ['body'],
                                            id: 'body.objType',
                                            dataKey: '5246_body.objType',
                                            value: {
                                              type: ['customize'],
                                              code: '2',
                                            },
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-2',
                                          },
                                          {
                                            code: 'objId',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'body.objId',
                                            compType: 'Input',
                                            name: 'objId',
                                            parents: ['body'],
                                            id: 'body.objId',
                                            dataKey: '5246_body.objId',
                                            value: {
                                              type: [
                                                'context',
                                                '$value_141129$',
                                              ],
                                              code: '',
                                            },
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-3',
                                          },
                                          {
                                            code: 'orderNbr',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'body.orderNbr',
                                            compType: 'Input',
                                            parents: ['body'],
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-0',
                                          },
                                        ],
                                        _id: 'body',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'body',
                                        dataKey: '5246_body',
                                        key: '3',
                                      },
                                    ],
                                    _sourceName: '查询集团成员详细信息服务-hdb',
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'customActionCode',
                                      dataId: 167869326080345180,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '666966',
                                        pageJsonId: 31,
                                        actionTitle: '判断是否存在关联手机号',
                                        code: 'function main(data,state,success,fail){var resultData=reply_5246.resultData;if((resultData===null||resultData===void 0?void 0:resultData.length)>0){success(resultData[0])}else{fail("\\u67E5\\u8BE2\\u4E0D\\u5230\\u8BE5\\u624B\\u673A\\u53F7\\u5173\\u8054\\u7684\\u96C6\\u56E2\\u4FE1\\u606F")}};',
                                      },
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'callSelfFunc',
                                          dataId: 167869331662485820,
                                          options: {
                                            compId: 'callSelfFunc',
                                            compName: 'system',
                                            id: '795266',
                                            pageJsonId: 31,
                                            customFuncName: 'queryGroupInfo',
                                            customFuncParams: '$data_666966$',
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
                            },
                          ],
                          callback2: [
                            {
                              type: 'showMessage',
                              dataId: 167869323082340540,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '82691',
                                pageJsonId: 31,
                                type: 'error',
                                value: '$fail_2118169$',
                              },
                              line_number: 8,
                            },
                          ],
                        },
                      ],
                    },
                  ];
                  eventDatagetValue237.params = [] || [];
                  CMDGenerator(eventDatagetValue237, {}, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_msisdn_9598107_208738')
                }
                {...injectData}
              />
              <DatePicker
                name={'纳入成员管理时间'}
                timeMode={'date'}
                format={'YYYY-MM-DD'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
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
                fieldName={'memberJoinDate'}
                formItemIndex={1}
                $$componentItem={{
                  id: 'TimePicker_memberJoinDate_302123',
                  uid: 'TimePicker_memberJoinDate_302123',
                  type: 'DatePicker',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                defaultValue={{}}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_memberJoinDate_302123')
                }
                {...injectData}
              />
              <Input
                name={'集团编码'}
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
                fieldName={'groupId'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                formItemIndex={2}
                icon={{
                  type: '',
                  theme: '',
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
                  id: 'Input_groupId_123125',
                  uid: 'Input_groupId_123125',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatashowCustomModal239: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 167763635249615550,
                      shielding: true,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '831052',
                        pageJsonId: 31,
                        modalname: '/groupInfoSel',
                        pageId: '899848269504155648',
                        paramsObj: {
                          groupCode: '1000',
                          userCode: '$state.staffCode$',
                        },
                        paramsObjKeyValueMap: {
                          groupCode: '1000',
                          userCode: '$state.staffCode$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167763635249641700,
                          shielding: true,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '235116',
                            pageJsonId: 31,
                            code: 'function main(data,state,success,fail){var _okData_;if(((_okData_=okData_831052)===null||_okData_===void 0?void 0:_okData_.length)>0){success(okData_831052[0])}else{fail()}};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setValue',
                              dataId: 167763635249612380,
                              shielding: true,
                              options: {
                                compId: [
                                  'Input_groupId_123125',
                                  'Input_groupName_099808',
                                  'Input_statusName_53895',
                                  'Input_groupLevelName_9386347',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '49786',
                                valueList: {
                                  Input_groupId_123125: '$data_235116.groupId$',
                                  Input_groupName_099808:
                                    '$data_235116.groupName$',
                                  Input_statusName_53895:
                                    '$data_235116.statusName$',
                                  Input_groupLevelName_9386347:
                                    '$data_235116.groupLevelName$',
                                },
                                compid: [
                                  'Input_groupId_123125',
                                  'Input_groupName_099808',
                                  'Input_statusName_53895',
                                  'Input_groupLevelName_9386347',
                                ],
                              },
                              line_number: 3,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal239.params = [] || [];
                  CMDGenerator(
                    eventDatashowCustomModal239,
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_groupId_123125')
                }
                {...injectData}
              />
              <Input
                name={'集团名称'}
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
                fieldName={'groupName'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                formItemIndex={3}
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
                  id: 'Input_groupName_099808',
                  uid: 'Input_groupName_099808',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_groupName_099808')
                }
                {...injectData}
              />
              <Input
                name={'看管人员'}
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
                fieldName={'managerName'}
                hidden={false}
                showMore={false}
                attr={{}}
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
                  id: 'Input_supervise_741551',
                  uid: 'Input_supervise_741551',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_supervise_741551')
                }
                {...injectData}
              />
              <Input
                name={'价值等级'}
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
                fieldName={'valueTypeName'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
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
                  id: 'Input_groupLevelName_9386347',
                  uid: 'Input_groupLevelName_9386347',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_groupLevelName_9386347')
                }
                {...injectData}
              />
              <Input
                name={'集团状态'}
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
                fieldName={'statusName'}
                hidden={false}
                showMore={false}
                attr={{}}
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
                  id: 'Input_statusName_53895',
                  uid: 'Input_statusName_53895',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_statusName_53895')
                }
                {...injectData}
              />
              <Select
                name={'成员类型'}
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
                formItemIndex={7}
                fieldName={'memberType'}
                $$componentItem={{
                  id: 'Select_8379702',
                  uid: 'Select_8379702',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatagetSelectedData397: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 167763968899234200,
                      options: {
                        compId: 'Select_8379702',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '7394794',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167763969572196300,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '50994',
                            pageJsonId: 31,
                            dataSourceId: 167763664856801300,
                            dataSourceName: 'formData',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '968753',
                                code: 'officialLevelName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '042825',
                                code: 'memberTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_7394794[0].label$',
                                },
                              },
                              {
                                attrId: '648216',
                                code: 'keyTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '456755',
                                code: 'noDisturbScope',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetSelectedData397.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatagetSelectedData397,
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
                ref={(r: any) => refs.setComponentRef(r, 'Select_8379702')}
                {...injectData}
              />
              <Select
                name={'行政级别'}
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
                formItemIndex={8}
                fieldName={'officialLevel'}
                $$componentItem={{
                  id: 'Select_309312',
                  uid: 'Select_309312',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatagetSelectedData398: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 167763977822033380,
                      options: {
                        compId: 'Select_309312',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '241002',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167763981756145760,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '962025',
                            pageJsonId: 31,
                            dataSourceId: 167763664856801300,
                            dataSourceName: 'formData',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '968753',
                                code: 'officialLevelName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_241002[0].label$',
                                },
                              },
                              {
                                attrId: '042825',
                                code: 'memberTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '648216',
                                code: 'keyTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetSelectedData398.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatagetSelectedData398,
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
                ref={(r: any) => refs.setComponentRef(r, 'Select_309312')}
                {...injectData}
              />
              <Select
                name={'经办标识'}
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
                formItemIndex={9}
                fieldName={'keyType'}
                $$componentItem={{
                  id: 'Select_609468',
                  uid: 'Select_609468',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatagetSelectedData399: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 167763989802475300,
                      options: {
                        compId: 'Select_609468',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '738165',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167764003327369800,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '464605',
                            pageJsonId: 31,
                            dataSourceId: 167763664856801300,
                            dataSourceName: 'formData',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '968753',
                                code: 'officialLevelName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '042825',
                                code: 'memberTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '648216',
                                code: 'keyTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_738165[0].label$',
                                },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetSelectedData399.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatagetSelectedData399,
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
                ref={(r: any) => refs.setComponentRef(r, 'Select_609468')}
                {...injectData}
              />
              <Input
                name={'职务'}
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
                fieldName={'duty'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                formItemIndex={10}
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
                  id: 'Input_duty_316705',
                  uid: 'Input_duty_316705',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_duty_316705')}
                {...injectData}
              />
              <DatePicker
                name={'免扰截至时间'}
                timeMode={'date'}
                format={'YYYY-MM-DD'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
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
                fieldName={'cutOffTime'}
                formItemIndex={11}
                $$componentItem={{
                  id: 'TimePicker_cutOffTime_8279925',
                  uid: 'TimePicker_cutOffTime_8279925',
                  type: 'DatePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                defaultValue={{}}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_cutOffTime_8279925')
                }
                {...injectData}
              />
              <CheckboxGroup
                name={'免扰范围'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={'20'}
                fieldName={'noDisturbScope'}
                required={true}
                formItemIndex={12}
                tipIcon={{
                  theme: 'outlined',
                  type: 'question-circle',
                  isIconFont: false,
                }}
                checkedAll={false}
                checkAllText={'全选'}
                dataSource={attrDataMap['noDisturbScope']}
                $$componentItem={{
                  id: 'Input_23389',
                  uid: 'Input_23389',
                  type: 'CheckboxGroup',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(value: any) => {
                  const eventDatacallSelfFunc640: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 168170034046017760,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '5817724',
                        pageJsonId: 31,
                        customFuncName: 'noDisturbScopeChange',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc640.params =
                    [
                      { title: '复选组取值', name: 'value', value: '$value$' },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc640,
                    { value },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Input_23389')}
                {...injectData}
              />
              <Button
                name={'全选'}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'small'}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_555894',
                  uid: 'Button_555894',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                schema={{
                  compType: 1,
                  props: {
                    formItemIndex: 13,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                style={{ width: 'fit-content', marginLeft: '34%' }}
                onClick={(e: any) => {
                  const eventDatasetValue39: any = [
                    {
                      type: 'setValue',
                      dataId: 168169344768615200,
                      shielding: true,
                      options: {
                        compId: ['Input_23389'],
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'DatePicker',
                        id: '683278',
                        valueList: {
                          Input_23389:
                            "[ '10086短信','10086彩信', '10086人工外呼', '10086人工外呼','10088','10050', '自动语音外呼']",
                        },
                        compid: ['Input_23389'],
                      },
                      line_number: 1,
                      callback1: [],
                    },
                  ];
                  eventDatasetValue39.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetValue39, { e }, 'setValue', {
                    id: 'setValue',
                    name: 'setValue',
                    type: 'setValue',
                    platform: 'pc',
                  }); // console 168169457824466340
                  console.log('qqqqqqq');
                  // console 168169463237994660
                  console.log(state?.selectOptionsData);
                  const eventDatacustomActionCode727: any = [
                    {
                      type: 'customActionCode',
                      dataId: 168169396292310720,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '6930142',
                        pageJsonId: 31,
                        code: 'function main(data,state,success,fail){state.selectOptionsData;console.log("-----------------");console.log("\\u590D\\u9009\\u6846\\uFF1Astate.selectOptionsData",state.selectOptionsData);console.log("\\u590D\\u9009\\u6846\\uFF1Astate.sceneCode;",state.sceneCode);console.log("\\u590D\\u9009\\u6846\\uFF1Astate.bizId:",state.bizId);console.log("\\u590D\\u9009\\u6846\\uFF1Astate.lanId:",state.lanId);;};',
                      },
                      line_number: 4,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode727.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode727,
                    { e },
                    'customActionCode',
                    {
                      id: 'customActionCode',
                      name: 'customActionCode',
                      type: 'customActionCode',
                      platform: 'pc',
                    },
                  );
                  const eventDatagetValue238: any = [
                    {
                      type: 'getValue',
                      dataId: 168169708179101380,
                      options: {
                        compId: 'Input_23389',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'CheckboxGroup',
                        id: '445877',
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 168169874850196100,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '9926753',
                            pageJsonId: 31,
                            code: 'function main(data,state,success,fail){var _state$selectOptionsD,_value_;var all=(_state$selectOptionsD=state.selectOptionsData.noDisturbScope)===null||_state$selectOptionsD===void 0?void 0:_state$selectOptionsD.map(function(item){return item.attrValue});console.log("\\u514D\\u6253\\u6270-\\u9009\\u4E2D",value_445877);console.log("\\u514D\\u6253\\u6270-all",all);if(all.length===((_value_=value_445877)===null||_value_===void 0?void 0:_value_.length)){success([])}else{success(all)}};',
                          },
                          line_number: 6,
                          callback1: [
                            {
                              type: 'setValue',
                              dataId: 168169912722620130,
                              options: {
                                compId: 'Input_23389',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'CheckboxGroup',
                                id: '413742',
                                valueList: { Input_23389: '$data_9926753$' },
                              },
                              line_number: 7,
                              callback1: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 168170080720329400,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '173331',
                                pageJsonId: 31,
                                customFuncName: 'noDisturbScopeChange',
                              },
                              line_number: 8,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDatagetValue238.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatagetValue238, { e }, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_555894')}
                {...injectData}
              />
            </Form>
          </View>
        </View>
        <Form
          name={'表单'}
          colSpan={24}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_7791756'}
          formColumns={[
            {
              id: 'MultipleSelect_noDisturbScope_187169',
              label: '复选组',
              compName: 'CheckboxGroup',
              type: 'CheckboxGroup',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '免扰范围',
                basicStatus: 1,
                titleTip: 'notext',
                tipLocation: 'after',
                tipPlacement: 'top',
                attr: {
                  attrName: '免扰范围',
                  attrId: '886805801580888064',
                  attrNbr: 'noDisturbScope',
                  childKeys: [],
                  dataType: 'all',
                  selectedKeyTags: [],
                },
                selfSpan: '',
                labelCol: '18%',
                wrapperCol: '82%',
                visible: true,
                fieldName: 'noDisturbScope',
                required: true,
                value: data?.MemberInfo?.noDisturbScope,
                formItemIndex: 0,
                staticData: {
                  data: {
                    statusCd: '00A',
                    creatorId: '50169',
                    updatorId: null,
                    createdTime: '2022-09-13 10:49:39',
                    updatedTime: '2022-09-13 10:49:39',
                    statusTime: '2022-09-13 10:49:39',
                    remark: null,
                    tenantCode: null,
                    attrId: '886805801580888064',
                    busiTypeId: null,
                    attrNbr: 'noDisturbScope',
                    attrName: '免扰范围',
                    attrDesc: '免扰范围',
                    extAttrId: null,
                    parAttrId: null,
                    defaultValue: null,
                    attrValueDataType: null,
                    attrValueType: null,
                    appId: '871672424566726656',
                    actionType: null,
                    creatorName: null,
                    updatorName: null,
                    attrValueDTOList: null,
                    script: null,
                    childKeys: [],
                    dataType: 'all',
                    selectedKeyTags: [],
                  },
                  type: 'static',
                },
              },
              style: {},
              isContainer: false,
              isBusiObjContainer: false,
              cmdgroup: ['basic'],
              platform: 'pc',
              icon: 'CheckboxGroup',
              description: '',
              image: '',
              groupsName: '数据录入',
              setEvents: [
                {
                  dataName: 'event',
                  dataId: 167108948524736200,
                  children: [
                    {
                      dataName: 'action',
                      dataId: 167108948970677800,
                      children: [
                        {
                          dataName: 'callback',
                          dataId: 167108948970644700,
                          children: [],
                          value: 'callback1',
                          params: [],
                        },
                        {
                          dataName: 'callback',
                          dataId: 167108948970639330,
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
                        id: '500232',
                        pageJsonId: 31,
                        dataSourceId: 166304804411681470,
                        dataSourceName: 'MemberInfo',
                        dataSourceRelType: 'object',
                        dataSourceReloadFilter: [
                          {
                            attrId: '229143',
                            code: 'primaryValue',
                            name: '主键值',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                          },
                        ],
                        dataSourceSetValue: [
                          {
                            attrId: '7007954',
                            code: 'msisdn',
                            name: '手机号码',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '9566397',
                            code: 'memberJoinDate',
                            name: '纳入成员骨干时间',
                            type: 'datetime',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '840388',
                            code: 'groupId',
                            name: '集团编码',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '146567',
                            code: 'groupName',
                            name: '集团名称',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '606111',
                            code: 'groupLevelName',
                            name: '价值等级',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '292069',
                            code: 'statusName',
                            name: '集团状态',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '669499',
                            code: 'memberType',
                            name: '成员类型',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '088257',
                            code: 'officialLevel',
                            name: '行政级别',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '507061',
                            code: 'keyType',
                            name: '关键人标识',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '286049',
                            code: 'duty',
                            name: '职务',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '163206',
                            code: 'cutOffTime',
                            name: '免扰截至时间',
                            type: 'datetime',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '384631',
                            code: 'noDisturbScope',
                            name: '免扰范围',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                          },
                          {
                            attrId: '7546488',
                            code: 'name',
                            name: '姓名',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '262831',
                            code: 'tradeclassTop',
                            name: '行业类型ID',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '442727',
                            code: 'customerId',
                            name: '客户ID',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '464926',
                            code: 'supervise',
                            name: '看管人员',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '0327732',
                            code: 'keyTypeName',
                            name: '关键人标识名称',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '823974',
                            code: 'memberTypeName',
                            name: '成员类型名称',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '187795',
                            code: 'officialLevelName',
                            name: '行政级别名称',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '095668',
                            code: 'tradeclassTopName',
                            name: '行业类型名称',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                          {
                            attrId: '6948413',
                            code: 'rowId',
                            name: '行ID',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: null },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      actionObjId: 'setDataSource',
                      actionObjName: 'page',
                      value: 'setDataSource',
                    },
                  ],
                  value: 'onChange',
                  params: [
                    { title: '单选组取值', name: 'e', value: e?.target?.value },
                  ],
                },
              ],
              components: [],
              isLabelDropBoxChild: false,
            },
            {
              label: '复选组',
              compName: 'CheckboxGroup',
              type: 'CheckboxGroup',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '免扰范围',
                basicStatus: 1,
                titleTip: 'notext',
                tipLocation: 'after',
                tipPlacement: 'top',
                attr: { selectedKeyTags: [], dataType: 'local' },
                selfSpan: '',
                labelCol: '18%',
                wrapperCol: '82%',
                visible: true,
                fieldName: 'noDisturbScope',
                required: true,
                formItemIndex: 1,
              },
              style: {},
              isContainer: false,
              isBusiObjContainer: false,
              cmdgroup: ['basic'],
              platform: 'pc',
              icon: 'CheckboxGroup',
              description: '',
              image: '',
              groupsName: '数据录入',
              alias: 'DformInput',
              setEvents: [],
              components: [],
              id: 'Input_23389',
            },
          ]}
          $$componentItem={{
            id: 'Form_7791756',
            uid: 'Form_7791756',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 10px 102px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_7791756')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(MemberInfo$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    lanId: '',
    memberInfo: '',
    selectOptionsData: '',
  },
});
