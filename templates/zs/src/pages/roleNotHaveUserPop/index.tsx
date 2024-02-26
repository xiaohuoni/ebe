// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '953566352405966848';
const RoleNotHaveUserPop$$Modal: React.FC<PageProps> = ({
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
  forwardedRef,
  parentEngineId = pageId,
}) => {
  const refreshOaUser = (options_966448: any) => {
    const eventDatasetLoading32: any = [
      {
        type: 'setLoading',
        dataId: 166262535063177400,
        options: {
          compId: 'Table_7975706_122',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Table',
          id: '628555',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading32.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading32, { options_966448 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource44: any = [
      {
        type: 'reloadDataSource',
        dataId: 166264638885886530,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '347783',
          pageJsonId: '7975706',
          dataSourceId: 167895761254530100,
          dataSourceName: 'userRolePage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '861344',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '0165915',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '477509',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '8843426',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '877341',
                  code: 'roleId',
                  name: 'roleId',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '$state.bizId$' },
                  type: 'long',
                  key: 'body.roleId',
                  value: { type: ['context', '$state.bizId$'], code: '' },
                },
                {
                  attrId: '6497384',
                  code: 'usrLogin',
                  name: 'usrLogin',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrLogin',
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644_9851280906',
                      'getFieldsValue',
                    ],
                    code: 'usrLogin',
                  },
                },
                {
                  attrId: '868988',
                  code: 'usrLastName',
                  name: 'usrLastName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrLastName',
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644_9851280906',
                      'getFieldsValue',
                    ],
                    code: 'usrLastName',
                  },
                },
                {
                  attrId: '640521',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '1' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '731681',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '5' },
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
              attrId: '177534',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '968596',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '0007097',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '22802546',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '2874973',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '29022',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '2300729',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '228299',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '370907',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '514849',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '816244',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '878643',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '52647',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '645364',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '5558706',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '461392',
                      code: 'usrUdfShortName',
                      name: 'usrUdfShortName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2689195',
                      code: 'usrStatus',
                      name: 'usrStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7227935',
                      code: 'subUsrUdfJobLevels',
                      name: 'subUsrUdfJobLevels',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8339209',
                      code: 'usrType',
                      name: 'usrType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '796243',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '081584',
                      code: 'usrEndDate',
                      name: 'usrEndDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '516835',
                      code: 'usrCreate',
                      name: 'usrCreate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4124983',
                      code: 'usrPwdResetAttemptsCtr',
                      name: 'usrPwdResetAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '176456',
                      code: 'actName',
                      name: 'actName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '248576',
                      code: 'usrProvisionedDate',
                      name: 'usrProvisionedDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '906238',
                      code: 'actUdfNum',
                      name: 'actUdfNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '18106415',
                      code: 'orgType',
                      name: 'orgType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0280834',
                      code: 'usrUdfEmployeeId',
                      name: 'usrUdfEmployeeId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3225526',
                      code: 'usrUdfBelongComp',
                      name: 'usrUdfBelongComp',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8093814',
                      code: 'subOrgNames',
                      name: 'subOrgNames',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '375408',
                      code: 'usrKey',
                      name: 'usrKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '518722',
                      code: 'usrEmpType',
                      name: 'usrEmpType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '842868',
                      code: 'usrLastName',
                      name: 'usrLastName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '840331',
                      code: 'orgName',
                      name: 'orgName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5870614',
                      code: 'usrUdfSysMask',
                      name: 'usrUdfSysMask',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '021339',
                      code: 'cardInfo',
                      name: 'cardInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '159785',
                      code: 'usrUpdate',
                      name: 'usrUpdate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '622866',
                      code: 'usrKind',
                      name: 'usrKind',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5137787',
                      code: 'usrUdfOaOrg',
                      name: 'usrUdfOaOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '04456507',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5057011',
                      code: 'usrPassword',
                      name: 'usrPassword',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5974555',
                      code: 'usrCreated',
                      name: 'usrCreated',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '249097',
                      code: 'usrUdfMgrErpOrg',
                      name: 'usrUdfMgrErpOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '435826',
                      code: 'isDefault',
                      name: 'isDefault',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '968476',
                      code: 'usrEmail',
                      name: 'usrEmail',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '773319',
                      code: 'usrLoginAttemptsCtr',
                      name: 'usrLoginAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '354942',
                      code: 'usrUdfMobile',
                      name: 'usrUdfMobile',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3025634',
                      code: 'actKey',
                      name: 'actKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '934507',
                      code: 'orgLevel',
                      name: 'orgLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3961368',
                      code: 'usrLocked',
                      name: 'usrLocked',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '035421',
                      code: 'usrUdfDepartment',
                      name: 'usrUdfDepartment',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '032921',
                      code: 'usrUdfSex',
                      name: 'usrUdfSex',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '050976',
                      code: 'usrUdfOaNum',
                      name: 'usrUdfOaNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '042098',
                      code: 'usrUdfJobLevel',
                      name: 'usrUdfJobLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '822853',
                      code: 'orgCode',
                      name: 'orgCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1873036',
                      code: 'isImportant',
                      name: 'isImportant',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '484593',
                      code: 'usrFirstName',
                      name: 'usrFirstName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '871964',
                      code: 'usrUdfIdNum',
                      name: 'usrUdfIdNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '620514',
                      code: 'orgShortName',
                      name: 'orgShortName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0304477',
                      code: 'usrChangePwdAtNextLogon',
                      name: 'usrChangePwdAtNextLogon',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7464006',
                      code: 'orgUserRelId',
                      name: 'orgUserRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '806134',
                      code: 'usrUdfOrgOrder',
                      name: 'usrUdfOrgOrder',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '719203',
                      code: 'userRoleRelId',
                      name: 'userRoleRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '599976',
                      code: 'subUsrUdfOrgOrders',
                      name: 'subUsrUdfOrgOrders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '910444',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '08113',
                      code: 'usrLogin',
                      name: 'usrLogin',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '186323',
                      code: 'subUsrUdfOaOrgs',
                      name: 'subUsrUdfOaOrgs',
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
            dataId: 166264641868662800,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '5587715',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166264642034565340,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '0912265',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource44.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource44,
      { options_966448 },
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
    refreshOaUser,
  }));

  const onOk = () => {
    const eventDatagetTableSelectedKey3: any = [
      {
        type: 'getTableSelectedKey',
        dataId: 167896040063804400,
        options: {
          compId: 'Table_7975706_122_503267',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Table',
          id: '2108944',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '098799',
                options: {
                  context: '$selectedRowKeys_2108944$',
                  operate: 'notEmpty',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167896041416747970,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167896041416705340,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167896041416706340,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '325671',
                      pageJsonId: '7975706',
                      type: 'info',
                      value: '请先选中需要关联人员',
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
                desc: '未选',
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 167896041416706340,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '325671',
                      pageJsonId: '7975706',
                      type: 'info',
                      value: '请先选中需要关联人员',
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 167896041416762620,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '29638',
                  pageJsonId: '7975706',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'addDcOaUserRoleRel',
                  _apiCode: 'addDcOaUserRoleRel',
                  _source: 'rhin',
                  _serviceId: '953578527543808000',
                  _serviceTitle:
                    '用户角色关联关系新增--tzp: addDcOaUserRoleRel',
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
                      dataKey: '29638_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '29638_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '29638_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'roleId',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.roleId',
                          compType: 'Input',
                          name: 'roleId',
                          parents: ['body'],
                          id: 'body.roleId',
                          dataKey: '29638_body.roleId',
                          value: {
                            type: ['context', '$state.bizId$'],
                            code: '',
                          },
                        },
                        {
                          code: 'usrKeyList',
                          attrType: 'fieldArray',
                          mustFlag: 'F',
                          children: [
                            {
                              code: 'listItem',
                              name: '列表元素',
                              attrType: 'field',
                              type: 'object',
                              _id: 'body.usrKeyList.listItem',
                              compType: 'Input',
                              parents: ['body', 'usrKeyList'],
                              id: 'body.usrKeyList.listItem',
                              dataKey: '29638_body.usrKeyList.listItem',
                            },
                          ],
                          _id: 'body.usrKeyList',
                          compType: 'Input',
                          name: 'usrKeyList',
                          parents: ['body'],
                          id: 'body.usrKeyList',
                          dataKey: '29638_body.usrKeyList',
                          value: {
                            type: ['context', '$selectedRowKeys_2108944$'],
                            code: '',
                          },
                        },
                        {
                          code: 'usrKey',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.usrKey',
                          compType: 'Input',
                          name: 'usrKey',
                          parents: ['body'],
                          id: 'body.usrKey',
                          dataKey: '29638_body.usrKey',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '29638_body',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '848434',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_29638?.resultCode$',
                          operate: '==',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167896041416718000,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'closeModal',
                        dataId: 167896041416780640,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '256925',
                          pageJsonId: '7975706',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'okCallbackData',
                        dataId: 167896041416709820,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '223982',
                          pageJsonId: '7975706',
                        },
                        line_number: 6,
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
    ];
    eventDatagetTableSelectedKey3.params = [] || [];
    CMDGenerator(eventDatagetTableSelectedKey3, {}, 'getTableSelectedKey', {
      id: 'getTableSelectedKey',
      name: 'getTableSelectedKey',
      type: 'getTableSelectedKey',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal80: any = [
      {
        type: 'closeModal',
        dataId: '0475626_1',
        options: { compId: 'page', compName: 'page', id: '759522' },
        line_number: 1,
      },
    ];
    eventDatacloseModal80.params = [] || [];
    CMDGenerator(eventDatacloseModal80, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
    onCancel,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_7975706__"
    >
      <View
        name={'布局容器'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_7975706_1_345242',
          uid: 'View_7975706_1_345242',
          type: 'View',
          ...componentItem,
        }}
        style={{ minHeight: '100%' }}
        ref={(r: any) => refs.setComponentRef(r, 'View_7975706_1_345242')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'View_7975706_12_60355746',
            uid: 'View_7975706_12_60355746',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            padding: '20px 20px 16px 20px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_7975706_12_60355746')}
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
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_148709'}
            $$componentItem={{
              id: 'Form_148709_997679_5118644_9851280906',
              uid: 'Form_148709_997679_5118644_9851280906',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '12px 0px 0px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_148709_997679_5118644_9851280906')
            }
            {...injectData}
          >
            <Input
              name={'用户编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
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
                id: 'Input_3889064_769378_089515_423271',
                uid: 'Input_3889064_769378_089515_423271',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc753: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158470687467620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2038827',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshOaUser',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc753.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc753, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_3889064_769378_089515_423271')
              }
              {...injectData}
            />
            <Input
              name={'用户名'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
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
                id: 'Input_33684855_8070024_3641753_679962',
                uid: 'Input_33684855_8070024_3641753_679962',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc754: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158471466083070,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '64209',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshOaUser',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc754.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc754, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_33684855_8070024_3641753_679962')
              }
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_841498_323645_360219_603005',
                uid: 'View_841498_323645_360219_603005',
                type: 'View',
                ...componentItem,
              }}
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
                textAlign: 'center',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_841498_323645_360219_603005')
              }
              {...injectData}
            >
              <Button
                name={'查询'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'primary'}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_224226_335492_451924_332741',
                  uid: 'Button_224226_335492_451924_332741',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc755: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166158469460298370,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '6966413',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshOaUser',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc755.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc755,
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
                  refs.setComponentRef(r, 'Button_224226_335492_451924_332741')
                }
                {...injectData}
              />
              <Button
                name={'重置'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'default'}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_499055_286527_9962765_535941',
                  uid: 'Button_499055_286527_9962765_535941',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDataclearValue195: any = [
                    {
                      type: 'clearValue',
                      dataId: 166303874325188300,
                      options: {
                        compId: 'Input_3889064_769378_089515_423271',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Input',
                        id: '647581',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue195.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue195, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue196: any = [
                    {
                      type: 'clearValue',
                      dataId: 166303874588382340,
                      options: {
                        compId: 'Input_33684855_8070024_3641753_679962',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Input',
                        id: '4389417',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue196.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue196, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_499055_286527_9962765_535941')
                }
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'选择人员网格列表'}
            columns={[
              {
                title: '用户ID',
                key: 'usrLocked',
                dataIndex: 'usrKey',
                className: '',
                id: '248265',
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
                type: 'staticCol',
                id: '390702',
                title: '用户编码',
                dataIndex: 'usrLogin',
                key: '390702',
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
                title: '用户名',
                key: 'usrLastName',
                dataIndex: 'usrLastName',
                className: 'divider',
                id: '505391',
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
                className: 'divider',
                id: '0284236',
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
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
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
            rowKey={'usrKey'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '0527531',
                checked: true,
              },
            ]}
            pageSize={5}
            current={data?.userRolePage?.resultData?.current}
            total={data?.userRolePage?.resultData?.total}
            dataSource={data?.userRolePage?.resultData?.records}
            fieldName={'data.qryDcOaUserPage.resultData.size'}
            extend={[]}
            dataSourceFromDataSourceConfig={
              'data.userRolePage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_7975706_122_503267',
              uid: 'Table_7975706_122_503267',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '20px 0px 0px 0px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatasetLoading218: any = [
                {
                  type: 'setLoading',
                  dataId: 167962676207403550,
                  options: {
                    compId: 'Table_7975706_122_503267',
                    compLib: 'comm',
                    pageJsonId: '7975706',
                    compName: 'Table',
                    id: '547286',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading218.params =
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
                eventDatasetLoading218,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatareloadDataSource114: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166262602492121020,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '301184',
                    pageJsonId: '7975706',
                    dataSourceId: 167895761254530100,
                    dataSourceName: 'userRolePage',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '861344',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'header',
                      },
                      {
                        attrId: '0165915',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'path',
                      },
                      {
                        attrId: '477509',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'query',
                      },
                      {
                        attrId: '8843426',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '877341',
                            code: 'roleId',
                            name: 'roleId',
                            sort: { isSort: true },
                            initialData: {
                              type: 'static',
                              value: '$state.bizId$',
                            },
                            type: 'long',
                            key: 'body.roleId',
                            value: {
                              type: ['context', '$state.bizId$'],
                              code: '',
                            },
                          },
                          {
                            attrId: '6497384',
                            code: 'usrLogin',
                            name: 'usrLogin',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.usrLogin',
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644_9851280906',
                                'getFieldsValue',
                              ],
                              code: 'usrLogin',
                            },
                          },
                          {
                            attrId: '868988',
                            code: 'usrLastName',
                            name: 'usrLastName',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.usrLastName',
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644_9851280906',
                                'getFieldsValue',
                              ],
                              code: 'usrLastName',
                            },
                          },
                          {
                            attrId: '640521',
                            code: 'pageNum',
                            name: 'pageNum',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '1' },
                            type: 'long',
                            key: 'body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '731681',
                            code: 'pageSize',
                            name: 'pageSize',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '5' },
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
                        attrId: '177534',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '968596',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '0007097',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '22802546',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '2874973',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '29022',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '2300729',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '228299',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '370907',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '514849',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '816244',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'fieldArray',
                            children: [
                              {
                                attrId: '878643',
                                code: 'listItem',
                                name: '列表元素',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                              },
                            ],
                          },
                          {
                            attrId: '52647',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '645364',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '5558706',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '461392',
                                code: 'usrUdfShortName',
                                name: 'usrUdfShortName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '2689195',
                                code: 'usrStatus',
                                name: 'usrStatus',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '7227935',
                                code: 'subUsrUdfJobLevels',
                                name: 'subUsrUdfJobLevels',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '8339209',
                                code: 'usrType',
                                name: 'usrType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '796243',
                                code: 'lanId',
                                name: 'lanId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '081584',
                                code: 'usrEndDate',
                                name: 'usrEndDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '516835',
                                code: 'usrCreate',
                                name: 'usrCreate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '4124983',
                                code: 'usrPwdResetAttemptsCtr',
                                name: 'usrPwdResetAttemptsCtr',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '176456',
                                code: 'actName',
                                name: 'actName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '248576',
                                code: 'usrProvisionedDate',
                                name: 'usrProvisionedDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '906238',
                                code: 'actUdfNum',
                                name: 'actUdfNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '18106415',
                                code: 'orgType',
                                name: 'orgType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '0280834',
                                code: 'usrUdfEmployeeId',
                                name: 'usrUdfEmployeeId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '3225526',
                                code: 'usrUdfBelongComp',
                                name: 'usrUdfBelongComp',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '8093814',
                                code: 'subOrgNames',
                                name: 'subOrgNames',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '375408',
                                code: 'usrKey',
                                name: 'usrKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '518722',
                                code: 'usrEmpType',
                                name: 'usrEmpType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '842868',
                                code: 'usrLastName',
                                name: 'usrLastName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '840331',
                                code: 'orgName',
                                name: 'orgName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '5870614',
                                code: 'usrUdfSysMask',
                                name: 'usrUdfSysMask',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '021339',
                                code: 'cardInfo',
                                name: 'cardInfo',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '159785',
                                code: 'usrUpdate',
                                name: 'usrUpdate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '622866',
                                code: 'usrKind',
                                name: 'usrKind',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '5137787',
                                code: 'usrUdfOaOrg',
                                name: 'usrUdfOaOrg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '04456507',
                                code: 'provinceId',
                                name: 'provinceId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '5057011',
                                code: 'usrPassword',
                                name: 'usrPassword',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '5974555',
                                code: 'usrCreated',
                                name: 'usrCreated',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '249097',
                                code: 'usrUdfMgrErpOrg',
                                name: 'usrUdfMgrErpOrg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '435826',
                                code: 'isDefault',
                                name: 'isDefault',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '968476',
                                code: 'usrEmail',
                                name: 'usrEmail',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '773319',
                                code: 'usrLoginAttemptsCtr',
                                name: 'usrLoginAttemptsCtr',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '354942',
                                code: 'usrUdfMobile',
                                name: 'usrUdfMobile',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '3025634',
                                code: 'actKey',
                                name: 'actKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '934507',
                                code: 'orgLevel',
                                name: 'orgLevel',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '3961368',
                                code: 'usrLocked',
                                name: 'usrLocked',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '035421',
                                code: 'usrUdfDepartment',
                                name: 'usrUdfDepartment',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '032921',
                                code: 'usrUdfSex',
                                name: 'usrUdfSex',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '050976',
                                code: 'usrUdfOaNum',
                                name: 'usrUdfOaNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '042098',
                                code: 'usrUdfJobLevel',
                                name: 'usrUdfJobLevel',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '822853',
                                code: 'orgCode',
                                name: 'orgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '1873036',
                                code: 'isImportant',
                                name: 'isImportant',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '484593',
                                code: 'usrFirstName',
                                name: 'usrFirstName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '871964',
                                code: 'usrUdfIdNum',
                                name: 'usrUdfIdNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '620514',
                                code: 'orgShortName',
                                name: 'orgShortName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '0304477',
                                code: 'usrChangePwdAtNextLogon',
                                name: 'usrChangePwdAtNextLogon',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '7464006',
                                code: 'orgUserRelId',
                                name: 'orgUserRelId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '806134',
                                code: 'usrUdfOrgOrder',
                                name: 'usrUdfOrgOrder',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '719203',
                                code: 'userRoleRelId',
                                name: 'userRoleRelId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                              },
                              {
                                attrId: '599976',
                                code: 'subUsrUdfOrgOrders',
                                name: 'subUsrUdfOrgOrders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '910444',
                                code: 'areaId',
                                name: 'areaId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '08113',
                                code: 'usrLogin',
                                name: 'usrLogin',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '186323',
                                code: 'subUsrUdfOaOrgs',
                                name: 'subUsrUdfOaOrgs',
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
                      dataId: 167962676750218600,
                      options: {
                        compId: 'Table_7975706_122_503267',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Table',
                        id: '5908453',
                        loading: false,
                      },
                      line_number: 3,
                    },
                  ],
                  callback2: [
                    {
                      type: 'setLoading',
                      dataId: 167962676860425600,
                      options: {
                        compId: 'Table_7975706_122_503267',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Table',
                        id: '307206',
                        loading: false,
                      },
                      line_number: 4,
                    },
                  ],
                },
              ];
              eventDatareloadDataSource114.params =
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
                eventDatareloadDataSource114,
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
              const eventDatashowCustomModal268: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166262912519746340,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '60546',
                    pageJsonId: '7975706',
                    modalname: '/detailOaUser',
                    pageId: '885082440567881728',
                    paramsObj: {
                      sceneCode: 'V',
                      bizId: '$rowId$',
                      dcOaOrg: '$row$',
                      dcOaUser: '$row$',
                    },
                    paramsObjKeyValueMap: {
                      sceneCode: 'V',
                      bizId: '$rowId$',
                      dcOaOrg: '$row$',
                      dcOaUser: '$row$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal268.params =
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
                eventDatashowCustomModal268,
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_7975706_122_503267')
            }
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(RoleNotHaveUserPop$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '' },
});
