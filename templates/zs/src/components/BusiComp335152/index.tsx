// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Text, Form, Input, Table, TextArea } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '1064468557612539904';
const BusiComp335152$$BusiComp: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode1: any = [
      {
        type: 'customActionCode',
        dataId: 170547300875822300,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '332192',
          pageJsonId: '335152',
          code: 'function main(data,state,success,fail){data.whitelistApplyInfo=state.whitelistApplyInfo;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170547302990648740,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '354323',
              pageJsonId: '335152',
              dataSourceId: 170539547965346660,
              dataSourceName: 'whitelistApplyInfo',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupInfo',
                  children: [
                    {
                      code: 'belongCityText',
                      name: '归属地市',
                      type: 'string',
                      attrId: '741364',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'belongAreaText',
                      name: '归属区县',
                      type: 'string',
                      attrId: '3851782',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'customerCreditRate',
                      name: '客户征信等级',
                      type: 'string',
                      attrId: '7630833',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      attrId: '121475',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      attrId: '614026',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'groupBelongRegion',
                      name: '集团归属区域',
                      type: 'string',
                      attrId: '3630078',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerName',
                      name: '客户经理姓名',
                      type: 'string',
                      attrId: '7371296',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerPhone',
                      name: '客户经理联系电话',
                      type: 'string',
                      attrId: '2406421',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'custManagerCreditRate',
                      name: '客户经理征信等级',
                      type: 'string',
                      attrId: '931304',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'earliestOverdueYearMonth',
                      name: '最早欠费年月',
                      type: 'string',
                      attrId: '463414',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'totalArrearage',
                      name: '累计欠费（元）',
                      type: 'string',
                      attrId: '8045366',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'maxOverdueMonth',
                      name: '最大逾期月数 （月）',
                      type: 'string',
                      attrId: '5221567',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'cumulativeOverdueFee',
                      name: '累计逾期欠费（元）',
                      type: 'string',
                      attrId: '054733',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictPaymentWithinThreeMonnth',
                      name: '预计近3月回款（元）',
                      type: 'string',
                      attrId: '2394493',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictPaymentWithinYear',
                      name: '预计年内回款（元）',
                      type: 'string',
                      attrId: '248313',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionRequireYear',
                      name: '最近一次催缴要求',
                      type: 'string',
                      attrId: '492793',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionTimeYear',
                      name: '最近一次催缴时间（近一年）',
                      type: 'string',
                      attrId: '616069',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'lastCollectionActionYear',
                      name: '最近一次催缴动作',
                      type: 'string',
                      attrId: '7271343',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'groupInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '216953',
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
                          attrId: '0891949',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'idNum',
                          name: '证件号码',
                          type: 'string',
                          attrId: '779659',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'enterpriseName',
                          name: '企业名称',
                          type: 'string',
                          attrId: '3528856',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdCumulativeArrearage',
                          name: '同一证件号累计欠费（元）',
                          type: 'string',
                          attrId: '874624',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdOverdueArrearage',
                          name: '同一证件号累计逾期欠费（元）',
                          type: 'string',
                          attrId: '427203',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdMaxOverdueMonth',
                          name: '同一证件号最大逾期月数',
                          type: 'string',
                          attrId: '429399',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'sameIdProvinceArchiveGroupNum',
                          name: '同一证件号省内建档集团数',
                          type: 'string',
                          attrId: '5200905',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'blacklistReason',
                          name: '纳黑原因',
                          type: 'string',
                          attrId: '5271486',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'idInfo',
                          parentType: 'object',
                          showInput: true,
                        },
                      ],
                      name: '',
                      type: 'object',
                      attrId: '694598',
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
                          attrId: '855461',
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
                          attrId: '854155',
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
                          attrId: '874588',
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
                          attrId: '488039',
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
                          attrId: '558712',
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
                          attrId: '569801',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'associatedGroupList',
                          parentType: 'objectArray',
                          showInput: false,
                          parentCode: 'associatedGroupList',
                        },
                      ],
                      name: '',
                      type: 'objectArray',
                      attrId: '501243',
                      initialData: { type: 'static' },
                      parentKey: 'associatedGroupArrearageList',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '92023',
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
                      attrId: '928967',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListNumYear',
                      name: '当年己申请白名单次数（次）',
                      type: 'string',
                      attrId: '76554',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListUpNumYear',
                      name: '当年白名单申请上线次数（次）',
                      type: 'string',
                      attrId: '796105',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'appliedWhiteListDay',
                      name: '白名单申请天数',
                      type: 'string',
                      attrId: '074037',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictEffectiveTime',
                      name: '预计白名单生效时间',
                      type: 'string',
                      attrId: '610521',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'predictDeadTime',
                      name: '预计白名单失效时间',
                      type: 'string',
                      attrId: '195806',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'arrearsReason',
                      name: '欠费原因',
                      type: 'string',
                      attrId: '089286',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'collectionCondition',
                      name: '催缴情况',
                      type: 'string',
                      attrId: '4220243',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'riskAssessment',
                      name: '风险评估',
                      type: 'string',
                      attrId: '196558',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'applyInfo',
                      parentType: 'object',
                      showInput: true,
                    },
                  ],
                  name: '',
                  type: 'object',
                  attrId: '7956054',
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
    eventDatacustomActionCode1.params = [] || [];
    CMDGenerator(eventDatacustomActionCode1, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_335152__"
    >
      <View
        className="View_View_436132"
        name={'布局容器'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_436132',
          uid: 'View_436132',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_436132')}
        {...injectData}
      >
        <View
          className="View_View_7338818"
          name={'集团基本信息及欠费催缴情况布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_7338818',
            uid: 'View_7338818',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_7338818')}
          {...injectData}
        >
          <View
            className="View_View_284985"
            name={'标题容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_284985',
              uid: 'View_284985',
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
              margin: '0px 0px 8px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_284985')}
            {...injectData}
          >
            <View
              className="View_View_9265983"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_9265983',
                uid: 'View_9265983',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_9265983')}
              {...injectData}
            >
              <View
                className="View_View_004572"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
                $$componentItem={{
                  id: 'View_004572',
                  uid: 'View_004572',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_004572')}
                {...injectData}
              />
              <Text
                name={'集团基本信息及欠费催缴情况'}
                content={'集团基本信息及欠费催缴情况'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_8923296',
                  uid: 'Text_8923296',
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
                ref={(r: any) => refs.setComponentRef(r, 'Text_8923296')}
                {...injectData}
              />
            </View>
            <View
              className="View_View_773214"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_773214',
                uid: 'View_773214',
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
                flex: 4,
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_773214')}
              {...injectData}
            >
              <Text
                name={'集团信息风险提示'}
                content={'友情提醒：信控调整，谁经办谁负责，谁审批谁负责！'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_4091554',
                  uid: 'Text_4091554',
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
                ref={(r: any) => refs.setComponentRef(r, 'Text_4091554')}
                {...injectData}
              />
            </View>
          </View>
          <View
            className="View_View_489073"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_489073',
              uid: 'View_489073',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_489073')}
            {...injectData}
          >
            <Form
              name={'表单'}
              colSpan={8}
              labelCol={'10'}
              wrapperCol={14}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_0331902'}
              genRuleType={'key'}
              formType={'normal'}
              relationDataSource={data?.whitelistApplyInfo}
              busiObjectId={''}
              className={'custom_textarea'}
              $$componentItem={{
                id: 'Form_0331902',
                uid: 'Form_0331902',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              onValuesChange={(changedFieldName: any, changedValue: any) => {
                const eventDatasetDataSource2: any = [
                  {
                    type: 'setDataSource',
                    dataId: 170539583575298880,
                    shielding: true,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '493479',
                      pageJsonId: '335152',
                      dataSourceId: 170539547965346660,
                      dataSourceName: 'whitelistApplyInfo',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          code: 'groupInfo',
                          children: [
                            {
                              code: 'belongCityText',
                              name: '归属地市',
                              type: 'string',
                              attrId: '741364',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'belongCityText',
                              },
                            },
                            {
                              code: 'belongAreaText',
                              name: '归属区县',
                              type: 'string',
                              attrId: '3851782',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'belongAreaText',
                              },
                            },
                            {
                              code: 'customerCreditRate',
                              name: '客户征信等级',
                              type: 'string',
                              attrId: '7630833',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'customerCreditRate',
                              },
                            },
                            {
                              code: 'groupName',
                              name: '集团名称',
                              type: 'string',
                              attrId: '121475',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'groupName',
                              },
                            },
                            {
                              code: 'groupId',
                              name: '集团编码',
                              type: 'string',
                              attrId: '614026',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'groupId',
                              },
                            },
                            {
                              code: 'groupBelongRegion',
                              name: '集团归属区域',
                              type: 'string',
                              attrId: '3630078',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'groupBelongRegion',
                              },
                            },
                            {
                              code: 'custManagerName',
                              name: '客户经理姓名',
                              type: 'string',
                              attrId: '7371296',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'custManagerName',
                              },
                            },
                            {
                              code: 'custManagerPhone',
                              name: '客户经理联系电话',
                              type: 'string',
                              attrId: '2406421',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'custManagerPhone',
                              },
                            },
                            {
                              code: 'custManagerCreditRate',
                              name: '客户经理征信等级',
                              type: 'string',
                              attrId: '931304',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'custManagerCreditRate',
                              },
                            },
                            {
                              code: 'earliestOverdueYearMonth',
                              name: '最早欠费年月',
                              type: 'string',
                              attrId: '463414',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'earliestOverdueYearMonth',
                              },
                            },
                            {
                              code: 'totalArrearage',
                              name: '累计欠费（元）',
                              type: 'string',
                              attrId: '8045366',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'totalArrearage',
                              },
                            },
                            {
                              code: 'maxOverdueMonth',
                              name: '最大逾期月数 （月）',
                              type: 'string',
                              attrId: '5221567',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'maxOverdueMonth',
                              },
                            },
                            {
                              code: 'cumulativeOverdueFee',
                              name: '累计逾期欠费（元）',
                              type: 'string',
                              attrId: '054733',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'cumulativeOverdueFee',
                              },
                            },
                            {
                              code: 'predictPaymentWithinThreeMonnth',
                              name: '预计近3月回款（元）',
                              type: 'string',
                              attrId: '2394493',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'predictPaymentWithinThreeMonnth',
                              },
                            },
                            {
                              code: 'predictPaymentWithinYear',
                              name: '预计年内回款（元）',
                              type: 'string',
                              attrId: '248313',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'predictPaymentWithinYear',
                              },
                            },
                            {
                              code: 'lastCollectionRequireYear',
                              name: '最近一次催缴要求',
                              type: 'string',
                              attrId: '492793',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'lastCollectionRequireYear',
                              },
                            },
                            {
                              code: 'lastCollectionTimeYear',
                              name: '最近一次催缴时间（近一年）',
                              type: 'string',
                              attrId: '616069',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'lastCollectionTimeYear',
                              },
                            },
                            {
                              code: 'lastCollectionActionYear',
                              name: '最近一次催缴动作',
                              type: 'string',
                              attrId: '7271343',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: [
                                  'form',
                                  'Form_0331902',
                                  'getFieldsValue',
                                ],
                                code: 'lastCollectionActionYear',
                              },
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '216953',
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
                                  attrId: '0891949',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'idNum',
                                  name: '证件号码',
                                  type: 'string',
                                  attrId: '779659',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'enterpriseName',
                                  name: '企业名称',
                                  type: 'string',
                                  attrId: '3528856',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'sameIdCumulativeArrearage',
                                  name: '同一证件号累计欠费（元）',
                                  type: 'string',
                                  attrId: '874624',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'sameIdOverdueArrearage',
                                  name: '同一证件号累计逾期欠费（元）',
                                  type: 'string',
                                  attrId: '427203',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'sameIdMaxOverdueMonth',
                                  name: '同一证件号最大逾期月数',
                                  type: 'string',
                                  attrId: '429399',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'sameIdProvinceArchiveGroupNum',
                                  name: '同一证件号省内建档集团数',
                                  type: 'string',
                                  attrId: '5200905',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'blacklistReason',
                                  name: '纳黑原因',
                                  type: 'string',
                                  attrId: '5271486',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                              ],
                              name: '',
                              type: 'object',
                              attrId: '694598',
                              initialData: { type: 'static' },
                              parentKey: '1-1',
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
                                  attrId: '855461',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_0331902',
                                      'getFieldsValue',
                                    ],
                                    code: 'groupName',
                                  },
                                },
                                {
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  attrId: '854155',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_0331902',
                                      'getFieldsValue',
                                    ],
                                    code: 'groupId',
                                  },
                                },
                                {
                                  code: 'earliestOverdueYearMonth',
                                  name: '最早欠费年月',
                                  type: 'string',
                                  attrId: '874588',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_0331902',
                                      'getFieldsValue',
                                    ],
                                    code: 'earliestOverdueYearMonth',
                                  },
                                },
                                {
                                  code: 'totalArrearage',
                                  name: '累计欠费（元）',
                                  type: 'string',
                                  attrId: '488039',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_0331902',
                                      'getFieldsValue',
                                    ],
                                    code: 'totalArrearage',
                                  },
                                },
                                {
                                  code: 'maxOverdueMonth',
                                  name: '最大逾期月数（月）',
                                  type: 'string',
                                  attrId: '558712',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_0331902',
                                      'getFieldsValue',
                                    ],
                                    code: 'maxOverdueMonth',
                                  },
                                },
                                {
                                  code: 'cumulativeOverdueFee',
                                  name: '累计逾期欠费（元）',
                                  type: 'string',
                                  attrId: '569801',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_0331902',
                                      'getFieldsValue',
                                    ],
                                    code: 'cumulativeOverdueFee',
                                  },
                                },
                              ],
                              name: '',
                              type: 'objectArray',
                              attrId: '501243',
                              initialData: { type: 'static' },
                              parentKey: '1-1',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '92023',
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
                              attrId: '928967',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'appliedWhiteListNumYear',
                              name: '当年己申请白名单次数（次）',
                              type: 'string',
                              attrId: '76554',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'appliedWhiteListUpNumYear',
                              name: '当年白名单申请上线次数（次）',
                              type: 'string',
                              attrId: '796105',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'appliedWhiteListDay',
                              name: '白名单申请天数',
                              type: 'string',
                              attrId: '074037',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'predictEffectiveTime',
                              name: '预计白名单生效时间',
                              type: 'string',
                              attrId: '610521',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'predictDeadTime',
                              name: '预计白名单失效时间',
                              type: 'string',
                              attrId: '195806',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'arrearsReason',
                              name: '欠费原因',
                              type: 'string',
                              attrId: '089286',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'collectionCondition',
                              name: '催缴情况',
                              type: 'string',
                              attrId: '4220243',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'riskAssessment',
                              name: '风险评估',
                              type: 'string',
                              attrId: '196558',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '7956054',
                          initialData: { type: 'static' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource2.params =
                  [
                    {
                      title: '表单当前改变字段编码',
                      name: 'changedFieldName',
                      value: '$changedFieldName$',
                    },
                    {
                      title: '表单当前改变字段值',
                      name: 'changedValue',
                      value: '$changedValue$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatasetDataSource2,
                  { changedFieldName, changedValue },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_0331902')}
              {...injectData}
            >
              <Input
                name={'归属地市'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'belongCityText'}
                value={data?.whitelistApplyInfo?.groupInfo?.belongCityText}
                formItemIndex={0}
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
                  id: 'Input_belongCityText_470431',
                  uid: 'Input_belongCityText_470431',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_belongCityText_470431')
                }
                {...injectData}
              />
              <Input
                name={'归属区县'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'belongAreaText'}
                value={data?.whitelistApplyInfo?.groupInfo?.belongAreaText}
                formItemIndex={1}
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
                  id: 'Input_belongAreaText_1998728',
                  uid: 'Input_belongAreaText_1998728',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_belongAreaText_1998728')
                }
                {...injectData}
              />
              <Input
                name={'客户征信等级'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'customerCreditRate'}
                value={data?.whitelistApplyInfo?.groupInfo?.customerCreditRate}
                formItemIndex={2}
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
                  id: 'Input_customerCreditRate_334148',
                  uid: 'Input_customerCreditRate_334148',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_customerCreditRate_334148')
                }
                {...injectData}
              />
              <Input
                name={'集团名称'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'groupName'}
                value={data?.whitelistApplyInfo?.groupInfo?.groupName}
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
                  id: 'Input_groupName_516823',
                  uid: 'Input_groupName_516823',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_groupName_516823')
                }
                {...injectData}
              />
              <Input
                name={'集团编码'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'groupId'}
                value={data?.whitelistApplyInfo?.groupInfo?.groupId}
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
                  id: 'Input_groupId_350608',
                  uid: 'Input_groupId_350608',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_groupId_350608')
                }
                {...injectData}
              />
              <Input
                name={'集团归属区域'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'groupBelongRegion'}
                value={data?.whitelistApplyInfo?.groupInfo?.groupBelongRegion}
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
                  id: 'Input_groupBelongRegion_146806',
                  uid: 'Input_groupBelongRegion_146806',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_groupBelongRegion_146806')
                }
                {...injectData}
              />
              <Input
                name={'客户经理姓名'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'custManagerName'}
                value={data?.whitelistApplyInfo?.groupInfo?.custManagerName}
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
                  id: 'Input_custManagerName_638052',
                  uid: 'Input_custManagerName_638052',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_custManagerName_638052')
                }
                {...injectData}
              />
              <Input
                name={'客户经理联系电话'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'custManagerPhone'}
                value={data?.whitelistApplyInfo?.groupInfo?.custManagerPhone}
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
                  id: 'Input_custManagerPhone_6186653',
                  uid: 'Input_custManagerPhone_6186653',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_custManagerPhone_6186653')
                }
                {...injectData}
              />
              <Input
                name={'客户经理征信等级'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'custManagerCreditRate'}
                value={
                  data?.whitelistApplyInfo?.groupInfo?.custManagerCreditRate
                }
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
                  id: 'Input_custManagerCreditRate_583118',
                  uid: 'Input_custManagerCreditRate_583118',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_custManagerCreditRate_583118')
                }
                {...injectData}
              />
              <Input
                name={'最早欠费年月'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'earliestOverdueYearMonth'}
                value={
                  data?.whitelistApplyInfo?.groupInfo?.earliestOverdueYearMonth
                }
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
                  id: 'Input_earliestOverdueYearMonth_4565813',
                  uid: 'Input_earliestOverdueYearMonth_4565813',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_earliestOverdueYearMonth_4565813',
                  )
                }
                {...injectData}
              />
              <Input
                name={'累计欠费'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'元'}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'totalArrearage'}
                value={data?.whitelistApplyInfo?.groupInfo?.totalArrearage}
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
                  id: 'Input_totalArrearage_706952',
                  uid: 'Input_totalArrearage_706952',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_totalArrearage_706952')
                }
                {...injectData}
              />
              <Input
                name={'最大逾期月数 '}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'月'}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'maxOverdueMonth'}
                value={data?.whitelistApplyInfo?.groupInfo?.maxOverdueMonth}
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
                  id: 'Input_maxOverdueMonth_4462742',
                  uid: 'Input_maxOverdueMonth_4462742',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_maxOverdueMonth_4462742')
                }
                {...injectData}
              />
              <Input
                name={'累计逾期欠费'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'after'}
                postfix={'元'}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'cumulativeOverdueFee'}
                value={
                  data?.whitelistApplyInfo?.groupInfo?.cumulativeOverdueFee
                }
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
                  id: 'Input_cumulativeOverdueFee_703401',
                  uid: 'Input_cumulativeOverdueFee_703401',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_cumulativeOverdueFee_703401')
                }
                {...injectData}
              />
              <Input
                name={'预计近3月回款'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'元'}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'predictPaymentWithinThreeMonnth'}
                value={
                  data?.whitelistApplyInfo?.groupInfo
                    ?.predictPaymentWithinThreeMonnth
                }
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
                  id: 'Input_predictPaymentWithinThreeMonnth_716274',
                  uid: 'Input_predictPaymentWithinThreeMonnth_716274',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_predictPaymentWithinThreeMonnth_716274',
                  )
                }
                {...injectData}
              />
              <Input
                name={'预计年内回款'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'元'}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'predictPaymentWithinYear'}
                value={
                  data?.whitelistApplyInfo?.groupInfo?.predictPaymentWithinYear
                }
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
                  id: 'Input_predictPaymentWithinYear_47848',
                  uid: 'Input_predictPaymentWithinYear_47848',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_predictPaymentWithinYear_47848',
                  )
                }
                {...injectData}
              />
              <Input
                name={'最近一次催缴要求'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'lastCollectionRequireYear'}
                value={
                  data?.whitelistApplyInfo?.groupInfo?.lastCollectionRequireYear
                }
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
                  id: 'Input_lastCollectionRequireYear_655031',
                  uid: 'Input_lastCollectionRequireYear_655031',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_lastCollectionRequireYear_655031',
                  )
                }
                {...injectData}
              />
              <Input
                name={'最近一次催缴时间(近一年)'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'lastCollectionTimeYear'}
                value={
                  data?.whitelistApplyInfo?.groupInfo?.lastCollectionTimeYear
                }
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
                  id: 'Input_lastCollectionTimeYear_867747',
                  uid: 'Input_lastCollectionTimeYear_867747',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_lastCollectionTimeYear_867747')
                }
                {...injectData}
              />
              <Input
                name={'最近一次催缴动作'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'lastCollectionActionYear'}
                value={
                  data?.whitelistApplyInfo?.groupInfo?.lastCollectionActionYear
                }
                formItemIndex={17}
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
                  id: 'Input_lastCollectionActionYear_61561',
                  uid: 'Input_lastCollectionActionYear_61561',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_lastCollectionActionYear_61561',
                  )
                }
                {...injectData}
              />
            </Form>
          </View>
        </View>
        <View
          className="View_View_944976"
          name={'同一证件号码关联集团欠费情况容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_944976',
            uid: 'View_944976',
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
            margin: '16px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_944976')}
          {...injectData}
        >
          <View
            className="View_View_890466"
            name={'标题容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_890466',
              uid: 'View_890466',
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
              margin: '0px 0px 8px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_890466')}
            {...injectData}
          >
            <View
              className="View_View_348735"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_348735',
                uid: 'View_348735',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_348735')}
              {...injectData}
            >
              <View
                className="View_View_792075"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
                $$componentItem={{
                  id: 'View_792075',
                  uid: 'View_792075',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_792075')}
                {...injectData}
              />
              <Text
                name={'同一证件号码关联集团欠费情况'}
                content={'同一证件号码关联集团欠费情况'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_510131',
                  uid: 'Text_510131',
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
                ref={(r: any) => refs.setComponentRef(r, 'Text_510131')}
                {...injectData}
              />
            </View>
            <View
              className="View_View_2817205"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_2817205',
                uid: 'View_2817205',
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
                flex: 4,
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_2817205')}
              {...injectData}
            >
              <Text
                name={'集团信息风险提示'}
                content={'注：同一证件号可能关联多家集团。'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_622604',
                  uid: 'Text_622604',
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
                ref={(r: any) => refs.setComponentRef(r, 'Text_622604')}
                {...injectData}
              />
            </View>
          </View>
          <View
            className="View_View_906396"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_906396',
              uid: 'View_906396',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_906396')}
            {...injectData}
          >
            <Form
              name={'表单'}
              colSpan={8}
              labelCol={'10'}
              wrapperCol={14}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_958609'}
              genRuleType={'key'}
              formType={'normal'}
              relationDataSource={data?.whitelistApplyInfo}
              busiObjectId={''}
              $$componentItem={{
                id: 'Form_958609',
                uid: 'Form_958609',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              onValuesChange={(changedFieldName: any, changedValue: any) => {
                const eventDatasetDataSource3: any = [
                  {
                    type: 'setDataSource',
                    dataId: 170539643269253060,
                    shielding: true,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '165555',
                      pageJsonId: '335152',
                      dataSourceId: 170539547965346660,
                      dataSourceName: 'whitelistApplyInfo',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          code: 'groupInfo',
                          children: [
                            {
                              code: 'belongCityText',
                              name: '归属地市',
                              type: 'string',
                              attrId: '741364',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'belongAreaText',
                              name: '归属区县',
                              type: 'string',
                              attrId: '3851782',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'customerCreditRate',
                              name: '客户征信等级',
                              type: 'string',
                              attrId: '7630833',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'groupName',
                              name: '集团名称',
                              type: 'string',
                              attrId: '121475',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'groupId',
                              name: '集团编码',
                              type: 'string',
                              attrId: '614026',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'groupBelongRegion',
                              name: '集团归属区域',
                              type: 'string',
                              attrId: '3630078',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'custManagerName',
                              name: '客户经理姓名',
                              type: 'string',
                              attrId: '7371296',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'custManagerPhone',
                              name: '客户经理联系电话',
                              type: 'string',
                              attrId: '2406421',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'custManagerCreditRate',
                              name: '客户经理征信等级',
                              type: 'string',
                              attrId: '931304',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'earliestOverdueYearMonth',
                              name: '最早欠费年月',
                              type: 'string',
                              attrId: '463414',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'totalArrearage',
                              name: '累计欠费（元）',
                              type: 'string',
                              attrId: '8045366',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'maxOverdueMonth',
                              name: '最大逾期月数 （月）',
                              type: 'string',
                              attrId: '5221567',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'cumulativeOverdueFee',
                              name: '累计逾期欠费（元）',
                              type: 'string',
                              attrId: '054733',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'predictPaymentWithinThreeMonnth',
                              name: '预计近3月回款（元）',
                              type: 'string',
                              attrId: '2394493',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'predictPaymentWithinYear',
                              name: '预计年内回款（元）',
                              type: 'string',
                              attrId: '248313',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'lastCollectionRequireYear',
                              name: '最近一次催缴要求',
                              type: 'string',
                              attrId: '492793',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'lastCollectionTimeYear',
                              name: '最近一次催缴时间（近一年）',
                              type: 'string',
                              attrId: '616069',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'lastCollectionActionYear',
                              name: '最近一次催缴动作',
                              type: 'string',
                              attrId: '7271343',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '216953',
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
                                  attrId: '0891949',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_958609',
                                      'getFieldsValue',
                                    ],
                                    code: 'idType',
                                  },
                                },
                                {
                                  code: 'idNum',
                                  name: '证件号码',
                                  type: 'string',
                                  attrId: '779659',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_958609',
                                      'getFieldsValue',
                                    ],
                                    code: 'idNum',
                                  },
                                },
                                {
                                  code: 'enterpriseName',
                                  name: '企业名称',
                                  type: 'string',
                                  attrId: '3528856',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_958609',
                                      'getFieldsValue',
                                    ],
                                    code: 'enterpriseName',
                                  },
                                },
                                {
                                  code: 'sameIdCumulativeArrearage',
                                  name: '同一证件号累计欠费（元）',
                                  type: 'string',
                                  attrId: '874624',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_958609',
                                      'getFieldsValue',
                                    ],
                                    code: 'sameIdCumulativeArrearage',
                                  },
                                },
                                {
                                  code: 'sameIdOverdueArrearage',
                                  name: '同一证件号累计逾期欠费（元）',
                                  type: 'string',
                                  attrId: '427203',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_958609',
                                      'getFieldsValue',
                                    ],
                                    code: 'sameIdOverdueArrearage',
                                  },
                                },
                                {
                                  code: 'sameIdMaxOverdueMonth',
                                  name: '同一证件号最大逾期月数',
                                  type: 'string',
                                  attrId: '429399',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_958609',
                                      'getFieldsValue',
                                    ],
                                    code: 'sameIdMaxOverdueMonth',
                                  },
                                },
                                {
                                  code: 'sameIdProvinceArchiveGroupNum',
                                  name: '同一证件号省内建档集团数',
                                  type: 'string',
                                  attrId: '5200905',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_958609',
                                      'getFieldsValue',
                                    ],
                                    code: 'sameIdProvinceArchiveGroupNum',
                                  },
                                },
                                {
                                  code: 'blacklistReason',
                                  name: '纳黑原因',
                                  type: 'string',
                                  attrId: '5271486',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_958609',
                                      'getFieldsValue',
                                    ],
                                    code: 'blacklistReason',
                                  },
                                },
                              ],
                              name: '',
                              type: 'object',
                              attrId: '694598',
                              initialData: { type: 'static' },
                              parentKey: '1-1',
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
                                  attrId: '855461',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  attrId: '854155',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'earliestOverdueYearMonth',
                                  name: '最早欠费年月',
                                  type: 'string',
                                  attrId: '874588',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'totalArrearage',
                                  name: '累计欠费（元）',
                                  type: 'string',
                                  attrId: '488039',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'maxOverdueMonth',
                                  name: '最大逾期月数（月）',
                                  type: 'string',
                                  attrId: '558712',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'cumulativeOverdueFee',
                                  name: '累计逾期欠费（元）',
                                  type: 'string',
                                  attrId: '569801',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                              ],
                              name: '',
                              type: 'objectArray',
                              attrId: '501243',
                              initialData: { type: 'static' },
                              parentKey: '1-1',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '92023',
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
                              attrId: '928967',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'appliedWhiteListNumYear',
                              name: '当年己申请白名单次数（次）',
                              type: 'string',
                              attrId: '76554',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'appliedWhiteListUpNumYear',
                              name: '当年白名单申请上线次数（次）',
                              type: 'string',
                              attrId: '796105',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'appliedWhiteListDay',
                              name: '白名单申请天数',
                              type: 'string',
                              attrId: '074037',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'predictEffectiveTime',
                              name: '预计白名单生效时间',
                              type: 'string',
                              attrId: '610521',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'predictDeadTime',
                              name: '预计白名单失效时间',
                              type: 'string',
                              attrId: '195806',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'arrearsReason',
                              name: '欠费原因',
                              type: 'string',
                              attrId: '089286',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'collectionCondition',
                              name: '催缴情况',
                              type: 'string',
                              attrId: '4220243',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'riskAssessment',
                              name: '风险评估',
                              type: 'string',
                              attrId: '196558',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '7956054',
                          initialData: { type: 'static' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource3.params =
                  [
                    {
                      title: '表单当前改变字段编码',
                      name: 'changedFieldName',
                      value: '$changedFieldName$',
                    },
                    {
                      title: '表单当前改变字段值',
                      name: 'changedValue',
                      value: '$changedValue$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatasetDataSource3,
                  { changedFieldName, changedValue },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_958609')}
              {...injectData}
            >
              <Input
                name={'证件类型'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'idType'}
                value={
                  data?.whitelistApplyInfo?.associatedGroupArrearageList?.idInfo
                    ?.idType
                }
                formItemIndex={0}
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
                  id: 'Input_idType_175286',
                  uid: 'Input_idType_175286',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_idType_175286')}
                {...injectData}
              />
              <Input
                name={'证件号码'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'idNum'}
                value={
                  data?.whitelistApplyInfo?.associatedGroupArrearageList?.idInfo
                    ?.idNum
                }
                formItemIndex={1}
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
                  id: 'Input_idNum_178696',
                  uid: 'Input_idNum_178696',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_idNum_178696')}
                {...injectData}
              />
              <Input
                name={'企业名称'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'enterpriseName'}
                value={
                  data?.whitelistApplyInfo?.associatedGroupArrearageList?.idInfo
                    ?.enterpriseName
                }
                formItemIndex={2}
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
                  id: 'Input_enterpriseName_062242',
                  uid: 'Input_enterpriseName_062242',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_enterpriseName_062242')
                }
                {...injectData}
              />
              <Input
                name={'同一证件号累计欠费'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'元'}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'sameIdCumulativeArrearage'}
                value={
                  data?.whitelistApplyInfo?.associatedGroupArrearageList?.idInfo
                    ?.sameIdCumulativeArrearage
                }
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
                  id: 'Input_sameIdCumulativeArrearage_013646',
                  uid: 'Input_sameIdCumulativeArrearage_013646',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_sameIdCumulativeArrearage_013646',
                  )
                }
                {...injectData}
              />
              <Input
                name={'同一证件号累计逾期欠费'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'元'}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'sameIdOverdueArrearage'}
                value={
                  data?.whitelistApplyInfo?.associatedGroupArrearageList?.idInfo
                    ?.sameIdOverdueArrearage
                }
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
                  id: 'Input_sameIdOverdueArrearage_197253',
                  uid: 'Input_sameIdOverdueArrearage_197253',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_sameIdOverdueArrearage_197253')
                }
                {...injectData}
              />
              <Input
                name={'同一证件号最大逾期月数'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'sameIdMaxOverdueMonth'}
                value={
                  data?.whitelistApplyInfo?.associatedGroupArrearageList?.idInfo
                    ?.sameIdMaxOverdueMonth
                }
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
                  id: 'Input_sameIdMaxOverdueMonth_410984',
                  uid: 'Input_sameIdMaxOverdueMonth_410984',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_sameIdMaxOverdueMonth_410984')
                }
                {...injectData}
              />
              <Input
                name={'同一证件号省内建档集团数'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'sameIdProvinceArchiveGroupNum'}
                value={
                  data?.whitelistApplyInfo?.associatedGroupArrearageList?.idInfo
                    ?.sameIdProvinceArchiveGroupNum
                }
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
                  id: 'Input_sameIdProvinceArchiveGroupNum_2342673',
                  uid: 'Input_sameIdProvinceArchiveGroupNum_2342673',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_sameIdProvinceArchiveGroupNum_2342673',
                  )
                }
                {...injectData}
              />
              <Input
                name={'纳黑原因'}
                size={'default'}
                selfSpan={''}
                labelCol={'10'}
                wrapperCol={14}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                fieldName={'blacklistReason'}
                value={
                  data?.whitelistApplyInfo?.associatedGroupArrearageList?.idInfo
                    ?.blacklistReason
                }
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
                  id: 'Input_blacklistReason_920752',
                  uid: 'Input_blacklistReason_920752',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_blacklistReason_920752')
                }
                {...injectData}
              />
            </Form>
          </View>
          <Table
            name={'表格'}
            isFlexColumn={false}
            extendNum={3}
            adjustModel={'auto'}
            pageSize={5}
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
                title: '关联集团名称',
                key: 'groupName',
                dataIndex: 'groupName',
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
                title: '集团编码',
                key: 'groupId',
                dataIndex: 'groupId',
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
                title: '最早欠费年月',
                key: 'earliestOverdueYearMonth',
                dataIndex: 'earliestOverdueYearMonth',
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
                title: '累计欠费（元）',
                key: 'totalArrearage',
                dataIndex: 'totalArrearage',
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
                title: '最大逾期月数（月）',
                key: 'maxOverdueMonth',
                dataIndex: 'maxOverdueMonth',
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
                title: '累计逾期欠费（元）',
                key: 'cumulativeOverdueFee',
                dataIndex: 'cumulativeOverdueFee',
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
            page={true}
            rowKeyType={'auto'}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            dataSource={
              data?.whitelistApplyInfo?.associatedGroupArrearageList
                ?.associatedGroupList
            }
            rowKey={undefined}
            dataSourceFromDataSourceConfig={
              'data.whitelistApplyInfo.associatedGroupArrearageList.associatedGroupList'
            }
            $$componentItem={{
              id: 'Table_202246',
              uid: 'Table_202246',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '8px 0px 8px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_202246')}
            {...injectData}
          />
        </View>
        <View
          className="View_View_273682"
          name={'申请信息容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_273682',
            uid: 'View_273682',
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
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_273682')}
          {...injectData}
        >
          <View
            className="View_View_3458"
            name={'标题容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_3458',
              uid: 'View_3458',
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
              margin: '0px 0px 8px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_3458')}
            {...injectData}
          >
            <View
              className="View_View_434"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_434',
                uid: 'View_434',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_434')}
              {...injectData}
            >
              <View
                className="View_View_520073"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
                $$componentItem={{
                  id: 'View_520073',
                  uid: 'View_520073',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_520073')}
                {...injectData}
              />
              <Text
                name={'申请信息'}
                content={'申请信息'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_28043255',
                  uid: 'Text_28043255',
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
                ref={(r: any) => refs.setComponentRef(r, 'Text_28043255')}
                {...injectData}
              />
            </View>
            <View
              className="View_View_6314626"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_6314626',
                uid: 'View_6314626',
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
                flex: 8,
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_6314626')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_255859"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_255859',
              uid: 'View_255859',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_255859')}
            {...injectData}
          >
            <Form
              name={'表单'}
              colSpan={8}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_51758'}
              genRuleType={'key'}
              formType={'normal'}
              relationDataSource={data?.whitelistApplyInfo}
              busiObjectId={''}
              formColumns={[
                {
                  id: 'Input_whitelistType_868947',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '白名单类型',
                    basicStatus: 4,
                    size: 'default',
                    selfSpan: '',
                    labelCol: '6',
                    wrapperCol: 18,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipContent: '',
                    tipPlacement: 'top',
                    prefixIconPosition: 'before',
                    postfix: '',
                    postfixIconPosition: 'before',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'whitelistType',
                    value: data?.whitelistApplyInfo?.applyInfo?.whitelistType,
                    formItemIndex: 0,
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
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_appliedWhiteListNumYear_1262595',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '当年己申请白名单次数（次）',
                    basicStatus: 4,
                    size: 'default',
                    selfSpan: '',
                    labelCol: '6',
                    wrapperCol: 18,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipContent: '',
                    tipPlacement: 'top',
                    prefixIconPosition: 'before',
                    postfix: '',
                    postfixIconPosition: 'before',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'appliedWhiteListNumYear',
                    value:
                      data?.whitelistApplyInfo?.applyInfo
                        ?.appliedWhiteListNumYear,
                    formItemIndex: 1,
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
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_appliedWhiteListUpNumYear_714535',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '当年白名单申请上线次数（次）',
                    basicStatus: 4,
                    size: 'default',
                    selfSpan: '',
                    labelCol: '6',
                    wrapperCol: 18,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipContent: '',
                    tipPlacement: 'top',
                    prefixIconPosition: 'before',
                    postfix: '',
                    postfixIconPosition: 'before',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'appliedWhiteListUpNumYear',
                    value:
                      data?.whitelistApplyInfo?.applyInfo
                        ?.appliedWhiteListUpNumYear,
                    formItemIndex: 2,
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
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_appliedWhiteListDay_8230675',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '白名单申请天数',
                    basicStatus: 4,
                    size: 'default',
                    selfSpan: '',
                    labelCol: '6',
                    wrapperCol: 18,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipContent: '',
                    tipPlacement: 'top',
                    prefixIconPosition: 'before',
                    postfix: '',
                    postfixIconPosition: 'before',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'appliedWhiteListDay',
                    value:
                      data?.whitelistApplyInfo?.applyInfo?.appliedWhiteListDay,
                    formItemIndex: 3,
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
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_predictEffectiveTime_4897933',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '预计白名单生效时间',
                    basicStatus: 4,
                    size: 'default',
                    selfSpan: '',
                    labelCol: '6',
                    wrapperCol: 18,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipContent: '',
                    tipPlacement: 'top',
                    prefixIconPosition: 'before',
                    postfix: '',
                    postfixIconPosition: 'before',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'predictEffectiveTime',
                    value:
                      data?.whitelistApplyInfo?.applyInfo?.predictEffectiveTime,
                    formItemIndex: 4,
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
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_predictDeadTime_523525',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '预计白名单失效时间',
                    basicStatus: 4,
                    size: 'default',
                    selfSpan: '',
                    labelCol: '6',
                    wrapperCol: 18,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipContent: '',
                    tipPlacement: 'top',
                    prefixIconPosition: 'before',
                    postfix: '',
                    postfixIconPosition: 'before',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'predictDeadTime',
                    value: data?.whitelistApplyInfo?.applyInfo?.predictDeadTime,
                    formItemIndex: 5,
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
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_arrearsReason_883225',
                  label: '文本框',
                  compName: 'TextArea',
                  type: 'TextArea',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '欠费原因',
                    selfSpan: 24,
                    labelCol: '3',
                    wrapperCol: 21,
                    basicStatus: 4,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipPlacement: 'top',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'arrearsReason',
                    value: data?.whitelistApplyInfo?.applyInfo?.arrearsReason,
                    formItemIndex: 6,
                  },
                  style: {},
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'TextArea',
                  description: '',
                  image: '',
                  groupsName: '数据录入',
                  alias: 'DformInput',
                  setEvents: [],
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_collectionCondition_604802',
                  label: '文本框',
                  compName: 'TextArea',
                  type: 'TextArea',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '催缴情况',
                    selfSpan: 24,
                    labelCol: '3',
                    wrapperCol: 21,
                    basicStatus: 4,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipPlacement: 'top',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'collectionCondition',
                    value:
                      data?.whitelistApplyInfo?.applyInfo?.collectionCondition,
                    formItemIndex: 7,
                  },
                  style: {},
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'TextArea',
                  description: '',
                  image: '',
                  groupsName: '数据录入',
                  alias: 'DformInput',
                  setEvents: [],
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_riskAssessment_401639',
                  label: '文本框',
                  compName: 'TextArea',
                  type: 'TextArea',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '风险评估',
                    selfSpan: 24,
                    labelCol: '3',
                    wrapperCol: 21,
                    basicStatus: 4,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipPlacement: 'top',
                    required: false,
                    placeholder: '请输入',
                    fieldName: 'riskAssessment',
                    value: data?.whitelistApplyInfo?.applyInfo?.riskAssessment,
                    formItemIndex: 8,
                  },
                  style: {},
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'TextArea',
                  description: '',
                  image: '',
                  groupsName: '数据录入',
                  alias: 'DformInput',
                  setEvents: [],
                  busiObjectId: '',
                  isLabelDropBoxChild: false,
                  components: [],
                },
              ]}
              $$componentItem={{
                id: 'Form_51758',
                uid: 'Form_51758',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              onValuesChange={(changedFieldName: any, changedValue: any) => {
                const eventDatasetDataSource4: any = [
                  {
                    type: 'setDataSource',
                    dataId: 170539757105658880,
                    shielding: true,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '840493',
                      pageJsonId: '335152',
                      dataSourceId: 170539547965346660,
                      dataSourceName: 'whitelistApplyInfo',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          code: 'groupInfo',
                          children: [
                            {
                              code: 'belongCityText',
                              name: '归属地市',
                              type: 'string',
                              attrId: '741364',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'belongAreaText',
                              name: '归属区县',
                              type: 'string',
                              attrId: '3851782',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'customerCreditRate',
                              name: '客户征信等级',
                              type: 'string',
                              attrId: '7630833',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'groupName',
                              name: '集团名称',
                              type: 'string',
                              attrId: '121475',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'groupId',
                              name: '集团编码',
                              type: 'string',
                              attrId: '614026',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'groupBelongRegion',
                              name: '集团归属区域',
                              type: 'string',
                              attrId: '3630078',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'custManagerName',
                              name: '客户经理姓名',
                              type: 'string',
                              attrId: '7371296',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'custManagerPhone',
                              name: '客户经理联系电话',
                              type: 'string',
                              attrId: '2406421',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'custManagerCreditRate',
                              name: '客户经理征信等级',
                              type: 'string',
                              attrId: '931304',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'earliestOverdueYearMonth',
                              name: '最早欠费年月',
                              type: 'string',
                              attrId: '463414',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'totalArrearage',
                              name: '累计欠费（元）',
                              type: 'string',
                              attrId: '8045366',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'maxOverdueMonth',
                              name: '最大逾期月数 （月）',
                              type: 'string',
                              attrId: '5221567',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'cumulativeOverdueFee',
                              name: '累计逾期欠费（元）',
                              type: 'string',
                              attrId: '054733',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'predictPaymentWithinThreeMonnth',
                              name: '预计近3月回款（元）',
                              type: 'string',
                              attrId: '2394493',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'predictPaymentWithinYear',
                              name: '预计年内回款（元）',
                              type: 'string',
                              attrId: '248313',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'lastCollectionRequireYear',
                              name: '最近一次催缴要求',
                              type: 'string',
                              attrId: '492793',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'lastCollectionTimeYear',
                              name: '最近一次催缴时间（近一年）',
                              type: 'string',
                              attrId: '616069',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                            {
                              code: 'lastCollectionActionYear',
                              name: '最近一次催缴动作',
                              type: 'string',
                              attrId: '7271343',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-0',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '216953',
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
                                  attrId: '0891949',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'idNum',
                                  name: '证件号码',
                                  type: 'string',
                                  attrId: '779659',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'enterpriseName',
                                  name: '企业名称',
                                  type: 'string',
                                  attrId: '3528856',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'sameIdCumulativeArrearage',
                                  name: '同一证件号累计欠费（元）',
                                  type: 'string',
                                  attrId: '874624',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'sameIdOverdueArrearage',
                                  name: '同一证件号累计逾期欠费（元）',
                                  type: 'string',
                                  attrId: '427203',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'sameIdMaxOverdueMonth',
                                  name: '同一证件号最大逾期月数',
                                  type: 'string',
                                  attrId: '429399',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'sameIdProvinceArchiveGroupNum',
                                  name: '同一证件号省内建档集团数',
                                  type: 'string',
                                  attrId: '5200905',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'blacklistReason',
                                  name: '纳黑原因',
                                  type: 'string',
                                  attrId: '5271486',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-0',
                                  parentType: 'object',
                                  showInput: true,
                                },
                              ],
                              name: '',
                              type: 'object',
                              attrId: '694598',
                              initialData: { type: 'static' },
                              parentKey: '1-1',
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
                                  attrId: '855461',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  attrId: '854155',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'earliestOverdueYearMonth',
                                  name: '最早欠费年月',
                                  type: 'string',
                                  attrId: '874588',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'totalArrearage',
                                  name: '累计欠费（元）',
                                  type: 'string',
                                  attrId: '488039',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'maxOverdueMonth',
                                  name: '最大逾期月数（月）',
                                  type: 'string',
                                  attrId: '558712',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                                {
                                  code: 'cumulativeOverdueFee',
                                  name: '累计逾期欠费（元）',
                                  type: 'string',
                                  attrId: '569801',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1-1-1',
                                  parentType: 'objectArray',
                                  showInput: false,
                                },
                              ],
                              name: '',
                              type: 'objectArray',
                              attrId: '501243',
                              initialData: { type: 'static' },
                              parentKey: '1-1',
                              parentType: 'object',
                              showInput: true,
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '92023',
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
                              attrId: '928967',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'whitelistType',
                              },
                            },
                            {
                              code: 'appliedWhiteListNumYear',
                              name: '当年己申请白名单次数（次）',
                              type: 'string',
                              attrId: '76554',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'appliedWhiteListNumYear',
                              },
                            },
                            {
                              code: 'appliedWhiteListUpNumYear',
                              name: '当年白名单申请上线次数（次）',
                              type: 'string',
                              attrId: '796105',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'appliedWhiteListUpNumYear',
                              },
                            },
                            {
                              code: 'appliedWhiteListDay',
                              name: '白名单申请天数',
                              type: 'string',
                              attrId: '074037',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'appliedWhiteListDay',
                              },
                            },
                            {
                              code: 'predictEffectiveTime',
                              name: '预计白名单生效时间',
                              type: 'string',
                              attrId: '610521',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'predictEffectiveTime',
                              },
                            },
                            {
                              code: 'predictDeadTime',
                              name: '预计白名单失效时间',
                              type: 'string',
                              attrId: '195806',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'predictDeadTime',
                              },
                            },
                            {
                              code: 'arrearsReason',
                              name: '欠费原因',
                              type: 'string',
                              attrId: '089286',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'arrearsReason',
                              },
                            },
                            {
                              code: 'collectionCondition',
                              name: '催缴情况',
                              type: 'string',
                              attrId: '4220243',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'collectionCondition',
                              },
                            },
                            {
                              code: 'riskAssessment',
                              name: '风险评估',
                              type: 'string',
                              attrId: '196558',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1-2',
                              parentType: 'object',
                              showInput: true,
                              value: {
                                type: ['form', 'Form_51758', 'getFieldsValue'],
                                code: 'riskAssessment',
                              },
                            },
                          ],
                          name: '',
                          type: 'object',
                          attrId: '7956054',
                          initialData: { type: 'static' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource4.params =
                  [
                    {
                      title: '表单当前改变字段编码',
                      name: 'changedFieldName',
                      value: '$changedFieldName$',
                    },
                    {
                      title: '表单当前改变字段值',
                      name: 'changedValue',
                      value: '$changedValue$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatasetDataSource4,
                  { changedFieldName, changedValue },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_51758')}
              {...injectData}
            >
              <Input
                name={'白名单类型'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={18}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                fieldName={'whitelistType'}
                value={data?.whitelistApplyInfo?.applyInfo?.whitelistType}
                formItemIndex={0}
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
                  id: 'Input_whitelistType_868947',
                  uid: 'Input_whitelistType_868947',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_whitelistType_868947')
                }
                {...injectData}
              />
              <Input
                name={'当年已申请白名单次数'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'次'}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                fieldName={'appliedWhiteListNumYear'}
                value={
                  data?.whitelistApplyInfo?.applyInfo?.appliedWhiteListNumYear
                }
                formItemIndex={1}
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
                  id: 'Input_appliedWhiteListNumYear_1262595',
                  uid: 'Input_appliedWhiteListNumYear_1262595',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_appliedWhiteListNumYear_1262595',
                  )
                }
                {...injectData}
              />
              <Input
                name={'当年白名单申请上线次数'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={'次'}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                fieldName={'appliedWhiteListUpNumYear'}
                value={
                  data?.whitelistApplyInfo?.applyInfo?.appliedWhiteListUpNumYear
                }
                formItemIndex={2}
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
                  id: 'Input_appliedWhiteListUpNumYear_714535',
                  uid: 'Input_appliedWhiteListUpNumYear_714535',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_appliedWhiteListUpNumYear_714535',
                  )
                }
                {...injectData}
              />
              <Input
                name={'白名单申请天数'}
                size={'default'}
                selfSpan={''}
                labelCol={'6'}
                wrapperCol={18}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                fieldName={'appliedWhiteListDay'}
                value={data?.whitelistApplyInfo?.applyInfo?.appliedWhiteListDay}
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
                  id: 'Input_appliedWhiteListDay_8230675',
                  uid: 'Input_appliedWhiteListDay_8230675',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_appliedWhiteListDay_8230675')
                }
                {...injectData}
              />
              <Input
                name={'预计白名单生效时间'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                fieldName={'predictEffectiveTime'}
                value={
                  data?.whitelistApplyInfo?.applyInfo?.predictEffectiveTime
                }
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
                  id: 'Input_predictEffectiveTime_4897933',
                  uid: 'Input_predictEffectiveTime_4897933',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_predictEffectiveTime_4897933')
                }
                {...injectData}
              />
              <Input
                name={'预计白名单失效时间'}
                size={'default'}
                selfSpan={''}
                labelCol={'9'}
                wrapperCol={15}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                fieldName={'predictDeadTime'}
                value={data?.whitelistApplyInfo?.applyInfo?.predictDeadTime}
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
                  id: 'Input_predictDeadTime_523525',
                  uid: 'Input_predictDeadTime_523525',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_predictDeadTime_523525')
                }
                {...injectData}
              />
              <TextArea
                name={'欠费原因'}
                selfSpan={24}
                labelCol={'2'}
                wrapperCol={22}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                fieldName={'arrearsReason'}
                value={data?.whitelistApplyInfo?.applyInfo?.arrearsReason}
                formItemIndex={6}
                $$componentItem={{
                  id: 'Input_arrearsReason_883225',
                  uid: 'Input_arrearsReason_883225',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_arrearsReason_883225')
                }
                {...injectData}
              />
              <TextArea
                name={'催缴情况'}
                selfSpan={24}
                labelCol={'2'}
                wrapperCol={22}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                fieldName={'collectionCondition'}
                value={data?.whitelistApplyInfo?.applyInfo?.collectionCondition}
                formItemIndex={7}
                $$componentItem={{
                  id: 'Input_collectionCondition_604802',
                  uid: 'Input_collectionCondition_604802',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_collectionCondition_604802')
                }
                {...injectData}
              />
              <TextArea
                name={'风险评估'}
                selfSpan={24}
                labelCol={'2'}
                wrapperCol={22}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                placeholder={'请输入'}
                fieldName={'riskAssessment'}
                value={data?.whitelistApplyInfo?.applyInfo?.riskAssessment}
                formItemIndex={8}
                $$componentItem={{
                  id: 'Input_riskAssessment_401639',
                  uid: 'Input_riskAssessment_401639',
                  type: 'TextArea',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={true}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_riskAssessment_401639')
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

export default withPageHOC(BusiComp335152$$BusiComp, {
  pageId,
  hasLogin: true,
  defaultState: { whitelistApplyInfo: '' },
});
