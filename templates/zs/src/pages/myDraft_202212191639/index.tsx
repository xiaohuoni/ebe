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

const pageId = '922045372277719040';
const MyDraft_202212191639$$Page: React.FC<PageProps> = ({
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
  const refreshTable = (options_717548: any) => {
    const eventDatasetLoading22: any = [
      {
        type: 'setLoading',
        dataId: 169459666816151000,
        options: {
          compId: 'Table_642395_344859',
          compLib: 'comm',
          pageJsonId: '536217',
          compName: 'Table',
          id: '287871',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading22.params =
      [
        {
          title: '事件入参',
          name: 'options_717548',
          value: '$options_717548$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading22, { options_717548 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDataapiRequest59: any = [
      {
        type: 'apiRequest',
        dataId: 169459669748353540,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '874304',
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
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
                {
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.header',
                  dataKey: '874304_root.header',
                  key: '0-0',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '874304_root.path',
                  key: '0-1',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '874304_root.query',
                  key: '0-2',
                  parentType: 'object',
                  parentKey: '0',
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
                      _id: 'root.body.pageNum',
                      compType: 'Input',
                      name: 'pageNum',
                      parents: ['root', 'body'],
                      id: 'root.body.pageNum',
                      dataKey: '874304_root.body.pageNum',
                      value: { type: ['customize'], code: '1' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-3',
                    },
                    {
                      code: 'instStatus',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.instStatus',
                      compType: 'Input',
                      name: 'instStatus',
                      parents: ['root', 'body'],
                      id: 'root.body.instStatus',
                      dataKey: '874304_root.body.instStatus',
                      value: {
                        type: ['datasource', 'pageParam', 'data'],
                        code: 'instStatus',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'pageSize',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'root.body.pageSize',
                      compType: 'Input',
                      name: 'pageSize',
                      parents: ['root', 'body'],
                      id: 'root.body.pageSize',
                      dataKey: '874304_root.body.pageSize',
                      value: { type: ['customize'], code: '10' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                    {
                      code: 'createStaff',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.createStaff',
                      compType: 'Input',
                      name: 'createStaff',
                      parents: ['root', 'body'],
                      id: 'root.body.createStaff',
                      dataKey: '874304_root.body.createStaff',
                      value: {
                        type: ['datasource', 'pageParam', 'data'],
                        code: 'createStaff',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                    },
                    {
                      code: 'minCreateTime',
                      name: '开始时间',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.minCreateTime',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-4',
                      id: 'root.body.minCreateTime',
                      dataKey: '874304_root.body.minCreateTime',
                    },
                    {
                      code: 'instTitle',
                      name: '工单主题',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.instTitle',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-5',
                      id: 'root.body.instTitle',
                      dataKey: '874304_root.body.instTitle',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '874304_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '874304_root',
            },
          ],
          _sourceName: '我的草稿列表-hdb',
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 169459669748357100,
            options: {
              compId: 'Table_642395_344859',
              compLib: 'comm',
              pageJsonId: '536217',
              compName: 'Table',
              id: '851585',
              data: '$reply_874304?.resultData.records$',
              total: '$reply_874304?.resultData.total$',
              current: '$reply_874304?.resultData.current$',
            },
            line_number: 3,
            callback1: [],
          },
          {
            type: 'setLoading',
            dataId: 169459670232702620,
            options: {
              compId: 'Table_642395_344859',
              compLib: 'comm',
              pageJsonId: '536217',
              compName: 'Table',
              id: '86047',
              loading: false,
            },
            line_number: 4,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 169459676106254880,
            options: {
              compId: 'Table_642395_344859',
              compLib: 'comm',
              pageJsonId: '536217',
              compName: 'Table',
              id: '004134',
              loading: false,
            },
            line_number: 5,
          },
        ],
      },
    ];
    eventDataapiRequest59.params =
      [
        {
          title: '事件入参',
          name: 'options_717548',
          value: '$options_717548$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest59, { options_717548 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refreshTable,
  }));

  useEffect(() => {
    const eventDataapiRequest431: any = [
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
              dataKey: '040145_path',
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
              dataKey: '040145_query',
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
                  dataKey: '040145_body.pageNum',
                  value: {
                    type: ['datasource', 'pageParam', 'data'],
                    code: 'pageNum',
                  },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-3',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-2',
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
                {
                  code: 'instTitle',
                  name: '工单主题',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.instTitle',
                  compType: 'Input',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-5',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '040145_body',
              key: '3',
            },
          ],
          _sourceName: '我的草稿列表-hdb',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 167143928086981470,
            options: {
              compId: 'Table_642395_344859',
              compLib: 'comm',
              pageJsonId: '536217',
              compName: 'Table',
              id: '305583',
              data: '$reply_040145?.resultData.records$',
              total: '$reply_040145?.resultData.total$',
              current: '$reply_040145?.resultData.current$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest431.params = [] || [];
    CMDGenerator(eventDataapiRequest431, {}, 'apiRequest', {
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
        className="View_View_852562_1_890036_927504"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: '#ffffff' }}
        $$componentItem={{
          id: 'View_852562_1_890036_927504',
          uid: 'View_852562_1_890036_927504',
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
          overflowY: 'hidden',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_852562_1_890036_927504')}
        {...injectData}
      >
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'我的草稿'}
          bordered={true}
          size={'default'}
          hasHeader={false}
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
            id: 'Card_3514477_35607414',
            uid: 'Card_3514477_35607414',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'hidden',
            margin: '0 0 16px 0',
            height: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_3514477_35607414')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            $$componentItem={{
              id: 'HorizontalView_6241587_4818627',
              uid: 'HorizontalView_6241587_4818627',
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
              height: '0A',
              overflowY: 'auto',
              justifyContent: 'space-between',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_6241587_4818627')
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
                id: 'Button_844662_4472234',
                uid: 'Button_844662_4472234',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatagetTableSelectedKey70: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166148084149315140,
                    options: {
                      compId: 'Table_642395_344859',
                      compLib: 'comm',
                      pageJsonId: '536217',
                      compName: 'Table',
                      id: '349262',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '109569',
                            options: {
                              context: '$selectedRowKeys_349262$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169502254879992350,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 169502256615158400,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169502257168778750,
                                children: [],
                                todoOptions: ['msgType', 'value', 'duration'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '3514716',
                                  pageJsonId: '536217',
                                  type: 'info',
                                  value: '请先选择待删除草稿！',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                line_number: 9,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 169502257168778750,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '3514716',
                                  pageJsonId: '536217',
                                  type: 'info',
                                  value: '请先选择待删除草稿！',
                                },
                                line_number: 9,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showModal',
                            dataId: 169502313172785340,
                            options: {
                              compId: 'showModal',
                              compName: 'page',
                              id: '483354',
                              pageJsonId: '536217',
                              type: 'confirm',
                              title: '温馨提示',
                              content: '您确定要删除吗？',
                              okText: '确认',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 169502313872692480,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '81933',
                                  pageJsonId: '536217',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'delByFormIds',
                                  _apiCode: 'delByFormIds',
                                  _source: 'rhin',
                                  _serviceId: '880264543071637504',
                                  _serviceTitle:
                                    '批量删除草稿信息-hdb: delByFormIds',
                                  params: 'object',
                                  apiRequestSetParams: [
                                    {
                                      code: 'header',
                                      name: '请求头参数',
                                      attrType: 'object',
                                      _id: 'header',
                                      compType: 'Input',
                                      parents: ['root'],
                                      id: 'header',
                                      dataKey: '438751_header',
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-0',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: ['root'],
                                      id: 'path',
                                      dataKey: '438751_path',
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-1',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: ['root'],
                                      id: 'query',
                                      dataKey: '438751_query',
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-2',
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
                                          parents: ['root', 'body'],
                                          id: 'body.instId',
                                          dataKey: '438751_body.instId',
                                          value: {
                                            type: ['customize'],
                                            code: '$JSON.stringify(selectedRowKeys_349262)$',
                                          },
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: ['root'],
                                      id: 'body',
                                      dataKey: '438751_body',
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-3',
                                    },
                                  ],
                                  _sourceName: '批量删除草稿信息-hdb',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 169502313872688830,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '99155173',
                                      pageJsonId: '536217',
                                      type: 'success',
                                      value: '批量删除成功',
                                    },
                                    line_number: 5,
                                  },
                                  {
                                    type: 'getPageNum',
                                    dataId: 169502313872652930,
                                    options: {
                                      compId: 'Table_642395_344859',
                                      compLib: 'comm',
                                      pageJsonId: '536217',
                                      compName: 'Table',
                                      id: '82077',
                                    },
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'apiRequest',
                                        dataId: 169502313872691740,
                                        options: {
                                          compId: 'apiRequest',
                                          compName: 'system',
                                          id: '5240353',
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
                                                  dataKey:
                                                    '980581_body.pageNum',
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$pageNum_82077$',
                                                    ],
                                                    code: '',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '3',
                                                  key: '3-3',
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
                                                  dataKey:
                                                    '980581_body.instStatus',
                                                  value: { type: [], code: '' },
                                                  parentType: 'object',
                                                  parentKey: '3',
                                                  key: '3-0',
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
                                                  dataKey:
                                                    '980581_body.pageSize',
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
                                                  key: '3-1',
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
                                                  dataKey:
                                                    '980581_body.createStaff',
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
                                                  key: '3-2',
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
                                                {
                                                  code: 'instTitle',
                                                  name: '工单主题',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'body.instTitle',
                                                  compType: 'Input',
                                                  parents: ['body'],
                                                  parentType: 'object',
                                                  parentKey: '3',
                                                  key: '3-5',
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
                                        line_number: 7,
                                        callback1: [
                                          {
                                            type: 'reloadTableData',
                                            dataId: 169502313872640130,
                                            options: {
                                              compId: 'Table_642395_344859',
                                              compLib: 'comm',
                                              pageJsonId: '536217',
                                              compName: 'Table',
                                              id: '656043',
                                              data: '$reply_5240353?.resultData.records$',
                                              total:
                                                '$reply_5240353?.resultData.total$',
                                              current:
                                                '$reply_5240353?.resultData.current$',
                                            },
                                            line_number: 8,
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
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey70.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey70,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_844662_4472234')}
              {...injectData}
            />
            <Button
              name={'刷新'}
              shape={null}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              type={'default'}
              icon={{
                type: 'sync',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              iconType={'sync'}
              hasIcon={true}
              $$componentItem={{
                id: 'Button_240556',
                uid: 'Button_240556',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatacallSelfFunc535: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169502274431629860,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '302787',
                      pageJsonId: '536217',
                      customFuncName: 'refreshTable',
                      customFuncParams: 'object',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc535.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacallSelfFunc535, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_240556')}
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
                id: 'Button_7872035_800399',
                uid: 'Button_7872035_800399',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatahistory7: any = [
                  {
                    type: 'history',
                    dataId: 166995210069204480,
                    options: {
                      compId: 'history',
                      compName: 'system',
                      id: '232735',
                      pageJsonId: '536217',
                      type: 'push',
                      pathname: '/auditStart',
                      selectedType: 'page',
                    },
                    line_number: 1,
                  },
                ];
                eventDatahistory7.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatahistory7, { e }, 'history', {
                  id: 'history',
                  name: 'history',
                  type: 'history',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_7872035_800399')}
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
              id: 'Table_642395_344859',
              uid: 'Table_642395_344859',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode697: any = [
                {
                  type: 'customActionCode',
                  dataId: 166426582297691550,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '532412',
                    pageJsonId: '536217',
                    code: 'function main(data,state,success,fail){var msg=JSON.parse(row.content);success()};',
                  },
                  line_number: 1,
                  callback1: [
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
                          origin: '$state.origin$',
                          originTab: '$state.originTab$',
                        },
                        paramsObjKeyValueMap: {
                          instId: '$rowId$',
                          scene: 'U',
                          flowCode: '$data_532412$',
                          origin: '$state.origin$',
                          originTab: '$state.originTab$',
                        },
                        pageId: '884045146848604160',
                        modalPath: '/auditOrderPrepare',
                      },
                      line_number: 2,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode697.params =
                [
                  {
                    title: '行id',
                    name: 'rowId',
                    value: '$rowId$',
                    label: '行id',
                  },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                    label: '行对象',
                  },
                  {
                    title: '行索引',
                    name: 'index',
                    value: '$index$',
                    label: '行索引',
                  },
                ] || [];
              CMDGenerator(
                eventDatacustomActionCode697,
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
              const eventDatagetPageNum: any = [
                {
                  type: 'getPageNum',
                  dataId: 166202451908437570,
                  shielding: true,
                  options: {
                    compId: 'Table_642395_344859',
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
                      shielding: true,
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
                      shielding: true,
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
                            key: '0',
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
                                parentType: 'object',
                                parentKey: '1',
                                key: '1-0',
                              },
                            ],
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '507013_path',
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
                            dataKey: '507013_query',
                            key: '2',
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
                            key: '3',
                          },
                        ],
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 166202451908475260,
                          shielding: true,
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
                          shielding: true,
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
                          shielding: true,
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
                                dataKey: '783709_path',
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
                                dataKey: '783709_query',
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
                                    dataKey: '783709_body.pageNum',
                                    value: {
                                      type: ['context', '$pageNum_625279$'],
                                      code: '',
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-3',
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
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-0',
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
                                      type: ['datasource', 'pageParam', 'data'],
                                      code: 'pageSize',
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-1',
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
                                      type: ['datasource', 'pageParam', 'data'],
                                      code: 'createStaff',
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-2',
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
                                  {
                                    code: 'instTitle',
                                    name: '工单主题',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.instTitle',
                                    compType: 'Input',
                                    parents: ['body'],
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-5',
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '783709_body',
                                key: '3',
                              },
                            ],
                          },
                          line_number: 6,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 166202454694746460,
                              shielding: true,
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
                              shielding: true,
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
                              shielding: true,
                              options: {
                                compId: 'Table_642395_344859',
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
              eventDatagetPageNum.params =
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
                eventDatagetPageNum,
                { rowId, row, index },
                'getPageNum',
                {
                  id: 'getPageNum',
                  name: 'getPageNum',
                  type: 'getPageNum',
                  platform: 'pc',
                },
              );
              const eventDatagetPageNum1: any = [
                {
                  type: 'getPageNum',
                  dataId: 167143943980500100,
                  options: {
                    compId: 'Table_642395_344859',
                    compLib: 'comm',
                    pageJsonId: '536217',
                    compName: 'Table',
                    id: '85478',
                  },
                  line_number: 10,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 167143944559073660,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '369437',
                        pageJsonId: '536217',
                        value: ['$pageNum_85478$'],
                      },
                      line_number: 11,
                    },
                    {
                      type: 'apiRequest',
                      dataId: 167143945654427620,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '0242565',
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
                            key: '0',
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
                                parentType: 'object',
                                parentKey: '1',
                                key: '1-0',
                              },
                            ],
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '507013_path',
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
                            dataKey: '507013_query',
                            key: '2',
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
                            key: '3',
                          },
                        ],
                        _sourceName: '根据ID删除草稿-hdb',
                      },
                      line_number: 12,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 167143945654480450,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '98110906',
                            pageJsonId: '536217',
                            type: 'success',
                            value: '删除成功',
                          },
                          line_number: 13,
                        },
                        {
                          type: 'console',
                          dataId: 167143945654419600,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '0178525',
                            pageJsonId: '536217',
                            value: ['$pageNum_85478$'],
                          },
                          line_number: 14,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 167143945654409100,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '642684',
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
                                dataKey: '642684_header',
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
                                dataKey: '642684_path',
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
                                dataKey: '642684_query',
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
                                    dataKey: '642684_body.pageNum',
                                    value: {
                                      type: ['context', '$pageNum_85478$'],
                                      code: '',
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-3',
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
                                    dataKey: '642684_body.instStatus',
                                    value: { type: [], code: '' },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-0',
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
                                    dataKey: '642684_body.pageSize',
                                    value: {
                                      type: ['datasource', 'pageParam', 'data'],
                                      code: 'pageSize',
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-1',
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
                                    dataKey: '642684_body.createStaff',
                                    value: {
                                      type: ['datasource', 'pageParam', 'data'],
                                      code: 'createStaff',
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-2',
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
                                  {
                                    code: 'instTitle',
                                    name: '工单主题',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.instTitle',
                                    compType: 'Input',
                                    parents: ['body'],
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-5',
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '642684_body',
                                key: '3',
                              },
                            ],
                            _sourceName: '我的草稿列表-hdb',
                          },
                          line_number: 15,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 167143945654415680,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '455129',
                                pageJsonId: '536217',
                                value: ['页码：'],
                              },
                              line_number: 16,
                            },
                            {
                              type: 'console',
                              dataId: 167143945654458300,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '412606',
                                pageJsonId: '536217',
                                value: ['$pageNum_85478$'],
                              },
                              line_number: 17,
                            },
                            {
                              type: 'reloadTableData',
                              dataId: 167143967236791680,
                              options: {
                                compId: 'Table_642395_344859',
                                compLib: 'comm',
                                pageJsonId: '536217',
                                compName: 'Table',
                                id: '793089',
                                data: '$reply_642684?.resultData.records$',
                                total: '$reply_642684?.resultData.total$',
                                current: '$reply_642684?.resultData.current$',
                              },
                              line_number: 18,
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
              eventDatagetPageNum1.params =
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
                eventDatagetPageNum1,
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
              const eventDatahistory8: any = [
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
              eventDatahistory8.params =
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
                eventDatahistory8,
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
              const eventDatasetLoading207: any = [
                {
                  type: 'setLoading',
                  dataId: 169502280755366900,
                  options: {
                    compId: 'Table_642395_344859',
                    compLib: 'comm',
                    pageJsonId: '536217',
                    compName: 'Table',
                    id: '020199',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading207.params =
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
                eventDatasetLoading207,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDataapiRequest761: any = [
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
                        parents: ['root'],
                        id: 'header',
                        dataKey: '215549_header',
                        key: '0-0',
                        parentType: 'object',
                        parentKey: '0',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        _id: 'path',
                        compType: 'Input',
                        parents: ['root'],
                        id: 'path',
                        dataKey: '215549_path',
                        key: '0-1',
                        parentType: 'object',
                        parentKey: '0',
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        _id: 'query',
                        compType: 'Input',
                        parents: ['root'],
                        id: 'query',
                        dataKey: '215549_query',
                        key: '0-2',
                        parentType: 'object',
                        parentKey: '0',
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
                            parents: ['root', 'body'],
                            id: 'body.pageNum',
                            dataKey: '215549_body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              code: '',
                              hideAttr: true,
                            },
                            parentType: 'object',
                            parentKey: '0-3',
                            key: '0-3-0',
                          },
                          {
                            code: 'instStatus',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.instStatus',
                            compType: 'Input',
                            name: 'instStatus',
                            parents: ['root', 'body'],
                            id: 'body.instStatus',
                            dataKey: '215549_body.instStatus',
                            value: {
                              type: ['datasource', 'pageParam', 'data'],
                              code: 'instStatus',
                            },
                            parentType: 'object',
                            parentKey: '0-3',
                            key: '0-3-1',
                          },
                          {
                            code: 'pageSize',
                            attrType: 'field',
                            type: 'long',
                            mustFlag: 'F',
                            _id: 'body.pageSize',
                            compType: 'Input',
                            name: 'pageSize',
                            parents: ['root', 'body'],
                            id: 'body.pageSize',
                            dataKey: '215549_body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              code: '',
                              hideAttr: true,
                            },
                            parentType: 'object',
                            parentKey: '0-3',
                            key: '0-3-2',
                          },
                          {
                            code: 'createStaff',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.createStaff',
                            compType: 'Input',
                            name: 'createStaff',
                            parents: ['root', 'body'],
                            id: 'body.createStaff',
                            dataKey: '215549_body.createStaff',
                            value: {
                              type: ['datasource', 'pageParam', 'data'],
                              code: 'createStaff',
                            },
                            parentType: 'object',
                            parentKey: '0-3',
                            key: '0-3-3',
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
                            parents: ['root', 'body'],
                            parentType: 'object',
                            parentKey: '0-3',
                            key: '0-3-4',
                          },
                          {
                            code: 'instTitle',
                            name: '工单主题',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            defaultValue: '',
                            _id: 'body.instTitle',
                            compType: 'Input',
                            parents: ['root', 'body'],
                            parentType: 'object',
                            parentKey: '0-3',
                            key: '0-3-5',
                          },
                        ],
                        _id: 'body',
                        compType: 'Input',
                        parents: ['root'],
                        id: 'body',
                        dataKey: '215549_body',
                        key: '0-3',
                        parentType: 'object',
                        parentKey: '0',
                      },
                    ],
                    _sourceName: '我的草稿列表-hdb',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'reloadTableData',
                      dataId: 166202366195698000,
                      options: {
                        compId: 'Table_642395_344859',
                        compLib: 'comm',
                        pageJsonId: '536217',
                        compName: 'Table',
                        id: '9296524',
                        data: '$reply_215549?.resultData.records$',
                        total: '$reply_215549?.resultData.total$',
                        current: '$reply_215549?.resultData.current$',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 169502281895689470,
                          options: {
                            compId: 'Table_642395_344859',
                            compLib: 'comm',
                            pageJsonId: '536217',
                            compName: 'Table',
                            id: '31264104',
                            loading: false,
                          },
                          line_number: 4,
                        },
                      ],
                    },
                  ],
                  callback2: [
                    {
                      type: 'setLoading',
                      dataId: 169502282437078800,
                      options: {
                        compId: 'Table_642395_344859',
                        compLib: 'comm',
                        pageJsonId: '536217',
                        compName: 'Table',
                        id: '2529745',
                        loading: false,
                      },
                      line_number: 5,
                    },
                  ],
                },
              ];
              eventDataapiRequest761.params =
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
                eventDataapiRequest761,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_642395_344859')}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(MyDraft_202212191639$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { origin: '', originTab: '' },
});
