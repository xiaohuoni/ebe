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
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '878163234709311488';
const AttrSpecManage$$Page: React.FC<PageProps> = ({
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
  const refreshAttrTable = (options_635272: any) => {
    const eventDatasetLoading24: any = [
      {
        type: 'setLoading',
        dataId: 166158464059089280,
        options: {
          compId: 'Table_311334',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '6493115',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading24.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading24, { options_635272 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource32: any = [
      {
        type: 'reloadDataSource',
        dataId: 166158463412134980,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '443539',
          pageJsonId: '4868135',
          dataSourceId: 166627858400200480,
          dataSourceName: 'qryAttrSpecPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '0657054',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '19547276',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '797074',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '71742',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '819527',
                  code: 'attrName',
                  name: 'attrName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.attrName',
                  value: {
                    type: ['form', 'Form_148709', 'getFieldsValue'],
                    code: 'attrName',
                  },
                },
                {
                  attrId: '0515904',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['context', '$options_635272$'], code: '' },
                },
                {
                  attrId: '790755',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '900017',
                  code: 'attrCode',
                  name: 'attrCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.attrCode',
                  value: {
                    type: ['form', 'Form_148709', 'getFieldsValue'],
                    code: 'attrCode',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '234512',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '9150436',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '221086',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '25382547',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '870532',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '0498296',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '004117',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '87568',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '802197',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '187564',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '354502',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '514975',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '672145',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '345864',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '9337566',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '307237',
                      code: 'isRequired',
                      name: 'isRequired',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '887309',
                      code: 'isReadonly',
                      name: 'isReadonly',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '353112',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '125332',
                      code: 'attrCode',
                      name: 'attrCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7758732',
                      code: 'attrValueDataType',
                      name: 'attrValueDataType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '945838',
                      code: 'maxValue',
                      name: 'maxValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0176125',
                      code: 'isUnique',
                      name: 'isUnique',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '512514',
                      code: 'attrValueRespList',
                      name: 'attrValueRespList',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '963489',
                      code: 'attrDefaultValue',
                      name: 'attrDefaultValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '408812',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9653553',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9373079',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '488509',
                      code: 'attrUnit',
                      name: 'attrUnit',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0253537',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '163824',
                      code: 'attrValueType',
                      name: 'attrValueType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '124337',
                      code: 'minValue',
                      name: 'minValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2455164',
                      code: 'attrId',
                      name: 'attrId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '762476',
                      code: 'isNullable',
                      name: 'isNullable',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '787271',
                      code: 'attrValueList',
                      name: 'attrValueList',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '03208',
                      code: 'attrName',
                      name: 'attrName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '116516',
                      code: 'attrDesc',
                      name: 'attrDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5347283',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '168898',
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
        callback1: [
          {
            type: 'setLoading',
            dataId: 166158466714132350,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '52792',
              loading: false,
            },
            line_number: 3,
          },
          {
            type: 'setDataSource',
            dataId: 166628155331935000,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '472041',
              pageJsonId: '4868135',
              dataSourceId: 166627997940219940,
              dataSourceName: 'qryAttrValuePage',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '390118',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'header',
                },
                {
                  attrId: '4152634',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'path',
                },
                {
                  attrId: '962915',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'query',
                },
                {
                  attrId: '455339',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '76879',
                      code: 'attrId',
                      name: 'attrId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      key: 'body.attrId',
                    },
                    {
                      attrId: '438976',
                      code: 'pageNum',
                      name: 'pageNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      key: 'body.pageNum',
                    },
                    {
                      attrId: '720824',
                      code: 'pageSize',
                      name: 'pageSize',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      key: 'body.pageSize',
                    },
                  ],
                  key: 'body',
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '201802',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '310191',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '4359087',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '420412',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  children: [
                    {
                      attrId: '971068',
                      code: 'total',
                      name: 'total',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      parentKey: 'resultData',
                      value: { type: ['customize'], code: '0' },
                    },
                    {
                      attrId: '74894',
                      code: 'current',
                      name: 'current',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '52196554',
                      code: 'hitCount',
                      name: 'hitCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '434214',
                      code: 'size',
                      name: 'size',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '442403',
                      code: 'optimizeCountSql',
                      name: 'optimizeCountSql',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '6105024',
                      code: 'maxLimit',
                      name: 'maxLimit',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '689363',
                      code: 'orders',
                      name: 'orders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'fieldArray',
                      children: [
                        {
                          attrId: '819925',
                          code: 'listItem',
                          name: '列表元素',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          parentKey: 'orders',
                        },
                      ],
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '7469607',
                      code: 'countId',
                      name: 'countId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '797492',
                      code: 'isSearchCount',
                      name: 'isSearchCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '136398',
                      code: 'records',
                      name: 'records',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '787559',
                          code: 'updateDate',
                          name: 'updateDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '566995',
                          code: 'attrValueId',
                          name: 'attrValueId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '615718',
                          code: 'statusCd',
                          name: 'statusCd',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '79227',
                          code: 'remark',
                          name: 'remark',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '682951',
                          code: 'sort',
                          name: 'sort',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '506717',
                          code: 'attrValueCode',
                          name: 'attrValueCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '5619174',
                          code: 'attrValueName',
                          name: 'attrValueName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '5365482',
                          code: 'createStaff',
                          name: 'createStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '079032',
                          code: 'createStaffName',
                          name: 'createStaffName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '87493',
                          code: 'attrValueDesc',
                          name: 'attrValueDesc',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '8983665',
                          code: 'attrId',
                          name: 'attrId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '576858',
                          code: 'attrValue',
                          name: 'attrValue',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '156425',
                          code: 'createDate',
                          name: 'createDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '645791',
                          code: 'updateStaff',
                          name: 'updateStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                      ],
                      parentKey: 'resultData',
                      value: {
                        type: ['EMPTY_DATA', 'array'],
                        hideAttr: true,
                        code: '$EMPTY_DATA.array$',
                      },
                    },
                  ],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 4,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166158467561233060,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '302547',
              loading: false,
            },
            line_number: 5,
          },
        ],
      },
    ];
    eventDatareloadDataSource32.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource32,
      { options_635272 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatasetDataSource12: any = [
      {
        type: 'setDataSource',
        dataId: 166627895187245000,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '846755',
          pageJsonId: '4868135',
          dataSourceId: 166158805345111460,
          dataSourceName: 'local_vars',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '991205',
              code: 'attrId',
              name: '当前选中行attrId',
              type: 'number',
              initialData: { type: 'static' },
              value: {
                type: ['EMPTY_DATA', 'string'],
                hideAttr: true,
                code: '$EMPTY_DATA.string$',
              },
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 6,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource12.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(
      eventDatasetDataSource12,
      { options_635272 },
      'setDataSource',
      {
        id: 'setDataSource',
        name: 'setDataSource',
        type: 'setDataSource',
        platform: 'undefined',
      },
    );
  };
  const refreshAttrValueTable = (options_0109504: any) => {
    const eventDatasetLoading25: any = [
      {
        type: 'setLoading',
        dataId: 166158820697412450,
        options: {
          compId: 'Table_8475669',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '056122',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading25.params =
      [
        {
          title: '事件入参',
          name: 'options_0109504',
          value: '$options_0109504$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading25, { options_0109504 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource33: any = [
      {
        type: 'reloadDataSource',
        dataId: 168974581152977250,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '245075',
          pageJsonId: '4868135',
          dataSourceId: 166627997940219940,
          dataSourceName: 'qryAttrValuePage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '390118',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '4152634',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '962915',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '455339',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '720824',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '457851',
                  code: 'attrValue',
                  name: '属性值编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_918102', 'getFieldsValue'],
                    code: 'attrValue',
                  },
                },
                {
                  attrId: '76879',
                  code: 'attrId',
                  name: 'attrId',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'attrId',
                  },
                },
                {
                  attrId: '438976',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '612397',
                  code: 'attrValueName',
                  name: '属性值名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_918102', 'getFieldsValue'],
                    code: 'attrValueName',
                  },
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 168974649701181220,
            options: {
              compId: 'Table_8475669',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '75863385',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatareloadDataSource33.params =
      [
        {
          title: '事件入参',
          name: 'options_0109504',
          value: '$options_0109504$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource33,
      { options_0109504 },
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
    refreshAttrTable,
    refreshAttrValueTable,
  }));

  useEffect(() => {
    const eventDataapiRequest441: any = [
      {
        type: 'apiRequest',
        dataId: 166632207288338750,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '01680138',
          pageJsonId: '4868135',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '01680138_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'attrCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '01680138_path.attrCode',
                  value: { type: ['customize'], code: 'ATTR_VALUE_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '01680138_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '01680138_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '01680138_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166632211894842240,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '486875',
              colName: 'attrValueType',
              data: '$reply_01680138?.resultData$',
            },
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest441.params = [] || [];
    CMDGenerator(eventDataapiRequest441, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest442: any = [
      {
        type: 'apiRequest',
        dataId: 166632213253808350,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4969653',
          pageJsonId: '4868135',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '4969653_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'attrCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '4969653_path.attrCode',
                  value: { type: ['customize'], code: 'ATTR_VALUE_DATA_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '4969653_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '4969653_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4969653_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166632213253884380,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '618932',
              colName: 'attrValueDataType',
              data: '$reply_4969653?.resultData$',
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest442.params = [] || [];
    CMDGenerator(eventDataapiRequest442, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc38: any = [
      {
        type: 'callSelfFunc',
        dataId: 166628046296805340,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '308251',
          pageJsonId: '4868135',
          customFuncName: 'refreshAttrTable',
        },
        line_number: 5,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc38.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc38, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_4868135__"
    >
      <View
        className="View_View_4868135_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_4868135_1',
          uid: 'View_4868135_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_4868135_1')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_9463015',
            uid: 'VerticalView_9463015',
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
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_9463015')}
          {...injectData}
        >
          <View
            className="View_View_179182"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_179182',
              uid: 'View_179182',
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
              height: '30%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_179182')}
            {...injectData}
          >
            <Card
              name={'属性配置'}
              cardIconType={'middle'}
              title={'属性配置'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '2069554',
                  title: '新增属性',
                  iconPos: 'left',
                  btnType: 'primary',
                  isIcon: false,
                  icon: '',
                },
                {
                  id: '2417865',
                  title: '刷新缓存',
                  iconPos: 'left',
                  btnType: 'primary',
                  icon: '',
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
                id: 'Card_839649',
                uid: 'Card_839649',
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
                const eventDatashowCustomModal212: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166097860339693730,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '224256',
                      pageJsonId: '4868135',
                      modalname: '/guigeshuxingxiangqing3867',
                      pageId: '900572788518785024',
                      paramsObj: { sceneCode: 'A' },
                      paramsObjKeyValueMap: { sceneCode: 'A' },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158503467206600,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '562974',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshAttrTable',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal212.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal212,
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
              onClickBtn2={(e: any) => {
                const eventDataapiRequest767: any = [
                  {
                    type: 'apiRequest',
                    dataId: 166158950075825400,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '353892',
                      pageJsonId: '4868135',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'SYS_reloadAllAttrSpecToCache',
                      _apiCode: 'reloadAllAttrSpecToCache',
                      _source: 'rhin',
                      _serviceId: '880731651817832448',
                      _serviceTitle:
                        '重新加载所有规格属性到缓存中: reloadAllAttrSpecToCache',
                      params: 'object',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 166158954380214140,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '244975',
                          pageJsonId: '4868135',
                          type: 'success',
                          value: '刷新成功',
                        },
                        line_number: 2,
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 166158956052114430,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '647432',
                          pageJsonId: '4868135',
                          type: 'error',
                          value: '未知系统异常',
                        },
                        line_number: 3,
                      },
                    ],
                  },
                ];
                eventDataapiRequest767.params =
                  [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest767, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_839649')}
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
                formCode={'Form_148709'}
                $$componentItem={{
                  id: 'Form_148709',
                  uid: 'Form_148709',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_148709')}
                {...injectData}
              >
                <Input
                  name={'属性名称'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={'6'}
                  wrapperCol={'16'}
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
                  fieldName={'attrName'}
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
                    id: 'Input_3889064',
                    uid: 'Input_3889064',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc581: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158470687467620,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2038827',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshAttrTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc581.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc581,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Input_3889064')}
                  {...injectData}
                />
                <Input
                  name={'属性编码'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={'6'}
                  wrapperCol={'16'}
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
                  fieldName={'attrCode'}
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
                    id: 'Input_33684855',
                    uid: 'Input_33684855',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc582: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158471466083070,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '64209',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshAttrTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc582.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc582,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Input_33684855')}
                  {...injectData}
                />
                <View
                  className="View_View_841498"
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_841498',
                    uid: 'View_841498',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_841498')}
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
                      id: 'Button_224226',
                      uid: 'Button_224226',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatacallSelfFunc583: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166158469460298370,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '6966413',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshAttrTable',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc583.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc583,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_224226')}
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
                    labelCol={8}
                    wrapperCol={16}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_499055',
                      uid: 'Button_499055',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                    onClick={(e: any) => {
                      const forms135 = getFormByCompId('Form_148709', refs);
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms135) ? forms135 : [forms135]).forEach(
                        (form) => form?.resetFields(),
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_499055')}
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'属性列表'}
                isFlexColumn={false}
                pageSize={5}
                current={data?.qryAttrSpecPage?.resultData?.current}
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
                    title: '属性标识',
                    key: 'attrId',
                    dataIndex: 'attrId',
                    id: '175877',
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
                    title: '属性名称',
                    key: 'attrName',
                    dataIndex: 'attrName',
                    className: 'divider',
                    id: '281068',
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
                    title: '属性编码',
                    key: 'attrCode',
                    dataIndex: 'attrCode',
                    className: 'divider',
                    id: '16555',
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
                    title: '属性值类型',
                    key: 'attrValueType',
                    dataIndex: 'attrValueType',
                    id: '359927',
                    className: 'divider',
                    staticService: {
                      labelKey: 'attrValueName',
                      valueKey: 'attrValue',
                    },
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
                    title: '属性值数据类型',
                    key: 'attrValueDataType',
                    dataIndex: 'attrValueDataType',
                    id: '1025746',
                    className: 'divider',
                    staticService: {
                      labelKey: 'attrValueName',
                      valueKey: 'attrValue',
                    },
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
                rowSelection={undefined}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
                pageSizeOptions={'[5,10,20]'}
                rowKey={'attrId'}
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '460721',
                    checked: true,
                  },
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '88461124',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '137833',
                    checked: true,
                  },
                ]}
                extend={[]}
                dataSource={data?.qryAttrSpecPage?.resultData?.records}
                total={data?.qryAttrSpecPage?.resultData?.total}
                fieldName={'data.qryAttrSpecPage.resultData.current'}
                dataSourceFromDataSourceConfig={
                  'data.qryAttrSpecPage.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_311334',
                  uid: 'Table_311334',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0px 0px 0px' }}
                onRowClick={(rowId: any, row: any, index: any) => {
                  const eventDatasetDataSource193: any = [
                    {
                      type: 'setDataSource',
                      dataId: 166158806324216160,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '879912',
                        pageJsonId: '4868135',
                        dataSourceId: 166158805345111460,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '991205',
                            code: 'attrId',
                            name: '当前选中行attrId',
                            type: 'number',
                            initialData: { type: 'static' },
                            value: { type: ['context', '$rowId$'], code: '' },
                          },
                          {
                            attrId: '4136705',
                            code: 'attrObj',
                            name: '属性对象',
                            type: 'object',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: '',
                              hideAttr: false,
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 166627938884895680,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '35211506',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshAttrValueTable',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource193.params =
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
                    eventDatasetDataSource193,
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
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatacallSelfFunc584: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166628115822084860,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '253585',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshAttrTable',
                        customFuncParams: '$page$',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc584.params =
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
                    eventDatacallSelfFunc584,
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
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDatashowModal19: any = [
                    {
                      type: 'showModal',
                      dataId: 166156974227855780,
                      shielding: true,
                      options: {
                        compId: 'showModal',
                        compName: 'page',
                        id: '409602',
                        pageJsonId: '4868135',
                        type: 'confirm',
                        title: '确定要删除该属性吗？',
                        content: '该操作为物理删除，请谨慎操作！',
                        okText: '确定',
                        cancelText: '取消',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166156983416115230,
                          shielding: true,
                          options: {
                            compId: 'Table_311334',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '4355088',
                            loading: true,
                          },
                          line_number: 2,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 166156980410874980,
                          shielding: true,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '768139',
                            pageJsonId: '4868135',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'delAttrSpec',
                            _apiCode: 'delAttrSpec',
                            _source: 'rhin',
                            _serviceId: '880649417807069184',
                            _serviceTitle: '删除规格属性-tsm: delAttrSpec',
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
                                dataKey: '768139_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'attrId',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'long',
                                    mustFlag: 'T',
                                    defaultValue: '',
                                    _id: 'path.attrId',
                                    compType: 'Input',
                                    parents: ['path'],
                                    id: 'path.attrId',
                                    dataKey: '768139_path.attrId',
                                    value: {
                                      type: ['customize'],
                                      code: '$rowId$',
                                    },
                                  },
                                ],
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '768139_path',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '768139_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '768139_body',
                              },
                            ],
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'ifelse',
                              shielding: true,
                              condition: [
                                {
                                  condId: '020915',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_768139?.resultCode$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166632035717708400,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166632037658200670,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166632039652384930,
                                      children: [],
                                      todoOptions: ['msgType', 'value'],
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '104214',
                                        pageJsonId: '4868135',
                                        type: 'error',
                                        value: '规格属性删除失败！',
                                      },
                                      actionObjId: 'showMessage',
                                      actionObjName: 'system',
                                      value: 'showMessage',
                                      shielding: true,
                                      line_number: 7,
                                    },
                                  ],
                                  condition: [],
                                  desc: '失败',
                                  shielding: true,
                                  callback: [
                                    {
                                      type: 'showMessage',
                                      dataId: 166632039652384930,
                                      shielding: true,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '104214',
                                        pageJsonId: '4868135',
                                        type: 'error',
                                        value: '规格属性删除失败！',
                                      },
                                      line_number: 7,
                                    },
                                  ],
                                },
                              ],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'showMessage',
                                  dataId: 166632038250661700,
                                  shielding: true,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '698103',
                                    pageJsonId: '4868135',
                                    type: 'success',
                                    value: '规格属性删除成功！',
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 166632040719612600,
                                  shielding: true,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '63732067',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshAttrTable',
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
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowModal19.params =
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
                    eventDatashowModal19,
                    { rowId, row, index },
                    'showModal',
                    {
                      id: 'showModal',
                      name: 'showModal',
                      type: 'showModal',
                      platform: 'pc',
                    },
                  );
                  const eventDataapiRequest768: any = [
                    {
                      type: 'apiRequest',
                      dataId: 166752780846205920,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '8939757',
                        pageJsonId: '4868135',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'delAttrSpec',
                        _apiCode: 'delAttrSpec',
                        _source: 'rhin',
                        _serviceId: '880649417807069184',
                        _serviceTitle: '删除规格属性-tsm: delAttrSpec',
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
                            dataKey: '768139_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            children: [
                              {
                                code: 'attrId',
                                name: '新增节点',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'T',
                                defaultValue: '',
                                _id: 'path.attrId',
                                compType: 'Input',
                                parents: ['path'],
                                id: 'path.attrId',
                                dataKey: '768139_path.attrId',
                                value: { type: ['customize'], code: '$rowId$' },
                              },
                            ],
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '768139_path',
                            value: { type: [], code: '' },
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '768139_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '768139_body',
                          },
                        ],
                        _sourceName: '删除规格属性-tsm',
                      },
                      line_number: 8,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '020915',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_8939757?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166752780846306080,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166752780846397600,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166752780846388060,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '422412',
                                    pageJsonId: '4868135',
                                    type: 'error',
                                    value: '规格属性删除失败！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  line_number: 12,
                                },
                              ],
                              condition: [],
                              desc: '失败',
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166752780846388060,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '422412',
                                    pageJsonId: '4868135',
                                    type: 'error',
                                    value: '规格属性删除失败！',
                                  },
                                  line_number: 12,
                                },
                              ],
                            },
                          ],
                          line_number: 9,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166752780846352770,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '304897',
                                pageJsonId: '4868135',
                                type: 'success',
                                value: '规格属性删除成功！',
                              },
                              line_number: 10,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166752780846353800,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '4368294',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshAttrTable',
                              },
                              line_number: 11,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest768.params =
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
                    eventDataapiRequest768,
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
                  const eventDatashowCustomModal213: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166158498374371460,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '454329',
                        pageJsonId: '4868135',
                        modalname: '/guigeshuxingxiangqing3867',
                        pageId: '900572788518785024',
                        paramsObj: {
                          bizId: '$rowId$',
                          sceneCode: 'M',
                          attrId: '$rowId$',
                          attrObj: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          bizId: '$rowId$',
                          sceneCode: 'M',
                          attrId: '$rowId$',
                          attrObj: '$row$',
                        },
                        modalPath: '/guigeshuxingxiangqing3867',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 166158504829714800,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '7140905',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshAttrTable',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal213.params =
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
                    eventDatashowCustomModal213,
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
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal214: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166632026172642500,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '3913474',
                        pageJsonId: '4868135',
                        modalname: '/guigeshuxingxiangqing3867',
                        pageId: '900572788518785024',
                        modalPath: '/guigeshuxingxiangqing3867',
                        paramsObj: {
                          bizId: '$rowId$',
                          sceneCode: 'V',
                          attrId: '$rowId$',
                          attrObj: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          bizId: '$rowId$',
                          sceneCode: 'V',
                          attrId: '$rowId$',
                          attrObj: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal214.params =
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
                    eventDatashowCustomModal214,
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
                ref={(r: any) => refs.setComponentRef(r, 'Table_311334')}
                {...injectData}
              />
            </Card>
          </View>
          <View
            className="View_View_869717"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_869717',
              uid: 'View_869717',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_869717')}
            {...injectData}
          >
            <Card
              name={'属性值配置'}
              cardIconType={'middle'}
              title={'属性值配置'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '4693098',
                  title: '新增属性值',
                  iconPos: 'left',
                  btnType: 'primary',
                  icon: '',
                },
                {
                  id: '2464237',
                  title: '属性值关系配置',
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
                id: 'Card_96776',
                uid: 'Card_96776',
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
                // console 166417357090733060
                console.log(data?.local_vars);
                const eventDataifelse511: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '659022',
                        options: {
                          context: '$data.local_vars.attrId$',
                          operate: 'empty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166632295438380300,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166632299951496770,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166632303046108700,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166632303046115700,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166632303046199580,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166632303046141380,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166632303046115970,
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
                                      id: '639765',
                                      pageJsonId: '4868135',
                                      customFuncName: 'refreshAttrValueTable',
                                      customFuncParams: '$data.local_vars$',
                                    },
                                    actionObjId: 'callSelfFunc',
                                    actionObjName: 'system',
                                    value: 'callSelfFunc',
                                    line_number: 5,
                                  },
                                ],
                                value: 'callback1',
                                params: [
                                  {
                                    title: '弹窗确认回调参数',
                                    name: 'okData_7496296',
                                    value: '$okData_983894$',
                                  },
                                ],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166632303046167140,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['modalname', 'compState'],
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '983894',
                              pageJsonId: '4868135',
                              modalname: '/guigeshuxingzhixiangqing3756',
                              pageId: '900586377250050048',
                              paramsObj: {
                                sceneCode: 'A',
                                attrId: '$data.local_vars.attrId$',
                              },
                              paramsObjKeyValueMap: {
                                sceneCode: 'A',
                                attrId: '$data.local_vars.attrId$',
                              },
                            },
                            actionObjId: 'showCustomModal',
                            actionObjName: 'page',
                            value: 'showCustomModal',
                            line_number: 4,
                          },
                        ],
                        condition: [],
                        desc: '已选择',
                        callback: [
                          {
                            type: 'showCustomModal',
                            dataId: 166632303046108700,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '983894',
                              pageJsonId: '4868135',
                              modalname: '/guigeshuxingzhixiangqing3756',
                              pageId: '900586377250050048',
                              paramsObj: {
                                sceneCode: 'A',
                                attrId: '$data.local_vars.attrId$',
                              },
                              paramsObjKeyValueMap: {
                                sceneCode: 'A',
                                attrId: '$data.local_vars.attrId$',
                              },
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166632303046199580,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '639765',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshAttrValueTable',
                                  customFuncParams: '$data.local_vars$',
                                },
                                line_number: 5,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 2,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 166632301030719400,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '8352614',
                          pageJsonId: '4868135',
                          type: 'info',
                          value: '请先选择规格属性！',
                        },
                        line_number: 3,
                      },
                    ],
                  },
                ];
                eventDataifelse511.params =
                  [{ title: '新增属性值点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(eventDataifelse511, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              onClickBtn2={(e: any) => {
                const eventDataifelse512: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '659022',
                        options: {
                          context: '$data.local_vars.attrId$',
                          operate: 'empty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169044898062727900,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169044898062803200,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169045062474658600,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 169045062474638800,
                                children: [],
                                value: 'callback1',
                                params: [
                                  {
                                    title: '弹窗确认回调参数',
                                    name: 'okData_7791545',
                                    value: '$okData_7791545$',
                                  },
                                ],
                              },
                              {
                                dataName: 'callback',
                                dataId: 169045062474665200,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['modalname', 'compState'],
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '7791545',
                              pageJsonId: '4868135',
                              modalname: '/attrValueRel',
                              pageId: '1001785141604552704',
                              modalPath: '/attrValueRel',
                              paramsObj: {
                                bizData: '$data.local_vars.attrObj$',
                              },
                              paramsObjKeyValueMap: {
                                bizData: '$data.local_vars.attrObj$',
                              },
                            },
                            actionObjId: 'showCustomModal',
                            actionObjName: 'page',
                            value: 'showCustomModal',
                            tips: '点击确认执行：在弹窗页面编排选择触发父页面确认回掉事件，将会触发确认回掉事件;     \n 点击取消执行: 点击取消将会触发该回掉',
                            line_number: 3,
                          },
                        ],
                        condition: [],
                        desc: '已选择',
                        callback: [
                          {
                            type: 'showCustomModal',
                            dataId: 169045062474658600,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '7791545',
                              pageJsonId: '4868135',
                              modalname: '/attrValueRel',
                              pageId: '1001785141604552704',
                              modalPath: '/attrValueRel',
                              paramsObj: {
                                bizData: '$data.local_vars.attrObj$',
                              },
                              paramsObjKeyValueMap: {
                                bizData: '$data.local_vars.attrObj$',
                              },
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 169044898062885700,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '05458174',
                          pageJsonId: '4868135',
                          type: 'info',
                          value: '请先选择规格属性！',
                        },
                        line_number: 2,
                      },
                    ],
                  },
                ];
                eventDataifelse512.params =
                  [
                    {
                      title: '属性值关系配置点击回调',
                      value: '$e$',
                      name: 'e',
                    },
                  ] || [];
                CMDGenerator(eventDataifelse512, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_96776')}
              {...injectData}
            >
              <Form
                name={'属性值表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_148709'}
                $$componentItem={{
                  id: 'Form_918102',
                  uid: 'Form_918102',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 10px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_918102')}
                {...injectData}
              >
                <Input
                  name={'属性值名称'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={'6'}
                  wrapperCol={'16'}
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
                  fieldName={'attrValueName'}
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
                    id: 'Input_1833661',
                    uid: 'Input_1833661',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc588: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 168958246776876740,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '8031668',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshAttrValueTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc588.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc588,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Input_1833661')}
                  {...injectData}
                />
                <Input
                  name={'属性值'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={'6'}
                  wrapperCol={'16'}
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
                  fieldName={'attrValue'}
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
                    id: 'Input_284272',
                    uid: 'Input_284272',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc589: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 168958248066949340,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '4722051',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshAttrValueTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc589.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc589,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Input_284272')}
                  {...injectData}
                />
                <View
                  className="View_View_905928"
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_905928',
                    uid: 'View_905928',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_905928')}
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
                      id: 'Button_178963',
                      uid: 'Button_178963',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatacallSelfFunc590: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 168958249353637220,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '2910885',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshAttrValueTable',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc590.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc590,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_178963')}
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
                    labelCol={8}
                    wrapperCol={16}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_465845',
                      uid: 'Button_465845',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                    onClick={(e: any) => {
                      const forms137 = getFormByCompId('Form_918102', refs);
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms137) ? forms137 : [forms137]).forEach(
                        (form) => form?.resetFields(),
                      );
                      const eventDatareloadDataSource99: any = [
                        {
                          type: 'reloadDataSource',
                          dataId: 168974673998759200,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '4804615',
                            pageJsonId: '4868135',
                            dataSourceId: 166627997940219940,
                            dataSourceName: 'qryAttrValuePage',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '390118',
                                code: 'header',
                                name: '请求头参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '4152634',
                                code: 'path',
                                name: '请求路径参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '962915',
                                code: 'query',
                                name: 'URL 参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '455339',
                                code: 'body',
                                name: '请求体',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                children: [
                                  {
                                    attrId: '720824',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: { type: ['customize'], code: '5' },
                                  },
                                  {
                                    attrId: '457851',
                                    code: 'attrValue',
                                    name: '属性值编码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '76879',
                                    code: 'attrId',
                                    name: 'attrId',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: {
                                      type: [
                                        'datasource',
                                        'local_vars',
                                        'data',
                                      ],
                                      code: 'attrId',
                                    },
                                  },
                                  {
                                    attrId: '438976',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: { type: ['customize'], code: '1' },
                                  },
                                  {
                                    attrId: '612397',
                                    code: 'attrValueName',
                                    name: '属性值名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                  },
                                ],
                              },
                            ],
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatareloadDataSource99.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatareloadDataSource99,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_465845')}
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'属性值列表'}
                isFlexColumn={false}
                pageSize={data?.qryAttrValuePage?.resultData?.size}
                current={data?.qryAttrValuePage?.resultData?.current}
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
                    title: '属性值标识',
                    key: 'attrValueId',
                    dataIndex: 'attrValueId',
                    id: '514558',
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
                    title: '属性值名称',
                    key: 'attrValueName',
                    dataIndex: 'attrValueName',
                    id: '9448084',
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
                    title: '属性值编码',
                    key: 'attrValueCode',
                    dataIndex: 'attrValueCode',
                    className: 'divider',
                    id: '625893',
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
                    title: '属性值',
                    key: 'attrValue',
                    dataIndex: 'attrValue',
                    id: '596582',
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
                    title: '属性值描述',
                    key: 'attrValueDesc',
                    dataIndex: 'attrValueDesc',
                    id: '145296',
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
                    title: '排序',
                    key: 'sort',
                    dataIndex: 'sort',
                    id: '032085',
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
                rowKeyType={'specified'}
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
                rowKey={'attrValueId'}
                dataSource={data?.qryAttrValuePage?.resultData?.records}
                total={data?.qryAttrValuePage?.resultData?.total}
                fieldName={'data.qryAttrValuePage.resultData.total'}
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '460721',
                    checked: true,
                  },
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '110605',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '928354',
                    checked: true,
                  },
                ]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.qryAttrValuePage.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_8475669',
                  uid: 'Table_8475669',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDatashowModal20: any = [
                    {
                      type: 'showModal',
                      dataId: 166633079920216640,
                      shielding: true,
                      options: {
                        compId: 'showModal',
                        compName: 'page',
                        id: '192728',
                        pageJsonId: '4868135',
                        type: 'confirm',
                        title: '确定要删除该属性值吗？',
                        content: '该操作为物理删除，请谨慎操作！',
                        okText: '确定',
                        cancelText: '取消',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166633079920225440,
                          shielding: true,
                          options: {
                            compId: 'Table_311334',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '183118',
                            loading: true,
                          },
                          line_number: 2,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 166633085333523940,
                          shielding: true,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '434597',
                            pageJsonId: '4868135',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'delAttrValue',
                            _apiCode: 'delAttrValue',
                            _source: 'rhin',
                            _serviceId: '880729083267600384',
                            _serviceTitle: '删除规格属性值-tsm: delAttrValue',
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
                                dataKey: '590311_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'attrValueId',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'long',
                                    mustFlag: 'T',
                                    defaultValue: '',
                                    _id: 'path.attrValueId',
                                    compType: 'Input',
                                    parents: ['path'],
                                    id: 'path.attrValueId',
                                    dataKey: '590311_path.attrValueId',
                                    value: {
                                      type: ['customize'],
                                      code: '$rowId$',
                                    },
                                  },
                                ],
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '590311_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '590311_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '590311_body',
                              },
                            ],
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'ifelse',
                              shielding: true,
                              condition: [
                                {
                                  condId: '2041112',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_434597?.resultCode$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166633085333576960,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166633085333608030,
                                  children: [],
                                  condition: [],
                                  desc: '失败',
                                  shielding: true,
                                },
                              ],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'showMessage',
                                  dataId: 166633085333507700,
                                  shielding: true,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '9487317',
                                    pageJsonId: '4868135',
                                    type: 'success',
                                    value: '规格属性删除成功！',
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 166633085333539170,
                                  shielding: true,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '447896',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshAttrValueTable',
                                    customFuncParams: '$data.local_vars$',
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
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowModal20.params =
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
                    eventDatashowModal20,
                    { rowId, row, index },
                    'showModal',
                    {
                      id: 'showModal',
                      name: 'showModal',
                      type: 'showModal',
                      platform: 'pc',
                    },
                  );
                  const eventDataapiRequest769: any = [
                    {
                      type: 'apiRequest',
                      dataId: 166752789571598340,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '141131',
                        pageJsonId: '4868135',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'delAttrValue',
                        _apiCode: 'delAttrValue',
                        _source: 'rhin',
                        _serviceId: '880729083267600384',
                        _serviceTitle: '删除规格属性值-tsm: delAttrValue',
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
                            dataKey: '590311_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            children: [
                              {
                                code: 'attrValueId',
                                name: '新增节点',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'T',
                                defaultValue: '',
                                _id: 'path.attrValueId',
                                compType: 'Input',
                                parents: ['path'],
                                id: 'path.attrValueId',
                                dataKey: '590311_path.attrValueId',
                                value: { type: ['customize'], code: '$rowId$' },
                              },
                            ],
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '590311_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '590311_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '590311_body',
                          },
                        ],
                        _sourceName: '删除规格属性值-tsm',
                      },
                      line_number: 7,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '2041112',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_141131?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166752789571541200,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166752789571518200,
                              children: [],
                              condition: [],
                              desc: '失败',
                            },
                          ],
                          line_number: 8,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166752789571580900,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '354018',
                                pageJsonId: '4868135',
                                type: 'success',
                                value: '规格属性删除成功！',
                              },
                              line_number: 9,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166752789571520500,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '150554',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshAttrValueTable',
                                customFuncParams: '$data.local_vars$',
                              },
                              line_number: 10,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest769.params =
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
                    eventDataapiRequest769,
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
                  const eventDatareloadDataSource100: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 166627943042821820,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '707923',
                        pageJsonId: '4868135',
                        dataSourceId: 166627997940219940,
                        dataSourceName: 'qryAttrValuePage',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '390118',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            key: 'header',
                            _codePath: ['header'],
                            _idpath: ['390118'],
                          },
                          {
                            attrId: '4152634',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            key: 'path',
                            _codePath: ['path'],
                            _idpath: ['4152634'],
                          },
                          {
                            attrId: '962915',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            key: 'query',
                            _codePath: ['query'],
                            _idpath: ['962915'],
                          },
                          {
                            attrId: '455339',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '76879',
                                code: 'attrId',
                                name: 'attrId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                key: 'body.attrId',
                                value: {
                                  type: ['datasource', 'local_vars', 'data'],
                                  code: 'attrId',
                                },
                                _codePath: ['body', 'attrId'],
                                _idpath: ['455339', '76879'],
                              },
                              {
                                attrId: '438976',
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
                                _codePath: ['body', 'pageNum'],
                                _idpath: ['455339', '438976'],
                              },
                              {
                                attrId: '720824',
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
                                _codePath: ['body', 'pageSize'],
                                _idpath: ['455339', '720824'],
                              },
                              {
                                attrId: '612397',
                                code: 'attrValueName',
                                name: '属性值名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['body', 'attrValueName'],
                                _idpath: ['455339', '612397'],
                                value: {
                                  type: [
                                    'form',
                                    'Form_918102',
                                    'getFieldsValue',
                                  ],
                                  code: 'attrValueName',
                                },
                              },
                              {
                                attrId: '457851',
                                code: 'attrValue',
                                name: '属性值编码',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['body', 'attrValue'],
                                _idpath: ['455339', '457851'],
                                value: {
                                  type: [
                                    'form',
                                    'Form_918102',
                                    'getFieldsValue',
                                  ],
                                  code: 'attrValue',
                                },
                              },
                            ],
                            key: 'body',
                            _codePath: ['body'],
                            _idpath: ['455339'],
                          },
                        ],
                        dataSourceSetValue: [
                          {
                            attrId: '201802',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '310191',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '4359087',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '420412',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '971068',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '74894',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '52196554',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '434214',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '442403',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '6105024',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '689363',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'fieldArray',
                                children: [
                                  {
                                    attrId: '819925',
                                    code: 'listItem',
                                    name: '列表元素',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                    parentKey: 'orders',
                                  },
                                ],
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '7469607',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '797492',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '136398',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '787559',
                                    code: 'updateDate',
                                    name: 'updateDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '566995',
                                    code: 'attrValueId',
                                    name: 'attrValueId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '615718',
                                    code: 'statusCd',
                                    name: 'statusCd',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '79227',
                                    code: 'remark',
                                    name: 'remark',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '682951',
                                    code: 'sort',
                                    name: 'sort',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '506717',
                                    code: 'attrValueCode',
                                    name: 'attrValueCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '5619174',
                                    code: 'attrValueName',
                                    name: 'attrValueName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '5365482',
                                    code: 'createStaff',
                                    name: 'createStaff',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '079032',
                                    code: 'createStaffName',
                                    name: 'createStaffName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '87493',
                                    code: 'attrValueDesc',
                                    name: 'attrValueDesc',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '8983665',
                                    code: 'attrId',
                                    name: 'attrId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '576858',
                                    code: 'attrValue',
                                    name: 'attrValue',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '156425',
                                    code: 'createDate',
                                    name: 'createDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '645791',
                                    code: 'updateStaff',
                                    name: 'updateStaff',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                ],
                                parentKey: 'resultData',
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
                  eventDatareloadDataSource100.params =
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
                    eventDatareloadDataSource100,
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
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal215: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166633054222662050,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '884018',
                        pageJsonId: '4868135',
                        modalname: '/guigeshuxingzhixiangqing3756',
                        pageId: '900586377250050048',
                        paramsObj: {
                          bizId: '$rowId$',
                          sceneCode: 'V',
                          attrValueObj: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          bizId: '$rowId$',
                          sceneCode: 'V',
                          attrValueObj: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal215.params =
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
                    eventDatashowCustomModal215,
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
                  const eventDatashowCustomModal216: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166633059434299200,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '846936',
                        pageJsonId: '4868135',
                        modalname: '/guigeshuxingzhixiangqing3756',
                        pageId: '900586377250050048',
                        modalPath: '/guigeshuxingzhixiangqing3756',
                        paramsObj: {
                          bizId: '$rowId$',
                          sceneCode: 'M',
                          attrId: '$data.local_vars.attrId$',
                          attrValueObj: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          bizId: '$rowId$',
                          sceneCode: 'M',
                          attrId: '$data.local_vars.attrId$',
                          attrValueObj: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 166633062384913000,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '9614713',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshAttrValueTable',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal216.params =
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
                    eventDatashowCustomModal216,
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
                ref={(r: any) => refs.setComponentRef(r, 'Table_8475669')}
                {...injectData}
              />
            </Card>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(AttrSpecManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
