// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  VerticalView,
  Card,
  Form,
  Input,
  Button,
  Table,
  Radio,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '885001905153683456';
const CommonIdeaManage$$Page: React.FC<PageProps> = ({
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
  const onLoadTable = (options_8835: any) => {
    const eventDatareloadDataSource31: any = [
      {
        type: 'reloadDataSource',
        dataId: 166671269282369630,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '367112',
          pageJsonId: '2540494',
          dataSourceId: 166261618174791140,
          dataSourceName: 'qryPageStaffHandleCommentByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '682967',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '505088',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '9737',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '7856545',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '2463258',
                  code: 'staffCode',
                  name: 'staffCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.staffCode',
                },
                {
                  attrId: '007913',
                  code: 'handleCommentCode',
                  name: 'handleCommentCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.handleCommentCode',
                  value: {
                    type: ['form', 'Form_3007486', 'getFieldsValue'],
                    code: 'handleCommentCode',
                  },
                },
                {
                  attrId: '692349',
                  code: 'handleComment',
                  name: 'handleComment',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.handleComment',
                  value: {
                    type: ['form', 'Form_3007486', 'getFieldsValue'],
                    code: 'handleComment',
                  },
                },
                {
                  attrId: '5884',
                  code: 'useCount',
                  name: 'useCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.useCount',
                },
                {
                  attrId: '615872',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['context', '$options_8835$'], code: '' },
                },
                {
                  attrId: '718043',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '191236',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '040013',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '005775',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '353668',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '56654',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '472075',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '931995',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '62025643',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '21552',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '9072746',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '99577',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '693228',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '922446',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '186428',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '327067',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '6993905',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0956507',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0740583',
                      code: 'staffCode',
                      name: 'staffCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '402267',
                      code: 'handleComment',
                      name: 'handleComment',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6206395',
                      code: 'handleCommentCode',
                      name: 'handleCommentCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8433864',
                      code: 'commentId',
                      name: 'commentId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '1386598',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8915063',
                      code: 'useCount',
                      name: 'useCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '55478',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4878094',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2348084',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource31.params =
      [{ title: '事件入参', name: 'options_8835', value: '$options_8835$' }] ||
      [];
    CMDGenerator(
      eventDatareloadDataSource31,
      { options_8835 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    onLoadTable,
  }));

  useEffect(() => {
    const eventDatareloadDataSource57: any = [
      {
        type: 'reloadDataSource',
        dataId: 166260735708445900,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '18699',
          pageJsonId: '2540494',
          dataSourceId: 166261618174791140,
          dataSourceName: 'qryPageStaffHandleCommentByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '682967',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '505088',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '9737',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '7856545',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '2463258',
                  code: 'staffCode',
                  name: 'staffCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.staffCode',
                },
                {
                  attrId: '007913',
                  code: 'handleCommentCode',
                  name: 'handleCommentCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.handleCommentCode',
                  value: {
                    type: ['form', 'Form_3007486', 'getFieldsValue'],
                    code: 'handleCommentCode',
                  },
                },
                {
                  attrId: '692349',
                  code: 'handleComment',
                  name: 'handleComment',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.handleComment',
                  value: {
                    type: ['form', 'Form_3007486', 'getFieldsValue'],
                    code: 'handleComment',
                  },
                },
                {
                  attrId: '5884',
                  code: 'useCount',
                  name: 'useCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.useCount',
                },
                {
                  attrId: '615872',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '718043',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '191236',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '040013',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '005775',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '353668',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '56654',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '472075',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '931995',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '62025643',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '21552',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '9072746',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '99577',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '693228',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '922446',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '186428',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '327067',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '6993905',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0956507',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0740583',
                      code: 'staffCode',
                      name: 'staffCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '402267',
                      code: 'handleComment',
                      name: 'handleComment',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6206395',
                      code: 'handleCommentCode',
                      name: 'handleCommentCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8433864',
                      code: 'commentId',
                      name: 'commentId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '1386598',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8915063',
                      code: 'useCount',
                      name: 'useCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '55478',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4878094',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2348084',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource57.params = [] || [];
    CMDGenerator(eventDatareloadDataSource57, {}, 'reloadDataSource', {
      id: 'reloadDataSource',
      name: 'reloadDataSource',
      type: 'reloadDataSource',
      platform: 'undefined',
    });
    const eventDatasetDisable65: any = [
      {
        type: 'setDisable',
        dataId: 166260737675396320,
        options: {
          compId: 'Form_984095',
          compLib: 'comm',
          pageJsonId: '2540494',
          compName: 'Form',
          id: '9180105',
          disabled: 'true',
        },
        line_number: 2,
      },
    ];
    eventDatasetDisable65.params = [] || [];
    CMDGenerator(eventDatasetDisable65, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable66: any = [
      {
        type: 'setDisable',
        dataId: 166260738195766340,
        options: {
          compId: 'Button_641249',
          compLib: 'comm',
          pageJsonId: '2540494',
          compName: 'Button',
          id: '75013',
          disabled: 'true',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable66.params = [] || [];
    CMDGenerator(eventDatasetDisable66, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable67: any = [
      {
        type: 'setDisable',
        dataId: 166260738588298800,
        options: {
          compId: 'Button_9864742',
          compLib: 'comm',
          pageJsonId: '2540494',
          compName: 'Button',
          id: '48687167',
          disabled: 'true',
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable67.params = [] || [];
    CMDGenerator(eventDatasetDisable67, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_2540494__"
    >
      <View
        className="View_View_2540494_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_2540494_1',
          uid: 'View_2540494_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '20px 20px 20px 20px',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_2540494_1')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_7691962',
            uid: 'VerticalView_7691962',
            type: 'VerticalView',
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
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_7691962')}
          {...injectData}
        >
          <View
            className="View_View_434019"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_434019',
              uid: 'View_434019',
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
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_434019')}
            {...injectData}
          >
            <Card
              name={'常用意见列表卡片'}
              cardIconType={'middle'}
              title={'常用意见列表'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '5633144',
                  title: '新增意见',
                  iconPos: 'left',
                  btnType: 'primary',
                },
                {
                  id: '446928',
                  title: '批量删除',
                  iconPos: 'left',
                  btnType: 'danger',
                },
              ]}
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
                id: 'Card_564259',
                uid: 'Card_564259',
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
              onClickBtn1={(e: any) => {
                const eventDatasetDataSource191: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166671078995710880,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '6391433',
                      pageJsonId: '2540494',
                      dataSourceId: 166260733389337470,
                      dataSourceName: 'local_vars',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '1857603',
                          code: 'operType',
                          name: '操作类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: { type: ['customize'], code: 'add' },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource191.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatasetDataSource191,
                  { e },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
                const forms130 = getFormByCompId('Form_984095', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms130) ? forms130 : [forms130]).forEach(
                  (form) => form?.resetFields(),
                );
                const eventDatasetDisable131: any = [
                  {
                    type: 'setDisable',
                    dataId: 166671080104743420,
                    options: {
                      compId: 'Form_984095',
                      compLib: 'comm',
                      pageJsonId: '2540494',
                      compName: 'Form',
                      id: '253247',
                    },
                    line_number: 3,
                  },
                ];
                eventDatasetDisable131.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable131, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable132: any = [
                  {
                    type: 'setDisable',
                    dataId: 166671080358104600,
                    options: {
                      compId: 'Button_641249',
                      compLib: 'comm',
                      pageJsonId: '2540494',
                      compName: 'Button',
                      id: '112557',
                    },
                    line_number: 4,
                  },
                ];
                eventDatasetDisable132.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable132, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable133: any = [
                  {
                    type: 'setDisable',
                    dataId: 166671080577092670,
                    options: {
                      compId: 'Button_9864742',
                      compLib: 'comm',
                      pageJsonId: '2540494',
                      compName: 'Button',
                      id: '1995953',
                    },
                    line_number: 5,
                  },
                ];
                eventDatasetDisable133.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable133, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
              }}
              onClickBtn2={(e: any) => {
                const eventDatagetTableSelectedKey72: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166671076654798850,
                    options: {
                      compId: 'Table_870854',
                      compLib: 'comm',
                      pageJsonId: '2540494',
                      compName: 'Table',
                      id: '236203',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166671076654788380,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '834173',
                          pageJsonId: '2540494',
                          value: ['$selectedRowKeys_236203$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '925962',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedRowKeys_236203.length$',
                              operate: '>',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166671076654733920,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166671076654894800,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166671076654887680,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '6246285',
                                  pageJsonId: '2540494',
                                  type: 'info',
                                  value: '请先选择要删除的常用意见！',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            desc: '已选 = 0',
                            elseIfs: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166671076654887680,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '6246285',
                                  pageJsonId: '2540494',
                                  type: 'info',
                                  value: '请先选择要删除的常用意见！',
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'showModal',
                            dataId: 166671076654738660,
                            options: {
                              compId: 'showModal',
                              compName: 'page',
                              id: '528053',
                              pageJsonId: '2540494',
                              type: 'confirm',
                              title: '系统提示',
                              okText: '确定',
                              cancelText: '取消',
                              content: '确定要删除已选记录！',
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 166671076654742180,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '87787698',
                                  pageJsonId: '2540494',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode:
                                    'delBatchDcStaffHandleComment',
                                  _apiCode: 'delBatchDcStaffHandleComment',
                                  _source: 'rhin',
                                  _serviceId: '884998802408910848',
                                  _serviceTitle:
                                    '常用意见批量删除-tsm: delBatchDcStaffHandleComment',
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
                                      dataKey: '460856_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '460856_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '460856_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'commentIds',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.commentIds',
                                          compType: 'Input',
                                          name: 'commentIds',
                                          parents: ['body'],
                                          id: 'body.commentIds',
                                          dataKey: '460856_body.commentIds',
                                          value: {
                                            type: ['customize'],
                                            code: '$JSON.stringify(selectedRowKeys_236203)$',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '460856_body',
                                    },
                                  ],
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '772011',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context:
                                            '$reply_87787698?.resultCode$',
                                          operate: '==',
                                          manualValue: '0',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 166671076654751300,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 166671076654830240,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166671076654837630,
                                            children: [],
                                            todoOptions: ['msgType', 'value'],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '6697974',
                                              pageJsonId: '2540494',
                                              type: 'error',
                                              value: '常用意见删除失败！',
                                            },
                                            actionObjId: 'showMessage',
                                            actionObjName: 'system',
                                            value: 'showMessage',
                                            elseIfs: [],
                                            line_number: 9,
                                          },
                                        ],
                                        condition: [],
                                        desc: 'resultCode != 0 失败',
                                        elseIfs: [],
                                        callback: [
                                          {
                                            type: 'showMessage',
                                            dataId: 166671076654837630,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '6697974',
                                              pageJsonId: '2540494',
                                              type: 'error',
                                              value: '常用意见删除失败！',
                                            },
                                            line_number: 9,
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'showMessage',
                                        dataId: 166671076654773760,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '707544',
                                          pageJsonId: '2540494',
                                          type: 'success',
                                          value: '常用意见删除成功！',
                                        },
                                        line_number: 7,
                                      },
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 166671281005343780,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '620834',
                                          pageJsonId: '2540494',
                                          customFuncName: 'onLoadTable',
                                        },
                                        line_number: 8,
                                        callback1: [],
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
                eventDatagetTableSelectedKey72.params =
                  [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey72,
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_564259')}
              {...injectData}
            >
              <Form
                name={'查询表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_3007486'}
                $$componentItem={{
                  id: 'Form_3007486',
                  uid: 'Form_3007486',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_3007486')}
                {...injectData}
              >
                <Input
                  name={'处理意见编码'}
                  size={'default'}
                  selfSpan={8}
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
                  formItemIndex={0}
                  fieldName={'handleCommentCode'}
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
                    id: 'Input_2264195',
                    uid: 'Input_2264195',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc574: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166671274163750560,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '7016504',
                          pageJsonId: '2540494',
                          customFuncName: 'onLoadTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc574.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc574,
                      { e },
                      'callSelfFunc',
                      {
                        id: 'callSelfFunc',
                        name: 'callSelfFunc',
                        type: 'callSelfFunc',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_2264195')}
                  {...injectData}
                />
                <Input
                  name={'处理意见'}
                  size={'default'}
                  selfSpan={8}
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
                  formItemIndex={1}
                  fieldName={'handleComment'}
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
                    id: 'Input_773189',
                    uid: 'Input_773189',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc575: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166671274971294270,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '528673',
                          pageJsonId: '2540494',
                          customFuncName: 'onLoadTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc575.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc575,
                      { e },
                      'callSelfFunc',
                      {
                        id: 'callSelfFunc',
                        name: 'callSelfFunc',
                        type: 'callSelfFunc',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_773189')}
                  {...injectData}
                />
                <View
                  className="View_View_480932"
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_480932',
                    uid: 'View_480932',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
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
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_480932')}
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
                    type={'primary'}
                    labelCol={8}
                    wrapperCol={16}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_006316',
                      uid: 'Button_006316',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      width: 'fit-content',
                      margin: '0px 20px 0px 20px',
                    }}
                    onClick={(e: any) => {
                      const eventDatacallSelfFunc576: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166671272797305340,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '6297955',
                            pageJsonId: '2540494',
                            customFuncName: 'onLoadTable',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc576.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc576,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_006316')}
                    {...injectData}
                  />
                  <Button
                    name={'重置'}
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
                      id: 'Button_825391',
                      uid: 'Button_825391',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const forms132 = getFormByCompId('Form_3007486', refs);
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms132) ? forms132 : [forms132]).forEach(
                        (form) => form?.resetFields(),
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_825391')}
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'常用意见表格'}
                isFlexColumn={false}
                pageSize={
                  data?.qryPageStaffHandleCommentByReq?.resultData?.size
                }
                current={
                  data?.qryPageStaffHandleCommentByReq?.resultData?.current
                }
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
                    title: '主键ID',
                    key: 'commentId',
                    dataIndex: 'commentId',
                    className: '',
                    id: '73663',
                    hiddenRule: '1',
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
                    title: '处理意见编码',
                    key: 'handleCommentCode',
                    dataIndex: 'handleCommentCode',
                    className: 'divider',
                    id: '662427',
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
                    title: '处理意见',
                    key: 'handleComment',
                    dataIndex: 'handleComment',
                    className: 'divider',
                    id: '8272816',
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
                    title: '使用次数',
                    key: 'useCount',
                    dataIndex: 'useCount',
                    className: 'divider',
                    id: '308974',
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
                    title: '创建人',
                    key: 'createStaffName',
                    dataIndex: 'createStaffName',
                    className: 'divider',
                    id: '791895',
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
                    id: '516224',
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
                fixedAction={true}
                rowSelection={{ type: 'checkbox' }}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
                pageSizeOptions={'[5,10,20]'}
                dataSource={
                  data?.qryPageStaffHandleCommentByReq?.resultData?.records
                }
                rowKey={'commentId'}
                fieldName={
                  'data.qryPageStaffHandleCommentByReq.resultData.total'
                }
                total={data?.qryPageStaffHandleCommentByReq?.resultData?.total}
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '066044',
                    checked: true,
                  },
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '243977',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '764149',
                    checked: true,
                  },
                ]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.qryPageStaffHandleCommentByReq.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_870854',
                  uid: 'Table_870854',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '20px 0px 0px 0px' }}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues28: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166260747661087070,
                      options: {
                        compId: 'Form_984095',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Form',
                        id: '01570784',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues28.params =
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
                    eventDatasetCurrentFormValues28,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable134: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260748537778270,
                      options: {
                        compId: 'Form_984095',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Form',
                        id: '098487',
                        disabled: 'true',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable134.params =
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
                    eventDatasetDisable134,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable135: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260749198496830,
                      options: {
                        compId: 'Button_641249',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Button',
                        id: '5358835',
                        disabled: 'true',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetDisable135.params =
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
                    eventDatasetDisable135,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable136: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260749718286750,
                      options: {
                        compId: 'Button_9864742',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Button',
                        id: '900811',
                        disabled: 'true',
                      },
                      line_number: 4,
                    },
                  ];
                  eventDatasetDisable136.params =
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
                    eventDatasetDisable136,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                }}
                onRowClick={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues29: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166260750886773020,
                      options: {
                        compId: 'Form_984095',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Form',
                        id: '0337873',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues29.params =
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
                    eventDatasetCurrentFormValues29,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable137: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260751575789060,
                      options: {
                        compId: 'Form_984095',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Form',
                        id: '30876',
                        disabled: 'true',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable137.params =
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
                    eventDatasetDisable137,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable138: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260751968489120,
                      options: {
                        compId: 'Button_641249',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Button',
                        id: '68939524',
                        disabled: 'true',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetDisable138.params =
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
                    eventDatasetDisable138,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable139: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260752476043600,
                      options: {
                        compId: 'Button_9864742',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Button',
                        id: '603045',
                        disabled: 'true',
                      },
                      line_number: 4,
                    },
                  ];
                  eventDatasetDisable139.params =
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
                    eventDatasetDisable139,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues30: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166260753632373700,
                      options: {
                        compId: 'Form_984095',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Form',
                        id: '971095',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues30.params =
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
                    eventDatasetCurrentFormValues30,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable140: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260754329705660,
                      options: {
                        compId: 'Form_984095',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Form',
                        id: '3042847',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable140.params =
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
                    eventDatasetDisable140,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable141: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260754717989220,
                      options: {
                        compId: 'Button_641249',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Button',
                        id: '817173',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetDisable141.params =
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
                    eventDatasetDisable141,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable142: any = [
                    {
                      type: 'setDisable',
                      dataId: 166260754951525150,
                      options: {
                        compId: 'Button_9864742',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Button',
                        id: '06883368',
                      },
                      line_number: 4,
                    },
                  ];
                  eventDatasetDisable142.params =
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
                    eventDatasetDisable142,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource192: any = [
                    {
                      type: 'setDataSource',
                      dataId: 166260755386122400,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '306019',
                        pageJsonId: '2540494',
                        dataSourceId: 166260733389337470,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '1857603',
                            code: 'operType',
                            name: '操作类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'mod' },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 5,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource192.params =
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
                    eventDatasetDataSource192,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                }}
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDataapiRequest766: any = [
                    {
                      type: 'apiRequest',
                      dataId: 166260757308031170,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '882944',
                        pageJsonId: '2540494',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'delDcStaffHandleCommentById',
                        _apiCode: 'delDcStaffHandleCommentById',
                        _source: 'rhin',
                        _serviceId: '884998433004060672',
                        _serviceTitle:
                          '常用意见删除-tsm: delDcStaffHandleCommentById',
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
                            dataKey: '882944_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            children: [
                              {
                                code: 'dcStaffHandleCommentId',
                                name: '主键ID',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'T',
                                defaultValue: '',
                                _id: 'path.dcStaffHandleCommentId',
                                compType: 'Input',
                                parents: ['path'],
                                id: 'path.dcStaffHandleCommentId',
                                dataKey: '882944_path.dcStaffHandleCommentId',
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
                            dataKey: '882944_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '882944_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '882944_body',
                          },
                        ],
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '3780072',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_882944?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166260759444686180,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166260761767380030,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166260762987059500,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '251052',
                                    pageJsonId: '2540494',
                                    type: 'error',
                                    value: '常用意见删除失败！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  elseIfs: [],
                                  line_number: 5,
                                },
                              ],
                              condition: [],
                              desc: 'resultCode = 0 删除失败',
                              elseIfs: [],
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166260762987059500,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '251052',
                                    pageJsonId: '2540494',
                                    type: 'error',
                                    value: '常用意见删除失败！',
                                  },
                                  line_number: 5,
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166260764527000500,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '865412',
                                pageJsonId: '2540494',
                                type: 'success',
                                value: '常用意见删除成功！',
                              },
                              line_number: 3,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166671276671364540,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '2203185',
                                pageJsonId: '2540494',
                                customFuncName: 'onLoadTable',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest766.params =
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
                    eventDataapiRequest766,
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
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatacallSelfFunc577: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166671282949658850,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '1188703',
                        pageJsonId: '2540494',
                        customFuncName: 'onLoadTable',
                        customFuncParams: '$page$',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc577.params =
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
                    eventDatacallSelfFunc577,
                    { page, pageSize },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Table_870854')}
                {...injectData}
              />
            </Card>
          </View>
          <View
            className="View_View_115754"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_115754',
              uid: 'View_115754',
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
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_115754')}
            {...injectData}
          >
            <Card
              name={'常用意见表单卡片'}
              cardIconType={'middle'}
              title={'常用意见表单'}
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
                id: 'Card_685316',
                uid: 'Card_685316',
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_685316')}
              {...injectData}
            >
              <Form
                name={'常用意见表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_984095'}
                $$componentItem={{
                  id: 'Form_984095',
                  uid: 'Form_984095',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_984095')}
                {...injectData}
              >
                <Input
                  name={'处理意见编码'}
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
                  formItemIndex={0}
                  fieldName={'handleCommentCode'}
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
                    id: 'Input_525853',
                    uid: 'Input_525853',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_525853')}
                  {...injectData}
                />
                <Input
                  name={'处理意见'}
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
                  fieldName={'handleComment'}
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
                    id: 'Input_856528',
                    uid: 'Input_856528',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_856528')}
                  {...injectData}
                />
                <Input
                  name={'使用次数'}
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
                  formItemIndex={2}
                  defaultValue={'0'}
                  fieldName={'useCount'}
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
                    id: 'Input_9043253',
                    uid: 'Input_9043253',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_9043253')}
                  {...injectData}
                />
                <Input
                  name={'主键ID'}
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
                  formItemIndex={3}
                  fieldName={'commentId'}
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
                    id: 'Input_585455',
                    uid: 'Input_585455',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_585455')}
                  {...injectData}
                />
                <Radio
                  name={'是否公开'}
                  radioType={'Radio'}
                  optionMarginRight={0}
                  selfSpan={''}
                  labelCol={8}
                  wrapperCol={16}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'bottomRight'}
                  required={true}
                  formItemIndex={4}
                  fieldName={'isPublic'}
                  defaultValue={'0'}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  tipContent={'否：该意见仅本人可见。是：所有人可见。'}
                  dataSource={[
                    { id: '629677', label: '是', value: '1' },
                    { id: '656528', label: '否', value: '0' },
                  ]}
                  $$componentItem={{
                    id: 'Radio_4618776',
                    uid: 'Radio_4618776',
                    type: 'Radio',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Radio_4618776')}
                  {...injectData}
                />
              </Form>
              <View
                className="View_View_994054"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_994054',
                  uid: 'View_994054',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  margin: '20px 0px 0px 0px',
                  textAlign: 'center',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_994054')}
                {...injectData}
              >
                <Button
                  name={'确定'}
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
                    id: 'Button_641249',
                    uid: 'Button_641249',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                  onClick={(e: any) => {
                    const eventDataifelse510: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '546317',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data.local_vars.operType$',
                              operate: '==',
                              manualValue: 'add',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166260815701021020,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166260818247226270,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166260839828240600,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166260839828209440,
                                    children: [
                                      {
                                        dataName: 'condition',
                                        dataId: 166260842821180220,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166260842821160770,
                                            children: [],
                                            todoOptions: ['msgType', 'value'],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '323977',
                                              pageJsonId: '2540494',
                                              type: 'success',
                                              value: '常用意见修改成功！',
                                            },
                                            actionObjId: 'showMessage',
                                            actionObjName: 'system',
                                            value: 'showMessage',
                                            elseIfs: [],
                                            line_number: 13,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166260842821155460,
                                            children: [],
                                            todoOptions: [],
                                            options: {
                                              compId: 'Form_984095',
                                              compLib: 'comm',
                                              pageJsonId: '2540494',
                                              compName: 'Form',
                                              id: '984547',
                                            },
                                            actionObjId: 'Form_984095',
                                            actionObjName: 'Form',
                                            value: 'resetCurrentForm',
                                            compLib: 'comm',
                                            elseIfs: [],
                                            line_number: 14,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166260842821176640,
                                            children: [],
                                            todoOptions: ['disabled'],
                                            options: {
                                              compId: 'Form_984095',
                                              compLib: 'comm',
                                              pageJsonId: '2540494',
                                              compName: 'Form',
                                              id: '3584296',
                                              disabled: 'true',
                                            },
                                            actionObjId: 'Form_984095',
                                            actionObjName: 'Form',
                                            value: 'setDisable',
                                            compLib: 'comm',
                                            elseIfs: [],
                                            line_number: 15,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166260842821144420,
                                            children: [],
                                            todoOptions: ['disabled'],
                                            options: {
                                              compId: 'Button_641249',
                                              compLib: 'comm',
                                              pageJsonId: '2540494',
                                              compName: 'Button',
                                              id: '430749',
                                              disabled: 'true',
                                            },
                                            actionObjId: 'Button_641249',
                                            actionObjName: 'Button',
                                            value: 'setDisable',
                                            compLib: 'comm',
                                            elseIfs: [],
                                            line_number: 16,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166260842821192930,
                                            children: [],
                                            todoOptions: ['disabled'],
                                            options: {
                                              compId: 'Button_9864742',
                                              compLib: 'comm',
                                              pageJsonId: '2540494',
                                              compName: 'Button',
                                              id: '804313',
                                              disabled: 'true',
                                            },
                                            actionObjId: 'Button_9864742',
                                            actionObjName: 'Button',
                                            value: 'setDisable',
                                            compLib: 'comm',
                                            elseIfs: [],
                                            line_number: 17,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166671279865207460,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166671279865286530,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 166671279865262430,
                                                children: [],
                                                value: 'callback2',
                                                params: [],
                                              },
                                            ],
                                            todoOptions: [
                                              'customFuncName',
                                              'customFuncParams',
                                            ],
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '525714',
                                              pageJsonId: '2540494',
                                              customFuncName: 'onLoadTable',
                                            },
                                            actionObjId: 'callSelfFunc',
                                            actionObjName: 'system',
                                            value: 'callSelfFunc',
                                            line_number: 18,
                                          },
                                        ],
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 166260842821123870,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166260842821170530,
                                                children: [],
                                                todoOptions: [
                                                  'msgType',
                                                  'value',
                                                ],
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '593541',
                                                  pageJsonId: '2540494',
                                                  type: 'error',
                                                  value: '常用意见修改失败！',
                                                },
                                                actionObjId: 'showMessage',
                                                actionObjName: 'system',
                                                value: 'showMessage',
                                                elseIfs: [],
                                                line_number: 19,
                                              },
                                            ],
                                            condition: [],
                                            desc: 'resultCode != 0 修改失败',
                                            elseIfs: [],
                                            callback: [
                                              {
                                                type: 'showMessage',
                                                dataId: 166260842821170530,
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '593541',
                                                  pageJsonId: '2540494',
                                                  type: 'error',
                                                  value: '常用意见修改失败！',
                                                },
                                                line_number: 19,
                                              },
                                            ],
                                          },
                                        ],
                                        condition: [
                                          {
                                            options: {
                                              useManual: true,
                                              useObject: false,
                                              context:
                                                '$reply_205833?.resultCode$',
                                              operate: '==',
                                              manualValue: '0',
                                            },
                                            condId: '479063',
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        desc: 'resultCode = 0 修改成功',
                                        line_number: 12,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166260839828201300,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
                                  },
                                ],
                                todoOptions: [
                                  'actionTitle',
                                  'sync',
                                  'url',
                                  'params',
                                ],
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '205833',
                                  pageJsonId: '2540494',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'modDcStaffHandleComment',
                                  _apiCode: 'modDcStaffHandleComment',
                                  _source: 'rhin',
                                  _serviceId: '884998024860446720',
                                  _serviceTitle:
                                    '常用意见修改-tsm: modDcStaffHandleComment',
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
                                      dataKey: '205833_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '205833_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '205833_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'commentId',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.commentId',
                                          compType: 'Input',
                                          name: 'commentId',
                                          parents: ['body'],
                                          id: 'body.commentId',
                                          dataKey: '205833_body.commentId',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_984095',
                                              'validateFields',
                                            ],
                                            code: 'commentId',
                                          },
                                        },
                                        {
                                          code: 'handleCommentCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.handleCommentCode',
                                          compType: 'Input',
                                          name: 'handleCommentCode',
                                          parents: ['body'],
                                          id: 'body.handleCommentCode',
                                          dataKey:
                                            '205833_body.handleCommentCode',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_984095',
                                              'getFieldsValue',
                                            ],
                                            code: 'handleCommentCode',
                                          },
                                        },
                                        {
                                          code: 'handleComment',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.handleComment',
                                          compType: 'Input',
                                          name: 'handleComment',
                                          parents: ['body'],
                                          id: 'body.handleComment',
                                          dataKey: '205833_body.handleComment',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_984095',
                                              'getFieldsValue',
                                            ],
                                            code: 'handleComment',
                                          },
                                        },
                                        {
                                          code: 'useCount',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.useCount',
                                          compType: 'Input',
                                          name: 'useCount',
                                          parents: ['body'],
                                          id: 'body.useCount',
                                          dataKey: '205833_body.useCount',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_984095',
                                              'getFieldsValue',
                                            ],
                                            code: 'useCount',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '205833_body',
                                    },
                                  ],
                                },
                                actionObjId: 'apiRequest',
                                actionObjName: 'system',
                                value: 'apiRequest',
                                elseIfs: [],
                                line_number: 11,
                              },
                            ],
                            condition: [],
                            desc: 'operType = mod',
                            elseIfs: [],
                            callback: [
                              {
                                type: 'apiRequest',
                                dataId: 166260839828240600,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '205833',
                                  pageJsonId: '2540494',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'modDcStaffHandleComment',
                                  _apiCode: 'modDcStaffHandleComment',
                                  _source: 'rhin',
                                  _serviceId: '884998024860446720',
                                  _serviceTitle:
                                    '常用意见修改-tsm: modDcStaffHandleComment',
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
                                      dataKey: '205833_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '205833_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '205833_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'commentId',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.commentId',
                                          compType: 'Input',
                                          name: 'commentId',
                                          parents: ['body'],
                                          id: 'body.commentId',
                                          dataKey: '205833_body.commentId',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_984095',
                                              'validateFields',
                                            ],
                                            code: 'commentId',
                                          },
                                        },
                                        {
                                          code: 'handleCommentCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.handleCommentCode',
                                          compType: 'Input',
                                          name: 'handleCommentCode',
                                          parents: ['body'],
                                          id: 'body.handleCommentCode',
                                          dataKey:
                                            '205833_body.handleCommentCode',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_984095',
                                              'getFieldsValue',
                                            ],
                                            code: 'handleCommentCode',
                                          },
                                        },
                                        {
                                          code: 'handleComment',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.handleComment',
                                          compType: 'Input',
                                          name: 'handleComment',
                                          parents: ['body'],
                                          id: 'body.handleComment',
                                          dataKey: '205833_body.handleComment',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_984095',
                                              'getFieldsValue',
                                            ],
                                            code: 'handleComment',
                                          },
                                        },
                                        {
                                          code: 'useCount',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.useCount',
                                          compType: 'Input',
                                          name: 'useCount',
                                          parents: ['body'],
                                          id: 'body.useCount',
                                          dataKey: '205833_body.useCount',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_984095',
                                              'getFieldsValue',
                                            ],
                                            code: 'useCount',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '205833_body',
                                    },
                                  ],
                                },
                                line_number: 11,
                                callback1: [
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$reply_205833?.resultCode$',
                                          operate: '==',
                                          manualValue: '0',
                                        },
                                        condId: '479063',
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 166260842821180220,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 166260842821123870,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166260842821170530,
                                            children: [],
                                            todoOptions: ['msgType', 'value'],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '593541',
                                              pageJsonId: '2540494',
                                              type: 'error',
                                              value: '常用意见修改失败！',
                                            },
                                            actionObjId: 'showMessage',
                                            actionObjName: 'system',
                                            value: 'showMessage',
                                            elseIfs: [],
                                            line_number: 19,
                                          },
                                        ],
                                        condition: [],
                                        desc: 'resultCode != 0 修改失败',
                                        elseIfs: [],
                                        callback: [
                                          {
                                            type: 'showMessage',
                                            dataId: 166260842821170530,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '593541',
                                              pageJsonId: '2540494',
                                              type: 'error',
                                              value: '常用意见修改失败！',
                                            },
                                            line_number: 19,
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 12,
                                    callback1: [
                                      {
                                        type: 'showMessage',
                                        dataId: 166260842821160770,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '323977',
                                          pageJsonId: '2540494',
                                          type: 'success',
                                          value: '常用意见修改成功！',
                                        },
                                        line_number: 13,
                                      },
                                      {
                                        type: 'resetCurrentForm',
                                        dataId: 166260842821155460,
                                        options: {
                                          compId: 'Form_984095',
                                          compLib: 'comm',
                                          pageJsonId: '2540494',
                                          compName: 'Form',
                                          id: '984547',
                                        },
                                        line_number: 14,
                                      },
                                      {
                                        type: 'setDisable',
                                        dataId: 166260842821176640,
                                        options: {
                                          compId: 'Form_984095',
                                          compLib: 'comm',
                                          pageJsonId: '2540494',
                                          compName: 'Form',
                                          id: '3584296',
                                          disabled: 'true',
                                        },
                                        line_number: 15,
                                      },
                                      {
                                        type: 'setDisable',
                                        dataId: 166260842821144420,
                                        options: {
                                          compId: 'Button_641249',
                                          compLib: 'comm',
                                          pageJsonId: '2540494',
                                          compName: 'Button',
                                          id: '430749',
                                          disabled: 'true',
                                        },
                                        line_number: 16,
                                      },
                                      {
                                        type: 'setDisable',
                                        dataId: 166260842821192930,
                                        options: {
                                          compId: 'Button_9864742',
                                          compLib: 'comm',
                                          pageJsonId: '2540494',
                                          compName: 'Button',
                                          id: '804313',
                                          disabled: 'true',
                                        },
                                        line_number: 17,
                                      },
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 166671279865207460,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '525714',
                                          pageJsonId: '2540494',
                                          customFuncName: 'onLoadTable',
                                        },
                                        line_number: 18,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
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
                            type: 'apiRequest',
                            dataId: 166260818962648060,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '115279',
                              pageJsonId: '2540494',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'addDcStaffHandleComment',
                              _apiCode: 'addDcStaffHandleComment',
                              _source: 'rhin',
                              _serviceId: '884997745800904704',
                              _serviceTitle:
                                '常用意见新增-tsm: addDcStaffHandleComment',
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
                                  dataKey: '115279_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '115279_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '115279_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'staffCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.staffCode',
                                      compType: 'Input',
                                      name: 'staffCode',
                                      parents: ['body'],
                                      id: 'body.staffCode',
                                      dataKey: '115279_body.staffCode',
                                    },
                                    {
                                      code: 'handleCommentCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.handleCommentCode',
                                      compType: 'Input',
                                      name: 'handleCommentCode',
                                      parents: ['body'],
                                      id: 'body.handleCommentCode',
                                      dataKey: '115279_body.handleCommentCode',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_984095',
                                          'validateFields',
                                        ],
                                        code: 'handleCommentCode',
                                      },
                                    },
                                    {
                                      code: 'handleComment',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.handleComment',
                                      compType: 'Input',
                                      name: 'handleComment',
                                      parents: ['body'],
                                      id: 'body.handleComment',
                                      dataKey: '115279_body.handleComment',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_984095',
                                          'validateFields',
                                        ],
                                        code: 'handleComment',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '115279_body',
                                },
                              ],
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '6749365',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_115279?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166260823099568600,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166260825054998800,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166260826188723870,
                                        children: [],
                                        todoOptions: ['msgType', 'value'],
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '637479',
                                          pageJsonId: '2540494',
                                          type: 'error',
                                          value: '常用意见新增失败！',
                                        },
                                        actionObjId: 'showMessage',
                                        actionObjName: 'system',
                                        value: 'showMessage',
                                        elseIfs: [],
                                        line_number: 10,
                                      },
                                    ],
                                    condition: [],
                                    desc: 'resultCode != 0 新增失败',
                                    elseIfs: [],
                                    callback: [
                                      {
                                        type: 'showMessage',
                                        dataId: 166260826188723870,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '637479',
                                          pageJsonId: '2540494',
                                          type: 'error',
                                          value: '常用意见新增失败！',
                                        },
                                        line_number: 10,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166260827481106020,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '2205077',
                                      pageJsonId: '2540494',
                                      type: 'success',
                                      value: '常用意见新增成功！',
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'resetCurrentForm',
                                    dataId: 166260830803048320,
                                    options: {
                                      compId: 'Form_984095',
                                      compLib: 'comm',
                                      pageJsonId: '2540494',
                                      compName: 'Form',
                                      id: '899193',
                                    },
                                    line_number: 5,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166260831070142050,
                                    options: {
                                      compId: 'Form_984095',
                                      compLib: 'comm',
                                      pageJsonId: '2540494',
                                      compName: 'Form',
                                      id: '547168',
                                      disabled: 'true',
                                    },
                                    line_number: 6,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166260831602426720,
                                    options: {
                                      compId: 'Button_641249',
                                      compLib: 'comm',
                                      pageJsonId: '2540494',
                                      compName: 'Button',
                                      id: '423438',
                                      disabled: 'true',
                                    },
                                    line_number: 7,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166260832112143680,
                                    options: {
                                      compId: 'Button_9864742',
                                      compLib: 'comm',
                                      pageJsonId: '2540494',
                                      compName: 'Button',
                                      id: '591018',
                                      disabled: 'true',
                                    },
                                    line_number: 8,
                                  },
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166671279117444100,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '0073575',
                                      pageJsonId: '2540494',
                                      customFuncName: 'onLoadTable',
                                    },
                                    line_number: 9,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ];
                    eventDataifelse510.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataifelse510, { e }, 'ifelse', {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_641249')}
                  {...injectData}
                />
                <Button
                  name={'取消'}
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
                    id: 'Button_9864742',
                    uid: 'Button_9864742',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const forms133 = getFormByCompId('Form_984095', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms133) ? forms133 : [forms133]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatasetDisable143: any = [
                      {
                        type: 'setDisable',
                        dataId: 166260813547112900,
                        options: {
                          compId: 'Form_984095',
                          compLib: 'comm',
                          pageJsonId: '2540494',
                          compName: 'Form',
                          id: '606096',
                          disabled: 'true',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetDisable143.params =
                      [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                    CMDGenerator(eventDatasetDisable143, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable144: any = [
                      {
                        type: 'setDisable',
                        dataId: 166260814050789630,
                        options: {
                          compId: 'Button_641249',
                          compLib: 'comm',
                          pageJsonId: '2540494',
                          compName: 'Button',
                          id: '289544',
                          disabled: 'true',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDatasetDisable144.params =
                      [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                    CMDGenerator(eventDatasetDisable144, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable145: any = [
                      {
                        type: 'setDisable',
                        dataId: 166260814564843230,
                        options: {
                          compId: 'Button_9864742',
                          compLib: 'comm',
                          pageJsonId: '2540494',
                          compName: 'Button',
                          id: '1794753',
                          disabled: 'true',
                        },
                        line_number: 4,
                      },
                    ];
                    eventDatasetDisable145.params =
                      [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                    CMDGenerator(eventDatasetDisable145, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_9864742')}
                  {...injectData}
                />
              </View>
            </Card>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(CommonIdeaManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
