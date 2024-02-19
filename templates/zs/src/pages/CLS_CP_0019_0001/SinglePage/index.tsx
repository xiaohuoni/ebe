// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Table, Text, View } from '@/components/factory';

import BusiComp963983 from '@/components/BusiComp963983';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0019_0001SinglePage$$Page: React.FC<PageProps> = ({
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
  useEffect(() => {
    // console 170485622003433820
    console.log('单集团页面入参state：', state);
    const eventDatacustomActionCode242: any = [
      {
        type: 'customActionCode',
        dataId: 170485628494774500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '226024',
          pageJsonId: '259116',
          code: 'function main(data,state,success,fail){var _customObejct$singleG,_customObejct$singleG2;var customObejct=(state===null||state===void 0?void 0:state.customObject)||{};data.singleGroup=(customObejct===null||customObejct===void 0?void 0:customObejct.singleGroup)||{};success("\\u98CE\\u9669\\u63D0\\u793A\\uFF1A\\u8BE5\\u96C6\\u56E2\\u8BC4\\u4F30\\u5F81\\u4FE1\\u7B49\\u7EA7\\u4E3A"+(customObejct===null||customObejct===void 0?void 0:(_customObejct$singleG=customObejct.singleGroup)===null||_customObejct$singleG===void 0?void 0:(_customObejct$singleG2=_customObejct$singleG.groupInfo)===null||_customObejct$singleG2===void 0?void 0:_customObejct$singleG2.groupCreditRate)+"\\uFF0C\\u8BF7\\u5173\\u6CE8\\u8C03\\u6574\\u98CE\\u9669\\uFF01")};',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170485667699505300,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '0926286',
              pageJsonId: '259116',
              dataSourceId: 170485645492810300,
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
                      attrId: '415259',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupId'],
                      _idpath: ['025908', '415259'],
                    },
                    {
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      attrId: '793208',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupName'],
                      _idpath: ['025908', '793208'],
                    },
                    {
                      code: 'groupLevelName',
                      name: '价值等级',
                      type: 'string',
                      attrId: '822251',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupLevelName'],
                      _idpath: ['025908', '822251'],
                    },
                    {
                      code: 'paidNum',
                      name: '付费号码',
                      type: 'string',
                      attrId: '4309437',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'paidNum'],
                      _idpath: ['025908', '4309437'],
                    },
                    {
                      code: 'belongCityText',
                      name: '归属地市',
                      type: 'string',
                      attrId: '969774',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'belongCityText'],
                      _idpath: ['025908', '969774'],
                    },
                    {
                      code: 'belongAreaText',
                      name: '归属区县',
                      type: 'string',
                      attrId: '120345',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'belongAreaText'],
                      _idpath: ['025908', '120345'],
                    },
                    {
                      code: 'isAgencyGroup',
                      name: '是否代理商集团',
                      type: 'string',
                      attrId: '826453',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'isAgencyGroup'],
                      _idpath: ['025908', '826453'],
                    },
                    {
                      code: 'groupCreditRate',
                      name: '集团征信等级',
                      type: 'string',
                      attrId: '940916',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupCreditRate'],
                      _idpath: ['025908', '940916'],
                    },
                    {
                      code: 'institutionType',
                      name: '机构类型',
                      type: 'string',
                      attrId: '996903',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'institutionType'],
                      _idpath: ['025908', '996903'],
                    },
                    {
                      code: 'industryCategory',
                      name: '机构类型',
                      type: 'string',
                      attrId: '261662',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'industryCategory'],
                      _idpath: ['025908', '261662'],
                    },
                    {
                      code: 'customerType',
                      name: '客户类型',
                      type: 'string',
                      attrId: '746348',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'customerType'],
                      _idpath: ['025908', '746348'],
                    },
                    {
                      code: 'custManager',
                      name: '客户经理',
                      type: 'string',
                      attrId: '984245',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'custManager'],
                      _idpath: ['025908', '984245'],
                    },
                    {
                      code: 'custManagerPhone',
                      name: '客户经理联系电话',
                      type: 'string',
                      attrId: '4834739',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'custManagerPhone'],
                      _idpath: ['025908', '4834739'],
                    },
                    {
                      code: 'custManagerCreditRate',
                      name: '客户经理征信等级',
                      type: 'string',
                      attrId: '114217',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'custManagerCreditRate'],
                      _idpath: ['025908', '114217'],
                    },
                    {
                      code: 'appliedRedListNum',
                      name: '已申请红名单数（个）',
                      type: 'string',
                      attrId: '169841',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'appliedRedListNum'],
                      _idpath: ['025908', '169841'],
                    },
                    {
                      code: 'redControlNum',
                      name: '红名管控上线数（个）',
                      type: 'string',
                      attrId: '347194',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'redControlNum'],
                      _idpath: ['025908', '347194'],
                    },
                    {
                      code: 'appliedRedListNumYear',
                      name: '当年红名单已申请次数（次）',
                      type: 'string',
                      attrId: '446543',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'appliedRedListNumYear'],
                      _idpath: ['025908', '446543'],
                    },
                    {
                      code: 'groupEarliestOverdueTime',
                      name: '集团最早欠费时间',
                      type: 'string',
                      attrId: '683095',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupEarliestOverdueTime'],
                      _idpath: ['025908', '683095'],
                    },
                    {
                      code: 'groupTotalOverdueFee',
                      name: '集团总欠费（元）',
                      type: 'string',
                      attrId: '9450774',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupTotalOverdueFee'],
                      _idpath: ['025908', '9450774'],
                    },
                    {
                      code: 'appliedWhiteListNum',
                      name: '已申请白名单次数（次）',
                      type: 'string',
                      attrId: '294194',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'appliedWhiteListNum'],
                      _idpath: ['025908', '294194'],
                    },
                    {
                      code: 'maxOverdueMonth',
                      name: '最大逾期月数 （月）',
                      type: 'string',
                      attrId: '9729216',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'maxOverdueMonth'],
                      _idpath: ['025908', '9729216'],
                    },
                    {
                      code: 'groupCumulativeOverdueFee',
                      name: '集团累计逾期（元）',
                      type: 'string',
                      attrId: '517107',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'groupCumulativeOverdueFee'],
                      _idpath: ['025908', '517107'],
                    },
                    {
                      code: 'appliedWhiteListDay',
                      name: '已申请白名单天数（天）',
                      type: 'string',
                      attrId: '927577',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'appliedWhiteListDay'],
                      _idpath: ['025908', '927577'],
                    },
                    {
                      code: 'lastCollectionRequireYear',
                      name: '最近一次催缴要求（近一年）',
                      type: 'string',
                      attrId: '23183',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'lastCollectionRequireYear'],
                      _idpath: ['025908', '23183'],
                    },
                    {
                      code: 'lastCollectionTimeYear',
                      name: '最近一次催缴时间（近一年）',
                      type: 'string',
                      attrId: '428036',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'lastCollectionTimeYear'],
                      _idpath: ['025908', '428036'],
                    },
                    {
                      code: 'lastCollectionActionYear',
                      name: '最近一次催缴动作（近一年）',
                      type: 'string',
                      attrId: '687794',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['groupInfo', 'lastCollectionActionYear'],
                      _idpath: ['025908', '687794'],
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '025908',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['groupInfo'],
                  _idpath: ['025908'],
                },
                {
                  code: 'accountInfoList',
                  children: [
                    {
                      code: 'accountNum',
                      name: '账户编号',
                      type: 'string',
                      attrId: '509932',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'accountNum'],
                      _idpath: ['5405158', '509932'],
                    },
                    {
                      code: 'accountTitle',
                      name: '账户名称',
                      type: 'string',
                      attrId: '875481',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'accountTitle'],
                      _idpath: ['5405158', '875481'],
                    },
                    {
                      code: 'isIctSubAccount',
                      name: '是否ICT分账户',
                      type: 'string',
                      attrId: '252864',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'isIctSubAccount'],
                      _idpath: ['5405158', '252864'],
                    },
                    {
                      code: 'earliestOverdueTime',
                      name: '最早欠费时间',
                      type: 'string',
                      attrId: '020994',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'earliestOverdueTime'],
                      _idpath: ['5405158', '020994'],
                    },
                    {
                      code: 'arrearage',
                      name: '欠费（元）',
                      type: 'string',
                      attrId: '5734352',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'arrearage'],
                      _idpath: ['5405158', '5734352'],
                    },
                    {
                      code: 'overdueMonth',
                      name: '逾期月数（月）',
                      type: 'string',
                      attrId: '4492817',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'overdueMonth'],
                      _idpath: ['5405158', '4492817'],
                    },
                    {
                      code: 'overdueFee',
                      name: '逾期欠费（元）',
                      type: 'string',
                      attrId: '057384',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'overdueFee'],
                      _idpath: ['5405158', '057384'],
                    },
                    {
                      code: 'systemEvaluateCreditRate',
                      name: '系统评估信用度等级',
                      type: 'string',
                      attrId: '781626',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'systemEvaluateCreditRate',
                      ],
                      _idpath: ['5405158', '781626'],
                    },
                    {
                      code: 'appointedPayMonth',
                      name: '原约定缴费月数（月）',
                      type: 'string',
                      attrId: '051481',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'appointedPayMonth'],
                      _idpath: ['5405158', '051481'],
                    },
                    {
                      code: 'adjustedCreditRate',
                      name: '调整后信用等级',
                      type: 'string',
                      attrId: '468214',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'adjustedCreditRate'],
                      _idpath: ['5405158', '468214'],
                    },
                    {
                      code: 'adjustCreditRateValidMonth',
                      name: '调整信用等级有效月数（月）',
                      type: 'string',
                      attrId: '830273',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'adjustCreditRateValidMonth',
                      ],
                      _idpath: ['5405158', '830273'],
                    },
                    {
                      code: 'appliedRedListMonthYear',
                      name: '当年已申请红名单月数（月）',
                      type: 'string',
                      attrId: '442473',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'appliedRedListMonthYear'],
                      _idpath: ['5405158', '442473'],
                    },
                    {
                      code: 'adjustedAppointedPayMonth',
                      name: '调整后约定缴费月数（月）',
                      type: 'string',
                      attrId: '7212268',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: [
                        'accountInfoList',
                        'adjustedAppointedPayMonth',
                      ],
                      _idpath: ['5405158', '7212268'],
                    },
                    {
                      code: 'arrearsReason',
                      name: '欠费原因',
                      type: 'string',
                      attrId: '447602',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'arrearsReason'],
                      _idpath: ['5405158', '447602'],
                    },
                    {
                      code: 'collectionCondition',
                      name: '催缴情况',
                      type: 'string',
                      attrId: '2528116',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'collectionCondition'],
                      _idpath: ['5405158', '2528116'],
                    },
                    {
                      code: 'riskAssessment',
                      name: '风险评估',
                      type: 'string',
                      attrId: '9458372',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'riskAssessment'],
                      _idpath: ['5405158', '9458372'],
                    },
                    {
                      code: 'isShouldButNotStopped',
                      name: '是否应停未停',
                      type: 'string',
                      attrId: '780149',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'isShouldButNotStopped'],
                      _idpath: ['5405158', '780149'],
                    },
                    {
                      code: 'creditExpiredRemindNum',
                      name: '信用度到期提醒号码',
                      type: 'string',
                      attrId: '8295906',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'accountInfoList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'accountInfoList',
                      _codePath: ['accountInfoList', 'creditExpiredRemindNum'],
                      _idpath: ['5405158', '8295906'],
                    },
                    {
                      attrId: '4208244',
                      code: 'accountApplication',
                      name: '账户用途',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['accountInfoList', 'accountApplication'],
                      _idpath: ['5405158', '4208244'],
                    },
                  ],
                  name: '',
                  type: 'objectArray',
                  attrId: '5405158',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['accountInfoList'],
                  _idpath: ['5405158'],
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
          {
            type: 'setCompContentValue',
            dataId: 170486635099955780,
            shielding: true,
            options: {
              compId: 'Text_946219',
              compLib: 'custom',
              pageJsonId: '259116',
              compName: 'Text',
              id: '95433',
              value: '$data_226024$',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode242.params = [] || [];
    CMDGenerator(eventDatacustomActionCode242, {}, 'customActionCode', {
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
      className="__CustomClass_259116__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_259116_1',
          uid: 'View_259116_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => (refs['View_259116_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_7822638',
            uid: 'View_7822638',
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
          ref={(r: any) => (refs['View_7822638'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_245706',
              uid: 'View_245706',
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
            ref={(r: any) => (refs['View_245706'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
              $$componentItem={{
                id: 'View_8909442',
                uid: 'View_8909442',
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
              ref={(r: any) => (refs['View_8909442'] = r)}
              {...injectData}
            />
            <Text
              name={'集团信息'}
              content={'集团信息'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_109133',
                uid: 'Text_109133',
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
              ref={(r: any) => (refs['Text_109133'] = r)}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_182218',
              uid: 'View_182218',
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
            ref={(r: any) => (refs['View_182218'] = r)}
            {...injectData}
          >
            <Text
              name={'集团信息风险提示'}
              content={'友情提醒：信控调整，谁经办谁负责，谁审批谁负责！'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_7806968',
                uid: 'Text_7806968',
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
              ref={(r: any) => (refs['Text_7806968'] = r)}
              {...injectData}
            />
          </View>
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_582089',
            uid: 'View_582089',
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
          ref={(r: any) => (refs['View_582089'] = r)}
          {...injectData}
        >
          <BusiComp963983
            busiCompId={'1061968734141374464'}
            name={'集团信息'}
            busiCompStates={{ groupInfo: data?.singleGroup?.groupInfo }}
            fieldName={'groupInfo'}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => (refs['BOFramer_931709'] = r)}
            {...injectData}
          />
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_699118',
            uid: 'View_699118',
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
          ref={(r: any) => (refs['View_699118'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_609801',
              uid: 'View_609801',
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
            ref={(r: any) => (refs['View_609801'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
              $$componentItem={{
                id: 'View_572656',
                uid: 'View_572656',
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
              ref={(r: any) => (refs['View_572656'] = r)}
              {...injectData}
            />
            <Text
              name={'账户信息'}
              content={'账户信息'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_198779',
                uid: 'Text_198779',
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
              ref={(r: any) => (refs['Text_198779'] = r)}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_802629',
              uid: 'View_802629',
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
            ref={(r: any) => (refs['View_802629'] = r)}
            {...injectData}
          >
            <Text
              name={'账户信息风险提示'}
              content={`风险提示：该集团评估征信等级为${data?.singleGroup?.groupInfo?.groupCreditRate}，请关注调整风险！`}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              fieldName={'groupCreditRate'}
              $$componentItem={{
                id: 'Text_946219',
                uid: 'Text_946219',
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
              ref={(r: any) => (refs['Text_946219'] = r)}
              {...injectData}
            />
          </View>
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
              title: '账户编号',
              key: 'accountNum',
              dataIndex: 'accountNum',
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
              title: '账户名称',
              key: 'accountTitle',
              dataIndex: 'accountTitle',
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
              title: '是否ICT分账户',
              key: 'isIctSubAccount',
              dataIndex: 'isIctSubAccount',
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
              title: '最早欠费时间',
              key: 'earliestOverdueTime',
              dataIndex: 'earliestOverdueTime',
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
              title: '欠费（元）',
              key: 'arrearage',
              dataIndex: 'arrearage',
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
              title: '逾期月数（月）',
              key: 'overdueMonth',
              dataIndex: 'overdueMonth',
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
              title: '逾期欠费（元）',
              key: 'overdueFee',
              dataIndex: 'overdueFee',
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
              title: '系统评估信用度等级',
              key: 'systemEvaluateCreditRate',
              dataIndex: 'systemEvaluateCreditRate',
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
              title: '原约定缴费月数（月）',
              key: 'appointedPayMonth',
              dataIndex: 'appointedPayMonth',
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
              title: '调整后信用等级',
              key: 'adjustedCreditRate',
              dataIndex: 'adjustedCreditRate',
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
              title: '调整信用等级有效月数（月）',
              key: 'adjustCreditRateValidMonth',
              dataIndex: 'adjustCreditRateValidMonth',
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
              title: '当年已申请红名单月数（月）',
              key: 'appliedRedListMonthYear',
              dataIndex: 'appliedRedListMonthYear',
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
              title: '调整后约定缴费月数（月）',
              key: 'adjustedAppointedPayMonth',
              dataIndex: 'adjustedAppointedPayMonth',
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
              title: '是否应停未停',
              key: 'isShouldButNotStopped',
              dataIndex: 'isShouldButNotStopped',
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
          dataSource={data?.singleGroup?.accountInfoList}
          rowActions={[
            {
              title: '详情',
              iconPos: 'left',
              icon: { theme: 'outlined', type: 'file-search' },
              type: 'detail',
              id: '777753',
              checked: true,
            },
          ]}
          extend={[]}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.singleGroup.accountInfoList'}
          $$componentItem={{
            id: 'Table_651663',
            uid: 'Table_651663',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '0px 0px 12px 0px' }}
          onRowDetail={(rowId: any, row: any, index: any) => {
            const eventDatashowCustomModal76: any = [
              {
                type: 'showCustomModal',
                dataId: 170487037937187900,
                options: {
                  compId: 'showCustomModal',
                  compName: 'page',
                  id: '053002',
                  pageJsonId: '259116',
                  modalname: '/danjituanzhanghuxinxi6823',
                  pageId: '1062264568267497472',
                  modalPath: '/danjituanzhanghuxinxi6823',
                  paramsObj: {
                    accountInfo: '$row$',
                    groupCreditRate:
                      '$data?.singleGroup?.groupInfo?.groupCreditRate$',
                  },
                  paramsObjKeyValueMap: {
                    accountInfo: '$row$',
                    groupCreditRate:
                      '$data?.singleGroup?.groupInfo?.groupCreditRate$',
                  },
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatashowCustomModal76.params =
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
              eventDatashowCustomModal76,
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
          ref={(r: any) => (refs['Table_651663'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0019_0001SinglePage$$Page, {
  pageId: '1061968337100169216',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    groupInfo: '',
    customObject: '',
  },
});
