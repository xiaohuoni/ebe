// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Table,
  Form,
  Select,
  Input,
  Button,
  TextArea,
  HorizontalView,
  Text,
  Divider,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '914356829242146816';
const CacheRefreshManage$$Page: React.FC<PageProps> = ({
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
  const joinKey = (options_7521525: any) => {
    const eventDatacustomActionCode203: any = [
      {
        type: 'customActionCode',
        dataId: 167963962613241120,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '0825963',
          pageJsonId: '3764757',
          code: 'function main(data,state,success,fail){var key="";if(options_7521525.cacheType!=undefined&&options_7521525.cacheType!=null){key+=options_7521525.cacheType+":"}if(options_7521525.cacheKey!=undefined&&options_7521525.cacheKey!=null){key+=options_7521525.cacheKey}var obj={};obj.viewKey="APPROVE:"+key;obj.key=key;success(obj)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 167963970720436900,
            options: {
              compId: ['Input_6436985', 'Input_6953198'],
              compLib: 'comm',
              pageJsonId: '3764757',
              compName: 'Input',
              id: '293214',
              valueList: {
                Input_6436985: '$data_0825963.viewKey$',
                Input_6953198: '$data_0825963.key$',
              },
              compid: ['Input_6436985', 'Input_6953198'],
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode203.params =
      [
        {
          title: '事件入参',
          name: 'options_7521525',
          value: '$options_7521525$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode203,
      { options_7521525 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    joinKey,
  }));

  useEffect(() => {
    const eventDatacustomActionCode294: any = [
      {
        type: 'customActionCode',
        dataId: 166965328694633820,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '677906',
          pageJsonId: '3764757',
          code: 'function main(data,state,success,fail){var cacheList=[{"module":"\\u7CFB\\u7EDF\\u914D\\u7F6E\\u6570\\u636E","desc":"\\u7CFB\\u7EDF\\u914D\\u7F6E\\u6570\\u636E(SYS_CONFIG_INFO)","key":"CONFIG_INFO:\\u5206\\u7EC4\\u7F16\\u7801","keyValue":"CONFIG_INFO*"},{"module":"\\u89C4\\u683C\\u5C5E\\u6027","desc":"\\u89C4\\u683C\\u5C5E\\u6027(DC_ATTR_SPEC)","key":"ATTR_SPEC:\\u89C4\\u683C\\u7F16\\u7801","keyValue":"ATTR_SPEC*"},{"module":"\\u533A\\u57DF\\u6570\\u636E","desc":"\\u533A\\u57DF\\u6570\\u636E(DC_REGION)","key":"REGION:\\u533A\\u57DFID","keyValue":"REGION*"},{"module":"\\u573A\\u666F\\u6570\\u636E","desc":"\\u533A\\u57DF\\u6570\\u636E(DC_CATALOG)","key":"CATALOG:\\u573A\\u666F\\u7F16\\u7801","keyValue":"CATALOG*"},{"module":"\\u80FD\\u529B\\u5F00\\u653E\\u670D\\u52A1","desc":"\\u80FD\\u529B\\u5F00\\u653E\\u670D\\u52A1(DC_ABILITY_SERVICE)","key":"ABILITY_SERVICE:\\u670D\\u52A1\\u7F16\\u7801","keyValue":"ABILITY_SERVICE*"},{"module":"\\u573A\\u666F\\u8981\\u7D20","desc":"\\u6839\\u636E\\u573A\\u666F\\u7F16\\u7801\\u6E05\\u7A7A\\u573A\\u666F\\u4E0B\\u7684\\u573A\\u666F\\u8981\\u7D20\\u7F13\\u5B58","key":"SCENE_ATTR:\\u573A\\u666F\\u7F16\\u7801","keyValue":"SCENE_ATTR*"},{"module":"\\u767B\\u5F55\\u7528\\u6237\\u6570\\u636E","desc":"\\u5BF9\\u5DF2\\u767B\\u5F55\\u7684\\u7528\\u6237\\u8FDB\\u884C\\u767B\\u5F55\\u7F13\\u5B58\\u79FB\\u9664\\uFF0C\\u6B64\\u64CD\\u4F5C\\u4F1A\\u5F71\\u54CD\\u5F53\\u524D\\u5DF2\\u767B\\u5F55\\u7684\\u7528\\u6237\\uFF0C\\u8BF7\\u8C28\\u614E\\u64CD\\u4F5C\\uFF01\\uFF01\\uFF01\\n\\u5EFA\\u8BAE\\u5355\\u4E2A\\u7528\\u6237\\u7F13\\u5B58\\u6E05\\u7A7A\\uFF0C\\u4E00\\u952E\\u5237\\u65B0\\u8BF7\\u5728\\u975E\\u5DE5\\u4F5C\\u65F6\\u95F4\\u64CD\\u4F5C\\u3002","key":"USER_INFO:\\u767B\\u5F55\\u8D26\\u53F7","keyValue":"USER_INFO*"},{"module":"\\u4E00\\u952E\\u5237\\u65B0","desc":"\\u6E05\\u7A7A\\u6240\\u6709\\u5E26APPROVE\\u524D\\u7F00\\u7684KEY\\u7F13\\u5B58\\uFF0C\\u6B64\\u64CD\\u4F5C\\u4F1A\\u540C\\u65F6\\u6E05\\u9664\\u6240\\u6709\\u5DF2\\u767B\\u5F55\\u7684\\u7528\\u6237\\u7F13\\u5B58\\uFF0C\\u8BF7\\u8C28\\u614E\\u4F7F\\u7528\\uFF01\\uFF01\\uFF01","key":"","keyValue":""}];success(cacheList)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166972521618769500,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '1011892',
              pageJsonId: '3764757',
              dataSourceId: 166965287460181280,
              dataSourceName: 'local_vars',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '556327',
                  code: 'cacheTable',
                  name: '属性',
                  type: 'object',
                  initialData: { type: 'static' },
                  children: [
                    {
                      attrId: '042262',
                      code: 'cacheList',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      children: [
                        {
                          attrId: '074105',
                          code: 'module',
                          name: '模块',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'cacheList',
                          parentKey: 'cacheList',
                        },
                        {
                          attrId: '52202',
                          code: 'desc',
                          name: '描述',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'cacheList',
                          parentKey: 'cacheList',
                        },
                        {
                          attrId: '152605',
                          code: 'key',
                          name: '缓存key',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'cacheList',
                          parentKey: 'cacheList',
                        },
                      ],
                      parentKey: 'cacheTable',
                      value: { type: ['context', '$data_677906$'], code: '' },
                    },
                  ],
                  value: { type: [], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: false,
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
    eventDatacustomActionCode294.params = [] || [];
    CMDGenerator(eventDatacustomActionCode294, {}, 'customActionCode', {
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
      className="__CustomClass_3764757__"
    >
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
        $$componentItem={{
          id: 'View_3764757_1',
          uid: 'View_3764757_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_3764757_1')}
        {...injectData}
      >
        <Card
          name={'缓存列表'}
          cardIconType={'middle'}
          extendNum={3}
          title={'缓存列表'}
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
            id: 'Card_5833677',
            uid: 'Card_5833677',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_5833677')}
          {...injectData}
        >
          <Table
            name={'表格'}
            isFlexColumn={false}
            extendNum={5}
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
                title: '模块',
                key: 'module',
                dataIndex: 'module',
                className: '',
                id: '714808',
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
                title: '描述',
                key: 'desc',
                dataIndex: 'desc',
                className: 'divider',
                id: '1100586',
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
                title: '缓存key',
                key: 'key',
                dataIndex: 'key',
                className: 'divider',
                id: '3353596',
                editoption: { edittype: 'Input' },
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
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={true}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            dataSource={data?.local_vars?.cacheTable?.cacheList}
            rowActions={[
              {
                title: '编辑',
                iconPos: 'left',
                icon: '',
                type: 'edit',
                id: '601996',
                rule: 'row.key == ""',
                checked: true,
              },
            ]}
            extend={[
              {
                id: '743664',
                title: '按key刷新',
                iconPos: 'left',
                rule: 'row.key == ""',
                checked: true,
              },
              {
                id: '062396',
                title: '一键刷新',
                iconPos: 'left',
                checked: true,
              },
            ]}
            actionWidth={300}
            rowKey={undefined}
            dataSourceFromDataSourceConfig={
              'data.local_vars.cacheTable.cacheList'
            }
            $$componentItem={{
              id: 'Table_419514',
              uid: 'Table_419514',
              type: 'Table',
              ...componentItem,
            }}
            onClickBtn2={(rowId: any, row: any, index: any) => {
              const eventDataifelse534: any = [
                {
                  type: 'ifelse',
                  condition: [
                    {
                      condId: '410193',
                      options: { context: '$row.key$', operate: 'empty' },
                      conditionType: 'checkContextValue',
                      objType: 'system',
                      objId: 'sys',
                    },
                  ],
                  dataId: 166977693581800770,
                  elseIfs: [
                    {
                      dataName: 'elseIf',
                      dataId: 166977698806392300,
                      children: [
                        {
                          dataName: 'action',
                          dataId: 166977756479037660,
                          children: [
                            {
                              dataName: 'callback',
                              dataId: 166977756479097100,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 16697777445748892,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '781765',
                                    pageJsonId: '3764757',
                                    type: 'success',
                                    value: '刷新成功',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  elseIfs: [],
                                  line_number: 6,
                                },
                              ],
                              value: 'callback1',
                              params: [],
                              elseIfs: [],
                            },
                            {
                              dataName: 'callback',
                              dataId: 166977756479044300,
                              children: [],
                              value: 'callback2',
                              params: [],
                              elseIfs: [],
                            },
                          ],
                          todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '906807',
                            pageJsonId: '3764757',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'redisDeleteBatch',
                            _apiCode: 'redisDeleteBatch',
                            _source: 'rhin',
                            _serviceId: '914837695780524032',
                            _serviceTitle:
                              '缓存指定KEY清空-tsm: redisDeleteBatch',
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
                                dataKey: '854966_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '854966_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'keyRegex',
                                    name: '缓存key',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'query.keyRegex',
                                    compType: 'Input',
                                    parents: ['query'],
                                    id: 'query.keyRegex',
                                    dataKey: '854966_query.keyRegex',
                                    value: {
                                      type: ['context', '$row$'],
                                      hideAttr: false,
                                      code: 'keyValue',
                                    },
                                  },
                                ],
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '854966_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '854966_body',
                              },
                            ],
                          },
                          actionObjId: 'apiRequest',
                          actionObjName: 'system',
                          value: 'apiRequest',
                          elseIfs: [],
                          line_number: 5,
                        },
                      ],
                      condition: [],
                      desc: '指定Key一键刷新',
                      elseIfs: [],
                      callback: [
                        {
                          type: 'apiRequest',
                          dataId: 166977756479037660,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '906807',
                            pageJsonId: '3764757',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'redisDeleteBatch',
                            _apiCode: 'redisDeleteBatch',
                            _source: 'rhin',
                            _serviceId: '914837695780524032',
                            _serviceTitle:
                              '缓存指定KEY清空-tsm: redisDeleteBatch',
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
                                dataKey: '854966_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '854966_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'keyRegex',
                                    name: '缓存key',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'query.keyRegex',
                                    compType: 'Input',
                                    parents: ['query'],
                                    id: 'query.keyRegex',
                                    dataKey: '854966_query.keyRegex',
                                    value: {
                                      type: ['context', '$row$'],
                                      hideAttr: false,
                                      code: 'keyValue',
                                    },
                                  },
                                ],
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '854966_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '854966_body',
                              },
                            ],
                          },
                          line_number: 5,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 16697777445748892,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '781765',
                                pageJsonId: '3764757',
                                type: 'success',
                                value: '刷新成功',
                              },
                              line_number: 6,
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ],
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showModal',
                      dataId: 166977700502353760,
                      options: {
                        compId: 'showModal',
                        compName: 'page',
                        id: '6236073',
                        pageJsonId: '3764757',
                        type: 'confirm',
                        title: '系统提示',
                        content: '确定要清空所有带APPROVE前缀的KEY缓存么？',
                        okText: '确定',
                        cancelText: '取消',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166977700502314370,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '868816',
                            pageJsonId: '3764757',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'redisDeleteAll',
                            _apiCode: 'redisDeleteAll',
                            _source: 'rhin',
                            _serviceId: '914838277334392832',
                            _serviceTitle:
                              '缓存所有KEY清空-tsm: redisDeleteAll',
                            params: 'object',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166977773131199740,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '886042',
                                pageJsonId: '3764757',
                                type: 'success',
                                value: '刷新成功',
                              },
                              line_number: 4,
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
              eventDataifelse534.params =
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
                eventDataifelse534,
                { rowId, row, index },
                'ifelse',
                {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              const eventDataapiRequest796: any = [
                {
                  type: 'apiRequest',
                  dataId: 166972656766834400,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '580158',
                    pageJsonId: '3764757',
                    sync: false,
                    method: 'post',
                    url: '/app/rhin/gateway/callRhinEngine',
                    _capabilityCode: 'redisDeleteBatch',
                    _apiCode: 'redisDeleteBatch',
                    _source: 'rhin',
                    _serviceId: '914837695780524032',
                    _serviceTitle: '缓存指定KEY清空-tsm: redisDeleteBatch',
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
                        dataKey: '580158_header',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        _id: 'path',
                        compType: 'Input',
                        parents: [],
                        id: 'path',
                        dataKey: '580158_path',
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        children: [
                          {
                            code: 'keyRegex',
                            name: '缓存key',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            defaultValue: '',
                            _id: 'query.keyRegex',
                            compType: 'Input',
                            parents: ['query'],
                            id: 'query.keyRegex',
                            dataKey: '580158_query.keyRegex',
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'key',
                            },
                          },
                        ],
                        _id: 'query',
                        compType: 'Input',
                        parents: [],
                        id: 'query',
                        dataKey: '580158_query',
                      },
                      {
                        code: 'body',
                        name: '请求体',
                        attrType: 'object',
                        _id: 'body',
                        compType: 'Input',
                        parents: [],
                        id: 'body',
                        dataKey: '580158_body',
                      },
                    ],
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showMessage',
                      dataId: 166977779362236450,
                      options: {
                        compId: 'showMessage',
                        compName: 'system',
                        id: '6376747',
                        pageJsonId: '3764757',
                        type: 'success',
                        value: '刷新成功',
                      },
                      line_number: 2,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDataapiRequest796.params =
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
                eventDataapiRequest796,
                { rowId, row, index },
                'apiRequest',
                {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                },
              );
            }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDataeditInlineRow: any = [
                {
                  type: 'editInlineRow',
                  dataId: 166972664592045920,
                  options: {
                    compId: 'Table_419514',
                    compLib: 'comm',
                    pageJsonId: '3764757',
                    compName: 'Table',
                    id: '801783',
                    inlineeditrow: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDataeditInlineRow.params =
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
                eventDataeditInlineRow,
                { rowId, row, index },
                'editInlineRow',
                {
                  id: 'editInlineRow',
                  name: 'editInlineRow',
                  type: 'editInlineRow',
                  platform: 'pc',
                },
              );
            }}
            onBeforeInlineSave={(e: any, rowId: any, index: any) => {
              const eventDatasaveInlineRow: any = [
                {
                  type: 'saveInlineRow',
                  dataId: 166972665856082180,
                  options: {
                    compId: 'Table_419514',
                    compLib: 'comm',
                    pageJsonId: '3764757',
                    compName: 'Table',
                    id: '615923',
                  },
                  line_number: 1,
                },
              ];
              eventDatasaveInlineRow.params =
                [
                  {
                    title: '当前保存行数据',
                    name: 'e',
                    value: '$e$',
                    attrType: 'object',
                  },
                  { title: '当前保存行id', name: 'rowId', value: '$rowId$' },
                  { title: '当前保存行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatasaveInlineRow,
                { e, rowId, index },
                'saveInlineRow',
                {
                  id: 'saveInlineRow',
                  name: 'saveInlineRow',
                  type: 'saveInlineRow',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_419514')}
            {...injectData}
          />
        </Card>
        <Card
          name={'缓存查询'}
          cardIconType={'middle'}
          extendNum={3}
          title={'缓存查询'}
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
            id: 'Card_249558',
            uid: 'Card_249558',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_249558')}
          {...injectData}
        >
          <Form
            name={'缓存查询表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_8043725'}
            $$componentItem={{
              id: 'Form_8043725',
              uid: 'Form_8043725',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_8043725')}
            {...injectData}
          >
            <Select
              name={'缓存类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              formItemIndex={0}
              fieldName={'cacheType'}
              dataSource={[
                {
                  id: '451845',
                  label: '系统配置数据缓存',
                  value: 'CONFIG_INFO',
                },
                { id: '951306', label: '规格属性缓存', value: 'ATTR_SPEC' },
                { id: '9062888', label: '区域数据缓存', value: 'REGION' },
                { id: '0245806', label: '场景数据缓存', value: 'CATALOG' },
                { id: '848852', label: '场景要素缓存', value: 'SCENE_ATTR' },
                {
                  id: '2988116',
                  label: '能力开放服务缓存',
                  value: 'ABILITY_SERVICE',
                },
                { id: '4106595', label: '登录用户缓存', value: 'USER_INFO' },
              ]}
              $$componentItem={{
                id: 'Select_22474',
                uid: 'Select_22474',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetCurrentFormValues34: any = [
                  {
                    type: 'getCurrentFormValues',
                    dataId: 167964006230879140,
                    options: {
                      compId: 'Form_8043725',
                      compLib: 'comm',
                      pageJsonId: '3764757',
                      compName: 'Form',
                      id: '270861',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 167964007387936400,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '516161',
                          pageJsonId: '3764757',
                          customFuncName: 'joinKey',
                          customFuncParams: '$Form_8043725$',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetCurrentFormValues34.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetCurrentFormValues34,
                  { e },
                  'getCurrentFormValues',
                  {
                    id: 'getCurrentFormValues',
                    name: 'getCurrentFormValues',
                    type: 'getCurrentFormValues',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_22474')}
              {...injectData}
            />
            <Input
              name={'缓存key'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'cacheKey'}
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
                id: 'Input_9153166',
                uid: 'Input_9153166',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetCurrentFormValues35: any = [
                  {
                    type: 'getCurrentFormValues',
                    dataId: 167964010267239360,
                    options: {
                      compId: 'Form_8043725',
                      compLib: 'comm',
                      pageJsonId: '3764757',
                      compName: 'Form',
                      id: '040196',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 167964010851764480,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '3705812',
                          pageJsonId: '3764757',
                          customFuncName: 'joinKey',
                          customFuncParams: '$Form_8043725$',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetCurrentFormValues35.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatagetCurrentFormValues35,
                  { e },
                  'getCurrentFormValues',
                  {
                    id: 'getCurrentFormValues',
                    name: 'getCurrentFormValues',
                    type: 'getCurrentFormValues',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_9153166')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_670865',
                uid: 'View_670865',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 0,
                props: {
                  formItemIndex: 2,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 20px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_670865')}
              {...injectData}
            >
              <Button
                name={'查询'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                visible={true}
                type={'primary'}
                formItemIndex={3}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_9430177',
                  uid: 'Button_9430177',
                  type: 'Button',
                  ...componentItem,
                }}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatavalidateCurrentForm89: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 167964389528205060,
                      options: {
                        compId: 'Form_8043725',
                        compLib: 'comm',
                        pageJsonId: '3764757',
                        compName: 'Form',
                        id: '006083',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 167964390561792300,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '418565',
                            pageJsonId: '3764757',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'getCacheByKey',
                            _apiCode: 'getCacheByKey',
                            _source: 'rhin',
                            _serviceId: '956458224036098048',
                            _serviceTitle: '根据key查询缓存-tsm: getCacheByKey',
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
                                dataKey: '418565_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '418565_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'key',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'query.key',
                                    compType: 'Input',
                                    parents: ['query'],
                                    id: 'query.key',
                                    dataKey: '418565_query.key',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_8043725',
                                        'getFieldsValue',
                                      ],
                                      code: 'key',
                                    },
                                  },
                                ],
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '418565_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '418565_body',
                              },
                            ],
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setValue',
                              dataId: 167964397378978850,
                              options: {
                                compId: 'TextArea_204814',
                                compLib: 'comm',
                                pageJsonId: '3764757',
                                compName: 'TextArea',
                                id: '6403593',
                                valueList: {
                                  TextArea_204814: '$reply_418565?.resultData$',
                                },
                              },
                              line_number: 3,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatavalidateCurrentForm89.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatavalidateCurrentForm89,
                    { e },
                    'validateCurrentForm',
                    {
                      id: 'validateCurrentForm',
                      name: 'validateCurrentForm',
                      type: 'validateCurrentForm',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_9430177')}
                {...injectData}
              />
            </View>
            <Input
              name={'缓存键'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'viewKey'}
              disabled={true}
              visible={true}
              readOnly={false}
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
                id: 'Input_6436985',
                uid: 'Input_6436985',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_6436985')}
              {...injectData}
            />
            <Input
              name={'key'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'key'}
              formItemIndex={4}
              disabled={false}
              visible={false}
              readOnly={false}
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
                id: 'Input_6953198',
                uid: 'Input_6953198',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_6953198')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_169362',
                uid: 'View_169362',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 0,
                props: {
                  formItemIndex: 5,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_169362')}
              {...injectData}
            />
          </Form>
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_2205763',
              uid: 'View_2205763',
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
              margin: '20px 0px 0px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_2205763')}
            {...injectData}
          >
            <TextArea
              name={'文本框'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              disabled={false}
              visible={true}
              readOnly={true}
              fieldName={'value'}
              $$componentItem={{
                id: 'TextArea_204814',
                uid: 'TextArea_204814',
                type: 'TextArea',
                ...componentItem,
              }}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_204814')}
              {...injectData}
            />
          </View>
        </Card>
        <Card
          name={'特殊缓存刷新'}
          cardIconType={'middle'}
          extendNum={3}
          title={'特殊缓存刷新'}
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
            id: 'Card_958347',
            uid: 'Card_958347',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_958347')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'vertical'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={16}
            rowSpace={16}
            formCode={'Form_0294937'}
            $$componentItem={{
              id: 'Form_0294937',
              uid: 'Form_0294937',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_0294937')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              labelCol={8}
              wrapperCol={16}
              $$componentItem={{
                id: 'HorizontalView_3902025',
                uid: 'HorizontalView_3902025',
                type: 'HorizontalView',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 6,
                props: {
                  formItemIndex: 0,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                height: '100%',
                overflowY: 'auto',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'HorizontalView_3902025')
              }
              {...injectData}
            >
              <View
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_063018',
                  uid: 'View_063018',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '70%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_063018')}
                {...injectData}
              >
                <Text
                  name={'文本'}
                  content={'流程事件（环节新建后事件、流程结束事件）刷新'}
                  textType={'span'}
                  version={'1.0'}
                  visible={true}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_218923',
                    uid: 'Text_218923',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    fontSize: 12,
                    lineHeight: '24px',
                    color: '#1c242e',
                    textAlign: 'center',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Text_218923')}
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_334674',
                  uid: 'View_334674',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_334674')}
                {...injectData}
              >
                <Button
                  name={'刷新流程事件'}
                  shape={null}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'small'}
                  disabled={false}
                  visible={true}
                  type={'primary'}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_334436',
                    uid: 'Button_334436',
                    type: 'Button',
                    ...componentItem,
                  }}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDataapiRequest799: any = [
                      {
                        type: 'apiRequest',
                        dataId: 167706103274238000,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '481684',
                          pageJsonId: '3764757',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'SYS_reloadAllAttrSpecToCache',
                          _apiCode: 'reloadAllAttrSpecToCache',
                          _source: 'rhin',
                          _serviceId: '880731651817832448',
                          _serviceTitle:
                            '重新加载所有规格属性到缓存中-wy: reloadAllAttrSpecToCache',
                          params: 'object',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 167706128243513860,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '3481474',
                              pageJsonId: '3764757',
                              sync: false,
                              actionTitle: '',
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'refreshFlowLifecycleCondition',
                              _apiCode: 'refreshFlowLifecycleCondition',
                              _source: 'rhin',
                              _serviceId: '945625837159157760',
                              _serviceTitle:
                                '刷新流程事件缓存: refreshFlowLifecycleCondition',
                              params: 'object',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '477751',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_3481474?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 167706133204400700,
                                elseIfs: [],
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 167706135648491460,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '3807192',
                                      pageJsonId: '3764757',
                                      type: 'success',
                                      value: '刷新成功',
                                    },
                                    line_number: 4,
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
                    eventDataapiRequest799.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataapiRequest799, { e }, 'apiRequest', {
                      id: 'apiRequest',
                      name: 'apiRequest',
                      type: 'apiRequest',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_334436')}
                  {...injectData}
                />
              </View>
            </HorizontalView>
            <HorizontalView
              name={'左右布局'}
              labelCol={8}
              wrapperCol={16}
              $$componentItem={{
                id: 'HorizontalView_3902025_283213',
                uid: 'HorizontalView_3902025_283213',
                type: 'HorizontalView',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 6,
                props: {
                  formItemIndex: 1,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                height: '100%',
                overflowY: 'auto',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'HorizontalView_3902025_283213')
              }
              {...injectData}
            >
              <View
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_063018_9698747',
                  uid: 'View_063018_9698747',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '70%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_063018_9698747')}
                {...injectData}
              >
                <Text
                  name={'文本'}
                  content={'短信模板刷新'}
                  textType={'span'}
                  version={'1.0'}
                  visible={true}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_218923_530318',
                    uid: 'Text_218923_530318',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    fontSize: 12,
                    lineHeight: '24px',
                    color: '#1c242e',
                    textAlign: 'center',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_218923_530318')
                  }
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_334674_0541157',
                  uid: 'View_334674_0541157',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_334674_0541157')}
                {...injectData}
              >
                <Button
                  name={'刷新短信模板'}
                  shape={null}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'small'}
                  disabled={false}
                  visible={true}
                  type={'primary'}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_334436_327606',
                    uid: 'Button_334436_327606',
                    type: 'Button',
                    ...componentItem,
                  }}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDataapiRequest800: any = [
                      {
                        type: 'apiRequest',
                        dataId: 167714426222082750,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '215446',
                          pageJsonId: '3764757',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'loadAllSmsTemplateIntoCache',
                          _apiCode: 'loadAllSmsTemplateIntoCache',
                          _source: 'rhin',
                          _serviceId: '945973846669627392',
                          _serviceTitle:
                            '刷新所有短信模板缓存: loadAllSmsTemplateIntoCache',
                          params: 'object',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '477751',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_215446?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 167714426222073630,
                            elseIfs: [],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 167714426222079260,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '266834',
                                  pageJsonId: '3764757',
                                  type: 'success',
                                  value: '刷新成功',
                                },
                                line_number: 3,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDataapiRequest800.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataapiRequest800, { e }, 'apiRequest', {
                      id: 'apiRequest',
                      name: 'apiRequest',
                      type: 'apiRequest',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Button_334436_327606')
                  }
                  {...injectData}
                />
              </View>
            </HorizontalView>
          </Form>
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            visible={true}
            $$componentItem={{
              id: 'Divider_011072',
              uid: 'Divider_011072',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: '1px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Divider_011072')}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(CacheRefreshManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
