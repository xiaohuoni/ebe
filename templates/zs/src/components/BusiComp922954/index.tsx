// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Description } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1062542629777006592';
const BusiComp922954$$BusiComp: React.FC<PageProps> = ({
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
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    const eventDatacustomActionCode4: any = [
      {
        type: 'customActionCode',
        dataId: 170503028345799780,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '223652',
          pageJsonId: '922954',
          code: 'function main(data,state,success,fail){data.accountInfo=state.accountInfo;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170503029648573060,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '7353048',
              pageJsonId: '922954',
              dataSourceId: 170493630097523070,
              dataSourceName: 'accountInfo',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'accountNum',
                  name: '账户编号',
                  type: 'string',
                  attrId: '687177',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['accountNum'],
                  _idpath: ['687177'],
                },
                {
                  code: 'accountTitle',
                  name: '账户名称',
                  type: 'string',
                  attrId: '356291',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['accountTitle'],
                  _idpath: ['356291'],
                },
                {
                  code: 'isIctSubAccount',
                  name: '是否ICT分账户',
                  type: 'string',
                  attrId: '480264',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['isIctSubAccount'],
                  _idpath: ['480264'],
                },
                {
                  code: 'earliestOverdueTime',
                  name: '最早欠费时间',
                  type: 'string',
                  attrId: '986989',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['earliestOverdueTime'],
                  _idpath: ['986989'],
                },
                {
                  code: 'arrearage',
                  name: '欠费（元）',
                  type: 'string',
                  attrId: '196092',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['arrearage'],
                  _idpath: ['196092'],
                },
                {
                  code: 'overdueMonth',
                  name: '逾期月数（月）',
                  type: 'string',
                  attrId: '452712',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['overdueMonth'],
                  _idpath: ['452712'],
                },
                {
                  code: 'overdueFee',
                  name: '逾期欠费（元）',
                  type: 'string',
                  attrId: '78028474',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['overdueFee'],
                  _idpath: ['78028474'],
                },
                {
                  code: 'systemEvaluateCreditRate',
                  name: '系统评估信用度等级',
                  type: 'string',
                  attrId: '897636',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['systemEvaluateCreditRate'],
                  _idpath: ['897636'],
                },
                {
                  code: 'appointedPayMonth',
                  name: '原约定缴费月数（月）',
                  type: 'string',
                  attrId: '761584',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['appointedPayMonth'],
                  _idpath: ['761584'],
                },
                {
                  code: 'adjustedCreditRate',
                  name: '调整后信用等级',
                  type: 'string',
                  attrId: '699908',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['adjustedCreditRate'],
                  _idpath: ['699908'],
                },
                {
                  code: 'adjustCreditRateValidMonth',
                  name: '调整信用等级有效月数（月）',
                  type: 'string',
                  attrId: '403959',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['adjustCreditRateValidMonth'],
                  _idpath: ['403959'],
                },
                {
                  code: 'appliedRedListMonthYear',
                  name: '当年已申请红名单月数（月）',
                  type: 'string',
                  attrId: '716856',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['appliedRedListMonthYear'],
                  _idpath: ['716856'],
                },
                {
                  code: 'adjustedAppointedPayMonth',
                  name: '调整后约定缴费月数（月）',
                  type: 'string',
                  attrId: '0629637',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['adjustedAppointedPayMonth'],
                  _idpath: ['0629637'],
                },
                {
                  code: 'arrearsReason',
                  name: '欠费原因',
                  type: 'string',
                  attrId: '625563',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['arrearsReason'],
                  _idpath: ['625563'],
                },
                {
                  code: 'collectionCondition',
                  name: '催缴情况',
                  type: 'string',
                  attrId: '557902',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['collectionCondition'],
                  _idpath: ['557902'],
                },
                {
                  code: 'riskAssessment',
                  name: '风险评估',
                  type: 'string',
                  attrId: '8795383',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['riskAssessment'],
                  _idpath: ['8795383'],
                },
                {
                  code: 'isShouldButNotStopped',
                  name: '是否应停未停',
                  type: 'string',
                  attrId: '212603',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['isShouldButNotStopped'],
                  _idpath: ['212603'],
                },
                {
                  code: 'creditExpiredRemindNum',
                  name: '信用度到期提醒号码',
                  type: 'string',
                  attrId: '585881',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['creditExpiredRemindNum'],
                  _idpath: ['585881'],
                },
                {
                  attrId: '043038',
                  code: 'accountApplication',
                  name: '账户用途',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['accountApplication'],
                  _idpath: ['043038'],
                },
                {
                  attrId: '607061',
                  code: 'param1',
                  name: '无用属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['param1'],
                  _idpath: ['607061'],
                },
                {
                  attrId: '091368',
                  code: 'param0',
                  name: '无用属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['param0'],
                  _idpath: ['091368'],
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
    eventDatacustomActionCode4.params = [] || [];
    CMDGenerator(eventDatacustomActionCode4, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_922954__"
    >
      <View
        className="View_View_2340975"
        name={'布局容器'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_2340975',
          uid: 'View_2340975',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_2340975')}
        {...injectData}
      >
        <Description
          name={'描述列表'}
          columns={[
            {
              title: '账户编号',
              key: 'accountNum',
              dataIndex: 'accountNum',
              label: '账户编号',
              id: '3262377',
              customRendering: undefined,
            },
            {
              title: '账户名称',
              key: 'accountTitle',
              dataIndex: 'accountTitle',
              label: '账户名称',
              id: '06135',
              customRendering: undefined,
            },
            {
              title: '是否ICT分账户',
              key: 'isIctSubAccount',
              dataIndex: 'isIctSubAccount',
              label: '是否ICT分账户',
              id: '0775194',
              customRendering: undefined,
            },
            {
              title: '账户用途',
              key: 'accountApplication',
              dataIndex: 'accountApplication',
              label: '账户用途',
              id: '1210507',
              customRendering: undefined,
            },
            {
              title: '无用属性',
              key: 'param1',
              dataIndex: 'param1',
              label: ' ',
              id: '479843',
              customRendering: undefined,
            },
            {
              title: '无用属性',
              key: 'param0',
              dataIndex: 'param0',
              label: ' ',
              id: '7105883',
              customRendering: undefined,
            },
            {
              title: '最早欠费时间',
              key: 'earliestOverdueTime',
              dataIndex: 'earliestOverdueTime',
              label: '最早欠费时间',
              id: '973288',
              customRendering: undefined,
            },
            {
              title: '欠费（元）',
              key: 'arrearage',
              dataIndex: 'arrearage',
              label: '欠费（元）',
              id: '5028286',
              customRendering: undefined,
            },
            {
              title: '逾期月数（月）',
              key: 'overdueMonth',
              dataIndex: 'overdueMonth',
              label: '逾期月数（月）',
              id: '5141256',
              customRendering: undefined,
            },
            {
              title: '逾期欠费（元）',
              key: 'overdueFee',
              dataIndex: 'overdueFee',
              label: '逾期欠费（元）',
              id: '324707',
              customRendering: undefined,
            },
            {
              title: '系统评估信用度等级',
              key: 'systemEvaluateCreditRate',
              dataIndex: 'systemEvaluateCreditRate',
              label: '系统评估信用度等级',
              id: '379545',
              customRendering: undefined,
            },
            {
              title: '原约定缴费月数（月）',
              key: 'appointedPayMonth',
              dataIndex: 'appointedPayMonth',
              label: '原约定缴费月数（月）',
              id: '3331006',
              customRendering: undefined,
            },
            {
              title: '调整后信用等级',
              key: 'adjustedCreditRate',
              dataIndex: 'adjustedCreditRate',
              label: '调整后信用等级',
              id: '774204',
              customRendering: undefined,
            },
            {
              title: '调整信用等级有效月数（月）',
              key: 'adjustCreditRateValidMonth',
              dataIndex: 'adjustCreditRateValidMonth',
              label: '调整信用等级有效月数（月）',
              id: '189884',
              customRendering: undefined,
            },
            {
              title: '当年已申请红名单月数（月）',
              key: 'appliedRedListMonthYear',
              dataIndex: 'appliedRedListMonthYear',
              label: '当年已申请红名单月数（月）',
              id: '00191',
              customRendering: undefined,
            },
            {
              title: '调整后约定缴费月数（月）',
              key: 'adjustedAppointedPayMonth',
              dataIndex: 'adjustedAppointedPayMonth',
              label: '调整后约定缴费月数（月）',
              id: '824537',
              customRendering: undefined,
            },
            {
              title: '欠费原因',
              key: 'arrearsReason',
              dataIndex: 'arrearsReason',
              label: '欠费原因',
              id: '5242464',
              customRendering: undefined,
            },
            {
              title: '催缴情况',
              key: 'collectionCondition',
              dataIndex: 'collectionCondition',
              label: '催缴情况',
              id: '477337',
              customRendering: undefined,
            },
            {
              title: '风险评估',
              key: 'riskAssessment',
              dataIndex: 'riskAssessment',
              label: '风险评估',
              id: '8469963',
              customRendering: undefined,
            },
            {
              title: '是否应停未停',
              key: 'isShouldButNotStopped',
              dataIndex: 'isShouldButNotStopped',
              label: '是否应停未停',
              id: '287307',
              customRendering: undefined,
            },
            {
              title: '信用度到期提醒号码',
              key: 'creditExpiredRemindNum',
              dataIndex: 'creditExpiredRemindNum',
              label: '信用度到期提醒号码',
              id: '443472',
              customRendering: undefined,
            },
          ]}
          bordered={true}
          labelWidth={undefined}
          colSpan={8}
          colon={true}
          labelAlign={'left'}
          dataSource={data?.accountInfo}
          descColumns={[
            {
              title: '账户编号',
              key: 'accountNum',
              dataIndex: 'accountNum',
              label: '账户编号',
              id: '3262377',
            },
            {
              title: '账户名称',
              key: 'accountTitle',
              dataIndex: 'accountTitle',
              label: '账户名称',
              id: '06135',
            },
            {
              title: '是否ICT分账户',
              key: 'isIctSubAccount',
              dataIndex: 'isIctSubAccount',
              label: '是否ICT分账户',
              id: '0775194',
            },
            {
              title: '账户用途',
              key: 'accountApplication',
              dataIndex: 'accountApplication',
              label: '账户用途',
              id: '1210507',
            },
            {
              title: '无用属性',
              key: 'param1',
              dataIndex: 'param1',
              label: ' ',
              id: '479843',
            },
            {
              title: '无用属性',
              key: 'param0',
              dataIndex: 'param0',
              label: ' ',
              id: '7105883',
            },
            {
              title: '最早欠费时间',
              key: 'earliestOverdueTime',
              dataIndex: 'earliestOverdueTime',
              label: '最早欠费时间',
              id: '973288',
            },
            {
              title: '欠费（元）',
              key: 'arrearage',
              dataIndex: 'arrearage',
              label: '欠费（元）',
              id: '5028286',
            },
            {
              title: '逾期月数（月）',
              key: 'overdueMonth',
              dataIndex: 'overdueMonth',
              label: '逾期月数（月）',
              id: '5141256',
            },
            {
              title: '逾期欠费（元）',
              key: 'overdueFee',
              dataIndex: 'overdueFee',
              label: '逾期欠费（元）',
              id: '324707',
            },
            {
              title: '系统评估信用度等级',
              key: 'systemEvaluateCreditRate',
              dataIndex: 'systemEvaluateCreditRate',
              label: '系统评估信用度等级',
              id: '379545',
            },
            {
              title: '原约定缴费月数（月）',
              key: 'appointedPayMonth',
              dataIndex: 'appointedPayMonth',
              label: '原约定缴费月数（月）',
              id: '3331006',
            },
            {
              title: '调整后信用等级',
              key: 'adjustedCreditRate',
              dataIndex: 'adjustedCreditRate',
              label: '调整后信用等级',
              id: '774204',
            },
            {
              title: '调整信用等级有效月数（月）',
              key: 'adjustCreditRateValidMonth',
              dataIndex: 'adjustCreditRateValidMonth',
              label: '调整信用等级有效月数（月）',
              id: '189884',
            },
            {
              title: '当年已申请红名单月数（月）',
              key: 'appliedRedListMonthYear',
              dataIndex: 'appliedRedListMonthYear',
              label: '当年已申请红名单月数（月）',
              id: '00191',
            },
            {
              title: '调整后约定缴费月数（月）',
              key: 'adjustedAppointedPayMonth',
              dataIndex: 'adjustedAppointedPayMonth',
              label: '调整后约定缴费月数（月）',
              id: '824537',
            },
            {
              title: '欠费原因',
              key: 'arrearsReason',
              dataIndex: 'arrearsReason',
              label: '欠费原因',
              id: '5242464',
            },
            {
              title: '催缴情况',
              key: 'collectionCondition',
              dataIndex: 'collectionCondition',
              label: '催缴情况',
              id: '477337',
            },
            {
              title: '风险评估',
              key: 'riskAssessment',
              dataIndex: 'riskAssessment',
              label: '风险评估',
              id: '8469963',
            },
            {
              title: '是否应停未停',
              key: 'isShouldButNotStopped',
              dataIndex: 'isShouldButNotStopped',
              label: '是否应停未停',
              id: '287307',
            },
            {
              title: '信用度到期提醒号码',
              key: 'creditExpiredRemindNum',
              dataIndex: 'creditExpiredRemindNum',
              label: '信用度到期提醒号码',
              id: '443472',
            },
          ]}
          labelSize={'190px'}
          $$componentItem={{
            id: 'Description_835285',
            uid: 'Description_835285',
            type: 'Description',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => refs.setComponentRef(r, 'Description_835285')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(BusiComp922954$$BusiComp, {
  pageId,
  hasLogin: true,
  dataSource,
  defaultState: { accountInfo: '' },
});
