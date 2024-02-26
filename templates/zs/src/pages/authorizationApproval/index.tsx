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
  Select,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '993406268634288128';
const AuthorizationApproval$$Page: React.FC<PageProps> = ({
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
    const eventDatasetLoading14: any = [
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
    eventDatasetLoading14.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading14, { options_635272 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource9: any = [
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
        line_number: 2,
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
            line_number: 3,
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
            type: 'clearTableSelected',
            dataId: 170599654002115140,
            options: {
              compId: 'Table_8475669',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '577705',
            },
            line_number: 6,
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
            line_number: 7,
          },
        ],
      },
    ];
    eventDatareloadDataSource9.params =
      [
        {
          title: '事件入参',
          name: 'options_635272',
          value: '$options_635272$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource9,
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
  const refreshAuthorizationApproval = (options_401291: any) => {
    const eventDatareloadDataSource10: any = [
      {
        type: 'reloadDataSource',
        dataId: 168871458737853500,
        shielding: true,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '656969',
          pageJsonId: '4868135',
          dataSourceId: 168871286749998180,
          dataSourceName: 'qryDcImpowerApprovalPageByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '4005233',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '2679577',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '60055',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '329664',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '1907759',
                  code: 'catalogName',
                  name: '类目名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_1830854', 'getFieldsValue'],
                    code: 'catalogName',
                  },
                },
                {
                  attrId: '059985',
                  code: 'usrFirstName',
                  name: '被授权人姓名',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_1830854', 'getFieldsValue'],
                    code: 'usrFirstName',
                  },
                },
                {
                  attrId: '302226',
                  code: 'pageNum',
                  name: '页码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
                {
                  attrId: '58584',
                  code: 'pageSize',
                  name: '每页数量',
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
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource10.params =
      [
        {
          title: '事件入参',
          name: 'options_401291',
          value: '$options_401291$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource10,
      { options_401291 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatareloadDataSource11: any = [
      {
        type: 'reloadDataSource',
        dataId: 168895211690018140,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '3908462',
          pageJsonId: '4868135',
          dataSourceId: 168871286749998180,
          dataSourceName: 'qryDcImpowerApprovalPageByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '4005233',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'header',
            },
            {
              attrId: '2679577',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'path',
            },
            {
              attrId: '60055',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'query',
            },
            {
              attrId: '329664',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '1907759',
                  code: 'catalogName',
                  name: '类目名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.catalogName',
                  value: {
                    type: ['form', 'Form_8509595', 'getFieldsValue'],
                    code: 'catalogName',
                  },
                },
                {
                  attrId: '059985',
                  code: 'usrFirstName',
                  name: '被授权人姓名',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.usrFirstName',
                  value: {
                    type: ['form', 'Form_8509595', 'getFieldsValue'],
                    code: 'usrFirstName',
                  },
                },
                {
                  attrId: '302226',
                  code: 'pageNum',
                  name: '页码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.pageNum',
                },
                {
                  attrId: '58584',
                  code: 'pageSize',
                  name: '每页数量',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.pageSize',
                },
                {
                  attrId: '9895996',
                  code: 'delegatedCode',
                  name: '授权人编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.delegatedCode',
                  value: {
                    type: ['context', '$options_401291$'],
                    code: 'delegatedCode',
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
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource11.params =
      [
        {
          title: '事件入参',
          name: 'options_401291',
          value: '$options_401291$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource11,
      { options_401291 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    ); // console 168895215007963300
    console.log(options_401291.delegatedCode);
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refreshUserTable,
    refreshAuthorizationApproval,
  }));

  useEffect(() => {
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
              name={'授权审批'}
              cardIconType={'middle'}
              title={'授权审批'}
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
                const forms39 = getFormByCompId('Form_31_1121_054627', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms39) ? forms39 : [forms39]).forEach((form) =>
                  form?.resetFields(),
                );
                const eventDatasetDisable78: any = [
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
                eventDatasetDisable78.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(eventDatasetDisable78, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable79: any = [
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
                        'Form_493328_308943',
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
                        'Form_493328_308943',
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
                eventDatasetDisable79.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(eventDatasetDisable79, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetActiveTabPane2: any = [
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
                eventDatasetActiveTabPane2.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(
                  eventDatasetActiveTabPane2,
                  { e },
                  'setActiveTabPane',
                  {
                    id: 'setActiveTabPane',
                    name: 'setActiveTabPane',
                    type: 'setActiveTabPane',
                    platform: 'pc',
                  },
                );
                const eventDatasetValue27: any = [
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
                eventDatasetValue27.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(eventDatasetValue27, { e }, 'setValue', {
                  id: 'setValue',
                  name: 'setValue',
                  type: 'setValue',
                  platform: 'pc',
                });
              }}
              onClickBtn2={(e: any) => {
                const eventDatagetTableSelectedKey29: any = [
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
                eventDatagetTableSelectedKey29.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(
                  eventDatagetTableSelectedKey29,
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
                    const eventDatacallSelfFunc280: any = [
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
                    eventDatacallSelfFunc280.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc280,
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
                    const eventDatacallSelfFunc281: any = [
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
                    eventDatacallSelfFunc281.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc281,
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
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_1193615')}
                  {...injectData}
                />
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
                    const eventDatacallSelfFunc282: any = [
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
                    eventDatacallSelfFunc282.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc282,
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
                  dataSource={[
                    { id: '189377', label: 'OA', value: 'OA' },
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
                      const eventDatacallSelfFunc283: any = [
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
                      eventDatacallSelfFunc283.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc283,
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
                      const forms41 = getFormByCompId(
                        'Form_148709_504968',
                        refs,
                      );
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms41) ? forms41 : [forms41]).forEach(
                        (form) => form?.resetFields(),
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
                    dataIndex: 'usrCreate',
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
                rowActions={[]}
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
                  const eventDatacustomActionCode443: any = [
                    {
                      type: 'customActionCode',
                      dataId: 168791644769990620,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '74135275',
                        pageJsonId: '4868135',
                        code: 'function main(data,state,success,fail){var item={usrKey:row.usrKey,usrStatus:"Inactive"};success([item])};',
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
                                  type: 'apiRequest',
                                  dataId: 168793368762286500,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '916367',
                                    pageJsonId: '4868135',
                                    sync: false,
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode: 'delDcOaUserRelByOaUserId',
                                    _apiCode: 'delDcOaUserRelByOaUserId',
                                    _source: 'rhin',
                                    _sourceName:
                                      '根据OA工号删除对应的BOP关联关系-hyj',
                                    _serviceId: '991228082817523712',
                                    _serviceTitle:
                                      '根据OA工号删除对应的BOP关联关系-hyj: delDcOaUserRelByOaUserId',
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
                                            dataKey: '916367_root.header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            children: [
                                              {
                                                code: 'oaUserId',
                                                name: '新增节点',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'T',
                                                defaultValue: '',
                                                _id: 'root.path.oaUserId',
                                                compType: 'Input',
                                                parents: ['root', 'path'],
                                                parentType: 'object',
                                                parentKey: '0-1',
                                                key: '0-1-0',
                                                id: 'root.path.oaUserId',
                                                dataKey:
                                                  '916367_root.path.oaUserId',
                                                value: {
                                                  type: ['context', '$row$'],
                                                  hideAttr: false,
                                                  code: 'usrLogin',
                                                },
                                              },
                                            ],
                                            _id: 'root.path',
                                            compType: 'Input',
                                            parents: ['root'],
                                            parentType: 'object',
                                            parentKey: '0',
                                            key: '0-1',
                                            id: 'root.path',
                                            dataKey: '916367_root.path',
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
                                            dataKey: '916367_root.query',
                                          },
                                          {
                                            code: 'body',
                                            name: '请求体',
                                            attrType: 'object',
                                            _id: 'root.body',
                                            compType: 'Input',
                                            parents: ['root'],
                                            parentType: 'object',
                                            parentKey: '0',
                                            key: '0-3',
                                            id: 'root.body',
                                            dataKey: '916367_root.body',
                                          },
                                        ],
                                        _id: 'root',
                                        compType: 'Input',
                                        isRoot: true,
                                        parents: [],
                                        key: '0',
                                        id: 'root',
                                        dataKey: '916367_root',
                                      },
                                    ],
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '2939796',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context:
                                              '$reply_916367?.resultCode$',
                                            operate: '==',
                                            manualValue: '0',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 168793372404714700,
                                      elseIfs: [],
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'showMessage',
                                          dataId: 168793374586563520,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '67640795',
                                            pageJsonId: '4868135',
                                            type: 'success',
                                            value: '删除成功！',
                                          },
                                          line_number: 6,
                                        },
                                        {
                                          type: 'callSelfFunc',
                                          dataId: 168793375344340400,
                                          options: {
                                            compId: 'callSelfFunc',
                                            compName: 'system',
                                            id: '1756786',
                                            pageJsonId: '4868135',
                                            customFuncName: 'refreshUserTable',
                                            customFuncParams: 'object',
                                          },
                                          line_number: 7,
                                          callback1: [],
                                          callback2: [],
                                        },
                                        {
                                          type: 'setDisable',
                                          dataId: 168793375836204960,
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
                                              'Button_578183',
                                              'Button_789349',
                                              'Form_635031',
                                              'Button_302831',
                                            ],
                                            compLib: 'comm',
                                            pageJsonId: '4868135',
                                            compName: 'Form',
                                            id: '29917',
                                            disabled: 'true',
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
                                              'Button_578183',
                                              'Button_789349',
                                              'Form_635031',
                                              'Button_302831',
                                            ],
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
                          ],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode443.params =
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
                    eventDatacustomActionCode443,
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
                  const eventDatasetLoading149: any = [
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
                  eventDatasetLoading149.params =
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
                    eventDatasetLoading149,
                    { page, pageSize },
                    'setLoading',
                    {
                      id: 'setLoading',
                      name: 'setLoading',
                      type: 'setLoading',
                      platform: 'pc',
                    },
                  );
                  const eventDatareloadDataSource76: any = [
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
                  eventDatareloadDataSource76.params =
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
                    eventDatareloadDataSource76,
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
                  const eventDatashowCustomModal56: any = [
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
                  eventDatashowCustomModal56.params =
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
                    eventDatashowCustomModal56,
                    { rowId, row, index },
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource89: any = [
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
                  eventDatasetDataSource89.params =
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
                    eventDatasetDataSource89,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetCurrentFormValues12: any = [
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
                  eventDatasetCurrentFormValues12.params =
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
                    eventDatasetCurrentFormValues12,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable80: any = [
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
                  eventDatasetDisable80.params =
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
                    eventDatasetDisable80,
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
                  const eventDatasetDataSource90: any = [
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
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 168861156200223400,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '885438',
                            pageJsonId: '4868135',
                            value: ['$data.local_vars$'],
                          },
                          line_number: 2,
                        },
                        {
                          type: 'reloadDataSource',
                          dataId: 168887151264090100,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '492146',
                            pageJsonId: '4868135',
                            dataSourceId: 168871286749998180,
                            dataSourceName: 'qryDcImpowerApprovalPageByReq',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '4005233',
                                code: 'header',
                                name: '请求头参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'header',
                                _codePath: ['header'],
                                _idpath: ['4005233'],
                              },
                              {
                                attrId: '2679577',
                                code: 'path',
                                name: '请求路径参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'path',
                                _codePath: ['path'],
                                _idpath: ['2679577'],
                              },
                              {
                                attrId: '60055',
                                code: 'query',
                                name: 'URL 参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'query',
                                _codePath: ['query'],
                                _idpath: ['60055'],
                              },
                              {
                                attrId: '329664',
                                code: 'body',
                                name: '请求体',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                children: [
                                  {
                                    attrId: '1907759',
                                    code: 'catalogName',
                                    name: '类目名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.catalogName',
                                    _codePath: ['body', 'catalogName'],
                                    _idpath: ['329664', '1907759'],
                                  },
                                  {
                                    attrId: '059985',
                                    code: 'usrFirstName',
                                    name: '被授权人姓名',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.usrFirstName',
                                    _codePath: ['body', 'usrFirstName'],
                                    _idpath: ['329664', '059985'],
                                  },
                                  {
                                    attrId: '302226',
                                    code: 'pageNum',
                                    name: '页码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.pageNum',
                                    _codePath: ['body', 'pageNum'],
                                    _idpath: ['329664', '302226'],
                                  },
                                  {
                                    attrId: '58584',
                                    code: 'pageSize',
                                    name: '每页数量',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.pageSize',
                                    _codePath: ['body', 'pageSize'],
                                    _idpath: ['329664', '58584'],
                                  },
                                  {
                                    attrId: '9895996',
                                    code: 'delegatedCode',
                                    name: '授权人编码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: {
                                      type: [
                                        'datasource',
                                        'local_vars',
                                        'data',
                                      ],
                                      code: 'row_usr_login',
                                    },
                                    key: 'body.delegatedCode',
                                    _codePath: ['body', 'delegatedCode'],
                                    _idpath: ['329664', '9895996'],
                                  },
                                ],
                                key: 'body',
                                _codePath: ['body'],
                                _idpath: ['329664'],
                              },
                            ],
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource90.params =
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
                    eventDatasetDataSource90,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetCurrentFormValues13: any = [
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
                      line_number: 4,
                    },
                  ];
                  eventDatasetCurrentFormValues13.params =
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
                    eventDatasetCurrentFormValues13,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatasetActiveTabPane3: any = [
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
                  eventDatasetActiveTabPane3.params =
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
                    eventDatasetActiveTabPane3,
                    { rowId, row, index },
                    'setActiveTabPane',
                    {
                      id: 'setActiveTabPane',
                      name: 'setActiveTabPane',
                      type: 'setActiveTabPane',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource91: any = [
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
                  eventDatasetDataSource91.params =
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
                    eventDatasetDataSource91,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetCurrentFormValues14: any = [
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
                  eventDatasetCurrentFormValues14.params =
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
                    eventDatasetCurrentFormValues14,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable81: any = [
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
                        ],
                      },
                      line_number: 14,
                    },
                  ];
                  eventDatasetDisable81.params =
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
                    eventDatasetDisable81,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasysSetDisable4: any = [
                    {
                      type: 'sysSetDisable',
                      dataId: 168791882963201280,
                      options: {
                        compId: ['Select_551558'],
                        compName: 'page',
                        id: '79457173',
                        pageJsonId: '4868135',
                        disabled: 'true',
                        compid: ['Select_551558'],
                      },
                      line_number: 15,
                    },
                  ];
                  eventDatasysSetDisable4.params =
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
                    eventDatasysSetDisable4,
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
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_1715415',
              uid: 'View_1715415',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_1715415')}
            {...injectData}
          >
            <Card
              name={'授权审批信息配置'}
              cardIconType={'middle'}
              extendNum={3}
              title={'授权审批信息配置'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
              extend={[
                {
                  id: '9457032',
                  title: '  新增  ',
                  iconPos: 'right',
                  btnType: 'primary',
                },
                { id: '198602', title: '批量删除', iconPos: 'right' },
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
                id: 'Card_341811',
                uid: 'Card_341811',
                type: 'Card',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.local_vars?.row_usr_login != null,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.local_vars?.row_usr_login != null,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.local_vars?.row_usr_login != null,
                  1,
                  2,
                )}` === '4'
              }
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              onClickBtn1={(e: any) => {
                const eventDatashowCustomModal57: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 168914299215039870,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '94131006',
                      pageJsonId: '4868135',
                      modalname: '/authorizationApprovalPopup',
                      pageId: '993430674647535616',
                      modalPath: '/authorizationApprovalPopup',
                      paramsObj: {
                        authorizedPersonInfo: '$data.local_vars$',
                        bizData:
                          '$data.qryDcImpowerApprovalPageByReq.resultData.records$',
                      },
                      paramsObjKeyValueMap: {
                        bizData:
                          '$data.qryDcImpowerApprovalPageByReq.resultData.records$',
                        authorizedPersonInfo: '$data.local_vars$',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal57.params =
                  [{ title: '  新增  点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(
                  eventDatashowCustomModal57,
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
                const eventDatagetTableSelectedKey30: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 168914301990800600,
                    options: {
                      compId: 'Table_204147',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Table',
                      id: '2415124',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 168914301990831800,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '023853',
                          pageJsonId: '4868135',
                          value: ['$selectedRowKeys_2415124$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 168914301990821570,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '288064',
                          pageJsonId: '4868135',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'delDcImpowerApproval',
                          _apiCode: 'delDcImpowerApproval',
                          _source: 'rhin',
                          _sourceName: '删除授权审批数据',
                          _serviceId: '994526004395020288',
                          _serviceTitle:
                            '删除授权审批数据: delDcImpowerApproval',
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
                                  dataKey: '077582_root.header',
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
                                  dataKey: '077582_root.path',
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
                                  dataKey: '077582_root.query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'impowerIds',
                                      attrType: 'fieldArray',
                                      mustFlag: 'F',
                                      children: [
                                        {
                                          code: 'listItem',
                                          name: '列表元素',
                                          attrType: 'field',
                                          type: 'object',
                                          _id: 'root.body.impowerIds.listItem',
                                          compType: 'Input',
                                          parents: [
                                            'root',
                                            'body',
                                            'impowerIds',
                                          ],
                                          parentType: 'fieldArray',
                                          parentKey: '0-3-0',
                                          key: '0-3-0-0',
                                          parentCode: 'impowerIds',
                                          id: 'root.body.impowerIds.listItem',
                                          dataKey:
                                            '077582_root.body.impowerIds.listItem',
                                        },
                                      ],
                                      _id: 'root.body.impowerIds',
                                      compType: 'Input',
                                      name: 'impowerIds',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.impowerIds',
                                      dataKey: '077582_root.body.impowerIds',
                                      value: {
                                        type: [
                                          'context',
                                          '$selectedRowKeys_2415124$',
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
                                  dataKey: '077582_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '077582_root',
                            },
                          ],
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 168914301990878560,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '646659',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshAuthorizationApproval',
                              customFuncParams: 'object',
                              paramsObj: {
                                delegatedCode:
                                  '$data.local_vars.row_usr_login$',
                              },
                              paramsObjKeyValueMap: {
                                delegatedCode:
                                  '$data.local_vars.row_usr_login$',
                              },
                            },
                            line_number: 4,
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
                eventDatagetTableSelectedKey30.params =
                  [{ title: '批量删除点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(
                  eventDatagetTableSelectedKey30,
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_341811')}
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_209956',
                  uid: 'View_209956',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={
                  `${functorsMap?.IF(
                    data?.local_vars?.row_usr_login != null,
                    1,
                    2,
                  )}` === '3'
                }
                visible={
                  `${functorsMap?.IF(
                    data?.local_vars?.row_usr_login != null,
                    1,
                    2,
                  )}` !== '2'
                }
                readOnly={
                  `${functorsMap?.IF(
                    data?.local_vars?.row_usr_login != null,
                    1,
                    2,
                  )}` === '4'
                }
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  height: '30%',
                  width: '100%',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_209956')}
                {...injectData}
              >
                <Form
                  name={'授权审批'}
                  colSpan={8}
                  labelCol={'6'}
                  wrapperCol={18}
                  colon={true}
                  layout={'horizontal'}
                  labelAlign={'right'}
                  header={'标题'}
                  colSpace={0}
                  rowSpace={16}
                  formCode={'Form_1830854'}
                  $$componentItem={{
                    id: 'Form_8509595',
                    uid: 'Form_8509595',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 5px 0px' }}
                  ref={(r: any) => refs.setComponentRef(r, 'Form_8509595')}
                  {...injectData}
                >
                  <Input
                    name={'审批场景'}
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
                    fieldName={'catalogName'}
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
                      id: 'Input_666461',
                      uid: 'Input_666461',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    style={{ marginBottom: '7px' }}
                    onPressEnter={(e: any) => {
                      const eventDatacallSelfFunc288: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 168871479027178900,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '287465',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshAuthorizationApproval',
                            customFuncParams: 'object',
                            paramsObj: {
                              delegatedCode: '$data.local_vars.row_usr_login$',
                            },
                            paramsObjKeyValueMap: {
                              delegatedCode: '$data.local_vars.row_usr_login$',
                            },
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc288.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc288,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Input_666461')}
                    {...injectData}
                  />
                  <Input
                    name={'被授权人'}
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
                    fieldName={'usrFirstName'}
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
                      id: 'Input_008044298',
                      uid: 'Input_008044298',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onPressEnter={(e: any) => {
                      const eventDatacallSelfFunc289: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 168914966290421380,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '995169',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshAuthorizationApproval',
                            customFuncParams: 'object',
                            paramsObj: {
                              delegatedCode: '$data.local_vars.row_usr_login$',
                            },
                            paramsObjKeyValueMap: {
                              delegatedCode: '$data.local_vars.row_usr_login$',
                            },
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc289.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc289,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Input_008044298')}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_3866124',
                      uid: 'View_3866124',
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
                      height: '1000%',
                      overflowY: 'auto',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_3866124')}
                    {...injectData}
                  >
                    <Button
                      name={'查询'}
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
                        id: 'Button_1432671',
                        uid: 'Button_1432671',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ width: 'fit-content' }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc290: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 168871482254397800,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '49385974',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshAuthorizationApproval',
                              customFuncParams: 'object',
                              paramsObj: {
                                delegatedCode:
                                  '$data.local_vars.row_usr_login$',
                              },
                              paramsObjKeyValueMap: {
                                delegatedCode:
                                  '$data.local_vars.row_usr_login$',
                              },
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc290.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc290,
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
                        refs.setComponentRef(r, 'Button_1432671')
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
                        id: 'Button_19651206',
                        uid: 'Button_19651206',
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
                        const forms43 = getFormByCompId('Form_8509595', refs);
                        // 支持循环容器中的表单重置
                        (Array.isArray(forms43) ? forms43 : [forms43]).forEach(
                          (form) => form?.resetFields(),
                        );
                        const eventDatacallSelfFunc291: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 168914469979717200,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '34543007',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshAuthorizationApproval',
                              customFuncParams: 'object',
                              paramsObj: {
                                delegatedCode:
                                  '$data.local_vars.row_usr_login$',
                              },
                              paramsObjKeyValueMap: {
                                delegatedCode:
                                  '$data.local_vars.row_usr_login$',
                              },
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc291.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc291,
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
                        refs.setComponentRef(r, 'Button_19651206')
                      }
                      {...injectData}
                    />
                  </View>
                </Form>
                <Table
                  name={'表格'}
                  isFlexColumn={false}
                  extendNum={3}
                  adjustModel={'auto'}
                  pageSize={5}
                  current={data?.qryDcImpowerApprovalPageByReq?.current}
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
                      title: '审批场景',
                      key: 'catalogName',
                      dataIndex: 'catalogName',
                      className: '',
                      id: '214265',
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
                      title: '被授权人工号',
                      key: 'delegatedPowerCode',
                      dataIndex: 'delegatedPowerCode',
                      className: 'divider',
                      id: '2942144',
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
                      title: '被授权人姓名',
                      key: 'usrLastName',
                      dataIndex: 'usrLastName',
                      className: 'divider',
                      id: '6408375',
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
                      title: '被授权人组织',
                      key: 'orgName',
                      dataIndex: 'orgName',
                      className: 'divider',
                      id: '316536',
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
                      title: '被授权人等级',
                      key: 'jobLevel',
                      dataIndex: 'jobLevel',
                      className: 'divider',
                      id: '714074',
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
                      title: '被授权人手机号',
                      key: 'usrUdfMobile',
                      dataIndex: 'usrUdfMobile',
                      className: 'divider',
                      id: '0192753',
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
                      title: '授权时间',
                      key: 'createDate',
                      dataIndex: 'createDate',
                      className: 'divider',
                      id: '9636606',
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
                      key: 'createStaff',
                      dataIndex: 'createStaff',
                      className: 'divider',
                      id: '541208',
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
                      title: 'impowerId',
                      key: 'impowerId',
                      dataIndex: 'impowerId',
                      id: '45463',
                      hiddenRule: true,
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
                      title: 'sceneCode',
                      key: 'sceneCode',
                      dataIndex: 'sceneCode',
                      id: '492936',
                      hiddenRule: true,
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
                  rowSelection={{ type: 'checkbox' }}
                  showHead={false}
                  showTotal={true}
                  showSizeChanger={false}
                  showQuickJumper={true}
                  pageSizeOptions={'[5,10,20]'}
                  customNum={3}
                  formItemIndex={3}
                  rowActions={[
                    {
                      title: '修改',
                      iconPos: 'left',
                      icon: '',
                      type: 'edit',
                      id: '5341164',
                      checked: true,
                    },
                    {
                      title: '删除',
                      iconPos: 'left',
                      icon: '',
                      type: 'delete',
                      id: '4018576',
                      checked: true,
                    },
                  ]}
                  extend={[]}
                  rowKey={'impowerId'}
                  dataSource={
                    data?.qryDcImpowerApprovalPageByReq?.resultData?.records
                  }
                  fieldName={'current'}
                  total={data?.qryDcImpowerApprovalPageByReq?.total}
                  dataSourceFromDataSourceConfig={
                    'data.qryDcImpowerApprovalPageByReq.resultData.records'
                  }
                  $$componentItem={{
                    id: 'Table_204147',
                    uid: 'Table_204147',
                    type: 'Table',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  onRowEdit={(rowId: any, row: any, index: any) => {
                    // console 168871436202619870
                    console.log(row);
                    const eventDatashowCustomModal58: any = [
                      {
                        type: 'showCustomModal',
                        dataId: 168871509980179360,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '885209',
                          pageJsonId: '4868135',
                          modalname: '/authorizationApprovalPopup',
                          pageId: '993430674647535616',
                          modalPath: '/authorizationApprovalPopup',
                          paramsObj: {
                            sceneCode: 'M',
                            bizData: '$row$',
                            authorizedPersonInfo: '$data.local_vars$',
                          },
                          paramsObjKeyValueMap: {
                            sceneCode: 'M',
                            bizData: '$row$',
                            authorizedPersonInfo: '$data.local_vars$',
                          },
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatashowCustomModal58.params =
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
                      eventDatashowCustomModal58,
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
                    // console 168871936417457280
                    console.log(rowId);
                    const eventDatacustomActionCode444: any = [
                      {
                        type: 'customActionCode',
                        dataId: 168871942267006600,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '738126',
                          pageJsonId: '4868135',
                          code: 'function main(data,state,success,fail){var arr=[rowId];console.log("asdasda",arr);success(arr)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 168872276195551700,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '734922',
                              pageJsonId: '4868135',
                              sync: false,
                              actionTitle: '',
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'delDcImpowerApproval',
                              _apiCode: 'delDcImpowerApproval',
                              _source: 'rhin',
                              _sourceName: '删除授权审批数据',
                              _serviceId: '994526004395020288',
                              _serviceTitle:
                                '删除授权审批数据: delDcImpowerApproval',
                              valueType: 'object',
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
                                      dataKey: '734922_root.header',
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
                                      dataKey: '734922_root.path',
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
                                      dataKey: '734922_root.query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'impowerIds',
                                          attrType: 'fieldArray',
                                          mustFlag: 'F',
                                          children: [
                                            {
                                              code: 'listItem',
                                              name: '列表元素',
                                              attrType: 'field',
                                              type: 'object',
                                              _id: 'root.body.impowerIds.listItem',
                                              compType: 'Input',
                                              parents: [
                                                'root',
                                                'body',
                                                'impowerIds',
                                              ],
                                              parentType: 'fieldArray',
                                              parentKey: '0-3-0',
                                              key: '0-3-0-0',
                                              parentCode: 'impowerIds',
                                              id: 'root.body.impowerIds.listItem',
                                              dataKey:
                                                '734922_root.body.impowerIds.listItem',
                                            },
                                          ],
                                          _id: 'root.body.impowerIds',
                                          compType: 'Input',
                                          name: 'impowerIds',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                          id: 'root.body.impowerIds',
                                          dataKey:
                                            '734922_root.body.impowerIds',
                                          value: {
                                            type: ['context', '$data_738126$'],
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
                                      dataKey: '734922_root.body',
                                    },
                                  ],
                                  _id: 'root',
                                  compType: 'Input',
                                  isRoot: true,
                                  parents: [],
                                  key: '0',
                                  id: 'root',
                                  dataKey: '734922_root',
                                },
                              ],
                              params: 'object',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'reloadDataSource',
                                dataId: 168895540598278600,
                                options: {
                                  compId: 'reloadDataSource',
                                  compName: 'page',
                                  id: '363577',
                                  pageJsonId: '4868135',
                                  dataSourceId: 168871286749998180,
                                  dataSourceName:
                                    'qryDcImpowerApprovalPageByReq',
                                  dataSourceRelType: 'service',
                                  dataSourceReloadFilter: [
                                    {
                                      attrId: '4005233',
                                      code: 'header',
                                      name: '请求头参数',
                                      type: 'object',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      key: 'header',
                                      _codePath: ['header'],
                                      _idpath: ['4005233'],
                                    },
                                    {
                                      attrId: '2679577',
                                      code: 'path',
                                      name: '请求路径参数',
                                      type: 'object',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      key: 'path',
                                      _codePath: ['path'],
                                      _idpath: ['2679577'],
                                    },
                                    {
                                      attrId: '60055',
                                      code: 'query',
                                      name: 'URL 参数',
                                      type: 'object',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      key: 'query',
                                      _codePath: ['query'],
                                      _idpath: ['60055'],
                                    },
                                    {
                                      attrId: '329664',
                                      code: 'body',
                                      name: '请求体',
                                      type: 'object',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      children: [
                                        {
                                          attrId: '1907759',
                                          code: 'catalogName',
                                          name: '类目名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          key: 'body.catalogName',
                                          _codePath: ['body', 'catalogName'],
                                          _idpath: ['329664', '1907759'],
                                        },
                                        {
                                          attrId: '059985',
                                          code: 'usrFirstName',
                                          name: '被授权人姓名',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          key: 'body.usrFirstName',
                                          _codePath: ['body', 'usrFirstName'],
                                          _idpath: ['329664', '059985'],
                                        },
                                        {
                                          attrId: '302226',
                                          code: 'pageNum',
                                          name: '页码',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          key: 'body.pageNum',
                                          _codePath: ['body', 'pageNum'],
                                          _idpath: ['329664', '302226'],
                                        },
                                        {
                                          attrId: '58584',
                                          code: 'pageSize',
                                          name: '每页数量',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          key: 'body.pageSize',
                                          _codePath: ['body', 'pageSize'],
                                          _idpath: ['329664', '58584'],
                                        },
                                        {
                                          attrId: '9895996',
                                          code: 'delegatedCode',
                                          name: '授权人编码',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          key: 'body.delegatedCode',
                                          value: {
                                            type: [
                                              'datasource',
                                              'local_vars',
                                              'data',
                                            ],
                                            code: 'row_usr_login',
                                          },
                                          _codePath: ['body', 'delegatedCode'],
                                          _idpath: ['329664', '9895996'],
                                        },
                                      ],
                                      key: 'body',
                                      _codePath: ['body'],
                                      _idpath: ['329664'],
                                    },
                                  ],
                                  otherObjectArrayOptions: {},
                                  targetDataSourcePaths: [],
                                },
                                line_number: 4,
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
                    eventDatacustomActionCode444.params =
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
                      eventDatacustomActionCode444,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Table_204147')}
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

export default withPageHOC(AuthorizationApproval$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
