// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '885065462365028352';
const ChooseUserPostRel$$Modal: React.FC<PageProps> = ({
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
    const eventDatasetLoading18: any = [
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
    eventDatasetLoading18.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading18, { options_966448 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource15: any = [
      {
        type: 'reloadDataSource',
        dataId: 166264638885886530,
        shielding: true,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '347783',
          pageJsonId: '7975706',
          dataSourceId: 166262381179200830,
          dataSourceName: 'qryDcOaUserPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '210489',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '638593',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '436369',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '472127',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '02421683',
                  code: 'usrLogin',
                  name: 'usrLogin',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644',
                      'getFieldsValue',
                    ],
                    code: 'usrLogin',
                  },
                },
                {
                  attrId: '9168305',
                  code: 'usrLastName',
                  name: 'usrLastName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644',
                      'getFieldsValue',
                    ],
                    code: 'usrLastName',
                  },
                },
                {
                  attrId: '4509668',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageNum' },
                  type: 'long',
                },
                {
                  attrId: '251028',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageSize' },
                  type: 'long',
                },
                {
                  attrId: '117385',
                  code: 'postId',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: { type: ['customize'], code: '$state.postId$' },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '815045',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '19731',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '77542',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '673156',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '656263',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '3114115',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '869838',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '520777',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '641284',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '89926736',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '7366275',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '6858875',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '647722',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8639986',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '515582',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '7192177',
                      code: 'subUsrUdfOaOrgs',
                      name: 'subUsrUdfOaOrgs',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4540184',
                      code: 'usrLoginAttemptsCtr',
                      name: 'usrLoginAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9745',
                      code: 'usrUdfMobile',
                      name: 'usrUdfMobile',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '768171',
                      code: 'usrUdfShortName',
                      name: 'usrUdfShortName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '284564',
                      code: 'usrStatus',
                      name: 'usrStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '50879',
                      code: 'actKey',
                      name: 'actKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '856536',
                      code: 'subUsrUdfJobLevels',
                      name: 'subUsrUdfJobLevels',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6965738',
                      code: 'usrType',
                      name: 'usrType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4629113',
                      code: 'usrEndDate',
                      name: 'usrEndDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4652295',
                      code: 'usrCreate',
                      name: 'usrCreate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '176262',
                      code: 'usrPwdResetAttemptsCtr',
                      name: 'usrPwdResetAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '870182',
                      code: 'actName',
                      name: 'actName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '490669',
                      code: 'usrProvisionedDate',
                      name: 'usrProvisionedDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '744329',
                      code: 'actUdfNum',
                      name: 'actUdfNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '556176',
                      code: 'usrLocked',
                      name: 'usrLocked',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '184402',
                      code: 'usrUdfDepartment',
                      name: 'usrUdfDepartment',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0112064',
                      code: 'usrUdfSex',
                      name: 'usrUdfSex',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '371033',
                      code: 'usrUdfEmployeeId',
                      name: 'usrUdfEmployeeId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '372213',
                      code: 'usrUdfOaNum',
                      name: 'usrUdfOaNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '487323',
                      code: 'usrUdfJobLevel',
                      name: 'usrUdfJobLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '277338',
                      code: 'usrUdfBelongComp',
                      name: 'usrUdfBelongComp',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4278423',
                      code: 'usrFirstName',
                      name: 'usrFirstName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '348266',
                      code: 'usrUdfIdNum',
                      name: 'usrUdfIdNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8274225',
                      code: 'subOrgNames',
                      name: 'subOrgNames',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9708912',
                      code: 'usrKey',
                      name: 'usrKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '880294',
                      code: 'usrEmpType',
                      name: 'usrEmpType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2722225',
                      code: 'usrChangePwdAtNextLogon',
                      name: 'usrChangePwdAtNextLogon',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '105201',
                      code: 'usrUdfOrgOrder',
                      name: 'usrUdfOrgOrder',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3399193',
                      code: 'usrLastName',
                      name: 'usrLastName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '848593',
                      code: 'orgName',
                      name: 'orgName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7396285',
                      code: 'usrUdfSysMask',
                      name: 'usrUdfSysMask',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '257105',
                      code: 'cardInfo',
                      name: 'cardInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3840113',
                      code: 'usrUpdate',
                      name: 'usrUpdate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '636749',
                      code: 'usrUdfOaOrg',
                      name: 'usrUdfOaOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '772903',
                      code: 'usrPassword',
                      name: 'usrPassword',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '455162',
                      code: 'usrCreated',
                      name: 'usrCreated',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '886668',
                      code: 'usrUdfMgrErpOrg',
                      name: 'usrUdfMgrErpOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8207206',
                      code: 'subUsrUdfOrgOrders',
                      name: 'subUsrUdfOrgOrders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '814012',
                      code: 'usrLogin',
                      name: 'usrLogin',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '339171',
                      code: 'usrEmail',
                      name: 'usrEmail',
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
            shielding: true,
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
            shielding: true,
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
    eventDatareloadDataSource15.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource15,
      { options_966448 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatareloadDataSource16: any = [
      {
        type: 'reloadDataSource',
        dataId: 170478405789625860,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '691325',
          pageJsonId: '7975706',
          dataSourceId: 170478395513731800,
          dataSourceName: 'qryDcOaUserPageNotInThisPost',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '9514747',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '071526',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '783887',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '73449',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '221656',
                  code: 'usrLogin',
                  name: 'usrLogin',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644',
                      'getFieldsValue',
                    ],
                    code: 'usrLogin',
                  },
                },
                {
                  attrId: '8988558',
                  code: 'usrLastName',
                  name: 'usrLastName',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644',
                      'getFieldsValue',
                    ],
                    code: 'usrLastName',
                  },
                },
                {
                  attrId: '5393354',
                  code: 'postId',
                  name: 'postId',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: ['customize'], code: '$state.postId$' },
                },
                {
                  attrId: '830552',
                  code: 'engineType',
                  name: 'engineType',
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
        line_number: 5,
        callback1: [
          {
            type: 'setLoading',
            dataId: 170478422769193340,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '293584',
              loading: false,
            },
            line_number: 6,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 170478423142791800,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '741368',
              loading: false,
            },
            line_number: 7,
          },
        ],
      },
    ];
    eventDatareloadDataSource16.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource16,
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
    const eventDatagetTableSelectedKey: any = [
      {
        type: 'getTableSelectedKey',
        dataId: 166930028612076900,
        shielding: true,
        options: {
          compId: 'Table_7975706_122',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Table',
          id: '3498521',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 166930029032347970,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '696988',
              pageJsonId: '7975706',
              value: ['$selectedRowKeys_3498521$'],
            },
            line_number: 2,
          },
          {
            type: 'console',
            dataId: 166930036515351520,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '833918',
              pageJsonId: '7975706',
              value: ['$JSON.stringify(selectedRowKeys_3498521)$'],
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelectedKey.params = [] || [];
    CMDGenerator(eventDatagetTableSelectedKey, {}, 'getTableSelectedKey', {
      id: 'getTableSelectedKey',
      name: 'getTableSelectedKey',
      type: 'getTableSelectedKey',
      platform: 'undefined',
    });
    const eventDatagetTableSelectedKey1: any = [
      {
        type: 'getTableSelectedKey',
        dataId: 166930032292255780,
        shielding: true,
        options: {
          compId: 'Table_7975706_122',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Table',
          id: '26361',
        },
        line_number: 4,
        callback1: [
          {
            type: 'console',
            dataId: 166930033250235000,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '6923698',
              pageJsonId: '7975706',
              value: ['$selectedRowKeys_26361$'],
            },
            line_number: 5,
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelectedKey1.params = [] || [];
    CMDGenerator(eventDatagetTableSelectedKey1, {}, 'getTableSelectedKey', {
      id: 'getTableSelectedKey',
      name: 'getTableSelectedKey',
      type: 'getTableSelectedKey',
      platform: 'undefined',
    });
    const eventDatagetValue112: any = [
      {
        type: 'getValue',
        dataId: 166264304914864220,
        shielding: true,
        options: {
          compId: 'Input_33684855_8070024_3641753_139214_098087',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Input',
          id: '9345805',
        },
        line_number: 6,
        callback1: [
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '5628915',
                options: { operate: 'notEmpty', manualValue: '0' },
                conditionType: 'checkValue',
                objType: 'Input',
                objId: 'Input_33684855_8070024_3641753_139214_098087',
              },
            ],
            dataId: 166264305850807600,
            elseIfs: [],
            line_number: 7,
            callback1: [
              {
                type: 'getTableSelectedKey',
                dataId: 166264310619873540,
                shielding: true,
                options: {
                  compId: 'Table_7975706_122',
                  compLib: 'comm',
                  pageJsonId: '7975706',
                  compName: 'Table',
                  id: '560189',
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '1566493',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$selectedRowKeys_560189$',
                          operate: '>',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166264310619862180,
                    elseIfs: [],
                    line_number: 9,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166929991824293700,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '60534',
                          pageJsonId: '7975706',
                          value: ['$selectedRowKeys_560189$'],
                        },
                        line_number: 10,
                      },
                      {
                        type: 'console',
                        dataId: 166930044121525280,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '83087',
                          pageJsonId: '7975706',
                          value: ['$JSON.stringify(selectedRowKeys_560189)$'],
                        },
                        line_number: 11,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 166264310619892380,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '8936355',
                          pageJsonId: '7975706',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'addBatchDcPostUserRel',
                          _apiCode: 'addBatchDcPostUserRel',
                          _source: 'rhin',
                          _serviceId: '885146583064903680',
                          _serviceTitle:
                            '批量新增岗位人员关联关系-zzz: addBatchDcPostUserRel',
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
                              dataKey: '8936355_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '8936355_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '8936355_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'userKeys',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.userKeys',
                                  compType: 'Input',
                                  name: 'userKeys',
                                  parents: ['body'],
                                  id: 'body.userKeys',
                                  dataKey: '8936355_body.userKeys',
                                },
                                {
                                  code: 'postId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.postId',
                                  compType: 'Input',
                                  name: 'postId',
                                  parents: ['body'],
                                  id: 'body.postId',
                                  dataKey: '8936355_body.postId',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_148709_997679_5118644_1310676',
                                      'getFieldsValue',
                                    ],
                                    code: 'postId',
                                  },
                                },
                                {
                                  code: 'usrKey',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.usrKey',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.usrKey',
                                  dataKey: '8936355_body.usrKey',
                                },
                                {
                                  code: 'postIds',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.postIds',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.postIds',
                                  dataKey: '8936355_body.postIds',
                                },
                                {
                                  code: 'orgUserRelIds',
                                  name: '组织和用户关系ID列表',
                                  attrType: 'objectArray',
                                  _id: 'body.orgUserRelIds',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.orgUserRelIds',
                                  dataKey: '8936355_body.orgUserRelIds',
                                  value: {
                                    type: ['customize'],
                                    code: '$JSON.stringify(selectedRowKeys_560189)$',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '8936355_body',
                            },
                          ],
                        },
                        line_number: 12,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '367851',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_8936355?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166264310619827000,
                            elseIfs: [],
                            line_number: 13,
                            callback1: [
                              {
                                type: 'closeModal',
                                dataId: 166264310619814080,
                                shielding: true,
                                options: {
                                  compId: 'closeModal',
                                  compName: 'page',
                                  id: '390172',
                                  pageJsonId: '7975706',
                                },
                                line_number: 14,
                              },
                              {
                                type: 'okCallbackData',
                                dataId: 166264310619844130,
                                shielding: true,
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '81538',
                                  pageJsonId: '7975706',
                                },
                                line_number: 15,
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
                    shielding: true,
                    condition: [
                      {
                        condId: '7928036',
                        options: {
                          context: '$selectedRowKeys_560189$',
                          operate: 'empty',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166264310619857020,
                    elseIfs: [],
                    line_number: 16,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 166264310619842200,
                        shielding: true,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '0603793',
                          pageJsonId: '7975706',
                          type: 'info',
                          value: '请先选中需要关联人员',
                        },
                        line_number: 17,
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
            shielding: true,
            condition: [
              {
                condId: '200047',
                options: { operate: 'empty' },
                conditionType: 'checkValue',
                objType: 'Input',
                objId: 'Input_33684855_8070024_3641753_139214_098087',
              },
            ],
            dataId: 166264310964545730,
            elseIfs: [],
            line_number: 18,
            callback1: [
              {
                type: 'showMessage',
                dataId: 166264319203545280,
                shielding: true,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '3456431',
                  pageJsonId: '7975706',
                  type: 'info',
                  value: '请先在父页面选择需要关联的岗位',
                },
                line_number: 19,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue112.params = [] || [];
    CMDGenerator(eventDatagetValue112, {}, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
    const eventDatagetValue113: any = [
      {
        type: 'getValue',
        dataId: 166930075747150600,
        options: {
          compId: 'Input_33684855_8070024_3641753_139214_098087',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Input',
          id: '3116684',
        },
        line_number: 20,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '5628915',
                options: { operate: 'notEmpty', manualValue: '0' },
                conditionType: 'checkValue',
                objType: 'Input',
                objId: 'Input_33684855_8070024_3641753_139214_098087',
              },
            ],
            dataId: 166930075747188260,
            elseIfs: [],
            line_number: 21,
            callback1: [
              {
                type: 'getTableSelectedKey',
                dataId: 166930078725090780,
                options: {
                  compId: 'Table_7975706_122',
                  compLib: 'comm',
                  pageJsonId: '7975706',
                  compName: 'Table',
                  id: '286387',
                },
                line_number: 22,
                callback1: [
                  {
                    type: 'console',
                    dataId: 166930091921377950,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '6872643',
                      pageJsonId: '7975706',
                      value: ['$selectedRowKeys_286387$'],
                    },
                    line_number: 23,
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '098799',
                        options: {
                          context: '$selectedRowKeys_286387$',
                          operate: 'notEmpty',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166930079262503600,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166930082219811550,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166930084694036800,
                            children: [],
                            todoOptions: ['msgType', 'value'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '789955',
                              pageJsonId: '7975706',
                              type: 'info',
                              value: '请先选中需要关联人员',
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            line_number: 29,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
                        desc: '未选',
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 166930084694036800,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '789955',
                              pageJsonId: '7975706',
                              type: 'info',
                              value: '请先选中需要关联人员',
                            },
                            line_number: 29,
                          },
                        ],
                      },
                    ],
                    line_number: 24,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166930087252782820,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '2976016',
                          pageJsonId: '7975706',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'addBatchDcPostUserRel',
                          _apiCode: 'addBatchDcPostUserRel',
                          _source: 'rhin',
                          _serviceId: '885146583064903680',
                          _serviceTitle:
                            '批量新增岗位人员关联关系-zzz: addBatchDcPostUserRel',
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
                              dataKey: '2976016_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '2976016_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '2976016_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'postId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.postId',
                                  compType: 'Input',
                                  name: 'postId',
                                  parents: ['body'],
                                  id: 'body.postId',
                                  dataKey: '2976016_body.postId',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_148709_997679_5118644_1310676',
                                      'getFieldsValue',
                                    ],
                                    code: 'postId',
                                  },
                                },
                                {
                                  code: 'usrKey',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.usrKey',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.usrKey',
                                  dataKey: '2976016_body.usrKey',
                                },
                                {
                                  code: 'postIds',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.postIds',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.postIds',
                                  dataKey: '2976016_body.postIds',
                                },
                                {
                                  code: 'userKeys',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.userKeys',
                                  compType: 'Input',
                                  name: 'userKeys',
                                  parents: ['body'],
                                  id: 'body.userKeys',
                                  dataKey: '2976016_body.userKeys',
                                },
                                {
                                  code: 'orgUserRelIds',
                                  name: '组织和用户关系ID列表',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.orgUserRelIds',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.orgUserRelIds',
                                  dataKey: '2976016_body.orgUserRelIds',
                                  value: {
                                    type: [
                                      'context',
                                      '$selectedRowKeys_286387$',
                                    ],
                                    code: '',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '2976016_body',
                            },
                          ],
                        },
                        line_number: 25,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '848434',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_2976016?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166930095738007700,
                            elseIfs: [],
                            line_number: 26,
                            callback1: [
                              {
                                type: 'closeModal',
                                dataId: 166930098404440260,
                                options: {
                                  compId: 'closeModal',
                                  compName: 'page',
                                  id: '1430456',
                                  pageJsonId: '7975706',
                                },
                                line_number: 27,
                              },
                              {
                                type: 'okCallbackData',
                                dataId: 166930099055351230,
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '50886',
                                  pageJsonId: '7975706',
                                },
                                line_number: 28,
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
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '200047',
                options: { operate: 'empty' },
                conditionType: 'checkValue',
                objType: 'Input',
                objId: 'Input_33684855_8070024_3641753_139214_098087',
              },
            ],
            dataId: 166930075747152500,
            elseIfs: [],
            line_number: 30,
            callback1: [
              {
                type: 'showMessage',
                dataId: 166930075747134980,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '176166',
                  pageJsonId: '7975706',
                  type: 'info',
                  value: '请先在父页面选择需要关联的岗位',
                },
                line_number: 31,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue113.params = [] || [];
    CMDGenerator(eventDatagetValue113, {}, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal23: any = [
      {
        type: 'closeModal',
        dataId: '0475626_1',
        options: { compId: 'page', compName: 'page', id: '759522' },
        line_number: 1,
      },
    ];
    eventDatacloseModal23.params = [] || [];
    CMDGenerator(eventDatacloseModal23, {}, 'closeModal', {
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
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_7975706_1',
          uid: 'View_7975706_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{ minHeight: '100%' }}
        ref={(r: any) => refs.setComponentRef(r, 'View_7975706_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'View_7975706_12',
            uid: 'View_7975706_12',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            padding: '20px 20px 16px 20px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_7975706_12')}
          {...injectData}
        >
          <Form
            name={'固定表单'}
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
              id: 'Form_148709_997679_5118644_1310676',
              uid: 'Form_148709_997679_5118644_1310676',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_148709_997679_5118644_1310676')
            }
            {...injectData}
          >
            <Input
              name={'关联岗位编码'}
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
              fieldName={'postCode'}
              value={state?.postCode}
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
                id: 'Input_3889064_769378_089515_27277304',
                uid: 'Input_3889064_769378_089515_27277304',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_3889064_769378_089515_27277304')
              }
              {...injectData}
            />
            <Input
              name={'关联岗位名称'}
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
              fieldName={'postName'}
              value={state?.postName}
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
                id: 'Input_33684855_8070024_3641753_139214',
                uid: 'Input_33684855_8070024_3641753_139214',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_33684855_8070024_3641753_139214')
              }
              {...injectData}
            />
            <Input
              name={'岗位ID'}
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
              formItemIndex={2}
              fieldName={'postId'}
              value={state?.postId}
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
                id: 'Input_33684855_8070024_3641753_139214_098087',
                uid: 'Input_33684855_8070024_3641753_139214_098087',
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
                  'Input_33684855_8070024_3641753_139214_098087',
                )
              }
              {...injectData}
            />
          </Form>
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
            formCode={'Form_148709'}
            $$componentItem={{
              id: 'Form_148709_997679_5118644',
              uid: 'Form_148709_997679_5118644',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '12px 0px 0px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_148709_997679_5118644')
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
                id: 'Input_3889064_769378_089515',
                uid: 'Input_3889064_769378_089515',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc353: any = [
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
                eventDatacallSelfFunc353.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc353, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_3889064_769378_089515')
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
                id: 'Input_33684855_8070024_3641753',
                uid: 'Input_33684855_8070024_3641753',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc354: any = [
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
                eventDatacallSelfFunc354.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc354, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_33684855_8070024_3641753')
              }
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_841498_323645_360219',
                uid: 'View_841498_323645_360219',
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
                textAlign: 'center',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_841498_323645_360219')
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
                  id: 'Button_224226_335492_451924',
                  uid: 'Button_224226_335492_451924',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc355: any = [
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
                  eventDatacallSelfFunc355.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc355,
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
                  refs.setComponentRef(r, 'Button_224226_335492_451924')
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
                  id: 'Button_499055_286527_9962765',
                  uid: 'Button_499055_286527_9962765',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDataclearValue109: any = [
                    {
                      type: 'clearValue',
                      dataId: 166303874325188300,
                      options: {
                        compId: 'Input_3889064_769378_089515',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Input',
                        id: '647581',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue109.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue109, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue110: any = [
                    {
                      type: 'clearValue',
                      dataId: 166303874588382340,
                      options: {
                        compId: 'Input_33684855_8070024_3641753',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Input',
                        id: '4389417',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue110.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue110, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_499055_286527_9962765')
                }
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'选择人员网格列表'}
            columns={[
              {
                title: '用户编码',
                key: 'usrLogin',
                dataIndex: 'usrLogin',
                className: '',
                id: '610057',
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
              {
                title: '是否锁定',
                key: 'usrLocked',
                dataIndex: 'usrLocked',
                className: 'divider',
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
                title: '状态',
                key: 'usrStatus',
                dataIndex: 'usrStatus',
                className: 'divider',
                id: '301235',
                staticDataSource: [
                  { id: '269303', label: '在用', value: 'Active' },
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
            showSizeChanger={true}
            showQuickJumper={true}
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
            rowKey={'orgUserRelId'}
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
            current={data?.qryDcOaUserPageNotInThisPost?.resultData?.current}
            total={data?.qryDcOaUserPageNotInThisPost?.resultData?.total}
            dataSource={data?.qryDcOaUserPageNotInThisPost?.resultData?.records}
            fieldName={'data.qryDcOaUserPage.resultData.size'}
            extend={[]}
            dataSourceFromDataSourceConfig={
              'data.qryDcOaUserPageNotInThisPost.resultData.records'
            }
            $$componentItem={{
              id: 'Table_7975706_122',
              uid: 'Table_7975706_122',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '20px 0px 0px 0px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatareloadDataSource79: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166262602492121020,
                  shielding: true,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '301184',
                    pageJsonId: '7975706',
                    dataSourceId: 166262381179200830,
                    dataSourceName: 'qryDcOaUserPage',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '210489',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'header',
                      },
                      {
                        attrId: '638593',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'path',
                      },
                      {
                        attrId: '436369',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'query',
                      },
                      {
                        attrId: '472127',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '251028',
                            code: 'pageSize',
                            name: 'pageSize',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: 'pageSize' },
                            type: 'long',
                            key: 'body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '4509668',
                            code: 'pageNum',
                            name: 'pageNum',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: 'pageNum' },
                            type: 'long',
                            key: 'body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '02421683',
                            code: 'usrLogin',
                            name: 'usrLogin',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.usrLogin',
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644',
                                'getFieldsValue',
                              ],
                              code: 'usrLogin',
                            },
                          },
                          {
                            attrId: '9168305',
                            code: 'usrLastName',
                            name: 'usrLastName',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.usrLastName',
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644',
                                'getFieldsValue',
                              ],
                              code: 'usrLastName',
                            },
                          },
                          {
                            attrId: '117385',
                            code: 'postId',
                            name: '新增节点',
                            sort: { isSort: true },
                            initialData: {
                              type: 'static',
                              value: '$state.postId$',
                            },
                            type: 'string',
                            value: {
                              type: ['customize'],
                              code: '$state.postId$',
                            },
                          },
                        ],
                        key: 'body',
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '815045',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '19731',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '77542',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '673156',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '656263',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '3114115',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '869838',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '520777',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '641284',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '89926736',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '7366275',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'fieldArray',
                            children: [
                              {
                                attrId: '6858875',
                                code: 'listItem',
                                name: '列表元素',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                              },
                            ],
                          },
                          {
                            attrId: '647722',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '8639986',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '515582',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '768171',
                                code: 'usrUdfShortName',
                                name: 'usrUdfShortName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '284564',
                                code: 'usrStatus',
                                name: 'usrStatus',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '50879',
                                code: 'actKey',
                                name: 'actKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '856536',
                                code: 'subUsrUdfJobLevels',
                                name: 'subUsrUdfJobLevels',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '6965738',
                                code: 'usrType',
                                name: 'usrType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '4629113',
                                code: 'usrEndDate',
                                name: 'usrEndDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '4652295',
                                code: 'usrCreate',
                                name: 'usrCreate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '176262',
                                code: 'usrPwdResetAttemptsCtr',
                                name: 'usrPwdResetAttemptsCtr',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '870182',
                                code: 'actName',
                                name: 'actName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '490669',
                                code: 'usrProvisionedDate',
                                name: 'usrProvisionedDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '744329',
                                code: 'actUdfNum',
                                name: 'actUdfNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '556176',
                                code: 'usrLocked',
                                name: 'usrLocked',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '184402',
                                code: 'usrUdfDepartment',
                                name: 'usrUdfDepartment',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '0112064',
                                code: 'usrUdfSex',
                                name: 'usrUdfSex',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '371033',
                                code: 'usrUdfEmployeeId',
                                name: 'usrUdfEmployeeId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '372213',
                                code: 'usrUdfOaNum',
                                name: 'usrUdfOaNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '487323',
                                code: 'usrUdfJobLevel',
                                name: 'usrUdfJobLevel',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '277338',
                                code: 'usrUdfBelongComp',
                                name: 'usrUdfBelongComp',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '4278423',
                                code: 'usrFirstName',
                                name: 'usrFirstName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '348266',
                                code: 'usrUdfIdNum',
                                name: 'usrUdfIdNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '8274225',
                                code: 'subOrgNames',
                                name: 'subOrgNames',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9708912',
                                code: 'usrKey',
                                name: 'usrKey',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '880294',
                                code: 'usrEmpType',
                                name: 'usrEmpType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '2722225',
                                code: 'usrChangePwdAtNextLogon',
                                name: 'usrChangePwdAtNextLogon',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '105201',
                                code: 'usrUdfOrgOrder',
                                name: 'usrUdfOrgOrder',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '3399193',
                                code: 'usrLastName',
                                name: 'usrLastName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '848593',
                                code: 'orgName',
                                name: 'orgName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '7396285',
                                code: 'usrUdfSysMask',
                                name: 'usrUdfSysMask',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '257105',
                                code: 'cardInfo',
                                name: 'cardInfo',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '3840113',
                                code: 'usrUpdate',
                                name: 'usrUpdate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '636749',
                                code: 'usrUdfOaOrg',
                                name: 'usrUdfOaOrg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '772903',
                                code: 'usrPassword',
                                name: 'usrPassword',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '455162',
                                code: 'usrCreated',
                                name: 'usrCreated',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '886668',
                                code: 'usrUdfMgrErpOrg',
                                name: 'usrUdfMgrErpOrg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '8207206',
                                code: 'subUsrUdfOrgOrders',
                                name: 'subUsrUdfOrgOrders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '814012',
                                code: 'usrLogin',
                                name: 'usrLogin',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '339171',
                                code: 'usrEmail',
                                name: 'usrEmail',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '7192177',
                                code: 'subUsrUdfOaOrgs',
                                name: 'subUsrUdfOaOrgs',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '4540184',
                                code: 'usrLoginAttemptsCtr',
                                name: 'usrLoginAttemptsCtr',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9745',
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
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatareloadDataSource79.params =
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
                eventDatareloadDataSource79,
                { page, pageSize },
                'reloadDataSource',
                {
                  id: 'reloadDataSource',
                  name: 'reloadDataSource',
                  type: 'reloadDataSource',
                  platform: 'pc',
                },
              );
              const eventDatasetLoading155: any = [
                {
                  type: 'setLoading',
                  dataId: 170478458857424100,
                  options: {
                    compId: 'Table_7975706_122',
                    compLib: 'comm',
                    pageJsonId: '7975706',
                    compName: 'Table',
                    id: '245715',
                    loading: true,
                  },
                  line_number: 2,
                },
              ];
              eventDatasetLoading155.params =
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
                eventDatasetLoading155,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatareloadDataSource80: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 170478454792747900,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '226852',
                    pageJsonId: '7975706',
                    dataSourceId: 170478395513731800,
                    dataSourceName: 'qryDcOaUserPageNotInThisPost',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '9514747',
                        code: 'header',
                        name: '请求头参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        key: 'header',
                        _codePath: ['header'],
                        _idpath: ['9514747'],
                      },
                      {
                        attrId: '071526',
                        code: 'path',
                        name: '请求路径参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        key: 'path',
                        _codePath: ['path'],
                        _idpath: ['071526'],
                      },
                      {
                        attrId: '783887',
                        code: 'query',
                        name: 'URL 参数',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        key: 'query',
                        _codePath: ['query'],
                        _idpath: ['783887'],
                      },
                      {
                        attrId: '73449',
                        code: 'body',
                        name: '请求体',
                        type: 'object',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        children: [
                          {
                            attrId: '5393354',
                            code: 'postId',
                            name: 'postId',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: {
                              type: 'static',
                              value: '$state.postId$',
                            },
                            key: 'body.postId',
                            _codePath: ['body', 'postId'],
                            _idpath: ['73449', '5393354'],
                          },
                          {
                            attrId: '830552',
                            code: 'engineType',
                            name: 'engineType',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$state.postId$',
                            },
                            key: 'body.engineType',
                            _codePath: ['body', 'engineType'],
                            _idpath: ['73449', '830552'],
                          },
                          {
                            attrId: '4633965',
                            code: 'pageSize',
                            name: '新增节点',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                            key: 'body.pageSize',
                            _codePath: ['body', 'pageSize'],
                            _idpath: ['73449', '4633965'],
                          },
                          {
                            attrId: '073819',
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
                            key: 'body.pageNum',
                            _codePath: ['body', 'pageNum'],
                            _idpath: ['73449', '073819'],
                          },
                          {
                            attrId: '221656',
                            code: 'usrLogin',
                            name: 'usrLogin',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644',
                                'getFieldsValue',
                              ],
                              code: 'usrLogin',
                            },
                            key: 'body.usrLogin',
                            _codePath: ['body', 'usrLogin'],
                            _idpath: ['73449', '221656'],
                          },
                          {
                            attrId: '8988558',
                            code: 'usrLastName',
                            name: 'usrLastName',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644',
                                'getFieldsValue',
                              ],
                              code: 'usrLastName',
                            },
                            key: 'body.usrLastName',
                            _codePath: ['body', 'usrLastName'],
                            _idpath: ['73449', '8988558'],
                          },
                        ],
                        key: 'body',
                        _codePath: ['body'],
                        _idpath: ['73449'],
                      },
                    ],
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 3,
                  callback1: [
                    {
                      type: 'setLoading',
                      dataId: 170478459371226020,
                      options: {
                        compId: 'Table_7975706_122',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Table',
                        id: '7797287',
                        loading: false,
                      },
                      line_number: 4,
                    },
                  ],
                  callback2: [
                    {
                      type: 'setLoading',
                      dataId: 170478459520427900,
                      options: {
                        compId: 'Table_7975706_122',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Table',
                        id: '966759',
                        loading: false,
                      },
                      line_number: 5,
                    },
                  ],
                },
              ];
              eventDatareloadDataSource80.params =
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
                eventDatareloadDataSource80,
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
              const eventDatashowCustomModal99: any = [
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
              eventDatashowCustomModal99.params =
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
                eventDatashowCustomModal99,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_7975706_122')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ChooseUserPostRel$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    postId: '',
    postCode: '',
    postName: '',
  },
});
