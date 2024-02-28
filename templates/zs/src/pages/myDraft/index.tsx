// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  HorizontalView,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '879998060900732928';
const MyDraft$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest504: any = [
      {
        type: 'apiRequest',
        dataId: 166142748824463700,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '040145',
          pageJsonId: '536217',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryMyDraftPage',
          _apiCode: 'qryMyDraftPage',
          _source: 'rhin',
          _serviceId: '880044238220644352',
          _serviceTitle: '我的草稿列表-hdb: qryMyDraftPage',
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
              dataKey: '040145_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '040145_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '040145_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'pageNum',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.pageNum',
                  compType: 'Input',
                  name: 'pageNum',
                  parents: ['body'],
                  id: 'body.pageNum',
                  dataKey: '040145_body.pageNum',
                  value: {
                    type: ['datasource', 'pageParam', 'data'],
                    code: 'pageNum',
                  },
                },
                {
                  code: 'instStatus',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.instStatus',
                  compType: 'Input',
                  name: 'instStatus',
                  parents: ['body'],
                  id: 'body.instStatus',
                  dataKey: '040145_body.instStatus',
                  value: {
                    type: ['datasource', 'pageParam', 'data'],
                    code: 'instStatus',
                  },
                },
                {
                  code: 'pageSize',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.pageSize',
                  compType: 'Input',
                  name: 'pageSize',
                  parents: ['body'],
                  id: 'body.pageSize',
                  dataKey: '040145_body.pageSize',
                  value: {
                    type: ['datasource', 'pageParam', 'data'],
                    code: 'pageSize',
                  },
                },
                {
                  code: 'createStaff',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.createStaff',
                  compType: 'Input',
                  name: 'createStaff',
                  parents: ['body'],
                  id: 'body.createStaff',
                  dataKey: '040145_body.createStaff',
                  value: {
                    type: ['datasource', 'pageParam', 'data'],
                    code: 'createStaff',
                  },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '040145_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 166142751905811460,
            options: {
              compId: 'Table_642395',
              compLib: 'comm',
              pageJsonId: '536217',
              compName: 'Table',
              id: '717935',
              data: '$reply_040145?.resultData.records$',
              total: '$reply_040145?.resultData.total$',
              current: '$reply_040145?.resultData.current$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166142763404179170,
            options: {
              compId: 'Table_642395',
              compLib: 'comm',
              pageJsonId: '536217',
              compName: 'Table',
              id: '709069',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDataapiRequest504.params = [] || [];
    CMDGenerator(eventDataapiRequest504, {}, 'apiRequest', {
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
      className="__CustomClass_536217__"
    >
      <View
        className="View_View_852562_1_890036"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_852562_1_890036',
          uid: 'View_852562_1_890036',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 0px',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_852562_1_890036')}
        {...injectData}
      >
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'我的草稿'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
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
            id: 'Card_3514477',
            uid: 'Card_3514477',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_3514477')}
          {...injectData}
        >
          <View
            className="View_View_221112"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_221112',
              uid: 'View_221112',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_221112')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              $$componentItem={{
                id: 'HorizontalView_6241587',
                uid: 'HorizontalView_6241587',
                type: 'HorizontalView',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                height: 'auto',
                overflowY: 'auto',
                justifyContent: 'space-between',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'HorizontalView_6241587')
              }
              {...injectData}
            >
              <Button
                name={'删除草稿'}
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
                  id: 'Button_844662',
                  uid: 'Button_844662',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelectedKey76: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 166148084149315140,
                      options: {
                        compId: 'Table_642395',
                        compLib: 'comm',
                        pageJsonId: '536217',
                        compName: 'Table',
                        id: '349262',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166148084694118880,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '438751',
                            pageJsonId: '536217',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'delByFormIds',
                            _apiCode: 'delByFormIds',
                            _source: 'rhin',
                            _serviceId: '880264543071637504',
                            _serviceTitle: '批量删除草稿信息-hdb: delByFormIds',
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
                                dataKey: '438751_header',
                                key: '0',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '438751_path',
                                key: '1',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '438751_query',
                                key: '2',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'instId',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.instId',
                                    compType: 'Input',
                                    parents: ['body'],
                                    id: 'body.instId',
                                    dataKey: '438751_body.instId',
                                    value: {
                                      type: ['customize'],
                                      code: '$JSON.stringify(selectedRowKeys_349262)$',
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-0',
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '438751_body',
                                key: '3',
                              },
                            ],
                            _sourceName: '批量删除草稿信息-hdb',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166202537136546600,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '677756',
                                pageJsonId: '536217',
                                type: 'success',
                                value: '批量删除成功',
                              },
                              line_number: 3,
                            },
                            {
                              type: 'getPageNum',
                              dataId: 166202429592425100,
                              options: {
                                compId: 'Table_642395',
                                compLib: 'comm',
                                pageJsonId: '536217',
                                compName: 'Table',
                                id: '2399938',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'apiRequest',
                                  dataId: 166202430419700600,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '980581',
                                    pageJsonId: '536217',
                                    sync: false,
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode: 'qryMyDraftPage',
                                    _apiCode: 'qryMyDraftPage',
                                    _source: 'rhin',
                                    _serviceId: '880044238220644352',
                                    _serviceTitle:
                                      '我的草稿列表-hdb: qryMyDraftPage',
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
                                        dataKey: '980581_header',
                                        key: '0',
                                      },
                                      {
                                        code: 'path',
                                        name: '请求路径参数',
                                        attrType: 'object',
                                        _id: 'path',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'path',
                                        dataKey: '980581_path',
                                        key: '1',
                                      },
                                      {
                                        code: 'query',
                                        name: 'URL 参数',
                                        attrType: 'object',
                                        _id: 'query',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'query',
                                        dataKey: '980581_query',
                                        key: '2',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'pageNum',
                                            attrType: 'field',
                                            type: 'long',
                                            mustFlag: 'F',
                                            _id: 'body.pageNum',
                                            compType: 'Input',
                                            name: 'pageNum',
                                            parents: ['body'],
                                            id: 'body.pageNum',
                                            dataKey: '980581_body.pageNum',
                                            value: {
                                              type: [
                                                'context',
                                                '$pageNum_2399938$',
                                              ],
                                              code: '',
                                            },
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-0',
                                          },
                                          {
                                            code: 'instStatus',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'body.instStatus',
                                            compType: 'Input',
                                            name: 'instStatus',
                                            parents: ['body'],
                                            id: 'body.instStatus',
                                            dataKey: '980581_body.instStatus',
                                            value: { type: [], code: '' },
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-1',
                                          },
                                          {
                                            code: 'pageSize',
                                            attrType: 'field',
                                            type: 'long',
                                            mustFlag: 'F',
                                            _id: 'body.pageSize',
                                            compType: 'Input',
                                            name: 'pageSize',
                                            parents: ['body'],
                                            id: 'body.pageSize',
                                            dataKey: '980581_body.pageSize',
                                            value: {
                                              type: [
                                                'datasource',
                                                'pageParam',
                                                'data',
                                              ],
                                              code: 'pageSize',
                                            },
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-2',
                                          },
                                          {
                                            code: 'createStaff',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'body.createStaff',
                                            compType: 'Input',
                                            name: 'createStaff',
                                            parents: ['body'],
                                            id: 'body.createStaff',
                                            dataKey: '980581_body.createStaff',
                                            value: {
                                              type: [
                                                'datasource',
                                                'pageParam',
                                                'data',
                                              ],
                                              code: 'createStaff',
                                            },
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-3',
                                          },
                                          {
                                            code: 'minCreateTime',
                                            name: '开始时间',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'body.minCreateTime',
                                            compType: 'Input',
                                            parents: ['body'],
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-4',
                                          },
                                        ],
                                        _id: 'body',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'body',
                                        dataKey: '980581_body',
                                        key: '3',
                                      },
                                    ],
                                    _sourceName: '我的草稿列表-hdb',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'reloadTableData',
                                      dataId: 166202430419702180,
                                      options: {
                                        compId: 'Table_642395',
                                        compLib: 'comm',
                                        pageJsonId: '536217',
                                        compName: 'Table',
                                        id: '7783604',
                                        data: '$reply_980581?.resultData.records$',
                                        total:
                                          '$reply_980581?.resultData.total$',
                                        current:
                                          '$reply_980581?.resultData.current$',
                                      },
                                      line_number: 6,
                                      callback1: [],
                                    },
                                  ],
                                  callback2: [],
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelectedKey76.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey76,
                    { e },
                    'getTableSelectedKey',
                    {
                      id: 'getTableSelectedKey',
                      name: 'getTableSelectedKey',
                      type: 'getTableSelectedKey',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_844662')}
                {...injectData}
              />
              <Button
                name={'返回首页'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'default'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_7872035',
                  uid: 'Button_7872035',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatahistory15: any = [
                    {
                      type: 'history',
                      dataId: 166995210069204480,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '232735',
                        pageJsonId: '536217',
                        type: 'replace',
                        pathname: '/auditStart',
                        selectedType: 'page',
                        pageId: '887537833022541824',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatahistory15.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatahistory15, { e }, 'history', {
                    id: 'history',
                    name: 'history',
                    type: 'history',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_7872035')}
                {...injectData}
              />
            </HorizontalView>
            <Table
              name={'total'}
              isFlexColumn={false}
              pageSize={10}
              current={data?.qryMyDraftPage?.resultData?.current}
              tableTitle={'表格名称'}
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
                  title: '审批单号',
                  key: 'busiInstNbr',
                  dataIndex: 'busiInstNbr',
                  className: '',
                  id: '8379017',
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
                  title: '工单主题',
                  key: 'instTitle',
                  dataIndex: 'instTitle',
                  className: 'divider',
                  id: '597352',
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
                  title: '发起人姓名',
                  key: 'createStaffName',
                  dataIndex: 'createStaffName',
                  className: 'divider',
                  id: '6353436',
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
                  title: '最后处理时间',
                  key: 'updateDate',
                  dataIndex: 'updateDate',
                  className: 'divider',
                  id: '847439',
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
                  key: 'createTime',
                  dataIndex: 'createTime',
                  className: 'divider',
                  id: '314103',
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
              rowKeyType={'specified'}
              editMode={'single'}
              selectType={'checkbox'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'checkbox' }}
              showHead={false}
              showTotal={true}
              showSizeChanger={false}
              showQuickJumper={true}
              pageSizeOptions={'[5,10,20]'}
              rowKey={'instId'}
              dataSource={data?.qryMyDraftPage?.resultData?.records}
              rowActions={[
                {
                  title: '处理',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'edit' },
                  type: 'edit',
                  id: '359426',
                  checked: true,
                },
                {
                  title: '删除',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'delete' },
                  type: 'delete',
                  id: '9904113',
                  checked: true,
                },
              ]}
              extend={[]}
              total={data?.qryMyDraftPage?.resultData?.total}
              fieldName={'data.qryMyDraftPage.resultData.total'}
              dataSourceFromDataSourceConfig={
                'data.qryMyDraftPage.resultData.records'
              }
              $$componentItem={{
                id: 'Table_642395',
                uid: 'Table_642395',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '10px 0px 0px 0px' }}
              onRowEdit={(rowId: any, row: any, index: any) => {
                const eventDatacustomActionCode743: any = [
                  {
                    type: 'customActionCode',
                    dataId: 166426582297691550,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '532412',
                      pageJsonId: '536217',
                      code: 'function main(data,state,success,fail){var msg=JSON.parse(row.content);var flowCode=msg.svcCont.data.content.flowInfo.flowCode;success(flowCode)};',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'history',
                        dataId: 16642659626989464,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '676009',
                          pageJsonId: '536217',
                          type: 'push',
                          pathname: '/auditOrderSubmit',
                          selectedType: 'page',
                          paramsObj: {
                            instId: '$rowId$',
                            scene: 'U',
                            flowCode: '$data_532412$',
                          },
                          paramsObjKeyValueMap: {
                            instId: '$rowId$',
                            scene: 'U',
                            flowCode: '$data_532412$',
                          },
                          pageId: '884057477263503360',
                          modalPath: '/auditOrderSubmit',
                        },
                        line_number: 2,
                      },
                      {
                        type: 'history',
                        dataId: 166996149457094050,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '3244976',
                          pageJsonId: '536217',
                          type: 'push',
                          pathname: '/auditOrderPrepare',
                          selectedType: 'page',
                          paramsObj: {
                            instId: '$rowId$',
                            scene: 'U',
                            flowCode: '$data_532412$',
                          },
                          paramsObjKeyValueMap: {
                            instId: '$rowId$',
                            scene: 'U',
                            flowCode: '$data_532412$',
                          },
                        },
                        line_number: 3,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode743.params =
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
                  eventDatacustomActionCode743,
                  { rowId, row, index },
                  'customActionCode',
                  {
                    id: 'customActionCode',
                    name: 'customActionCode',
                    type: 'customActionCode',
                    platform: 'pc',
                  },
                );
              }}
              onRowDelete={(rowId: any, row: any, index: any) => {
                const eventDatagetPageNum2: any = [
                  {
                    type: 'getPageNum',
                    dataId: 166202451908437570,
                    options: {
                      compId: 'Table_642395',
                      compLib: 'comm',
                      pageJsonId: '536217',
                      compName: 'Table',
                      id: '625279',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166202509759279230,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '126394',
                          pageJsonId: '536217',
                          value: ['$pageNum_625279$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 166202451908406750,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '086333',
                          pageJsonId: '536217',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'delDcFormById',
                          _apiCode: 'delDcFormById',
                          _source: 'rhin',
                          _serviceId: '880064407718551552',
                          _serviceTitle: '根据ID删除草稿-hdb: delDcFormById',
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
                              dataKey: '507013_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'dcFormId',
                                  name: '新增节点',
                                  attrType: 'object',
                                  _id: 'path.dcFormId',
                                  compType: 'Input',
                                  parents: ['path'],
                                  id: 'path.dcFormId',
                                  dataKey: '507013_path.dcFormId',
                                  value: {
                                    type: ['context', '$rowId$'],
                                    code: '',
                                  },
                                },
                              ],
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '507013_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '507013_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '507013_body',
                            },
                          ],
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166202451908475260,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '933392',
                              pageJsonId: '536217',
                              type: 'success',
                              value: '删除成功',
                            },
                            line_number: 4,
                          },
                          {
                            type: 'console',
                            dataId: 166202501005215740,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '6454757',
                              pageJsonId: '536217',
                              value: ['$pageNum_625279$'],
                            },
                            line_number: 5,
                          },
                          {
                            type: 'apiRequest',
                            dataId: 166202454694784060,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '783709',
                              pageJsonId: '536217',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'qryMyDraftPage',
                              _apiCode: 'qryMyDraftPage',
                              _source: 'rhin',
                              _serviceId: '880044238220644352',
                              _serviceTitle: '我的草稿列表-hdb: qryMyDraftPage',
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
                                  dataKey: '783709_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '783709_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '783709_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'pageNum',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'body.pageNum',
                                      compType: 'Input',
                                      name: 'pageNum',
                                      parents: ['body'],
                                      id: 'body.pageNum',
                                      dataKey: '783709_body.pageNum',
                                      value: {
                                        type: ['context', '$pageNum_625279$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      code: 'instStatus',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.instStatus',
                                      compType: 'Input',
                                      name: 'instStatus',
                                      parents: ['body'],
                                      id: 'body.instStatus',
                                      dataKey: '783709_body.instStatus',
                                      value: { type: [], code: '' },
                                    },
                                    {
                                      code: 'pageSize',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'body.pageSize',
                                      compType: 'Input',
                                      name: 'pageSize',
                                      parents: ['body'],
                                      id: 'body.pageSize',
                                      dataKey: '783709_body.pageSize',
                                      value: {
                                        type: [
                                          'datasource',
                                          'pageParam',
                                          'data',
                                        ],
                                        code: 'pageSize',
                                      },
                                    },
                                    {
                                      code: 'createStaff',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.createStaff',
                                      compType: 'Input',
                                      name: 'createStaff',
                                      parents: ['body'],
                                      id: 'body.createStaff',
                                      dataKey: '783709_body.createStaff',
                                      value: {
                                        type: [
                                          'datasource',
                                          'pageParam',
                                          'data',
                                        ],
                                        code: 'createStaff',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '783709_body',
                                },
                              ],
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 166202454694746460,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '192559',
                                  pageJsonId: '536217',
                                  value: ['页码：'],
                                },
                                line_number: 7,
                              },
                              {
                                type: 'console',
                                dataId: 166202454694785280,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '80252',
                                  pageJsonId: '536217',
                                  value: ['$pageNum_625279$'],
                                },
                                line_number: 8,
                              },
                              {
                                type: 'reloadTableData',
                                dataId: 166202454694789540,
                                options: {
                                  compId: 'Table_642395',
                                  compLib: 'comm',
                                  pageJsonId: '536217',
                                  compName: 'Table',
                                  id: '6071694',
                                  data: '$reply_783709?.resultData.records$',
                                  total: '$reply_783709?.resultData.total$',
                                  current: '$reply_783709?.resultData.current$',
                                },
                                line_number: 9,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetPageNum2.params =
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
                  eventDatagetPageNum2,
                  { rowId, row, index },
                  'getPageNum',
                  {
                    id: 'getPageNum',
                    name: 'getPageNum',
                    type: 'getPageNum',
                    platform: 'pc',
                  },
                );
              }}
              onRowDetail={(rowId: any, row: any, index: any) => {
                const eventDatahistory16: any = [
                  {
                    type: 'history',
                    dataId: 166150099440706530,
                    options: {
                      compId: 'history',
                      compName: 'system',
                      id: '439203',
                      pageJsonId: '536217',
                      type: 'push',
                      pathname: '/auditOrderSubmit',
                      selectedType: 'page',
                      paramsObj: { instId: '$rowId$', scene: 'V' },
                      paramsObjKeyValueMap: { instId: '$rowId$', scene: 'V' },
                      pageId: '884057477263503360',
                      modalPath: '/auditOrderSubmit',
                    },
                    line_number: 1,
                  },
                ];
                eventDatahistory16.params =
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
                  eventDatahistory16,
                  { rowId, row, index },
                  'history',
                  {
                    id: 'history',
                    name: 'history',
                    type: 'history',
                    platform: 'pc',
                  },
                );
              }}
              onPageChange={(page: any, pageSize: any) => {
                const eventDataapiRequest788: any = [
                  {
                    type: 'apiRequest',
                    dataId: 166202366195673470,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '215549',
                      pageJsonId: '536217',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qryMyDraftPage',
                      _apiCode: 'qryMyDraftPage',
                      _source: 'rhin',
                      _serviceId: '880044238220644352',
                      _serviceTitle: '我的草稿列表-hdb: qryMyDraftPage',
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
                          dataKey: '215549_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '215549_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '215549_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'pageNum',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.pageNum',
                              compType: 'Input',
                              name: 'pageNum',
                              parents: ['body'],
                              id: 'body.pageNum',
                              dataKey: '215549_body.pageNum',
                              value: {
                                type: ['context', '$page$'],
                                code: '',
                                hideAttr: true,
                              },
                            },
                            {
                              code: 'instStatus',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.instStatus',
                              compType: 'Input',
                              name: 'instStatus',
                              parents: ['body'],
                              id: 'body.instStatus',
                              dataKey: '215549_body.instStatus',
                              value: {
                                type: ['datasource', 'pageParam', 'data'],
                                code: 'instStatus',
                              },
                            },
                            {
                              code: 'pageSize',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.pageSize',
                              compType: 'Input',
                              name: 'pageSize',
                              parents: ['body'],
                              id: 'body.pageSize',
                              dataKey: '215549_body.pageSize',
                              value: {
                                type: ['context', '$pageSize$'],
                                code: '',
                                hideAttr: true,
                              },
                            },
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body'],
                              id: 'body.createStaff',
                              dataKey: '215549_body.createStaff',
                              value: {
                                type: ['datasource', 'pageParam', 'data'],
                                code: 'createStaff',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '215549_body',
                        },
                      ],
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'reloadTableData',
                        dataId: 166202366195698000,
                        options: {
                          compId: 'Table_642395',
                          compLib: 'comm',
                          pageJsonId: '536217',
                          compName: 'Table',
                          id: '9296524',
                          data: '$reply_215549?.resultData.records$',
                          total: '$reply_215549?.resultData.total$',
                          current: '$reply_215549?.resultData.current$',
                        },
                        line_number: 2,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest788.params =
                  [
                    {
                      title: '当前页码取值',
                      name: 'page',
                      value: '$page$',
                      attrType: 'number',
                    },
                    {
                      title: '当前页尺寸',
                      name: 'pageSize',
                      value: '$pageSize$',
                      attrType: 'number',
                    },
                  ] || [];
                CMDGenerator(
                  eventDataapiRequest788,
                  { page, pageSize },
                  'apiRequest',
                  {
                    id: 'apiRequest',
                    name: 'apiRequest',
                    type: 'apiRequest',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Table_642395')}
              {...injectData}
            />
          </View>
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(MyDraft$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
