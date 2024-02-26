// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Text, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1064091201462951936';
const ClsCp_0019_0004MultiPage$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode239: any = [
      {
        type: 'customActionCode',
        dataId: 170530644607858460,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '2618287',
          pageJsonId: '360551',
          code: 'function main(data,state,success,fail){var customObejct=(state===null||state===void 0?void 0:state.customObject)||{};data.multiGroup=(customObejct===null||customObejct===void 0?void 0:customObejct.multiGroup)||[];success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170530646219486820,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '856841',
              pageJsonId: '360551',
              dataSourceId: 170530551132951970,
              dataSourceName: 'multiGroup',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupId',
                  name: '集团编码',
                  type: 'string',
                  attrId: '66922',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'groupName',
                  name: '集团名称',
                  type: 'string',
                  attrId: '946229',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'groupCreditRate',
                  name: '集团征信等级',
                  type: 'string',
                  attrId: '241079',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'belongCityText',
                  name: '归属地市',
                  type: 'string',
                  attrId: '462274',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'belongAreaText',
                  name: '归属县市',
                  type: 'string',
                  attrId: '16076',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'customerType',
                  name: '客户类型',
                  type: 'string',
                  attrId: '6925415',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'institutionType',
                  name: '机构类型',
                  type: 'string',
                  attrId: '356947',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'industryCategory',
                  name: '行业大类',
                  type: 'string',
                  attrId: '648824',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'industrySubCategory',
                  name: '行业小类',
                  type: 'string',
                  attrId: '315015',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'custManagerName',
                  name: '客户经理姓名',
                  type: 'string',
                  attrId: '355292',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'custManagerPhone',
                  name: '客户经理联系电话',
                  type: 'string',
                  attrId: '9745943',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'custManagerCreditRate',
                  name: '客户经理征信等级',
                  type: 'string',
                  attrId: '087889',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'earliestOverdueTime',
                  name: '最早欠费时间',
                  type: 'string',
                  attrId: '016882',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'totalArrearage',
                  name: '累计欠费（元）',
                  type: 'string',
                  attrId: '406407',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'appliedWhiteListNum',
                  name: '已申请白名单次数（次）',
                  type: 'string',
                  attrId: '095969',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'maxOverdueMonth',
                  name: '最大逾期月数（月）',
                  type: 'string',
                  attrId: '620002',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'cumulativeOverdueFee',
                  name: '累计逾期欠费（元）',
                  type: 'string',
                  attrId: '905343',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'appliedWhiteListDay',
                  name: '已申请白名单天数（天）',
                  type: 'string',
                  attrId: '087033',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'maxArrearageBillItem',
                  name: '最大欠费账目项',
                  type: 'string',
                  attrId: '940689',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'maxArrearageBillItemFee',
                  name: '最大欠费账目项欠费（元）',
                  type: 'string',
                  attrId: '090045',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'lastCollectionRequireYear',
                  name: '最近一次催缴要求（近一年）',
                  type: 'string',
                  attrId: '427775',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'lastCollectionTimeYear',
                  name: '最近一次催缴时间（近一年）',
                  type: 'string',
                  attrId: '8913383',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                },
                {
                  code: 'lastCollectionActionYear',
                  name: '最近一次催缴动作（近一年）',
                  type: 'string',
                  attrId: '2995357',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
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
    eventDatacustomActionCode239.params = [] || [];
    CMDGenerator(eventDatacustomActionCode239, {}, 'customActionCode', {
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
      className="__CustomClass_360551__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_360551_1',
          uid: 'View_360551_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_360551_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_42937',
            uid: 'View_42937',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_42937')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_688274',
              uid: 'View_688274',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_688274')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: '#1890ff' }}
              $$componentItem={{
                id: 'View_159945',
                uid: 'View_159945',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_159945')}
              {...injectData}
            />
            <Text
              name={'集团信息'}
              content={'集团信息'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_173086',
                uid: 'Text_173086',
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
              ref={(r: any) => refs.setComponentRef(r, 'Text_173086')}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_1765626',
              uid: 'View_1765626',
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
              flex: 13,
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_1765626')}
            {...injectData}
          >
            <Text
              name={'集团信息风险提示'}
              content={'友情提醒：信控调整，谁经办谁负责，谁审批谁负责！'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_750665',
                uid: 'Text_750665',
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
              ref={(r: any) => refs.setComponentRef(r, 'Text_750665')}
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
              title: '集团名称',
              key: 'groupName',
              dataIndex: 'groupName',
              className: '',
              id: '8529543',
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
              id: '9517127',
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
              title: '归属地市',
              key: 'belongCityText',
              dataIndex: 'belongCityText',
              className: 'divider',
              id: '59483',
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
              title: '客户经理征信等级',
              key: 'custManagerCreditRate',
              dataIndex: 'custManagerCreditRate',
              className: 'divider',
              id: '365283',
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
              title: '集团征信等级',
              key: 'groupCreditRate',
              dataIndex: 'groupCreditRate',
              className: 'divider',
              id: '163422',
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
              title: '已申请白名单次数（次）',
              key: 'appliedWhiteListNum',
              dataIndex: 'appliedWhiteListNum',
              className: 'divider',
              id: '792713',
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
              title: '已申请白名单天数（天）',
              key: 'appliedWhiteListDay',
              dataIndex: 'appliedWhiteListDay',
              className: 'divider',
              id: '9886685',
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
              id: '272635',
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
              id: '92932892',
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
              id: '746839',
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
              title: '最近一次催缴要求（近一年）',
              key: 'lastCollectionRequireYear',
              dataIndex: 'lastCollectionRequireYear',
              className: 'divider',
              id: '886537',
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
              title: '最近一次催缴时间（近一年）',
              key: 'lastCollectionTimeYear',
              dataIndex: 'lastCollectionTimeYear',
              className: 'divider',
              id: '1517763',
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
              title: '最近一次催缴动作（近一年）',
              key: 'lastCollectionActionYear',
              dataIndex: 'lastCollectionActionYear',
              className: 'divider',
              id: '266366',
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
          dataSource={data?.multiGroup}
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
          dataSourceFromDataSourceConfig={'data.multiGroup'}
          $$componentItem={{
            id: 'Table_5017878',
            uid: 'Table_5017878',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          onRowDetail={(rowId: any, row: any, index: any) => {
            const eventDatashowCustomModal75: any = [
              {
                type: 'showCustomModal',
                dataId: 170530649544515970,
                options: {
                  compId: 'showCustomModal',
                  compName: 'page',
                  id: '1167074',
                  pageJsonId: '360551',
                  modalname: '/eyiqianfeijituanxinxi0363',
                  pageId: '1064096037923282944',
                  modalPath: '/eyiqianfeijituanxinxi0363',
                  paramsObj: { singleGroup: '$row$' },
                  paramsObjKeyValueMap: { singleGroup: '$row$' },
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatashowCustomModal75.params =
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
              eventDatashowCustomModal75,
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
          ref={(r: any) => refs.setComponentRef(r, 'Table_5017878')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0019_0004MultiPage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', multiGroup: '' },
});
