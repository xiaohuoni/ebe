// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Text, Button } from '@/components/factory';

import BusiComp922954 from '@/components/BusiComp922954';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1062264568267497472';
const Danjituanzhanghuxinxi6823$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal21: any = [
      {
        type: 'closeModal',
        dataId: '524343_1',
        options: { compId: 'page', compName: 'page', id: '0530345' },
        line_number: 1,
      },
    ];
    eventDatacloseModal21.params = [] || [];
    CMDGenerator(eventDatacloseModal21, {}, 'closeModal', {
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
    const eventDatacustomActionCode243: any = [
      {
        type: 'customActionCode',
        dataId: 170487015082182370,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '482009',
          pageJsonId: '3261445',
          code: 'function main(data,state,success,fail){data.accountInfo=state.accountInfo;success()};',
          actionTitle: '账户信息填充',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170487017656989500,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '3091996',
              pageJsonId: '3261445',
              dataSourceId: 170487000729578500,
              dataSourceName: 'accountInfo',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'accountNum',
                  name: '账户编号',
                  type: 'string',
                  attrId: '019932',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['accountNum'],
                  _idpath: ['019932'],
                },
                {
                  code: 'accountTitle',
                  name: '账户名称',
                  type: 'string',
                  attrId: '956188',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['accountTitle'],
                  _idpath: ['956188'],
                },
                {
                  code: 'isIctSubAccount',
                  name: '是否ICT分账户',
                  type: 'string',
                  attrId: '93274896',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['isIctSubAccount'],
                  _idpath: ['93274896'],
                },
                {
                  code: 'earliestOverdueTime',
                  name: '最早欠费时间',
                  type: 'string',
                  attrId: '17487',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['earliestOverdueTime'],
                  _idpath: ['17487'],
                },
                {
                  code: 'arrearage',
                  name: '欠费（元）',
                  type: 'string',
                  attrId: '558926',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['arrearage'],
                  _idpath: ['558926'],
                },
                {
                  code: 'overdueMonth',
                  name: '逾期月数（月）',
                  type: 'string',
                  attrId: '9471573',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['overdueMonth'],
                  _idpath: ['9471573'],
                },
                {
                  code: 'overdueFee',
                  name: '逾期欠费（元）',
                  type: 'string',
                  attrId: '2272482',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['overdueFee'],
                  _idpath: ['2272482'],
                },
                {
                  code: 'systemEvaluateCreditRate',
                  name: '系统评估信用度等级',
                  type: 'string',
                  attrId: '858216',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['systemEvaluateCreditRate'],
                  _idpath: ['858216'],
                },
                {
                  code: 'appointedPayMonth',
                  name: '原约定缴费月数（月）',
                  type: 'string',
                  attrId: '812473',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['appointedPayMonth'],
                  _idpath: ['812473'],
                },
                {
                  code: 'adjustedCreditRate',
                  name: '调整后信用等级',
                  type: 'string',
                  attrId: '595449',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['adjustedCreditRate'],
                  _idpath: ['595449'],
                },
                {
                  code: 'adjustCreditRateValidMonth',
                  name: '调整信用等级有效月数（月）',
                  type: 'string',
                  attrId: '3667543',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['adjustCreditRateValidMonth'],
                  _idpath: ['3667543'],
                },
                {
                  code: 'appliedRedListMonthYear',
                  name: '当年已申请红名单月数（月）',
                  type: 'string',
                  attrId: '207993',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['appliedRedListMonthYear'],
                  _idpath: ['207993'],
                },
                {
                  code: 'adjustedAppointedPayMonth',
                  name: '调整后约定缴费月数（月）',
                  type: 'string',
                  attrId: '32931',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['adjustedAppointedPayMonth'],
                  _idpath: ['32931'],
                },
                {
                  code: 'arrearsReason',
                  name: '欠费原因',
                  type: 'string',
                  attrId: '927485',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['arrearsReason'],
                  _idpath: ['927485'],
                },
                {
                  code: 'collectionCondition',
                  name: '催缴情况',
                  type: 'string',
                  attrId: '155405',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['collectionCondition'],
                  _idpath: ['155405'],
                },
                {
                  code: 'riskAssessment',
                  name: '风险评估',
                  type: 'string',
                  attrId: '3700977',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['riskAssessment'],
                  _idpath: ['3700977'],
                },
                {
                  code: 'isShouldButNotStopped',
                  name: '是否应停未停',
                  type: 'string',
                  attrId: '3962666',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['isShouldButNotStopped'],
                  _idpath: ['3962666'],
                },
                {
                  code: 'creditExpiredRemindNum',
                  name: '信用度到期提醒号码',
                  type: 'string',
                  attrId: '9716096',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['creditExpiredRemindNum'],
                  _idpath: ['9716096'],
                },
                {
                  attrId: '515697',
                  code: 'accountApplication',
                  name: '账户用途',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['accountApplication'],
                  _idpath: ['515697'],
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
    eventDatacustomActionCode243.params = [] || [];
    CMDGenerator(eventDatacustomActionCode243, {}, 'customActionCode', {
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
      className="__CustomClass_3261445__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_3261445_1',
          uid: 'View_3261445_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_3261445_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_7764849',
            uid: 'View_7764849',
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
            margin: '0px 0px 12px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_7764849')}
          {...injectData}
        >
          <Text
            name={'风险提示1'}
            content={`风险提示：该集团评估征信等级为${state?.groupCreditRate}，系统评估信用度等级为${state?.accountInfo?.systemEvaluateCreditRate}，当前申请的信用度等级为${state?.accountInfo?.adjustedCreditRate}，请关注调整风险！`}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_348574',
              uid: 'Text_348574',
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
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_348574')}
            {...injectData}
          />
        </View>
        <BusiComp922954
          busiCompId={'1062542629777006592'}
          name={'集团账户信息'}
          fieldName={'accountInfo'}
          busiCompStates={{ accountInfo: data?.accountInfo }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_579665')}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: '#ffff80' }}
          $$componentItem={{
            id: 'View_124958',
            uid: 'View_124958',
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
            margin: '12px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_124958')}
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
              id: 'Text_433279',
              uid: 'Text_433279',
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
            ref={(r: any) => refs.setComponentRef(r, 'Text_433279')}
            {...injectData}
          />
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_808623',
            uid: 'View_808623',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_808623')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_820281',
              uid: 'View_820281',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_820281')}
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
                id: 'Button_2848012',
                uid: 'Button_2848012',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 16px' }}
              onClick={(e: any) => {
                const eventDatacloseModal127: any = [
                  {
                    type: 'closeModal',
                    dataId: 170487109519929570,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '4917982',
                    },
                    line_number: 1,
                  },
                ];
                eventDatacloseModal127.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacloseModal127, { e }, 'closeModal', {
                  id: 'closeModal',
                  name: 'closeModal',
                  type: 'closeModal',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_2848012')}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Danjituanzhanghuxinxi6823$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    accountInfo: '',
    groupCreditRate: '',
  },
});
