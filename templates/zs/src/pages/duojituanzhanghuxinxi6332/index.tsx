// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Button, LoopList, Text, View } from '@/components/factory';

import BusiComp963983 from '@/components/BusiComp963983';

import BusiComp922954 from '@/components/BusiComp922954';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Duojituanzhanghuxinxi6332$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal20: any = [
      {
        type: 'closeModal',
        dataId: '067451_1',
        options: { compId: 'page', compName: 'page', id: '331657' },
        line_number: 1,
      },
    ];
    eventDatacloseModal20.params = [] || [];
    CMDGenerator(eventDatacloseModal20, {}, 'closeModal', {
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
    const eventDatacustomActionCode238: any = [
      {
        type: 'customActionCode',
        dataId: 170493701825464900,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '2023158',
          pageJsonId: '930217',
          actionTitle: '',
          code: 'function main(data,state,success,fail){data.singleGroup=state.singleGroup;console.log("singleGroup = ",state.singleGroup);success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170493803363103840,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '761742',
              pageJsonId: '930217',
              dataSourceId: 170493687373019700,
              dataSourceName: 'singleGroup',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupInfo',
                  children: [
                    {
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      attrId: '904292',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupId'],
                      _idpath: ['616112', '904292'],
                    },
                    {
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      attrId: '7041488',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupName'],
                      _idpath: ['616112', '7041488'],
                    },
                    {
                      code: 'groupLevelName',
                      name: '价值等级',
                      type: 'string',
                      attrId: '569808',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupLevelName'],
                      _idpath: ['616112', '569808'],
                    },
                    {
                      code: 'paidNum',
                      name: '付费号码',
                      type: 'string',
                      attrId: '238709',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'paidNum'],
                      _idpath: ['616112', '238709'],
                    },
                    {
                      code: 'belongCityText',
                      name: '归属地市',
                      type: 'string',
                      attrId: '471227',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'belongCityText'],
                      _idpath: ['616112', '471227'],
                    },
                    {
                      code: 'belongAreaText',
                      name: '归属区县',
                      type: 'string',
                      attrId: '7855305',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'belongAreaText'],
                      _idpath: ['616112', '7855305'],
                    },
                    {
                      code: 'isAgencyGroup',
                      name: '是否代理商集团',
                      type: 'string',
                      attrId: '70313',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'isAgencyGroup'],
                      _idpath: ['616112', '70313'],
                    },
                    {
                      code: 'groupCreditRate',
                      name: '集团征信等级',
                      type: 'string',
                      attrId: '6489789',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupCreditRate'],
                      _idpath: ['616112', '6489789'],
                    },
                    {
                      code: 'institutionType',
                      name: '机构类型',
                      type: 'string',
                      attrId: '108896',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'institutionType'],
                      _idpath: ['616112', '108896'],
                    },
                    {
                      code: 'industryCategory',
                      name: '行业大类',
                      type: 'string',
                      attrId: '0795143',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'industryCategory'],
                      _idpath: ['616112', '0795143'],
                    },
                    {
                      code: 'customerType',
                      name: '客户类型',
                      type: 'string',
                      attrId: '728929',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'customerType'],
                      _idpath: ['616112', '728929'],
                    },
                    {
                      code: 'custManager',
                      name: '客户经理',
                      type: 'string',
                      attrId: '293699',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'custManager'],
                      _idpath: ['616112', '293699'],
                    },
                    {
                      code: 'custManagerPhone',
                      name: '客户经理联系电话',
                      type: 'string',
                      attrId: '6382992',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'custManagerPhone'],
                      _idpath: ['616112', '6382992'],
                    },
                    {
                      code: 'custManagerCreditRate',
                      name: '客户经理征信等级',
                      type: 'string',
                      attrId: '795754',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'custManagerCreditRate'],
                      _idpath: ['616112', '795754'],
                    },
                    {
                      code: 'appliedRedListNum',
                      name: '已申请红名单数（个）',
                      type: 'string',
                      attrId: '8264777',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'appliedRedListNum'],
                      _idpath: ['616112', '8264777'],
                    },
                    {
                      code: 'redControlNum',
                      name: '红名管控上线数（个）',
                      type: 'string',
                      attrId: '687676',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'redControlNum'],
                      _idpath: ['616112', '687676'],
                    },
                    {
                      code: 'appliedRedListNumYear',
                      name: '当年红名单已申请次数（次）',
                      type: 'string',
                      attrId: '034159',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'appliedRedListNumYear'],
                      _idpath: ['616112', '034159'],
                    },
                    {
                      code: 'groupEarliestOverdueTime',
                      name: '集团最早欠费时间',
                      type: 'string',
                      attrId: '31806',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupEarliestOverdueTime'],
                      _idpath: ['616112', '31806'],
                    },
                    {
                      code: 'groupTotalOverdueFee',
                      name: '集团总欠费（元）',
                      type: 'string',
                      attrId: '1376',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupTotalOverdueFee'],
                      _idpath: ['616112', '1376'],
                    },
                    {
                      code: 'appliedWhiteListNum',
                      name: '已申请白名单次数（次）',
                      type: 'string',
                      attrId: '7845865',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'appliedWhiteListNum'],
                      _idpath: ['616112', '7845865'],
                    },
                    {
                      code: 'maxOverdueMonth',
                      name: '最大逾期月数 （月）',
                      type: 'string',
                      attrId: '6994354',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'maxOverdueMonth'],
                      _idpath: ['616112', '6994354'],
                    },
                    {
                      code: 'groupCumulativeOverdueFee',
                      name: '集团累计逾期（元）',
                      type: 'string',
                      attrId: '2880343',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupCumulativeOverdueFee'],
                      _idpath: ['616112', '2880343'],
                    },
                    {
                      code: 'appliedWhiteListDay',
                      name: '已申请白名单天数（天）',
                      type: 'string',
                      attrId: '229861',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'appliedWhiteListDay'],
                      _idpath: ['616112', '229861'],
                    },
                    {
                      code: 'lastCollectionRequireYear',
                      name: '最近一次催缴要求（近一年）',
                      type: 'string',
                      attrId: '7729913',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'lastCollectionRequireYear'],
                      _idpath: ['616112', '7729913'],
                    },
                    {
                      code: 'lastCollectionTimeYear',
                      name: '最近一次催缴时间（近一年）',
                      type: 'string',
                      attrId: '633496',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'lastCollectionTimeYear'],
                      _idpath: ['616112', '633496'],
                    },
                    {
                      code: 'lastCollectionActionYear',
                      name: '最近一次催缴动作（近一年）',
                      type: 'string',
                      attrId: '6897848',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'lastCollectionActionYear'],
                      _idpath: ['616112', '6897848'],
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '616112',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['groupInfo'],
                  _idpath: ['616112'],
                },
                {
                  code: 'accountInfoList',
                  children: [
                    {
                      code: 'accountNum',
                      name: '账户编号',
                      type: 'string',
                      attrId: '44477',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'accountNum'],
                      _idpath: ['6414125', '44477'],
                    },
                    {
                      code: 'accountTitle',
                      name: '账户名称',
                      type: 'string',
                      attrId: '785055',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'accountTitle'],
                      _idpath: ['6414125', '785055'],
                    },
                    {
                      code: 'isIctSubAccount',
                      name: '是否ICT分账户',
                      type: 'string',
                      attrId: '9551337',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'isIctSubAccount'],
                      _idpath: ['6414125', '9551337'],
                    },
                    {
                      code: 'earliestOverdueTime',
                      name: '最早欠费时间',
                      type: 'string',
                      attrId: '486238',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'earliestOverdueTime'],
                      _idpath: ['6414125', '486238'],
                    },
                    {
                      code: 'arrearage',
                      name: '欠费（元）',
                      type: 'string',
                      attrId: '61722',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'arrearage'],
                      _idpath: ['6414125', '61722'],
                    },
                    {
                      code: 'overdueMonth',
                      name: '逾期月数（月）',
                      type: 'string',
                      attrId: '78798',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'overdueMonth'],
                      _idpath: ['6414125', '78798'],
                    },
                    {
                      code: 'overdueFee',
                      name: '逾期欠费（元）',
                      type: 'string',
                      attrId: '238568',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'overdueFee'],
                      _idpath: ['6414125', '238568'],
                    },
                    {
                      code: 'systemEvaluateCreditRate',
                      name: '系统评估信用度等级',
                      type: 'string',
                      attrId: '277366',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'systemEvaluateCreditRate',
                      ],
                      _idpath: ['6414125', '277366'],
                    },
                    {
                      code: 'appointedPayMonth',
                      name: '原约定缴费月数（月）',
                      type: 'string',
                      attrId: '87906',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'appointedPayMonth'],
                      _idpath: ['6414125', '87906'],
                    },
                    {
                      code: 'adjustedCreditRate',
                      name: '调整后信用等级',
                      type: 'string',
                      attrId: '5651916',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'adjustedCreditRate'],
                      _idpath: ['6414125', '5651916'],
                    },
                    {
                      code: 'adjustCreditRateValidMonth',
                      name: '调整信用等级有效月数（月）',
                      type: 'string',
                      attrId: '806097',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'adjustCreditRateValidMonth',
                      ],
                      _idpath: ['6414125', '806097'],
                    },
                    {
                      code: 'appliedRedListMonthYear',
                      name: '当年已申请红名单月数（月）',
                      type: 'string',
                      attrId: '87467832',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'appliedRedListMonthYear'],
                      _idpath: ['6414125', '87467832'],
                    },
                    {
                      code: 'adjustedAppointedPayMonth',
                      name: '调整后约定缴费月数（月）',
                      type: 'string',
                      attrId: '5746767',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'adjustedAppointedPayMonth',
                      ],
                      _idpath: ['6414125', '5746767'],
                    },
                    {
                      code: 'arrearsReason',
                      name: '欠费原因',
                      type: 'string',
                      attrId: '322192',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'arrearsReason'],
                      _idpath: ['6414125', '322192'],
                    },
                    {
                      code: 'collectionCondition',
                      name: '催缴情况',
                      type: 'string',
                      attrId: '817507',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'collectionCondition'],
                      _idpath: ['6414125', '817507'],
                    },
                    {
                      code: 'riskAssessment',
                      name: '风险评估',
                      type: 'string',
                      attrId: '253374',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'riskAssessment'],
                      _idpath: ['6414125', '253374'],
                    },
                    {
                      code: 'isShouldButNotStopped',
                      name: '是否应停未停',
                      type: 'string',
                      attrId: '963773',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'isShouldButNotStopped'],
                      _idpath: ['6414125', '963773'],
                    },
                    {
                      code: 'creditExpiredRemindNum',
                      name: '信用度到期提醒号码',
                      type: 'string',
                      attrId: '618231',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'creditExpiredRemindNum'],
                      _idpath: ['6414125', '618231'],
                    },
                    {
                      attrId: '810435',
                      code: 'accountApplication',
                      name: '账户用途',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['accountInfoList', 'accountApplication'],
                      _idpath: ['6414125', '810435'],
                    },
                  ],
                  name: '',
                  type: 'objectArray',
                  attrId: '6414125',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['accountInfoList'],
                  _idpath: ['6414125'],
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
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode238.params = [] || [];
    CMDGenerator(eventDatacustomActionCode238, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_930217__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_930217_1',
          uid: 'View_930217_1',
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
        ref={(r: any) => (refs['View_930217_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_132664',
            uid: 'View_132664',
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
            margin: '0px 0px 4px 0px',
          }}
          ref={(r: any) => (refs['View_132664'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_26181',
              uid: 'View_26181',
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
              flex: 1,
            }}
            ref={(r: any) => (refs['View_26181'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
              $$componentItem={{
                id: 'View_1190825',
                uid: 'View_1190825',
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
              ref={(r: any) => (refs['View_1190825'] = r)}
              {...injectData}
            />
            <Text
              name={'集团信息'}
              content={'集团信息'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_348678',
                uid: 'Text_348678',
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
              ref={(r: any) => (refs['Text_348678'] = r)}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_210225',
              uid: 'View_210225',
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
              flex: 14,
            }}
            ref={(r: any) => (refs['View_210225'] = r)}
            {...injectData}
          >
            <Text
              name={'集团信息风险提示'}
              content={'友情提醒：信控调整，谁经办谁负责，谁审批谁负责！'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_457042',
                uid: 'Text_457042',
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
                color: '#DA031C',
                backgroundColor: '#FFFF80',
                letterSpacing: '',
              }}
              ref={(r: any) => (refs['Text_457042'] = r)}
              {...injectData}
            />
          </View>
        </View>
        <BusiComp963983
          busiCompId={'1061968734141374464'}
          name={'集团信息'}
          fieldName={'groupInfo'}
          busiCompStates={{ groupInfo: data?.singleGroup?.groupInfo }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => (refs['BOFramer_985898'] = r)}
          {...injectData}
        />
        <LoopList
          name={'循环列表'}
          mode={1}
          pieceData={[]}
          defaultValue={[]}
          columnNum={1}
          span={24}
          vspace={16}
          hspace={16}
          itemKey={'item'}
          indexKey={'rowIndex'}
          valueKey={'accountNum'}
          fieldName={'accountInfoList'}
          gridData={data?.singleGroup?.accountInfoList || []}
          selectStyle={{
            border: 'transparent',
            'background-color': 'transparent',
            color: '#575757',
          }}
          $$componentItem={{
            id: 'LoopList_973951',
            uid: 'LoopList_973951',
            type: 'LoopList',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ minHeight: 40 }}
          ref={(r: any) => (refs['LoopList_973951'] = r)}
          {...injectData}
          getEngineApis={() => {
            return {
              ...injectData.getEngineApis(),
              MemoRenderer: {
                renderer: null,
                MemoLoopItem: (props: any) => {
                  const item = props[props.itemKey] ?? props?.item;
                  const i = props[props.indexKey] ?? props?.i;
                  const rowIndex = props[props.indexKey] ?? props?.i;
                  return (
                    <>
                      <View
                        name={'布局容器'}
                        backgroundType={{
                          type: 'cleanColor',
                          color: undefined,
                        }}
                        $$componentItem={{
                          id: 'View_673689',
                          uid: 'View_673689',
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
                          margin: '0px 0px 4px 0px',
                        }}
                        ref={(r: any) => (refs['View_673689'] = r)}
                        {...injectData}
                      >
                        <View
                          name={'布局容器'}
                          backgroundType={{
                            type: 'cleanColor',
                            color: undefined,
                          }}
                          $$componentItem={{
                            id: 'View_15513',
                            uid: 'View_15513',
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
                            flex: 1,
                          }}
                          ref={(r: any) => (refs['View_15513'] = r)}
                          {...injectData}
                        >
                          <View
                            name={'布局容器'}
                            backgroundType={{
                              type: 'cleanColor',
                              color: '#1890ff',
                            }}
                            $$componentItem={{
                              id: 'View_339803',
                              uid: 'View_339803',
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
                            ref={(r: any) => (refs['View_339803'] = r)}
                            {...injectData}
                          />
                          <Text
                            name={'账户信息'}
                            content={'账户信息'}
                            textType={'span'}
                            version={'1.0'}
                            showHtml={false}
                            $$componentItem={{
                              id: 'Text_751515',
                              uid: 'Text_751515',
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
                            ref={(r: any) => (refs['Text_751515'] = r)}
                            {...injectData}
                          />
                        </View>
                        <View
                          name={'布局容器'}
                          backgroundType={{
                            type: 'cleanColor',
                            color: undefined,
                          }}
                          $$componentItem={{
                            id: 'View_283784',
                            uid: 'View_283784',
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
                            flex: 14,
                          }}
                          ref={(r: any) => (refs['View_283784'] = r)}
                          {...injectData}
                        >
                          <Text
                            name={'账户信息风险提示'}
                            content={`风险提示：该集团评估征信等级为${data?.singleGroup?.groupInfo?.groupCreditRate}，系统评估信用度等级为${item?.systemEvaluateCreditRate}，当前申请的信用度等级为${item?.adjustedCreditRate}，请关注调整风险！`}
                            textType={'span'}
                            version={'1.0'}
                            showHtml={false}
                            fieldName={'groupCreditRate'}
                            $$componentItem={{
                              id: 'Text_159487',
                              uid: 'Text_159487',
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
                              color: '#DA031C',
                              backgroundColor: '#FFFF80',
                              letterSpacing: '',
                            }}
                            ref={(r: any) => (refs['Text_159487'] = r)}
                            {...injectData}
                          />
                        </View>
                      </View>
                      <BusiComp922954
                        busiCompId={'1062542629777006592'}
                        name={'集团账户信息'}
                        busiCompStates={{ accountInfo: item }}
                        style={{ margin: '0 0 12px 0' }}
                        ref={(r: any) => (refs['BOFramer_0891423'] = r)}
                        {...injectData}
                      />
                    </>
                  );
                },
              },
            };
          }}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: '#ffff80' }}
          $$componentItem={{
            id: 'View_3119128',
            uid: 'View_3119128',
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
            width: 'fit-content',
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) => (refs['View_3119128'] = r)}
          {...injectData}
        >
          <Text
            name={'风险提示2'}
            content={
              '注意：\n1、预计生效时间和预计失效时间仅供参考，以实际生效时间为准。\n2、客户约定缴费月数大于1时，需关联合同或上传附件；遵循小微客户不超过1个月，大中型企业不超过6个月，政府客户不超过12个月，ICT项目不超过60个月的规定。'
            }
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_3630851',
              uid: 'Text_3630851',
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
              color: '#DA031C',
              backgroundColor: '#ffff80',
              letterSpacing: '',
            }}
            ref={(r: any) => (refs['Text_3630851'] = r)}
            {...injectData}
          />
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_331395',
            uid: 'View_331395',
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
            justifyContent: 'flex-end',
            margin: '24px 0px 0px 0px',
          }}
          ref={(r: any) => (refs['View_331395'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_675717',
              uid: 'View_675717',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'center',
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_675717'] = r)}
            {...injectData}
          >
            <Button
              name={'确认'}
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
                id: 'Button_912338',
                uid: 'Button_912338',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 16px' }}
              onClick={(e: any) => {
                const eventDatacloseModal126: any = [
                  {
                    type: 'closeModal',
                    dataId: 170495542761921380,
                    options: { compId: 'page', compName: 'page', id: '134889' },
                    line_number: 1,
                  },
                ];
                eventDatacloseModal126.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacloseModal126, { e }, 'closeModal', {
                  id: 'closeModal',
                  name: 'closeModal',
                  type: 'closeModal',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_912338'] = r)}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Duojituanzhanghuxinxi6332$$Modal, {
  pageId: '1062544418106597376',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', singleGroup: '' },
});
