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
  StdUpload,
  Select,
  Table,
  Tabs,
  TabPane,
  TimePicker,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '885366956034052096';
const OaUserManage$$Page: React.FC<PageProps> = ({
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
  const refreshUserTable = (options_635272: any) => {
    const eventDatasetLoading7: any = [
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
    eventDatasetLoading7.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading7, { options_635272 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatasetLoading8: any = [
      {
        type: 'setLoading',
        dataId: 168925068501161020,
        options: {
          compId: 'Table_8475669',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '50156',
          loading: true,
        },
        line_number: 2,
      },
    ];
    eventDatasetLoading8.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading8, { options_635272 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource3: any = [
      {
        type: 'reloadDataSource',
        dataId: 166158463412134980,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '443539',
          pageJsonId: '4868135',
          dataSourceId: 167897551281076160,
          dataSourceName: 'qryDcOaUserPageByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '530516',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '195309',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '672916',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '538775',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '634294',
                  code: 'usrKey',
                  name: 'usrKey',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrKey',
                },
                {
                  attrId: '421155',
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
                  attrId: '212704',
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
                  attrId: '380376',
                  code: 'usrUdfMobile',
                  name: 'usrUdfMobile',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrUdfMobile',
                  value: {
                    type: ['form', 'Form_148709_504968', 'getFieldsValue'],
                    code: 'usrUdfMobile',
                  },
                },
                {
                  attrId: '005753',
                  code: 'usrKind',
                  name: 'usrKind',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrKind',
                  value: {
                    type: ['form', 'Form_148709_504968', 'getFieldsValue'],
                    code: 'usrKind',
                  },
                },
                {
                  attrId: '43285',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                },
                {
                  attrId: '778762',
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
              attrId: '250753',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '14602',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '6744975',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '4834741',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '7262893',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '5204435',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '7039264',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '119927',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '244579',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '140188',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '815643',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '496543',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '227409',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '645498',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '9801743',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '161008',
                      code: 'usrUdfShortName',
                      name: 'usrUdfShortName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '129903',
                      code: 'usrStatus',
                      name: 'usrStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '906119',
                      code: 'subUsrUdfJobLevels',
                      name: 'subUsrUdfJobLevels',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '085343',
                      code: 'usrType',
                      name: 'usrType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '856725',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '955332',
                      code: 'usrEndDate',
                      name: 'usrEndDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '441434',
                      code: 'usrCreate',
                      name: 'usrCreate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '708742',
                      code: 'usrPwdResetAttemptsCtr',
                      name: 'usrPwdResetAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '942733',
                      code: 'actName',
                      name: 'actName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '421773',
                      code: 'usrProvisionedDate',
                      name: 'usrProvisionedDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '623688',
                      code: 'actUdfNum',
                      name: 'actUdfNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1632585',
                      code: 'orgType',
                      name: 'orgType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7360487',
                      code: 'usrUdfEmployeeId',
                      name: 'usrUdfEmployeeId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0002336',
                      code: 'usrUdfBelongComp',
                      name: 'usrUdfBelongComp',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8478185',
                      code: 'subOrgNames',
                      name: 'subOrgNames',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '584748',
                      code: 'usrKey',
                      name: 'usrKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '394997',
                      code: 'usrEmpType',
                      name: 'usrEmpType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '423962',
                      code: 'usrLastName',
                      name: 'usrLastName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '10464',
                      code: 'orgName',
                      name: 'orgName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9007174',
                      code: 'usrUdfJobLevel',
                      name: 'usrUdfJobLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '097075',
                      code: 'orgCode',
                      name: 'orgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8402146',
                      code: 'isImportant',
                      name: 'isImportant',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2101278',
                      code: 'usrFirstName',
                      name: 'usrFirstName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '023851',
                      code: 'usrUdfIdNum',
                      name: 'usrUdfIdNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '307763',
                      code: 'orgShortName',
                      name: 'orgShortName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1734927',
                      code: 'usrChangePwdAtNextLogon',
                      name: 'usrChangePwdAtNextLogon',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4820596',
                      code: 'orgUserRelId',
                      name: 'orgUserRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '24114635',
                      code: 'usrUdfOrgOrder',
                      name: 'usrUdfOrgOrder',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '013873',
                      code: 'userRoleRelId',
                      name: 'userRoleRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '726321',
                      code: 'subUsrUdfOrgOrders',
                      name: 'subUsrUdfOrgOrders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '811058',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1942398',
                      code: 'usrLogin',
                      name: 'usrLogin',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9340307',
                      code: 'subUsrUdfOaOrgs',
                      name: 'subUsrUdfOaOrgs',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '034655',
                      code: 'usrUdfSysMask',
                      name: 'usrUdfSysMask',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '439515',
                      code: 'cardInfo',
                      name: 'cardInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '591058',
                      code: 'usrUpdate',
                      name: 'usrUpdate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5556414',
                      code: 'usrKind',
                      name: 'usrKind',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '914123',
                      code: 'usrUdfOaOrg',
                      name: 'usrUdfOaOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '83259995',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2905386',
                      code: 'usrPassword',
                      name: 'usrPassword',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '05979',
                      code: 'usrCreated',
                      name: 'usrCreated',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '427704',
                      code: 'usrUdfMgrErpOrg',
                      name: 'usrUdfMgrErpOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '403027',
                      code: 'isDefault',
                      name: 'isDefault',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3216008',
                      code: 'usrEmail',
                      name: 'usrEmail',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '254333',
                      code: 'usrLoginAttemptsCtr',
                      name: 'usrLoginAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '91172',
                      code: 'usrUdfMobile',
                      name: 'usrUdfMobile',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2244441',
                      code: 'actKey',
                      name: 'actKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '26245',
                      code: 'orgLevel',
                      name: 'orgLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '317615',
                      code: 'usrLocked',
                      name: 'usrLocked',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0230635',
                      code: 'usrUdfDepartment',
                      name: 'usrUdfDepartment',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2123007',
                      code: 'usrUdfSex',
                      name: 'usrUdfSex',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '656161',
                      code: 'usrUdfOaNum',
                      name: 'usrUdfOaNum',
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
        line_number: 3,
        callback1: [
          {
            type: 'clearValue',
            dataId: 166270762994403840,
            options: {
              compId: 'Input_3889064',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Input',
              id: '8537725',
            },
            line_number: 4,
          },
          {
            type: 'clearValue',
            dataId: 166270763403920060,
            options: {
              compId: 'Input_33684855',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Input',
              id: '30591',
            },
            line_number: 5,
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
            line_number: 6,
          },
          {
            type: 'reloadDataSource',
            dataId: 166158712222955550,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '038589',
              pageJsonId: '4868135',
              dataSourceId: 166270738136718940,
              dataSourceName: 'qryDcPostInfoByUsrKey',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '599949',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'header',
                },
                {
                  attrId: '3751144',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'path',
                },
                {
                  attrId: '7799145',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'query',
                },
                {
                  attrId: '2466545',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '161157',
                      code: 'pageSize',
                      name: 'pageSize',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: 'pageSize' },
                      type: 'long',
                      key: 'body.pageSize',
                    },
                    {
                      attrId: '5926227',
                      code: 'pageNum',
                      name: 'pageNum',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: 'pageNum' },
                      type: 'long',
                      key: 'body.pageNum',
                    },
                    {
                      attrId: '4958816',
                      code: 'postCode',
                      name: 'postCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.postCode',
                    },
                    {
                      attrId: '207693',
                      code: 'postName',
                      name: 'postName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.postName',
                    },
                    {
                      attrId: '144303',
                      code: 'usrKey',
                      name: 'usrKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.usrKey',
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
                  attrId: '966637',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '72217525',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '230439',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '9542645',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  children: [
                    {
                      attrId: '187334',
                      code: 'total',
                      name: 'total',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '924569',
                      code: 'current',
                      name: 'current',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '039357',
                      code: 'hitCount',
                      name: 'hitCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '6339666',
                      code: 'size',
                      name: 'size',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '832981',
                      code: 'optimizeCountSql',
                      name: 'optimizeCountSql',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '722384',
                      code: 'maxLimit',
                      name: 'maxLimit',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '044174',
                      code: 'orders',
                      name: 'orders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'fieldArray',
                      children: [
                        {
                          attrId: '232498',
                          code: 'listItem',
                          name: '列表元素',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                        },
                      ],
                    },
                    {
                      attrId: '418533',
                      code: 'countId',
                      name: 'countId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '011619',
                      code: 'isSearchCount',
                      name: 'isSearchCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '860169',
                      code: 'records',
                      name: 'records',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '575352',
                          code: 'statusDate',
                          name: 'statusDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '508454',
                          code: 'createStaffName',
                          name: 'createStaffName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '323099',
                          code: 'areaId',
                          name: 'areaId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '2659633',
                          code: 'postDesc',
                          name: 'postDesc',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '512767',
                          code: 'postUserRelId',
                          name: 'postUserRelId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                        },
                        {
                          attrId: '629409',
                          code: 'postName',
                          name: 'postName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '614525',
                          code: 'postCode',
                          name: 'postCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '857535',
                          code: 'statusCd',
                          name: 'statusCd',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '005997',
                          code: 'remark',
                          name: 'remark',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '3095398',
                          code: 'postId',
                          name: 'postId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '268628',
                          code: 'lanId',
                          name: 'lanId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '268909',
                          code: 'provinceId',
                          name: 'provinceId',
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
            line_number: 7,
            callback1: [
              {
                type: 'clearTableSelected',
                dataId: 166415916004237730,
                options: {
                  compId: 'Table_8475669',
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Table',
                  id: '424353',
                },
                line_number: 8,
              },
            ],
            callback2: [],
          },
          {
            type: 'setLoading',
            dataId: 168925069450234050,
            options: {
              compId: 'Table_8475669',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '344586',
              loading: false,
            },
            line_number: 9,
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
            line_number: 10,
          },
          {
            type: 'setLoading',
            dataId: 168925069991343600,
            options: {
              compId: 'Table_8475669',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '583355',
              loading: false,
            },
            line_number: 11,
          },
        ],
      },
    ];
    eventDatareloadDataSource3.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource3,
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
    const eventDatasetLoading9: any = [
      {
        type: 'setLoading',
        dataId: 166270821742240220,
        options: {
          compId: 'Table_311334',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '457712',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading9.params =
      [
        {
          title: '事件入参',
          name: 'options_0109504',
          value: '$options_0109504$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading9, { options_0109504 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource4: any = [
      {
        type: 'reloadDataSource',
        dataId: 166158819318326530,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '521136',
          pageJsonId: '4868135',
          dataSourceId: 166270738136718940,
          dataSourceName: 'qryDcPostInfoByUsrKey',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '599949',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '3751144',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '7799145',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '2466545',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '161157',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageSize' },
                  type: 'long',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '5926227',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageNum' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: [], code: 'pageNum' },
                },
                {
                  attrId: '4958816',
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
                  attrId: '207693',
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
                {
                  attrId: '144303',
                  code: 'usrKey',
                  name: 'usrKey',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrKey',
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'row_usr_key',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '966637',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '72217525',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '230439',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '9542645',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '187334',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '924569',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '039357',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '6339666',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '832981',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '722384',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '044174',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '232498',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '418533',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '011619',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '860169',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '575352',
                      code: 'statusDate',
                      name: 'statusDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '508454',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '323099',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2659633',
                      code: 'postDesc',
                      name: 'postDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '512767',
                      code: 'postUserRelId',
                      name: 'postUserRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '629409',
                      code: 'postName',
                      name: 'postName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '614525',
                      code: 'postCode',
                      name: 'postCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '857535',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '005997',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3095398',
                      code: 'postId',
                      name: 'postId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '268628',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '268909',
                      code: 'provinceId',
                      name: 'provinceId',
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
            dataId: 166270822636492700,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '611002',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166270822775969060,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '296167',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource4.params =
      [
        {
          title: '事件入参',
          name: 'options_0109504',
          value: '$options_0109504$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource4,
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
  const refreshOaUserRefTable = (options_436832: any) => {
    const eventDatasetLoading10: any = [
      {
        type: 'setLoading',
        dataId: 167887096658621570,
        options: {
          compId: 'Table_5049436',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '023644',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading10.params =
      [
        {
          title: '事件入参',
          name: 'options_436832',
          value: '$options_436832$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading10, { options_436832 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource5: any = [
      {
        type: 'reloadDataSource',
        dataId: 167887099081616800,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '660199',
          pageJsonId: '4868135',
          dataSourceId: 167897761946821660,
          dataSourceName: 'qryDcOaOrgRelPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '4119465',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '120929',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '862137',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '436398',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '362446',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.pageNum',
                  value: { type: [], code: '' },
                },
                {
                  attrId: '18335',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '351171',
                  code: 'usrKey',
                  name: 'usrKey',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrKey',
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'row_usr_key',
                  },
                },
                {
                  attrId: '991963',
                  code: 'orgCode',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.orgCode',
                  value: {
                    type: ['form', 'Form_493328_308943', 'getFieldsValue'],
                    code: 'orgCode',
                  },
                },
                {
                  attrId: '696519',
                  code: 'orgName',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.orgName',
                  value: {
                    type: ['form', 'Form_493328_308943', 'getFieldsValue'],
                    code: 'orgName',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '3881653',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '9250313',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '481075',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '93536',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '924206',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '331135',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '765849',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '040494',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '634957',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '564802',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '51023623',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '343363',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '734638',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8169722',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '663856',
                      code: 'jobLevelName',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '068553',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '065959',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4785339',
                      code: 'isDefault',
                      name: 'isDefault',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6699593',
                      code: 'usrKey',
                      name: 'usrKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '86917',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '55521822',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9849552',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7021478',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '44355',
                      code: 'orgUserRelId',
                      name: 'orgUserRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '716859',
                      code: 'orgCode',
                      name: 'orgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '920618',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '085986',
                      code: 'jobLevel',
                      name: 'jobLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '850908',
                      code: 'orgOrder',
                      name: 'orgOrder',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '327057',
                      code: 'orgShortName',
                      name: 'orgShortName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5922076',
                      code: 'orgName',
                      name: 'orgName',
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
            dataId: 167887117119203740,
            options: {
              compId: 'Table_5049436',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '595131',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 167887117503948580,
            options: {
              compId: 'Table_5049436',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '288129',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource5.params =
      [
        {
          title: '事件入参',
          name: 'options_436832',
          value: '$options_436832$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource5,
      { options_436832 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const refreshOaRoleTable = (options_943141: any) => {
    const eventDatasetLoading11: any = [
      {
        type: 'setLoading',
        dataId: 167893319246008260,
        options: {
          compId: 'Table_68816',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '6353466',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading11.params =
      [
        {
          title: '事件入参',
          name: 'options_943141',
          value: '$options_943141$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading11, { options_943141 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource6: any = [
      {
        type: 'reloadDataSource',
        dataId: 167893319716539520,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '0330035',
          pageJsonId: '4868135',
          dataSourceId: 167894505032596860,
          dataSourceName: 'qryDcOaRolePage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '607022',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '773946',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '3271736',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '015553',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '6768435',
                  code: 'roleName',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  key: 'body.roleName',
                  value: {
                    type: ['form', 'Form_4812867', 'getFieldsValue'],
                    code: 'roleName',
                  },
                },
                {
                  attrId: '097277',
                  code: 'roleCode',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  key: 'body.roleCode',
                  value: {
                    type: ['form', 'Form_4812867', 'getFieldsValue'],
                    code: 'roleCode',
                  },
                },
                {
                  attrId: '322983',
                  code: 'pageSize',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '08101414',
                  code: 'pageNum',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  key: 'body.pageNum',
                },
                {
                  attrId: '628079',
                  code: 'usrKey',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  key: 'body.usrKey',
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'row_usr_key',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '039306',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '2854478',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '435326',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '675814',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '719912',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '665935',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '600272',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '926161',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '920126',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '50579445',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '35232',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '250853',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5037132',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '797544',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '70323944',
                      code: 'userRoleRelId',
                      name: 'userRoleRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '100185',
                      code: 'usrKey',
                      name: 'usrKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '768782',
                      code: 'roleId',
                      name: 'roleId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '326585',
                      code: 'roleCode',
                      name: 'roleCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '364323',
                      code: 'roleName',
                      name: 'roleName',
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
            dataId: 167893320071894600,
            options: {
              compId: 'Table_68816',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '3346219',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 167893320211986080,
            options: {
              compId: 'Table_68816',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '564222',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource6.params =
      [
        {
          title: '事件入参',
          name: 'options_943141',
          value: '$options_943141$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource6,
      { options_943141 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const refreshBOPTable = (options_552567: any) => {
    const eventDatasetLoading12: any = [
      {
        type: 'setLoading',
        dataId: 168784538162445860,
        options: {
          compId: 'Table_4663683',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '69624',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading12.params =
      [
        {
          title: '事件入参',
          name: 'options_552567',
          value: '$options_552567$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading12, { options_552567 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource7: any = [
      {
        type: 'reloadDataSource',
        dataId: 168784538618713660,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '1079416',
          pageJsonId: '4868135',
          dataSourceId: 168785438790334820,
          dataSourceName: 'qryBopUserIdByOaUserIdPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '973192',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '8256182',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '684327',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '567351',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '873181',
                  code: 'pageSize',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '5' },
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '1052573',
                  code: 'pageNum',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '1' },
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '396546',
                  code: 'oaUserId',
                  name: 'OA工号',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'row_usr_login',
                  },
                },
                {
                  attrId: '988078',
                  code: 'userId',
                  name: 'BOP工号',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_635031', 'getFieldsValue'],
                    code: 'userId',
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
            dataId: 168784539353551400,
            options: {
              compId: 'Table_4663683',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '033531',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 168784539523534460,
            options: {
              compId: 'Table_4663683',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '8112074',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource7.params =
      [
        {
          title: '事件入参',
          name: 'options_552567',
          value: '$options_552567$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource7,
      { options_552567 },
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
    refreshUserTable,
    refreshUserPostRelTable,
    refreshOaUserRefTable,
    refreshOaRoleTable,
    refreshBOPTable,
  }));

  useEffect(() => {
    const eventDataapiRequest170: any = [
      {
        type: 'apiRequest',
        dataId: 166315342296713000,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '2437566',
          pageJsonId: '4868135',
          sync: false,
          actionTitle: '',
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
              dataKey: '2437566_header',
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
                  dataKey: '2437566_path.provinceId',
                  value: { type: ['customize'], code: '350000' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '2437566_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '2437566_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '2437566_body',
            },
          ],
          _sourceName: '根据省份ID查询所有该省份下的区县列表-tsm',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166315348657709380,
            options: {
              compId: 'Table_311334',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '7586156',
              colName: 'areaId',
              data: '$reply_2437566?.resultData$',
            },
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest170.params = [] || [];
    CMDGenerator(eventDataapiRequest170, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetDisable43: any = [
      {
        type: 'setDisable',
        dataId: 167886491205484860,
        options: {
          compId: [
            'Form_31_1121_054627',
            'Input_3889064',
            'Input_33684855',
            'Button_224226',
            'Button_499055',
            'Form_148709',
          ],
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Form',
          id: '998039',
          disabled: 'true',
          compid: [
            'Form_31_1121_054627',
            'Input_3889064',
            'Input_33684855',
            'Button_224226',
            'Button_499055',
            'Form_148709',
          ],
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable43.params = [] || [];
    CMDGenerator(eventDatasetDisable43, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired15: any = [
      {
        type: 'setRequired',
        dataId: 168792158954975970,
        options: {
          compId: [
            'Input_usrLastName_037923_275147',
            'Input_usrFirstName_8337786_578625',
            'Input_usrLogin_433893_90121',
            'Input_usrUdfMobile_600937_4160645',
            'Input_usrStatus_233963_5067494',
          ],
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Select',
          id: '1210386',
          required: 'true',
          compid: [
            'Input_usrLastName_037923_275147',
            'Input_usrFirstName_8337786_578625',
            'Input_usrLogin_433893_90121',
            'Input_usrUdfMobile_600937_4160645',
            'Input_usrStatus_233963_5067494',
          ],
        },
        line_number: 4,
      },
    ];
    eventDatasetRequired15.params = [] || [];
    CMDGenerator(eventDatasetRequired15, {}, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
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
              name={'人员管理'}
              cardIconType={'middle'}
              title={'人员管理'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '1602757',
                  title: '新增',
                  iconPos: 'left',
                  isIcon: false,
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
                const forms24 = getFormByCompId('Form_31_1121_054627', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms24) ? forms24 : [forms24]).forEach((form) =>
                  form?.resetFields(),
                );
                const eventDatasetDisable72: any = [
                  {
                    type: 'setDisable',
                    dataId: 168784420471975500,
                    options: {
                      compId: [
                        'Input_usrLastName_037923_275147',
                        'Input_usrFirstName_8337786_578625',
                        'Input_usrLogin_433893_90121',
                        'Select_118609',
                        'Input_usrUdfMobile_600937_4160645',
                        'Input_usrEmail_0709186_16864',
                        'Button_269697',
                        'Button_541288',
                        'Select_551558',
                      ],
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Form',
                      id: '953491',
                      disabled: '',
                      compid: [
                        'Input_usrLastName_037923_275147',
                        'Input_usrFirstName_8337786_578625',
                        'Input_usrLogin_433893_90121',
                        'Select_118609',
                        'Input_usrUdfMobile_600937_4160645',
                        'Input_usrEmail_0709186_16864',
                        'Button_269697',
                        'Button_541288',
                        'Select_551558',
                      ],
                    },
                    line_number: 2,
                  },
                ];
                eventDatasetDisable72.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable72, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable73: any = [
                  {
                    type: 'setDisable',
                    dataId: 168791623597497120,
                    options: {
                      compId: [
                        'Input_usrStatus_233963_5067494',
                        'Button_578183',
                        'Button_789349',
                        'Input_7683',
                        'Button_302831',
                        'Button_213218_267197',
                        'Button_221995_112914',
                        'Button_8258636_313289',
                        'Form_4812867',
                        'Input_514473',
                        'Input_272419',
                        'Button_556714',
                        'Button_087538',
                        'Button_8990255',
                        'Input_485159_451983',
                        'Input_4717291_1771768',
                      ],
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Form',
                      id: '072144',
                      disabled: 'true',
                      compid: [
                        'Input_usrStatus_233963_5067494',
                        'Button_578183',
                        'Button_789349',
                        'Input_7683',
                        'Button_302831',
                        'Button_213218_267197',
                        'Button_221995_112914',
                        'Button_8258636_313289',
                        'Form_4812867',
                        'Input_514473',
                        'Input_272419',
                        'Button_556714',
                        'Button_087538',
                        'Button_8990255',
                        'Input_485159_451983',
                        'Input_4717291_1771768',
                      ],
                    },
                    line_number: 3,
                  },
                ];
                eventDatasetDisable73.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable73, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetActiveTabPane: any = [
                  {
                    type: 'setActiveTabPane',
                    dataId: 168784423415363600,
                    options: {
                      compId: 'Tabs_852728',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Tabs',
                      id: '404733',
                      paramsObj: { activiKey: '1' },
                      paramsObjKeyValueMap: { activiKey: '1' },
                    },
                    line_number: 4,
                  },
                ];
                eventDatasetActiveTabPane.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatasetActiveTabPane,
                  { e },
                  'setActiveTabPane',
                  {
                    id: 'setActiveTabPane',
                    name: 'setActiveTabPane',
                    type: 'setActiveTabPane',
                    platform: 'pc',
                  },
                );
                const eventDatasetValue26: any = [
                  {
                    type: 'setValue',
                    dataId: 168791432662050720,
                    options: {
                      compId: 'Input_usrStatus_233963_5067494',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Select',
                      id: '798825',
                      valueList: { Input_usrStatus_233963_5067494: 'Active' },
                    },
                    line_number: 5,
                    callback1: [],
                  },
                ];
                eventDatasetValue26.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetValue26, { e }, 'setValue', {
                  id: 'setValue',
                  name: 'setValue',
                  type: 'setValue',
                  platform: 'pc',
                });
              }}
              onClickBtn2={(e: any) => {
                const eventDatagetTableSelectedKey26: any = [
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
                              title: '确定要删除该属性吗？',
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
                                  _sourceName: '批量删除岗位人员关系-zzz',
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
                eventDatagetTableSelectedKey26.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(
                  eventDatagetTableSelectedKey26,
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
                name={'人员查询表单'}
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
                  name={'登录账号'}
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
                    const eventDatacallSelfFunc213: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158470687467620,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2038827',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshUserTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc213.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc213,
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
                  name={'姓名'}
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
                    const eventDatacallSelfFunc214: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158471466083070,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '64209',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshUserTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc214.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc214,
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
                  className="View_View_1193615"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_1193615',
                    uid: 'View_1193615',
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
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    justifyContent: 'flex-end',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_1193615')}
                  {...injectData}
                >
                  <Button
                    name={'聚合模板下载'}
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
                      type: 'download',
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    }}
                    iconType={'download'}
                    hasIcon={true}
                    $$componentItem={{
                      id: 'Button_30811',
                      uid: 'Button_30811',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 12px 0px 0px' }}
                    onClick={(e: any) => {
                      const eventDatasetLoading122: any = [
                        {
                          type: 'setLoading',
                          dataId: 169381708819833470,
                          options: {
                            compId: 'Button_30811',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Button',
                            id: '18972',
                            loading: true,
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatasetLoading122.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatasetLoading122,
                        { e },
                        'setLoading',
                        {
                          id: 'setLoading',
                          name: 'setLoading',
                          type: 'setLoading',
                          platform: 'pc',
                        },
                      );
                      const eventDatacustomActionCode425: any = [
                        {
                          type: 'customActionCode',
                          dataId: 168774827177965630,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '963301',
                            pageJsonId: '4868135',
                            code: 'function main(data,state,success,fail){var tableHeader={"1orgKey":"OA\\u7EC4\\u7EC7ID","2orgCode":"OA\\u7EC4\\u7EC7\\u7F16\\u53F7","3orgName":"OA\\u7EC4\\u7EC7\\u540D\\u79F0","4parentOrgKey":"\\u7236\\u7EC4\\u7EC7ID","5parentOrgName":"\\u7236\\u7EC4\\u7EC7\\u540D\\u79F0","6orgCreate":"\\u521B\\u5EFA\\u65F6\\u95F4"};success(JSON.stringify(tableHeader))};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 168775005517975330,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '557206',
                                pageJsonId: '4868135',
                                sync: false,
                                actionTitle: '',
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'userOrgTemplateDownload',
                                _apiCode: 'userOrgTemplateDownload',
                                _source: 'rhin',
                                _sourceName: '人员组织批导模板下载-hyj',
                                _serviceId: '990444997364604928',
                                _serviceTitle:
                                  '人员组织批导模板下载-hyj: userOrgTemplateDownload',
                                valueType: 'object',
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
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-0',
                                        id: 'root.header',
                                        dataKey: '557206_root.header',
                                      },
                                      {
                                        code: 'path',
                                        name: '请求路径参数',
                                        attrType: 'object',
                                        _id: 'root.path',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-1',
                                        id: 'root.path',
                                        dataKey: '557206_root.path',
                                      },
                                      {
                                        code: 'query',
                                        name: 'URL 参数',
                                        attrType: 'object',
                                        _id: 'root.query',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-2',
                                        id: 'root.query',
                                        dataKey: '557206_root.query',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'sceneCode',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.sceneCode',
                                            compType: 'Input',
                                            name: 'sceneCode',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-0',
                                            id: 'root.body.sceneCode',
                                            dataKey:
                                              '557206_root.body.sceneCode',
                                            value: {
                                              type: ['customize'],
                                              code: 'CLS_JC_0005_0002',
                                            },
                                          },
                                          {
                                            code: 'tableHeader',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.tableHeader',
                                            compType: 'Input',
                                            name: 'tableHeader',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-1',
                                            id: 'root.body.tableHeader',
                                            dataKey:
                                              '557206_root.body.tableHeader',
                                            value: {
                                              type: [
                                                'context',
                                                '$data_963301$',
                                              ],
                                              code: '',
                                            },
                                          },
                                        ],
                                        _id: 'root.body',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-3',
                                        id: 'root.body',
                                        dataKey: '557206_root.body',
                                      },
                                    ],
                                    _id: 'root',
                                    compType: 'Input',
                                    isRoot: true,
                                    parents: [],
                                    key: '0',
                                    id: 'root',
                                    dataKey: '557206_root',
                                  },
                                ],
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'downloadByFileId',
                                  dataId: 168776973145306340,
                                  options: {
                                    compId: 'downloadByFileId',
                                    compName: 'system',
                                    id: '044975',
                                    pageJsonId: '4868135',
                                    data: '$reply_557206.resultData.fileId$',
                                    fileName: '',
                                  },
                                  line_number: 4,
                                },
                                {
                                  type: 'setLoading',
                                  dataId: 169381710047149800,
                                  options: {
                                    compId: 'Button_30811',
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Button',
                                    id: '474543',
                                    loading: false,
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'console',
                                  dataId: 168777004237143500,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '901053',
                                    pageJsonId: '4868135',
                                    value: [
                                      '$reply_557206$',
                                      '$reply_557206.resultData$',
                                      '$reply_557206$.resultData',
                                    ],
                                  },
                                  line_number: 6,
                                },
                              ],
                              callback2: [
                                {
                                  type: 'setLoading',
                                  dataId: 169381711788206340,
                                  options: {
                                    compId: 'Button_30811',
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Button',
                                    id: '9512065',
                                    loading: false,
                                  },
                                  line_number: 7,
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDatacustomActionCode425.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode425,
                        { e },
                        'customActionCode',
                        {
                          id: 'customActionCode',
                          name: 'customActionCode',
                          type: 'customActionCode',
                          platform: 'pc',
                        },
                      ); // console 168869562730391800
                      console.log('当前模板放置场景：', '恶意欠费关停');
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_30811')}
                    {...injectData}
                  />
                  <StdUpload
                    name={'聚合信息导入'}
                    uploadStyle={'click'}
                    listType={'text'}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    fileNameEncode={false}
                    isWatermark={false}
                    optionalFile={false}
                    fileName={'file'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    acceptType={[]}
                    withCredentials={true}
                    numberLimit={99}
                    singleFileMaxSize={50}
                    uploadText={'聚合信息导入'}
                    uploadTimeout={30000}
                    deleteIcon={{
                      deleteIconTheme: 'outlined',
                      deleteIconType: 'delete',
                      deleteIconIsIconFont: false,
                      showRemoveIcon: false,
                    }}
                    downloadIcon={{
                      downloadIconTheme: 'outlined',
                      downloadIconType: 'download',
                      downloadIconIsIconFont: false,
                      showDownloadIcon: false,
                    }}
                    previewIcon={{
                      previewIconTheme: 'outlined',
                      previewIconType: 'eye',
                      previewIconIsIconFont: false,
                      showPreviewIcon: false,
                    }}
                    fieldName={'aggregationImport'}
                    icon={{
                      type: undefined,
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    }}
                    $$componentItem={{
                      id: 'StdUpload_54997',
                      uid: 'StdUpload_54997',
                      type: 'StdUpload',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ margin: '0px 12px 0px 0px' }}
                    onFinishUpload={(
                      file: any,
                      fileList: any,
                      fileResponseList: any,
                      fileId: any,
                      fileSize: any,
                      fileName: any,
                      fileResponse: any,
                    ) => {
                      const eventDatasetLoading123: any = [
                        {
                          type: 'setLoading',
                          dataId: 168794232208397570,
                          options: {
                            compId: 'Table_8475669',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '4678402',
                            loading: true,
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatasetLoading123.params =
                        [
                          {
                            title: '文件对象',
                            name: 'file',
                            value: '$file$',
                            attrType: 'object',
                          },
                          {
                            title: '上传信息列表',
                            name: 'fileList',
                            value: '$fileList$',
                          },
                          {
                            title: '文件列表',
                            name: 'fileResponseList',
                            value: '$fileResponseList$',
                          },
                          {
                            title: '文件ID',
                            name: 'fileId',
                            value: '$file?.response?.resultObject?.fileId$',
                          },
                          {
                            title: '文件大小',
                            name: 'fileSize',
                            value: '$file?.size$',
                          },
                          {
                            title: '文件名称',
                            name: 'fileName',
                            value: '$file?.name$',
                          },
                          {
                            title: '响应信息',
                            name: 'fileResponse',
                            value: '$file?.response$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatasetLoading123,
                        {
                          file,
                          fileList,
                          fileResponseList,
                          fileId,
                          fileSize,
                          fileName,
                          fileResponse,
                        },
                        'setLoading',
                        {
                          id: 'setLoading',
                          name: 'setLoading',
                          type: 'setLoading',
                          platform: 'pc',
                        },
                      );
                      const eventDataapiRequest689: any = [
                        {
                          type: 'apiRequest',
                          dataId: 168794213661378080,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '669072',
                            pageJsonId: '4868135',
                            sync: false,
                            actionTitle: '',
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'aggregationTemplateImport',
                            _apiCode: 'aggregationTemplateImport',
                            _source: 'rhin',
                            _sourceName: '聚合模板导入-hyj',
                            _serviceId: '1015916992865206272',
                            _serviceTitle:
                              '聚合模板导入-hyj: aggregationTemplateImport',
                            valueType: 'object',
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
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-0',
                                    id: 'root.header',
                                    dataKey: '669072_root.header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'root.path',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-1',
                                    id: 'root.path',
                                    dataKey: '669072_root.path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'root.query',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-2',
                                    id: 'root.query',
                                    dataKey: '669072_root.query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'fileCode',
                                        name: '文件ID',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'root.body.fileCode',
                                        compType: 'Input',
                                        parents: ['root', 'body'],
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-0',
                                        id: 'root.body.fileCode',
                                        dataKey: '669072_root.body.fileCode',
                                        value: {
                                          type: [
                                            'context',
                                            '$file?.response?.resultObject?.fileId$',
                                          ],
                                          code: '',
                                        },
                                      },
                                    ],
                                    _id: 'root.body',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-3',
                                    id: 'root.body',
                                    dataKey: '669072_root.body',
                                  },
                                ],
                                _id: 'root',
                                compType: 'Input',
                                isRoot: true,
                                parents: [],
                                key: '0',
                                id: 'root',
                                dataKey: '669072_root',
                              },
                            ],
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '369938',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_669072?.resultCode$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 168794219121719200,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 169408312589871800,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 169408312851848220,
                                      children: [],
                                      todoOptions: ['loading'],
                                      options: {
                                        compId: 'Table_8475669',
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Table',
                                        id: '57238',
                                        loading: false,
                                      },
                                      actionObjId: 'Table_8475669',
                                      actionObjName: 'Table',
                                      value: 'setLoading',
                                      compLib: 'comm',
                                      line_number: 10,
                                    },
                                  ],
                                  condition: [],
                                  value: 'elseIf',
                                  callback: [
                                    {
                                      type: 'setLoading',
                                      dataId: 169408312851848220,
                                      options: {
                                        compId: 'Table_8475669',
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Table',
                                        id: '57238',
                                        loading: false,
                                      },
                                      line_number: 10,
                                    },
                                  ],
                                },
                              ],
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 168800627070597570,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '838997',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshOaUserRefTable',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 169408280324825120,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '98072824',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshUserTable',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 5,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 169408281280001540,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '1038477',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshUserPostRelTable',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 6,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 169408282163162530,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '1697805',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshOaRoleTable',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 7,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 169408282821164320,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '7045134',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshBOPTable',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 8,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'showMessage',
                                  dataId: 168794221422222500,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '951573',
                                    pageJsonId: '4868135',
                                    type: 'success',
                                    value: '导入成功！',
                                  },
                                  line_number: 9,
                                },
                              ],
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 168794229832992740,
                              options: {
                                compId: 'Table_8475669',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '6954742',
                                loading: false,
                              },
                              line_number: 11,
                            },
                          ],
                        },
                      ];
                      eventDataapiRequest689.params =
                        [
                          {
                            title: '文件对象',
                            name: 'file',
                            value: '$file$',
                            attrType: 'object',
                          },
                          {
                            title: '上传信息列表',
                            name: 'fileList',
                            value: '$fileList$',
                          },
                          {
                            title: '文件列表',
                            name: 'fileResponseList',
                            value: '$fileResponseList$',
                          },
                          {
                            title: '文件ID',
                            name: 'fileId',
                            value: '$file?.response?.resultObject?.fileId$',
                          },
                          {
                            title: '文件大小',
                            name: 'fileSize',
                            value: '$file?.size$',
                          },
                          {
                            title: '文件名称',
                            name: 'fileName',
                            value: '$file?.name$',
                          },
                          {
                            title: '响应信息',
                            name: 'fileResponse',
                            value: '$file?.response$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDataapiRequest689,
                        {
                          file,
                          fileList,
                          fileResponseList,
                          fileId,
                          fileSize,
                          fileName,
                          fileResponse,
                        },
                        'apiRequest',
                        {
                          id: 'apiRequest',
                          name: 'apiRequest',
                          type: 'apiRequest',
                          platform: 'pc',
                        },
                      );
                    }}
                    onListenUploading={(
                      file: any,
                      fileList: any,
                      fileResponseList: any,
                      fileId: any,
                      fileSize: any,
                      fileName: any,
                      fileResponse: any,
                    ) => {
                      const eventDatacustomActionCode426: any = [
                        {
                          type: 'customActionCode',
                          dataId: 167636892586284600,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '450905',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacustomActionCode426.params =
                        [
                          {
                            title: '文件对象',
                            name: 'file',
                            value: '$file$',
                            attrType: 'object',
                          },
                          {
                            title: '上传信息列表',
                            name: 'fileList',
                            value: '$fileList$',
                          },
                          {
                            title: '文件列表',
                            name: 'fileResponseList',
                            value: '$fileResponseList$',
                          },
                          {
                            title: '文件ID',
                            name: 'fileId',
                            value: '$file?.response?.resultObject?.fileId$',
                          },
                          {
                            title: '文件大小',
                            name: 'fileSize',
                            value: '$file?.size$',
                          },
                          {
                            title: '文件名称',
                            name: 'fileName',
                            value: '$file?.name$',
                          },
                          {
                            title: '响应信息',
                            name: 'fileResponse',
                            value: '$file?.response$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode426,
                        {
                          file,
                          fileList,
                          fileResponseList,
                          fileId,
                          fileSize,
                          fileName,
                          fileResponse,
                        },
                        'customActionCode',
                        {
                          id: 'customActionCode',
                          name: 'customActionCode',
                          type: 'customActionCode',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'StdUpload_54997')}
                    {...injectData}
                  />
                </View>
                <Input
                  name={'手机号码'}
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
                  formItemIndex={3}
                  fieldName={'usrUdfMobile'}
                  regexp={[]}
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
                    id: 'Input_801507',
                    uid: 'Input_801507',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc215: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167897422888799400,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '44915',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshUserTable',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc215.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc215,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Input_801507')}
                  {...injectData}
                />
                <Select
                  name={'账号类型'}
                  size={'default'}
                  selfSpan={''}
                  labelCol={'6'}
                  wrapperCol={'16'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={false}
                  filter={'none'}
                  classification={'default'}
                  placeholder={'请选择'}
                  fieldName={'usrKind'}
                  formItemIndex={4}
                  allowClear={true}
                  dataSource={[
                    { id: '189377', label: 'OA/4A', value: 'OA/4A' },
                    { id: '6774107', label: 'BOP', value: 'BOP' },
                    { id: '178122', label: 'IOP', value: 'IOP' },
                  ]}
                  $$componentItem={{
                    id: 'Input_87392',
                    uid: 'Input_87392',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_87392')}
                  {...injectData}
                />
                <View
                  className="View_View_841498_1719896"
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
                      formItemIndex: 5,
                      style: undefined,
                      selfSpan: undefined,
                    },
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    flex: 2,
                    textAlign: 'left',
                    justifyContent: 'flex-end',
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
                      const eventDatacallSelfFunc216: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166158469460298370,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '6966413',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshUserTable',
                            customFuncParams: '$data.local_vars$',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc216.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc216,
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
                    style={{
                      width: 'fit-content',
                      margin: '0px 12px 0px 12px',
                    }}
                    onClick={(e: any) => {
                      const forms26 = getFormByCompId(
                        'Form_148709_504968',
                        refs,
                      );
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms26) ? forms26 : [forms26]).forEach(
                        (form) => form?.resetFields(),
                      );
                      const eventDatacallSelfFunc217: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 168924287690516450,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '231982',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshUserTable',
                            customFuncParams: 'object',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc217.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc217,
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
                      refs.setComponentRef(r, 'Button_499055_798351')
                    }
                    {...injectData}
                  />
                  <Button
                    name={'工号信息模板下载'}
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
                      type: 'download',
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    }}
                    iconType={'download'}
                    hasIcon={true}
                    $$componentItem={{
                      id: 'Button_992724',
                      uid: 'Button_992724',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 12px 0px 0px' }}
                    onClick={(e: any) => {
                      const eventDatasetLoading124: any = [
                        {
                          type: 'setLoading',
                          dataId: 169381716476341950,
                          options: {
                            compId: 'Button_992724',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Button',
                            id: '72378',
                            loading: true,
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatasetLoading124.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatasetLoading124,
                        { e },
                        'setLoading',
                        {
                          id: 'setLoading',
                          name: 'setLoading',
                          type: 'setLoading',
                          platform: 'pc',
                        },
                      );
                      const eventDataapiRequest690: any = [
                        {
                          type: 'apiRequest',
                          dataId: 168802360822644300,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '921012',
                            pageJsonId: '537892',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'getDcFileTemplateByReq',
                            _apiCode: 'getDcFileTemplateByReq',
                            _source: 'rhin',
                            _serviceId: '930753687104397312',
                            _serviceTitle:
                              '根据请求对象查询文件对象模板-tsm: getDcFileTemplateByReq',
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
                                    dataKey: '921012_root.header',
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
                                    dataKey: '921012_root.path',
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
                                    dataKey: '921012_root.query',
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
                                        code: 'sceneCode',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sceneCode',
                                        compType: 'Input',
                                        name: 'sceneCode',
                                        parents: ['root', 'body'],
                                        id: 'root.body.sceneCode',
                                        dataKey: '921012_root.body.sceneCode',
                                        value: {
                                          type: ['customize'],
                                          code: 'CLS_CP_0009_0004',
                                        },
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-0',
                                      },
                                      {
                                        code: 'fileTemplateName',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.fileTemplateName',
                                        compType: 'Input',
                                        name: 'fileTemplateName',
                                        parents: ['root', 'body'],
                                        id: 'root.body.fileTemplateName',
                                        dataKey:
                                          '921012_root.body.fileTemplateName',
                                        value: {
                                          type: ['customize'],
                                          code: '工号信息批导模板.xlsx',
                                        },
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-1',
                                      },
                                    ],
                                    _id: 'root.body',
                                    compType: 'Input',
                                    parents: ['root'],
                                    id: 'root.body',
                                    dataKey: '921012_root.body',
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
                                dataKey: '921012_root',
                              },
                            ],
                            _sourceName: '根据请求对象查询文件对象模板-tsm',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'downloadByFileId',
                              dataId: 168802360822682370,
                              options: {
                                compId: 'downloadByFileId',
                                compName: 'system',
                                id: '3249345',
                                pageJsonId: '537892',
                                data: '$reply_921012.resultData.fileId$',
                                fileName: '',
                              },
                              line_number: 3,
                            },
                            {
                              type: 'setLoading',
                              dataId: 169381717218338750,
                              options: {
                                compId: 'Button_992724',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Button',
                                id: '368434',
                                loading: false,
                              },
                              line_number: 4,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 169381717427692600,
                              options: {
                                compId: 'Button_992724',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Button',
                                id: '737775',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ];
                      eventDataapiRequest690.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDataapiRequest690,
                        { e },
                        'apiRequest',
                        {
                          id: 'apiRequest',
                          name: 'apiRequest',
                          type: 'apiRequest',
                          platform: 'pc',
                        },
                      ); // console 168869554250741340
                      console.log('当前模板放置场景：', '倒闭（注销）集团关停');
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_992724')}
                    {...injectData}
                  />
                  <StdUpload
                    name={'工号信息导入'}
                    uploadStyle={'click'}
                    listType={'text'}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    fileNameEncode={false}
                    isWatermark={false}
                    optionalFile={false}
                    fileName={'file'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    acceptType={[]}
                    withCredentials={true}
                    numberLimit={99}
                    singleFileMaxSize={50}
                    uploadText={'工号信息导入'}
                    uploadTimeout={30000}
                    deleteIcon={{
                      deleteIconTheme: 'outlined',
                      deleteIconType: 'delete',
                      deleteIconIsIconFont: false,
                      showRemoveIcon: false,
                    }}
                    downloadIcon={{
                      downloadIconTheme: 'outlined',
                      downloadIconType: 'download',
                      downloadIconIsIconFont: false,
                      showDownloadIcon: false,
                    }}
                    previewIcon={{
                      previewIconTheme: 'outlined',
                      previewIconType: 'eye',
                      previewIconIsIconFont: false,
                      showPreviewIcon: false,
                    }}
                    fieldName={'oaUserImport'}
                    icon={{
                      type: undefined,
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    }}
                    $$componentItem={{
                      id: 'StdUpload_335586',
                      uid: 'StdUpload_335586',
                      type: 'StdUpload',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ margin: '0px 12px 0px 0px' }}
                    onFinishUpload={(
                      file: any,
                      fileList: any,
                      fileResponseList: any,
                      fileId: any,
                      fileSize: any,
                      fileName: any,
                      fileResponse: any,
                    ) => {
                      const eventDatasetLoading125: any = [
                        {
                          type: 'setLoading',
                          dataId: 168794232208397570,
                          options: {
                            compId: 'Table_8475669',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '4678402',
                            loading: true,
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatasetLoading125.params =
                        [
                          {
                            title: '文件对象',
                            name: 'file',
                            value: '$file$',
                            attrType: 'object',
                          },
                          {
                            title: '上传信息列表',
                            name: 'fileList',
                            value: '$fileList$',
                          },
                          {
                            title: '文件列表',
                            name: 'fileResponseList',
                            value: '$fileResponseList$',
                          },
                          {
                            title: '文件ID',
                            name: 'fileId',
                            value: '$file?.response?.resultObject?.fileId$',
                          },
                          {
                            title: '文件大小',
                            name: 'fileSize',
                            value: '$file?.size$',
                          },
                          {
                            title: '文件名称',
                            name: 'fileName',
                            value: '$file?.name$',
                          },
                          {
                            title: '响应信息',
                            name: 'fileResponse',
                            value: '$file?.response$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatasetLoading125,
                        {
                          file,
                          fileList,
                          fileResponseList,
                          fileId,
                          fileSize,
                          fileName,
                          fileResponse,
                        },
                        'setLoading',
                        {
                          id: 'setLoading',
                          name: 'setLoading',
                          type: 'setLoading',
                          platform: 'pc',
                        },
                      );
                      const eventDataapiRequest691: any = [
                        {
                          type: 'apiRequest',
                          dataId: 168794213661378080,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '669072',
                            pageJsonId: '4868135',
                            sync: false,
                            actionTitle: '',
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'dcOaUserTemplateImport',
                            _apiCode: 'dcOaUserTemplateImport',
                            _source: 'rhin',
                            _sourceName: '工号信息批导模板导入-hyj',
                            _serviceId: '991606792809275392',
                            _serviceTitle:
                              '工号信息批导模板导入-hyj: dcOaUserTemplateImport',
                            valueType: 'object',
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
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-0',
                                    id: 'root.header',
                                    dataKey: '669072_root.header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'root.path',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-1',
                                    id: 'root.path',
                                    dataKey: '669072_root.path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'root.query',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-2',
                                    id: 'root.query',
                                    dataKey: '669072_root.query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'fileCode',
                                        name: '新增节点',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'root.body.fileCode',
                                        compType: 'Input',
                                        parents: ['root', 'body'],
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-0',
                                        id: 'root.body.fileCode',
                                        dataKey: '669072_root.body.fileCode',
                                        value: {
                                          type: [
                                            'context',
                                            '$file?.response?.resultObject?.fileId$',
                                          ],
                                          code: '',
                                        },
                                      },
                                    ],
                                    _id: 'root.body',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-3',
                                    id: 'root.body',
                                    dataKey: '669072_root.body',
                                  },
                                ],
                                _id: 'root',
                                compType: 'Input',
                                isRoot: true,
                                parents: [],
                                key: '0',
                                id: 'root',
                                dataKey: '669072_root',
                              },
                            ],
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '369938',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_669072?.resultCode$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 168794219121719200,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 168802569348758500,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 168802570125018700,
                                      children: [],
                                      todoOptions: ['loading'],
                                      options: {
                                        compId: 'Table_8475669',
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Table',
                                        id: '6487812',
                                        loading: false,
                                      },
                                      actionObjId: 'Table_8475669',
                                      actionObjName: 'Table',
                                      value: 'setLoading',
                                      compLib: 'comm',
                                      line_number: 8,
                                    },
                                  ],
                                  condition: [],
                                  value: 'elseIf',
                                  callback: [
                                    {
                                      type: 'setLoading',
                                      dataId: 168802570125018700,
                                      options: {
                                        compId: 'Table_8475669',
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Table',
                                        id: '6487812',
                                        loading: false,
                                      },
                                      line_number: 8,
                                    },
                                  ],
                                },
                              ],
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 168802567144958340,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '20589',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshUserTable',
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'setLoading',
                                      dataId: 168802594724971550,
                                      options: {
                                        compId: 'Table_8475669',
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Table',
                                        id: '275017',
                                        loading: false,
                                      },
                                      line_number: 5,
                                    },
                                  ],
                                  callback2: [
                                    {
                                      type: 'setLoading',
                                      dataId: 168802594948871580,
                                      options: {
                                        compId: 'Table_8475669',
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Table',
                                        id: '638045',
                                        loading: false,
                                      },
                                      line_number: 6,
                                    },
                                  ],
                                },
                                {
                                  type: 'showMessage',
                                  dataId: 168794221422222500,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '951573',
                                    pageJsonId: '4868135',
                                    type: 'success',
                                    value: '导入成功！',
                                  },
                                  line_number: 7,
                                },
                              ],
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 168794229832992740,
                              options: {
                                compId: 'Table_8475669',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '6954742',
                                loading: false,
                              },
                              line_number: 9,
                            },
                          ],
                        },
                      ];
                      eventDataapiRequest691.params =
                        [
                          {
                            title: '文件对象',
                            name: 'file',
                            value: '$file$',
                            attrType: 'object',
                          },
                          {
                            title: '上传信息列表',
                            name: 'fileList',
                            value: '$fileList$',
                          },
                          {
                            title: '文件列表',
                            name: 'fileResponseList',
                            value: '$fileResponseList$',
                          },
                          {
                            title: '文件ID',
                            name: 'fileId',
                            value: '$file?.response?.resultObject?.fileId$',
                          },
                          {
                            title: '文件大小',
                            name: 'fileSize',
                            value: '$file?.size$',
                          },
                          {
                            title: '文件名称',
                            name: 'fileName',
                            value: '$file?.name$',
                          },
                          {
                            title: '响应信息',
                            name: 'fileResponse',
                            value: '$file?.response$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDataapiRequest691,
                        {
                          file,
                          fileList,
                          fileResponseList,
                          fileId,
                          fileSize,
                          fileName,
                          fileResponse,
                        },
                        'apiRequest',
                        {
                          id: 'apiRequest',
                          name: 'apiRequest',
                          type: 'apiRequest',
                          platform: 'pc',
                        },
                      );
                    }}
                    onListenUploading={(
                      file: any,
                      fileList: any,
                      fileResponseList: any,
                      fileId: any,
                      fileSize: any,
                      fileName: any,
                      fileResponse: any,
                    ) => {
                      const eventDatacustomActionCode427: any = [
                        {
                          type: 'customActionCode',
                          dataId: 167636892586284600,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '450905',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacustomActionCode427.params =
                        [
                          {
                            title: '文件对象',
                            name: 'file',
                            value: '$file$',
                            attrType: 'object',
                          },
                          {
                            title: '上传信息列表',
                            name: 'fileList',
                            value: '$fileList$',
                          },
                          {
                            title: '文件列表',
                            name: 'fileResponseList',
                            value: '$fileResponseList$',
                          },
                          {
                            title: '文件ID',
                            name: 'fileId',
                            value: '$file?.response?.resultObject?.fileId$',
                          },
                          {
                            title: '文件大小',
                            name: 'fileSize',
                            value: '$file?.size$',
                          },
                          {
                            title: '文件名称',
                            name: 'fileName',
                            value: '$file?.name$',
                          },
                          {
                            title: '响应信息',
                            name: 'fileResponse',
                            value: '$file?.response$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode427,
                        {
                          file,
                          fileList,
                          fileResponseList,
                          fileId,
                          fileSize,
                          fileName,
                          fileResponse,
                        },
                        'customActionCode',
                        {
                          id: 'customActionCode',
                          name: 'customActionCode',
                          type: 'customActionCode',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'StdUpload_335586')
                    }
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'用户列表'}
                isFlexColumn={false}
                pageSize={5}
                current={data?.qryDcOaUserPageByReq?.resultData?.current}
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
                    title: '用户ID',
                    key: 'usrKey',
                    dataIndex: 'usrKey',
                    id: '939022',
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
                    title: '登录账号',
                    key: 'usrLogin',
                    dataIndex: 'usrLogin',
                    id: '5001305',
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
                    title: '姓名',
                    key: 'usrLastName',
                    dataIndex: 'usrLastName',
                    id: '2801434',
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
                    title: '手机号',
                    key: 'usrUdfMobile',
                    dataIndex: 'usrUdfMobile',
                    id: '8883801',
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
                    title: '账号类型',
                    key: 'usrKind',
                    dataIndex: 'usrKind',
                    id: '11289326',
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
                    title: '创建时间',
                    key: 'usrCreated',
                    dataIndex: 'usrCreated',
                    className: 'divider',
                    id: '5129749',
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
                    id: '434239',
                    customRendering:
                      '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：可以是 html 模板字符串 */function renderFunc(text, row, index) {  var fontColor = "#0000FF";  if (row.usrStatus === "Inactive") {    fontColor = "#FF0000";  }  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";}',
                    originCustomRendering: [
                      ' /**',
                      ' * 自定义渲染函数',
                      ' * @param {String} text 单元格显示的文字内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {number} index 行索引',
                      ' * @returns 渲染的内容：可以是 html 模板字符串',
                      ' */',
                      'function renderFunc(text, row, index) {',
                      '        let fontColor = "#0000FF";',
                      '',
                      '      if (row.usrStatus === "Inactive") {',
                      '        fontColor = "#FF0000";',
                      '      }',
                      '    ',
                      '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                      '}',
                    ],
                    className: 'divider',
                    staticDataSource: [
                      { id: '7432879', label: '在用', value: 'Active' },
                      { id: '461465', label: '失效', value: 'Inactive' },
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
                ]}
                page={true}
                rowKeyType={'specified'}
                editMode={'single'}
                selectType={'radio'}
                bordered={'segmentation'}
                size={'middle'}
                fixedAction={false}
                rowSelection={undefined}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
                pageSizeOptions={'[5,10,20]'}
                rowKey={'orgUserRelId'}
                dataSource={data?.qryDcOaUserPageByReq?.resultData?.records}
                total={data?.qryDcOaUserPageByReq?.resultData?.total}
                fieldName={'data.qryAttrSpecPage.resultData.total'}
                rowActions={[
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '0866815',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '521438',
                    checked: true,
                  },
                ]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.qryDcOaUserPageByReq.resultData.records'
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
                  const eventDatacustomActionCode428: any = [
                    {
                      type: 'customActionCode',
                      dataId: 168791644769990620,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '74135275',
                        pageJsonId: '4868135',
                        code: 'function main(data,state,success,fail){var item={usrKey:row.usrKey,usrLogin:row.usrLogin,usrStatus:"Inactive"};success([item])};',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 168791651706224740,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '955941',
                            pageJsonId: '4868135',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'saveOrUpdateDcOaUserBatch',
                            _apiCode: 'saveOrUpdateDcOaUserBatch',
                            _source: 'rhin',
                            _sourceName: '批量新增/修改OA工号信息-hyj',
                            _serviceId: '990807998886240256',
                            _serviceTitle:
                              '批量新增/修改OA工号信息-hyj: saveOrUpdateDcOaUserBatch',
                            valueType: 'object',
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
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-0',
                                    id: 'root.header',
                                    dataKey: '955941_root.header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'root.path',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-1',
                                    id: 'root.path',
                                    dataKey: '955941_root.path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'root.query',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-2',
                                    id: 'root.query',
                                    dataKey: '955941_root.query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'userDTOList',
                                        attrType: 'objectArray',
                                        children: [
                                          {
                                            code: 'usrKey',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.userDTOList.usrKey',
                                            compType: 'Input',
                                            name: 'usrKey',
                                            parents: [
                                              'root',
                                              'body',
                                              'userDTOList',
                                            ],
                                            parentType: 'objectArray',
                                            parentKey: '0-3-0',
                                            key: '0-3-0-0',
                                            parentCode: 'userDTOList',
                                            id: 'root.body.userDTOList.usrKey',
                                            dataKey:
                                              '955941_root.body.userDTOList.usrKey',
                                          },
                                          {
                                            code: 'usrLastName',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.userDTOList.usrLastName',
                                            compType: 'Input',
                                            name: 'usrLastName',
                                            parents: [
                                              'root',
                                              'body',
                                              'userDTOList',
                                            ],
                                            parentType: 'objectArray',
                                            parentKey: '0-3-0',
                                            key: '0-3-0-1',
                                            parentCode: 'userDTOList',
                                            id: 'root.body.userDTOList.usrLastName',
                                            dataKey:
                                              '955941_root.body.userDTOList.usrLastName',
                                          },
                                          {
                                            code: 'usrFirstName',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.userDTOList.usrFirstName',
                                            compType: 'Input',
                                            name: 'usrFirstName',
                                            parents: [
                                              'root',
                                              'body',
                                              'userDTOList',
                                            ],
                                            parentType: 'objectArray',
                                            parentKey: '0-3-0',
                                            key: '0-3-0-2',
                                            parentCode: 'userDTOList',
                                            id: 'root.body.userDTOList.usrFirstName',
                                            dataKey:
                                              '955941_root.body.userDTOList.usrFirstName',
                                          },
                                          {
                                            code: 'usrLogin',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.userDTOList.usrLogin',
                                            compType: 'Input',
                                            name: 'usrLogin',
                                            parents: [
                                              'root',
                                              'body',
                                              'userDTOList',
                                            ],
                                            parentType: 'objectArray',
                                            parentKey: '0-3-0',
                                            key: '0-3-0-3',
                                            parentCode: 'userDTOList',
                                            id: 'root.body.userDTOList.usrLogin',
                                            dataKey:
                                              '955941_root.body.userDTOList.usrLogin',
                                          },
                                          {
                                            code: 'usrUdfSex',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.userDTOList.usrUdfSex',
                                            compType: 'Input',
                                            name: 'usrUdfSex',
                                            parents: [
                                              'root',
                                              'body',
                                              'userDTOList',
                                            ],
                                            parentType: 'objectArray',
                                            parentKey: '0-3-0',
                                            key: '0-3-0-4',
                                            parentCode: 'userDTOList',
                                            id: 'root.body.userDTOList.usrUdfSex',
                                            dataKey:
                                              '955941_root.body.userDTOList.usrUdfSex',
                                          },
                                          {
                                            code: 'usrUdfMobile',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.userDTOList.usrUdfMobile',
                                            compType: 'Input',
                                            name: 'usrUdfMobile',
                                            parents: [
                                              'root',
                                              'body',
                                              'userDTOList',
                                            ],
                                            parentType: 'objectArray',
                                            parentKey: '0-3-0',
                                            key: '0-3-0-5',
                                            parentCode: 'userDTOList',
                                            id: 'root.body.userDTOList.usrUdfMobile',
                                            dataKey:
                                              '955941_root.body.userDTOList.usrUdfMobile',
                                          },
                                          {
                                            code: 'usrEmail',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.userDTOList.usrEmail',
                                            compType: 'Input',
                                            name: 'usrEmail',
                                            parents: [
                                              'root',
                                              'body',
                                              'userDTOList',
                                            ],
                                            parentType: 'objectArray',
                                            parentKey: '0-3-0',
                                            key: '0-3-0-6',
                                            parentCode: 'userDTOList',
                                            id: 'root.body.userDTOList.usrEmail',
                                            dataKey:
                                              '955941_root.body.userDTOList.usrEmail',
                                          },
                                          {
                                            code: 'usrStatus',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.userDTOList.usrStatus',
                                            compType: 'Input',
                                            name: 'usrStatus',
                                            parents: [
                                              'root',
                                              'body',
                                              'userDTOList',
                                            ],
                                            parentType: 'objectArray',
                                            parentKey: '0-3-0',
                                            key: '0-3-0-7',
                                            parentCode: 'userDTOList',
                                            id: 'root.body.userDTOList.usrStatus',
                                            dataKey:
                                              '955941_root.body.userDTOList.usrStatus',
                                          },
                                        ],
                                        _id: 'root.body.userDTOList',
                                        compType: 'Input',
                                        name: 'userDTOList',
                                        parents: ['root', 'body'],
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-0',
                                        id: 'root.body.userDTOList',
                                        dataKey: '955941_root.body.userDTOList',
                                        value: {
                                          type: ['context', '$data_74135275$'],
                                          code: '',
                                        },
                                      },
                                    ],
                                    _id: 'root.body',
                                    compType: 'Input',
                                    parents: ['root'],
                                    parentType: 'object',
                                    parentKey: '0',
                                    key: '0-3',
                                    id: 'root.body',
                                    dataKey: '955941_root.body',
                                  },
                                ],
                                _id: 'root',
                                compType: 'Input',
                                isRoot: true,
                                parents: [],
                                key: '0',
                                id: 'root',
                                dataKey: '955941_root',
                              },
                            ],
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '465052',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_955941.resultCode$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 168791654931381540,
                              elseIfs: [],
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'showMessage',
                                  dataId: 169408124771414370,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '3013916',
                                    pageJsonId: '4868135',
                                    type: 'success',
                                    value: '删除成功！',
                                  },
                                  line_number: 4,
                                },
                                {
                                  type: 'callSelfFunc',
                                  dataId: 169408125432856400,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '186757',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshUserTable',
                                    customFuncParams: 'object',
                                  },
                                  line_number: 5,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'setDisable',
                                  dataId: 169408126064845100,
                                  options: {
                                    compId: [
                                      'Input_485159_451983',
                                      'Input_4717291_1771768',
                                      'Button_213218_267197',
                                      'Button_221995_112914',
                                      'Button_8258636_313289',
                                      'Button_556714',
                                      'Button_087538',
                                      'Button_8990255',
                                      'Input_272419',
                                      'Input_514473',
                                      'Input_3889064',
                                      'Input_33684855',
                                      'Button_224226',
                                      'Button_499055',
                                      'Button_578183',
                                      'Button_789349',
                                      'Button_302831',
                                    ],
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Form',
                                    id: '5120865',
                                    disabled: 'true',
                                    compid: [
                                      'Input_485159_451983',
                                      'Input_4717291_1771768',
                                      'Button_213218_267197',
                                      'Button_221995_112914',
                                      'Button_8258636_313289',
                                      'Button_556714',
                                      'Button_087538',
                                      'Button_8990255',
                                      'Input_272419',
                                      'Input_514473',
                                      'Input_3889064',
                                      'Input_33684855',
                                      'Button_224226',
                                      'Button_499055',
                                      'Button_578183',
                                      'Button_789349',
                                      'Button_302831',
                                    ],
                                  },
                                  line_number: 6,
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
                  eventDatacustomActionCode428.params =
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
                    eventDatacustomActionCode428,
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
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatasetLoading126: any = [
                    {
                      type: 'setLoading',
                      dataId: 166270972999910270,
                      options: {
                        compId: 'Table_8475669',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Table',
                        id: '699238',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading126.params =
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
                    eventDatasetLoading126,
                    { page, pageSize },
                    'setLoading',
                    {
                      id: 'setLoading',
                      name: 'setLoading',
                      type: 'setLoading',
                      platform: 'pc',
                    },
                  );
                  const eventDatareloadDataSource66: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 166270361819417700,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '700099',
                        pageJsonId: '4868135',
                        dataSourceId: 167897551281076160,
                        dataSourceName: 'qryDcOaUserPageByReq',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '530516',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'header',
                          },
                          {
                            attrId: '195309',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'path',
                          },
                          {
                            attrId: '672916',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'query',
                          },
                          {
                            attrId: '538775',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '634294',
                                code: 'usrKey',
                                name: 'usrKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.usrKey',
                              },
                              {
                                attrId: '421155',
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
                                attrId: '212704',
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
                                attrId: '380376',
                                code: 'usrUdfMobile',
                                name: 'usrUdfMobile',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.usrUdfMobile',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709_504968',
                                    'getFieldsValue',
                                  ],
                                  code: 'usrUdfMobile',
                                },
                              },
                              {
                                attrId: '005753',
                                code: 'usrKind',
                                name: 'usrKind',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.usrKind',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709_504968',
                                    'getFieldsValue',
                                  ],
                                  code: 'usrKind',
                                },
                              },
                              {
                                attrId: '43285',
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
                                attrId: '778762',
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
                            attrId: '250753',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '14602',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '6744975',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '4834741',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '7262893',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '5204435',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '7039264',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '119927',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '244579',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '140188',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '815643',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'fieldArray',
                                children: [
                                  {
                                    attrId: '496543',
                                    code: 'listItem',
                                    name: '列表元素',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                  },
                                ],
                              },
                              {
                                attrId: '227409',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '645498',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'boolean',
                              },
                              {
                                attrId: '9801743',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '161008',
                                    code: 'usrUdfShortName',
                                    name: 'usrUdfShortName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '129903',
                                    code: 'usrStatus',
                                    name: 'usrStatus',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '906119',
                                    code: 'subUsrUdfJobLevels',
                                    name: 'subUsrUdfJobLevels',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '085343',
                                    code: 'usrType',
                                    name: 'usrType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '856725',
                                    code: 'lanId',
                                    name: 'lanId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '955332',
                                    code: 'usrEndDate',
                                    name: 'usrEndDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '441434',
                                    code: 'usrCreate',
                                    name: 'usrCreate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '708742',
                                    code: 'usrPwdResetAttemptsCtr',
                                    name: 'usrPwdResetAttemptsCtr',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '942733',
                                    code: 'actName',
                                    name: 'actName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '421773',
                                    code: 'usrProvisionedDate',
                                    name: 'usrProvisionedDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '623688',
                                    code: 'actUdfNum',
                                    name: 'actUdfNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '1632585',
                                    code: 'orgType',
                                    name: 'orgType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '7360487',
                                    code: 'usrUdfEmployeeId',
                                    name: 'usrUdfEmployeeId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0002336',
                                    code: 'usrUdfBelongComp',
                                    name: 'usrUdfBelongComp',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '8478185',
                                    code: 'subOrgNames',
                                    name: 'subOrgNames',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '584748',
                                    code: 'usrKey',
                                    name: 'usrKey',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '394997',
                                    code: 'usrEmpType',
                                    name: 'usrEmpType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '423962',
                                    code: 'usrLastName',
                                    name: 'usrLastName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '10464',
                                    code: 'orgName',
                                    name: 'orgName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9007174',
                                    code: 'usrUdfJobLevel',
                                    name: 'usrUdfJobLevel',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '097075',
                                    code: 'orgCode',
                                    name: 'orgCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '8402146',
                                    code: 'isImportant',
                                    name: 'isImportant',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2101278',
                                    code: 'usrFirstName',
                                    name: 'usrFirstName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '023851',
                                    code: 'usrUdfIdNum',
                                    name: 'usrUdfIdNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '307763',
                                    code: 'orgShortName',
                                    name: 'orgShortName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '1734927',
                                    code: 'usrChangePwdAtNextLogon',
                                    name: 'usrChangePwdAtNextLogon',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '4820596',
                                    code: 'orgUserRelId',
                                    name: 'orgUserRelId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '24114635',
                                    code: 'usrUdfOrgOrder',
                                    name: 'usrUdfOrgOrder',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '013873',
                                    code: 'userRoleRelId',
                                    name: 'userRoleRelId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '726321',
                                    code: 'subUsrUdfOrgOrders',
                                    name: 'subUsrUdfOrgOrders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '811058',
                                    code: 'areaId',
                                    name: 'areaId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '1942398',
                                    code: 'usrLogin',
                                    name: 'usrLogin',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9340307',
                                    code: 'subUsrUdfOaOrgs',
                                    name: 'subUsrUdfOaOrgs',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '034655',
                                    code: 'usrUdfSysMask',
                                    name: 'usrUdfSysMask',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '439515',
                                    code: 'cardInfo',
                                    name: 'cardInfo',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '591058',
                                    code: 'usrUpdate',
                                    name: 'usrUpdate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '5556414',
                                    code: 'usrKind',
                                    name: 'usrKind',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '914123',
                                    code: 'usrUdfOaOrg',
                                    name: 'usrUdfOaOrg',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '83259995',
                                    code: 'provinceId',
                                    name: 'provinceId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2905386',
                                    code: 'usrPassword',
                                    name: 'usrPassword',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '05979',
                                    code: 'usrCreated',
                                    name: 'usrCreated',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '427704',
                                    code: 'usrUdfMgrErpOrg',
                                    name: 'usrUdfMgrErpOrg',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '403027',
                                    code: 'isDefault',
                                    name: 'isDefault',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '3216008',
                                    code: 'usrEmail',
                                    name: 'usrEmail',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '254333',
                                    code: 'usrLoginAttemptsCtr',
                                    name: 'usrLoginAttemptsCtr',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '91172',
                                    code: 'usrUdfMobile',
                                    name: 'usrUdfMobile',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2244441',
                                    code: 'actKey',
                                    name: 'actKey',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '26245',
                                    code: 'orgLevel',
                                    name: 'orgLevel',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '317615',
                                    code: 'usrLocked',
                                    name: 'usrLocked',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0230635',
                                    code: 'usrUdfDepartment',
                                    name: 'usrUdfDepartment',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2123007',
                                    code: 'usrUdfSex',
                                    name: 'usrUdfSex',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '656161',
                                    code: 'usrUdfOaNum',
                                    name: 'usrUdfOaNum',
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
                          dataId: 166270973585954080,
                          options: {
                            compId: 'Table_8475669',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '991327',
                            loading: false,
                          },
                          line_number: 3,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 166270973715261800,
                          options: {
                            compId: 'Table_8475669',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '185867',
                            loading: false,
                          },
                          line_number: 4,
                        },
                      ],
                    },
                  ];
                  eventDatareloadDataSource66.params =
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
                    eventDatareloadDataSource66,
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
                  const eventDatashowCustomModal48: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166270379925162180,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '680228',
                        pageJsonId: '4868135',
                        modalname: '/detailOaUser',
                        pageId: '885082440567881728',
                        paramsObj: {
                          bizId: '$rowId$',
                          sceneCode: 'V',
                          dcOaUser: '$row$',
                        },
                        paramsObjKeyValueMap: {
                          bizId: '$rowId$',
                          sceneCode: 'V',
                          dcOaUser: '$row$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal48.params =
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
                    eventDatashowCustomModal48,
                    { rowId, row, index },
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource73: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167888006087050140,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '5642315',
                        pageJsonId: '4868135',
                        dataSourceId: 166158805345111460,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '2663016',
                            code: 'row_usr_key',
                            name: '当前选中行usrKey',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrKey',
                              hideAttr: false,
                            },
                          },
                          {
                            attrId: '121923',
                            code: 'row_usr_login',
                            name: '当前选中行usrLogin',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrLogin',
                              hideAttr: false,
                            },
                          },
                          {
                            attrId: '62575',
                            code: 'row_usr_last_name',
                            name: '当前选中行usrLastName',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrLastName',
                              hideAttr: false,
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'clearValue',
                          dataId: 167888006087133120,
                          options: {
                            compId: 'Input_3889064',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '877237',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'clearValue',
                          dataId: 167888006087193250,
                          options: {
                            compId: 'Input_33684855',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '048904',
                          },
                          line_number: 4,
                        },
                        {
                          type: 'reloadDataSource',
                          dataId: 167888006087138720,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '3047675',
                            pageJsonId: '4868135',
                            dataSourceId: 166270738136718940,
                            dataSourceName: 'qryDcPostInfoByUsrKey',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '599949',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'header',
                              },
                              {
                                attrId: '3751144',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'path',
                              },
                              {
                                attrId: '7799145',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'query',
                              },
                              {
                                attrId: '2466545',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '161157',
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
                                    attrId: '5926227',
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
                                    attrId: '4958816',
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
                                  },
                                  {
                                    attrId: '207693',
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
                                  },
                                  {
                                    attrId: '144303',
                                    code: 'usrKey',
                                    name: 'usrKey',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.usrKey',
                                    value: {
                                      type: ['context', '$row$'],
                                      hideAttr: false,
                                      code: 'usrKey',
                                    },
                                  },
                                ],
                                key: 'body',
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '966637',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '72217525',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '230439',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9542645',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '187334',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '924569',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '039357',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '6339666',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '832981',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '722384',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '044174',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '232498',
                                        code: 'listItem',
                                        name: '列表元素',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                      },
                                    ],
                                  },
                                  {
                                    attrId: '418533',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '011619',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '860169',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '575352',
                                        code: 'statusDate',
                                        name: 'statusDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '508454',
                                        code: 'createStaffName',
                                        name: 'createStaffName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '323099',
                                        code: 'areaId',
                                        name: 'areaId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2659633',
                                        code: 'postDesc',
                                        name: 'postDesc',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '512767',
                                        code: 'postUserRelId',
                                        name: 'postUserRelId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '629409',
                                        code: 'postName',
                                        name: 'postName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '614525',
                                        code: 'postCode',
                                        name: 'postCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '857535',
                                        code: 'statusCd',
                                        name: 'statusCd',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '005997',
                                        code: 'remark',
                                        name: 'remark',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3095398',
                                        code: 'postId',
                                        name: 'postId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '268628',
                                        code: 'lanId',
                                        name: 'lanId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '268909',
                                        code: 'provinceId',
                                        name: 'provinceId',
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
                          line_number: 5,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 167888006087187740,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '577012',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshOaUserRefTable',
                            customFuncParams: 'object',
                          },
                          line_number: 6,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'console',
                          dataId: 167888006087149000,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '879208',
                            pageJsonId: '4868135',
                            value: ['$data.local_vars$'],
                          },
                          line_number: 7,
                        },
                        {
                          type: 'console',
                          dataId: 167888006087106850,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '001714',
                            pageJsonId: '4868135',
                            value: ['选中行对象：', '$row$'],
                          },
                          line_number: 8,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource73.params =
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
                    eventDatasetDataSource73,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetCurrentFormValues9: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 167888006951967650,
                      options: {
                        compId: 'Form_31_1121_054627',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '24286',
                        params: '$selectedRows[0]$',
                      },
                      line_number: 9,
                    },
                  ];
                  eventDatasetCurrentFormValues9.params =
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
                    eventDatasetCurrentFormValues9,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable74: any = [
                    {
                      type: 'setDisable',
                      dataId: 167888007817412860,
                      options: {
                        compId: [
                          'Form_493328_308943',
                          'Input_485159_451983',
                          'Input_4717291_1771768',
                          'Button_213218_267197',
                          'Button_221995_112914',
                          'Button_8258636_313289',
                        ],
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '983028',
                        disabled: '',
                        compid: [
                          'Form_493328_308943',
                          'Input_485159_451983',
                          'Input_4717291_1771768',
                          'Button_213218_267197',
                          'Button_221995_112914',
                          'Button_8258636_313289',
                        ],
                      },
                      line_number: 10,
                    },
                  ];
                  eventDatasetDisable74.params =
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
                    eventDatasetDisable74,
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
                  const eventDatasetDisable75: any = [
                    {
                      type: 'setDisable',
                      dataId: 167888011586705060,
                      options: {
                        compId: [
                          'Form_493328_308943',
                          'Input_485159_451983',
                          'Input_4717291_1771768',
                          'Button_213218_267197',
                          'Button_221995_112914',
                          'Button_8258636_313289',
                          'Form_4812867',
                          'Button_556714',
                          'Button_087538',
                          'Button_8990255',
                          'Input_272419',
                          'Input_514473',
                          'Form_148709',
                          'Input_3889064',
                          'Input_33684855',
                          'Button_224226',
                          'Button_499055',
                        ],
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '907275',
                        disabled: '',
                        compid: [
                          'Form_493328_308943',
                          'Input_485159_451983',
                          'Input_4717291_1771768',
                          'Button_213218_267197',
                          'Button_221995_112914',
                          'Button_8258636_313289',
                          'Form_4812867',
                          'Button_556714',
                          'Button_087538',
                          'Button_8990255',
                          'Input_272419',
                          'Input_514473',
                          'Form_148709',
                          'Input_3889064',
                          'Input_33684855',
                          'Button_224226',
                          'Button_499055',
                        ],
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetDisable75.params =
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
                    eventDatasetDisable75,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource74: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167888009710020300,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '804104',
                        pageJsonId: '4868135',
                        dataSourceId: 166158805345111460,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '2663016',
                            code: 'row_usr_key',
                            name: '当前选中行usrKey',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrKey',
                              hideAttr: false,
                            },
                          },
                          {
                            attrId: '121923',
                            code: 'row_usr_login',
                            name: '当前选中行usrLogin',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrLogin',
                              hideAttr: false,
                            },
                          },
                          {
                            attrId: '62575',
                            code: 'row_usr_last_name',
                            name: '当前选中行usrLastName',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrLastName',
                              hideAttr: false,
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'clearValue',
                          dataId: 167888009710003260,
                          options: {
                            compId: 'Input_3889064',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '0317134',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'clearValue',
                          dataId: 167888009710082850,
                          options: {
                            compId: 'Input_33684855',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '388843',
                          },
                          line_number: 4,
                        },
                        {
                          type: 'reloadDataSource',
                          dataId: 167888009710090620,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '008929',
                            pageJsonId: '4868135',
                            dataSourceId: 166270738136718940,
                            dataSourceName: 'qryDcPostInfoByUsrKey',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '599949',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'header',
                              },
                              {
                                attrId: '3751144',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'path',
                              },
                              {
                                attrId: '7799145',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'query',
                              },
                              {
                                attrId: '2466545',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '161157',
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
                                    attrId: '5926227',
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
                                    attrId: '4958816',
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
                                  },
                                  {
                                    attrId: '207693',
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
                                  },
                                  {
                                    attrId: '144303',
                                    code: 'usrKey',
                                    name: 'usrKey',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.usrKey',
                                    value: {
                                      type: ['context', '$row$'],
                                      hideAttr: false,
                                      code: 'usrKey',
                                    },
                                  },
                                ],
                                key: 'body',
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '966637',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '72217525',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '230439',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9542645',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '187334',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '924569',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '039357',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '6339666',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '832981',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '722384',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '044174',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '232498',
                                        code: 'listItem',
                                        name: '列表元素',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                      },
                                    ],
                                  },
                                  {
                                    attrId: '418533',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '011619',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '860169',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '575352',
                                        code: 'statusDate',
                                        name: 'statusDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '508454',
                                        code: 'createStaffName',
                                        name: 'createStaffName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '323099',
                                        code: 'areaId',
                                        name: 'areaId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2659633',
                                        code: 'postDesc',
                                        name: 'postDesc',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '512767',
                                        code: 'postUserRelId',
                                        name: 'postUserRelId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '629409',
                                        code: 'postName',
                                        name: 'postName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '614525',
                                        code: 'postCode',
                                        name: 'postCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '857535',
                                        code: 'statusCd',
                                        name: 'statusCd',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '005997',
                                        code: 'remark',
                                        name: 'remark',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3095398',
                                        code: 'postId',
                                        name: 'postId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '268628',
                                        code: 'lanId',
                                        name: 'lanId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '268909',
                                        code: 'provinceId',
                                        name: 'provinceId',
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
                          line_number: 5,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 167888009710091260,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '669859',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshOaUserRefTable',
                            customFuncParams: 'object',
                          },
                          line_number: 6,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 167894552733170530,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '8446851',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshOaRoleTable',
                            customFuncParams: 'object',
                          },
                          line_number: 7,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 169304323445972830,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '238737',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshBOPTable',
                            customFuncParams: 'object',
                          },
                          line_number: 8,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'setDisable',
                          dataId: 169304324119788860,
                          options: {
                            compId: [
                              'Button_302831',
                              'Button_578183',
                              'Button_789349',
                              'Input_7683',
                            ],
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Button',
                            id: '391435',
                            disabled: '',
                            compid: [
                              'Button_302831',
                              'Button_578183',
                              'Button_789349',
                              'Input_7683',
                            ],
                          },
                          line_number: 9,
                        },
                        {
                          type: 'ifelse',
                          shielding: true,
                          condition: [
                            {
                              condId: '342225',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$row.usrKind$',
                                operate: '==',
                                manualValue: 'OA',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 168791617031618780,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 168791617031684670,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 168791617031637630,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 168791617031669950,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                      shielding: true,
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 168791617031615230,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      shielding: true,
                                    },
                                  ],
                                  todoOptions: [
                                    'selectServerDataSource',
                                    'dataSourceReloadFilter',
                                  ],
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '344205',
                                    pageJsonId: '4868135',
                                    dataSourceId: 168785438790334820,
                                    dataSourceName:
                                      'qryBopUserIdByOaUserIdPage',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '973192',
                                        code: 'header',
                                        name: '请求头参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '8256182',
                                        code: 'path',
                                        name: '请求路径参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '684327',
                                        code: 'query',
                                        name: 'URL 参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '567351',
                                        code: 'body',
                                        name: '请求体',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '873181',
                                            code: 'pageSize',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '5',
                                            },
                                            value: {
                                              type: ['customize'],
                                              code: '0',
                                            },
                                          },
                                          {
                                            attrId: '1052573',
                                            code: 'pageNum',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '396546',
                                            code: 'oaUserId',
                                            name: 'OA工号',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: 'CESHIKONGSHUJU',
                                            },
                                          },
                                          {
                                            attrId: '988078',
                                            code: 'userId',
                                            name: 'BOP工号',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: '',
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  actionObjId: 'reloadDataSource',
                                  actionObjName: 'page',
                                  value: 'reloadDataSource',
                                  shielding: true,
                                  line_number: 13,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 168791617031619520,
                                  children: [],
                                  todoOptions: ['disabled', 'selectComp'],
                                  options: {
                                    compId: [
                                      'Button_302831',
                                      'Button_578183',
                                      'Button_789349',
                                      'Input_7683',
                                    ],
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Button',
                                    id: '157569',
                                    disabled: 'true',
                                    compid: [
                                      'Button_302831',
                                      'Button_578183',
                                      'Button_789349',
                                      'Input_7683',
                                    ],
                                  },
                                  actionObjId: 'Button_302831',
                                  actionObjName: 'Button',
                                  value: 'setDisable',
                                  compLib: 'comm',
                                  shielding: true,
                                  line_number: 14,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              shielding: true,
                              callback: [
                                {
                                  type: 'reloadDataSource',
                                  dataId: 168791617031637630,
                                  shielding: true,
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '344205',
                                    pageJsonId: '4868135',
                                    dataSourceId: 168785438790334820,
                                    dataSourceName:
                                      'qryBopUserIdByOaUserIdPage',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '973192',
                                        code: 'header',
                                        name: '请求头参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '8256182',
                                        code: 'path',
                                        name: '请求路径参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '684327',
                                        code: 'query',
                                        name: 'URL 参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '567351',
                                        code: 'body',
                                        name: '请求体',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '873181',
                                            code: 'pageSize',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '5',
                                            },
                                            value: {
                                              type: ['customize'],
                                              code: '0',
                                            },
                                          },
                                          {
                                            attrId: '1052573',
                                            code: 'pageNum',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '396546',
                                            code: 'oaUserId',
                                            name: 'OA工号',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: 'CESHIKONGSHUJU',
                                            },
                                          },
                                          {
                                            attrId: '988078',
                                            code: 'userId',
                                            name: 'BOP工号',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: '',
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 13,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'setDisable',
                                  dataId: 168791617031619520,
                                  shielding: true,
                                  options: {
                                    compId: [
                                      'Button_302831',
                                      'Button_578183',
                                      'Button_789349',
                                      'Input_7683',
                                    ],
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Button',
                                    id: '157569',
                                    disabled: 'true',
                                    compid: [
                                      'Button_302831',
                                      'Button_578183',
                                      'Button_789349',
                                      'Input_7683',
                                    ],
                                  },
                                  line_number: 14,
                                },
                              ],
                            },
                          ],
                          line_number: 10,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 168791617031674800,
                              shielding: true,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '1206205',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshBOPTable',
                                customFuncParams: 'object',
                              },
                              line_number: 11,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setDisable',
                              dataId: 168791674895626600,
                              shielding: true,
                              options: {
                                compId: [
                                  'Button_302831',
                                  'Button_578183',
                                  'Button_789349',
                                  'Input_7683',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Button',
                                id: '221707',
                                disabled: '',
                                compid: [
                                  'Button_302831',
                                  'Button_578183',
                                  'Button_789349',
                                  'Input_7683',
                                ],
                              },
                              line_number: 12,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource74.params =
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
                    eventDatasetDataSource74,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetCurrentFormValues10: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 167888010790255300,
                      options: {
                        compId: 'Form_31_1121_054627',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '700442',
                        params: '$row$',
                      },
                      line_number: 15,
                    },
                  ];
                  eventDatasetCurrentFormValues10.params =
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
                    eventDatasetCurrentFormValues10,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasysSetDisable2: any = [
                    {
                      type: 'sysSetDisable',
                      dataId: 168791478548174620,
                      options: {
                        compId: [
                          'Form_31_1121_054627',
                          'Button_269697',
                          'Button_541288',
                        ],
                        compName: 'page',
                        id: '428451',
                        pageJsonId: '4868135',
                        disabled: 'true',
                        compid: [
                          'Form_31_1121_054627',
                          'Button_269697',
                          'Button_541288',
                        ],
                      },
                      line_number: 16,
                    },
                  ];
                  eventDatasysSetDisable2.params =
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
                    eventDatasysSetDisable2,
                    { rowId, row, index },
                    'sysSetDisable',
                    {
                      id: 'sysSetDisable',
                      name: 'sysSetDisable',
                      type: 'sysSetDisable',
                      platform: 'pc',
                    },
                  );
                }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatasetActiveTabPane1: any = [
                    {
                      type: 'setActiveTabPane',
                      dataId: 168783531082078000,
                      options: {
                        compId: 'Tabs_852728',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Tabs',
                        id: '474384',
                        paramsObj: { activiKey: '1' },
                        paramsObjKeyValueMap: { activiKey: '1' },
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetActiveTabPane1.params =
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
                    eventDatasetActiveTabPane1,
                    { rowId, row, index },
                    'setActiveTabPane',
                    {
                      id: 'setActiveTabPane',
                      name: 'setActiveTabPane',
                      type: 'setActiveTabPane',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource75: any = [
                    {
                      type: 'setDataSource',
                      dataId: 168785773833595780,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '397041',
                        pageJsonId: '4868135',
                        dataSourceId: 166158805345111460,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '2663016',
                            code: 'row_usr_key',
                            name: '当前选中行usrKey',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrKey',
                              hideAttr: false,
                            },
                          },
                          {
                            attrId: '121923',
                            code: 'row_usr_login',
                            name: '当前选中行usrLogin',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrLogin',
                              hideAttr: false,
                            },
                          },
                          {
                            attrId: '62575',
                            code: 'row_usr_last_name',
                            name: '当前选中行usrLastName',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              code: 'usrLastName',
                              hideAttr: false,
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'clearValue',
                          dataId: 168785773833578750,
                          options: {
                            compId: 'Input_3889064',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '6907293',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'clearValue',
                          dataId: 168785773833526560,
                          options: {
                            compId: 'Input_33684855',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '284935',
                          },
                          line_number: 4,
                        },
                        {
                          type: 'reloadDataSource',
                          dataId: 168785773833544640,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '882067',
                            pageJsonId: '4868135',
                            dataSourceId: 166270738136718940,
                            dataSourceName: 'qryDcPostInfoByUsrKey',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '599949',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'header',
                              },
                              {
                                attrId: '3751144',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'path',
                              },
                              {
                                attrId: '7799145',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'query',
                              },
                              {
                                attrId: '2466545',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '161157',
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
                                    attrId: '5926227',
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
                                    attrId: '4958816',
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
                                  },
                                  {
                                    attrId: '207693',
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
                                  },
                                  {
                                    attrId: '144303',
                                    code: 'usrKey',
                                    name: 'usrKey',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.usrKey',
                                    value: {
                                      type: ['context', '$row$'],
                                      hideAttr: false,
                                      code: 'usrKey',
                                    },
                                  },
                                ],
                                key: 'body',
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '966637',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '72217525',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '230439',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9542645',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '187334',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '924569',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '039357',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '6339666',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '832981',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '722384',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '044174',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '232498',
                                        code: 'listItem',
                                        name: '列表元素',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                      },
                                    ],
                                  },
                                  {
                                    attrId: '418533',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '011619',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '860169',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '575352',
                                        code: 'statusDate',
                                        name: 'statusDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '508454',
                                        code: 'createStaffName',
                                        name: 'createStaffName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '323099',
                                        code: 'areaId',
                                        name: 'areaId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2659633',
                                        code: 'postDesc',
                                        name: 'postDesc',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '512767',
                                        code: 'postUserRelId',
                                        name: 'postUserRelId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '629409',
                                        code: 'postName',
                                        name: 'postName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '614525',
                                        code: 'postCode',
                                        name: 'postCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '857535',
                                        code: 'statusCd',
                                        name: 'statusCd',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '005997',
                                        code: 'remark',
                                        name: 'remark',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3095398',
                                        code: 'postId',
                                        name: 'postId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '268628',
                                        code: 'lanId',
                                        name: 'lanId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '268909',
                                        code: 'provinceId',
                                        name: 'provinceId',
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
                          line_number: 5,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 168785773833585150,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '943782',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshOaUserRefTable',
                            customFuncParams: 'object',
                          },
                          line_number: 6,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 168785773833576130,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '91185',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshOaRoleTable',
                            customFuncParams: 'object',
                          },
                          line_number: 7,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '342225',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$row.usrKind$',
                                operate: '==',
                                manualValue: 'OA',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 168791552178742900,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 168791556023882530,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 168791563263869000,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 168791563263834020,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 168791563263891000,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: [
                                    'selectServerDataSource',
                                    'dataSourceReloadFilter',
                                  ],
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '292825',
                                    pageJsonId: '4868135',
                                    dataSourceId: 168785438790334820,
                                    dataSourceName:
                                      'qryBopUserIdByOaUserIdPage',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '973192',
                                        code: 'header',
                                        name: '请求头参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '8256182',
                                        code: 'path',
                                        name: '请求路径参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '684327',
                                        code: 'query',
                                        name: 'URL 参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '567351',
                                        code: 'body',
                                        name: '请求体',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '873181',
                                            code: 'pageSize',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '5',
                                            },
                                            value: {
                                              type: ['customize'],
                                              code: '0',
                                            },
                                          },
                                          {
                                            attrId: '1052573',
                                            code: 'pageNum',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '396546',
                                            code: 'oaUserId',
                                            name: 'OA工号',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: 'CESHIKONGSHUJU',
                                            },
                                          },
                                          {
                                            attrId: '988078',
                                            code: 'userId',
                                            name: 'BOP工号',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: '-32585',
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  actionObjId: 'reloadDataSource',
                                  actionObjName: 'page',
                                  value: 'reloadDataSource',
                                  line_number: 11,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 168791597290310980,
                                  children: [],
                                  todoOptions: ['disabled', 'selectComp'],
                                  options: {
                                    compId: [
                                      'Button_302831',
                                      'Button_578183',
                                      'Button_789349',
                                      'Input_7683',
                                    ],
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Button',
                                    id: '0474849',
                                    disabled: 'true',
                                    compid: [
                                      'Button_302831',
                                      'Button_578183',
                                      'Button_789349',
                                      'Input_7683',
                                    ],
                                  },
                                  actionObjId: 'Button_302831',
                                  actionObjName: 'Button',
                                  value: 'setDisable',
                                  compLib: 'comm',
                                  line_number: 12,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              callback: [
                                {
                                  type: 'reloadDataSource',
                                  dataId: 168791563263869000,
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '292825',
                                    pageJsonId: '4868135',
                                    dataSourceId: 168785438790334820,
                                    dataSourceName:
                                      'qryBopUserIdByOaUserIdPage',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '973192',
                                        code: 'header',
                                        name: '请求头参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '8256182',
                                        code: 'path',
                                        name: '请求路径参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '684327',
                                        code: 'query',
                                        name: 'URL 参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '567351',
                                        code: 'body',
                                        name: '请求体',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '873181',
                                            code: 'pageSize',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '5',
                                            },
                                            value: {
                                              type: ['customize'],
                                              code: '0',
                                            },
                                          },
                                          {
                                            attrId: '1052573',
                                            code: 'pageNum',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '396546',
                                            code: 'oaUserId',
                                            name: 'OA工号',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: 'CESHIKONGSHUJU',
                                            },
                                          },
                                          {
                                            attrId: '988078',
                                            code: 'userId',
                                            name: 'BOP工号',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: '-32585',
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 11,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'setDisable',
                                  dataId: 168791597290310980,
                                  options: {
                                    compId: [
                                      'Button_302831',
                                      'Button_578183',
                                      'Button_789349',
                                      'Input_7683',
                                    ],
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Button',
                                    id: '0474849',
                                    disabled: 'true',
                                    compid: [
                                      'Button_302831',
                                      'Button_578183',
                                      'Button_789349',
                                      'Input_7683',
                                    ],
                                  },
                                  line_number: 12,
                                },
                              ],
                            },
                          ],
                          line_number: 8,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 168791555679186500,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '9464752',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshBOPTable',
                                customFuncParams: 'object',
                              },
                              line_number: 9,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setDisable',
                              dataId: 168791673814454850,
                              options: {
                                compId: [
                                  'Button_302831',
                                  'Button_578183',
                                  'Button_789349',
                                  'Input_7683',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Button',
                                id: '999965',
                                disabled: '',
                                compid: [
                                  'Button_302831',
                                  'Button_578183',
                                  'Button_789349',
                                  'Input_7683',
                                ],
                              },
                              line_number: 10,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource75.params =
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
                    eventDatasetDataSource75,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetCurrentFormValues11: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 168783168638906900,
                      options: {
                        compId: 'Form_31_1121_054627',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '780046',
                        params: '$row$',
                      },
                      line_number: 13,
                    },
                  ];
                  eventDatasetCurrentFormValues11.params =
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
                    eventDatasetCurrentFormValues11,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable76: any = [
                    {
                      type: 'setDisable',
                      dataId: 168785494069868400,
                      options: {
                        compId: [
                          'Form_493328_308943',
                          'Input_485159_451983',
                          'Input_4717291_1771768',
                          'Button_213218_267197',
                          'Button_221995_112914',
                          'Button_8258636_313289',
                          'Form_4812867',
                          'Button_556714',
                          'Button_087538',
                          'Button_8990255',
                          'Input_272419',
                          'Input_514473',
                          'Form_148709',
                          'Input_3889064',
                          'Input_33684855',
                          'Button_224226',
                          'Button_499055',
                          'Input_usrLastName_037923_275147',
                          'Input_usrFirstName_8337786_578625',
                          'Input_usrLogin_433893_90121',
                          'Select_118609',
                          'Input_usrUdfMobile_600937_4160645',
                          'Input_usrEmail_0709186_16864',
                          'Input_usrStatus_233963_5067494',
                          'Button_269697',
                          'Button_541288',
                          'Select_551558',
                        ],
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '580807',
                        disabled: '',
                        compid: [
                          'Form_493328_308943',
                          'Input_485159_451983',
                          'Input_4717291_1771768',
                          'Button_213218_267197',
                          'Button_221995_112914',
                          'Button_8258636_313289',
                          'Form_4812867',
                          'Button_556714',
                          'Button_087538',
                          'Button_8990255',
                          'Input_272419',
                          'Input_514473',
                          'Form_148709',
                          'Input_3889064',
                          'Input_33684855',
                          'Button_224226',
                          'Button_499055',
                          'Input_usrLastName_037923_275147',
                          'Input_usrFirstName_8337786_578625',
                          'Input_usrLogin_433893_90121',
                          'Select_118609',
                          'Input_usrUdfMobile_600937_4160645',
                          'Input_usrEmail_0709186_16864',
                          'Input_usrStatus_233963_5067494',
                          'Button_269697',
                          'Button_541288',
                          'Select_551558',
                        ],
                      },
                      line_number: 14,
                    },
                  ];
                  eventDatasetDisable76.params =
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
                    eventDatasetDisable76,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasysSetDisable3: any = [
                    {
                      type: 'sysSetDisable',
                      dataId: 168791882963201280,
                      options: {
                        compId: [],
                        compName: 'page',
                        id: '79457173',
                        pageJsonId: '4868135',
                        disabled: 'true',
                        compid: [],
                      },
                      line_number: 15,
                    },
                  ];
                  eventDatasysSetDisable3.params =
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
                    eventDatasysSetDisable3,
                    { rowId, row, index },
                    'sysSetDisable',
                    {
                      id: 'sysSetDisable',
                      name: 'sysSetDisable',
                      type: 'sysSetDisable',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Table_8475669')}
                {...injectData}
              />
            </Card>
          </View>
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
            <Tabs
              name={'标签页'}
              defaultActiveKey={'1'}
              type={'line'}
              animated={false}
              tabActiveKey={'1'}
              tabBarGutter={'4px'}
              tabPosition={'top'}
              size={'default'}
              $$componentItem={{
                id: 'Tabs_852728',
                uid: 'Tabs_852728',
                type: 'Tabs',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                width: '100%',
                margin: '0 0 16px 0',
                padding: '20px 20px 20px 20px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Tabs_852728')}
              {...injectData}
            >
              <TabPane
                name={'标签子面板'}
                tab={'详细信息'}
                key={'1'}
                $$componentItem={{
                  id: 'TabPane_892615',
                  uid: 'TabPane_892615',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, 'TabPane_892615')}
                {...injectData}
              >
                <Form
                  name={'表单'}
                  header={'标题'}
                  colSpan={12}
                  colSpace={16}
                  rowSpace={16}
                  labelCol={8}
                  wrapperCol={16}
                  layout={'horizontal'}
                  genRuleType={'object'}
                  formType={'normal'}
                  relationDataSource={data?.dcOaUser}
                  formItemIndex={9}
                  busiObjectId={'885089089978368001'}
                  formColumns={[
                    {
                      id: 'Input_usrKey_302081_476311161',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: 'OIM用户主键',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: false,
                        placeholder: '请输入',
                        fieldName: 'usrKey',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 0,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_actKey_2472835_8419351',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: 'ERP组织主键',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: false,
                        placeholder: '请输入',
                        fieldName: 'actKey',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 1,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_usrLastName_037923_275147',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '用户名（名）',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: true,
                        placeholder: '请输入',
                        fieldName: 'usrLastName',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 2,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_usrFirstName_8337786_578625',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '用户名（姓）',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: true,
                        placeholder: '请输入',
                        fieldName: 'usrFirstName',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 3,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_usrLogin_433893_90121',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '登录名',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: true,
                        placeholder: '请输入',
                        fieldName: 'usrLogin',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 4,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Select_118609',
                      label: '下拉框',
                      compName: 'Select',
                      type: 'Select',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '性别',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipPlacement: 'top',
                        required: false,
                        filter: 'none',
                        classification: 'default',
                        placeholder: '请选择',
                        formItemIndex: 5,
                        fieldName: 'usrUdfSex',
                        staticData: {
                          data: [
                            { id: '716959', label: '女', value: 'F' },
                            { id: '553544', label: '男', value: 'M' },
                            { id: '624087', label: '未知', value: 'N' },
                          ],
                          type: 'custom',
                        },
                        options: [
                          { id: '716959', label: '女', value: 'F' },
                          { id: '553544', label: '男', value: 'M' },
                          { id: '624087', label: '未知', value: 'N' },
                        ],
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Select',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      isLabelDropBoxChild: false,
                      components: [],
                    },
                    {
                      id: 'Select_551558',
                      label: '下拉单选',
                      compName: 'Select',
                      type: 'Select',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '工号类型',
                        basicStatus: 3,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipPlacement: 'top',
                        required: true,
                        filter: 'none',
                        classification: 'default',
                        placeholder: '请选择',
                        formItemIndex: 6,
                        fieldName: 'usrKind',
                        staticData: {
                          data: [
                            { id: '33400409', label: 'OA', value: 'OA' },
                            { id: '683181', label: 'BOP', value: 'BOP' },
                            { id: '876535', label: 'IOP', value: 'IOP' },
                          ],
                          type: 'custom',
                        },
                        options: [
                          { id: '33400409', label: 'OA', value: 'OA' },
                          { id: '683181', label: 'BOP', value: 'BOP' },
                          { id: '876535', label: 'IOP', value: 'IOP' },
                        ],
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Select',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      isLabelDropBoxChild: false,
                      components: [],
                    },
                    {
                      id: 'Input_usrUdfMobile_600937_4160645',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '手机号码',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: true,
                        placeholder: '请输入',
                        fieldName: 'usrUdfMobile',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 7,
                        allowClear: false,
                        regexp: [
                          {
                            id: '053881',
                            title: '按钮1',
                            iconPos: 'left',
                            regexpType: 1,
                            message: '请输入正确的手机号码',
                            pattern: '/^1[3-9]\\d{9}$/',
                          },
                        ],
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_usrEmail_0709186_16864',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '电子邮件',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: false,
                        placeholder: '请输入',
                        fieldName: 'usrEmail',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 8,
                        regexp: [
                          {
                            id: '485386',
                            title: '按钮1',
                            iconPos: 'left',
                            regexpType: 1,
                            message: '请输入正确的邮箱格式',
                            pattern:
                              '/^([a-zA-Z\\d])([a-zA-Z\\d_]|-)+@[a-zA-Z\\d]+\\.[a-zA-Z]{2,4}$/',
                          },
                        ],
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_usrType_6807063_655855',
                      label: '下拉框',
                      compName: 'Select',
                      type: 'Select',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '类型',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipPlacement: 'top',
                        required: false,
                        filter: 'none',
                        classification: 'default',
                        placeholder: '请选择',
                        fieldName: 'usrType',
                        formItemIndex: 9,
                        staticData: {
                          data: [
                            {
                              id: '7224443',
                              label: '终端用户',
                              value: 'End-User',
                            },
                            {
                              id: '477924',
                              label: '管理员',
                              value: 'End-User Administrator',
                            },
                          ],
                          type: 'custom',
                        },
                        options: [
                          {
                            id: '7224443',
                            label: '终端用户',
                            value: 'End-User',
                          },
                          {
                            id: '477924',
                            label: '管理员',
                            value: 'End-User Administrator',
                          },
                        ],
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Select',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_usrEmpType_5389952_215458',
                      label: '下拉框',
                      compName: 'Select',
                      type: 'Select',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '雇佣类型',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipPlacement: 'top',
                        required: false,
                        filter: 'none',
                        classification: 'default',
                        placeholder: '请选择',
                        fieldName: 'usrEmpType',
                        formItemIndex: 10,
                        staticData: {
                          data: [
                            { id: '930306', label: '全职', value: 'Full-Time' },
                            { id: '3551174', label: '临时', value: 'Temp' },
                            { id: '937085', label: '实习', value: 'Intern' },
                            {
                              id: '511966',
                              label: '合作伙伴',
                              value: 'Partner',
                            },
                          ],
                          type: 'custom',
                        },
                        options: [
                          { id: '930306', label: '全职', value: 'Full-Time' },
                          { id: '3551174', label: '临时', value: 'Temp' },
                          { id: '937085', label: '实习', value: 'Intern' },
                          { id: '511966', label: '合作伙伴', value: 'Partner' },
                        ],
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Select',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_usrStatus_233963_5067494',
                      label: '下拉框',
                      compName: 'Select',
                      type: 'Select',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '状态',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipPlacement: 'top',
                        required: true,
                        filter: 'none',
                        classification: 'default',
                        placeholder: '请选择',
                        fieldName: 'usrStatus',
                        formItemIndex: 11,
                        staticData: {
                          data: [
                            { id: '481681', label: '在用', value: 'Active' },
                            { id: '349501', label: '停用', value: 'Inactive' },
                          ],
                          type: 'custom',
                        },
                        options: [
                          { id: '481681', label: '在用', value: 'Active' },
                          { id: '349501', label: '停用', value: 'Inactive' },
                        ],
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Select',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      isLabelDropBoxChild: false,
                      functors: {},
                      hasValue: true,
                      components: [],
                    },
                    {
                      id: 'Input_usrLocked_365842_5050138',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '是否锁定',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: false,
                        placeholder: '请输入',
                        fieldName: 'usrLocked',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 13,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_actName_007217_58106',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: 'ERP组织名称',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: false,
                        placeholder: '请输入',
                        fieldName: 'actName',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 14,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'Input_orgName_9065583_869783',
                      label: '输入框',
                      compName: 'Input',
                      type: 'Input',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: 'OA组织名称',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipContent: '',
                        tipPlacement: 'top',
                        prefixIconPosition: 'before',
                        postfix: '',
                        postfixIconPosition: 'before',
                        required: false,
                        placeholder: '请输入',
                        fieldName: 'orgName',
                        hidden: false,
                        showMore: false,
                        defaultValue: null,
                        attr: {},
                        formItemIndex: 15,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'Input',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'TimePicker_usrUpdate_5514014_40819',
                      label: '时间选择',
                      compName: 'TimePicker',
                      type: 'TimePicker',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '更新时间',
                        customTime: true,
                        format: 'YYYY-MM-DD HH:mm:ss',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipPlacement: 'top',
                        required: false,
                        limitRange: '',
                        startTime: '',
                        endTime: '',
                        timeMode: 'time',
                        pickerType: 'TimePicker',
                        placeholder: '请选择时间',
                        fieldName: 'usrUpdate',
                        hidden: false,
                        showMore: false,
                        attr: {},
                        formItemIndex: 16,
                        isCurrent: false,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'TimePicker',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                    {
                      id: 'TimePicker_usrCreated_017339_4249537',
                      label: '时间选择',
                      compName: 'TimePicker',
                      type: 'TimePicker',
                      compType: 2,
                      compLib: 'comm',
                      props: {
                        name: '创建完成时间',
                        customTime: true,
                        format: 'YYYY-MM-DD HH:mm:ss',
                        basicStatus: 1,
                        size: 'default',
                        selfSpan: '',
                        labelCol: 8,
                        wrapperCol: 16,
                        titleTip: 'notext',
                        tipLocation: 'after',
                        tipPlacement: 'top',
                        required: false,
                        limitRange: '',
                        startTime: '',
                        endTime: '',
                        timeMode: 'time',
                        pickerType: 'TimePicker',
                        placeholder: '请选择时间',
                        fieldName: 'usrCreated',
                        hidden: false,
                        showMore: false,
                        attr: {},
                        formItemIndex: 17,
                        isCurrent: false,
                      },
                      style: {},
                      isContainer: false,
                      isBusiObjContainer: false,
                      cmdgroup: ['basic'],
                      platform: 'pc',
                      icon: 'TimePicker',
                      description: '',
                      image: '',
                      groupsName: '数据录入',
                      setEvents: [],
                      busiObjectId: '885089089978368001',
                      isLabelDropBoxChild: false,
                      functors: {},
                      components: [],
                    },
                  ]}
                  $$componentItem={{
                    id: 'Form_31_1121_054627',
                    uid: 'Form_31_1121_054627',
                    type: 'Form',
                    ...componentItem,
                  }}
                  style={{ padding: '20px 20px 0px 20px' }}
                  onValuesChange={(
                    changedFieldName: any,
                    changedValue: any,
                  ) => {
                    const eventDatasetDataSource76: any = [
                      {
                        type: 'setDataSource',
                        dataId: 168791886823096220,
                        options: {
                          compId: 'page',
                          compName: 'page',
                          id: '294894',
                          pageJsonId: '4868135',
                          dataSourceId: 167886436011376500,
                          dataSourceName: 'dcOaUser',
                          dataSourceRelType: 'object',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '400734',
                              code: 'usrKey',
                              name: 'OIM生成的用户主键',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrKey',
                              },
                            },
                            {
                              attrId: '349787',
                              code: 'actKey',
                              name: 'ERP组织主键',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'actKey',
                              },
                            },
                            {
                              attrId: '3587727',
                              code: 'usrLastName',
                              name: '用户名（名）',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrLastName',
                              },
                            },
                            {
                              attrId: '122254',
                              code: 'usrFirstName',
                              name: '用户名（姓）',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrFirstName',
                              },
                            },
                            {
                              attrId: '323671',
                              code: 'usrType',
                              name: '类型',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrType',
                              },
                            },
                            {
                              attrId: '285812',
                              code: 'usrPassword',
                              name: '密码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrPassword',
                              },
                            },
                            {
                              attrId: '006825',
                              code: 'usrStatus',
                              name: '状态',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrStatus',
                              },
                            },
                            {
                              attrId: '444719',
                              code: 'usrEmpType',
                              name: '雇佣类型',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrEmpType',
                              },
                            },
                            {
                              attrId: '721213',
                              code: 'usrLogin',
                              name: '登录名',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrLogin',
                              },
                            },
                            {
                              attrId: '646311',
                              code: 'usrEmail',
                              name: '电子邮件',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrEmail',
                              },
                            },
                            {
                              attrId: '6314257',
                              code: 'usrLocked',
                              name: '是否锁定',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrLocked',
                              },
                            },
                            {
                              attrId: '233168',
                              code: 'usrChangePwdAtNextLogon',
                              name: '下次登录是否修改密码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrChangePwdAtNextLogon',
                              },
                            },
                            {
                              attrId: '73102',
                              code: 'usrUdfDepartment',
                              name: '部门（无效字段）',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfDepartment',
                              },
                            },
                            {
                              attrId: '365487',
                              code: 'usrUdfEmployeeId',
                              name: '内部雇佣编号',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfEmployeeId',
                              },
                            },
                            {
                              attrId: '67532227',
                              code: 'usrUdfShortName',
                              name: '缩写名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfShortName',
                              },
                            },
                            {
                              attrId: '918133',
                              code: 'usrCreated',
                              name: '创建完成时间',
                              type: 'datetime',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrCreated',
                              },
                            },
                            {
                              attrId: '528961',
                              code: 'usrProvisionedDate',
                              name: '已预配日期',
                              type: 'datetime',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrProvisionedDate',
                              },
                            },
                            {
                              attrId: '8107328',
                              code: 'usrCreate',
                              name: '创建开始时间',
                              type: 'datetime',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrCreate',
                              },
                            },
                            {
                              attrId: '9639053',
                              code: 'usrUpdate',
                              name: '更新时间',
                              type: 'datetime',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUpdate',
                              },
                            },
                            {
                              attrId: '0238529',
                              code: 'usrLoginAttemptsCtr',
                              name: '登录尝试次数',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrLoginAttemptsCtr',
                              },
                            },
                            {
                              attrId: '616978',
                              code: 'usrPwdResetAttemptsCtr',
                              name: '密码尝试次数',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrPwdResetAttemptsCtr',
                              },
                            },
                            {
                              attrId: '82364496',
                              code: 'actName',
                              name: 'ERP组织名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'actName',
                              },
                            },
                            {
                              attrId: '023528',
                              code: 'usrUdfMobile',
                              name: '手机号码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfMobile',
                              },
                            },
                            {
                              attrId: '227942',
                              code: 'actUdfNum',
                              name: 'ERP组织20位编码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'actUdfNum',
                              },
                            },
                            {
                              attrId: '896751',
                              code: 'usrUdfOaOrg',
                              name: 'OA组织20位编码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfOaOrg',
                              },
                            },
                            {
                              attrId: '9111531',
                              code: 'orgName',
                              name: 'OA组织名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'orgName',
                              },
                            },
                            {
                              attrId: '392192',
                              code: 'subUsrUdfOaOrgs',
                              name: 'OA组织编码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'subUsrUdfOaOrgs',
                              },
                            },
                            {
                              attrId: '644962',
                              code: 'subOrgNames',
                              name: '下级OA组织名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'subOrgNames',
                              },
                            },
                            {
                              attrId: '2654294',
                              code: 'usrUdfIdNum',
                              name: '身份证号码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfIdNum',
                              },
                            },
                            {
                              attrId: '4594416',
                              code: 'usrUdfSex',
                              name: '性别',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfSex',
                              },
                            },
                            {
                              attrId: '567245',
                              code: 'usrUdfJobLevel',
                              name: 'OA组织1级别',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfJobLevel',
                              },
                            },
                            {
                              attrId: '274119',
                              code: 'subUsrUdfJobLevels',
                              name: 'OA组织级别',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'subUsrUdfJobLevels',
                              },
                            },
                            {
                              attrId: '534053',
                              code: 'usrUdfOrgOrder',
                              name: 'OA组织1排序',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfOrgOrder',
                              },
                            },
                            {
                              attrId: '965188',
                              code: 'subUsrUdfOrgOrders',
                              name: 'OA组织排序',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'subUsrUdfOrgOrders',
                              },
                            },
                            {
                              attrId: '266713',
                              code: 'usrEndDate',
                              name: '结束日期',
                              type: 'datetime',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrEndDate',
                              },
                            },
                            {
                              attrId: '92847',
                              code: 'usrUdfOaNum',
                              name: 'OA工单号',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfOaNum',
                              },
                            },
                            {
                              attrId: '96948',
                              code: 'usrUdfSysMask',
                              name: '系统掩码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfSysMask',
                              },
                            },
                            {
                              attrId: '5829864',
                              code: 'usrUdfBelongComp',
                              name: '外部人员所属公司',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfBelongComp',
                              },
                            },
                            {
                              attrId: '1076846',
                              code: 'usrUdfMgrErpOrg',
                              name: '外部人员管理组织',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'usrUdfMgrErpOrg',
                              },
                            },
                            {
                              attrId: '521478',
                              code: 'cardInfo',
                              name: '一卡通信息',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: [
                                  'form',
                                  'Form_31_1121_054627',
                                  'getFieldsValue',
                                ],
                                code: 'cardInfo',
                              },
                            },
                          ],
                          onlySetPatch: true,
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatasetDataSource76.params =
                      [
                        {
                          title: '表单当前改变字段编码',
                          name: 'changedFieldName',
                          value: '$changedFieldName$',
                        },
                        {
                          title: '表单当前改变字段值',
                          name: 'changedValue',
                          value: '$changedValue$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDataSource76,
                      { changedFieldName, changedValue },
                      'setDataSource',
                      {
                        id: 'setDataSource',
                        name: 'setDataSource',
                        type: 'setDataSource',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Form_31_1121_054627')
                  }
                  {...injectData}
                >
                  <Input
                    name={'登录账号'}
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
                    fieldName={'usrLogin'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={0}
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
                      id: 'Input_usrLogin_433893_90121',
                      uid: 'Input_usrLogin_433893_90121',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_usrLogin_433893_90121')
                    }
                    {...injectData}
                  />
                  <Input
                    name={'姓名'}
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
                    fieldName={'usrLastName'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={1}
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
                      id: 'Input_usrLastName_037923_275147',
                      uid: 'Input_usrLastName_037923_275147',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_usrLastName_037923_275147')
                    }
                    {...injectData}
                  />
                  <Select
                    name={'账号类型'}
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
                    formItemIndex={2}
                    fieldName={'usrKind'}
                    dataSource={[
                      { id: '33400409', label: 'OA/4A', value: 'OA/4A' },
                      { id: '683181', label: 'BOP', value: 'BOP' },
                      { id: '876535', label: 'IOP', value: 'IOP' },
                    ]}
                    $$componentItem={{
                      id: 'Select_551558',
                      uid: 'Select_551558',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Select_551558')}
                    {...injectData}
                  />
                  <Input
                    name={'手机号码'}
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
                    fieldName={'usrUdfMobile'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={3}
                    allowClear={false}
                    regexp={[
                      {
                        id: '053881',
                        title: '按钮1',
                        iconPos: 'left',
                        regexpType: 1,
                        message: '请输入正确的手机号码',
                        pattern: '/^1[3-9]\\d{9}$/',
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
                      id: 'Input_usrUdfMobile_600937_4160645',
                      uid: 'Input_usrUdfMobile_600937_4160645',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(
                        r,
                        'Input_usrUdfMobile_600937_4160645',
                      )
                    }
                    {...injectData}
                  />
                  <Select
                    name={'性别'}
                    size={'default'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={false}
                    filter={'none'}
                    classification={'default'}
                    placeholder={'请选择'}
                    formItemIndex={4}
                    fieldName={'usrUdfSex'}
                    dataSource={[
                      { id: '716959', label: '女', value: 'F' },
                      { id: '553544', label: '男', value: 'M' },
                      { id: '624087', label: '未知', value: 'N' },
                    ]}
                    $$componentItem={{
                      id: 'Select_118609',
                      uid: 'Select_118609',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Select_118609')}
                    {...injectData}
                  />
                  <Select
                    name={'状态'}
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
                    fieldName={'usrStatus'}
                    formItemIndex={5}
                    dataSource={[
                      { id: '481681', label: '在用', value: 'Active' },
                      { id: '349501', label: '停用', value: 'Inactive' },
                    ]}
                    $$componentItem={{
                      id: 'Input_usrStatus_233963_5067494',
                      uid: 'Input_usrStatus_233963_5067494',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_usrStatus_233963_5067494')
                    }
                    {...injectData}
                  />
                  <TimePicker
                    name={'创建时间'}
                    format={'YYYY-MM-DD HH:mm:ss'}
                    size={'default'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={false}
                    limitRange={''}
                    startTime={''}
                    endTime={''}
                    timeMode={'time'}
                    pickerType={'TimePicker'}
                    placeholder={'请选择时间'}
                    fieldName={'usrCreated'}
                    hidden={false}
                    showMore={false}
                    attr={{}}
                    formItemIndex={6}
                    $$componentItem={{
                      id: 'TimePicker_usrCreated_017339_4249537',
                      uid: 'TimePicker_usrCreated_017339_4249537',
                      type: 'TimePicker',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    defaultValue={undefined}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(
                        r,
                        'TimePicker_usrCreated_017339_4249537',
                      )
                    }
                    {...injectData}
                  />
                  <TimePicker
                    name={'更新时间'}
                    format={'YYYY-MM-DD HH:mm:ss'}
                    size={'default'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={false}
                    limitRange={''}
                    startTime={''}
                    endTime={''}
                    timeMode={'time'}
                    pickerType={'TimePicker'}
                    placeholder={'请选择时间'}
                    fieldName={'usrUpdate'}
                    hidden={false}
                    showMore={false}
                    attr={{}}
                    formItemIndex={7}
                    $$componentItem={{
                      id: 'TimePicker_usrUpdate_5514014_40819',
                      uid: 'TimePicker_usrUpdate_5514014_40819',
                      type: 'TimePicker',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    defaultValue={undefined}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(
                        r,
                        'TimePicker_usrUpdate_5514014_40819',
                      )
                    }
                    {...injectData}
                  />
                  <Input
                    name={'电子邮件'}
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
                    fieldName={'usrEmail'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={8}
                    regexp={[
                      {
                        id: '485386',
                        title: '按钮1',
                        iconPos: 'left',
                        regexpType: 1,
                        message: '请输入正确的邮箱格式',
                        pattern:
                          '/^([a-zA-Z\\d])([a-zA-Z\\d_]|-)+@[a-zA-Z\\d]+\\.[a-zA-Z]{2,4}$/',
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
                      id: 'Input_usrEmail_0709186_16864',
                      uid: 'Input_usrEmail_0709186_16864',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_usrEmail_0709186_16864')
                    }
                    {...injectData}
                  />
                  <Select
                    name={'类型'}
                    size={'default'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={false}
                    filter={'none'}
                    classification={'default'}
                    placeholder={'请选择'}
                    fieldName={'usrType'}
                    formItemIndex={9}
                    dataSource={[
                      { id: '7224443', label: '终端用户', value: 'End-User' },
                      {
                        id: '477924',
                        label: '管理员',
                        value: 'End-User Administrator',
                      },
                    ]}
                    $$componentItem={{
                      id: 'Input_usrType_6807063_655855',
                      uid: 'Input_usrType_6807063_655855',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_usrType_6807063_655855')
                    }
                    {...injectData}
                  />
                  <Select
                    name={'雇佣类型'}
                    size={'default'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={false}
                    filter={'none'}
                    classification={'default'}
                    placeholder={'请选择'}
                    fieldName={'usrEmpType'}
                    formItemIndex={10}
                    dataSource={[
                      { id: '930306', label: '全职', value: 'Full-Time' },
                      { id: '3551174', label: '临时', value: 'Temp' },
                      { id: '937085', label: '实习', value: 'Intern' },
                      { id: '511966', label: '合作伙伴', value: 'Partner' },
                    ]}
                    $$componentItem={{
                      id: 'Input_usrEmpType_5389952_215458',
                      uid: 'Input_usrEmpType_5389952_215458',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_usrEmpType_5389952_215458')
                    }
                    {...injectData}
                  />
                  <Input
                    name={'是否锁定'}
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
                    fieldName={'usrLocked'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={11}
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
                      id: 'Input_usrLocked_365842_5050138',
                      uid: 'Input_usrLocked_365842_5050138',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_usrLocked_365842_5050138')
                    }
                    {...injectData}
                  />
                  <Input
                    name={'OA组织名称'}
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
                    fieldName={'orgName'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={12}
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
                      id: 'Input_orgName_9065583_869783',
                      uid: 'Input_orgName_9065583_869783',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_orgName_9065583_869783')
                    }
                    {...injectData}
                  />
                  <Input
                    name={'ERP组织名称'}
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
                    fieldName={'actName'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={13}
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
                      id: 'Input_actName_007217_58106',
                      uid: 'Input_actName_007217_58106',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_actName_007217_58106')
                    }
                    {...injectData}
                  />
                  <Input
                    name={'ERP组织主键'}
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
                    fieldName={'actKey'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={14}
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
                      id: 'Input_actKey_2472835_8419351',
                      uid: 'Input_actKey_2472835_8419351',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_actKey_2472835_8419351')
                    }
                    {...injectData}
                  />
                  <Input
                    name={'用户名（姓）'}
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
                    fieldName={'usrFirstName'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={15}
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
                      id: 'Input_usrFirstName_8337786_578625',
                      uid: 'Input_usrFirstName_8337786_578625',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(
                        r,
                        'Input_usrFirstName_8337786_578625',
                      )
                    }
                    {...injectData}
                  />
                  <Input
                    name={'用户ID'}
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
                    fieldName={'usrKey'}
                    hidden={false}
                    showMore={false}
                    defaultValue={null}
                    attr={{}}
                    formItemIndex={16}
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
                      id: 'Input_usrKey_302081_476311161',
                      uid: 'Input_usrKey_302081_476311161',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Input_usrKey_302081_476311161')
                    }
                    {...injectData}
                  />
                </Form>
                <View
                  className="View_View_113965"
                  name={'布局容器'}
                  formItemIndex={19}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_113965',
                    uid: 'View_113965',
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
                    textAlign: 'center',
                    margin: '20px 0px 0px 0px',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_113965')}
                  {...injectData}
                >
                  <Button
                    name={'确认'}
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
                      id: 'Button_269697',
                      uid: 'Button_269697',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatavalidateCurrentForm69: any = [
                        {
                          type: 'validateCurrentForm',
                          dataId: 168783106205629100,
                          options: {
                            compId: 'Form_31_1121_054627',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Form',
                            id: '725058',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 168783353836219740,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '8000546',
                                pageJsonId: '4868135',
                                code: 'function main(data,state,success,fail){var info=Form_31_1121_054627;success([info])};',
                              },
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'console',
                                  dataId: 168783356605247780,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '807917',
                                    pageJsonId: '4868135',
                                    value: ['当前数据：', '$data_8000546$'],
                                  },
                                  line_number: 3,
                                },
                                {
                                  type: 'apiRequest',
                                  dataId: 168783377228271650,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '9732233',
                                    pageJsonId: '4868135',
                                    sync: false,
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode:
                                      'saveOrUpdateDcOaUserBatch',
                                    _apiCode: 'saveOrUpdateDcOaUserBatch',
                                    _source: 'rhin',
                                    _sourceName: '批量新增/修改OA工号信息-hyj',
                                    _serviceId: '990807998886240256',
                                    _serviceTitle:
                                      '批量新增/修改OA工号信息-hyj: saveOrUpdateDcOaUserBatch',
                                    valueType: 'object',
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
                                            parentType: 'object',
                                            parentKey: '0',
                                            key: '0-0',
                                            id: 'root.header',
                                            dataKey: '9732233_root.header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            _id: 'root.path',
                                            compType: 'Input',
                                            parents: ['root'],
                                            parentType: 'object',
                                            parentKey: '0',
                                            key: '0-1',
                                            id: 'root.path',
                                            dataKey: '9732233_root.path',
                                          },
                                          {
                                            code: 'query',
                                            name: 'URL 参数',
                                            attrType: 'object',
                                            _id: 'root.query',
                                            compType: 'Input',
                                            parents: ['root'],
                                            parentType: 'object',
                                            parentKey: '0',
                                            key: '0-2',
                                            id: 'root.query',
                                            dataKey: '9732233_root.query',
                                          },
                                          {
                                            code: 'body',
                                            name: '请求体',
                                            attrType: 'object',
                                            children: [
                                              {
                                                code: 'userDTOList',
                                                attrType: 'objectArray',
                                                children: [
                                                  {
                                                    code: 'usrKey',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.userDTOList.usrKey',
                                                    compType: 'Input',
                                                    name: 'usrKey',
                                                    parents: [
                                                      'root',
                                                      'body',
                                                      'userDTOList',
                                                    ],
                                                    parentType: 'objectArray',
                                                    parentKey: '0-3-0',
                                                    key: '0-3-0-0',
                                                    parentCode: 'userDTOList',
                                                    id: 'root.body.userDTOList.usrKey',
                                                    dataKey:
                                                      '9732233_root.body.userDTOList.usrKey',
                                                  },
                                                  {
                                                    code: 'usrLastName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.userDTOList.usrLastName',
                                                    compType: 'Input',
                                                    name: 'usrLastName',
                                                    parents: [
                                                      'root',
                                                      'body',
                                                      'userDTOList',
                                                    ],
                                                    parentType: 'objectArray',
                                                    parentKey: '0-3-0',
                                                    key: '0-3-0-1',
                                                    parentCode: 'userDTOList',
                                                    id: 'root.body.userDTOList.usrLastName',
                                                    dataKey:
                                                      '9732233_root.body.userDTOList.usrLastName',
                                                  },
                                                  {
                                                    code: 'usrFirstName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.userDTOList.usrFirstName',
                                                    compType: 'Input',
                                                    name: 'usrFirstName',
                                                    parents: [
                                                      'root',
                                                      'body',
                                                      'userDTOList',
                                                    ],
                                                    parentType: 'objectArray',
                                                    parentKey: '0-3-0',
                                                    key: '0-3-0-2',
                                                    parentCode: 'userDTOList',
                                                    id: 'root.body.userDTOList.usrFirstName',
                                                    dataKey:
                                                      '9732233_root.body.userDTOList.usrFirstName',
                                                  },
                                                  {
                                                    code: 'usrLogin',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.userDTOList.usrLogin',
                                                    compType: 'Input',
                                                    name: 'usrLogin',
                                                    parents: [
                                                      'root',
                                                      'body',
                                                      'userDTOList',
                                                    ],
                                                    parentType: 'objectArray',
                                                    parentKey: '0-3-0',
                                                    key: '0-3-0-3',
                                                    parentCode: 'userDTOList',
                                                    id: 'root.body.userDTOList.usrLogin',
                                                    dataKey:
                                                      '9732233_root.body.userDTOList.usrLogin',
                                                  },
                                                  {
                                                    code: 'usrUdfSex',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.userDTOList.usrUdfSex',
                                                    compType: 'Input',
                                                    name: 'usrUdfSex',
                                                    parents: [
                                                      'root',
                                                      'body',
                                                      'userDTOList',
                                                    ],
                                                    parentType: 'objectArray',
                                                    parentKey: '0-3-0',
                                                    key: '0-3-0-4',
                                                    parentCode: 'userDTOList',
                                                    id: 'root.body.userDTOList.usrUdfSex',
                                                    dataKey:
                                                      '9732233_root.body.userDTOList.usrUdfSex',
                                                  },
                                                  {
                                                    code: 'usrUdfMobile',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.userDTOList.usrUdfMobile',
                                                    compType: 'Input',
                                                    name: 'usrUdfMobile',
                                                    parents: [
                                                      'root',
                                                      'body',
                                                      'userDTOList',
                                                    ],
                                                    parentType: 'objectArray',
                                                    parentKey: '0-3-0',
                                                    key: '0-3-0-5',
                                                    parentCode: 'userDTOList',
                                                    id: 'root.body.userDTOList.usrUdfMobile',
                                                    dataKey:
                                                      '9732233_root.body.userDTOList.usrUdfMobile',
                                                  },
                                                  {
                                                    code: 'usrEmail',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.userDTOList.usrEmail',
                                                    compType: 'Input',
                                                    name: 'usrEmail',
                                                    parents: [
                                                      'root',
                                                      'body',
                                                      'userDTOList',
                                                    ],
                                                    parentType: 'objectArray',
                                                    parentKey: '0-3-0',
                                                    key: '0-3-0-6',
                                                    parentCode: 'userDTOList',
                                                    id: 'root.body.userDTOList.usrEmail',
                                                    dataKey:
                                                      '9732233_root.body.userDTOList.usrEmail',
                                                  },
                                                  {
                                                    code: 'usrStatus',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.userDTOList.usrStatus',
                                                    compType: 'Input',
                                                    name: 'usrStatus',
                                                    parents: [
                                                      'root',
                                                      'body',
                                                      'userDTOList',
                                                    ],
                                                    parentType: 'objectArray',
                                                    parentKey: '0-3-0',
                                                    key: '0-3-0-7',
                                                    parentCode: 'userDTOList',
                                                    id: 'root.body.userDTOList.usrStatus',
                                                    dataKey:
                                                      '9732233_root.body.userDTOList.usrStatus',
                                                  },
                                                ],
                                                _id: 'root.body.userDTOList',
                                                compType: 'Input',
                                                name: 'userDTOList',
                                                parents: ['root', 'body'],
                                                parentType: 'object',
                                                parentKey: '0-3',
                                                key: '0-3-0',
                                                id: 'root.body.userDTOList',
                                                dataKey:
                                                  '9732233_root.body.userDTOList',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$data_8000546$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                            ],
                                            _id: 'root.body',
                                            compType: 'Input',
                                            parents: ['root'],
                                            parentType: 'object',
                                            parentKey: '0',
                                            key: '0-3',
                                            id: 'root.body',
                                            dataKey: '9732233_root.body',
                                          },
                                        ],
                                        _id: 'root',
                                        compType: 'Input',
                                        isRoot: true,
                                        parents: [],
                                        key: '0',
                                        id: 'root',
                                        dataKey: '9732233_root',
                                      },
                                    ],
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '5780814',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context:
                                              '$reply_9732233.resultCode$',
                                            operate: '==',
                                            manualValue: '0',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 168783498802699000,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 168793507440679580,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 168793507718103100,
                                              children: [],
                                              todoOptions: [
                                                'msgType',
                                                'value',
                                                'duration',
                                              ],
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '43224',
                                                pageJsonId: '4868135',
                                                type: 'error',
                                                value:
                                                  '$reply_9732233.resultMsg$',
                                              },
                                              actionObjId: 'showMessage',
                                              actionObjName: 'system',
                                              value: 'showMessage',
                                              tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                              line_number: 11,
                                            },
                                          ],
                                          condition: [],
                                          value: 'elseIf',
                                          callback: [
                                            {
                                              type: 'showMessage',
                                              dataId: 168793507718103100,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '43224',
                                                pageJsonId: '4868135',
                                                type: 'error',
                                                value:
                                                  '$reply_9732233.resultMsg$',
                                              },
                                              line_number: 11,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '47475',
                                              options: {
                                                context: '$data_8000546$',
                                                operate: 'notEmpty',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                            {
                                              options: {
                                                context:
                                                  '$data_8000546[0].usrKey$',
                                                operate: 'notEmpty',
                                              },
                                              condId: '496681',
                                              connector: '&&',
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 168783502739077980,
                                          elseIfs: [
                                            {
                                              dataName: 'elseIf',
                                              dataId: 168783502739018940,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 168783502739158600,
                                                  children: [],
                                                  todoOptions: [
                                                    'msgType',
                                                    'value',
                                                    'duration',
                                                  ],
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '5478747',
                                                    pageJsonId: '4868135',
                                                    type: 'success',
                                                    value: '新增数据成功！',
                                                  },
                                                  actionObjId: 'showMessage',
                                                  actionObjName: 'system',
                                                  value: 'showMessage',
                                                  tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                                  line_number: 8,
                                                },
                                              ],
                                              condition: [],
                                              value: 'elseIf',
                                              callback: [
                                                {
                                                  type: 'showMessage',
                                                  dataId: 168783502739158600,
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '5478747',
                                                    pageJsonId: '4868135',
                                                    type: 'success',
                                                    value: '新增数据成功！',
                                                  },
                                                  line_number: 8,
                                                },
                                              ],
                                            },
                                          ],
                                          line_number: 6,
                                          callback1: [
                                            {
                                              type: 'showMessage',
                                              dataId: 168783502739087800,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '2280646',
                                                pageJsonId: '4868135',
                                                type: 'success',
                                                value: '修改数据成功！',
                                              },
                                              line_number: 7,
                                            },
                                          ],
                                        },
                                        {
                                          type: 'callSelfFunc',
                                          dataId: 168783503403358720,
                                          options: {
                                            compId: 'callSelfFunc',
                                            compName: 'system',
                                            id: '608615',
                                            pageJsonId: '4868135',
                                            customFuncName: 'refreshUserTable',
                                          },
                                          line_number: 9,
                                          callback1: [],
                                          callback2: [],
                                        },
                                        {
                                          type: 'setDisable',
                                          dataId: 168783656752027400,
                                          options: {
                                            compId: [
                                              'Form_31_1121_054627',
                                              'Button_269697',
                                              'Button_541288',
                                            ],
                                            compLib: 'comm',
                                            pageJsonId: '4868135',
                                            compName: 'Form',
                                            id: '024692',
                                            disabled: 'true',
                                            compid: [
                                              'Form_31_1121_054627',
                                              'Button_269697',
                                              'Button_541288',
                                            ],
                                          },
                                          line_number: 10,
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
                          callback2: [],
                        },
                      ];
                      eventDatavalidateCurrentForm69.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatavalidateCurrentForm69,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_269697')}
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
                      id: 'Button_541288',
                      uid: 'Button_541288',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                    onClick={(e: any) => {
                      const forms27 = getFormByCompId(
                        'Form_31_1121_054627',
                        refs,
                      );
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms27) ? forms27 : [forms27]).forEach(
                        (form) => form?.resetFields(),
                      );
                      const eventDatasetDisable77: any = [
                        {
                          type: 'setDisable',
                          dataId: 168783232147442430,
                          options: {
                            compId: [
                              'Form_31_1121_054627',
                              'Button_269697',
                              'Button_541288',
                            ],
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Form',
                            id: '355815',
                            disabled: 'true',
                            compid: [
                              'Form_31_1121_054627',
                              'Button_269697',
                              'Button_541288',
                            ],
                          },
                          line_number: 2,
                        },
                      ];
                      eventDatasetDisable77.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDatasetDisable77, { e }, 'setDisable', {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_541288')}
                    {...injectData}
                  />
                </View>
              </TabPane>
              <TabPane
                name={'标签子面板'}
                tab={'关联组织'}
                key={'2'}
                $$componentItem={{
                  id: 'TabPane_1785944',
                  uid: 'TabPane_1785944',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, 'TabPane_1785944')}
                {...injectData}
              >
                <View
                  className="View_View_7298435"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_7298435',
                    uid: 'View_7298435',
                    type: 'View',
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    overflowY: 'visible',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_7298435')}
                  {...injectData}
                >
                  <Form
                    name={'组织查询表单'}
                    colSpan={6}
                    labelCol={8}
                    wrapperCol={16}
                    colon={true}
                    layout={'horizontal'}
                    labelAlign={'right'}
                    header={'标题'}
                    colSpace={0}
                    rowSpace={16}
                    formCode={'Form_493328'}
                    $$componentItem={{
                      id: 'Form_493328_308943',
                      uid: 'Form_493328_308943',
                      type: 'Form',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      padding: '0px 0px 0px 0px',
                      margin: '0px 0px 8px 0px',
                      width: '100%',
                      flex: '1',
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Form_493328_308943')
                    }
                    {...injectData}
                  >
                    <Input
                      name={'组织名称'}
                      size={'default'}
                      selfSpan={6}
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
                      fieldName={'orgName'}
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
                        id: 'Input_485159_451983',
                        uid: 'Input_485159_451983',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacallSelfFunc222: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167877328129437920,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '2408469',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshOaUserRefTable',
                              customFuncParams: 'object',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc222.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc222,
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
                        refs.setComponentRef(r, 'Input_485159_451983')
                      }
                      {...injectData}
                    />
                    <Input
                      name={'组织编码'}
                      size={'default'}
                      selfSpan={6}
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
                      fieldName={'orgCode'}
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
                        id: 'Input_4717291_1771768',
                        uid: 'Input_4717291_1771768',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacallSelfFunc223: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167877327602814700,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '2368935',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshOaUserRefTable',
                              customFuncParams: 'object',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc223.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc223,
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
                        refs.setComponentRef(r, 'Input_4717291_1771768')
                      }
                      {...injectData}
                    />
                    <View
                      className="View_View_43339095_829371"
                      name={'布局容器'}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_43339095_829371',
                        uid: 'View_43339095_829371',
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
                        padding: '0px 0px 0px 24px',
                        width: '100%',
                      }}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'View_43339095_829371')
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
                        formItemIndex={3}
                        hasIcon={false}
                        $$componentItem={{
                          id: 'Button_213218_267197',
                          uid: 'Button_213218_267197',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        style={{ width: 'fit-content' }}
                        onClick={(e: any) => {
                          const eventDatacallSelfFunc224: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167869760423064350,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '919012',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshOaUserRefTable',
                                customFuncParams: 'object',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc224.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallSelfFunc224,
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
                          refs.setComponentRef(r, 'Button_213218_267197')
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
                        hasIcon={false}
                        $$componentItem={{
                          id: 'Button_221995_112914',
                          uid: 'Button_221995_112914',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        style={{
                          width: 'fit-content',
                          margin: '0px 0px 0px 12px',
                        }}
                        onClick={(e: any) => {
                          const forms29 = getFormByCompId(
                            'Form_493328_308943',
                            refs,
                          );
                          // 支持循环容器中的表单重置
                          (Array.isArray(forms29)
                            ? forms29
                            : [forms29]
                          ).forEach((form) => form?.resetFields());
                          const eventDatacallSelfFunc225: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167877388996477380,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '736657',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshOaUserRefTable',
                                customFuncParams: 'object',
                              },
                              line_number: 2,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc225.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallSelfFunc225,
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
                          refs.setComponentRef(r, 'Button_221995_112914')
                        }
                        {...injectData}
                      />
                    </View>
                  </Form>
                  <View
                    className="View_View_746273_759844"
                    name={'布局容器'}
                    formItemIndex={3}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_746273_759844',
                      uid: 'View_746273_759844',
                      type: 'View',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '0px 0px 0px 0px',
                      width: '385px',
                      textAlign: 'right',
                      justifyContent: 'flex-start',
                      height: 'auto',
                      flexWrap: 'nowrap',
                      margin: '0px 0px 0px 0px',
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'View_746273_759844')
                    }
                    {...injectData}
                  >
                    <Button
                      name={'人员组织模板下载'}
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
                        type: 'download',
                        theme: 'outlined',
                        fontAddress: '',
                        isIconFont: false,
                        iconFileInfo: {},
                      }}
                      iconType={'download'}
                      hasIcon={true}
                      $$componentItem={{
                        id: 'Button_233763',
                        uid: 'Button_233763',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 12px 0px 0px',
                      }}
                      onClick={(e: any) => {
                        const eventDatasetLoading127: any = [
                          {
                            type: 'setLoading',
                            dataId: 169381719938118850,
                            options: {
                              compId: 'Button_233763',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Button',
                              id: '287379',
                              loading: true,
                            },
                            line_number: 1,
                          },
                        ];
                        eventDatasetLoading127.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatasetLoading127,
                          { e },
                          'setLoading',
                          {
                            id: 'setLoading',
                            name: 'setLoading',
                            type: 'setLoading',
                            platform: 'pc',
                          },
                        );
                        const eventDatacustomActionCode429: any = [
                          {
                            type: 'customActionCode',
                            dataId: 168774827177965630,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '963301',
                              pageJsonId: '4868135',
                              code: 'function main(data,state,success,fail){var tableHeader={"1orgKey":"OA\\u7EC4\\u7EC7ID","2orgCode":"OA\\u7EC4\\u7EC7\\u7F16\\u53F7","3orgName":"OA\\u7EC4\\u7EC7\\u540D\\u79F0","4parentOrgKey":"\\u7236\\u7EC4\\u7EC7ID","5parentOrgName":"\\u7236\\u7EC4\\u7EC7\\u540D\\u79F0","6orgCreate":"\\u521B\\u5EFA\\u65F6\\u95F4"};success(JSON.stringify(tableHeader))};',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 168775005517975330,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '557206',
                                  pageJsonId: '4868135',
                                  sync: false,
                                  actionTitle: '',
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'userOrgTemplateDownload',
                                  _apiCode: 'userOrgTemplateDownload',
                                  _source: 'rhin',
                                  _sourceName: '人员组织批导模板下载-hyj',
                                  _serviceId: '990444997364604928',
                                  _serviceTitle:
                                    '人员组织批导模板下载-hyj: userOrgTemplateDownload',
                                  valueType: 'object',
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
                                          parentType: 'object',
                                          parentKey: '0',
                                          key: '0-0',
                                          id: 'root.header',
                                          dataKey: '557206_root.header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          _id: 'root.path',
                                          compType: 'Input',
                                          parents: ['root'],
                                          parentType: 'object',
                                          parentKey: '0',
                                          key: '0-1',
                                          id: 'root.path',
                                          dataKey: '557206_root.path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'root.query',
                                          compType: 'Input',
                                          parents: ['root'],
                                          parentType: 'object',
                                          parentKey: '0',
                                          key: '0-2',
                                          id: 'root.query',
                                          dataKey: '557206_root.query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          children: [
                                            {
                                              code: 'sceneCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'root.body.sceneCode',
                                              compType: 'Input',
                                              name: 'sceneCode',
                                              parents: ['root', 'body'],
                                              parentType: 'object',
                                              parentKey: '0-3',
                                              key: '0-3-0',
                                              id: 'root.body.sceneCode',
                                              dataKey:
                                                '557206_root.body.sceneCode',
                                              value: {
                                                type: ['customize'],
                                                code: 'CLS_CP_0009_0003',
                                              },
                                            },
                                            {
                                              code: 'tableHeader',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'root.body.tableHeader',
                                              compType: 'Input',
                                              name: 'tableHeader',
                                              parents: ['root', 'body'],
                                              parentType: 'object',
                                              parentKey: '0-3',
                                              key: '0-3-1',
                                              id: 'root.body.tableHeader',
                                              dataKey:
                                                '557206_root.body.tableHeader',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$data_963301$',
                                                ],
                                                code: '',
                                              },
                                            },
                                          ],
                                          _id: 'root.body',
                                          compType: 'Input',
                                          parents: ['root'],
                                          parentType: 'object',
                                          parentKey: '0',
                                          key: '0-3',
                                          id: 'root.body',
                                          dataKey: '557206_root.body',
                                        },
                                      ],
                                      _id: 'root',
                                      compType: 'Input',
                                      isRoot: true,
                                      parents: [],
                                      key: '0',
                                      id: 'root',
                                      dataKey: '557206_root',
                                    },
                                  ],
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'downloadByFileId',
                                    dataId: 168776973145306340,
                                    options: {
                                      compId: 'downloadByFileId',
                                      compName: 'system',
                                      id: '044975',
                                      pageJsonId: '4868135',
                                      data: '$reply_557206.resultData.fileId$',
                                      fileName: '',
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'setLoading',
                                    dataId: 169381725993438080,
                                    options: {
                                      compId: 'Button_233763',
                                      compLib: 'comm',
                                      pageJsonId: '4868135',
                                      compName: 'Button',
                                      id: '398683',
                                      loading: false,
                                    },
                                    line_number: 5,
                                  },
                                  {
                                    type: 'console',
                                    dataId: 168777004237143500,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '901053',
                                      pageJsonId: '4868135',
                                      value: [
                                        '$reply_557206$',
                                        '$reply_557206.resultData$',
                                        '$reply_557206$.resultData',
                                      ],
                                    },
                                    line_number: 6,
                                  },
                                ],
                                callback2: [
                                  {
                                    type: 'setLoading',
                                    dataId: 169381726696495420,
                                    options: {
                                      compId: 'Button_233763',
                                      compLib: 'comm',
                                      pageJsonId: '4868135',
                                      compName: 'Button',
                                      id: '478747',
                                      loading: false,
                                    },
                                    line_number: 7,
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ];
                        eventDatacustomActionCode429.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacustomActionCode429,
                          { e },
                          'customActionCode',
                          {
                            id: 'customActionCode',
                            name: 'customActionCode',
                            type: 'customActionCode',
                            platform: 'pc',
                          },
                        ); // console 168869562730391800
                        console.log('当前模板放置场景：', '恶意欠费关停');
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Button_233763')}
                      {...injectData}
                    />
                    <StdUpload
                      name={'人员组织导入'}
                      uploadStyle={'click'}
                      listType={'text'}
                      titleTip={'notext'}
                      tipLocation={'after'}
                      tipPlacement={'top'}
                      fileNameEncode={false}
                      isWatermark={false}
                      optionalFile={false}
                      fileName={'file'}
                      selfSpan={''}
                      labelCol={8}
                      wrapperCol={16}
                      acceptType={[]}
                      withCredentials={true}
                      numberLimit={99}
                      singleFileMaxSize={50}
                      uploadText={'人员组织导入'}
                      uploadTimeout={30000}
                      deleteIcon={{
                        deleteIconTheme: 'outlined',
                        deleteIconType: 'delete',
                        deleteIconIsIconFont: false,
                        showRemoveIcon: false,
                      }}
                      downloadIcon={{
                        downloadIconTheme: 'outlined',
                        downloadIconType: 'download',
                        downloadIconIsIconFont: false,
                        showDownloadIcon: false,
                      }}
                      previewIcon={{
                        previewIconTheme: 'outlined',
                        previewIconType: 'eye',
                        previewIconIsIconFont: false,
                        showPreviewIcon: false,
                      }}
                      fieldName={'userOrgImport'}
                      icon={{
                        type: undefined,
                        theme: 'outlined',
                        fontAddress: '',
                        isIconFont: false,
                        iconFileInfo: {},
                      }}
                      $$componentItem={{
                        id: 'StdUpload_291661',
                        uid: 'StdUpload_291661',
                        type: 'StdUpload',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ margin: '0px 12px 0px 0px' }}
                      onFinishUpload={(
                        file: any,
                        fileList: any,
                        fileResponseList: any,
                        fileId: any,
                        fileSize: any,
                        fileName: any,
                        fileResponse: any,
                      ) => {
                        const eventDatasetLoading128: any = [
                          {
                            type: 'setLoading',
                            dataId: 168794232208397570,
                            options: {
                              compId: 'Table_8475669',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '4678402',
                              loading: true,
                            },
                            line_number: 1,
                          },
                        ];
                        eventDatasetLoading128.params =
                          [
                            {
                              title: '文件对象',
                              name: 'file',
                              value: '$file$',
                              attrType: 'object',
                            },
                            {
                              title: '上传信息列表',
                              name: 'fileList',
                              value: '$fileList$',
                            },
                            {
                              title: '文件列表',
                              name: 'fileResponseList',
                              value: '$fileResponseList$',
                            },
                            {
                              title: '文件ID',
                              name: 'fileId',
                              value: '$file?.response?.resultObject?.fileId$',
                            },
                            {
                              title: '文件大小',
                              name: 'fileSize',
                              value: '$file?.size$',
                            },
                            {
                              title: '文件名称',
                              name: 'fileName',
                              value: '$file?.name$',
                            },
                            {
                              title: '响应信息',
                              name: 'fileResponse',
                              value: '$file?.response$',
                              attrType: 'object',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatasetLoading128,
                          {
                            file,
                            fileList,
                            fileResponseList,
                            fileId,
                            fileSize,
                            fileName,
                            fileResponse,
                          },
                          'setLoading',
                          {
                            id: 'setLoading',
                            name: 'setLoading',
                            type: 'setLoading',
                            platform: 'pc',
                          },
                        );
                        const eventDataapiRequest692: any = [
                          {
                            type: 'apiRequest',
                            dataId: 168794213661378080,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '669072',
                              pageJsonId: '4868135',
                              sync: false,
                              actionTitle: '',
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'dcOaUserOrgTemplateImport',
                              _apiCode: 'dcOaUserOrgTemplateImport',
                              _source: 'rhin',
                              _sourceName: '人员组织批导模板导入-hyj',
                              _serviceId: '991263257874063360',
                              _serviceTitle:
                                '人员组织批导模板导入-hyj: dcOaUserOrgTemplateImport',
                              valueType: 'object',
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
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-0',
                                      id: 'root.header',
                                      dataKey: '669072_root.header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'root.path',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-1',
                                      id: 'root.path',
                                      dataKey: '669072_root.path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'root.query',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-2',
                                      id: 'root.query',
                                      dataKey: '669072_root.query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'fileCode',
                                          name: '新增节点',
                                          attrType: 'object',
                                          _id: 'root.body.fileCode',
                                          compType: 'Input',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                          id: 'root.body.fileCode',
                                          dataKey: '669072_root.body.fileCode',
                                          value: {
                                            type: [
                                              'context',
                                              '$file?.response?.resultObject?.fileId$',
                                            ],
                                            code: '',
                                          },
                                        },
                                      ],
                                      _id: 'root.body',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-3',
                                      id: 'root.body',
                                      dataKey: '669072_root.body',
                                    },
                                  ],
                                  _id: 'root',
                                  compType: 'Input',
                                  isRoot: true,
                                  parents: [],
                                  key: '0',
                                  id: 'root',
                                  dataKey: '669072_root',
                                },
                              ],
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 168794227825351580,
                                options: {
                                  compId: 'Table_8475669',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '1677957',
                                  loading: false,
                                },
                                line_number: 3,
                              },
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '369938',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_669072?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168794219121719200,
                                elseIfs: [],
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 168800627070597570,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '838997',
                                      pageJsonId: '4868135',
                                      customFuncName: 'refreshOaUserRefTable',
                                    },
                                    line_number: 5,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'showMessage',
                                    dataId: 168794221422222500,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '951573',
                                      pageJsonId: '4868135',
                                      type: 'success',
                                      value: '导入成功！',
                                    },
                                    line_number: 6,
                                  },
                                ],
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 168794229832992740,
                                options: {
                                  compId: 'Table_8475669',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '6954742',
                                  loading: false,
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ];
                        eventDataapiRequest692.params =
                          [
                            {
                              title: '文件对象',
                              name: 'file',
                              value: '$file$',
                              attrType: 'object',
                            },
                            {
                              title: '上传信息列表',
                              name: 'fileList',
                              value: '$fileList$',
                            },
                            {
                              title: '文件列表',
                              name: 'fileResponseList',
                              value: '$fileResponseList$',
                            },
                            {
                              title: '文件ID',
                              name: 'fileId',
                              value: '$file?.response?.resultObject?.fileId$',
                            },
                            {
                              title: '文件大小',
                              name: 'fileSize',
                              value: '$file?.size$',
                            },
                            {
                              title: '文件名称',
                              name: 'fileName',
                              value: '$file?.name$',
                            },
                            {
                              title: '响应信息',
                              name: 'fileResponse',
                              value: '$file?.response$',
                              attrType: 'object',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDataapiRequest692,
                          {
                            file,
                            fileList,
                            fileResponseList,
                            fileId,
                            fileSize,
                            fileName,
                            fileResponse,
                          },
                          'apiRequest',
                          {
                            id: 'apiRequest',
                            name: 'apiRequest',
                            type: 'apiRequest',
                            platform: 'pc',
                          },
                        );
                      }}
                      onListenUploading={(
                        file: any,
                        fileList: any,
                        fileResponseList: any,
                        fileId: any,
                        fileSize: any,
                        fileName: any,
                        fileResponse: any,
                      ) => {
                        const eventDatacustomActionCode430: any = [
                          {
                            type: 'customActionCode',
                            dataId: 167636892586284600,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '450905',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacustomActionCode430.params =
                          [
                            {
                              title: '文件对象',
                              name: 'file',
                              value: '$file$',
                              attrType: 'object',
                            },
                            {
                              title: '上传信息列表',
                              name: 'fileList',
                              value: '$fileList$',
                            },
                            {
                              title: '文件列表',
                              name: 'fileResponseList',
                              value: '$fileResponseList$',
                            },
                            {
                              title: '文件ID',
                              name: 'fileId',
                              value: '$file?.response?.resultObject?.fileId$',
                            },
                            {
                              title: '文件大小',
                              name: 'fileSize',
                              value: '$file?.size$',
                            },
                            {
                              title: '文件名称',
                              name: 'fileName',
                              value: '$file?.name$',
                            },
                            {
                              title: '响应信息',
                              name: 'fileResponse',
                              value: '$file?.response$',
                              attrType: 'object',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacustomActionCode430,
                          {
                            file,
                            fileList,
                            fileResponseList,
                            fileId,
                            fileSize,
                            fileName,
                            fileResponse,
                          },
                          'customActionCode',
                          {
                            id: 'customActionCode',
                            name: 'customActionCode',
                            type: 'customActionCode',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'StdUpload_291661')
                      }
                      {...injectData}
                    />
                    <Button
                      name={'新增'}
                      shape={null}
                      classification={'default'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      type={'primary'}
                      formItemIndex={4}
                      labelCol={8}
                      wrapperCol={16}
                      hasIcon={false}
                      $$componentItem={{
                        id: 'Button_8258636_313289',
                        uid: 'Button_8258636_313289',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 0px 0px 12px',
                      }}
                      onClick={(e: any) => {
                        const eventDatashowCustomModal49: any = [
                          {
                            type: 'showCustomModal',
                            dataId: 167887901498034620,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '83704294',
                              pageJsonId: '4868135',
                              modalname: '/xuanzerenyuanguanlianzuzhi3072',
                              pageId: '953258284557746176',
                              paramsObj: {
                                orgCode: '$data.pageParam.orgCode$',
                                orgInfo: '$data.pageParam$',
                                usrKey: '$data.local_vars.row_usr_key$',
                              },
                              paramsObjKeyValueMap: {
                                orgCode: '$data.pageParam.orgCode$',
                                orgInfo: '$data.pageParam$',
                                usrKey: '$data.local_vars.row_usr_key$',
                              },
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 167887901498065800,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '29713',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshOaUserRefTable',
                                  customFuncParams: 'object',
                                },
                                line_number: 2,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ];
                        eventDatashowCustomModal49.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatashowCustomModal49,
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
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'Button_8258636_313289')
                      }
                      {...injectData}
                    />
                  </View>
                </View>
                <Table
                  name={'关联组织表格'}
                  isFlexColumn={false}
                  extendNum={3}
                  adjustModel={'auto'}
                  pageSize={5}
                  current={data?.qryDcOaOrgRelPage?.resultData?.current}
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
                      title: '组织名称',
                      key: 'orgName',
                      dataIndex: 'orgName',
                      className: '',
                      id: '507455',
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
                      title: '组织编码',
                      key: 'orgCode',
                      dataIndex: 'orgCode',
                      className: 'divider',
                      id: '883753',
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
                      title: '是否默认组织',
                      key: 'isDefault',
                      dataIndex: 'isDefault',
                      className: 'divider',
                      id: '0258065',
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
                      title: '人员等级',
                      key: 'jobLevel',
                      dataIndex: 'jobLevelName',
                      id: '827569',
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
                  showSizeChanger={false}
                  showQuickJumper={true}
                  pageSizeOptions={'[5,10,20]'}
                  customNum={3}
                  rowKey={'orgUserRelId'}
                  dataSource={data?.qryDcOaOrgRelPage?.resultData?.records}
                  rowActions={[
                    {
                      title: '编辑',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'edit' },
                      type: 'edit',
                      id: '500387',
                      checked: true,
                    },
                    {
                      title: '删除',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'delete' },
                      type: 'delete',
                      id: '01535938',
                      checked: true,
                    },
                  ]}
                  extend={[]}
                  fieldName={'current'}
                  total={data?.qryDcOaOrgRelPage?.resultData?.total}
                  dataSourceFromDataSourceConfig={
                    'data.qryDcOaOrgRelPage.resultData.records'
                  }
                  $$componentItem={{
                    id: 'Table_5049436',
                    uid: 'Table_5049436',
                    type: 'Table',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  onPageChange={(page: any, pageSize: any) => {
                    const eventDatasetLoading129: any = [
                      {
                        type: 'setLoading',
                        dataId: 167887140686359700,
                        options: {
                          compId: 'Table_5049436',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Table',
                          id: '392255',
                          loading: true,
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetLoading129.params =
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
                      eventDatasetLoading129,
                      { page, pageSize },
                      'setLoading',
                      {
                        id: 'setLoading',
                        name: 'setLoading',
                        type: 'setLoading',
                        platform: 'pc',
                      },
                    );
                    const eventDatareloadDataSource67: any = [
                      {
                        type: 'reloadDataSource',
                        dataId: 167887141423119740,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '185169',
                          pageJsonId: '4868135',
                          dataSourceId: 167897761946821660,
                          dataSourceName: 'qryDcOaOrgRelPage',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '4119465',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'header',
                            },
                            {
                              attrId: '120929',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '862137',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
                            },
                            {
                              attrId: '436398',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '362446',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.pageNum',
                                  value: {
                                    type: ['context', '$page$'],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '18335',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.pageSize',
                                  value: {
                                    type: ['context', '$pageSize$'],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '351171',
                                  code: 'usrKey',
                                  name: 'usrKey',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.usrKey',
                                  value: {
                                    type: ['datasource', 'local_vars', 'data'],
                                    code: 'row_usr_key',
                                  },
                                },
                                {
                                  attrId: '991963',
                                  code: 'orgCode',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.orgCode',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_493328_308943',
                                      'getFieldsValue',
                                    ],
                                    code: 'orgCode',
                                  },
                                },
                                {
                                  attrId: '696519',
                                  code: 'orgName',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  key: 'body.orgName',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_493328_308943',
                                      'getFieldsValue',
                                    ],
                                    code: 'orgName',
                                  },
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 167887146980340100,
                            options: {
                              compId: 'Table_5049436',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '939768',
                              loading: false,
                            },
                            line_number: 3,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 167887147361065250,
                            options: {
                              compId: 'Table_5049436',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '78743544',
                              loading: false,
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ];
                    eventDatareloadDataSource67.params =
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
                      eventDatareloadDataSource67,
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
                  onRowEdit={(rowId: any, row: any, index: any) => {
                    const eventDatashowCustomModal50: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 167888726603447650,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '061063',
                          pageJsonId: '4868135',
                          modalname: '/xiugaiOAzuzhiguanlianyonghu0431copy',
                          pageId: '953286108062449664',
                          paramsObj: {
                            info: '$row$',
                            usrkey: '$data.local_vars.row_usr_key$',
                          },
                          paramsObjKeyValueMap: {
                            info: '$row$',
                            usrkey: '$data.local_vars.row_usr_key$',
                          },
                          modalPath: '/xiugaiOAzuzhiguanlianyonghu0431copy',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 167888726603470940,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '842581',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshOaUserRefTable',
                              customFuncParams: 'object',
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'console',
                            dataId: 167892931335954600,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '945013',
                              pageJsonId: '4868135',
                              value: ['弹窗确认回调执行==='],
                            },
                            line_number: 3,
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal50.params =
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
                      eventDatashowCustomModal50,
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
                    const eventDatacustomActionCode431: any = [
                      {
                        type: 'customActionCode',
                        dataId: 167892873612908260,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '223673',
                          pageJsonId: '4868135',
                          code: 'function main(data,state,success,fail){var arr=[];if(row["orgUserRelId"]){arr.push(row["orgUserRelId"])}success(arr)};',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 167892874752015520,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '7139425',
                              pageJsonId: '4868135',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'delDcOaOrgUserRelById',
                              _apiCode: 'delDcOaOrgUserRelById',
                              _source: 'rhin',
                              _serviceId: '952811767851941888',
                              _serviceTitle:
                                '删除OA组织和用户关系-hyj: delDcOaOrgUserRelById',
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
                                  dataKey: '7139425_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '7139425_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '7139425_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'orgUserRelIds',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.orgUserRelIds',
                                      compType: 'Input',
                                      name: 'orgUserRelIds',
                                      parents: ['body'],
                                      id: 'body.orgUserRelIds',
                                      dataKey: '7139425_body.orgUserRelIds',
                                      value: {
                                        type: ['context', '$data_223673$'],
                                        code: '',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '7139425_body',
                                },
                              ],
                              _sourceName: '删除OA组织和用户关系-hyj',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 167892886708083970,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '272185',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshOaUserRefTable',
                                  customFuncParams: 'object',
                                },
                                line_number: 3,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode431.params =
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
                      eventDatacustomActionCode431,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Table_5049436')}
                  {...injectData}
                />
              </TabPane>
              <TabPane
                name={'标签子面板'}
                tab={'关联角色'}
                key={'3'}
                badge={''}
                $$componentItem={{
                  id: '7938305',
                  uid: '7938305',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, '7938305')}
                {...injectData}
              >
                <View
                  className="View_View_961785"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_961785',
                    uid: 'View_961785',
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
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_961785')}
                  {...injectData}
                >
                  <Form
                    name={'角色查询表单'}
                    colSpan={6}
                    labelCol={8}
                    wrapperCol={16}
                    colon={true}
                    layout={'horizontal'}
                    labelAlign={'right'}
                    header={'标题'}
                    colSpace={0}
                    rowSpace={16}
                    formCode={'Form_4812867'}
                    $$componentItem={{
                      id: 'Form_4812867',
                      uid: 'Form_4812867',
                      type: 'Form',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      padding: '0px 0px 0px 0px',
                      margin: '0px 0px 12px 0px',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Form_4812867')}
                    {...injectData}
                  >
                    <Input
                      name={'角色编码'}
                      size={'default'}
                      selfSpan={6}
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
                      fieldName={'roleCode'}
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
                        id: 'Input_514473',
                        uid: 'Input_514473',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacallSelfFunc230: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167893328840977800,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '868319',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshOaRoleTable',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc230.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc230,
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
                      ref={(r: any) => refs.setComponentRef(r, 'Input_514473')}
                      {...injectData}
                    />
                    <Input
                      name={'角色名称'}
                      size={'default'}
                      selfSpan={6}
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
                      fieldName={'roleName'}
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
                        id: 'Input_272419',
                        uid: 'Input_272419',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacallSelfFunc231: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167893327342347550,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '402039',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshOaRoleTable',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc231.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc231,
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
                      ref={(r: any) => refs.setComponentRef(r, 'Input_272419')}
                      {...injectData}
                    />
                    <View
                      className="View_View_5640576"
                      name={'布局容器'}
                      labelCol={8}
                      wrapperCol={16}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_5640576',
                        uid: 'View_5640576',
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
                      ref={(r: any) => refs.setComponentRef(r, 'View_5640576')}
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
                        formItemIndex={2}
                        hasIcon={false}
                        $$componentItem={{
                          id: 'Button_556714',
                          uid: 'Button_556714',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        style={{
                          width: 'fit-content',
                          margin: '0px 0px 0px 24px',
                        }}
                        onClick={(e: any) => {
                          const eventDatacallSelfFunc232: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167893325142956830,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '166633',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshOaRoleTable',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc232.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallSelfFunc232,
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
                          refs.setComponentRef(r, 'Button_556714')
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
                        formItemIndex={3}
                        labelCol={8}
                        wrapperCol={16}
                        hasIcon={false}
                        $$componentItem={{
                          id: 'Button_087538',
                          uid: 'Button_087538',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        style={{
                          width: 'fit-content',
                          margin: '0px 0px 0px 8px',
                        }}
                        onClick={(e: any) => {
                          const forms31 = getFormByCompId('Form_4812867', refs);
                          // 支持循环容器中的表单重置
                          (Array.isArray(forms31)
                            ? forms31
                            : [forms31]
                          ).forEach((form) => form?.resetFields());
                          const eventDatacallSelfFunc233: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167893323481875680,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '590584',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshOaRoleTable',
                              },
                              line_number: 2,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc233.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallSelfFunc233,
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
                          refs.setComponentRef(r, 'Button_087538')
                        }
                        {...injectData}
                      />
                    </View>
                    <View
                      className="View_View_67533"
                      name={'布局容器'}
                      labelCol={8}
                      wrapperCol={16}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_67533',
                        uid: 'View_67533',
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
                          formItemIndex: 3,
                          style: undefined,
                          selfSpan: undefined,
                        },
                      }}
                      style={{
                        display: 'block',
                        flexDirection: 'column',
                        padding: '0px 0px 0px 0px',
                        width: '100%',
                        textAlign: 'right',
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'View_67533')}
                      {...injectData}
                    >
                      <Button
                        name={'新增'}
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
                          id: 'Button_8990255',
                          uid: 'Button_8990255',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        style={{ width: 'fit-content' }}
                        onClick={(e: any) => {
                          const eventDatashowCustomModal52: any = [
                            {
                              type: 'showCustomModal',
                              dataId: 167894576003617570,
                              options: {
                                compId: 'showCustomModal',
                                compName: 'page',
                                id: '522562',
                                pageJsonId: '4868135',
                                modalname:
                                  '/xuanzerenyuanguanlianzuzhi3072copy',
                                pageId: '953478278846369792',
                                paramsObj: {
                                  usrKey: '$data.local_vars.row_usr_key$',
                                },
                                paramsObjKeyValueMap: {
                                  usrKey: '$data.local_vars.row_usr_key$',
                                },
                              },
                              line_number: 1,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167894580148899230,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '0622523',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshOaRoleTable',
                                  },
                                  line_number: 2,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                              callback2: [],
                            },
                          ];
                          eventDatashowCustomModal52.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatashowCustomModal52,
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
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Button_8990255')
                        }
                        {...injectData}
                      />
                    </View>
                  </Form>
                </View>
                <Table
                  name={'关联角色表格'}
                  isFlexColumn={false}
                  extendNum={3}
                  adjustModel={'auto'}
                  pageSize={5}
                  current={data?.qryDcOaRolePage?.resultData?.current}
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
                      title: '角色编码',
                      key: 'roleCode',
                      dataIndex: 'roleCode',
                      className: '',
                      id: '7653119',
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
                      title: '角色名称',
                      key: 'roleName',
                      dataIndex: 'roleName',
                      className: 'divider',
                      id: '1107225',
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
                  rowSelection={undefined}
                  showHead={false}
                  showTotal={true}
                  showSizeChanger={false}
                  showQuickJumper={true}
                  pageSizeOptions={'[5,10,20]'}
                  customNum={3}
                  rowKey={'userRoleRelId'}
                  dataSource={data?.qryDcOaRolePage?.resultData?.records}
                  rowActions={[
                    {
                      title: '删除',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'delete' },
                      type: 'delete',
                      id: '776126',
                      checked: true,
                    },
                  ]}
                  extend={[]}
                  fieldName={'current'}
                  total={data?.qryDcOaRolePage?.resultData?.total}
                  dataSourceFromDataSourceConfig={
                    'data.qryDcOaRolePage.resultData.records'
                  }
                  $$componentItem={{
                    id: 'Table_68816',
                    uid: 'Table_68816',
                    type: 'Table',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  onPageChange={(page: any, pageSize: any) => {
                    const eventDatasetLoading130: any = [
                      {
                        type: 'setLoading',
                        dataId: 167894537492071500,
                        options: {
                          compId: 'Table_68816',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Table',
                          id: '939245',
                          loading: true,
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetLoading130.params =
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
                      eventDatasetLoading130,
                      { page, pageSize },
                      'setLoading',
                      {
                        id: 'setLoading',
                        name: 'setLoading',
                        type: 'setLoading',
                        platform: 'pc',
                      },
                    );
                    const eventDatareloadDataSource68: any = [
                      {
                        type: 'reloadDataSource',
                        dataId: 167894540378065120,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '917987',
                          pageJsonId: '4868135',
                          dataSourceId: 167894505032596860,
                          dataSourceName: 'qryDcOaRolePage',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '607022',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'header',
                            },
                            {
                              attrId: '773946',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'path',
                            },
                            {
                              attrId: '3271736',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              key: 'query',
                            },
                            {
                              attrId: '015553',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '6768435',
                                  code: 'roleName',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  key: 'body.roleName',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_4812867',
                                      'getFieldsValue',
                                    ],
                                    code: 'roleName',
                                  },
                                },
                                {
                                  attrId: '097277',
                                  code: 'roleCode',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  key: 'body.roleCode',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_4812867',
                                      'getFieldsValue',
                                    ],
                                    code: 'roleCode',
                                  },
                                },
                                {
                                  attrId: '322983',
                                  code: 'pageSize',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  key: 'body.pageSize',
                                  value: {
                                    type: ['context', '$pageSize$'],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '08101414',
                                  code: 'pageNum',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  key: 'body.pageNum',
                                  value: {
                                    type: ['context', '$page$'],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '628079',
                                  code: 'usrKey',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'object',
                                  key: 'body.usrKey',
                                  value: {
                                    type: ['datasource', 'local_vars', 'data'],
                                    code: 'row_usr_key',
                                  },
                                },
                              ],
                              key: 'body',
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '039306',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '2854478',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '435326',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '675814',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '719912',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '665935',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '600272',
                                  code: 'hitCount',
                                  name: 'hitCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '926161',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '920126',
                                  code: 'optimizeCountSql',
                                  name: 'optimizeCountSql',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '50579445',
                                  code: 'maxLimit',
                                  name: 'maxLimit',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '35232',
                                  code: 'orders',
                                  name: 'orders',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '250853',
                                  code: 'countId',
                                  name: 'countId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '5037132',
                                  code: 'isSearchCount',
                                  name: 'isSearchCount',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '797544',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '70323944',
                                      code: 'userRoleRelId',
                                      name: 'userRoleRelId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '100185',
                                      code: 'usrKey',
                                      name: 'usrKey',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '768782',
                                      code: 'roleId',
                                      name: 'roleId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '326585',
                                      code: 'roleCode',
                                      name: 'roleCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '364323',
                                      code: 'roleName',
                                      name: 'roleName',
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
                            dataId: 167894543830973300,
                            options: {
                              compId: 'Table_68816',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '585407',
                              loading: false,
                            },
                            line_number: 3,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 167894543959758100,
                            options: {
                              compId: 'Table_68816',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '262454',
                              loading: false,
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ];
                    eventDatareloadDataSource68.params =
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
                      eventDatareloadDataSource68,
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
                    const eventDataapiRequest693: any = [
                      {
                        type: 'apiRequest',
                        dataId: 167894604086620200,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '2708576',
                          pageJsonId: '4868135',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'delDcOaUserRoleRelById',
                          _apiCode: 'delDcOaUserRoleRelById',
                          _source: 'rhin',
                          _serviceId: '953532223538868224',
                          _serviceTitle:
                            '根据主键删除用户角色关系-hyj: delDcOaUserRoleRelById',
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
                              dataKey: '2708576_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'dcOaUserRoleRelId',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'T',
                                  defaultValue: '',
                                  _id: 'path.dcOaUserRoleRelId',
                                  compType: 'Input',
                                  parents: ['path'],
                                  id: 'path.dcOaUserRoleRelId',
                                  dataKey: '2708576_path.dcOaUserRoleRelId',
                                  value: {
                                    type: ['context', '$row$'],
                                    hideAttr: false,
                                    code: 'userRoleRelId',
                                  },
                                },
                              ],
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '2708576_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '2708576_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '2708576_body',
                            },
                          ],
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 167894627834317760,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '209724',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshOaRoleTable',
                              customFuncParams: 'object',
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDataapiRequest693.params =
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
                      eventDataapiRequest693,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Table_68816')}
                  {...injectData}
                />
              </TabPane>
              <TabPane
                name={'标签子面板'}
                tab={'关联岗位'}
                key={'4'}
                $$componentItem={{
                  id: '091023',
                  uid: '091023',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, '091023')}
                {...injectData}
              >
                <Card
                  cardIconType={'none'}
                  bordered={true}
                  size={'default'}
                  hasHeader={true}
                  hasIcon={true}
                  extend={[
                    {
                      id: '1011843',
                      title: '人员关联岗位',
                      iconPos: 'left',
                      btnType: 'primary',
                      icon: {
                        theme: 'outlined',
                        type: 'plus',
                        isIconFont: false,
                      },
                      rule: '',
                    },
                    {
                      id: '90747',
                      title: '批量删除',
                      iconPos: 'left',
                      btnType: 'primary',
                      icon: {
                        theme: 'outlined',
                        type: 'minus',
                        isIconFont: false,
                      },
                      rule: '',
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
                    // console 166303757993446750
                    console.log(data?.local_vars);
                    const eventDatashowCustomModal53: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 166097860339693730,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '224256',
                          pageJsonId: '4868135',
                          modalname: '/choosePostUserRel',
                          pageId: '885432827305742336',
                          paramsObj: {
                            usrKey: '$data.local_vars.row_usr_key$',
                            usrLogin: '$data.local_vars.row_usr_login$',
                            usrLastName: '$data.local_vars.row_usr_last_name$',
                          },
                          paramsObjKeyValueMap: {
                            usrKey: '$data.local_vars.row_usr_key$',
                            usrLogin: '$data.local_vars.row_usr_login$',
                            usrLastName: '$data.local_vars.row_usr_last_name$',
                          },
                          modalPath: '/choosePostUserRel',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166158503467206600,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '562974',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshUserPostRelTable',
                              customFuncParams: '$data.local_vars$',
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal53.params =
                      [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] ||
                      [];
                    CMDGenerator(
                      eventDatashowCustomModal53,
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
                    const eventDatagetTableSelectedKey27: any = [
                      {
                        type: 'getTableSelectedKey',
                        dataId: 166305047198510180,
                        options: {
                          compId: 'Table_311334',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Table',
                          id: '380223',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '1859533',
                                options: {
                                  context: '$selectedRowKeys_380223$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166305047546787400,
                            elseIfs: [],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showModal',
                                dataId: 166305053419541630,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '327979',
                                  pageJsonId: '4868135',
                                  type: 'confirm',
                                  title: '确定要删除该关联岗位关系吗？',
                                  content: '该操作为物理删除，请谨慎操作！',
                                  okText: '确定',
                                  cancelText: '取消',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'setLoading',
                                    dataId: 166305061521483700,
                                    options: {
                                      compId: 'Table_311334',
                                      compLib: 'comm',
                                      pageJsonId: '4868135',
                                      compName: 'Table',
                                      id: '654949',
                                      loading: true,
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'apiRequest',
                                    dataId: 166305063569776700,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '256069',
                                      pageJsonId: '4868135',
                                      sync: false,
                                      actionTitle: '',
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
                                          dataKey: '256069_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          _id: 'path',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'path',
                                          dataKey: '256069_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '256069_query',
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
                                              dataKey:
                                                '256069_body.postUserRelIds',
                                              value: {
                                                type: ['customize'],
                                                code: '$JSON.stringify(selectedRowKeys_380223)$',
                                              },
                                            },
                                          ],
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '256069_body',
                                        },
                                      ],
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 166305071617782100,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '1992666',
                                          pageJsonId: '4868135',
                                          customFuncName:
                                            'refreshUserPostRelTable',
                                        },
                                        line_number: 6,
                                        callback1: [
                                          {
                                            type: 'setLoading',
                                            dataId: 166305358932664580,
                                            options: {
                                              compId: 'Table_311334',
                                              compLib: 'comm',
                                              pageJsonId: '4868135',
                                              compName: 'Table',
                                              id: '1995647',
                                              loading: false,
                                            },
                                            line_number: 7,
                                          },
                                        ],
                                        callback2: [
                                          {
                                            type: 'setLoading',
                                            dataId: 166305359121403870,
                                            options: {
                                              compId: 'Table_311334',
                                              compLib: 'comm',
                                              pageJsonId: '4868135',
                                              compName: 'Table',
                                              id: '0672458',
                                              loading: false,
                                            },
                                            line_number: 8,
                                          },
                                        ],
                                      },
                                    ],
                                    callback2: [
                                      {
                                        type: 'setLoading',
                                        dataId: 166305074289854340,
                                        options: {
                                          compId: 'Table_311334',
                                          compLib: 'comm',
                                          pageJsonId: '4868135',
                                          compName: 'Table',
                                          id: '8470795',
                                          loading: false,
                                        },
                                        line_number: 9,
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
                                condId: '617561',
                                options: {
                                  context: '$selectedRowKeys_380223$',
                                  operate: 'empty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166305047609729540,
                            elseIfs: [],
                            line_number: 10,
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatagetTableSelectedKey27.params =
                      [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] ||
                      [];
                    CMDGenerator(
                      eventDatagetTableSelectedKey27,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Card_839649')}
                  {...injectData}
                >
                  <Form
                    name={'岗位查询表单'}
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
                        const eventDatacallSelfFunc237: any = [
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
                        eventDatacallSelfFunc237.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc237,
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
                        const eventDatacallSelfFunc238: any = [
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
                        eventDatacallSelfFunc238.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc238,
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
                        refs.setComponentRef(r, 'Input_33684855')
                      }
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
                          const eventDatacallSelfFunc239: any = [
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
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc239.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallSelfFunc239,
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
                          refs.setComponentRef(r, 'Button_224226')
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
                          id: 'Button_499055',
                          uid: 'Button_499055',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          width: 'fit-content',
                          margin: '0px 0px 0px 12px',
                        }}
                        onClick={(e: any) => {
                          const eventDataclearValue81: any = [
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
                          eventDataclearValue81.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDataclearValue81,
                            { e },
                            'clearValue',
                            {
                              id: 'clearValue',
                              name: 'clearValue',
                              type: 'clearValue',
                              platform: 'pc',
                            },
                          );
                          const eventDataclearValue82: any = [
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
                          eventDataclearValue82.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDataclearValue82,
                            { e },
                            'clearValue',
                            {
                              id: 'clearValue',
                              name: 'clearValue',
                              type: 'clearValue',
                              platform: 'pc',
                            },
                          );
                          const eventDatasetLoading132: any = [
                            {
                              type: 'setLoading',
                              dataId: 169111953693297540,
                              options: {
                                compId: 'Table_311334',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '445969',
                                loading: true,
                              },
                              line_number: 3,
                            },
                          ];
                          eventDatasetLoading132.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatasetLoading132,
                            { e },
                            'setLoading',
                            {
                              id: 'setLoading',
                              name: 'setLoading',
                              type: 'setLoading',
                              platform: 'pc',
                            },
                          );
                          const eventDatareloadDataSource70: any = [
                            {
                              type: 'reloadDataSource',
                              dataId: 169111948880101950,
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '429168',
                                pageJsonId: '4868135',
                                dataSourceId: 166270738136718940,
                                dataSourceName: 'qryDcPostInfoByUsrKey',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '599949',
                                    code: 'header',
                                    name: '请求头参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'header',
                                  },
                                  {
                                    attrId: '3751144',
                                    code: 'path',
                                    name: '请求路径参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'path',
                                  },
                                  {
                                    attrId: '7799145',
                                    code: 'query',
                                    name: 'URL 参数',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    key: 'query',
                                  },
                                  {
                                    attrId: '2466545',
                                    code: 'body',
                                    name: '请求体',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    type: 'object',
                                    children: [
                                      {
                                        attrId: '161157',
                                        code: 'pageSize',
                                        name: 'pageSize',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: 'pageSize',
                                        },
                                        type: 'long',
                                        key: 'body.pageSize',
                                        value: {
                                          type: ['customize'],
                                          code: '5',
                                        },
                                      },
                                      {
                                        attrId: '5926227',
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
                                        attrId: '4958816',
                                        code: 'postCode',
                                        name: 'postCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        key: 'body.postCode',
                                        value: { type: [], code: '' },
                                      },
                                      {
                                        attrId: '207693',
                                        code: 'postName',
                                        name: 'postName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        key: 'body.postName',
                                        value: { type: [], code: '' },
                                      },
                                      {
                                        attrId: '144303',
                                        code: 'usrKey',
                                        name: 'usrKey',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        key: 'body.usrKey',
                                        value: {
                                          type: [
                                            'datasource',
                                            'local_vars',
                                            'data',
                                          ],
                                          code: 'row_usr_key',
                                        },
                                      },
                                    ],
                                    key: 'body',
                                  },
                                ],
                                dataSourceSetValue: [
                                  {
                                    attrId: '966637',
                                    code: 'resultCode',
                                    name: 'resultCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '72217525',
                                    code: 'resultMsgCode',
                                    name: 'resultMsgCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '230439',
                                    code: 'resultMsg',
                                    name: 'resultMsg',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9542645',
                                    code: 'resultData',
                                    name: 'resultData',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'object',
                                    children: [
                                      {
                                        attrId: '187334',
                                        code: 'total',
                                        name: 'total',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '924569',
                                        code: 'current',
                                        name: 'current',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '039357',
                                        code: 'hitCount',
                                        name: 'hitCount',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'boolean',
                                      },
                                      {
                                        attrId: '6339666',
                                        code: 'size',
                                        name: 'size',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '832981',
                                        code: 'optimizeCountSql',
                                        name: 'optimizeCountSql',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'boolean',
                                      },
                                      {
                                        attrId: '722384',
                                        code: 'maxLimit',
                                        name: 'maxLimit',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '044174',
                                        code: 'orders',
                                        name: 'orders',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'fieldArray',
                                        children: [
                                          {
                                            attrId: '232498',
                                            code: 'listItem',
                                            name: '列表元素',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'object',
                                          },
                                        ],
                                      },
                                      {
                                        attrId: '418533',
                                        code: 'countId',
                                        name: 'countId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '011619',
                                        code: 'isSearchCount',
                                        name: 'isSearchCount',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'boolean',
                                      },
                                      {
                                        attrId: '860169',
                                        code: 'records',
                                        name: 'records',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'objectArray',
                                        children: [
                                          {
                                            attrId: '575352',
                                            code: 'statusDate',
                                            name: 'statusDate',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '508454',
                                            code: 'createStaffName',
                                            name: 'createStaffName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '323099',
                                            code: 'areaId',
                                            name: 'areaId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '2659633',
                                            code: 'postDesc',
                                            name: 'postDesc',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '512767',
                                            code: 'postUserRelId',
                                            name: 'postUserRelId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                          },
                                          {
                                            attrId: '629409',
                                            code: 'postName',
                                            name: 'postName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '614525',
                                            code: 'postCode',
                                            name: 'postCode',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '857535',
                                            code: 'statusCd',
                                            name: 'statusCd',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '005997',
                                            code: 'remark',
                                            name: 'remark',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '3095398',
                                            code: 'postId',
                                            name: 'postId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '268628',
                                            code: 'lanId',
                                            name: 'lanId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '268909',
                                            code: 'provinceId',
                                            name: 'provinceId',
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
                              callback1: [
                                {
                                  type: 'setLoading',
                                  dataId: 169111948880199550,
                                  options: {
                                    compId: 'Table_311334',
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Table',
                                    id: '86671951',
                                    loading: false,
                                  },
                                  line_number: 5,
                                },
                              ],
                              callback2: [
                                {
                                  type: 'setLoading',
                                  dataId: 169111948880125470,
                                  options: {
                                    compId: 'Table_311334',
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Table',
                                    id: '905593',
                                    loading: false,
                                  },
                                  line_number: 6,
                                },
                              ],
                            },
                          ];
                          eventDatareloadDataSource70.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatareloadDataSource70,
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
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Button_499055')
                        }
                        {...injectData}
                      />
                    </View>
                  </Form>
                  <Table
                    name={'post'}
                    isFlexColumn={false}
                    pageSize={5}
                    current={data?.qryDcPostInfoByUsrKey?.resultData?.current}
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
                    rowActions={[
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
                    dataSource={
                      data?.qryDcPostInfoByUsrKey?.resultData?.records
                    }
                    total={data?.qryDcPostInfoByUsrKey?.resultData?.total}
                    fieldName={'data.qryAttrSpecPage.resultData.current'}
                    dataSourceFromDataSourceConfig={
                      'data.qryDcPostInfoByUsrKey.resultData.records'
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
                    onRowDelete={(rowId: any, row: any, index: any) => {
                      const eventDatashowModal3: any = [
                        {
                          type: 'showModal',
                          dataId: 166156974227855780,
                          options: {
                            compId: 'showModal',
                            compName: 'page',
                            id: '409602',
                            pageJsonId: '4868135',
                            type: 'confirm',
                            title: '确定要删除该关联岗位关系吗？',
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
                                    dataKey: '768139_header',
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
                                        dataKey: '768139_path.dcPostUserRelId',
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
                                _sourceName: '根据主键删除岗位人员关系--zzz',
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
                                        customFuncName:
                                          'refreshUserPostRelTable',
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
                      eventDatashowModal3.params =
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
                        eventDatashowModal3,
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
                      const eventDatashowCustomModal54: any = [
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
                      eventDatashowCustomModal54.params =
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
                        eventDatashowCustomModal54,
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
                    onPageChange={(page: any, pageSize: any) => {
                      const eventDatasetLoading133: any = [
                        {
                          type: 'setLoading',
                          dataId: 170175994985974560,
                          options: {
                            compId: 'Table_311334',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '559507',
                            loading: true,
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatasetLoading133.params =
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
                        eventDatasetLoading133,
                        { page, pageSize },
                        'setLoading',
                        {
                          id: 'setLoading',
                          name: 'setLoading',
                          type: 'setLoading',
                          platform: 'pc',
                        },
                      );
                      const eventDatareloadDataSource71: any = [
                        {
                          type: 'reloadDataSource',
                          dataId: 170175994697145500,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '0213848',
                            pageJsonId: '4868135',
                            dataSourceId: 166270738136718940,
                            dataSourceName: 'qryDcPostInfoByUsrKey',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '599949',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'header',
                              },
                              {
                                attrId: '3751144',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'path',
                              },
                              {
                                attrId: '7799145',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'query',
                              },
                              {
                                attrId: '2466545',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '161157',
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
                                    attrId: '5926227',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: 'pageNum',
                                    },
                                    type: 'long',
                                    key: 'body.pageNum',
                                    value: {
                                      type: ['context', '$page$'],
                                      code: '',
                                      hideAttr: true,
                                    },
                                  },
                                  {
                                    attrId: '4958816',
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
                                  },
                                  {
                                    attrId: '207693',
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
                                  },
                                  {
                                    attrId: '144303',
                                    code: 'usrKey',
                                    name: 'usrKey',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.usrKey',
                                    value: {
                                      type: [
                                        'datasource',
                                        'local_vars',
                                        'data',
                                      ],
                                      code: 'row_usr_key',
                                    },
                                  },
                                ],
                                key: 'body',
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '966637',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '72217525',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '230439',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9542645',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '187334',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '924569',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '039357',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '6339666',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '832981',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '722384',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '044174',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '232498',
                                        code: 'listItem',
                                        name: '列表元素',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                      },
                                    ],
                                  },
                                  {
                                    attrId: '418533',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '011619',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '860169',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '575352',
                                        code: 'statusDate',
                                        name: 'statusDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '508454',
                                        code: 'createStaffName',
                                        name: 'createStaffName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '323099',
                                        code: 'areaId',
                                        name: 'areaId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2659633',
                                        code: 'postDesc',
                                        name: 'postDesc',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '512767',
                                        code: 'postUserRelId',
                                        name: 'postUserRelId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '629409',
                                        code: 'postName',
                                        name: 'postName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '614525',
                                        code: 'postCode',
                                        name: 'postCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '857535',
                                        code: 'statusCd',
                                        name: 'statusCd',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '005997',
                                        code: 'remark',
                                        name: 'remark',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3095398',
                                        code: 'postId',
                                        name: 'postId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '268628',
                                        code: 'lanId',
                                        name: 'lanId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '268909',
                                        code: 'provinceId',
                                        name: 'provinceId',
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
                              dataId: 170175994697104860,
                              options: {
                                compId: 'Table_311334',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '2821533',
                                loading: false,
                              },
                              line_number: 3,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 170175994697193900,
                              options: {
                                compId: 'Table_311334',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '874584',
                                loading: false,
                              },
                              line_number: 4,
                            },
                          ],
                        },
                      ];
                      eventDatareloadDataSource71.params =
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
                        eventDatareloadDataSource71,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Table_311334')}
                    {...injectData}
                  />
                </Card>
              </TabPane>
              <TabPane
                name={'标签子面板'}
                tab={'关联BOP'}
                key={'5'}
                $$componentItem={{
                  id: 'TabPane_082366',
                  uid: 'TabPane_082366',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, 'TabPane_082366')}
                {...injectData}
              >
                <View
                  className="View_View_4419026"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_4419026',
                    uid: 'View_4419026',
                    type: 'View',
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    margin: '0px 0px 16px 0px',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_4419026')}
                  {...injectData}
                >
                  <Form
                    name={'BOP查询表单'}
                    colSpan={12}
                    labelCol={8}
                    wrapperCol={16}
                    colon={true}
                    layout={'horizontal'}
                    labelAlign={'right'}
                    header={'标题'}
                    colSpace={0}
                    rowSpace={16}
                    formCode={'Form_635031'}
                    formItemIndex={0}
                    $$componentItem={{
                      id: 'Form_635031',
                      uid: 'Form_635031',
                      type: 'Form',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      padding: '0px 0px 0px 0px',
                      margin: '0px 0px 0px 0px',
                      width: '100%',
                      flex: '1',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Form_635031')}
                    {...injectData}
                  >
                    <Input
                      name={'BOP工号'}
                      size={'default'}
                      selfSpan={12}
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
                      fieldName={'userId'}
                      regexp={[
                        {
                          id: '89179',
                          title: '按钮1',
                          iconPos: 'left',
                          regexpType: 1,
                          message: '请输入正确的工号',
                          pattern: '/^[1-9]\\d*$/',
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
                        id: 'Input_7683',
                        uid: 'Input_7683',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacustomActionCode433: any = [
                          {
                            type: 'customActionCode',
                            dataId: 168791737420215260,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '5422305',
                              pageJsonId: '4868135',
                              code: 'function main(data,state,success,fail){if(/^[1-9]\\d*$/.test(e.target.value)||!e.target.value){success(e.target.value)}else{fail()}};',
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168791741775197000,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '0271182',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshBOPTable',
                                  customFuncParams: 'object',
                                },
                                line_number: 2,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [
                              {
                                type: 'showMessage',
                                dataId: 168791742272021220,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '764869',
                                  pageJsonId: '4868135',
                                  type: 'warn',
                                  value: '请输入正确的工号！',
                                },
                                line_number: 3,
                              },
                            ],
                          },
                        ];
                        eventDatacustomActionCode433.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacustomActionCode433,
                          { e },
                          'customActionCode',
                          {
                            id: 'customActionCode',
                            name: 'customActionCode',
                            type: 'customActionCode',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_7683')}
                      {...injectData}
                    />
                    <View
                      className="View_View_7731315"
                      name={'布局容器'}
                      labelCol={8}
                      wrapperCol={16}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_7731315',
                        uid: 'View_7731315',
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
                        textAlign: 'right',
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'View_7731315')}
                      {...injectData}
                    >
                      <View
                        className="View_View_656406"
                        name={'布局容器'}
                        backgroundType={{
                          type: 'cleanColor',
                          color: undefined,
                        }}
                        $$componentItem={{
                          id: 'View_656406',
                          uid: 'View_656406',
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
                        }}
                        ref={(r: any) => refs.setComponentRef(r, 'View_656406')}
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
                          formItemIndex={2}
                          hasIcon={false}
                          $$componentItem={{
                            id: 'Button_578183',
                            uid: 'Button_578183',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={true}
                          visible={true}
                          readOnly={false}
                          style={{
                            width: 'fit-content',
                            margin: '0px 0px 0px 24px',
                          }}
                          onClick={(e: any) => {
                            const eventDatagetValue155: any = [
                              {
                                type: 'getValue',
                                dataId: 168791759070910850,
                                options: {
                                  compId: 'Input_7683',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Input',
                                  id: '8423961',
                                },
                                line_number: 1,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 168791759367272770,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '096669',
                                      pageJsonId: '4868135',
                                      code: 'function main(data,state,success,fail){var value=value_8423961;if(/^[1-9]\\d*$/.test(value)||!value){success(value)}else{fail()}};',
                                    },
                                    line_number: 2,
                                    callback1: [
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 168791759367223800,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '7054635',
                                          pageJsonId: '4868135',
                                          customFuncName: 'refreshBOPTable',
                                          customFuncParams: 'object',
                                        },
                                        line_number: 3,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                    callback2: [
                                      {
                                        type: 'showMessage',
                                        dataId: 168791759367265570,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '429366',
                                          pageJsonId: '4868135',
                                          type: 'warn',
                                          value: '请输入正确的工号！',
                                        },
                                        line_number: 4,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ];
                            eventDatagetValue155.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatagetValue155,
                              { e },
                              'getValue',
                              {
                                id: 'getValue',
                                name: 'getValue',
                                type: 'getValue',
                                platform: 'pc',
                              },
                            );
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(r, 'Button_578183')
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
                          formItemIndex={3}
                          labelCol={8}
                          wrapperCol={16}
                          hasIcon={false}
                          $$componentItem={{
                            id: 'Button_789349',
                            uid: 'Button_789349',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={true}
                          visible={true}
                          readOnly={false}
                          style={{
                            width: 'fit-content',
                            margin: '0px 0px 0px 8px',
                          }}
                          onClick={(e: any) => {
                            const forms33 = getFormByCompId(
                              'Form_635031',
                              refs,
                            );
                            // 支持循环容器中的表单重置
                            (Array.isArray(forms33)
                              ? forms33
                              : [forms33]
                            ).forEach((form) => form?.resetFields());
                            const eventDatacallSelfFunc241: any = [
                              {
                                type: 'callSelfFunc',
                                dataId: 168785649809386980,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '556412',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshBOPTable',
                                  customFuncParams: 'object',
                                },
                                line_number: 2,
                                callback1: [],
                                callback2: [],
                              },
                            ];
                            eventDatacallSelfFunc241.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatacallSelfFunc241,
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
                            refs.setComponentRef(r, 'Button_789349')
                          }
                          {...injectData}
                        />
                      </View>
                    </View>
                  </Form>
                  <View
                    className="View_View_462171"
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_462171',
                      uid: 'View_462171',
                      type: 'View',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'right',
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '0px 0px 0px 0px',
                      width: '465px',
                      lineHeight: '0px',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      margin: '0px 0px 0px 0px',
                      flexWrap: 'nowrap',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_462171')}
                    {...injectData}
                  >
                    <Button
                      name={'BOP工号信息批导模板下载'}
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
                        type: 'download',
                        theme: 'outlined',
                        fontAddress: '',
                        isIconFont: false,
                        iconFileInfo: {},
                      }}
                      iconType={'download'}
                      hasIcon={true}
                      $$componentItem={{
                        id: 'Button_463022',
                        uid: 'Button_463022',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 12px 0px 12px',
                      }}
                      onClick={(e: any) => {
                        const eventDatasetLoading134: any = [
                          {
                            type: 'setLoading',
                            dataId: 169381728950929700,
                            options: {
                              compId: 'Button_463022',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Button',
                              id: '983207',
                              loading: true,
                            },
                            line_number: 1,
                          },
                        ];
                        eventDatasetLoading134.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatasetLoading134,
                          { e },
                          'setLoading',
                          {
                            id: 'setLoading',
                            name: 'setLoading',
                            type: 'setLoading',
                            platform: 'pc',
                          },
                        );
                        const eventDataapiRequest694: any = [
                          {
                            type: 'apiRequest',
                            dataId: 168802360822644300,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '921012',
                              pageJsonId: '537892',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'getDcFileTemplateByReq',
                              _apiCode: 'getDcFileTemplateByReq',
                              _source: 'rhin',
                              _serviceId: '930753687104397312',
                              _serviceTitle:
                                '根据请求对象查询文件对象模板-tsm: getDcFileTemplateByReq',
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
                                      dataKey: '921012_root.header',
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
                                      dataKey: '921012_root.path',
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
                                      dataKey: '921012_root.query',
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
                                          code: 'sceneCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'root.body.sceneCode',
                                          compType: 'Input',
                                          name: 'sceneCode',
                                          parents: ['root', 'body'],
                                          id: 'root.body.sceneCode',
                                          dataKey: '921012_root.body.sceneCode',
                                          value: {
                                            type: ['customize'],
                                            code: 'CLS_JC_0005_0004',
                                          },
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                        },
                                        {
                                          code: 'fileTemplateName',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'root.body.fileTemplateName',
                                          compType: 'Input',
                                          name: 'fileTemplateName',
                                          parents: ['root', 'body'],
                                          id: 'root.body.fileTemplateName',
                                          dataKey:
                                            '921012_root.body.fileTemplateName',
                                          value: {
                                            type: ['customize'],
                                            code: 'BOP工号信息批导模板.xlsx',
                                          },
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-1',
                                        },
                                      ],
                                      _id: 'root.body',
                                      compType: 'Input',
                                      parents: ['root'],
                                      id: 'root.body',
                                      dataKey: '921012_root.body',
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
                                  dataKey: '921012_root',
                                },
                              ],
                              _sourceName: '根据请求对象查询文件对象模板-tsm',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'downloadByFileId',
                                dataId: 168802360822682370,
                                options: {
                                  compId: 'downloadByFileId',
                                  compName: 'system',
                                  id: '3249345',
                                  pageJsonId: '537892',
                                  data: '$reply_921012.resultData.fileId$',
                                  fileName: '',
                                },
                                line_number: 3,
                              },
                              {
                                type: 'setLoading',
                                dataId: 169381729803646300,
                                options: {
                                  compId: 'Button_463022',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Button',
                                  id: '920909',
                                  loading: false,
                                },
                                line_number: 4,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 169381730239033300,
                                options: {
                                  compId: 'Button_463022',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Button',
                                  id: '412517',
                                  loading: false,
                                },
                                line_number: 5,
                              },
                            ],
                          },
                        ];
                        eventDataapiRequest694.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDataapiRequest694,
                          { e },
                          'apiRequest',
                          {
                            id: 'apiRequest',
                            name: 'apiRequest',
                            type: 'apiRequest',
                            platform: 'pc',
                          },
                        ); // console 168869576850250100
                        console.log('当前文件模板放置场景：', '集团销户	');
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Button_463022')}
                      {...injectData}
                    />
                    <StdUpload
                      name={'BOP工号信息导入'}
                      uploadStyle={'click'}
                      listType={'text'}
                      titleTip={'notext'}
                      tipLocation={'after'}
                      tipPlacement={'top'}
                      fileNameEncode={false}
                      isWatermark={false}
                      optionalFile={false}
                      fileName={'file'}
                      selfSpan={''}
                      labelCol={8}
                      wrapperCol={16}
                      acceptType={[]}
                      withCredentials={true}
                      numberLimit={99}
                      singleFileMaxSize={50}
                      uploadText={'BOP工号信息导入'}
                      uploadTimeout={30000}
                      deleteIcon={{
                        deleteIconTheme: 'outlined',
                        deleteIconType: 'delete',
                        deleteIconIsIconFont: false,
                        showRemoveIcon: false,
                      }}
                      downloadIcon={{
                        downloadIconTheme: 'outlined',
                        downloadIconType: 'download',
                        downloadIconIsIconFont: false,
                        showDownloadIcon: false,
                      }}
                      previewIcon={{
                        previewIconTheme: 'outlined',
                        previewIconType: 'eye',
                        previewIconIsIconFont: false,
                        showPreviewIcon: false,
                      }}
                      fieldName={'bopInfoImport'}
                      icon={{
                        type: undefined,
                        theme: 'outlined',
                        fontAddress: '',
                        isIconFont: false,
                        iconFileInfo: {},
                      }}
                      $$componentItem={{
                        id: 'StdUpload_0110222',
                        uid: 'StdUpload_0110222',
                        type: 'StdUpload',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ margin: '0px 12px 0px 0px' }}
                      onFinishUpload={(
                        file: any,
                        fileList: any,
                        fileResponseList: any,
                        fileId: any,
                        fileSize: any,
                        fileName: any,
                        fileResponse: any,
                      ) => {
                        const eventDatasetLoading135: any = [
                          {
                            type: 'setLoading',
                            dataId: 168802949024207400,
                            options: {
                              compId: 'Table_8475669',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '4156928',
                              loading: true,
                            },
                            line_number: 1,
                          },
                        ];
                        eventDatasetLoading135.params =
                          [
                            {
                              title: '文件对象',
                              name: 'file',
                              value: '$file$',
                              attrType: 'object',
                            },
                            {
                              title: '上传信息列表',
                              name: 'fileList',
                              value: '$fileList$',
                            },
                            {
                              title: '文件列表',
                              name: 'fileResponseList',
                              value: '$fileResponseList$',
                            },
                            {
                              title: '文件ID',
                              name: 'fileId',
                              value: '$file?.response?.resultObject?.fileId$',
                            },
                            {
                              title: '文件大小',
                              name: 'fileSize',
                              value: '$file?.size$',
                            },
                            {
                              title: '文件名称',
                              name: 'fileName',
                              value: '$file?.name$',
                            },
                            {
                              title: '响应信息',
                              name: 'fileResponse',
                              value: '$file?.response$',
                              attrType: 'object',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatasetLoading135,
                          {
                            file,
                            fileList,
                            fileResponseList,
                            fileId,
                            fileSize,
                            fileName,
                            fileResponse,
                          },
                          'setLoading',
                          {
                            id: 'setLoading',
                            name: 'setLoading',
                            type: 'setLoading',
                            platform: 'pc',
                          },
                        );
                        const eventDataapiRequest695: any = [
                          {
                            type: 'apiRequest',
                            dataId: 168802948452209250,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '259096',
                              pageJsonId: '4868135',
                              sync: false,
                              actionTitle: '',
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'dcOaUserRelTemplateImport',
                              _apiCode: 'dcOaUserRelTemplateImport',
                              _source: 'rhin',
                              _sourceName: 'BOP工号信息批导模板导入-hyj',
                              _serviceId: '991627687288299520',
                              _serviceTitle:
                                'BOP工号信息批导模板导入-hyj: dcOaUserRelTemplateImport',
                              valueType: 'object',
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
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-0',
                                      id: 'root.header',
                                      dataKey: '259096_root.header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'root.path',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-1',
                                      id: 'root.path',
                                      dataKey: '259096_root.path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'root.query',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-2',
                                      id: 'root.query',
                                      dataKey: '259096_root.query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'fileCode',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'root.body.fileCode',
                                          compType: 'Input',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                          id: 'root.body.fileCode',
                                          dataKey: '259096_root.body.fileCode',
                                          value: {
                                            type: [
                                              'context',
                                              '$file?.response?.resultObject?.fileId$',
                                            ],
                                            code: '',
                                          },
                                        },
                                      ],
                                      _id: 'root.body',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-3',
                                      id: 'root.body',
                                      dataKey: '259096_root.body',
                                    },
                                  ],
                                  _id: 'root',
                                  compType: 'Input',
                                  isRoot: true,
                                  parents: [],
                                  key: '0',
                                  id: 'root',
                                  dataKey: '259096_root',
                                },
                              ],
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'setLoading',
                                dataId: 168802948452277470,
                                options: {
                                  compId: 'Table_8475669',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '072229',
                                  loading: false,
                                },
                                line_number: 3,
                              },
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '369938',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_259096?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168802948452212220,
                                elseIfs: [],
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 168802948452288400,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '261528',
                                      pageJsonId: '4868135',
                                      customFuncName: 'refreshBOPTable',
                                    },
                                    line_number: 5,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'showMessage',
                                    dataId: 168802948452215140,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '021304',
                                      pageJsonId: '4868135',
                                      type: 'success',
                                      value: '导入成功！',
                                    },
                                    line_number: 6,
                                  },
                                ],
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 168802948452260580,
                                options: {
                                  compId: 'Table_8475669',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '496474',
                                  loading: false,
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ];
                        eventDataapiRequest695.params =
                          [
                            {
                              title: '文件对象',
                              name: 'file',
                              value: '$file$',
                              attrType: 'object',
                            },
                            {
                              title: '上传信息列表',
                              name: 'fileList',
                              value: '$fileList$',
                            },
                            {
                              title: '文件列表',
                              name: 'fileResponseList',
                              value: '$fileResponseList$',
                            },
                            {
                              title: '文件ID',
                              name: 'fileId',
                              value: '$file?.response?.resultObject?.fileId$',
                            },
                            {
                              title: '文件大小',
                              name: 'fileSize',
                              value: '$file?.size$',
                            },
                            {
                              title: '文件名称',
                              name: 'fileName',
                              value: '$file?.name$',
                            },
                            {
                              title: '响应信息',
                              name: 'fileResponse',
                              value: '$file?.response$',
                              attrType: 'object',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDataapiRequest695,
                          {
                            file,
                            fileList,
                            fileResponseList,
                            fileId,
                            fileSize,
                            fileName,
                            fileResponse,
                          },
                          'apiRequest',
                          {
                            id: 'apiRequest',
                            name: 'apiRequest',
                            type: 'apiRequest',
                            platform: 'pc',
                          },
                        );
                      }}
                      onListenUploading={(
                        file: any,
                        fileList: any,
                        fileResponseList: any,
                        fileId: any,
                        fileSize: any,
                        fileName: any,
                        fileResponse: any,
                      ) => {
                        const eventDatacustomActionCode434: any = [
                          {
                            type: 'customActionCode',
                            dataId: 167636892586284600,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '450905',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacustomActionCode434.params =
                          [
                            {
                              title: '文件对象',
                              name: 'file',
                              value: '$file$',
                              attrType: 'object',
                            },
                            {
                              title: '上传信息列表',
                              name: 'fileList',
                              value: '$fileList$',
                            },
                            {
                              title: '文件列表',
                              name: 'fileResponseList',
                              value: '$fileResponseList$',
                            },
                            {
                              title: '文件ID',
                              name: 'fileId',
                              value: '$file?.response?.resultObject?.fileId$',
                            },
                            {
                              title: '文件大小',
                              name: 'fileSize',
                              value: '$file?.size$',
                            },
                            {
                              title: '文件名称',
                              name: 'fileName',
                              value: '$file?.name$',
                            },
                            {
                              title: '响应信息',
                              name: 'fileResponse',
                              value: '$file?.response$',
                              attrType: 'object',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacustomActionCode434,
                          {
                            file,
                            fileList,
                            fileResponseList,
                            fileId,
                            fileSize,
                            fileName,
                            fileResponse,
                          },
                          'customActionCode',
                          {
                            id: 'customActionCode',
                            name: 'customActionCode',
                            type: 'customActionCode',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'StdUpload_0110222')
                      }
                      {...injectData}
                    />
                    <Button
                      name={'新增'}
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
                        id: 'Button_302831',
                        uid: 'Button_302831',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 0px 0px 12px',
                      }}
                      onClick={(e: any) => {
                        const eventDatashowCustomModal55: any = [
                          {
                            type: 'showCustomModal',
                            dataId: 167894576003617570,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '522562',
                              pageJsonId: '4868135',
                              modalname: '/xinzengOAguanliandeBOPzhanghao2088',
                              pageId: '990908752946978816',
                              paramsObj: {
                                usrKey: '$data.local_vars.row_usr_key$',
                                oaUserId: '$data.local_vars.row_usr_login$',
                              },
                              paramsObjKeyValueMap: {
                                usrKey: '$data.local_vars.row_usr_key$',
                                oaUserId: '$data.local_vars.row_usr_login$',
                              },
                              modalPath: '/xinzengOAguanliandeBOPzhanghao2088',
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 168785878506683170,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '0877102',
                                  pageJsonId: '4868135',
                                  value: ['弹窗返回参数：', '$okData_522562$'],
                                },
                                line_number: 2,
                              },
                              {
                                type: 'customActionCode',
                                dataId: 168785867918310300,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '5275174',
                                  pageJsonId: '4868135',
                                  code: 'function main(data,state,success,fail){var res=okData_522562;var userId=res.userId;var oaUserId=data.local_vars.row_usr_login;success({userId:userId,oaUserId:oaUserId})};',
                                },
                                line_number: 3,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ];
                        eventDatashowCustomModal55.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatashowCustomModal55,
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
                      ref={(r: any) => refs.setComponentRef(r, 'Button_302831')}
                      {...injectData}
                    />
                  </View>
                </View>
                <Table
                  name={'关联BOP表格'}
                  isFlexColumn={false}
                  extendNum={3}
                  adjustModel={'auto'}
                  pageSize={5}
                  current={
                    data?.qryBopUserIdByOaUserIdPage?.resultData?.current
                  }
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
                      title: 'BOP工号',
                      key: 'userId',
                      dataIndex: 'userId',
                      className: '',
                      id: '3816389',
                      align: 'center',
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
                      title: 'BOP用户名称',
                      key: 'userName',
                      dataIndex: 'userName',
                      className: 'divider',
                      id: '62545',
                      align: 'left',
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
                  customNum={3}
                  rowKey={'oaId'}
                  dataSource={
                    data?.qryBopUserIdByOaUserIdPage?.resultData?.records
                  }
                  fieldName={'current'}
                  total={data?.qryBopUserIdByOaUserIdPage?.resultData?.total}
                  rowActions={[
                    {
                      title: '删除',
                      iconPos: 'left',
                      icon: { theme: 'outlined', type: 'delete' },
                      type: 'delete',
                      id: '171912',
                      checked: true,
                    },
                  ]}
                  extend={[]}
                  dataSourceFromDataSourceConfig={
                    'data.qryBopUserIdByOaUserIdPage.resultData.records'
                  }
                  $$componentItem={{
                    id: 'Table_4663683',
                    uid: 'Table_4663683',
                    type: 'Table',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  onPageChange={(page: any, pageSize: any) => {
                    const eventDatasetLoading136: any = [
                      {
                        type: 'setLoading',
                        dataId: 168785556849107000,
                        options: {
                          compId: 'Table_4663683',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Table',
                          id: '4653715',
                          loading: true,
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetLoading136.params =
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
                      eventDatasetLoading136,
                      { page, pageSize },
                      'setLoading',
                      {
                        id: 'setLoading',
                        name: 'setLoading',
                        type: 'setLoading',
                        platform: 'pc',
                      },
                    );
                    const eventDatareloadDataSource72: any = [
                      {
                        type: 'reloadDataSource',
                        dataId: 168785557687658020,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '331757',
                          pageJsonId: '4868135',
                          dataSourceId: 168785438790334820,
                          dataSourceName: 'qryBopUserIdByOaUserIdPage',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '973192',
                              code: 'header',
                              name: '请求头参数',
                              type: 'object',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8256182',
                              code: 'path',
                              name: '请求路径参数',
                              type: 'object',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '684327',
                              code: 'query',
                              name: 'URL 参数',
                              type: 'object',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '567351',
                              code: 'body',
                              name: '请求体',
                              type: 'object',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              children: [
                                {
                                  attrId: '873181',
                                  code: 'pageSize',
                                  name: '新增节点',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '5' },
                                  value: {
                                    type: ['context', '$pageSize$'],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '1052573',
                                  code: 'pageNum',
                                  name: '新增节点',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '1' },
                                  value: {
                                    type: ['context', '$page$'],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '396546',
                                  code: 'oaUserId',
                                  name: 'OA工号',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['datasource', 'local_vars', 'data'],
                                    code: 'row_usr_login',
                                  },
                                },
                                {
                                  attrId: '988078',
                                  code: 'userId',
                                  name: 'BOP工号',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  value: {
                                    type: [
                                      'form',
                                      'Form_635031',
                                      'getFieldsValue',
                                    ],
                                    code: 'userId',
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
                            dataId: 168785566667602500,
                            options: {
                              compId: 'Table_4663683',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '3116103',
                              loading: false,
                            },
                            line_number: 3,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 16878556683364696,
                            options: {
                              compId: 'Table_4663683',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Table',
                              id: '249153',
                              loading: false,
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ];
                    eventDatareloadDataSource72.params =
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
                      eventDatareloadDataSource72,
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
                    const eventDatacustomActionCode435: any = [
                      {
                        type: 'customActionCode',
                        dataId: 168792307599102500,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '261441',
                          pageJsonId: '4868135',
                          code: 'function main(data,state,success,fail){var oaId=row.oaId;success([oaId])};',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 168792313236180260,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '55872',
                              pageJsonId: '4868135',
                              sync: false,
                              actionTitle: '',
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'delDcOaUserRelBatch',
                              _apiCode: 'delDcOaUserRelBatch',
                              _source: 'rhin',
                              _sourceName: '批量删除OA与BOP关联关系-hyj',
                              _serviceId: '991183750441918464',
                              _serviceTitle:
                                '批量删除OA与BOP关联关系-hyj: delDcOaUserRelBatch',
                              valueType: 'object',
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
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-0',
                                      id: 'root.header',
                                      dataKey: '55872_root.header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'root.path',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-1',
                                      id: 'root.path',
                                      dataKey: '55872_root.path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'root.query',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-2',
                                      id: 'root.query',
                                      dataKey: '55872_root.query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'oaIds',
                                          attrType: 'fieldArray',
                                          mustFlag: 'F',
                                          children: [
                                            {
                                              code: 'listItem',
                                              name: '列表元素',
                                              attrType: 'field',
                                              type: 'object',
                                              _id: 'root.body.oaIds.listItem',
                                              compType: 'Input',
                                              parents: [
                                                'root',
                                                'body',
                                                'oaIds',
                                              ],
                                              parentType: 'fieldArray',
                                              parentKey: '0-3-0',
                                              key: '0-3-0-0',
                                              parentCode: 'oaIds',
                                              id: 'root.body.oaIds.listItem',
                                              dataKey:
                                                '55872_root.body.oaIds.listItem',
                                            },
                                          ],
                                          _id: 'root.body.oaIds',
                                          compType: 'Input',
                                          name: 'oaIds',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                          id: 'root.body.oaIds',
                                          dataKey: '55872_root.body.oaIds',
                                          value: {
                                            type: ['context', '$data_261441$'],
                                            code: '',
                                          },
                                        },
                                      ],
                                      _id: 'root.body',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-3',
                                      id: 'root.body',
                                      dataKey: '55872_root.body',
                                    },
                                  ],
                                  _id: 'root',
                                  compType: 'Input',
                                  isRoot: true,
                                  parents: [],
                                  key: '0',
                                  id: 'root',
                                  dataKey: '55872_root',
                                },
                              ],
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '5777516',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_55872.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 168793327057248540,
                                elseIfs: [],
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 168793328950237800,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '09975025',
                                      pageJsonId: '4868135',
                                      type: 'success',
                                      value: '删除成功！',
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 169304328274999580,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '039827',
                                      pageJsonId: '4868135',
                                      customFuncName: 'refreshBOPTable',
                                    },
                                    line_number: 5,
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
                    eventDatacustomActionCode435.params =
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
                      eventDatacustomActionCode435,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Table_4663683')}
                  {...injectData}
                />
              </TabPane>
            </Tabs>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(OaUserManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
