// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  VerticalView,
  Card,
  Form,
  Text,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '1062290793887260672';
const SelectNet$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest212: any = [
      {
        type: 'apiRequest',
        dataId: 170487803295203900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '497936',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                  dataKey: '497936_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '497936_root.path',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '497936_root.query',
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
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '497936_root.body.catalogCode',
                      value: { type: ['customize'], code: 'CLS_ZW_0001_0001' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      id: 'root.body.attrCode',
                      dataKey: '497936_root.body.attrCode',
                      value: { type: ['customize'], code: 'applyNetType' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '497936_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '497936_root',
            },
          ],
          actionTitle: '',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170493710822915700,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '0781233',
              pageJsonId: '2540494',
              code: 'function main(data,state,success,fail){var _reply_;var r=(_reply_=reply_497936)===null||_reply_===void 0?void 0:_reply_.resultData;for(var i=0;i<r.length;i++){r[i].handleComment=r[i].attrValueName}success(r)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'reloadTableData',
                dataId: 170493716724457470,
                options: {
                  compId: 'Table_870854_118555',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Table',
                  id: '818518',
                  data: '$data_0781233$',
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
    eventDataapiRequest212.params = [] || [];
    CMDGenerator(eventDataapiRequest212, {}, 'apiRequest', {
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
        ref={(r: any) => refs.setComponentRef(r, 'View_2540494_1_1337952')}
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
          ref={(r: any) =>
            refs.setComponentRef(r, 'VerticalView_7691962_283384')
          }
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
            ref={(r: any) => refs.setComponentRef(r, 'View_434019_744563')}
            {...injectData}
          >
            <Card
              name={'选择归属驻地网卡片'}
              cardIconType={'middle'}
              title={'选择归属驻地网'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[]}
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
                const eventDatareloadDataSource78: any = [
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
                eventDatareloadDataSource78.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(
                  eventDatareloadDataSource78,
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
                const forms80 = getFormByCompId('Form_3007486_962801', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms80) ? forms80 : [forms80]).forEach((form) =>
                  form?.resetFields(),
                );
              }}
              onClickBtn3={(e: any) => {
                const eventDatashowCustomModal92: any = [
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
                eventDatashowCustomModal92.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(
                  eventDatashowCustomModal92,
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_564259_233507')}
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
                  id: 'Form_21734',
                  uid: 'Form_21734',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_21734')}
                {...injectData}
              >
                <Text
                  name={'提示'}
                  content={'双击选择常用意见'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_4484635',
                    uid: 'Text_4484635',
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
                      formItemIndex: 0,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Text_4484635')}
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
                    title: '驻地网类型',
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
                ]}
                page={false}
                rowKeyType={'specified'}
                editMode={'single'}
                selectType={'radio'}
                bordered={'segmentation'}
                size={'middle'}
                fixedAction={true}
                rowSelection={undefined}
                showHead={false}
                showTotal={false}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                dataSource={
                  data?.qryPageStaffHandleCommentByReq?.resultData?.records
                }
                rowKey={'commentId'}
                fieldName={
                  'data.qryPageStaffHandleCommentByReq.resultData.total'
                }
                total={data?.qryPageStaffHandleCommentByReq?.resultData?.total}
                rowActions={[]}
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
                  const eventDatashowCustomModal93: any = [
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
                  eventDatashowCustomModal93.params =
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
                    eventDatashowCustomModal93,
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
                onRowDoubleClick={(rowId: any, row: any, index: any) => {
                  // console 166807494287050620
                  console.log('begin fill');
                  // console 166807509530331700
                  console.log(row);
                  const eventDatacallCustomPageFunc14: any = [
                    {
                      type: 'callCustomPageFunc',
                      dataId: 170493892881061220,
                      options: {
                        compId: 'callCustomPageFunc',
                        compName: 'system',
                        id: '214359',
                        pageJsonId: '2540494',
                        pathname: '/auditCommonPopup',
                        pageId: '911800134937767936',
                        modalPath: '/auditCommonPopup',
                        customFuncName: 'setNetValue',
                        customFuncParams: 'object',
                        paramsObj: { row: '$row$' },
                        paramsObjKeyValueMap: { row: '$row$' },
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallCustomPageFunc14.params =
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
                    eventDatacallCustomPageFunc14,
                    { rowId, row, index },
                    'callCustomPageFunc',
                    {
                      id: 'callCustomPageFunc',
                      name: 'callCustomPageFunc',
                      type: 'callCustomPageFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatagetTableSelected35: any = [
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
                                  line_number: 7,
                                },
                              ],
                              condition: [],
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
                              shielding: true,
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
                  eventDatagetTableSelected35.params =
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
                    eventDatagetTableSelected35,
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
                ref={(r: any) => refs.setComponentRef(r, 'Table_870854_118555')}
                {...injectData}
              />
            </Card>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(SelectNet$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
