// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Text, View } from '@/components/factory';

import BusiComp734913 from '@/components/BusiComp734913';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0019_0004SinglePage$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode240: any = [
      {
        type: 'customActionCode',
        dataId: 170485628494774500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '226024',
          pageJsonId: '259116',
          code: 'function main(data,state,success,fail){var customObejct=(state===null||state===void 0?void 0:state.customObject)||{};data.singleGroup=(customObejct===null||customObejct===void 0?void 0:customObejct.singleGroup)||{};success()};',
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
              dataSourceId: 170530184480290980,
              dataSourceName: 'singleGroup',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupId',
                  name: '集团编码',
                  type: 'string',
                  attrId: '2445105',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'groupName',
                  name: '集团名称',
                  type: 'string',
                  attrId: '593173',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'groupCreditRate',
                  name: '集团征信等级',
                  type: 'string',
                  attrId: '534104',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'belongCityText',
                  name: '归属地市',
                  type: 'string',
                  attrId: '895383',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'belongAreaText',
                  name: '归属县市',
                  type: 'string',
                  attrId: '3735469',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'customerType',
                  name: '客户类型',
                  type: 'string',
                  attrId: '244185',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'institutionType',
                  name: '机构类型',
                  type: 'string',
                  attrId: '436705',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'industryCategory',
                  name: '行业大类',
                  type: 'string',
                  attrId: '634195',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'industrySubCategory',
                  name: '行业小类',
                  type: 'string',
                  attrId: '135576',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'custManagerName',
                  name: '客户经理姓名',
                  type: 'string',
                  attrId: '6748496',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'custManagerPhone',
                  name: '客户经理联系电话',
                  type: 'string',
                  attrId: '04085',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'custManagerCreditRate',
                  name: '客户经理征信等级',
                  type: 'string',
                  attrId: '909426',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'earliestOverdueTime',
                  name: '最早欠费时间',
                  type: 'string',
                  attrId: '240959',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'totalArrearage',
                  name: '累计欠费（元）',
                  type: 'string',
                  attrId: '412087',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'appliedWhiteListNum',
                  name: '已申请白名单次数（次）',
                  type: 'string',
                  attrId: '756872',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'maxOverdueMonth',
                  name: '最大逾期月数（月）',
                  type: 'string',
                  attrId: '0858926',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'cumulativeOverdueFee',
                  name: '累计逾期欠费（元）',
                  type: 'string',
                  attrId: '572691',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'appliedWhiteListDay',
                  name: '已申请白名单天数（天）',
                  type: 'string',
                  attrId: '098185',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'maxArrearageBillItem',
                  name: '最大欠费账目项',
                  type: 'string',
                  attrId: '560622',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'maxArrearageBillItemFee',
                  name: '最大欠费账目项欠费（元）',
                  type: 'string',
                  attrId: '1606879',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'lastCollectionRequireYear',
                  name: '最近一次催缴要求（近一年）',
                  type: 'string',
                  attrId: '129466',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'lastCollectionTimeYear',
                  name: '最近一次催缴时间（近一年）',
                  type: 'string',
                  attrId: '519123',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'lastCollectionActionYear',
                  name: '最近一次催缴动作（近一年）',
                  type: 'string',
                  attrId: '052648',
                  initialData: { type: 'static', value: '' },
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
    eventDatacustomActionCode240.params = [] || [];
    CMDGenerator(eventDatacustomActionCode240, {}, 'customActionCode', {
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
          <BusiComp734913
            busiCompId={'1064073224944443392'}
            name={'恶意欠费纳黑申请集团'}
            fieldName={'singleGroup'}
            busiCompStates={{ singleGroup: data?.singleGroup }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => (refs['BOFramer_454345'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0019_0004SinglePage$$Page, {
  pageId: '1064074962007056384',
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
