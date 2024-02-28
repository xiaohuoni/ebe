// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, TimePicker } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '909364195753476096';
const MarketSelMember$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {
    const eventDatacustomActionCode309: any = [
      {
        type: 'customActionCode',
        dataId: 166850117286344930,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '455834',
          pageJsonId: 31,
          code: 'function main(data,state,success,fail){if(state.memberInfo==undefined||state.memberInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.MemberInfo.rowId=rowId}else{var oldRowId=state.memberInfo.rowId;data.MemberInfo.rowId=oldRowId}success(data.MemberInfo)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'validateCurrentForm',
            dataId: 166850125464992770,
            options: {
              compId: 'Form_31_1121',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Form',
              id: '798787',
            },
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 166850125464996350,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '59019747',
                  pageJsonId: 31,
                  params: '$data.MemberInfo$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 166850125464974820,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '8628177',
                  pageJsonId: 31,
                },
                line_number: 4,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode309.params = [] || [];
    CMDGenerator(eventDatacustomActionCode309, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal114: any = [
      {
        type: 'closeModal',
        dataId: '545098_1',
        options: { compId: 'page', compName: 'page', id: '9354904' },
        line_number: 1,
      },
    ];
    eventDatacloseModal114.params = [] || [];
    CMDGenerator(eventDatacloseModal114, {}, 'closeModal', {
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
    const eventDataifelse327: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '109283',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.selType$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166849370471428000,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'setVisible',
            dataId: 166849375962437920,
            options: {
              compId: ['Input_termType_74849', 'Input_termModel_482702'],
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Input',
              id: '155801',
              visible: '',
              compid: ['Input_termType_74849', 'Input_termModel_482702'],
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse327.params = [] || [];
    CMDGenerator(eventDataifelse327, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse328: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '484819',
            options: {
              context: '$state.memberInfo$',
              operate: 'notEmpty',
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
            type: 'customActionCode',
            dataId: 166324253994456930,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '646259',
              pageJsonId: 31,
              code: 'function main(data,state,success,fail){data.MemberInfo=state.memberInfo;success()};',
            },
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166324257431323550,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '005492',
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
                      attrId: '6948413',
                      code: 'rowId',
                      name: '行ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '401541',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '189742',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '1294888',
                      code: 'msisdnomeCity',
                      name: '成员号码归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '4615176',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '325052',
                      code: 'homeCity',
                      name: '集团归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '078268',
                      code: 'email',
                      name: '邮箱',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '6760956',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '452972',
                      code: 'department',
                      name: '部门',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1558215',
                      code: 'remark',
                      name: '备注',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '398898',
                      code: 'coreFlag',
                      name: '是否重要成员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '691862',
                      code: 'actionTypeName',
                      name: '操作类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '685896',
                      code: 'sceneTypeName',
                      name: '场景类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '620555',
                      code: 'msisdnomeCityName',
                      name: '号码归属地名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '211842',
                      code: 'objTypeName',
                      name: '对象类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '788689',
                      code: 'homeCityName',
                      name: '集团归属地名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '964244',
                      code: 'genderName',
                      name: '性别中文名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '024451',
                      code: 'coreFlagName',
                      name: '是否重要成员名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '350075',
                      code: 'clientSign',
                      name: '重要客户标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '056293',
                      code: 'netInTime',
                      name: '入网时间',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1700811',
                      code: 'contractNum',
                      name: '未到期合约数量',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '8216899',
                      code: 'mainMeal',
                      name: '主套餐',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '8232005',
                      code: 'onceDisc',
                      name: '主套餐一次折扣',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '7031588',
                      code: 'termType',
                      name: '终端类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '632563',
                      code: 'termModel',
                      name: '终端型号',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '743478',
                      code: 'arpuValue',
                      name: '近三个月ARPU值',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
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
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '1136398',
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
            dataId: 166849361654783550,
            elseIfs: [],
            line_number: 6,
            callback1: [
              {
                type: 'setDisable',
                dataId: 166849363810796100,
                options: {
                  compId: 'Form_31_1121',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Form',
                  id: '7473974',
                  disabled: 'toggle',
                },
                line_number: 7,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse328.params = [] || [];
    CMDGenerator(eventDataifelse328, {}, 'ifelse', {
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
        className="View_View_31_1"
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
          type: 'View',
          ...componentItem,
        }}
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
          className="View_VerticalView_31_11"
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_31_11')}
          {...injectData}
        >
          <View
            className="View_View_31_112"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
              type: 'View',
              ...componentItem,
            }}
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
                const eventDatasetDataSource304: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166304805174437340,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '1137146',
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
                            code: 'custCode',
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
                            code: 'custName',
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
                        {
                          attrId: '401541',
                          code: 'actionType',
                          name: '操作类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                        },
                        {
                          attrId: '189742',
                          code: 'sceneType',
                          name: '场景类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                        },
                        {
                          attrId: '1294888',
                          code: 'msisdnomeCity',
                          name: '成员号码归属地',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                        },
                        {
                          attrId: '4615176',
                          code: 'objType',
                          name: '对象类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                        },
                        {
                          attrId: '325052',
                          code: 'homeCity',
                          name: '集团归属地',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                        },
                        {
                          attrId: '078268',
                          code: 'email',
                          name: '邮箱',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '6760956',
                          code: 'gender',
                          name: '性别',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '452972',
                          code: 'department',
                          name: '部门',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '1558215',
                          code: 'remark',
                          name: '备注',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '398898',
                          code: 'coreFlag',
                          name: '是否重要成员',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                        },
                        {
                          attrId: '691862',
                          code: 'actionTypeName',
                          name: '操作类型名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '685896',
                          code: 'sceneTypeName',
                          name: '场景类型名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '620555',
                          code: 'msisdnomeCityName',
                          name: '号码归属地名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '211842',
                          code: 'objTypeName',
                          name: '对象类型名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '788689',
                          code: 'homeCityName',
                          name: '集团归属地名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '964244',
                          code: 'genderName',
                          name: '性别中文名',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '024451',
                          code: 'coreFlagName',
                          name: '是否重要成员名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '350075',
                          code: 'clientSign',
                          name: '重要客户标识',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'clientSign',
                          },
                        },
                        {
                          attrId: '056293',
                          code: 'netInTime',
                          name: '入网时间',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'netInTime',
                          },
                        },
                        {
                          attrId: '1700811',
                          code: 'contractNum',
                          name: '未到期合约数量',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'contractNum',
                          },
                        },
                        {
                          attrId: '8216899',
                          code: 'mainMeal',
                          name: '主套餐',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'mainMeal',
                          },
                        },
                        {
                          attrId: '8232005',
                          code: 'onceDisc',
                          name: '主套餐一次折扣',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'onceDisc',
                          },
                        },
                        {
                          attrId: '7031588',
                          code: 'termType',
                          name: '终端类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'termType',
                          },
                        },
                        {
                          attrId: '632563',
                          code: 'termModel',
                          name: '终端型号',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'termModel',
                          },
                        },
                        {
                          attrId: '743478',
                          code: 'arpuValue',
                          name: '近三个月ARPU值',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'arpuValue',
                          },
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource304.params = [] || [];
                CMDGenerator(eventDatasetDataSource304, {}, 'setDataSource', {
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
                required={false}
                placeholder={'请输入'}
                fieldName={'msisdn'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.msisdn}
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
                  id: 'Input_msisdn_9598107',
                  uid: 'Input_msisdn_9598107',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatagetValue263: any = [
                    {
                      type: 'getValue',
                      dataId: 166324222918363400,
                      options: {
                        compId: 'Input_msisdn_9598107',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Input',
                        id: '141129',
                      },
                      line_number: 1,
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
                          dataId: 166324223247267330,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166324224486415550,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166324225302479520,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '524909',
                                    pageJsonId: 31,
                                    type: 'error',
                                    value: '请输入手机号码',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  elseIfs: [],
                                  line_number: 6,
                                },
                              ],
                              condition: [],
                              elseIfs: [],
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166324225302479520,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '524909',
                                    pageJsonId: 31,
                                    type: 'error',
                                    value: '请输入手机号码',
                                  },
                                  line_number: 6,
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 166324227096907170,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '4361715',
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
                                    dataKey: '4361715_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '4361715_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '4361715_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'group_id',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.group_id',
                                        compType: 'Input',
                                        name: 'group_id',
                                        parents: ['body'],
                                        id: 'body.group_id',
                                        dataKey: '4361715_body.group_id',
                                      },
                                      {
                                        code: 'group_home_city',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.group_home_city',
                                        compType: 'Input',
                                        name: 'group_home_city',
                                        parents: ['body'],
                                        id: 'body.group_home_city',
                                        dataKey: '4361715_body.group_home_city',
                                      },
                                      {
                                        code: 'msisdn',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.msisdn',
                                        compType: 'Input',
                                        name: 'msisdn',
                                        parents: ['body'],
                                        id: 'body.msisdn',
                                        dataKey: '4361715_body.msisdn',
                                        value: {
                                          type: ['context', '$value_141129$'],
                                          code: '',
                                        },
                                      },
                                      {
                                        code: 'member_home_city',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.member_home_city',
                                        compType: 'Input',
                                        name: 'member_home_city',
                                        parents: ['body'],
                                        id: 'body.member_home_city',
                                        dataKey:
                                          '4361715_body.member_home_city',
                                        value: {
                                          type: ['context', '$state.lanId$'],
                                          code: '',
                                        },
                                      },
                                    ],
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '4361715_body',
                                  },
                                ],
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'customActionCode',
                                  dataId: 16632423265280458,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '3306955',
                                    pageJsonId: 31,
                                    code: 'function main(data,state,success,fail){var _reply_;var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.MemberInfo=(_reply_=reply_4361715)===null||_reply_===void 0?void 0:_reply_.resultData;data.MemberInfo.rowId=rowId;success()};',
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 166324239685727520,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '241894',
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
                                            initialData: {
                                              type: 'static',
                                              value: '',
                                            },
                                          },
                                        ],
                                        dataSourceSetValue: [
                                          {
                                            attrId: '7007954',
                                            code: 'msisdn',
                                            name: '手机号码',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '9566397',
                                            code: 'memberJoinDate',
                                            name: '纳入成员骨干时间',
                                            type: 'datetime',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '606111',
                                            code: 'groupLevelName',
                                            name: '价值等级',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '292069',
                                            code: 'statusName',
                                            name: '集团状态',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '669499',
                                            code: 'memberType',
                                            name: '成员类型',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '088257',
                                            code: 'officialLevel',
                                            name: '行政级别',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '507061',
                                            code: 'keyType',
                                            name: '关键人标识',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '286049',
                                            code: 'duty',
                                            name: '职务',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '163206',
                                            code: 'cutOffTime',
                                            name: '免扰截至时间',
                                            type: 'datetime',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '384631',
                                            code: 'noDisturbScope',
                                            name: '免扰范围',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '',
                                            },
                                          },
                                          {
                                            attrId: '7546488',
                                            code: 'name',
                                            name: '姓名',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '262831',
                                            code: 'tradeclassTop',
                                            name: '行业类型ID',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '442727',
                                            code: 'customerId',
                                            name: '客户ID',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '464926',
                                            code: 'supervise',
                                            name: '看管人员',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '0327732',
                                            code: 'keyTypeName',
                                            name: '关键人标识名称',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '823974',
                                            code: 'memberTypeName',
                                            name: '成员类型名称',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '187795',
                                            code: 'officialLevelName',
                                            name: '行政级别名称',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '095668',
                                            code: 'tradeclassTopName',
                                            name: '行业类型名称',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
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
                  eventDatagetValue263.params = [] || [];
                  CMDGenerator(eventDatagetValue263, {}, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_msisdn_9598107')
                }
                {...injectData}
              />
              <TimePicker
                name={'加入时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'memberJoinDate'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.memberJoinDate}
                formItemIndex={1}
                isCurrent={'now'}
                disabled={false}
                visible={true}
                $$componentItem={{
                  id: 'TimePicker_memberJoinDate_056056',
                  uid: 'TimePicker_memberJoinDate_056056',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_memberJoinDate_056056')
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
                fieldName={'custCode'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.groupId}
                formItemIndex={2}
                disabled={false}
                visible={true}
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
                  id: 'Input_custCode_9151754',
                  uid: 'Input_custCode_9151754',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_custCode_9151754')
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
                fieldName={'custName'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.groupName}
                formItemIndex={3}
                disabled={false}
                visible={true}
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
                  id: 'Input_custName_775747',
                  uid: 'Input_custName_775747',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_custName_775747')
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
                fieldName={'groupLevelName'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.groupLevelName}
                formItemIndex={4}
                disabled={false}
                visible={true}
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
                  id: 'Input_groupLevelName_399168',
                  uid: 'Input_groupLevelName_399168',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_groupLevelName_399168')
                }
                {...injectData}
              />
              <Input
                name={'重要客户标识'}
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
                fieldName={'clientSign'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.clientSign}
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
                  id: 'Input_clientSign_0396687',
                  uid: 'Input_clientSign_0396687',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_clientSign_0396687')
                }
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
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.duty}
                formItemIndex={6}
                disabled={false}
                visible={true}
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
                  id: 'Input_duty_62565166',
                  uid: 'Input_duty_62565166',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_duty_62565166')}
                {...injectData}
              />
              <Input
                name={'行政级别'}
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
                fieldName={'officialLevelName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.officialLevelName}
                formItemIndex={7}
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
                  id: 'Input_officialLevelName_532142',
                  uid: 'Input_officialLevelName_532142',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_officialLevelName_532142')
                }
                {...injectData}
              />
              <Input
                name={'成员类型'}
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
                fieldName={'memberTypeName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.memberTypeName}
                formItemIndex={8}
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
                  id: 'Input_memberTypeName_8862884',
                  uid: 'Input_memberTypeName_8862884',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_memberTypeName_8862884')
                }
                {...injectData}
              />
              <Input
                name={'关键人标识'}
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
                fieldName={'keyTypeName'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.keyTypeName}
                formItemIndex={9}
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
                  id: 'Input_keyTypeName_3849944',
                  uid: 'Input_keyTypeName_3849944',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_keyTypeName_3849944')
                }
                {...injectData}
              />
              <Input
                name={'入网时间'}
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
                fieldName={'netInTime'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.netInTime}
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
                  id: 'Input_netInTime_82131',
                  uid: 'Input_netInTime_82131',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_netInTime_82131')
                }
                {...injectData}
              />
              <Input
                name={'未到期合约数量'}
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
                fieldName={'contractNum'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.contractNum}
                formItemIndex={11}
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
                  id: 'Input_contractNum_6623936',
                  uid: 'Input_contractNum_6623936',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_contractNum_6623936')
                }
                {...injectData}
              />
              <Input
                name={'主套餐'}
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
                fieldName={'mainMeal'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.mainMeal}
                formItemIndex={12}
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
                  id: 'Input_mainMeal_280575',
                  uid: 'Input_mainMeal_280575',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_mainMeal_280575')
                }
                {...injectData}
              />
              <Input
                name={'主套餐一次折扣'}
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
                fieldName={'onceDisc'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.onceDisc}
                formItemIndex={13}
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
                  id: 'Input_onceDisc_813353',
                  uid: 'Input_onceDisc_813353',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_onceDisc_813353')
                }
                {...injectData}
              />
              <Input
                name={'终端类型'}
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
                fieldName={'termType'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.termType}
                formItemIndex={14}
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
                  id: 'Input_termType_74849',
                  uid: 'Input_termType_74849',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_termType_74849')
                }
                {...injectData}
              />
              <Input
                name={'终端型号'}
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
                fieldName={'termModel'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.termModel}
                formItemIndex={15}
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
                  id: 'Input_termModel_482702',
                  uid: 'Input_termModel_482702',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_termModel_482702')
                }
                {...injectData}
              />
              <Input
                name={'近三个月ARPU值'}
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
                fieldName={'arpuValue'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.arpuValue}
                formItemIndex={16}
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
                  id: 'Input_arpuValue_7855403',
                  uid: 'Input_arpuValue_7855403',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_arpuValue_7855403')
                }
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(MarketSelMember$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    lanId: '',
    memberInfo: '',
    selType: '',
  },
});
