// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Form,
  Input,
  Table,
  Text,
  VerticalView,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const CommonCommentListpage$$Page: React.FC<PageProps> = ({
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
    const eventDatareloadDataSource59: any = [
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
    eventDatareloadDataSource59.params = [] || [];
    CMDGenerator(eventDatareloadDataSource59, {}, 'reloadDataSource', {
      id: 'reloadDataSource',
      name: 'reloadDataSource',
      type: 'reloadDataSource',
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
        name={'页面'}
        $$componentItem={{
          id: 'View_2540494_1_1337952',
          uid: 'View_2540494_1_1337952',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: 'px px px px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_2540494_1_1337952'] = r)}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_7691962_283384',
            uid: 'VerticalView_7691962_283384',
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
          ref={(r: any) => (refs['VerticalView_7691962_283384'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_434019_744563',
              uid: 'View_434019_744563',
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
            ref={(r: any) => (refs['View_434019_744563'] = r)}
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
                  title: '查询',
                  iconPos: 'left',
                  btnType: 'primary',
                },
                { id: '446928', title: '重置', iconPos: 'left' },
                {
                  id: '4978223',
                  title: '新增',
                  iconPos: 'left',
                  btnType: 'primary',
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
                id: 'Card_564259_233507',
                uid: 'Card_564259_233507',
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
                const eventDatareloadDataSource109: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 166260740286241730,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '3658483',
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
                                type: [
                                  'form',
                                  'Form_3007486_962801',
                                  'getFieldsValue',
                                ],
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
                                type: [
                                  'form',
                                  'Form_3007486_962801',
                                  'getFieldsValue',
                                ],
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
                eventDatareloadDataSource109.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatareloadDataSource109,
                  { e },
                  'reloadDataSource',
                  {
                    id: 'reloadDataSource',
                    name: 'reloadDataSource',
                    type: 'reloadDataSource',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn2={(e: any) => {
                const forms155 = getFormByCompId('Form_3007486_962801', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms155) ? forms155 : [forms155]).forEach(
                  (form) => form?.resetFields(),
                );
              }}
              onClickBtn3={(e: any) => {
                const eventDatashowCustomModal245: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166521182636087650,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '381757',
                      pageJsonId: '2540494',
                      modalname: '/common/comment/detail',
                      pageId: '895869924060143616',
                      paramsObj: { sceneCode: 'A' },
                      paramsObjKeyValueMap: { sceneCode: 'A' },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'reloadDataSource',
                        dataId: 166528192309312300,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '3701057',
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
                                    type: [
                                      'form',
                                      'Form_3007486_962801',
                                      'getFieldsValue',
                                    ],
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
                                    type: [
                                      'form',
                                      'Form_3007486_962801',
                                      'getFieldsValue',
                                    ],
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
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal245.params =
                  [{ title: '按钮3点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal245,
                  { e },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Card_564259_233507'] = r)}
              {...injectData}
            >
              <Form
                name={'查询表单'}
                colSpan={12}
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
                  id: 'Form_3007486_962801',
                  uid: 'Form_3007486_962801',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => (refs['Form_3007486_962801'] = r)}
                {...injectData}
              >
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
                  required={false}
                  placeholder={'请输入'}
                  formItemIndex={0}
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
                    id: 'Input_773189_8829956',
                    uid: 'Input_773189_8829956',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Input_773189_8829956'] = r)}
                  {...injectData}
                />
                <Text
                  name={'提示'}
                  content={'双击选择常用意见'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_685917',
                    uid: 'Text_685917',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  schema={{
                    compType: 1,
                    props: {
                      formItemIndex: 1,
                      style: undefined,
                      selfSpan: undefined,
                    },
                  }}
                  style={{
                    fontSize: 12,
                    lineHeight: '24px',
                    color: 'rgba(208, 2, 27, 1)',
                    fontWeight: '',
                    textAlign: 'left',
                    letterSpacing: '',
                    paddingLeft: '20px',
                  }}
                  ref={(r: any) => (refs['Text_685917'] = r)}
                  {...injectData}
                />
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
                    hiddenRule: true,
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
                    hiddenRule: true,
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
                    hiddenRule: true,
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
                    hiddenRule: true,
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
                    hiddenRule: true,
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
                selectType={'radio'}
                bordered={'segmentation'}
                size={'middle'}
                fixedAction={true}
                rowSelection={undefined}
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
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '243977',
                    rule: '!row.staffCode',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '764149',
                    rule: '!row.staffCode',
                    checked: true,
                  },
                ]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.qryPageStaffHandleCommentByReq.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_870854_118555',
                  uid: 'Table_870854_118555',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '20px 0px 0px 0px' }}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal246: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166520907101648740,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '033334',
                        pageJsonId: '2540494',
                        modalname: '/common/comment/detail',
                        pageId: '895869924060143616',
                        paramsObj: { sceneCode: 'V', itemData: '$row$' },
                        paramsObjKeyValueMap: {
                          sceneCode: 'V',
                          itemData: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal246.params =
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
                    eventDatashowCustomModal246,
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
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal247: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166521185442408960,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '903873',
                        pageJsonId: '2540494',
                        modalname: '/common/comment/detail',
                        pageId: '895869924060143616',
                        modalPath: '/common/comment/detail',
                        paramsObj: { sceneCode: 'M', itemData: '$row$' },
                        paramsObjKeyValueMap: {
                          sceneCode: 'M',
                          itemData: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'reloadDataSource',
                          dataId: 166528193902983650,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '180139',
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
                                      type: [
                                        'form',
                                        'Form_3007486_962801',
                                        'getFieldsValue',
                                      ],
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
                                      type: [
                                        'form',
                                        'Form_3007486_962801',
                                        'getFieldsValue',
                                      ],
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
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal247.params =
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
                    eventDatashowCustomModal247,
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
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDataapiRequest789: any = [
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
                              type: 'reloadDataSource',
                              dataId: 166260765687676900,
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '944535',
                                pageJsonId: '2540494',
                                dataSourceId: 166261618174791140,
                                dataSourceName:
                                  'qryPageStaffHandleCommentByReq',
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
                                          type: [
                                            'form',
                                            'Form_3007486_962801',
                                            'getFieldsValue',
                                          ],
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
                                          type: [
                                            'form',
                                            'Form_3007486_962801',
                                            'getFieldsValue',
                                          ],
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
                                        value: {
                                          type: ['customize'],
                                          code: '1',
                                        },
                                      },
                                      {
                                        attrId: '718043',
                                        code: 'pageSize',
                                        name: 'pageSize',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                        key: 'body.pageSize',
                                        value: {
                                          type: ['customize'],
                                          code: '5',
                                        },
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
                  eventDataapiRequest789.params =
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
                    eventDataapiRequest789,
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
                  const eventDatareloadDataSource110: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 166260769089527460,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '693606',
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
                                  type: [
                                    'form',
                                    'Form_3007486_962801',
                                    'getFieldsValue',
                                  ],
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
                                  type: [
                                    'form',
                                    'Form_3007486_962801',
                                    'getFieldsValue',
                                  ],
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
                                value: {
                                  type: ['context', '$page$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                              {
                                attrId: '718043',
                                code: 'pageSize',
                                name: 'pageSize',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                key: 'body.pageSize',
                                value: {
                                  type: ['context', '$pageSize$'],
                                  hideAttr: true,
                                  code: '',
                                },
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
                  eventDatareloadDataSource110.params =
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
                    eventDatareloadDataSource110,
                    { page, pageSize },
                    'reloadDataSource',
                    {
                      id: 'reloadDataSource',
                      name: 'reloadDataSource',
                      type: 'reloadDataSource',
                      platform: 'pc',
                    },
                  );
                }}
                onRowDoubleClick={(rowId: any, row: any, index: any) => {
                  // console 166807494287050620
                  console.log('begin fill');
                  // console 166807509530331700
                  console.log(row);
                  const eventDatacallParentCustomFunc: any = [
                    {
                      type: 'callParentCustomFunc',
                      dataId: 166806956214708200,
                      options: {
                        compId: 'callParentCustomFunc',
                        compName: 'system',
                        id: '167235',
                        pageJsonId: '2540494',
                        pathname: '/flow/audit',
                        pageId: '874567207627108352',
                        customFuncName: 'fillTacheRemark',
                        customFuncParams: '$row$',
                        modalPath: '/flow/audit',
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallParentCustomFunc.params =
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
                    eventDatacallParentCustomFunc,
                    { rowId, row, index },
                    'callParentCustomFunc',
                    {
                      id: 'callParentCustomFunc',
                      name: 'callParentCustomFunc',
                      type: 'callParentCustomFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatagetTableSelected71: any = [
                    {
                      type: 'getTableSelected',
                      dataId: 166806231143223070,
                      options: {
                        compId: 'Table_870854_118555',
                        compLib: 'comm',
                        pageJsonId: '2540494',
                        compName: 'Table',
                        id: '557127',
                      },
                      line_number: 4,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '601067',
                              options: {
                                context: '$selectedRows_557127[0]$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166806233343300500,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166806233343305400,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166806233343384960,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '2865065',
                                    pageJsonId: '2540494',
                                    type: 'success',
                                    value: '请选择常用处理意见',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  elseIfs: [],
                                  line_number: 7,
                                },
                              ],
                              condition: [],
                              elseIfs: [],
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166806233343384960,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '2865065',
                                    pageJsonId: '2540494',
                                    type: 'success',
                                    value: '请选择常用处理意见',
                                  },
                                  line_number: 7,
                                },
                              ],
                            },
                          ],
                          line_number: 5,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 166806233343383900,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '739324',
                                pageJsonId: '2540494',
                                sync: false,
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'modHandleCommentCount',
                                _apiCode: 'modHandleCommentCount',
                                _source: 'rhin',
                                _serviceId: '896304391241043968',
                                _serviceTitle:
                                  '常用意见使用次数更新-tzp: modHandleCommentCount',
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
                                    dataKey: '739324_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '739324_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '739324_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'commentId',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.commentId',
                                        compType: 'Input',
                                        name: 'commentId',
                                        parents: ['body'],
                                        id: 'body.commentId',
                                        dataKey: '739324_body.commentId',
                                        value: {
                                          type: [
                                            'context',
                                            '$selectedRows_557127[0]$',
                                          ],
                                          code: 'commentId',
                                        },
                                      },
                                    ],
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '739324_body',
                                  },
                                ],
                              },
                              line_number: 6,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelected71.params =
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
                    eventDatagetTableSelected71,
                    { rowId, row, index },
                    'getTableSelected',
                    {
                      id: 'getTableSelected',
                      name: 'getTableSelected',
                      type: 'getTableSelected',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Table_870854_118555'] = r)}
                {...injectData}
              />
            </Card>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(CommonCommentListpage$$Page, {
  pageId: '907443177794400256',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
