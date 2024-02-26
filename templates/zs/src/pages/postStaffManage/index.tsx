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

const pageId = '884615633470709760';
const PostStaffManage$$Page: React.FC<PageProps> = ({
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
  const refreshPostTable = (options_635272: any) => {
    const eventDatasetLoading15: any = [
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
    eventDatasetLoading15.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading15, { options_635272 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource12: any = [
      {
        type: 'reloadDataSource',
        dataId: 166158463412134980,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '443539',
          pageJsonId: '4868135',
          dataSourceId: 166251844053985300,
          dataSourceName: 'qryDcPostInfoPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '8571343',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '623994',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '7795932',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '366985',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '213186',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageSize' },
                  type: 'long',
                  key: 'body.pageSize',
                },
                {
                  attrId: '6586755',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageNum' },
                  type: 'long',
                  key: 'body.pageNum',
                },
                {
                  attrId: '283757',
                  code: 'postCode',
                  name: 'postCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.postCode',
                  value: {
                    type: ['form', 'Form_148709', 'getFieldsValue'],
                    code: 'postCode',
                  },
                },
                {
                  attrId: '3857728',
                  code: 'postName',
                  name: 'postName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.postName',
                  value: {
                    type: ['form', 'Form_148709', 'getFieldsValue'],
                    code: 'postName',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '734589',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '828707',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '014897',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '2990455',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '632625',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '93959',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '0566406',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '6220154',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '0095965',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '2027618',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '674766',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '440586',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '8432556',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '749863',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '187045',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '26293',
                      code: 'statusDate',
                      name: 'statusDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '039913',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '831405',
                      code: 'postDesc',
                      name: 'postDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '19955185',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '63762',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4696009',
                      code: 'postId',
                      name: 'postId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '607855',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '353693',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '658018',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '74668',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '035981',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '070274',
                      code: 'postName',
                      name: 'postName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0180453',
                      code: 'postCode',
                      name: 'postCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3478656',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8655605',
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
            type: 'clearValue',
            dataId: 166261650183060060,
            options: {
              compId: 'Input_3889064_9290923',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Input',
              id: '743091',
            },
            line_number: 3,
          },
          {
            type: 'clearValue',
            dataId: 166261650664589250,
            options: {
              compId: 'Input_33684855_42499777',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Input',
              id: '705273',
            },
            line_number: 4,
          },
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
            line_number: 5,
          },
          {
            type: 'reloadDataSource',
            dataId: 166158712222955550,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '038589',
              pageJsonId: '4868135',
              dataSourceId: 166260497941098270,
              dataSourceName: 'qryOaUserByPostId',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '208931',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'header',
                },
                {
                  attrId: '351952',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'path',
                },
                {
                  attrId: '694217',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'query',
                },
                {
                  attrId: '1969073',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '361374',
                      code: 'pageSize',
                      name: 'pageSize',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: 'pageSize' },
                      type: 'long',
                      key: 'body.pageSize',
                    },
                    {
                      attrId: '0275977',
                      code: 'pageNum',
                      name: 'pageNum',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: 'pageNum' },
                      type: 'long',
                      key: 'body.pageNum',
                    },
                    {
                      attrId: '278392',
                      code: 'usrLogin',
                      name: 'usrLogin',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.usrLogin',
                    },
                    {
                      attrId: '932936',
                      code: 'usrLastName',
                      name: 'usrLastName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.usrLastName',
                    },
                    {
                      attrId: '109123',
                      code: 'postId',
                      name: 'postId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.postId',
                      value: {
                        type: ['EMPTY_DATA', 'string'],
                        hideAttr: true,
                        code: '$EMPTY_DATA.string$',
                      },
                    },
                  ],
                  key: 'body',
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '402878',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '3140656',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '533039',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '044012',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  children: [
                    {
                      attrId: '291807',
                      code: 'total',
                      name: 'total',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '805812',
                      code: 'current',
                      name: 'current',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '795535',
                      code: 'hitCount',
                      name: 'hitCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '133079',
                      code: 'size',
                      name: 'size',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '6580225',
                      code: 'optimizeCountSql',
                      name: 'optimizeCountSql',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '915747',
                      code: 'maxLimit',
                      name: 'maxLimit',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9184357',
                      code: 'orders',
                      name: 'orders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'fieldArray',
                      children: [
                        {
                          attrId: '43268985',
                          code: 'listItem',
                          name: '列表元素',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                        },
                      ],
                    },
                    {
                      attrId: '037774',
                      code: 'countId',
                      name: 'countId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0322',
                      code: 'isSearchCount',
                      name: 'isSearchCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '451743',
                      code: 'records',
                      name: 'records',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '292431',
                          code: 'usrUdfShortName',
                          name: 'usrUdfShortName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '658939',
                          code: 'usrStatus',
                          name: 'usrStatus',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '2451306',
                          code: 'actKey',
                          name: 'actKey',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '042233',
                          code: 'subUsrUdfJobLevels',
                          name: 'subUsrUdfJobLevels',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '65453492',
                          code: 'postUserRelId',
                          name: 'postUserRelId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                        },
                        {
                          attrId: '387436',
                          code: 'usrType',
                          name: 'usrType',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '4514297',
                          code: 'usrEndDate',
                          name: 'usrEndDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '437569',
                          code: 'usrCreate',
                          name: 'usrCreate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '9194203',
                          code: 'usrPwdResetAttemptsCtr',
                          name: 'usrPwdResetAttemptsCtr',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '3839975',
                          code: 'actName',
                          name: 'actName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '3029115',
                          code: 'usrProvisionedDate',
                          name: 'usrProvisionedDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '367332',
                          code: 'actUdfNum',
                          name: 'actUdfNum',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '6890788',
                          code: 'usrLocked',
                          name: 'usrLocked',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '86230384',
                          code: 'usrUdfDepartment',
                          name: 'usrUdfDepartment',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '60294346',
                          code: 'usrUdfSex',
                          name: 'usrUdfSex',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '528666',
                          code: 'usrUdfEmployeeId',
                          name: 'usrUdfEmployeeId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '4832433',
                          code: 'usrUdfOaNum',
                          name: 'usrUdfOaNum',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '245683',
                          code: 'usrUdfJobLevel',
                          name: 'usrUdfJobLevel',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '025229',
                          code: 'usrUdfBelongComp',
                          name: 'usrUdfBelongComp',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '126933',
                          code: 'usrFirstName',
                          name: 'usrFirstName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '333355',
                          code: 'usrUdfIdNum',
                          name: 'usrUdfIdNum',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '902091',
                          code: 'subOrgNames',
                          name: 'subOrgNames',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '898502',
                          code: 'usrKey',
                          name: 'usrKey',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '5904337',
                          code: 'usrEmpType',
                          name: 'usrEmpType',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '15464166',
                          code: 'usrChangePwdAtNextLogon',
                          name: 'usrChangePwdAtNextLogon',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '9878023',
                          code: 'usrUdfOrgOrder',
                          name: 'usrUdfOrgOrder',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '21940825',
                          code: 'usrLastName',
                          name: 'usrLastName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '095348',
                          code: 'orgName',
                          name: 'orgName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '1189845',
                          code: 'usrUdfSysMask',
                          name: 'usrUdfSysMask',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '032101',
                          code: 'cardInfo',
                          name: 'cardInfo',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '389082',
                          code: 'usrUpdate',
                          name: 'usrUpdate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '009621',
                          code: 'usrUdfOaOrg',
                          name: 'usrUdfOaOrg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '29206322',
                          code: 'usrPassword',
                          name: 'usrPassword',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '654225',
                          code: 'usrCreated',
                          name: 'usrCreated',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '983477',
                          code: 'usrUdfMgrErpOrg',
                          name: 'usrUdfMgrErpOrg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '319029',
                          code: 'subUsrUdfOrgOrders',
                          name: 'subUsrUdfOrgOrders',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '395653',
                          code: 'usrLogin',
                          name: 'usrLogin',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '913128',
                          code: 'usrEmail',
                          name: 'usrEmail',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '367976',
                          code: 'subUsrUdfOaOrgs',
                          name: 'subUsrUdfOaOrgs',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '14533',
                          code: 'usrLoginAttemptsCtr',
                          name: 'usrLoginAttemptsCtr',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '9205846',
                          code: 'usrUdfMobile',
                          name: 'usrUdfMobile',
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
            line_number: 6,
            callback1: [
              {
                type: 'clearTableSelected',
                dataId: 166415850112224220,
                options: {
                  compId: 'Table_311334',
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Table',
                  id: '632791',
                },
                line_number: 7,
              },
            ],
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
            line_number: 8,
          },
        ],
      },
    ];
    eventDatareloadDataSource12.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource12,
      { options_635272 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const refreshUserPostRelTable = (options_0109504: any) => {
    const eventDatasetLoading16: any = [
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
    eventDatasetLoading16.params =
      [
        {
          title: '事件入参',
          name: 'options_0109504',
          value: '$options_0109504$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading16, { options_0109504 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource13: any = [
      {
        type: 'reloadDataSource',
        dataId: 166158819318326530,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '521136',
          pageJsonId: '4868135',
          dataSourceId: 166260497941098270,
          dataSourceName: 'qryOaUserByPostId',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '208931',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '351952',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '694217',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '1969073',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '361374',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageSize' },
                  type: 'long',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '0275977',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageNum' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['context', '$options_0109504$'], code: '' },
                },
                {
                  attrId: '278392',
                  code: 'usrLogin',
                  name: 'usrLogin',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrLogin',
                  value: {
                    type: ['form', 'Form_148709_504968', 'getFieldsValue'],
                    code: 'usrLogin',
                  },
                },
                {
                  attrId: '932936',
                  code: 'usrLastName',
                  name: 'usrLastName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrLastName',
                  value: {
                    type: ['form', 'Form_148709_504968', 'getFieldsValue'],
                    code: 'usrLastName',
                  },
                },
                {
                  attrId: '109123',
                  code: 'postId',
                  name: 'postId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.postId',
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'row_post_id',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '402878',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '3140656',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '533039',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '044012',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '291807',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '805812',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '795535',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '133079',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '6580225',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '915747',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '9184357',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '43268985',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '037774',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '0322',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '451743',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '292431',
                      code: 'usrUdfShortName',
                      name: 'usrUdfShortName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '658939',
                      code: 'usrStatus',
                      name: 'usrStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2451306',
                      code: 'actKey',
                      name: 'actKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '042233',
                      code: 'subUsrUdfJobLevels',
                      name: 'subUsrUdfJobLevels',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '65453492',
                      code: 'postUserRelId',
                      name: 'postUserRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '387436',
                      code: 'usrType',
                      name: 'usrType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4514297',
                      code: 'usrEndDate',
                      name: 'usrEndDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '437569',
                      code: 'usrCreate',
                      name: 'usrCreate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9194203',
                      code: 'usrPwdResetAttemptsCtr',
                      name: 'usrPwdResetAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3839975',
                      code: 'actName',
                      name: 'actName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3029115',
                      code: 'usrProvisionedDate',
                      name: 'usrProvisionedDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '367332',
                      code: 'actUdfNum',
                      name: 'actUdfNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6890788',
                      code: 'usrLocked',
                      name: 'usrLocked',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '86230384',
                      code: 'usrUdfDepartment',
                      name: 'usrUdfDepartment',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '60294346',
                      code: 'usrUdfSex',
                      name: 'usrUdfSex',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '528666',
                      code: 'usrUdfEmployeeId',
                      name: 'usrUdfEmployeeId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4832433',
                      code: 'usrUdfOaNum',
                      name: 'usrUdfOaNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '245683',
                      code: 'usrUdfJobLevel',
                      name: 'usrUdfJobLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '025229',
                      code: 'usrUdfBelongComp',
                      name: 'usrUdfBelongComp',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '126933',
                      code: 'usrFirstName',
                      name: 'usrFirstName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '333355',
                      code: 'usrUdfIdNum',
                      name: 'usrUdfIdNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '902091',
                      code: 'subOrgNames',
                      name: 'subOrgNames',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '898502',
                      code: 'usrKey',
                      name: 'usrKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5904337',
                      code: 'usrEmpType',
                      name: 'usrEmpType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '15464166',
                      code: 'usrChangePwdAtNextLogon',
                      name: 'usrChangePwdAtNextLogon',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9878023',
                      code: 'usrUdfOrgOrder',
                      name: 'usrUdfOrgOrder',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '21940825',
                      code: 'usrLastName',
                      name: 'usrLastName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '095348',
                      code: 'orgName',
                      name: 'orgName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1189845',
                      code: 'usrUdfSysMask',
                      name: 'usrUdfSysMask',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '032101',
                      code: 'cardInfo',
                      name: 'cardInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '389082',
                      code: 'usrUpdate',
                      name: 'usrUpdate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '009621',
                      code: 'usrUdfOaOrg',
                      name: 'usrUdfOaOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '29206322',
                      code: 'usrPassword',
                      name: 'usrPassword',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '654225',
                      code: 'usrCreated',
                      name: 'usrCreated',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '983477',
                      code: 'usrUdfMgrErpOrg',
                      name: 'usrUdfMgrErpOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '319029',
                      code: 'subUsrUdfOrgOrders',
                      name: 'subUsrUdfOrgOrders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '395653',
                      code: 'usrLogin',
                      name: 'usrLogin',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '913128',
                      code: 'usrEmail',
                      name: 'usrEmail',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '367976',
                      code: 'subUsrUdfOaOrgs',
                      name: 'subUsrUdfOaOrgs',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '14533',
                      code: 'usrLoginAttemptsCtr',
                      name: 'usrLoginAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9205846',
                      code: 'usrUdfMobile',
                      name: 'usrUdfMobile',
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
            dataId: 166158824240183800,
            options: {
              compId: 'Table_8475669',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '630551',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166158826773612300,
            options: {
              compId: 'Table_8475669',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '615935',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource13.params =
      [
        {
          title: '事件入参',
          name: 'options_0109504',
          value: '$options_0109504$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource13,
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
    refreshPostTable,
    refreshUserPostRelTable,
  }));

  useEffect(() => {
    const eventDataapiRequest193: any = [
      {
        type: 'apiRequest',
        dataId: 166315316675644900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '387732',
          pageJsonId: '4868135',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCountyRegionListByProvinceId',
          _apiCode: 'qryCountyRegionListByProvinceId',
          _source: 'rhin',
          _serviceId: '887289928231636992',
          _serviceTitle:
            '根据省份ID查询所有该省份下的区县列表-tsm: qryCountyRegionListByProvinceId',
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
              dataKey: '387732_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'provinceId',
                  name: '省份ID',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.provinceId',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.provinceId',
                  dataKey: '387732_path.provinceId',
                  value: { type: ['customize'], code: '350000' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '387732_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '387732_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '387732_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166315322710798460,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '680377',
              colName: 'areaId',
              data: '$reply_387732?.resultData$',
            },
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest193.params = [] || [];
    CMDGenerator(eventDataapiRequest193, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest194: any = [
      {
        type: 'apiRequest',
        dataId: 166929020418763360,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0148115',
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
              dataKey: '0148115_header',
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
                  dataKey: '0148115_path.attrCode',
                  value: { type: ['customize'], code: 'POST_FILTER_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '0148115_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '0148115_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '0148115_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166929024245238400,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '8678313',
              colName: 'postFilterType',
              data: '$reply_0148115?.resultData$',
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest194.params = [] || [];
    CMDGenerator(eventDataapiRequest194, {}, 'apiRequest', {
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
      className="__CustomClass_4868135__"
    >
      <View
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
          padding: '20px 20px 20px 20px',
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
              name={'岗位管理'}
              cardIconType={'middle'}
              title={'岗位管理'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '2069554',
                  title: '新增岗位',
                  iconPos: 'left',
                  btnType: 'primary',
                  isIcon: false,
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
                const eventDatashowCustomModal72: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166097860339693730,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '224256',
                      pageJsonId: '4868135',
                      modalname: '/addPostInfo',
                      pageId: '884694349495664640',
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
                          customFuncName: 'refreshPostTable',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal72.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal72,
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
                const eventDataapiRequest703: any = [
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
                eventDataapiRequest703.params =
                  [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest703, { e }, 'apiRequest', {
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
                  name={'岗位编码'}
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
                  fieldName={'postCode'}
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
                    const eventDatacallSelfFunc311: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158470687467620,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2038827',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshPostTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc311.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc311,
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
                  name={'岗位名称'}
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
                  fieldName={'postName'}
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
                    const eventDatacallSelfFunc312: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158471466083070,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '64209',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshPostTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc312.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc312,
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
                      const eventDatacallSelfFunc313: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166158469460298370,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '6966413',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshPostTable',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc313.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc313,
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
                      const eventDataclearValue97: any = [
                        {
                          type: 'clearValue',
                          dataId: 166261639066743360,
                          options: {
                            compId: 'Input_3889064',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '28230166',
                          },
                          line_number: 1,
                        },
                      ];
                      eventDataclearValue97.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDataclearValue97, { e }, 'clearValue', {
                        id: 'clearValue',
                        name: 'clearValue',
                        type: 'clearValue',
                        platform: 'pc',
                      });
                      const eventDataclearValue98: any = [
                        {
                          type: 'clearValue',
                          dataId: 166261639311211520,
                          options: {
                            compId: 'Input_33684855',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '283168',
                          },
                          line_number: 2,
                        },
                      ];
                      eventDataclearValue98.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDataclearValue98, { e }, 'clearValue', {
                        id: 'clearValue',
                        name: 'clearValue',
                        type: 'clearValue',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_499055')}
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'岗位网格列表'}
                isFlexColumn={false}
                pageSize={5}
                current={data?.qryDcPostInfoPage?.resultData?.current}
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
                    title: '岗位编码',
                    key: 'postCode',
                    dataIndex: 'postCode',
                    className: '',
                    id: '5376886',
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
                    title: '岗位名称',
                    key: 'postName',
                    dataIndex: 'postName',
                    className: 'divider',
                    id: '578066',
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
                    title: '岗位描述',
                    key: 'postDesc',
                    dataIndex: 'postDesc',
                    className: 'divider',
                    id: '551895',
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
                    title: '岗位过滤类型',
                    key: 'postFilterType',
                    dataIndex: 'postFilterType',
                    id: '2861225',
                    staticService: {
                      labelKey: 'attrValueName',
                      valueKey: 'attrValue',
                    },
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
                    title: '省份',
                    key: 'provinceId',
                    dataIndex: 'provinceId',
                    className: 'divider',
                    id: '1317932',
                    staticDataSource: attrDataMap['PROVINCE_CODE'],
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
                    title: '地市',
                    key: 'lanId',
                    dataIndex: 'lanId',
                    className: 'divider',
                    id: '85788978',
                    staticDataSource: attrDataMap['CITY_CODE'],
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
                    title: '区县',
                    key: 'areaId',
                    dataIndex: 'areaId',
                    className: 'divider',
                    id: '1949734',
                    staticService: {
                      labelKey: 'regionName',
                      valueKey: 'regionId',
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
                    title: '状态',
                    key: 'statusCd',
                    dataIndex: 'statusCd',
                    className: 'divider',
                    id: '07852',
                    staticDataSource: attrDataMap['STATUS_CD'],
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
                fixedAction={false}
                rowSelection={{ type: 'radio' }}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
                pageSizeOptions={'[5,10,20]'}
                rowKey={'postId'}
                rowActions={[
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
                dataSource={data?.qryDcPostInfoPage?.resultData?.records}
                total={data?.qryDcPostInfoPage?.resultData?.total}
                fieldName={'data.qryAttrSpecPage.resultData.current'}
                dataSourceFromDataSourceConfig={
                  'data.qryDcPostInfoPage.resultData.records'
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
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatasetLoading152: any = [
                    {
                      type: 'setLoading',
                      dataId: 166270955433423740,
                      options: {
                        compId: 'Table_311334',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Table',
                        id: '295757',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading152.params =
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
                    eventDatasetLoading152,
                    { page, pageSize },
                    'setLoading',
                    {
                      id: 'setLoading',
                      name: 'setLoading',
                      type: 'setLoading',
                      platform: 'pc',
                    },
                  );
                  const eventDatareloadDataSource77: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 166176656973352100,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '194285',
                        pageJsonId: '4868135',
                        dataSourceId: 166251844053985300,
                        dataSourceName: 'qryDcPostInfoPage',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '8571343',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'header',
                            _codePath: ['header'],
                            _idpath: ['8571343'],
                          },
                          {
                            attrId: '623994',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'path',
                            _codePath: ['path'],
                            _idpath: ['623994'],
                          },
                          {
                            attrId: '7795932',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'query',
                            _codePath: ['query'],
                            _idpath: ['7795932'],
                          },
                          {
                            attrId: '366985',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '213186',
                                code: 'pageSize',
                                name: 'pageSize',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'long',
                                key: 'body.pageSize',
                                value: {
                                  type: ['context', '$pageSize$'],
                                  hideAttr: true,
                                  code: '',
                                },
                                _codePath: ['body', 'pageSize'],
                                _idpath: ['366985', '213186'],
                              },
                              {
                                attrId: '6586755',
                                code: 'pageNum',
                                name: 'pageNum',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'long',
                                key: 'body.pageNum',
                                value: {
                                  type: ['context', '$page$'],
                                  hideAttr: true,
                                  code: '',
                                },
                                _codePath: ['body', 'pageNum'],
                                _idpath: ['366985', '6586755'],
                              },
                              {
                                attrId: '283757',
                                code: 'postCode',
                                name: 'postCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.postCode',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709',
                                    'getFieldsValue',
                                  ],
                                  code: 'postCode',
                                },
                                _codePath: ['body', 'postCode'],
                                _idpath: ['366985', '283757'],
                              },
                              {
                                attrId: '3857728',
                                code: 'postName',
                                name: 'postName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.postName',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709',
                                    'getFieldsValue',
                                  ],
                                  code: 'postName',
                                },
                                _codePath: ['body', 'postName'],
                                _idpath: ['366985', '3857728'],
                              },
                            ],
                            key: 'body',
                            _codePath: ['body'],
                            _idpath: ['366985'],
                          },
                        ],
                        dataSourceSetValue: [
                          {
                            attrId: '734589',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '828707',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '014897',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '2990455',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '632625',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '93959',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '0566406',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '6220154',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '0095965',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '2027618',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '674766',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'fieldArray',
                                children: [
                                  {
                                    attrId: '440586',
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
                                attrId: '8432556',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '749863',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                                parentKey: 'resultData',
                              },
                              {
                                attrId: '187045',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '26293',
                                    code: 'statusDate',
                                    name: 'statusDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '039913',
                                    code: 'updateDate',
                                    name: 'updateDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '831405',
                                    code: 'postDesc',
                                    name: 'postDesc',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '19955185',
                                    code: 'statusCd',
                                    name: 'statusCd',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '63762',
                                    code: 'remark',
                                    name: 'remark',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '4696009',
                                    code: 'postId',
                                    name: 'postId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '607855',
                                    code: 'lanId',
                                    name: 'lanId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '353693',
                                    code: 'provinceId',
                                    name: 'provinceId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '658018',
                                    code: 'createStaff',
                                    name: 'createStaff',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '74668',
                                    code: 'createStaffName',
                                    name: 'createStaffName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '035981',
                                    code: 'areaId',
                                    name: 'areaId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '070274',
                                    code: 'postName',
                                    name: 'postName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '0180453',
                                    code: 'postCode',
                                    name: 'postCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '3478656',
                                    code: 'createDate',
                                    name: 'createDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentCode: 'records',
                                    parentKey: 'records',
                                  },
                                  {
                                    attrId: '8655605',
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
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166270956280586400,
                          options: {
                            compId: 'Table_311334',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '456497',
                            loading: false,
                          },
                          line_number: 3,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 166270956400893660,
                          options: {
                            compId: 'Table_311334',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '0481562',
                            loading: false,
                          },
                          line_number: 4,
                        },
                      ],
                    },
                  ];
                  eventDatareloadDataSource77.params =
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
                    eventDatareloadDataSource77,
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
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDatashowModal4: any = [
                    {
                      type: 'showModal',
                      dataId: 166156974227855780,
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
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '768139',
                            pageJsonId: '4868135',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'delDcPostInfoById',
                            _apiCode: 'delDcPostInfoById',
                            _source: 'rhin',
                            _serviceId: '885050415191117824',
                            _serviceTitle:
                              '根据岗位ID删除岗位: delDcPostInfoById',
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
                                    code: 'dcPostInfoId',
                                    name: '岗位ID',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'T',
                                    defaultValue: '',
                                    _id: 'path.dcPostInfoId',
                                    compType: 'Input',
                                    parents: ['path'],
                                    id: 'path.dcPostInfoId',
                                    dataKey: '768139_path.dcPostInfoId',
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
                                dataKey: '768139_path',
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
                              condition: [
                                {
                                  condId: '9758804',
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
                              dataId: 166261936850540480,
                              elseIfs: [],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 166261939980743000,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '1653008',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshPostTable',
                                  },
                                  line_number: 5,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '81941',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_768139?.resultCode$',
                                    operate: '!=',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166261940782031100,
                              elseIfs: [],
                              line_number: 6,
                            },
                          ],
                          callback2: [],
                        },
                        {
                          type: 'setLoading',
                          dataId: 166261961381047230,
                          options: {
                            compId: 'Table_311334',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '722429',
                            loading: false,
                          },
                          line_number: 7,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowModal4.params =
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
                    eventDatashowModal4,
                    { rowId, row, index },
                    'showModal',
                    {
                      id: 'showModal',
                      name: 'showModal',
                      type: 'showModal',
                      platform: 'pc',
                    },
                  );
                }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal73: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166158498374371460,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '454329',
                        pageJsonId: '4868135',
                        modalname: '/editPostInfo',
                        pageId: '884729641678057472',
                        paramsObj: {
                          bizId: '$rowId$',
                          sceneCode: 'M',
                          dcHrAct: '$row$',
                          dcPostInfo: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          bizId: '$rowId$',
                          sceneCode: 'M',
                          dcHrAct: '$row$',
                          dcPostInfo: '$row$',
                        },
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
                            customFuncName: 'refreshPostTable',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal73.params =
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
                    eventDatashowCustomModal73,
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
                onSelectChange={(selectedRowKeys: any, selectedRows: any) => {
                  const eventDatasetDataSource96: any = [
                    {
                      type: 'setDataSource',
                      dataId: 166415620219100580,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '3602623',
                        pageJsonId: '4868135',
                        dataSourceId: 166158805345111460,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '591942',
                            code: 'row_post_code',
                            name: '当前选中行postCode',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$selectedRows[0]$'],
                              hideAttr: false,
                              code: 'postCode',
                            },
                          },
                          {
                            attrId: '991205',
                            code: 'row_post_name',
                            name: '当前选中行postName',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$selectedRows[0]$'],
                              hideAttr: false,
                              code: 'postName',
                            },
                          },
                          {
                            attrId: '827615',
                            code: 'row_post_id',
                            name: '当前选中行postId',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$selectedRows[0]$'],
                              hideAttr: false,
                              code: 'postId',
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
                          type: 'clearValue',
                          dataId: 166415620219128160,
                          options: {
                            compId: 'Input_33684855_42499777',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '98882815',
                          },
                          line_number: 2,
                        },
                        {
                          type: 'clearValue',
                          dataId: 166415620219115300,
                          options: {
                            compId: 'Input_3889064_9290923',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '218126',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'reloadDataSource',
                          dataId: 166415620219117500,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '649639',
                            pageJsonId: '4868135',
                            dataSourceId: 166260497941098270,
                            dataSourceName: 'qryOaUserByPostId',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '208931',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'header',
                              },
                              {
                                attrId: '351952',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'path',
                              },
                              {
                                attrId: '694217',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'query',
                              },
                              {
                                attrId: '1969073',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '361374',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: 'pageSize',
                                    },
                                    type: 'long',
                                    key: 'body.pageSize',
                                    value: { type: ['customize'], code: '5' },
                                  },
                                  {
                                    attrId: '0275977',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: 'pageNum',
                                    },
                                    type: 'long',
                                    key: 'body.pageNum',
                                    value: { type: ['customize'], code: '1' },
                                  },
                                  {
                                    attrId: '278392',
                                    code: 'usrLogin',
                                    name: 'usrLogin',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.usrLogin',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_148709_504968',
                                        'getFieldsValue',
                                      ],
                                      code: 'usrLogin',
                                    },
                                  },
                                  {
                                    attrId: '932936',
                                    code: 'usrLastName',
                                    name: 'usrLastName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.usrLastName',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_148709_504968',
                                        'getFieldsValue',
                                      ],
                                      code: 'usrLastName',
                                    },
                                  },
                                  {
                                    attrId: '109123',
                                    code: 'postId',
                                    name: 'postId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.postId',
                                    value: {
                                      type: ['context', '$selectedRows[0]$'],
                                      hideAttr: false,
                                      code: 'postId',
                                    },
                                  },
                                ],
                                key: 'body',
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '402878',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '3140656',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '533039',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '044012',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '291807',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '805812',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '795535',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '133079',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '6580225',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '915747',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9184357',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '43268985',
                                        code: 'listItem',
                                        name: '列表元素',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                      },
                                    ],
                                  },
                                  {
                                    attrId: '037774',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0322',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '451743',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '292431',
                                        code: 'usrUdfShortName',
                                        name: 'usrUdfShortName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '658939',
                                        code: 'usrStatus',
                                        name: 'usrStatus',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2451306',
                                        code: 'actKey',
                                        name: 'actKey',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '042233',
                                        code: 'subUsrUdfJobLevels',
                                        name: 'subUsrUdfJobLevels',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '65453492',
                                        code: 'postUserRelId',
                                        name: 'postUserRelId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '387436',
                                        code: 'usrType',
                                        name: 'usrType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4514297',
                                        code: 'usrEndDate',
                                        name: 'usrEndDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '437569',
                                        code: 'usrCreate',
                                        name: 'usrCreate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9194203',
                                        code: 'usrPwdResetAttemptsCtr',
                                        name: 'usrPwdResetAttemptsCtr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3839975',
                                        code: 'actName',
                                        name: 'actName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3029115',
                                        code: 'usrProvisionedDate',
                                        name: 'usrProvisionedDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '367332',
                                        code: 'actUdfNum',
                                        name: 'actUdfNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '6890788',
                                        code: 'usrLocked',
                                        name: 'usrLocked',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '86230384',
                                        code: 'usrUdfDepartment',
                                        name: 'usrUdfDepartment',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '60294346',
                                        code: 'usrUdfSex',
                                        name: 'usrUdfSex',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '528666',
                                        code: 'usrUdfEmployeeId',
                                        name: 'usrUdfEmployeeId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4832433',
                                        code: 'usrUdfOaNum',
                                        name: 'usrUdfOaNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '245683',
                                        code: 'usrUdfJobLevel',
                                        name: 'usrUdfJobLevel',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '025229',
                                        code: 'usrUdfBelongComp',
                                        name: 'usrUdfBelongComp',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '126933',
                                        code: 'usrFirstName',
                                        name: 'usrFirstName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '333355',
                                        code: 'usrUdfIdNum',
                                        name: 'usrUdfIdNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '902091',
                                        code: 'subOrgNames',
                                        name: 'subOrgNames',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '898502',
                                        code: 'usrKey',
                                        name: 'usrKey',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '5904337',
                                        code: 'usrEmpType',
                                        name: 'usrEmpType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '15464166',
                                        code: 'usrChangePwdAtNextLogon',
                                        name: 'usrChangePwdAtNextLogon',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9878023',
                                        code: 'usrUdfOrgOrder',
                                        name: 'usrUdfOrgOrder',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '21940825',
                                        code: 'usrLastName',
                                        name: 'usrLastName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '095348',
                                        code: 'orgName',
                                        name: 'orgName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '1189845',
                                        code: 'usrUdfSysMask',
                                        name: 'usrUdfSysMask',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '032101',
                                        code: 'cardInfo',
                                        name: 'cardInfo',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '389082',
                                        code: 'usrUpdate',
                                        name: 'usrUpdate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '009621',
                                        code: 'usrUdfOaOrg',
                                        name: 'usrUdfOaOrg',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '29206322',
                                        code: 'usrPassword',
                                        name: 'usrPassword',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '654225',
                                        code: 'usrCreated',
                                        name: 'usrCreated',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '983477',
                                        code: 'usrUdfMgrErpOrg',
                                        name: 'usrUdfMgrErpOrg',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '319029',
                                        code: 'subUsrUdfOrgOrders',
                                        name: 'subUsrUdfOrgOrders',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '395653',
                                        code: 'usrLogin',
                                        name: 'usrLogin',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '913128',
                                        code: 'usrEmail',
                                        name: 'usrEmail',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '367976',
                                        code: 'subUsrUdfOaOrgs',
                                        name: 'subUsrUdfOaOrgs',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '14533',
                                        code: 'usrLoginAttemptsCtr',
                                        name: 'usrLoginAttemptsCtr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9205846',
                                        code: 'usrUdfMobile',
                                        name: 'usrUdfMobile',
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
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource96.params =
                    [
                      {
                        title: '表格选中行id(单选)',
                        name: 'selectedRowKeys',
                        value: '$selectedRowKeys[0]$',
                      },
                      {
                        title: '表格选中行id(多选)',
                        name: 'selectedRowKeys',
                        value: '$selectedRowKeys$',
                        attrType: 'array',
                      },
                      {
                        title: '表格选中行数据(单选)',
                        name: 'selectedRows',
                        value: '$selectedRows[0]$',
                        attrType: 'object',
                      },
                      {
                        title: '表格选中行数据(多选)',
                        name: 'selectedRows',
                        value: '$selectedRows$',
                        attrType: 'objectArray',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDataSource96,
                    { selectedRowKeys, selectedRows },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource97: any = [
                    {
                      type: 'setDataSource',
                      dataId: 166415646067067420,
                      shielding: true,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '457669',
                        pageJsonId: '4868135',
                        dataSourceId: 166158805345111460,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '591942',
                            code: 'row_post_code',
                            name: '当前选中行postCode',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'postCode',
                            },
                          },
                          {
                            attrId: '991205',
                            code: 'row_post_name',
                            name: '当前选中行postName',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'postName',
                            },
                          },
                          {
                            attrId: '827615',
                            code: 'row_post_id',
                            name: '当前选中行postId',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'postId',
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'clearValue',
                          dataId: 166415646067027650,
                          shielding: true,
                          options: {
                            compId: 'Input_33684855_42499777',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '161657',
                          },
                          line_number: 6,
                        },
                        {
                          type: 'clearValue',
                          dataId: 166415646067054820,
                          shielding: true,
                          options: {
                            compId: 'Input_3889064_9290923',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '600744',
                          },
                          line_number: 7,
                        },
                        {
                          type: 'reloadDataSource',
                          dataId: 166415646067087170,
                          shielding: true,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '1573653',
                            pageJsonId: '4868135',
                            dataSourceId: 166260497941098270,
                            dataSourceName: 'qryOaUserByPostId',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '208931',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'header',
                              },
                              {
                                attrId: '351952',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'path',
                              },
                              {
                                attrId: '694217',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'query',
                              },
                              {
                                attrId: '1969073',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '361374',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: 'pageSize',
                                    },
                                    type: 'long',
                                    key: 'body.pageSize',
                                    value: { type: [], code: 'pageSize' },
                                  },
                                  {
                                    attrId: '0275977',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: 'pageNum',
                                    },
                                    type: 'long',
                                    key: 'body.pageNum',
                                    value: { type: [], code: 'pageNum' },
                                  },
                                  {
                                    attrId: '278392',
                                    code: 'usrLogin',
                                    name: 'usrLogin',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.usrLogin',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_148709_504968',
                                        'getFieldsValue',
                                      ],
                                      code: 'usrLogin',
                                    },
                                  },
                                  {
                                    attrId: '932936',
                                    code: 'usrLastName',
                                    name: 'usrLastName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.usrLastName',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_148709_504968',
                                        'getFieldsValue',
                                      ],
                                      code: 'usrLastName',
                                    },
                                  },
                                  {
                                    attrId: '109123',
                                    code: 'postId',
                                    name: 'postId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.postId',
                                    value: {
                                      type: ['context', '$row$'],
                                      hideAttr: false,
                                      code: 'postId',
                                    },
                                  },
                                ],
                                key: 'body',
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '402878',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '3140656',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '533039',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '044012',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '291807',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '805812',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '795535',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '133079',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '6580225',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '915747',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9184357',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '43268985',
                                        code: 'listItem',
                                        name: '列表元素',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                      },
                                    ],
                                  },
                                  {
                                    attrId: '037774',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0322',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '451743',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '292431',
                                        code: 'usrUdfShortName',
                                        name: 'usrUdfShortName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '658939',
                                        code: 'usrStatus',
                                        name: 'usrStatus',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2451306',
                                        code: 'actKey',
                                        name: 'actKey',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '042233',
                                        code: 'subUsrUdfJobLevels',
                                        name: 'subUsrUdfJobLevels',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '65453492',
                                        code: 'postUserRelId',
                                        name: 'postUserRelId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '387436',
                                        code: 'usrType',
                                        name: 'usrType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4514297',
                                        code: 'usrEndDate',
                                        name: 'usrEndDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '437569',
                                        code: 'usrCreate',
                                        name: 'usrCreate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9194203',
                                        code: 'usrPwdResetAttemptsCtr',
                                        name: 'usrPwdResetAttemptsCtr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3839975',
                                        code: 'actName',
                                        name: 'actName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3029115',
                                        code: 'usrProvisionedDate',
                                        name: 'usrProvisionedDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '367332',
                                        code: 'actUdfNum',
                                        name: 'actUdfNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '6890788',
                                        code: 'usrLocked',
                                        name: 'usrLocked',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '86230384',
                                        code: 'usrUdfDepartment',
                                        name: 'usrUdfDepartment',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '60294346',
                                        code: 'usrUdfSex',
                                        name: 'usrUdfSex',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '528666',
                                        code: 'usrUdfEmployeeId',
                                        name: 'usrUdfEmployeeId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4832433',
                                        code: 'usrUdfOaNum',
                                        name: 'usrUdfOaNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '245683',
                                        code: 'usrUdfJobLevel',
                                        name: 'usrUdfJobLevel',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '025229',
                                        code: 'usrUdfBelongComp',
                                        name: 'usrUdfBelongComp',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '126933',
                                        code: 'usrFirstName',
                                        name: 'usrFirstName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '333355',
                                        code: 'usrUdfIdNum',
                                        name: 'usrUdfIdNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '902091',
                                        code: 'subOrgNames',
                                        name: 'subOrgNames',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '898502',
                                        code: 'usrKey',
                                        name: 'usrKey',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '5904337',
                                        code: 'usrEmpType',
                                        name: 'usrEmpType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '15464166',
                                        code: 'usrChangePwdAtNextLogon',
                                        name: 'usrChangePwdAtNextLogon',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9878023',
                                        code: 'usrUdfOrgOrder',
                                        name: 'usrUdfOrgOrder',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '21940825',
                                        code: 'usrLastName',
                                        name: 'usrLastName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '095348',
                                        code: 'orgName',
                                        name: 'orgName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '1189845',
                                        code: 'usrUdfSysMask',
                                        name: 'usrUdfSysMask',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '032101',
                                        code: 'cardInfo',
                                        name: 'cardInfo',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '389082',
                                        code: 'usrUpdate',
                                        name: 'usrUpdate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '009621',
                                        code: 'usrUdfOaOrg',
                                        name: 'usrUdfOaOrg',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '29206322',
                                        code: 'usrPassword',
                                        name: 'usrPassword',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '654225',
                                        code: 'usrCreated',
                                        name: 'usrCreated',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '983477',
                                        code: 'usrUdfMgrErpOrg',
                                        name: 'usrUdfMgrErpOrg',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '319029',
                                        code: 'subUsrUdfOrgOrders',
                                        name: 'subUsrUdfOrgOrders',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '395653',
                                        code: 'usrLogin',
                                        name: 'usrLogin',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '913128',
                                        code: 'usrEmail',
                                        name: 'usrEmail',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '367976',
                                        code: 'subUsrUdfOaOrgs',
                                        name: 'subUsrUdfOaOrgs',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '14533',
                                        code: 'usrLoginAttemptsCtr',
                                        name: 'usrLoginAttemptsCtr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9205846',
                                        code: 'usrUdfMobile',
                                        name: 'usrUdfMobile',
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
                          line_number: 8,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource97.params =
                    [
                      {
                        title: '表格选中行id(单选)',
                        name: 'selectedRowKeys',
                        value: '$selectedRowKeys[0]$',
                      },
                      {
                        title: '表格选中行id(多选)',
                        name: 'selectedRowKeys',
                        value: '$selectedRowKeys$',
                        attrType: 'array',
                      },
                      {
                        title: '表格选中行数据(单选)',
                        name: 'selectedRows',
                        value: '$selectedRows[0]$',
                        attrType: 'object',
                      },
                      {
                        title: '表格选中行数据(多选)',
                        name: 'selectedRows',
                        value: '$selectedRows$',
                        attrType: 'objectArray',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDataSource97,
                    { selectedRowKeys, selectedRows },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
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
              name={'岗位人员配置'}
              cardIconType={'middle'}
              title={'岗位人员配置'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '4693098',
                  title: '岗位关联人员',
                  iconPos: 'left',
                  btnType: 'primary',
                  icon: '',
                  btnSize: 'default',
                },
                {
                  id: '036859',
                  title: '批量删除',
                  iconPos: 'left',
                  icon: '',
                  btnType: 'primary',
                  btnSize: 'default',
                },
                {
                  id: '6097675',
                  title: '批量修改处理区域',
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
                // console 166263935750581220
                console.log(data?.local_vars);
                const eventDatashowCustomModal74: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166158811193277540,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '7496296',
                      pageJsonId: '4868135',
                      modalname: '/chooseUserPostRel',
                      pageId: '885065462365028352',
                      paramsObj: {
                        postId: '$data.local_vars.row_post_id$',
                        postCode: '$data.local_vars.row_post_code$',
                        postName: '$data.local_vars.row_post_name$',
                      },
                      paramsObjKeyValueMap: {
                        postId: '$data.local_vars.row_post_id$',
                        postCode: '$data.local_vars.row_post_code$',
                        postName: '$data.local_vars.row_post_name$',
                      },
                      modalPath: '/chooseUserPostRel',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158828048217700,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2561574',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshUserPostRelTable',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal74.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal74,
                  { e },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
                const eventDatashowModal5: any = [
                  {
                    type: 'showModal',
                    dataId: 166263773249686140,
                    options: {
                      compId: 'showModal',
                      compName: 'page',
                      id: '7981053',
                      pageJsonId: '4868135',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatashowModal5.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatashowModal5, { e }, 'showModal', {
                  id: 'showModal',
                  name: 'showModal',
                  type: 'showModal',
                  platform: 'pc',
                });
              }}
              onClickBtn2={(e: any) => {
                const eventDatagetTableSelectedKey36: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166269001033683070,
                    options: {
                      compId: 'Table_8475669',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Table',
                      id: '661594',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '91961',
                            options: {
                              context: '$selectedRowKeys_661594$',
                              operate: 'notEmpty',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166269003465262000,
                        elseIfs: [],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showModal',
                            dataId: 166269014351427780,
                            options: {
                              compId: 'showModal',
                              compName: 'page',
                              id: '5668367',
                              pageJsonId: '4868135',
                              type: 'confirm',
                              title: '确定要删除该关联人员关系吗？',
                              content: '该操作为物理删除，请谨慎操作！',
                              okText: '确定',
                              cancelText: '取消',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 166269014351411460,
                                options: {
                                  compId: 'Table_8475669',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '947292',
                                  loading: true,
                                },
                                line_number: 4,
                              },
                              {
                                type: 'apiRequest',
                                dataId: 166269014351415500,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '555367',
                                  pageJsonId: '4868135',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'delBatchDcPostUserRel',
                                  _apiCode: 'delBatchDcPostUserRel',
                                  _source: 'rhin',
                                  _serviceId: '885347534908424192',
                                  _serviceTitle:
                                    '批量删除岗位人员关系-zzz: delBatchDcPostUserRel',
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
                                      dataKey: '555367_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '555367_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '555367_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'postUserRelIds',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.postUserRelIds',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.postUserRelIds',
                                          dataKey: '555367_body.postUserRelIds',
                                          value: {
                                            type: ['customize'],
                                            code: '$JSON.stringify(selectedRowKeys_661594)$',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '555367_body',
                                    },
                                  ],
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166269014351413760,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '555645',
                                      pageJsonId: '4868135',
                                      customFuncName: 'refreshUserPostRelTable',
                                    },
                                    line_number: 6,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'setLoading',
                                    dataId: 166269014351418750,
                                    options: {
                                      compId: 'Table_8475669',
                                      compLib: 'comm',
                                      pageJsonId: '4868135',
                                      compName: 'Table',
                                      id: '425615',
                                      loading: false,
                                    },
                                    line_number: 7,
                                  },
                                ],
                                callback2: [
                                  {
                                    type: 'setLoading',
                                    dataId: 166269014351435620,
                                    options: {
                                      compId: 'Table_8475669',
                                      compLib: 'comm',
                                      pageJsonId: '4868135',
                                      compName: 'Table',
                                      id: '9527444',
                                      loading: false,
                                    },
                                    line_number: 8,
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '599977',
                            options: {
                              context: '$selectedRowKeys_661594$',
                              operate: 'empty',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166269015117616930,
                        elseIfs: [],
                        line_number: 9,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166269021652461980,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '641424',
                              pageJsonId: '4868135',
                              type: 'info',
                              value: '请先选择需要删除的关联人员',
                            },
                            line_number: 10,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey36.params =
                  [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey36,
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
              onClickBtn3={(e: any) => {
                const eventDatagetTableSelectedKey37: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166930258308269380,
                    options: {
                      compId: 'Table_8475669',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Table',
                      id: '447207',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '1549276',
                            options: {
                              context: '$selectedRowKeys_447207$',
                              operate: 'notEmpty',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166930258604737340,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166930260227517730,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166930261057302560,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '163573',
                                  pageJsonId: '4868135',
                                  type: 'info',
                                  value: '请先选择需要修改的关联人员',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            desc: '未选',
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166930261057302560,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '163573',
                                  pageJsonId: '4868135',
                                  type: 'info',
                                  value: '请先选择需要修改的关联人员',
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showCustomModal',
                            dataId: 166930317993871900,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '7394115',
                              pageJsonId: '4868135',
                              modalname:
                                '/piliangxiugaigangweiguanlianrenyuandechuliquyu4614',
                              pageId: '913086065513832448',
                              paramsObj: {
                                postUserRelIds:
                                  '$JSON.stringify(selectedRowKeys_447207)$',
                              },
                              paramsObjKeyValueMap: {
                                postUserRelIds:
                                  '$JSON.stringify(selectedRowKeys_447207)$',
                              },
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'clearTableSelected',
                                dataId: 166934485650560200,
                                options: {
                                  compId: 'Table_8475669',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '591761',
                                },
                                line_number: 4,
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 166930326980081060,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '232912',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshUserPostRelTable',
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
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey37.params =
                  [{ title: '按钮3点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey37,
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_96776')}
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
                  id: 'Form_148709_504968',
                  uid: 'Form_148709_504968',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_148709_504968')}
                {...injectData}
              >
                <Input
                  name={'用户编码'}
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
                  fieldName={'usrLogin'}
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
                    id: 'Input_3889064_9290923',
                    uid: 'Input_3889064_9290923',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc317: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158470687467620,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2038827',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshUserPostRelTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc317.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc317,
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_3889064_9290923')
                  }
                  {...injectData}
                />
                <Input
                  name={'用户名'}
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
                  fieldName={'usrLastName'}
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
                    id: 'Input_33684855_42499777',
                    uid: 'Input_33684855_42499777',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc318: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158471466083070,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '64209',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshUserPostRelTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc318.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc318,
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_33684855_42499777')
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_841498_1719896',
                    uid: 'View_841498_1719896',
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_841498_1719896')
                  }
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
                      id: 'Button_224226_2154932',
                      uid: 'Button_224226_2154932',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDataclearTableSelected7: any = [
                        {
                          type: 'clearTableSelected',
                          dataId: 166934483030742800,
                          options: {
                            compId: 'Table_8475669',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '385238',
                          },
                          line_number: 1,
                        },
                      ];
                      eventDataclearTableSelected7.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDataclearTableSelected7,
                        { e },
                        'clearTableSelected',
                        {
                          id: 'clearTableSelected',
                          name: 'clearTableSelected',
                          type: 'clearTableSelected',
                          platform: 'pc',
                        },
                      );
                      const eventDatacallSelfFunc319: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166158469460298370,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '6966413',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshUserPostRelTable',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc319.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc319,
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Button_224226_2154932')
                    }
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
                      id: 'Button_499055_798351',
                      uid: 'Button_499055_798351',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                    onClick={(e: any) => {
                      const eventDataclearValue101: any = [
                        {
                          type: 'clearValue',
                          dataId: 166261641346835740,
                          options: {
                            compId: 'Input_3889064_9290923',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '442636',
                          },
                          line_number: 1,
                        },
                      ];
                      eventDataclearValue101.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDataclearValue101,
                        { e },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                      const eventDataclearValue102: any = [
                        {
                          type: 'clearValue',
                          dataId: 166261641700181250,
                          options: {
                            compId: 'Input_33684855_42499777',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '832844',
                          },
                          line_number: 2,
                        },
                      ];
                      eventDataclearValue102.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDataclearValue102,
                        { e },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Button_499055_798351')
                    }
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'岗位人员表格列表'}
                isFlexColumn={false}
                pageSize={data?.qryOaUserByPostId?.resultData?.size}
                current={data?.qryOaUserByPostId?.resultData?.current}
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
                    title: '用户编码',
                    key: 'usrLogin',
                    dataIndex: 'usrLogin',
                    className: '',
                    id: '29098982',
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
                    title: '用户名',
                    key: 'usrLastName',
                    dataIndex: 'usrLastName',
                    className: 'divider',
                    id: '458409',
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
                    type: 'staticCol',
                    id: '62116',
                    title: '手机号',
                    dataIndex: 'usrUdfMobile',
                    key: '62116',
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
                    title: '处理区域',
                    key: 'handleRegionIdName',
                    dataIndex: 'handleRegionIdName',
                    id: '346416',
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
                    type: 'staticCol',
                    id: '533561',
                    dataIndex: 'orgName',
                    title: '组织名称',
                    key: '533561',
                    className: 'divider',
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
                    title: '是否锁定',
                    key: 'usrLocked',
                    dataIndex: 'usrLocked',
                    className: 'divider',
                    id: '2444784',
                    staticDataSource: attrDataMap['PUB_001'],
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
                    title: '状态',
                    key: 'usrStatus',
                    dataIndex: 'usrStatus',
                    className: 'divider',
                    id: '099157',
                    staticDataSource: [
                      { id: '7153796', label: '在用', value: 'Active' },
                    ],
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
                rowKey={'postUserRelId'}
                dataSource={data?.qryOaUserByPostId?.resultData?.records}
                total={data?.qryOaUserByPostId?.resultData?.total}
                fieldName={'data.qryAttrSpecPage.resultData.total'}
                rowActions={[
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
                  'data.qryOaUserByPostId.resultData.records'
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
                style={{ margin: '12px 0px 0px 0px' }}
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDatashowModal6: any = [
                    {
                      type: 'showModal',
                      dataId: 166268762243163800,
                      options: {
                        compId: 'showModal',
                        compName: 'page',
                        id: '601705',
                        pageJsonId: '4868135',
                        type: 'confirm',
                        title: '确定要删除该关联人员关系吗？',
                        content: '该操作为物理删除，请谨慎操作！',
                        okText: '确定',
                        cancelText: '取消',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166268763849873820,
                          options: {
                            compId: 'Table_8475669',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '371837',
                            loading: true,
                          },
                          line_number: 2,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 166268762243157280,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '4151794',
                            pageJsonId: '4868135',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'delDcPostUserRelById',
                            _apiCode: 'delDcPostUserRelById',
                            _source: 'rhin',
                            _serviceId: '885338574223265792',
                            _serviceTitle:
                              '根据主键删除岗位人员关系--zzz: delDcPostUserRelById',
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
                                dataKey: '4151794_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'dcPostUserRelId',
                                    name: '主键ID',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'T',
                                    defaultValue: '',
                                    _id: 'path.dcPostUserRelId',
                                    compType: 'Input',
                                    parents: ['path'],
                                    id: 'path.dcPostUserRelId',
                                    dataKey: '4151794_path.dcPostUserRelId',
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
                                dataKey: '4151794_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '4151794_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '4151794_body',
                              },
                            ],
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 166268766415575800,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '714566',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshUserPostRelTable',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setLoading',
                              dataId: 166268769990483740,
                              options: {
                                compId: 'Table_8475669',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '522665',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 166268770125496700,
                              options: {
                                compId: 'Table_8475669',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '22014',
                                loading: false,
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowModal6.params =
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
                    eventDatashowModal6,
                    { rowId, row, index },
                    'showModal',
                    {
                      id: 'showModal',
                      name: 'showModal',
                      type: 'showModal',
                      platform: 'pc',
                    },
                  );
                }}
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatacallSelfFunc320: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166934421613091170,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '4170368',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshUserPostRelTable',
                        customFuncParams: '$page$',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc320.params =
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
                    eventDatacallSelfFunc320,
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

export default withPageHOC(PostStaffManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
