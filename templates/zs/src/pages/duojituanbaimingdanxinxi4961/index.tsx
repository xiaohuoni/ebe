// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Button, View } from '@/components/factory';

import BusiComp335152 from '@/components/BusiComp335152';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Duojituanbaimingdanxinxi4961$$Modal: React.FC<PageProps> = ({
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
    const eventDatacloseModal18: any = [
      {
        type: 'closeModal',
        dataId: '82128_1',
        options: { compId: 'page', compName: 'page', id: '804118' },
        line_number: 1,
      },
    ];
    eventDatacloseModal18.params = [] || [];
    CMDGenerator(eventDatacloseModal18, {}, 'closeModal', {
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
    const eventDatacustomActionCode235: any = [
      {
        type: 'customActionCode',
        dataId: 170547785545499520,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9396807',
          pageJsonId: '653507',
          code: 'function main(data,state,success,fail){console.log("\\u767D\\u540D\\u5355\\u4FE1\\u606F\\u5F39\\u7A97\\u5165\\u53C2\\uFF1A",state.singleGroup);data.singleGroup=state.singleGroup;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170547792467186240,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '422385774',
              pageJsonId: '653507',
              dataSourceId: 170547781936394530,
              dataSourceName: 'singleGroup',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupInfo',
                  children: [
                    {
                      code: 'belongCityText',
                      name: '归属地市',
                      type: 'string',
                      attrId: '60919',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'belongAreaText',
                      name: '归属区县',
                      type: 'string',
                      attrId: '800267',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'customerCreditRate',
                      name: '客户征信等级',
                      type: 'string',
                      attrId: '86527',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      attrId: '941007',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      attrId: '480257',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupBelongRegion',
                      name: '集团归属区域',
                      type: 'string',
                      attrId: '2945015',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerName',
                      name: '客户经理姓名',
                      type: 'string',
                      attrId: '44074',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerPhone',
                      name: '客户经理联系电话',
                      type: 'string',
                      attrId: '515385',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerCreditRate',
                      name: '客户经理征信等级',
                      type: 'string',
                      attrId: '6674943',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'earliestOverdueYearMonth',
                      name: '最早欠费年月',
                      type: 'string',
                      attrId: '059889',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'totalArrearage',
                      name: '累计欠费（元）',
                      type: 'string',
                      attrId: '329214',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'maxOverdueMonth',
                      name: '最大逾期月数 （月）',
                      type: 'string',
                      attrId: '205348',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'cumulativeOverdueFee',
                      name: '累计逾期欠费（元）',
                      type: 'string',
                      attrId: '6283003',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictPaymentWithinThreeMonnth',
                      name: '预计近3月回款（元）',
                      type: 'string',
                      attrId: '7984449',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictPaymentWithinYear',
                      name: '预计年内回款（元）',
                      type: 'string',
                      attrId: '340627',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionRequireYear',
                      name: '最近一次催缴要求',
                      type: 'string',
                      attrId: '059397',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionTimeYear',
                      name: '最近一次催缴时间（近一年）',
                      type: 'string',
                      attrId: '5256316',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionActionYear',
                      name: '最近一次催缴动作',
                      type: 'string',
                      attrId: '279744',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '00112',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'associatedGroupArrearageList',
                  children: [
                    {
                      code: 'idInfo',
                      children: [
                        {
                          code: 'idType',
                          name: '证件类型',
                          type: 'string',
                          attrId: '2205445',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'idNum',
                          name: '证件号码',
                          type: 'string',
                          attrId: '611541',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'enterpriseName',
                          name: '企业名称',
                          type: 'string',
                          attrId: '955974',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdCumulativeArrearage',
                          name: '同一证件号累计欠费（元）',
                          type: 'string',
                          attrId: '416743',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdOverdueArrearage',
                          name: '同一证件号累计逾期欠费（元）',
                          type: 'string',
                          attrId: '047153',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdMaxOverdueMonth',
                          name: '同一证件号最大逾期月数',
                          type: 'string',
                          attrId: '352803168',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdProvinceArchiveGroupNum',
                          name: '同一证件号省内建档集团数',
                          type: 'string',
                          attrId: '985943',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'blacklistReason',
                          name: '纳黑原因',
                          type: 'string',
                          attrId: '883931',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                      ],
                      name: '',
                      type: 'object',
                      attrId: '34197',
                      initialData: { type: 'static' },
                      parentKey: 'associatedGroupArrearageList',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'associatedGroupList',
                      children: [
                        {
                          code: 'groupName',
                          name: '关联集团名称',
                          type: 'string',
                          attrId: '917033',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                        },
                        {
                          code: 'groupId',
                          name: '集团编码',
                          type: 'string',
                          attrId: '9122',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                        },
                        {
                          code: 'earliestOverdueYearMonth',
                          name: '最早欠费年月',
                          type: 'string',
                          attrId: '00063984',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                        },
                        {
                          code: 'totalArrearage',
                          name: '累计欠费（元）',
                          type: 'string',
                          attrId: '78218',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                        },
                        {
                          code: 'maxOverdueMonth',
                          name: '最大逾期月数（月）',
                          type: 'string',
                          attrId: '877151',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                        },
                        {
                          code: 'cumulativeOverdueFee',
                          name: '累计逾期欠费（元）',
                          type: 'string',
                          attrId: '98553',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                        },
                      ],
                      name: '',
                      type: 'objectArray',
                      attrId: '164206',
                      initialData: { type: 'static' },
                      parentKey: 'associatedGroupArrearageList',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '695928',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'applyInfo',
                  children: [
                    {
                      code: 'whitelistType',
                      name: '白名单类型',
                      type: 'string',
                      attrId: '3911987',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListNumYear',
                      name: '当年己申请白名单次数（次）',
                      type: 'string',
                      attrId: '463255',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListUpNumYear',
                      name: '当年白名单申请上线次数（次）',
                      type: 'string',
                      attrId: '5407294',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListDay',
                      name: '白名单申请天数',
                      type: 'string',
                      attrId: '959256',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictEffectiveTime',
                      name: '预计白名单生效时间',
                      type: 'string',
                      attrId: '394472',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictDeadTime',
                      name: '预计白名单失效时间',
                      type: 'string',
                      attrId: '467011',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'arrearsReason',
                      name: '欠费原因',
                      type: 'string',
                      attrId: '985624',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'collectionCondition',
                      name: '催缴情况',
                      type: 'string',
                      attrId: '780916',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'riskAssessment',
                      name: '风险评估',
                      type: 'string',
                      attrId: '4416545',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '0769877',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
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
    eventDatacustomActionCode235.params = [] || [];
    CMDGenerator(eventDatacustomActionCode235, {}, 'customActionCode', {
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
      className="__CustomClass_653507__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_653507_1',
          uid: 'View_653507_1',
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
        ref={(r: any) => (refs['View_653507_1'] = r)}
        {...injectData}
      >
        <BusiComp335152
          busiCompId={'1064468557612539904'}
          name={'欠费高风险白名单信息'}
          fieldName={'singleGroup'}
          busiCompStates={{ whitelistApplyInfo: data?.singleGroup }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => (refs['BOFramer_655437'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_281404',
            uid: 'View_281404',
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
          ref={(r: any) => (refs['View_281404'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_8956481',
              uid: 'View_8956481',
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
            ref={(r: any) => (refs['View_8956481'] = r)}
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
                id: 'Button_0790154',
                uid: 'Button_0790154',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 16px' }}
              onClick={(e: any) => {
                const eventDatacloseModal124: any = [
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
                eventDatacloseModal124.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacloseModal124, { e }, 'closeModal', {
                  id: 'closeModal',
                  name: 'closeModal',
                  type: 'closeModal',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_0790154'] = r)}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Duojituanbaimingdanxinxi4961$$Modal, {
  pageId: '1064813919203217408',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', singleGroup: '' },
});
