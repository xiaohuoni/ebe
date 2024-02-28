// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Card, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '912540533005234176';
const RejectOrderTrack$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest601: any = [
      {
        type: 'apiRequest',
        dataId: 166917451591238180,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '791868',
          pageJsonId: '915749',
          sync: true,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryRejectOrderList',
          _apiCode: 'qryRejectOrderList',
          _source: 'rhin',
          _serviceId: '910545169322487808',
          _serviceTitle:
            '通过审批单号查询销售中心关联的甩单列表信息-lzs: qryRejectOrderList',
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
              dataKey: '791868_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '791868_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '791868_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'gaapOrderNbr',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.gaapOrderNbr',
                  compType: 'Input',
                  name: 'gaapOrderNbr',
                  parents: ['body'],
                  id: 'body.gaapOrderNbr',
                  dataKey: '791868_body.gaapOrderNbr',
                  value: {
                    type: ['context', '$state.gaapOrderNbr$'],
                    code: '',
                  },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '791868_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166917504076374460,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '61427835',
              pageJsonId: '869027',
              dataSourceId: 166917320565985060,
              dataSourceName: 'rejectOrderList',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '30899',
                  code: 'surveyPreRequirementCode',
                  name: '甩单编码',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '656782',
                  code: 'prodNames',
                  name: '产品名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '990293',
                  code: 'statusCd',
                  name: '甩单状态',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '1494212',
                  code: 'createDate',
                  name: '创建时间',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              newData: '$reply_791868?.resultData.itemList$',
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest601.params = [] || [];
    CMDGenerator(eventDataapiRequest601, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_915749__"
    >
      <View
        className="View_View_915749_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_915749_1',
          uid: 'View_915749_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_915749_1')}
        {...injectData}
      >
        <View
          className="View_View_137881_333325"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_137881_333325',
            uid: 'View_137881_333325',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_137881_333325')}
          {...injectData}
        >
          <Card
            name={'甩单跟踪'}
            cardIconType={'middle'}
            extendNum={3}
            title={'甩单跟踪'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            visible={true}
            hasIcon={true}
            titleColor={'#1c242e'}
            headerColor={'#ffffff'}
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
              id: 'Card_278795_70218',
              uid: 'Card_278795_70218',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              padding: '0px 0px 0px 0px',
              overflowY: 'visible',
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_278795_70218')}
            {...injectData}
          >
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
                  title: '甩单编码',
                  key: 'surveyPreRequirementCode',
                  dataIndex: 'surveyPreRequirementCode',
                  className: '',
                  id: '536504',
                  customRendering:
                    '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：可以是 html 模板字符串 */function renderFunc(text, row, index) {  if (row.surveyPreRequirementCode == 2) {    return row.curFlowNodeName;  }  return text ? "".concat(text) : "";}',
                  originCustomRendering: [
                    '  /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '  if (row.surveyPreRequirementCode== 2) {',
                    '    return row.curFlowNodeName;',
                    '  } ',
                    '  return text ? "".concat(text) : ""',
                    '}',
                  ],
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
                  title: '产品名称',
                  key: 'prodNames',
                  dataIndex: 'prodNames',
                  className: 'divider',
                  id: '3804584',
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
                  title: '甩单状态',
                  key: 'statusCd',
                  dataIndex: 'statusCd',
                  className: 'divider',
                  id: '755811',
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
                  title: '创建时间',
                  key: 'createDate',
                  dataIndex: 'createDate',
                  className: 'divider',
                  id: '451744',
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
              rowKeyType={'specified'}
              visible={true}
              editMode={'single'}
              selectType={'checkbox'}
              bordered={'segmentation'}
              size={'default'}
              fixedAction={false}
              rowSelection={undefined}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              rowKey={'rowId'}
              dataSource={data?.rejectOrderList}
              rowActions={[]}
              extend={[
                {
                  id: '349388',
                  title: '展开',
                  iconPos: 'left',
                  icon: {
                    type: 'plus',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  },
                  isIcon: false,
                  checked: true,
                },
              ]}
              hiddenAction={false}
              dataSourceFromDataSourceConfig={'data.rejectOrderList'}
              $$componentItem={{
                id: 'Table_2774954_0326707',
                uid: 'Table_2774954_0326707',
                type: 'Table',
                ...componentItem,
              }}
              style={{ margin: '8px 8px 8px 8px' }}
              onClickBtn1={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal276: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166917266290546750,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '07183',
                      pageJsonId: '869027',
                      modalname: '/shuaidangongdanliebiao5529',
                      pageId: '912537179646603264',
                      paramsObj: {
                        surveyPreRequirementCode:
                          '$row.surveyPreRequirementCode$',
                        busiObjNbr: '$state.gaapOrderNbr$',
                      },
                      paramsObjKeyValueMap: {
                        surveyPreRequirementCode:
                          '$row.surveyPreRequirementCode$',
                        busiObjNbr: '$state.gaapOrderNbr$',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal276.params =
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
                  eventDatashowCustomModal276,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_2774954_0326707')}
              {...injectData}
            />
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(RejectOrderTrack$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { gaapOrderNbr: '' },
});
