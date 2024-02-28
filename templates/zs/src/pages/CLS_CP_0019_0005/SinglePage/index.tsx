// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View } from '@/components/factory';

import BusiComp335152 from '@/components/BusiComp335152';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1064466295838302208';
const ClsCp_0019_0005SinglePage$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode237: any = [
      {
        type: 'customActionCode',
        dataId: 170547306374889700,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '0481535',
          pageJsonId: '4868583',
          code: 'function main(data,state,success,fail){var _state$customObject;var singleGroup=state===null||state===void 0?void 0:(_state$customObject=state.customObject)===null||_state$customObject===void 0?void 0:_state$customObject.singleGroup;data.singleGroup=singleGroup;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170547311026877220,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '159942',
              pageJsonId: '4868583',
              dataSourceId: 170539955375795600,
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
                      attrId: '8472523',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'belongAreaText',
                      name: '归属区县',
                      type: 'string',
                      attrId: '367936',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'customerCreditRate',
                      name: '客户征信等级',
                      type: 'string',
                      attrId: '235731',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      attrId: '6126443',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      attrId: '980072',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupBelongRegion',
                      name: '集团归属区域',
                      type: 'string',
                      attrId: '9739191',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerName',
                      name: '客户经理姓名',
                      type: 'string',
                      attrId: '990388',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerPhone',
                      name: '客户经理联系电话',
                      type: 'string',
                      attrId: '077056',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerCreditRate',
                      name: '客户经理征信等级',
                      type: 'string',
                      attrId: '239714',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'earliestOverdueYearMonth',
                      name: '最早欠费年月',
                      type: 'string',
                      attrId: '288631',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'totalArrearage',
                      name: '累计欠费（元）',
                      type: 'string',
                      attrId: '641873',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'maxOverdueMonth',
                      name: '最大逾期月数 （月）',
                      type: 'string',
                      attrId: '267112',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'cumulativeOverdueFee',
                      name: '累计逾期欠费（元）',
                      type: 'string',
                      attrId: '575916',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictPaymentWithinThreeMonnth',
                      name: '预计近3月回款（元）',
                      type: 'string',
                      attrId: '9295033',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictPaymentWithinYear',
                      name: '预计年内回款（元）',
                      type: 'string',
                      attrId: '3691667',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionRequireYear',
                      name: '最近一次催缴要求',
                      type: 'string',
                      attrId: '6907963',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionTimeYear',
                      name: '最近一次催缴时间（近一年）',
                      type: 'string',
                      attrId: '4418535',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionActionYear',
                      name: '最近一次催缴动作',
                      type: 'string',
                      attrId: '24067',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '43271',
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
                          attrId: '8939387',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'idNum',
                          name: '证件号码',
                          type: 'string',
                          attrId: '249455',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'enterpriseName',
                          name: '企业名称',
                          type: 'string',
                          attrId: '2150427',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdCumulativeArrearage',
                          name: '同一证件号累计欠费（元）',
                          type: 'string',
                          attrId: '453002',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdOverdueArrearage',
                          name: '同一证件号累计逾期欠费（元）',
                          type: 'string',
                          attrId: '0145229',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdMaxOverdueMonth',
                          name: '同一证件号最大逾期月数',
                          type: 'string',
                          attrId: '51742',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdProvinceArchiveGroupNum',
                          name: '同一证件号省内建档集团数',
                          type: 'string',
                          attrId: '7789956',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'blacklistReason',
                          name: '纳黑原因',
                          type: 'string',
                          attrId: '491535',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                      ],
                      name: '',
                      type: 'object',
                      attrId: '8260662',
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
                          attrId: '8824666',
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
                          attrId: '229891',
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
                          attrId: '729515',
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
                          attrId: '148658',
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
                          attrId: '621612',
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
                          attrId: '574745',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                        },
                      ],
                      name: '',
                      type: 'objectArray',
                      attrId: '94867',
                      initialData: { type: 'static' },
                      parentKey: 'associatedGroupArrearageList',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '457637',
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
                      attrId: '563475',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListNumYear',
                      name: '当年己申请白名单次数（次）',
                      type: 'string',
                      attrId: '922573',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListUpNumYear',
                      name: '当年白名单申请上线次数（次）',
                      type: 'string',
                      attrId: '661379',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListDay',
                      name: '白名单申请天数',
                      type: 'string',
                      attrId: '11409',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictEffectiveTime',
                      name: '预计白名单生效时间',
                      type: 'string',
                      attrId: '34095',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictDeadTime',
                      name: '预计白名单失效时间',
                      type: 'string',
                      attrId: '7867405',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'arrearsReason',
                      name: '欠费原因',
                      type: 'string',
                      attrId: '27417',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'collectionCondition',
                      name: '催缴情况',
                      type: 'string',
                      attrId: '695249',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'riskAssessment',
                      name: '风险评估',
                      type: 'string',
                      attrId: '054376',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '978734',
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
    eventDatacustomActionCode237.params = [] || [];
    CMDGenerator(eventDatacustomActionCode237, {}, 'customActionCode', {
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
      className="__CustomClass_4868583__"
    >
      <View
        className="View_View_4868583_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_4868583_1',
          uid: 'View_4868583_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_4868583_1')}
        {...injectData}
      >
        <BusiComp335152
          pageId={pageId}
          busiCompId={'1064468557612539904'}
          name={'欠费高风险白名单信息'}
          fieldName={'singleGroup'}
          busiCompStates={{ whitelistApplyInfo: data?.singleGroup }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_5281475')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0019_0005SinglePage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', customObject: '' },
});
