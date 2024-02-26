// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  HorizontalView,
  Tabs,
  TabPane,
  Tree,
  Card,
  Form,
  Input,
  Select,
  Button,
  Table,
  TreeSelect,
  TimePicker,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '967266347405778944';
const OaOrganizationManagementcopy$$Page: React.FC<PageProps> = ({
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
  const refreshOaOrg = (options_618734: any) => {
    const eventDatasetLoading30: any = [
      {
        type: 'setLoading',
        dataId: 167843003044649730,
        options: {
          compId: 'Table_547445',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '392613',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading30.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading30, { options_618734 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource41: any = [
      {
        type: 'reloadDataSource',
        dataId: 166244941124861440,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '37341',
          pageJsonId: '4868135',
          dataSourceId: 168224272650411940,
          dataSourceName: 'qryDcOaOrgPageByParentOrgKey',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '315792',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'header',
            },
            {
              attrId: '796244',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'path',
            },
            {
              attrId: '9504571',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'query',
            },
            {
              attrId: '3510016',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              children: [
                {
                  attrId: '72673956',
                  code: 'parentOrgKey',
                  name: 'parentOrgKey',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.parentOrgKey',
                  value: {
                    type: ['datasource', 'orgObj', 'data'],
                    code: 'parentOrgKey',
                  },
                },
                {
                  attrId: '6580132',
                  code: 'orgCode',
                  name: 'orgCode',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.orgCode',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'orgCode',
                  },
                },
                {
                  attrId: '122768',
                  code: 'orgName',
                  name: 'orgName',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.orgName',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'orgName',
                  },
                },
                {
                  attrId: '2561076',
                  code: 'orgDataType',
                  name: 'orgDataType',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.orgDataType',
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'orgDataType',
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
            dataId: 167843006349370660,
            options: {
              compId: 'Table_547445',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '413227',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 167843006554282000,
            options: {
              compId: 'Table_547445',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '796716',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource41.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource41,
      { options_618734 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const refreshUserTable = (options_380766: any) => {
    const eventDatasetLoading31: any = [
      {
        type: 'setLoading',
        dataId: 167869528370433180,
        options: {
          compId: 'Table_4678628',
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Table',
          id: '835137',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading31.params =
      [
        {
          title: '事件入参',
          name: 'options_380766',
          value: '$options_380766$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading31, { options_380766 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource42: any = [
      {
        type: 'reloadDataSource',
        dataId: 167876389689353700,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '2747855',
          pageJsonId: '4868135',
          dataSourceId: 167868959393058940,
          dataSourceName: 'qryDcOaUserPageByOrgCode',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '105784',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '99372722',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '227055',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '004917',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '6174899',
                  code: 'usrUdfMobile',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '742702',
                  code: 'isQueryOther',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: { type: [], code: '' },
                },
                {
                  attrId: '2984317',
                  code: 'pageSize',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '955796',
                  code: 'usrLogin',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_493328', 'getFieldsValue'],
                    code: 'usrLogin',
                  },
                },
                {
                  attrId: '375091',
                  code: 'usrLastName',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_493328', 'getFieldsValue'],
                    code: 'usrLastName',
                  },
                },
                {
                  attrId: '058881',
                  code: 'orgCode',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['datasource', 'pageParam', 'data'],
                    code: 'orgCode',
                  },
                },
                {
                  attrId: '902319',
                  code: 'pageNum',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '810371',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '1279309',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '6175216',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '69169',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '17244282',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '0957364',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '498762',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '9743775',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '7936483',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '819853',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '305467',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '0261626',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '2569676',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '882257',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '00428',
                      code: 'usrChangePwdAtNextLogon',
                      name: 'usrChangePwdAtNextLogon',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '460988',
                      code: 'jobLevel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '199997',
                      code: 'isDefault',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1146655',
                      code: 'usrUdfEmployeeId',
                      name: 'usrUdfEmployeeId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '337048',
                      code: 'usrUdfSex',
                      name: 'usrUdfSex',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3954138',
                      code: 'usrUdfShortName',
                      name: 'usrUdfShortName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '55976',
                      code: 'usrEmpType',
                      name: 'usrEmpType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '120465',
                      code: 'usrStatus',
                      name: 'usrStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '95462',
                      code: 'usrUdfMgrErpOrg',
                      name: 'usrUdfMgrErpOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7573738',
                      code: 'usrLogin',
                      name: 'usrLogin',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '756881',
                      code: 'subUsrUdfOrgOrders',
                      name: 'subUsrUdfOrgOrders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '223239',
                      code: 'usrUdfMobile',
                      name: 'usrUdfMobile',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '169477',
                      code: 'usrLoginAttemptsCtr',
                      name: 'usrLoginAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0190699',
                      code: 'usrEmail',
                      name: 'usrEmail',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '916461',
                      code: 'subUsrUdfOaOrgs',
                      name: 'subUsrUdfOaOrgs',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '517279',
                      code: 'usrCreated',
                      name: 'usrCreated',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '160646',
                      code: 'usrPassword',
                      name: 'usrPassword',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '529085',
                      code: 'usrCreate',
                      name: 'usrCreate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '234584',
                      code: 'actName',
                      name: 'actName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '64297',
                      code: 'actUdfNum',
                      name: 'actUdfNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '292215',
                      code: 'orgName',
                      name: 'orgName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5881398',
                      code: 'usrPwdResetAttemptsCtr',
                      name: 'usrPwdResetAttemptsCtr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6695941',
                      code: 'usrUdfSysMask',
                      name: 'usrUdfSysMask',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '625817',
                      code: 'usrUdfDepartment',
                      name: 'usrUdfDepartment',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9688296',
                      code: 'usrProvisionedDate',
                      name: 'usrProvisionedDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '480537',
                      code: 'actKey',
                      name: 'actKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '06851565',
                      code: 'subUsrUdfJobLevels',
                      name: 'subUsrUdfJobLevels',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0159619',
                      code: 'usrKey',
                      name: 'usrKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '312012',
                      code: 'usrType',
                      name: 'usrType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '000468',
                      code: 'usrEndDate',
                      name: 'usrEndDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '980457',
                      code: 'orgUserRelId',
                      name: 'orgUserRelId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '097763',
                      code: 'usrLocked',
                      name: 'usrLocked',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '573163',
                      code: 'usrLastName',
                      name: 'usrLastName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '993477',
                      code: 'usrUdfOrgOrder',
                      name: 'usrUdfOrgOrder',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6225624',
                      code: 'cardInfo',
                      name: 'cardInfo',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '37561239',
                      code: 'subOrgNames',
                      name: 'subOrgNames',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '232971',
                      code: 'usrFirstName',
                      name: 'usrFirstName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '748128',
                      code: 'usrUdfIdNum',
                      name: 'usrUdfIdNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '974123',
                      code: 'usrUdfBelongComp',
                      name: 'usrUdfBelongComp',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '14102',
                      code: 'usrUdfJobLevel',
                      name: 'usrUdfJobLevel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '110565',
                      code: 'usrUdfOaOrg',
                      name: 'usrUdfOaOrg',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '64428',
                      code: 'usrUdfOaNum',
                      name: 'usrUdfOaNum',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '320427',
                      code: 'usrUpdate',
                      name: 'usrUpdate',
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
            dataId: 167876389689370430,
            options: {
              compId: 'Table_4678628',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '7822958',
              loading: false,
            },
            line_number: 3,
          },
          {
            type: 'customActionCode',
            dataId: 167876389689333660,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '994537',
              pageJsonId: '4868135',
              code: 'function main(data,state,success,fail){var _data$qryDcOaUserPage,_data$qryDcOaUserPage2,_data$qryDcOaUserPage3,_data$qryDcOaUserPage4;console.log("\\u5173\\u8054\\u7528\\u6237\\u4FE1\\u606F",((_data$qryDcOaUserPage=data.qryDcOaUserPageByOrgCode)===null||_data$qryDcOaUserPage===void 0?void 0:(_data$qryDcOaUserPage2=_data$qryDcOaUserPage.resultData)===null||_data$qryDcOaUserPage2===void 0?void 0:_data$qryDcOaUserPage2.records)||[]);state.associatedUsers=((_data$qryDcOaUserPage3=data.qryDcOaUserPageByOrgCode)===null||_data$qryDcOaUserPage3===void 0?void 0:(_data$qryDcOaUserPage4=_data$qryDcOaUserPage3.resultData)===null||_data$qryDcOaUserPage4===void 0?void 0:_data$qryDcOaUserPage4.records)||[];success()};',
            },
            line_number: 4,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 167876389689300400,
            options: {
              compId: 'Table_4678628',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Table',
              id: '668205',
              loading: false,
            },
            line_number: 5,
          },
        ],
      },
    ];
    eventDatareloadDataSource42.params =
      [
        {
          title: '事件入参',
          name: 'options_380766',
          value: '$options_380766$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource42,
      { options_380766 },
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
    refreshOaOrg,
    refreshUserTable,
  }));

  useEffect(() => {
    const eventDatasetDisable70: any = [
      {
        type: 'setDisable',
        dataId: 167841587530734200,
        options: {
          compId: [
            'Form_0232295',
            'Button_671049',
            'Button_166271',
            'Button_8258636',
            'Form_493328',
            'Button_213218',
            'Button_221995',
          ],
          compLib: 'comm',
          pageJsonId: '4868135',
          compName: 'Form',
          id: '714399',
          disabled: 'true',
          compid: [
            'Form_0232295',
            'Button_671049',
            'Button_166271',
            'Button_8258636',
            'Form_493328',
            'Button_213218',
            'Button_221995',
          ],
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable70.params = [] || [];
    CMDGenerator(eventDatasetDisable70, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDataapiRequest531: any = [
      {
        type: 'apiRequest',
        dataId: 168225727449280320,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9580555',
          pageJsonId: '4868135',
          sync: false,
          actionTitle: '查询当前组织是否有数据如果有就加载否则隐',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'countDcOaOrgByRoleCode',
          _apiCode: 'countDcOaOrgByRoleCode',
          _source: 'rhin',
          _sourceName: '根据身份角色编码统计组织记录-tsm',
          _serviceId: '967313688099790848',
          _serviceTitle:
            '根据身份角色编码统计组织记录-tsm: countDcOaOrgByRoleCode',
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
                  dataKey: '33349_root.header',
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
                  dataKey: '33349_root.path',
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
                  dataKey: '33349_root.query',
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
                  dataKey: '33349_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '33349_root',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168225727449258050,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6638456',
              pageJsonId: '4868135',
              actionTitle: '判断是否返回组织数据',
              code: 'function main(data,state,success,fail){console.log("\\u67E5\\u8BE2\\u5F53\\u524D\\u7EC4\\u7EC7\\u8FD4\\u56DE\\u7684\\u6570\\u636E",reply_9580555);if(reply_9580555.resultCode==="0"&&reply_9580555.resultData>0){console.log("\\u9700\\u8981\\u52A0\\u8F7D\\u5F53\\u524D\\u7EC4\\u7EC7\\u6811");success(1)}else{success(0)}};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '062529',
                    options: {
                      useManual: true,
                      context: '$data_6638456$',
                      operate: '==',
                      manualValue: '1',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168225727449221220,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 168225727449290180,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168225727449241100,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: 'TabPane_6830295',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'TabPane',
                          id: '57956',
                          visible: '',
                        },
                        actionObjId: 'TabPane_6830295',
                        actionObjName: 'TabPane',
                        value: 'setVisible',
                        compLib: 'comm',
                        shielding: true,
                        line_number: 8,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    shielding: true,
                    callback: [
                      {
                        type: 'setVisible',
                        dataId: 168225727449241100,
                        shielding: true,
                        options: {
                          compId: 'TabPane_6830295',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'TabPane',
                          id: '57956',
                          visible: '',
                        },
                        line_number: 8,
                      },
                    ],
                  },
                ],
                line_number: 4,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 168225727449269920,
                    shielding: true,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '279728',
                      pageJsonId: '4868135',
                      sync: false,
                      actionTitle: '查询当前组织树',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qryOrgTreeByParentOrgCode',
                      _apiCode: 'qryOrgTreeByParentOrgCode',
                      _source: 'rhin',
                      _sourceName: '根据父组织编码查询下级所有组织节点-tsm',
                      _serviceId: '953687613765332992',
                      _serviceTitle:
                        '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                              dataKey: '44879371_root.header',
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
                              dataKey: '44879371_root.path',
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
                              dataKey: '44879371_root.query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'parentCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.parentCode',
                                  compType: 'Input',
                                  name: 'parentCode',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-0',
                                  id: 'root.body.parentCode',
                                  dataKey: '44879371_root.body.parentCode',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'isDefault',
                                  name: '是否默认',
                                  attrType: 'field',
                                  type: 'boolean',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.isDefault',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-1',
                                  id: 'root.body.isDefault',
                                  dataKey: '44879371_root.body.isDefault',
                                  value: { type: ['customize'], code: 'false' },
                                },
                                {
                                  code: 'filterId',
                                  name: '过滤主键ID',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.filterId',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-2',
                                  id: 'root.body.filterId',
                                  dataKey: '44879371_root.body.filterId',
                                },
                              ],
                              _id: 'root.body',
                              compType: 'Input',
                              parents: ['root'],
                              parentType: 'object',
                              parentKey: '0',
                              key: '0-3',
                              id: 'root.body',
                              dataKey: '44879371_root.body',
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '44879371_root',
                        },
                      ],
                      params: 'object',
                    },
                    line_number: 5,
                    callback1: [
                      {
                        type: 'reloadData',
                        dataId: 168225727449201340,
                        shielding: true,
                        options: {
                          compId: 'Tree_1088',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Tree',
                          id: '676675',
                          data: '$reply_279728?.resultData$',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          childrenKey: 'children',
                        },
                        line_number: 6,
                        callback1: [],
                      },
                      {
                        type: 'console',
                        dataId: 168225727449226400,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '099321',
                          pageJsonId: '4868135',
                          value: [
                            '---------查询当前组织树返回--------',
                            '$reply_279728?.resultData$',
                          ],
                        },
                        line_number: 7,
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
              {
                type: 'console',
                dataId: 168225727449224100,
                shielding: true,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '638629',
                  pageJsonId: '4868135',
                  value: ['判断是否加载当前组织返回', '$data_6638456$'],
                },
                line_number: 9,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest531.params = [] || [];
    CMDGenerator(eventDataapiRequest531, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest532: any = [
      {
        type: 'apiRequest',
        dataId: 168225728838267230,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '529571',
          pageJsonId: '4868135',
          sync: false,
          actionTitle: '查询默认组织树',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryOrgTreeByParentOrgCode',
          _apiCode: 'qryOrgTreeByParentOrgCode',
          _source: 'rhin',
          _sourceName: '根据父组织编码查询下级所有组织节点-tsm',
          _serviceId: '953687613765332992',
          _serviceTitle:
            '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                  dataKey: '7970266_root.header',
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
                  dataKey: '7970266_root.path',
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
                  dataKey: '7970266_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'parentCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.parentCode',
                      compType: 'Input',
                      name: 'parentCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.parentCode',
                      dataKey: '7970266_root.body.parentCode',
                    },
                    {
                      code: 'isDefault',
                      name: '是否默认',
                      attrType: 'field',
                      type: 'boolean',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.isDefault',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.isDefault',
                      dataKey: '7970266_root.body.isDefault',
                      value: { type: ['customize'], code: 'true' },
                    },
                    {
                      code: 'filterId',
                      name: '过滤主键ID',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.filterId',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                      id: 'root.body.filterId',
                      dataKey: '7970266_root.body.filterId',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '7970266_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '7970266_root',
            },
          ],
          params: 'object',
        },
        line_number: 10,
        callback1: [
          {
            type: 'reloadData',
            dataId: 168225728838286240,
            shielding: true,
            options: {
              compId: 'Tree_27954628',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Tree',
              id: '289554',
              data: '$reply_529571?.resultData$',
              labelKey: 'nodeValue',
              nodeValueKey: 'nodeKey',
              childrenKey: 'children',
            },
            line_number: 11,
            callback1: [],
          },
          {
            type: 'console',
            dataId: 168225728838296100,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '21668',
              pageJsonId: '4868135',
              value: [
                '-----加载默认组织树返回数据-----',
                '$reply_529571?.resultData$',
              ],
            },
            line_number: 12,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest532.params = [] || [];
    CMDGenerator(eventDataapiRequest532, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest533: any = [
      {
        type: 'apiRequest',
        dataId: 168225731507684830,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '2277205',
          pageJsonId: '4868135',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryOrgTreeByParentOrgCode',
          _apiCode: 'qryOrgTreeByParentOrgCode',
          _source: 'rhin',
          _serviceId: '953687613765332992',
          _serviceTitle:
            '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'parentCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentCode',
                  compType: 'Input',
                  name: 'parentCode',
                  parents: ['root', 'body'],
                  id: 'body.parentCode',
                  dataKey: '0790536_body.parentCode',
                  value: { type: ['customize'], code: '1' },
                  _deletable: true,
                  parentType: 'object',
                  parentKey: '0-0',
                  key: '0-0-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '0790536_body',
              _deletable: true,
              key: '0-0',
              parentType: 'object',
              parentKey: '0',
            },
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
                  parents: ['root', 'root'],
                  parentType: 'object',
                  parentKey: '0-1',
                  key: '0-1-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root', 'root'],
                  parentType: 'object',
                  parentKey: '0-1',
                  key: '0-1-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root', 'root'],
                  parentType: 'object',
                  parentKey: '0-1',
                  key: '0-1-2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'parentCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.parentCode',
                      compType: 'Input',
                      name: 'parentCode',
                      parents: ['root', 'root', 'body'],
                      parentType: 'object',
                      parentKey: '0-1-3',
                      key: '0-1-3-0',
                    },
                    {
                      code: 'isDefault',
                      name: '是否默认',
                      attrType: 'field',
                      type: 'boolean',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.isDefault',
                      compType: 'Input',
                      parents: ['root', 'root', 'body'],
                      parentType: 'object',
                      parentKey: '0-1-3',
                      key: '0-1-3-1',
                    },
                    {
                      code: 'filterId',
                      name: '过滤主键ID',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.filterId',
                      compType: 'Input',
                      parents: ['root', 'root', 'body'],
                      parentType: 'object',
                      parentKey: '0-1-3',
                      key: '0-1-3-2',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root', 'root'],
                  parentType: 'object',
                  parentKey: '0-1',
                  key: '0-1-3',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: ['root'],
              key: '0-1',
              parentType: 'object',
              parentKey: '0',
            },
          ],
          _sourceName: '根据父组织编码查询下级所有组织节点-tsm',
        },
        line_number: 13,
        callback1: [
          {
            type: 'reloadData',
            dataId: 168225731507613900,
            shielding: true,
            options: {
              compId: 'TreeSelect_257432',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'TreeSelect',
              id: '024649',
              data: '$reply_2277205?.resultData$',
              labelKey: 'nodeValue',
              nodeValueKey: 'nodeKey',
              childrenKey: 'children',
              selectable: 'isCheck',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest533.params = [] || [];
    CMDGenerator(eventDataapiRequest533, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest534: any = [
      {
        type: 'apiRequest',
        dataId: 167842749343184130,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '595787',
          pageJsonId: 31,
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
                  dataKey: '595787_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
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
                      _id: 'root.path.attrCode',
                      compType: 'Input',
                      parents: ['root', 'path'],
                      id: 'root.path.attrCode',
                      dataKey: '595787_root.path.attrCode',
                      value: { type: ['customize'], code: 'ORG_LEVEL' },
                      parentType: 'object',
                      parentKey: '0-1',
                      key: '0-1-0',
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '595787_root.path',
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
                  dataKey: '595787_root.query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '595787_root.body',
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
              dataKey: '595787_root',
            },
          ],
          actionTitle: '查询组织等级',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 15,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167842760777317800,
            options: {
              compId: 'Input_0253633',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Select',
              id: '482488',
              data: '$reply_595787?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 16,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest534.params = [] || [];
    CMDGenerator(eventDataapiRequest534, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest535: any = [
      {
        type: 'apiRequest',
        dataId: 167842764792594400,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '120809',
          pageJsonId: 31,
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
                  dataKey: '120809_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
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
                      _id: 'root.path.attrCode',
                      compType: 'Input',
                      parents: ['root', 'path'],
                      id: 'root.path.attrCode',
                      dataKey: '120809_root.path.attrCode',
                      value: { type: ['customize'], code: 'ORG_LEVEL' },
                      parentType: 'object',
                      parentKey: '0-1',
                      key: '0-1-0',
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '120809_root.path',
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
                  dataKey: '120809_root.query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '120809_root.body',
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
              dataKey: '120809_root',
            },
          ],
          actionTitle: '查询组织类型',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 17,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167842768559624860,
            options: {
              compId: 'Input_667391',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Select',
              id: '392084',
              data: '$reply_120809?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 18,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest535.params = [] || [];
    CMDGenerator(eventDataapiRequest535, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest536: any = [
      {
        type: 'apiRequest',
        dataId: 167843118257451420,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0698047827',
          pageJsonId: 31,
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
                  dataKey: '0698047827_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
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
                      _id: 'root.path.attrCode',
                      compType: 'Input',
                      parents: ['root', 'path'],
                      id: 'root.path.attrCode',
                      dataKey: '0698047827_root.path.attrCode',
                      value: { type: ['customize'], code: 'orgDataType' },
                      parentType: 'object',
                      parentKey: '0-1',
                      key: '0-1-0',
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '0698047827_root.path',
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
                  dataKey: '0698047827_root.query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '0698047827_root.body',
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
              dataKey: '0698047827_root',
            },
          ],
          actionTitle: '查询组织类型',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 19,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167843120481071740,
            options: {
              compId: 'Select_665971',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Select',
              id: '500917',
              data: '$reply_0698047827?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 20,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest536.params = [] || [];
    CMDGenerator(eventDataapiRequest536, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest537: any = [
      {
        type: 'apiRequest',
        dataId: 168223291198459680,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '33349',
          pageJsonId: '4868135',
          sync: false,
          actionTitle: '查询当前组织是否有数据如果有就加载否则隐',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'countDcOaOrgByRoleCode',
          _apiCode: 'countDcOaOrgByRoleCode',
          _source: 'rhin',
          _sourceName: '根据身份角色编码统计组织记录-tsm',
          _serviceId: '967313688099790848',
          _serviceTitle:
            '根据身份角色编码统计组织记录-tsm: countDcOaOrgByRoleCode',
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
                  dataKey: '33349_root.header',
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
                  dataKey: '33349_root.path',
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
                  dataKey: '33349_root.query',
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
                  dataKey: '33349_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '33349_root',
            },
          ],
        },
        line_number: 21,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168223303689187000,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '959023',
              pageJsonId: '4868135',
              actionTitle: '判断是否返回组织数据',
              code: 'function main(data,state,success,fail){console.log("\\u67E5\\u8BE2\\u5F53\\u524D\\u7EC4\\u7EC7\\u8FD4\\u56DE\\u7684\\u6570\\u636E",reply_33349);if(reply_33349.resultCode==="0"&&reply_33349.resultData>0){console.log("\\u9700\\u8981\\u52A0\\u8F7D\\u5F53\\u524D\\u7EC4\\u7EC7\\u6811");success(1)}else{success(0)}};',
            },
            line_number: 22,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '062529',
                    options: {
                      useManual: true,
                      context: '$data_959023$',
                      operate: '==',
                      manualValue: '1',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168223360350711940,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 168223362097227970,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168223385020462600,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: 'TabPane_6830295',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'TabPane',
                          id: '321165',
                          visible: '',
                        },
                        actionObjId: 'TabPane_6830295',
                        actionObjName: 'TabPane',
                        value: 'setVisible',
                        compLib: 'comm',
                        line_number: 28,
                      },
                      {
                        dataName: 'action',
                        dataId: 168230098965451400,
                        children: [],
                        todoOptions: ['valueArray'],
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '3405346',
                          pageJsonId: '4868135',
                        },
                        actionObjId: 'debug',
                        actionObjName: 'system',
                        value: 'console',
                        line_number: 29,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    callback: [
                      {
                        type: 'setVisible',
                        dataId: 168223385020462600,
                        options: {
                          compId: 'TabPane_6830295',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'TabPane',
                          id: '321165',
                          visible: '',
                        },
                        line_number: 28,
                      },
                      {
                        type: 'console',
                        dataId: 168230098965451400,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '3405346',
                          pageJsonId: '4868135',
                        },
                        line_number: 29,
                      },
                    ],
                  },
                ],
                line_number: 23,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 168223365072790850,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '44879371',
                      pageJsonId: '4868135',
                      sync: false,
                      actionTitle: '查询当前组织树',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qryOrgTreeByParentOrgCode',
                      _apiCode: 'qryOrgTreeByParentOrgCode',
                      _source: 'rhin',
                      _sourceName: '根据父组织编码查询下级所有组织节点-tsm',
                      _serviceId: '953687613765332992',
                      _serviceTitle:
                        '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                              dataKey: '44879371_root.header',
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
                              dataKey: '44879371_root.path',
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
                              dataKey: '44879371_root.query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'parentCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.parentCode',
                                  compType: 'Input',
                                  name: 'parentCode',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-0',
                                  id: 'root.body.parentCode',
                                  dataKey: '44879371_root.body.parentCode',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'isDefault',
                                  name: '是否默认',
                                  attrType: 'field',
                                  type: 'boolean',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.isDefault',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-1',
                                  id: 'root.body.isDefault',
                                  dataKey: '44879371_root.body.isDefault',
                                  value: { type: ['customize'], code: 'false' },
                                },
                                {
                                  code: 'filterId',
                                  name: '过滤主键ID',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.filterId',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-2',
                                  id: 'root.body.filterId',
                                  dataKey: '44879371_root.body.filterId',
                                },
                              ],
                              _id: 'root.body',
                              compType: 'Input',
                              parents: ['root'],
                              parentType: 'object',
                              parentKey: '0',
                              key: '0-3',
                              id: 'root.body',
                              dataKey: '44879371_root.body',
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '44879371_root',
                        },
                      ],
                      params: 'object',
                    },
                    line_number: 24,
                    callback1: [
                      {
                        type: 'reloadData',
                        dataId: 168223374024460350,
                        options: {
                          compId: 'Tree_1088',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Tree',
                          id: '6563306',
                          data: '$reply_44879371?.resultData$',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          childrenKey: 'children',
                        },
                        line_number: 25,
                        callback1: [
                          {
                            type: 'sysSetVisible',
                            dataId: 168230100905919100,
                            options: {
                              compId: ['Tree_1088'],
                              compName: 'page',
                              id: '6127245',
                              pageJsonId: '4868135',
                              visible: 'true',
                              compid: ['Tree_1088'],
                            },
                            line_number: 26,
                          },
                        ],
                      },
                      {
                        type: 'console',
                        dataId: 168223376459091700,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '833929',
                          pageJsonId: '4868135',
                          value: [
                            '---------查询当前组织树返回--------',
                            '$reply_44879371?.resultData$',
                          ],
                        },
                        line_number: 27,
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
              {
                type: 'console',
                dataId: 168224130960145470,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '715616',
                  pageJsonId: '4868135',
                  value: ['判断是否加载当前组织返回', '$data_959023$'],
                },
                line_number: 30,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest537.params = [] || [];
    CMDGenerator(eventDataapiRequest537, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest538: any = [
      {
        type: 'apiRequest',
        dataId: 168223389762672640,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '7970266',
          pageJsonId: '4868135',
          sync: false,
          actionTitle: '查询默认组织树',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryOrgTreeByParentOrgCode',
          _apiCode: 'qryOrgTreeByParentOrgCode',
          _source: 'rhin',
          _sourceName: '根据父组织编码查询下级所有组织节点-tsm',
          _serviceId: '953687613765332992',
          _serviceTitle:
            '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                  dataKey: '7970266_root.header',
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
                  dataKey: '7970266_root.path',
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
                  dataKey: '7970266_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'parentCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.parentCode',
                      compType: 'Input',
                      name: 'parentCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.parentCode',
                      dataKey: '7970266_root.body.parentCode',
                    },
                    {
                      code: 'isDefault',
                      name: '是否默认',
                      attrType: 'field',
                      type: 'boolean',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.isDefault',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.isDefault',
                      dataKey: '7970266_root.body.isDefault',
                      value: { type: ['customize'], code: 'true' },
                    },
                    {
                      code: 'filterId',
                      name: '过滤主键ID',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.filterId',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                      id: 'root.body.filterId',
                      dataKey: '7970266_root.body.filterId',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '7970266_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '7970266_root',
            },
          ],
          params: 'object',
        },
        line_number: 31,
        callback1: [
          {
            type: 'reloadData',
            dataId: 168223397193593200,
            options: {
              compId: 'Tree_27954628',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'Tree',
              id: '598289',
              data: '$reply_7970266?.resultData$',
              labelKey: 'nodeValue',
              nodeValueKey: 'nodeKey',
              childrenKey: 'children',
            },
            line_number: 32,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 168230104552255580,
                options: {
                  compId: ['Tree_27954628'],
                  compName: 'page',
                  id: '791891',
                  pageJsonId: '4868135',
                  visible: 'true',
                  compid: ['Tree_27954628'],
                },
                line_number: 33,
              },
              {
                type: 'setDataSource',
                dataId: 168249223068389760,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '8452563',
                  pageJsonId: '4868135',
                  dataSourceId: 168224932355559900,
                  dataSourceName: 'orgObj',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '928553',
                      code: 'parentOrgKey',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '619622',
                      code: 'tabController',
                      name: '属性',
                      type: 'boolean',
                      initialData: { type: 'static', value: 'false' },
                      showInput: true,
                      value: { type: ['customize'], code: 'true' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 34,
                callback1: [],
                callback2: [],
              },
            ],
          },
          {
            type: 'console',
            dataId: 168223484129802980,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '7154609',
              pageJsonId: '4868135',
              value: [
                '-----加载默认组织树返回数据-----',
                '$reply_7970266?.resultData$',
              ],
            },
            line_number: 35,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest538.params = [] || [];
    CMDGenerator(eventDataapiRequest538, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest539: any = [
      {
        type: 'apiRequest',
        dataId: 167898362331462620,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0790536',
          pageJsonId: '4868135',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryOrgTreeByParentOrgCode',
          _apiCode: 'qryOrgTreeByParentOrgCode',
          _source: 'rhin',
          _serviceId: '953687613765332992',
          _serviceTitle:
            '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'parentCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentCode',
                  compType: 'Input',
                  name: 'parentCode',
                  parents: ['body'],
                  id: 'body.parentCode',
                  dataKey: '0790536_body.parentCode',
                  value: { type: ['customize'], code: '1' },
                  _deletable: true,
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '0790536_body',
              _deletable: true,
              key: '3',
            },
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
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'parentCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.parentCode',
                      compType: 'Input',
                      name: 'parentCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'isDefault',
                      name: '是否默认',
                      attrType: 'field',
                      type: 'boolean',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.isDefault',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                    {
                      code: 'filterId',
                      name: '过滤主键ID',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.filterId',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
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
            },
          ],
        },
        line_number: 36,
        callback1: [
          {
            type: 'reloadData',
            dataId: 167898417365515870,
            shielding: true,
            options: {
              compId: 'TreeSelect_257432',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'TreeSelect',
              id: '965809',
              data: '$reply_0790536?.resultData$',
              labelKey: 'nodeValue',
              nodeValueKey: 'nodeKey',
              childrenKey: 'children',
              selectable: 'isCheck',
            },
            line_number: 37,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest539.params = [] || [];
    CMDGenerator(eventDataapiRequest539, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetLoading48: any = [
      {
        type: 'setLoading',
        dataId: 168229880681152350,
        shielding: true,
        options: {
          compId: 'View_0687078',
          compLib: 'custom',
          pageJsonId: '4868135',
          compName: 'View',
          id: '803611',
          loading: false,
        },
        line_number: 38,
      },
    ];
    eventDatasetLoading48.params = [] || [];
    CMDGenerator(eventDatasetLoading48, {}, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
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
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_4868135_1')}
        {...injectData}
      >
        <HorizontalView
          name={'左右布局'}
          $$componentItem={{
            id: 'HorizontalView_763739',
            uid: 'HorizontalView_763739',
            type: 'HorizontalView',
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
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_763739')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_480841',
              uid: 'View_480841',
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
              width: '30%',
              height: '100%',
              overflowY: 'auto',
              lineHeight: '100%px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_480841')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_0687078',
                uid: 'View_0687078',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                lineHeight: '100%px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_0687078')}
              {...injectData}
            >
              <Tabs
                name={'标签页'}
                defaultActiveKey={'0'}
                type={'line'}
                animated={false}
                tabActiveKey={'1'}
                tabBarGutter={'4px'}
                tabPosition={'top'}
                size={'default'}
                $$componentItem={{
                  id: 'Tabs_58095364',
                  uid: 'Tabs_58095364',
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
                onChange={(activeKey: any) => {
                  const eventDataclearTreeSelectedKey2: any = [
                    {
                      type: 'clearTreeSelectedKey',
                      dataId: 168224259984348800,
                      options: {
                        compId: 'Tree_27954628',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Tree',
                        id: '63452776',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearTreeSelectedKey2.params =
                    [
                      {
                        title: '切换面板key',
                        name: 'activeKey',
                        value: '$activeKey$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataclearTreeSelectedKey2,
                    { activeKey },
                    'clearTreeSelectedKey',
                    {
                      id: 'clearTreeSelectedKey',
                      name: 'clearTreeSelectedKey',
                      type: 'clearTreeSelectedKey',
                      platform: 'pc',
                    },
                  );
                  const eventDataclearTreeSelectedKey3: any = [
                    {
                      type: 'clearTreeSelectedKey',
                      dataId: 168224260411445760,
                      options: {
                        compId: 'Tree_1088',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Tree',
                        id: '347574',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearTreeSelectedKey3.params =
                    [
                      {
                        title: '切换面板key',
                        name: 'activeKey',
                        value: '$activeKey$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataclearTreeSelectedKey3,
                    { activeKey },
                    'clearTreeSelectedKey',
                    {
                      id: 'clearTreeSelectedKey',
                      name: 'clearTreeSelectedKey',
                      type: 'clearTreeSelectedKey',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource242: any = [
                    {
                      type: 'setDataSource',
                      dataId: 168230222422871360,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '517389',
                        pageJsonId: '4868135',
                        dataSourceId: 168224932355559900,
                        dataSourceName: 'orgObj',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '928553',
                            code: 'parentOrgKey',
                            name: '属性',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['EMPTY_DATA', 'string'],
                              hideAttr: true,
                              code: '$EMPTY_DATA.string$',
                            },
                            _codePath: ['parentOrgKey'],
                            _idpath: ['928553'],
                          },
                          {
                            attrId: '619622',
                            code: 'tabController',
                            name: '属性',
                            type: 'boolean',
                            initialData: { type: 'static', value: 'false' },
                            showInput: true,
                            _codePath: ['tabController'],
                            _idpath: ['619622'],
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource242.params =
                    [
                      {
                        title: '切换面板key',
                        name: 'activeKey',
                        value: '$activeKey$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDataSource242,
                    { activeKey },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasysSetVisible6: any = [
                    {
                      type: 'sysSetVisible',
                      dataId: 168230303613918820,
                      options: {
                        compId: ['Button_224226_9699964'],
                        compName: 'page',
                        id: '0421765',
                        pageJsonId: '4868135',
                        visible: '',
                        compid: ['Button_224226_9699964'],
                      },
                      line_number: 4,
                    },
                  ];
                  eventDatasysSetVisible6.params =
                    [
                      {
                        title: '切换面板key',
                        name: 'activeKey',
                        value: '$activeKey$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasysSetVisible6,
                    { activeKey },
                    'sysSetVisible',
                    {
                      id: 'sysSetVisible',
                      name: 'sysSetVisible',
                      type: 'sysSetVisible',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Tabs_58095364')}
                {...injectData}
              >
                <TabPane
                  name={'默认组织'}
                  tab={'默认组织'}
                  key={'0'}
                  forceRender={false}
                  $$componentItem={{
                    id: 'TabPane_759436',
                    uid: 'TabPane_759436',
                    type: 'TabPane',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) => refs.setComponentRef(r, 'TabPane_759436')}
                  {...injectData}
                >
                  <Tree
                    name={'树形控件'}
                    defaultExpandAll={false}
                    showLine={true}
                    selectable={true}
                    isAsync={false}
                    treeData={[
                      {
                        title: '第一列',
                        key: 'column1',
                        selectable: true,
                        value: 'column1',
                        label: '第一列',
                        $$isParent: true,
                        children: [],
                      },
                    ]}
                    showLineIcon={false}
                    showSearch={true}
                    checkable={false}
                    className={'huiqianchulirenxuanze'}
                    $$componentItem={{
                      id: 'Tree_27954628',
                      uid: 'Tree_27954628',
                      type: 'Tree',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    onSelect={(selectedKeys: any, { node }: any) => {
                      const eventDatasetLoading214: any = [
                        {
                          type: 'setLoading',
                          dataId: 168223788459971650,
                          options: {
                            compId: 'Table_547445',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '469078',
                            loading: true,
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatasetLoading214.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatasetLoading214,
                        { selectedKeys, node },
                        'setLoading',
                        {
                          id: 'setLoading',
                          name: 'setLoading',
                          type: 'setLoading',
                          platform: 'pc',
                        },
                      );
                      const eventDataclearValue185: any = [
                        {
                          type: 'clearValue',
                          dataId: 168223794216149500,
                          options: {
                            compId: 'Input_3889064_9887114',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '664821',
                          },
                          line_number: 2,
                        },
                      ];
                      eventDataclearValue185.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDataclearValue185,
                        { selectedKeys, node },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                      const eventDataclearValue186: any = [
                        {
                          type: 'clearValue',
                          dataId: 168223794819152450,
                          options: {
                            compId: 'Input_33684855_0267973',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '904111',
                          },
                          line_number: 3,
                        },
                      ];
                      eventDataclearValue186.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDataclearValue186,
                        { selectedKeys, node },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                      const eventDataclearValue187: any = [
                        {
                          type: 'clearValue',
                          dataId: 168223795533767970,
                          options: {
                            compId: 'Select_26459',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Select',
                            id: '269556',
                          },
                          line_number: 4,
                        },
                      ];
                      eventDataclearValue187.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDataclearValue187,
                        { selectedKeys, node },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                      const eventDatagetTreeSelectedKey11: any = [
                        {
                          type: 'getTreeSelectedKey',
                          dataId: 168224547068434780,
                          options: {
                            compId: 'Tree_27954628',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Tree',
                            id: '8027417',
                          },
                          line_number: 5,
                          callback1: [
                            {
                              type: 'reloadDataSource',
                              dataId: 168224548349053660,
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '791925',
                                pageJsonId: '4868135',
                                dataSourceId: 168224272650411940,
                                dataSourceName: 'qryDcOaOrgPageByParentOrgKey',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '315792',
                                    code: 'header',
                                    name: '请求头参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'header',
                                    _codePath: ['header'],
                                    _idpath: ['315792'],
                                  },
                                  {
                                    attrId: '796244',
                                    code: 'path',
                                    name: '请求路径参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'path',
                                    _codePath: ['path'],
                                    _idpath: ['796244'],
                                  },
                                  {
                                    attrId: '9504571',
                                    code: 'query',
                                    name: 'URL 参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'query',
                                    _codePath: ['query'],
                                    _idpath: ['9504571'],
                                  },
                                  {
                                    attrId: '3510016',
                                    code: 'body',
                                    name: '请求体',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    children: [
                                      {
                                        attrId: '72673956',
                                        code: 'parentOrgKey',
                                        name: 'parentOrgKey',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'body.parentOrgKey',
                                        value: {
                                          type: [
                                            'context',
                                            '$selectedKeys[0]$',
                                          ],
                                          code: '',
                                        },
                                        _codePath: ['body', 'parentOrgKey'],
                                        _idpath: ['3510016', '72673956'],
                                      },
                                      {
                                        attrId: '6580132',
                                        code: 'orgCode',
                                        name: 'orgCode',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'body.orgCode',
                                        _codePath: ['body', 'orgCode'],
                                        _idpath: ['3510016', '6580132'],
                                      },
                                      {
                                        attrId: '122768',
                                        code: 'orgName',
                                        name: 'orgName',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'body.orgName',
                                        _codePath: ['body', 'orgName'],
                                        _idpath: ['3510016', '122768'],
                                      },
                                      {
                                        attrId: '2561076',
                                        code: 'orgDataType',
                                        name: 'orgDataType',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'body.orgDataType',
                                        _codePath: ['body', 'orgDataType'],
                                        _idpath: ['3510016', '2561076'],
                                      },
                                      {
                                        attrId: '002561',
                                        code: 'pageNum',
                                        name: 'pageNum',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        _codePath: ['body', 'pageNum'],
                                        _idpath: ['3510016', '002561'],
                                      },
                                      {
                                        attrId: '383904',
                                        code: 'pageSize',
                                        name: 'pageSize',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        _codePath: ['body', 'pageSize'],
                                        _idpath: ['3510016', '383904'],
                                      },
                                    ],
                                    key: 'body',
                                    _codePath: ['body'],
                                    _idpath: ['3510016'],
                                  },
                                ],
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              line_number: 6,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 168224996251065020,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '105249',
                                    pageJsonId: '4868135',
                                    dataSourceId: 168224932355559900,
                                    dataSourceName: 'orgObj',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '928553',
                                        code: 'parentOrgKey',
                                        name: '属性',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        value: {
                                          type: [
                                            'context',
                                            '$selectedKeys[0]$',
                                          ],
                                          code: '',
                                        },
                                        _codePath: ['parentOrgKey'],
                                        _idpath: ['928553'],
                                      },
                                      {
                                        attrId: '619622',
                                        code: 'tabController',
                                        name: '属性',
                                        type: 'boolean',
                                        initialData: {
                                          type: 'static',
                                          value: 'false',
                                        },
                                        showInput: true,
                                        _codePath: ['tabController'],
                                        _idpath: ['619622'],
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 7,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                              callback2: [],
                            },
                          ],
                        },
                      ];
                      eventDatagetTreeSelectedKey11.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatagetTreeSelectedKey11,
                        { selectedKeys, node },
                        'getTreeSelectedKey',
                        {
                          id: 'getTreeSelectedKey',
                          name: 'getTreeSelectedKey',
                          type: 'getTreeSelectedKey',
                          platform: 'pc',
                        },
                      );
                      const eventDatasysSetVisible7: any = [
                        {
                          type: 'sysSetVisible',
                          dataId: 168230278992102880,
                          options: {
                            compId: ['Button_224226_9699964'],
                            compName: 'page',
                            id: '850714',
                            pageJsonId: '4868135',
                            visible: 'true',
                            compid: ['Button_224226_9699964'],
                          },
                          line_number: 8,
                        },
                      ];
                      eventDatasysSetVisible7.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatasysSetVisible7,
                        { selectedKeys, node },
                        'sysSetVisible',
                        {
                          id: 'sysSetVisible',
                          name: 'sysSetVisible',
                          type: 'sysSetVisible',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Tree_27954628')}
                    {...injectData}
                  />
                </TabPane>
                <TabPane
                  name={'当前组织'}
                  tab={'当前组织'}
                  key={'1'}
                  $$componentItem={{
                    id: 'TabPane_6830295',
                    uid: 'TabPane_6830295',
                    type: 'TabPane',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) => refs.setComponentRef(r, 'TabPane_6830295')}
                  {...injectData}
                >
                  <Tree
                    name={'树形控件'}
                    defaultExpandAll={false}
                    showLine={true}
                    selectable={true}
                    isAsync={false}
                    treeData={[
                      {
                        title: '第一列',
                        key: 'column1',
                        selectable: true,
                        value: 'column1',
                        label: '第一列',
                        $$isParent: true,
                        children: [
                          {
                            title: '第二列',
                            key: 'column2',
                            value: 'column2',
                            selectable: true,
                            label: '第二列',
                          },
                        ],
                      },
                    ]}
                    showLineIcon={false}
                    showSearch={true}
                    className={'huiqianchulirenxuanze'}
                    $$componentItem={{
                      id: 'Tree_1088',
                      uid: 'Tree_1088',
                      type: 'Tree',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    onSelect={(selectedKeys: any, { node }: any) => {
                      const eventDataclearValue188: any = [
                        {
                          type: 'clearValue',
                          dataId: 168224282723215260,
                          options: {
                            compId: 'Input_3889064_9887114',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '984714',
                          },
                          line_number: 1,
                        },
                      ];
                      eventDataclearValue188.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDataclearValue188,
                        { selectedKeys, node },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                      const eventDataclearValue189: any = [
                        {
                          type: 'clearValue',
                          dataId: 168224286472034500,
                          options: {
                            compId: 'Input_33684855_0267973',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Input',
                            id: '5583666',
                          },
                          line_number: 2,
                        },
                      ];
                      eventDataclearValue189.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDataclearValue189,
                        { selectedKeys, node },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                      const eventDataclearOptions1: any = [
                        {
                          type: 'clearOptions',
                          dataId: 168224287212713400,
                          options: {
                            compId: 'Select_26459',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Select',
                            id: '046454',
                          },
                          line_number: 3,
                        },
                      ];
                      eventDataclearOptions1.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDataclearOptions1,
                        { selectedKeys, node },
                        'clearOptions',
                        {
                          id: 'clearOptions',
                          name: 'clearOptions',
                          type: 'clearOptions',
                          platform: 'pc',
                        },
                      );
                      const eventDatareloadDataSource111: any = [
                        {
                          type: 'reloadDataSource',
                          dataId: 168224370643433730,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '957691',
                            pageJsonId: '4868135',
                            dataSourceId: 168224272650411940,
                            dataSourceName: 'qryDcOaOrgPageByParentOrgKey',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '315792',
                                code: 'header',
                                name: '请求头参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'header',
                                _codePath: ['header'],
                                _idpath: ['315792'],
                              },
                              {
                                attrId: '796244',
                                code: 'path',
                                name: '请求路径参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'path',
                                _codePath: ['path'],
                                _idpath: ['796244'],
                              },
                              {
                                attrId: '9504571',
                                code: 'query',
                                name: 'URL 参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'query',
                                _codePath: ['query'],
                                _idpath: ['9504571'],
                              },
                              {
                                attrId: '3510016',
                                code: 'body',
                                name: '请求体',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                children: [
                                  {
                                    attrId: '72673956',
                                    code: 'parentOrgKey',
                                    name: 'parentOrgKey',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.parentOrgKey',
                                    value: {
                                      type: ['context', '$selectedKeys[0]$'],
                                      code: '',
                                    },
                                    _codePath: ['body', 'parentOrgKey'],
                                    _idpath: ['3510016', '72673956'],
                                  },
                                  {
                                    attrId: '6580132',
                                    code: 'orgCode',
                                    name: 'orgCode',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.orgCode',
                                    _codePath: ['body', 'orgCode'],
                                    _idpath: ['3510016', '6580132'],
                                  },
                                  {
                                    attrId: '122768',
                                    code: 'orgName',
                                    name: 'orgName',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.orgName',
                                    _codePath: ['body', 'orgName'],
                                    _idpath: ['3510016', '122768'],
                                  },
                                  {
                                    attrId: '2561076',
                                    code: 'orgDataType',
                                    name: 'orgDataType',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.orgDataType',
                                    _codePath: ['body', 'orgDataType'],
                                    _idpath: ['3510016', '2561076'],
                                  },
                                  {
                                    attrId: '002561',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    _codePath: ['body', 'pageNum'],
                                    _idpath: ['3510016', '002561'],
                                  },
                                  {
                                    attrId: '383904',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    _codePath: ['body', 'pageSize'],
                                    _idpath: ['3510016', '383904'],
                                  },
                                ],
                                key: 'body',
                                _codePath: ['body'],
                                _idpath: ['3510016'],
                              },
                            ],
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 168224410620039100,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '747754',
                                pageJsonId: '4868135',
                                value: ['选中树节点', '$selectedKeys[0]$'],
                              },
                              line_number: 5,
                            },
                            {
                              type: 'setDataSource',
                              dataId: 168224984090746370,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '0459206',
                                pageJsonId: '4868135',
                                dataSourceId: 168224932355559900,
                                dataSourceName: 'orgObj',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '928553',
                                    code: 'parentOrgKey',
                                    name: '属性',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['context', '$selectedKeys[0]$'],
                                      code: '',
                                    },
                                    _codePath: ['parentOrgKey'],
                                    _idpath: ['928553'],
                                  },
                                  {
                                    attrId: '619622',
                                    code: 'tabController',
                                    name: '属性',
                                    type: 'boolean',
                                    initialData: {
                                      type: 'static',
                                      value: 'false',
                                    },
                                    showInput: true,
                                    _codePath: ['tabController'],
                                    _idpath: ['619622'],
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              line_number: 6,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDatareloadDataSource111.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatareloadDataSource111,
                        { selectedKeys, node },
                        'reloadDataSource',
                        {
                          id: 'reloadDataSource',
                          name: 'reloadDataSource',
                          type: 'reloadDataSource',
                          platform: 'pc',
                        },
                      );
                      const eventDatasysSetVisible8: any = [
                        {
                          type: 'sysSetVisible',
                          dataId: 168230292338946240,
                          options: {
                            compId: ['Button_224226_9699964'],
                            compName: 'page',
                            id: '237031',
                            pageJsonId: '4868135',
                            visible: 'true',
                            compid: ['Button_224226_9699964'],
                          },
                          line_number: 7,
                        },
                      ];
                      eventDatasysSetVisible8.params =
                        [
                          {
                            title: '节点key(单选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys[0]$',
                          },
                          {
                            title: '节点keys(多选)',
                            name: 'selectedKeys',
                            value: '$selectedKeys$',
                          },
                          {
                            title: '节点数据',
                            name: '{ node }',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatasysSetVisible8,
                        { selectedKeys, node },
                        'sysSetVisible',
                        {
                          id: 'sysSetVisible',
                          name: 'sysSetVisible',
                          type: 'sysSetVisible',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Tree_1088')}
                    {...injectData}
                  />
                </TabPane>
              </Tabs>
            </View>
          </View>
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_1951314',
              uid: 'View_1951314',
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
              width: '100%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_1951314')}
            {...injectData}
          >
            <Card
              name={'属性配置'}
              cardIconType={'middle'}
              title={'OA组织管理'}
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
                id: 'Card_839649_655036',
                uid: 'Card_839649_655036',
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
                const eventDatashowCustomModal252: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166097860339693730,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '224256',
                      pageJsonId: '4868135',
                      modalname: '/addAttrSpec',
                      pageId: '878168778216050688',
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
                eventDatashowCustomModal252.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal252,
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
                const eventDataapiRequest790: any = [
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
                eventDataapiRequest790.params =
                  [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest790, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_839649_655036')}
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
                formCode={'Form_148709'}
                $$componentItem={{
                  id: 'Form_148709_2103377',
                  uid: 'Form_148709_2103377',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 12px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_148709_2103377')}
                {...injectData}
              >
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
                  placeholder={'组织编码'}
                  formItemIndex={0}
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
                    id: 'Input_3889064_9887114',
                    uid: 'Input_3889064_9887114',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc680: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158470687467620,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2038827',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshOaOrg',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc680.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc680,
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
                    refs.setComponentRef(r, 'Input_3889064_9887114')
                  }
                  {...injectData}
                />
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
                  placeholder={'组织名称'}
                  formItemIndex={1}
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
                    id: 'Input_33684855_0267973',
                    uid: 'Input_33684855_0267973',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc681: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158471466083070,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '64209',
                          pageJsonId: '4868135',
                          customFuncName: 'refreshOaOrg',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc681.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc681,
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
                    refs.setComponentRef(r, 'Input_33684855_0267973')
                  }
                  {...injectData}
                />
                <Select
                  name={'数据类型'}
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
                  formItemIndex={2}
                  fieldName={'orgDataType'}
                  dataSource={[
                    { id: '4050486', label: '接口同步', value: '1001' },
                    { id: '835061', label: '人工新增', value: '1002' },
                  ]}
                  $$componentItem={{
                    id: 'Select_26459',
                    uid: 'Select_26459',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_26459')}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_841498_8261476',
                    uid: 'View_841498_8261476',
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
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    textAlign: 'center',
                    justifyContent: 'flex-start',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_841498_8261476')
                  }
                  {...injectData}
                >
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_110211',
                      uid: 'View_110211',
                      type: 'View',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      display: 'block',
                      flexDirection: 'column',
                      padding: '0px 0px 0px 20px',
                      width: '100%',
                      textAlign: 'left',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_110211')}
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
                        id: 'Button_224226_9699964',
                        uid: 'Button_224226_9699964',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={false}
                      readOnly={false}
                      style={{ width: 'fit-content' }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc682: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 166244950814363230,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '2910313',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshOaOrg',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc682.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc682,
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
                        refs.setComponentRef(r, 'Button_224226_9699964')
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
                        id: 'Button_499055_253437',
                        uid: 'Button_499055_253437',
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
                        const forms159 = getFormByCompId(
                          'Form_148709_2103377',
                          refs,
                        );
                        // 支持循环容器中的表单重置
                        (Array.isArray(forms159)
                          ? forms159
                          : [forms159]
                        ).forEach((form) => form?.resetFields());
                        const eventDatacallSelfFunc683: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167877387567069220,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '890149',
                              pageJsonId: '4868135',
                              customFuncName: 'refreshOaOrg',
                            },
                            line_number: 2,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc683.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc683,
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
                        refs.setComponentRef(r, 'Button_499055_253437')
                      }
                      {...injectData}
                    />
                  </View>
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
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_81895453',
                      uid: 'Button_81895453',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 0px' }}
                    onClick={(e: any) => {
                      const eventDatasetActiveTabPane9: any = [
                        {
                          type: 'setActiveTabPane',
                          dataId: 167870102683613920,
                          options: {
                            compId: 'Tabs_283124',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Tabs',
                            id: '9636925',
                            paramsObj: { activiKey: '1' },
                            paramsObjKeyValueMap: { activiKey: '1' },
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatasetActiveTabPane9.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatasetActiveTabPane9,
                        { e },
                        'setActiveTabPane',
                        {
                          id: 'setActiveTabPane',
                          name: 'setActiveTabPane',
                          type: 'setActiveTabPane',
                          platform: 'pc',
                        },
                      );
                      const forms160 = getFormByCompId('Form_0232295', refs);
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms160) ? forms160 : [forms160]).forEach(
                        (form) => form?.resetFields(),
                      );
                      const eventDataclearValue191: any = [
                        {
                          type: 'clearValue',
                          dataId: 167955253912107900,
                          options: {
                            compId: 'TreeSelect_257432',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'TreeSelect',
                            id: '688983',
                          },
                          line_number: 3,
                        },
                      ];
                      eventDataclearValue191.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDataclearValue191,
                        { e },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                      const eventDataapiRequest792: any = [
                        {
                          type: 'apiRequest',
                          dataId: 167955921515124640,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '188047',
                            pageJsonId: '4868135',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'qryOrgTreeByParentOrgCode',
                            _apiCode: 'qryOrgTreeByParentOrgCode',
                            _source: 'rhin',
                            _serviceId: '953687613765332992',
                            _serviceTitle:
                              '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                                dataKey: '188047_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '188047_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '188047_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'parentCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.parentCode',
                                    compType: 'Input',
                                    name: 'parentCode',
                                    parents: ['body'],
                                    id: 'body.parentCode',
                                    dataKey: '188047_body.parentCode',
                                    value: { type: ['customize'], code: '1' },
                                  },
                                  {
                                    code: 'filterId',
                                    name: '过滤主键ID',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.filterId',
                                    compType: 'Input',
                                    parents: ['body'],
                                    id: 'body.filterId',
                                    dataKey: '188047_body.filterId',
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '188047_body',
                              },
                            ],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'reloadData',
                              dataId: 167955921515170800,
                              options: {
                                compId: 'TreeSelect_257432',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'TreeSelect',
                                id: '2512076',
                                data: '$reply_188047?.resultData$',
                                labelKey: 'nodeValue',
                                nodeValueKey: 'nodeKey',
                                childrenKey: 'children',
                                selectable: 'isCheck',
                              },
                              line_number: 5,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDataapiRequest792.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDataapiRequest792,
                        { e },
                        'apiRequest',
                        {
                          id: 'apiRequest',
                          name: 'apiRequest',
                          type: 'apiRequest',
                          platform: 'pc',
                        },
                      );
                      const eventDatacustomActionCode782: any = [
                        {
                          type: 'customActionCode',
                          dataId: 167843059797626900,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '279055',
                            pageJsonId: '4868135',
                            code: 'function main(data,state,success,fail){state.mode="A";success()};',
                          },
                          line_number: 6,
                          callback1: [
                            {
                              type: 'setDisable',
                              dataId: 167843061405276960,
                              options: {
                                compId: [
                                  'Button_671049',
                                  'Button_166271',
                                  'Input_38217',
                                  'Input_175955',
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_667391',
                                  'Input_0253633',
                                  'Select_070408',
                                  'Select_314728',
                                  'TreeSelect_257432',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '173043',
                                disabled: '',
                                compid: [
                                  'Button_671049',
                                  'Button_166271',
                                  'Input_38217',
                                  'Input_175955',
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_667391',
                                  'Input_0253633',
                                  'Select_070408',
                                  'Select_314728',
                                  'TreeSelect_257432',
                                ],
                              },
                              line_number: 7,
                            },
                            {
                              type: 'setValue',
                              dataId: 167843254286987520,
                              options: {
                                compId: [
                                  'Select_665971',
                                  'Select_692647',
                                  'Select_5255812',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Select',
                                id: '1373296',
                                valueList: {
                                  Select_665971: '1002',
                                  Select_692647: '350000',
                                  Select_5255812: '0',
                                },
                                compid: [
                                  'Select_665971',
                                  'Select_692647',
                                  'Select_5255812',
                                ],
                              },
                              line_number: 8,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDatacustomActionCode782.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode782,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_81895453')}
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'组织表格'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={5}
                current={
                  data?.qryDcOaOrgPageByParentOrgKey?.resultData?.current
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
                    title: '组织ID',
                    key: 'orgDataTypeName',
                    dataIndex: 'orgKey',
                    className: '',
                    id: '118538',
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
                    key: 'orgTypeName',
                    dataIndex: 'orgCode',
                    className: 'divider',
                    id: '1100803',
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
                    title: '组织名称',
                    key: 'parentOrgKey',
                    dataIndex: 'orgName',
                    className: 'divider',
                    id: '9862158',
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
                    title: '上级组织',
                    key: 'orgLevelName',
                    dataIndex: 'parentOrgKeyName',
                    className: 'divider',
                    id: '2698517',
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
                    title: '是否政企',
                    key: 'orgLevel',
                    dataIndex: 'isGe',
                    className: 'divider',
                    id: '169548',
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
                    title: '是否重客',
                    key: 'lanId',
                    dataIndex: 'isImportant',
                    className: 'divider',
                    id: '036636',
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
                    title: '组织等级',
                    key: 'actUdfNum',
                    dataIndex: 'orgLevelName',
                    className: 'divider',
                    id: '180741',
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
                    title: '组织类型',
                    key: 'orgType',
                    dataIndex: 'orgTypeName',
                    className: 'divider',
                    id: '8469707',
                    staticDataSource: [
                      { id: '6724253', label: '生效', value: '0' },
                      { id: '598025', label: '失效', value: '2' },
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
                  {
                    title: '数据类型',
                    key: 'orgCode',
                    dataIndex: 'orgDataType',
                    className: 'divider',
                    id: '223683',
                    customRendering:
                      'function renderFunc(text, row, index) {  var fontColor = "#00FF00";  if (row.orgDataType === "1002") {    fontColor = "#0000FF";  }  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";}',
                    originCustomRendering: [
                      ' /**',
                      ' * 自定义渲染函数',
                      ' * @param {String} text 单元格显示的文字内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {number} index 行索引',
                      ' * @returns 渲染的内容：可以是 html 模板字符串',
                      ' */',
                      'function renderFunc(text, row, index) {',
                      '  let fontColor = "#00FF00";',
                      '',
                      '      if (row.orgDataType === "1002") {',
                      '        fontColor = "#0000FF";',
                      '      }',
                      '    ',
                      '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                      '}',
                    ],
                    staticDataSource: [
                      { id: '654001', label: '接口同步', value: '1001' },
                      { id: '315347', label: '人工新增', value: '1002' },
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
                  {
                    title: '状态',
                    key: 'orgCreateby',
                    dataIndex: 'orgDisabled',
                    className: 'divider',
                    id: '677098',
                    customRendering:
                      'function renderFunc(text, row, index) {  var fontColor = "#0000FF";  if (row.orgDisabled === "2") {    fontColor = "#FF0000";  }  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";}',
                    originCustomRendering: [
                      ' /**',
                      ' * 自定义渲染函数',
                      ' * @param {String} text 单元格显示的文字内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {number} index 行索引',
                      ' * @returns 渲染的内容：可以是 html 模板字符串',
                      ' */',
                      'function renderFunc(text, row, index) {',
                      '      let fontColor = "#0000FF";',
                      '',
                      '      if (row.orgDisabled === "2") {',
                      '        fontColor = "#FF0000";',
                      '      }',
                      '    ',
                      '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                      '}',
                    ],
                    staticDataSource: [
                      { id: '96860967', label: '生效', value: '0' },
                      { id: '980537', label: '失效', value: '2' },
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
                customNum={3}
                rowKey={'orgKey'}
                dataSource={
                  data?.qryDcOaOrgPageByParentOrgKey?.resultData?.records
                }
                rowActions={[
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '777678',
                    rule: 'row.orgDisabled != 0',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '3736472',
                    rule: 'row.orgDataType==1001 || row.orgDisabled == 2',
                    checked: true,
                  },
                ]}
                extend={[]}
                total={data?.qryDcOaOrgPageByParentOrgKey?.resultData?.total}
                dataSourceFromDataSourceConfig={
                  'data.qryDcOaOrgPageByParentOrgKey.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_109153',
                  uid: 'Table_109153',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDataapiRequest793: any = [
                    {
                      type: 'apiRequest',
                      dataId: 167955351343751580,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '3279774',
                        pageJsonId: '4868135',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'qryOrgTreeByParentOrgCode',
                        _apiCode: 'qryOrgTreeByParentOrgCode',
                        _source: 'rhin',
                        _serviceId: '953687613765332992',
                        _serviceTitle:
                          '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                            dataKey: '3279774_header',
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
                            dataKey: '3279774_path',
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
                            dataKey: '3279774_query',
                            key: '2',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'parentCode',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.parentCode',
                                compType: 'Input',
                                name: 'parentCode',
                                parents: ['body'],
                                id: 'body.parentCode',
                                dataKey: '3279774_body.parentCode',
                                value: { type: ['customize'], code: '1' },
                                parentType: 'object',
                                parentKey: '3',
                                key: '3-0',
                              },
                              {
                                code: 'filterId',
                                name: '过滤主键ID',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                defaultValue: '',
                                _id: 'body.filterId',
                                compType: 'Input',
                                parents: ['body'],
                                id: 'body.filterId',
                                dataKey: '3279774_body.filterId',
                                value: {
                                  type: ['context', '$row$'],
                                  hideAttr: false,
                                  code: 'orgKey',
                                },
                                parentType: 'object',
                                parentKey: '3',
                                key: '3-2',
                              },
                              {
                                code: 'isDefault',
                                name: '是否默认',
                                attrType: 'field',
                                type: 'boolean',
                                mustFlag: 'F',
                                defaultValue: '',
                                _id: 'body.isDefault',
                                compType: 'Input',
                                parents: ['body'],
                                parentType: 'object',
                                parentKey: '3',
                                key: '3-1',
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '3279774_body',
                            key: '3',
                          },
                        ],
                        _sourceName: '根据父组织编码查询下级所有组织节点-tsm',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'reloadData',
                          dataId: 167955351343778700,
                          options: {
                            compId: 'TreeSelect_257432',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'TreeSelect',
                            id: '7949995',
                            data: '$reply_3279774?.resultData$',
                            labelKey: 'nodeValue',
                            nodeValueKey: 'nodeKey',
                            childrenKey: 'children',
                            selectable: 'isCheck',
                          },
                          line_number: 2,
                          callback1: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest793.params =
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
                    eventDataapiRequest793,
                    { rowId, row, index },
                    'apiRequest',
                    {
                      id: 'apiRequest',
                      name: 'apiRequest',
                      type: 'apiRequest',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetCurrentFormValues36: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 167954177240568350,
                      options: {
                        compId: 'Form_0232295',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '034425',
                        params: '$row$',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetCurrentFormValues36.params =
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
                    eventDatasetCurrentFormValues36,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDataclearOptions2: any = [
                    {
                      type: 'clearOptions',
                      dataId: 167954193222001800,
                      options: {
                        compId: 'Select_314728',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Select',
                        id: '251832',
                      },
                      line_number: 4,
                    },
                  ];
                  eventDataclearOptions2.params =
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
                    eventDataclearOptions2,
                    { rowId, row, index },
                    'clearOptions',
                    {
                      id: 'clearOptions',
                      name: 'clearOptions',
                      type: 'clearOptions',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse526: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '806249',
                          options: {
                            context: '$row.orgDisabled$',
                            operate: '==',
                            useManual: true,
                            manualValue: '2',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167878247426068800,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167878260979045200,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167878261173069820,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: [
                                  'Form_493328',
                                  'Button_221995',
                                  'Button_213218',
                                  'Button_8258636',
                                  'Input_485159',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '385848875',
                                disabled: '',
                                compid: [
                                  'Form_493328',
                                  'Button_221995',
                                  'Button_213218',
                                  'Button_8258636',
                                  'Input_485159',
                                ],
                              },
                              actionObjId: 'Form_0232295',
                              actionObjName: 'Form',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 7,
                            },
                          ],
                          condition: [],
                          callback: [
                            {
                              type: 'setDisable',
                              dataId: 167878261173069820,
                              options: {
                                compId: [
                                  'Form_493328',
                                  'Button_221995',
                                  'Button_213218',
                                  'Button_8258636',
                                  'Input_485159',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '385848875',
                                disabled: '',
                                compid: [
                                  'Form_493328',
                                  'Button_221995',
                                  'Button_213218',
                                  'Button_8258636',
                                  'Input_485159',
                                ],
                              },
                              line_number: 7,
                            },
                          ],
                        },
                      ],
                      line_number: 5,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 167878250298078180,
                          options: {
                            compId: [
                              'Form_493328',
                              'Button_221995',
                              'Button_213218',
                              'Button_8258636',
                              'Input_485159',
                            ],
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Form',
                            id: '776979',
                            disabled: 'true',
                            compid: [
                              'Form_493328',
                              'Button_221995',
                              'Button_213218',
                              'Button_8258636',
                              'Input_485159',
                            ],
                          },
                          line_number: 6,
                        },
                      ],
                    },
                  ];
                  eventDataifelse526.params =
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
                    eventDataifelse526,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse527: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '483314',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$row.orgDataType$',
                            operate: '==',
                            manualValue: '1002',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167841765760843680,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167841765762369630,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167841765762383520,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: [
                                  'Form_0232295',
                                  'Button_671049',
                                  'Button_166271',
                                  'Input_076117',
                                  'Input_434938',
                                  'Input_38217',
                                  'Input_175955',
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Select_665971',
                                  'Select_692647',
                                  'Select_070408',
                                  'Select_314728',
                                  'Input_4483666',
                                  'DatePicker_894548',
                                  'Input_270361',
                                  'DatePicker_14902132',
                                  'Select_5255812',
                                  'TreeSelect_257432',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '336243',
                                disabled: 'true',
                                compid: [
                                  'Form_0232295',
                                  'Button_671049',
                                  'Button_166271',
                                  'Input_076117',
                                  'Input_434938',
                                  'Input_38217',
                                  'Input_175955',
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Select_665971',
                                  'Select_692647',
                                  'Select_070408',
                                  'Select_314728',
                                  'Input_4483666',
                                  'DatePicker_894548',
                                  'Input_270361',
                                  'DatePicker_14902132',
                                  'Select_5255812',
                                  'TreeSelect_257432',
                                ],
                              },
                              actionObjId: 'Form_0232295',
                              actionObjName: 'Form',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 10,
                            },
                            {
                              dataName: 'action',
                              dataId: 167841765762363900,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: [
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Button_671049',
                                  'Button_166271',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '094942',
                                disabled: '',
                                compid: [
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Button_671049',
                                  'Button_166271',
                                ],
                              },
                              actionObjId: 'Form_0232295',
                              actionObjName: 'Form',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 11,
                            },
                          ],
                          condition: [],
                          desc: '该数据是接口同步',
                          callback: [
                            {
                              type: 'setDisable',
                              dataId: 167841765762383520,
                              options: {
                                compId: [
                                  'Form_0232295',
                                  'Button_671049',
                                  'Button_166271',
                                  'Input_076117',
                                  'Input_434938',
                                  'Input_38217',
                                  'Input_175955',
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Select_665971',
                                  'Select_692647',
                                  'Select_070408',
                                  'Select_314728',
                                  'Input_4483666',
                                  'DatePicker_894548',
                                  'Input_270361',
                                  'DatePicker_14902132',
                                  'Select_5255812',
                                  'TreeSelect_257432',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '336243',
                                disabled: 'true',
                                compid: [
                                  'Form_0232295',
                                  'Button_671049',
                                  'Button_166271',
                                  'Input_076117',
                                  'Input_434938',
                                  'Input_38217',
                                  'Input_175955',
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Select_665971',
                                  'Select_692647',
                                  'Select_070408',
                                  'Select_314728',
                                  'Input_4483666',
                                  'DatePicker_894548',
                                  'Input_270361',
                                  'DatePicker_14902132',
                                  'Select_5255812',
                                  'TreeSelect_257432',
                                ],
                              },
                              line_number: 10,
                            },
                            {
                              type: 'setDisable',
                              dataId: 167841765762363900,
                              options: {
                                compId: [
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Button_671049',
                                  'Button_166271',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '094942',
                                disabled: '',
                                compid: [
                                  'Select_02652',
                                  'Select_905847',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Button_671049',
                                  'Button_166271',
                                ],
                              },
                              line_number: 11,
                            },
                          ],
                        },
                      ],
                      line_number: 8,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 167841765762350180,
                          options: {
                            compId: [
                              'Button_671049',
                              'Button_166271',
                              'Select_02652',
                              'Select_905847',
                              'Input_0253633',
                              'Input_667391',
                              'Input_38217',
                              'Input_175955',
                              'Select_692647',
                              'Select_070408',
                              'Select_314728',
                              'TreeSelect_257432',
                            ],
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Form',
                            id: '420762',
                            disabled: '',
                            compid: [
                              'Button_671049',
                              'Button_166271',
                              'Select_02652',
                              'Select_905847',
                              'Input_0253633',
                              'Input_667391',
                              'Input_38217',
                              'Input_175955',
                              'Select_692647',
                              'Select_070408',
                              'Select_314728',
                              'TreeSelect_257432',
                            ],
                          },
                          line_number: 9,
                        },
                      ],
                    },
                  ];
                  eventDataifelse527.params =
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
                    eventDataifelse527,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse528: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '02818134',
                          options: {
                            context: '$row.lanId$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167954158050196740,
                      elseIfs: [],
                      line_number: 12,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 167954162021047400,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '061213',
                            pageJsonId: 31,
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'SYS_qryRegionListByParentId',
                            _apiCode: 'qryRegionListByParentId',
                            _source: 'rhin',
                            _serviceId: '878100790201982976',
                            _serviceTitle:
                              '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                                dataKey: '183716_header',
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
                                dataKey: '183716_path',
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
                                dataKey: '183716_query',
                                key: '2',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'includeParent',
                                    attrType: 'field',
                                    type: 'boolean',
                                    mustFlag: 'F',
                                    _id: 'body.includeParent',
                                    compType: 'Input',
                                    name: 'includeParent',
                                    parents: ['body'],
                                    id: 'body.includeParent',
                                    dataKey: '183716_body.includeParent',
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-0',
                                  },
                                  {
                                    code: 'parentRegionId',
                                    attrType: 'field',
                                    type: 'long',
                                    mustFlag: 'F',
                                    _id: 'body.parentRegionId',
                                    compType: 'Input',
                                    name: 'parentRegionId',
                                    parents: ['body'],
                                    id: 'body.parentRegionId',
                                    dataKey: '183716_body.parentRegionId',
                                    value: {
                                      type: ['context', '$row$'],
                                      code: 'lanId',
                                      hideAttr: false,
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-1',
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '183716_body',
                                key: '3',
                              },
                            ],
                            _sourceName: '根据父区域ID查询所有子区域-tsm',
                          },
                          line_number: 13,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 167954162021105470,
                              options: {
                                compId: 'Select_314728',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Select',
                                id: '520963',
                                data: '$reply_061213?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 14,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse528.params =
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
                    eventDataifelse528,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode783: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167843049488739100,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '2015138',
                        pageJsonId: '4868135',
                        code: 'function main(data,state,success,fail){state.mode="M";success()};',
                      },
                      line_number: 15,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode783.params =
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
                    eventDatacustomActionCode783,
                    { rowId, row, index },
                    'customActionCode',
                    {
                      id: 'customActionCode',
                      name: 'customActionCode',
                      type: 'customActionCode',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource243: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167878082000939520,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '0759354',
                        pageJsonId: '4868135',
                        dataSourceId: 167867151981180260,
                        dataSourceName: 'pageParam',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '233349',
                            code: 'orgLevel',
                            name: '组织等级',
                            type: 'objectArray',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '1125932',
                            code: 'orgCode',
                            name: '组织编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'orgCode',
                            },
                          },
                          {
                            attrId: '1311656',
                            code: 'orgName',
                            name: '组织名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'orgName',
                            },
                          },
                          {
                            attrId: '742488',
                            code: 'orgShortName',
                            name: '组织简写名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'orgShortName',
                            },
                          },
                          {
                            attrId: '262612',
                            code: 'orgOrder',
                            name: '组织排序',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'orgOrder',
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 16,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 167878082000912580,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '247178',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshUserTable',
                            customFuncParams: 'object',
                            paramsObj: { orgCode: '$row.orgCode$' },
                            paramsObjKeyValueMap: { orgCode: '$row.orgCode$' },
                          },
                          line_number: 17,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource243.params =
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
                    eventDatasetDataSource243,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetActiveTabPane10: any = [
                    {
                      type: 'setActiveTabPane',
                      dataId: 167878083615700670,
                      options: {
                        compId: 'Tabs_283124',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Tabs',
                        id: '389307',
                        paramsObj: { activiKey: '1' },
                        paramsObjKeyValueMap: { activiKey: '1' },
                      },
                      line_number: 18,
                    },
                  ];
                  eventDatasetActiveTabPane10.params =
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
                    eventDatasetActiveTabPane10,
                    { rowId, row, index },
                    'setActiveTabPane',
                    {
                      id: 'setActiveTabPane',
                      name: 'setActiveTabPane',
                      type: 'setActiveTabPane',
                      platform: 'pc',
                    },
                  );
                }}
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDatacallSelfFunc684: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167886377718084400,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '369896',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshUserTable',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '9298384',
                              options: {
                                context: '$state.associatedUsers$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167886378347462400,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167886383490629380,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167955049971553100,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 167955049971562240,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167955050758541600,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 167955050758558600,
                                              children: [
                                                {
                                                  dataName: 'condition',
                                                  dataId: 167955050758585340,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 167955050758560420,
                                                      children: [],
                                                      todoOptions: [
                                                        'msgType',
                                                        'value',
                                                      ],
                                                      options: {
                                                        compId: 'showMessage',
                                                        compName: 'system',
                                                        id: '797122',
                                                        pageJsonId: '4868135',
                                                        type: 'success',
                                                        value: '删除成功！',
                                                      },
                                                      actionObjId:
                                                        'showMessage',
                                                      actionObjName: 'system',
                                                      value: 'showMessage',
                                                      line_number: 7,
                                                    },
                                                    {
                                                      dataName: 'action',
                                                      dataId: 167955050758581300,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 167955050758572600,
                                                          children: [],
                                                          value: 'callback1',
                                                          params: [],
                                                        },
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 167955050758569380,
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
                                                        id: '3338424',
                                                        pageJsonId: '4868135',
                                                        customFuncName:
                                                          'refreshOaOrg',
                                                      },
                                                      actionObjId:
                                                        'callSelfFunc',
                                                      actionObjName: 'system',
                                                      value: 'callSelfFunc',
                                                      line_number: 8,
                                                    },
                                                    {
                                                      dataName: 'action',
                                                      dataId: 167955050758539800,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 167955050758589900,
                                                          children: [],
                                                          value: 'callback1',
                                                          params: [],
                                                        },
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 167955050758582800,
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
                                                        id: '311888',
                                                        pageJsonId: '4868135',
                                                        customFuncName:
                                                          'refreshUserTable',
                                                        customFuncParams:
                                                          'object',
                                                      },
                                                      actionObjId:
                                                        'callSelfFunc',
                                                      actionObjName: 'system',
                                                      value: 'callSelfFunc',
                                                      line_number: 9,
                                                    },
                                                    {
                                                      dataName: 'action',
                                                      dataId: 167955247811516700,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 167955247811548320,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'action',
                                                              dataId: 167955247811503170,
                                                              children: [
                                                                {
                                                                  dataName:
                                                                    'callback',
                                                                  dataId: 167955247811541660,
                                                                  children: [],
                                                                  value:
                                                                    'callback1',
                                                                  params: [],
                                                                },
                                                              ],
                                                              todoOptions: [
                                                                'dataSource',
                                                                'labelKey',
                                                                'nodeValueKey',
                                                                'selectable',
                                                                'childrenKey',
                                                              ],
                                                              options: {
                                                                compId:
                                                                  'TreeSelect_257432',
                                                                compLib: 'comm',
                                                                pageJsonId:
                                                                  '4868135',
                                                                compName:
                                                                  'TreeSelect',
                                                                id: '0777765',
                                                                data: '$reply_841162?.resultData$',
                                                                labelKey:
                                                                  'nodeValue',
                                                                nodeValueKey:
                                                                  'nodeKey',
                                                                childrenKey:
                                                                  'children',
                                                                selectable:
                                                                  'isCheck',
                                                              },
                                                              actionObjId:
                                                                'TreeSelect_257432',
                                                              actionObjName:
                                                                'TreeSelect',
                                                              value:
                                                                'reloadData',
                                                              compLib: 'comm',
                                                              line_number: 11,
                                                            },
                                                          ],
                                                          value: 'callback1',
                                                          params: [],
                                                        },
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 167955247811536100,
                                                          children: [],
                                                          value: 'callback2',
                                                          params: [],
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
                                                        id: '841162',
                                                        pageJsonId: '4868135',
                                                        sync: false,
                                                        method: 'post',
                                                        url: '/app/rhin/gateway/callRhinEngine',
                                                        _capabilityCode:
                                                          'qryOrgTreeByParentOrgCode',
                                                        _apiCode:
                                                          'qryOrgTreeByParentOrgCode',
                                                        _source: 'rhin',
                                                        _serviceId:
                                                          '953687613765332992',
                                                        _serviceTitle:
                                                          '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                                                            dataKey:
                                                              '0790536_header',
                                                          },
                                                          {
                                                            code: 'path',
                                                            name: '请求路径参数',
                                                            attrType: 'object',
                                                            _id: 'path',
                                                            compType: 'Input',
                                                            parents: [],
                                                            id: 'path',
                                                            dataKey:
                                                              '0790536_path',
                                                          },
                                                          {
                                                            code: 'query',
                                                            name: 'URL 参数',
                                                            attrType: 'object',
                                                            _id: 'query',
                                                            compType: 'Input',
                                                            parents: [],
                                                            id: 'query',
                                                            dataKey:
                                                              '0790536_query',
                                                          },
                                                          {
                                                            code: 'body',
                                                            name: '请求体',
                                                            attrType: 'object',
                                                            children: [
                                                              {
                                                                code: 'parentCode',
                                                                attrType:
                                                                  'field',
                                                                type: 'string',
                                                                mustFlag: 'F',
                                                                _id: 'body.parentCode',
                                                                compType:
                                                                  'Input',
                                                                name: 'parentCode',
                                                                parents: [
                                                                  'body',
                                                                ],
                                                                id: 'body.parentCode',
                                                                dataKey:
                                                                  '0790536_body.parentCode',
                                                                value: {
                                                                  type: [
                                                                    'customize',
                                                                  ],
                                                                  code: '1',
                                                                },
                                                              },
                                                            ],
                                                            _id: 'body',
                                                            compType: 'Input',
                                                            parents: [],
                                                            id: 'body',
                                                            dataKey:
                                                              '0790536_body',
                                                          },
                                                        ],
                                                        _sourceName:
                                                          '根据父组织编码查询下级所有组织节点-tsm',
                                                      },
                                                      actionObjId: 'apiRequest',
                                                      actionObjName: 'system',
                                                      value: 'apiRequest',
                                                      line_number: 10,
                                                    },
                                                  ],
                                                  elseIfs: [],
                                                  condition: [
                                                    {
                                                      condId: '669918',
                                                      options: {
                                                        useManual: true,
                                                        useObject: false,
                                                        context:
                                                          '$reply_1495038.resultCode$',
                                                        operate: '==',
                                                        manualValue: '0',
                                                      },
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  line_number: 6,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 167955050758514800,
                                              children: [],
                                              value: 'callback2',
                                              params: [],
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
                                            id: '1495038',
                                            pageJsonId: '4868135',
                                            sync: false,
                                            method: 'post',
                                            url: '/app/rhin/gateway/callRhinEngine',
                                            _capabilityCode: 'delDcOaOrg',
                                            _apiCode: 'delDcOaOrg',
                                            _source: 'rhin',
                                            _serviceId: '951397429109014528',
                                            _serviceTitle:
                                              '删除Oa组织-hyj: delDcOaOrg',
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
                                                dataKey: '422881_header',
                                              },
                                              {
                                                code: 'path',
                                                name: '请求路径参数',
                                                attrType: 'object',
                                                children: [
                                                  {
                                                    code: 'dcOaOrgId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'path.dcOaOrgId',
                                                    compType: 'Input',
                                                    name: 'dcOaOrgId',
                                                    parents: ['path'],
                                                    id: 'path.dcOaOrgId',
                                                    dataKey:
                                                      '422881_path.dcOaOrgId',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$row$',
                                                      ],
                                                      hideAttr: false,
                                                      code: 'orgKey',
                                                    },
                                                  },
                                                ],
                                                _id: 'path',
                                                compType: 'Input',
                                                parents: [],
                                                id: 'path',
                                                dataKey: '422881_path',
                                              },
                                              {
                                                code: 'query',
                                                name: 'URL 参数',
                                                attrType: 'object',
                                                _id: 'query',
                                                compType: 'Input',
                                                parents: [],
                                                id: 'query',
                                                dataKey: '422881_query',
                                              },
                                              {
                                                code: 'body',
                                                name: '请求体',
                                                attrType: 'object',
                                                _id: 'body',
                                                compType: 'Input',
                                                parents: [],
                                                id: 'body',
                                                dataKey: '422881_body',
                                              },
                                            ],
                                            _sourceName: '删除Oa组织-hyj',
                                          },
                                          actionObjId: 'apiRequest',
                                          actionObjName: 'system',
                                          value: 'apiRequest',
                                          line_number: 5,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 167955049971533400,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: [
                                    'modalType',
                                    'title',
                                    'content',
                                    'okText',
                                    'cancelText',
                                  ],
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '5923523',
                                    pageJsonId: '4868135',
                                    type: 'confirm',
                                    title: '温馨提示',
                                    content:
                                      '该组织所属的下级组织将被一并删除！',
                                    okText: '确认',
                                  },
                                  actionObjId: 'showModal',
                                  actionObjName: 'page',
                                  value: 'showModal',
                                  line_number: 4,
                                },
                              ],
                              condition: [],
                              callback: [
                                {
                                  type: 'showModal',
                                  dataId: 167955049971553100,
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '5923523',
                                    pageJsonId: '4868135',
                                    type: 'confirm',
                                    title: '温馨提示',
                                    content:
                                      '该组织所属的下级组织将被一并删除！',
                                    okText: '确认',
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 167955050758541600,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '1495038',
                                        pageJsonId: '4868135',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'delDcOaOrg',
                                        _apiCode: 'delDcOaOrg',
                                        _source: 'rhin',
                                        _serviceId: '951397429109014528',
                                        _serviceTitle:
                                          '删除Oa组织-hyj: delDcOaOrg',
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
                                            dataKey: '422881_header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            children: [
                                              {
                                                code: 'dcOaOrgId',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'path.dcOaOrgId',
                                                compType: 'Input',
                                                name: 'dcOaOrgId',
                                                parents: ['path'],
                                                id: 'path.dcOaOrgId',
                                                dataKey:
                                                  '422881_path.dcOaOrgId',
                                                value: {
                                                  type: ['context', '$row$'],
                                                  hideAttr: false,
                                                  code: 'orgKey',
                                                },
                                              },
                                            ],
                                            _id: 'path',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'path',
                                            dataKey: '422881_path',
                                          },
                                          {
                                            code: 'query',
                                            name: 'URL 参数',
                                            attrType: 'object',
                                            _id: 'query',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'query',
                                            dataKey: '422881_query',
                                          },
                                          {
                                            code: 'body',
                                            name: '请求体',
                                            attrType: 'object',
                                            _id: 'body',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'body',
                                            dataKey: '422881_body',
                                          },
                                        ],
                                        _sourceName: '删除Oa组织-hyj',
                                      },
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '669918',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context:
                                                  '$reply_1495038.resultCode$',
                                                operate: '==',
                                                manualValue: '0',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 167955050758585340,
                                          elseIfs: [],
                                          line_number: 6,
                                          callback1: [
                                            {
                                              type: 'showMessage',
                                              dataId: 167955050758560420,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '797122',
                                                pageJsonId: '4868135',
                                                type: 'success',
                                                value: '删除成功！',
                                              },
                                              line_number: 7,
                                            },
                                            {
                                              type: 'callSelfFunc',
                                              dataId: 167955050758581300,
                                              options: {
                                                compId: 'callSelfFunc',
                                                compName: 'system',
                                                id: '3338424',
                                                pageJsonId: '4868135',
                                                customFuncName: 'refreshOaOrg',
                                              },
                                              line_number: 8,
                                              callback1: [],
                                              callback2: [],
                                            },
                                            {
                                              type: 'callSelfFunc',
                                              dataId: 167955050758539800,
                                              options: {
                                                compId: 'callSelfFunc',
                                                compName: 'system',
                                                id: '311888',
                                                pageJsonId: '4868135',
                                                customFuncName:
                                                  'refreshUserTable',
                                                customFuncParams: 'object',
                                              },
                                              line_number: 9,
                                              callback1: [],
                                              callback2: [],
                                            },
                                            {
                                              type: 'apiRequest',
                                              dataId: 167955247811516700,
                                              options: {
                                                compId: 'apiRequest',
                                                compName: 'system',
                                                id: '841162',
                                                pageJsonId: '4868135',
                                                sync: false,
                                                method: 'post',
                                                url: '/app/rhin/gateway/callRhinEngine',
                                                _capabilityCode:
                                                  'qryOrgTreeByParentOrgCode',
                                                _apiCode:
                                                  'qryOrgTreeByParentOrgCode',
                                                _source: 'rhin',
                                                _serviceId:
                                                  '953687613765332992',
                                                _serviceTitle:
                                                  '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                                                    dataKey: '0790536_header',
                                                  },
                                                  {
                                                    code: 'path',
                                                    name: '请求路径参数',
                                                    attrType: 'object',
                                                    _id: 'path',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'path',
                                                    dataKey: '0790536_path',
                                                  },
                                                  {
                                                    code: 'query',
                                                    name: 'URL 参数',
                                                    attrType: 'object',
                                                    _id: 'query',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'query',
                                                    dataKey: '0790536_query',
                                                  },
                                                  {
                                                    code: 'body',
                                                    name: '请求体',
                                                    attrType: 'object',
                                                    children: [
                                                      {
                                                        code: 'parentCode',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.parentCode',
                                                        compType: 'Input',
                                                        name: 'parentCode',
                                                        parents: ['body'],
                                                        id: 'body.parentCode',
                                                        dataKey:
                                                          '0790536_body.parentCode',
                                                        value: {
                                                          type: ['customize'],
                                                          code: '1',
                                                        },
                                                      },
                                                    ],
                                                    _id: 'body',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'body',
                                                    dataKey: '0790536_body',
                                                  },
                                                ],
                                                _sourceName:
                                                  '根据父组织编码查询下级所有组织节点-tsm',
                                              },
                                              line_number: 10,
                                              callback1: [
                                                {
                                                  type: 'reloadData',
                                                  dataId: 167955247811503170,
                                                  options: {
                                                    compId: 'TreeSelect_257432',
                                                    compLib: 'comm',
                                                    pageJsonId: '4868135',
                                                    compName: 'TreeSelect',
                                                    id: '0777765',
                                                    data: '$reply_841162?.resultData$',
                                                    labelKey: 'nodeValue',
                                                    nodeValueKey: 'nodeKey',
                                                    childrenKey: 'children',
                                                    selectable: 'isCheck',
                                                  },
                                                  line_number: 11,
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
                          line_number: 2,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 167886380896135800,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '970296',
                                pageJsonId: '4868135',
                                type: 'info',
                                value: '请先删除该组织的关联用户！',
                              },
                              line_number: 3,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc684.params =
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
                    eventDatacallSelfFunc684,
                    { rowId, row, index },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatasetLoading215: any = [
                    {
                      type: 'setLoading',
                      dataId: 167843292752521470,
                      options: {
                        compId: 'Table_109153',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Table',
                        id: '9267837',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading215.params =
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
                    eventDatasetLoading215,
                    { page, pageSize },
                    'setLoading',
                    {
                      id: 'setLoading',
                      name: 'setLoading',
                      type: 'setLoading',
                      platform: 'pc',
                    },
                  );
                  const eventDatareloadDataSource112: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 167842700451969470,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '1130715',
                        pageJsonId: '4868135',
                        dataSourceId: 168224272650411940,
                        dataSourceName: 'qryDcOaOrgPageByParentOrgKey',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '315792',
                            code: 'header',
                            name: '请求头参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'header',
                            _codePath: ['header'],
                            _idpath: ['315792'],
                          },
                          {
                            attrId: '796244',
                            code: 'path',
                            name: '请求路径参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'path',
                            _codePath: ['path'],
                            _idpath: ['796244'],
                          },
                          {
                            attrId: '9504571',
                            code: 'query',
                            name: 'URL 参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            key: 'query',
                            _codePath: ['query'],
                            _idpath: ['9504571'],
                          },
                          {
                            attrId: '3510016',
                            code: 'body',
                            name: '请求体',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            children: [
                              {
                                attrId: '72673956',
                                code: 'parentOrgKey',
                                name: 'parentOrgKey',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'body.parentOrgKey',
                                value: {
                                  type: ['datasource', 'orgObj', 'data'],
                                  code: 'parentOrgKey',
                                },
                                _codePath: ['body', 'parentOrgKey'],
                                _idpath: ['3510016', '72673956'],
                              },
                              {
                                attrId: '6580132',
                                code: 'orgCode',
                                name: 'orgCode',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'body.orgCode',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709_2103377',
                                    'getFieldsValue',
                                  ],
                                  code: 'orgCode',
                                },
                                _codePath: ['body', 'orgCode'],
                                _idpath: ['3510016', '6580132'],
                              },
                              {
                                attrId: '122768',
                                code: 'orgName',
                                name: 'orgName',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'body.orgName',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709_2103377',
                                    'getFieldsValue',
                                  ],
                                  code: 'orgName',
                                },
                                _codePath: ['body', 'orgName'],
                                _idpath: ['3510016', '122768'],
                              },
                              {
                                attrId: '2561076',
                                code: 'orgDataType',
                                name: 'orgDataType',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                key: 'body.orgDataType',
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709_2103377',
                                    'getFieldsValue',
                                  ],
                                  code: 'orgDataType',
                                },
                                _codePath: ['body', 'orgDataType'],
                                _idpath: ['3510016', '2561076'],
                              },
                              {
                                attrId: '002561',
                                code: 'pageNum',
                                name: 'pageNum',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['body', 'pageNum'],
                                _idpath: ['3510016', '002561'],
                                value: {
                                  type: ['context', '$page$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                              {
                                attrId: '383904',
                                code: 'pageSize',
                                name: 'pageSize',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['body', 'pageSize'],
                                _idpath: ['3510016', '383904'],
                                value: {
                                  type: ['context', '$pageSize$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                            ],
                            key: 'body',
                            _codePath: ['body'],
                            _idpath: ['3510016'],
                          },
                        ],
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 167843293442705400,
                          options: {
                            compId: 'Table_109153',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '673061',
                            loading: false,
                          },
                          line_number: 3,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 167843293597172320,
                          options: {
                            compId: 'Table_109153',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '55675884',
                            loading: false,
                          },
                          line_number: 4,
                        },
                      ],
                    },
                  ];
                  eventDatareloadDataSource112.params =
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
                    eventDatareloadDataSource112,
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
                onRowClick={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues37: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 167954179813880930,
                      options: {
                        compId: 'Form_0232295',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '654332',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues37.params =
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
                    eventDatasetCurrentFormValues37,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse529: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '806249',
                          options: {
                            context: '$row.orgDisabled$',
                            operate: '==',
                            useManual: true,
                            manualValue: '2',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167878263513785570,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167878263513725340,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167878263513757700,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: [
                                  'Form_493328',
                                  'Button_221995',
                                  'Button_213218',
                                  'Button_8258636',
                                  'Input_485159',
                                  'Input_4717291',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '4412917',
                                disabled: '',
                                compid: [
                                  'Form_493328',
                                  'Button_221995',
                                  'Button_213218',
                                  'Button_8258636',
                                  'Input_485159',
                                  'Input_4717291',
                                ],
                              },
                              actionObjId: 'Form_0232295',
                              actionObjName: 'Form',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 4,
                            },
                          ],
                          condition: [],
                          callback: [
                            {
                              type: 'setDisable',
                              dataId: 167878263513757700,
                              options: {
                                compId: [
                                  'Form_493328',
                                  'Button_221995',
                                  'Button_213218',
                                  'Button_8258636',
                                  'Input_485159',
                                  'Input_4717291',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '4412917',
                                disabled: '',
                                compid: [
                                  'Form_493328',
                                  'Button_221995',
                                  'Button_213218',
                                  'Button_8258636',
                                  'Input_485159',
                                  'Input_4717291',
                                ],
                              },
                              line_number: 4,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDisable',
                          dataId: 167878263513788830,
                          options: {
                            compId: [
                              'Form_493328',
                              'Button_221995',
                              'Button_213218',
                              'Button_8258636',
                              'Input_485159',
                              'Input_4717291',
                            ],
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Form',
                            id: '787526',
                            disabled: 'true',
                            compid: [
                              'Form_493328',
                              'Button_221995',
                              'Button_213218',
                              'Button_8258636',
                              'Input_485159',
                              'Input_4717291',
                            ],
                          },
                          line_number: 3,
                        },
                      ],
                    },
                  ];
                  eventDataifelse529.params =
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
                    eventDataifelse529,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable165: any = [
                    {
                      type: 'setDisable',
                      dataId: 167842721088823000,
                      options: {
                        compId: [
                          'Form_0232295',
                          'Select_02652',
                          'Select_905847',
                          'Input_0253633',
                          'Input_667391',
                          'Button_671049',
                          'Button_166271',
                          'Input_076117',
                          'Input_434938',
                          'Input_38217',
                          'Input_175955',
                          'Select_665971',
                          'Select_692647',
                          'Select_070408',
                          'Select_314728',
                          'Input_4483666',
                          'DatePicker_894548',
                          'Input_270361',
                          'DatePicker_14902132',
                          'Select_5255812',
                          'TreeSelect_257432',
                        ],
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '118425',
                        disabled: 'true',
                        compid: [
                          'Form_0232295',
                          'Select_02652',
                          'Select_905847',
                          'Input_0253633',
                          'Input_667391',
                          'Button_671049',
                          'Button_166271',
                          'Input_076117',
                          'Input_434938',
                          'Input_38217',
                          'Input_175955',
                          'Select_665971',
                          'Select_692647',
                          'Select_070408',
                          'Select_314728',
                          'Input_4483666',
                          'DatePicker_894548',
                          'Input_270361',
                          'DatePicker_14902132',
                          'Select_5255812',
                          'TreeSelect_257432',
                        ],
                      },
                      line_number: 5,
                    },
                  ];
                  eventDatasetDisable165.params =
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
                    eventDatasetDisable165,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse530: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '02818134',
                          options: {
                            context: '$row.lanId$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167954165512498500,
                      elseIfs: [],
                      line_number: 6,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 167954166720158300,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '682251',
                            pageJsonId: 31,
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'SYS_qryRegionListByParentId',
                            _apiCode: 'qryRegionListByParentId',
                            _source: 'rhin',
                            _serviceId: '878100790201982976',
                            _serviceTitle:
                              '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                                dataKey: '183716_header',
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
                                dataKey: '183716_path',
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
                                dataKey: '183716_query',
                                key: '2',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'includeParent',
                                    attrType: 'field',
                                    type: 'boolean',
                                    mustFlag: 'F',
                                    _id: 'body.includeParent',
                                    compType: 'Input',
                                    name: 'includeParent',
                                    parents: ['body'],
                                    id: 'body.includeParent',
                                    dataKey: '183716_body.includeParent',
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-0',
                                  },
                                  {
                                    code: 'parentRegionId',
                                    attrType: 'field',
                                    type: 'long',
                                    mustFlag: 'F',
                                    _id: 'body.parentRegionId',
                                    compType: 'Input',
                                    name: 'parentRegionId',
                                    parents: ['body'],
                                    id: 'body.parentRegionId',
                                    dataKey: '183716_body.parentRegionId',
                                    value: {
                                      type: ['context', '$row$'],
                                      code: 'lanId',
                                      hideAttr: false,
                                    },
                                    parentType: 'object',
                                    parentKey: '3',
                                    key: '3-1',
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '183716_body',
                                key: '3',
                              },
                            ],
                            _sourceName: '根据父区域ID查询所有子区域-tsm',
                          },
                          line_number: 7,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 167954166720112220,
                              options: {
                                compId: 'Select_314728',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Select',
                                id: '254238',
                                data: '$reply_682251?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 8,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse530.params =
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
                    eventDataifelse530,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource244: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167869599799404400,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '685727',
                        pageJsonId: '4868135',
                        dataSourceId: 167867151981180260,
                        dataSourceName: 'pageParam',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '233349',
                            code: 'orgLevel',
                            name: '组织等级',
                            type: 'objectArray',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '1125932',
                            code: 'orgCode',
                            name: '组织编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'orgCode',
                            },
                          },
                          {
                            attrId: '1311656',
                            code: 'orgName',
                            name: '组织名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'orgName',
                            },
                          },
                          {
                            attrId: '742488',
                            code: 'orgShortName',
                            name: '组织简写名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'orgShortName',
                            },
                          },
                          {
                            attrId: '262612',
                            code: 'orgOrder',
                            name: '组织排序',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'orgOrder',
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 9,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 167869599799445660,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '1728105',
                            pageJsonId: '4868135',
                            customFuncName: 'refreshUserTable',
                            customFuncParams: 'object',
                            paramsObj: { orgCode: '$row.orgCode$' },
                            paramsObjKeyValueMap: { orgCode: '$row.orgCode$' },
                          },
                          line_number: 10,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource244.params =
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
                    eventDatasetDataSource244,
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
                ref={(r: any) => refs.setComponentRef(r, 'Table_109153')}
                {...injectData}
              />
            </Card>
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_086921',
                uid: 'View_086921',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_086921')}
              {...injectData}
            >
              <Tabs
                name={'标签页'}
                defaultActiveKey={'1'}
                type={'line'}
                animated={true}
                tabActiveKey={'1'}
                tabBarGutter={'4px'}
                tabPosition={'top'}
                size={'default'}
                $$componentItem={{
                  id: 'Tabs_283124',
                  uid: 'Tabs_283124',
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
                ref={(r: any) => refs.setComponentRef(r, 'Tabs_283124')}
                {...injectData}
              >
                <TabPane
                  name={'标签子面板'}
                  tab={'组织信息'}
                  key={'1'}
                  $$componentItem={{
                    id: 'TabPane_621603',
                    uid: 'TabPane_621603',
                    type: 'TabPane',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) => refs.setComponentRef(r, 'TabPane_621603')}
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
                    formCode={'Form_0232295'}
                    $$componentItem={{
                      id: 'Form_0232295',
                      uid: 'Form_0232295',
                      type: 'Form',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ padding: '0px 0px 0px 0px' }}
                    ref={(r: any) => refs.setComponentRef(r, 'Form_0232295')}
                    {...injectData}
                  >
                    <Input
                      name={'组织编码'}
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
                        id: 'Input_434938',
                        uid: 'Input_434938',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_434938')}
                      {...injectData}
                    />
                    <Input
                      name={'组织名称'}
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
                        id: 'Input_38217',
                        uid: 'Input_38217',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_38217')}
                      {...injectData}
                    />
                    <TreeSelect
                      name={'上级组织'}
                      titleTip={'notext'}
                      tipLocation={'after'}
                      tipPlacement={'top'}
                      selfSpan={''}
                      labelCol={8}
                      wrapperCol={16}
                      treeDefaultExpandAll={false}
                      size={'default'}
                      showSearch={true}
                      treeData={[
                        {
                          title: '第一列',
                          key: 'column1',
                          selectable: true,
                          value: 'column1',
                          label: '第一列',
                          $$isParent: true,
                          children: [
                            {
                              title: '第二列',
                              key: 'column2',
                              value: 'column2',
                              selectable: true,
                              label: '第二列',
                            },
                          ],
                        },
                      ]}
                      formItemIndex={2}
                      fieldName={'parentOrgKey'}
                      placeholder={'请选择'}
                      filter={'local'}
                      $$componentItem={{
                        id: 'TreeSelect_257432',
                        uid: 'TreeSelect_257432',
                        type: 'TreeSelect',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'TreeSelect_257432')
                      }
                      {...injectData}
                    />
                    <Select
                      name={'组织等级'}
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
                      attr={{}}
                      placeholder={'请选择'}
                      fieldName={'orgLevel'}
                      formItemIndex={3}
                      $$componentItem={{
                        id: 'Input_0253633',
                        uid: 'Input_0253633',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onChange={(e: any) => {
                        const eventDatagetSelectedData419: any = [
                          {
                            type: 'getSelectedData',
                            dataId: 167867362967414370,
                            options: {
                              compId: 'Input_0253633',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Select',
                              id: '5764325',
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 167867363313321440,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '9075715',
                                  pageJsonId: '4868135',
                                  value: ['$selectedData_5764325[0]$'],
                                },
                                line_number: 2,
                              },
                            ],
                            callback2: [],
                          },
                        ];
                        eventDatagetSelectedData419.params =
                          [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                          [];
                        CMDGenerator(
                          eventDatagetSelectedData419,
                          { e },
                          'getSelectedData',
                          {
                            id: 'getSelectedData',
                            name: 'getSelectedData',
                            type: 'getSelectedData',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_0253633')}
                      {...injectData}
                    />
                    <Select
                      name={'是否政企'}
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
                      formItemIndex={4}
                      fieldName={'isGe'}
                      dataSource={attrDataMap['PUB_001']}
                      $$componentItem={{
                        id: 'Select_02652',
                        uid: 'Select_02652',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Select_02652')}
                      {...injectData}
                    />
                    <Select
                      name={'数据类型'}
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
                      attr={{}}
                      placeholder={'请选择'}
                      formItemIndex={5}
                      fieldName={'orgDataType'}
                      $$componentItem={{
                        id: 'Select_665971',
                        uid: 'Select_665971',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Select_665971')}
                      {...injectData}
                    />
                    <Select
                      name={'组织类型'}
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
                      attr={{}}
                      placeholder={'请选择'}
                      fieldName={'orgType'}
                      formItemIndex={6}
                      $$componentItem={{
                        id: 'Input_667391',
                        uid: 'Input_667391',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_667391')}
                      {...injectData}
                    />
                    <Select
                      name={'是否重客'}
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
                      formItemIndex={7}
                      fieldName={'isImportant'}
                      dataSource={attrDataMap['PUB_001']}
                      $$componentItem={{
                        id: 'Select_905847',
                        uid: 'Select_905847',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Select_905847')}
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
                      required={false}
                      filter={'none'}
                      classification={'default'}
                      placeholder={'请选择'}
                      formItemIndex={8}
                      fieldName={'orgDisabled'}
                      dataSource={[
                        { id: '9171821', label: '生效', value: '0' },
                        { id: '6271045', label: '失效', value: '2' },
                      ]}
                      $$componentItem={{
                        id: 'Select_5255812',
                        uid: 'Select_5255812',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'Select_5255812')
                      }
                      {...injectData}
                    />
                    <Select
                      name={'省份'}
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
                      formItemIndex={9}
                      fieldName={'provinceId'}
                      dataSource={attrDataMap['PROVINCE_CODE']}
                      $$componentItem={{
                        id: 'Select_692647',
                        uid: 'Select_692647',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Select_692647')}
                      {...injectData}
                    />
                    <Select
                      name={'地市'}
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
                      formItemIndex={10}
                      fieldName={'lanId'}
                      allowClear={true}
                      dataSource={attrDataMap['CITY_CODE']}
                      $$componentItem={{
                        id: 'Select_070408',
                        uid: 'Select_070408',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onChange={(e: any) => {
                        const eventDatagetValue253: any = [
                          {
                            type: 'getValue',
                            dataId: 167844082935685470,
                            options: {
                              compId: 'Select_070408',
                              compLib: 'comm',
                              pageJsonId: '4868135',
                              compName: 'Select',
                              id: '674038',
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'clearValue',
                                dataId: 167844134474234850,
                                options: {
                                  compId: 'Select_314728',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Select',
                                  id: '6369055',
                                },
                                line_number: 2,
                              },
                              {
                                type: 'console',
                                dataId: 167954126798269400,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '184998',
                                  pageJsonId: '4868135',
                                  value: ['地市获取值：', '$value_674038$'],
                                },
                                line_number: 3,
                              },
                              {
                                type: 'clearOptions',
                                dataId: 167954145086834020,
                                options: {
                                  compId: 'Select_314728',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Select',
                                  id: '2774889',
                                },
                                line_number: 4,
                              },
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '5256694',
                                    options: {
                                      context: '$value_674038$',
                                      operate: 'notEmpty',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 167954134938578080,
                                elseIfs: [],
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'apiRequest',
                                    dataId: 167954135342649630,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '6642432',
                                      pageJsonId: 31,
                                      sync: false,
                                      method: 'post',
                                      url: '/app/rhin/gateway/callRhinEngine',
                                      _capabilityCode:
                                        'SYS_qryRegionListByParentId',
                                      _apiCode: 'qryRegionListByParentId',
                                      _source: 'rhin',
                                      _serviceId: '878100790201982976',
                                      _serviceTitle:
                                        '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                                          dataKey: '512253_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          _id: 'path',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'path',
                                          dataKey: '512253_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '512253_query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          children: [
                                            {
                                              code: 'includeParent',
                                              attrType: 'field',
                                              type: 'boolean',
                                              mustFlag: 'F',
                                              _id: 'body.includeParent',
                                              compType: 'Input',
                                              name: 'includeParent',
                                              parents: ['body'],
                                              id: 'body.includeParent',
                                              dataKey:
                                                '512253_body.includeParent',
                                            },
                                            {
                                              code: 'parentRegionId',
                                              attrType: 'field',
                                              type: 'long',
                                              mustFlag: 'F',
                                              _id: 'body.parentRegionId',
                                              compType: 'Input',
                                              name: 'parentRegionId',
                                              parents: ['body'],
                                              id: 'body.parentRegionId',
                                              dataKey:
                                                '512253_body.parentRegionId',
                                              value: {
                                                type: ['context', '$e$'],
                                                code: '',
                                              },
                                            },
                                          ],
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '512253_body',
                                        },
                                      ],
                                    },
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'reloadSelectData',
                                        dataId: 167954135342623000,
                                        options: {
                                          compId: 'Select_314728',
                                          compLib: 'comm',
                                          pageJsonId: '4868135',
                                          compName: 'Select',
                                          id: '62706',
                                          data: '$reply_6642432?.resultData$',
                                          labelKey: 'regionName',
                                          valueKey: 'regionId',
                                        },
                                        line_number: 7,
                                        callback1: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ];
                        eventDatagetValue253.params =
                          [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                          [];
                        CMDGenerator(eventDatagetValue253, { e }, 'getValue', {
                          id: 'getValue',
                          name: 'getValue',
                          type: 'getValue',
                          platform: 'pc',
                        });
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Select_070408')}
                      {...injectData}
                    />
                    <Select
                      name={'区县'}
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
                      attr={{}}
                      placeholder={'请选择'}
                      formItemIndex={11}
                      fieldName={'areaId'}
                      allowClear={true}
                      $$componentItem={{
                        id: 'Select_314728',
                        uid: 'Select_314728',
                        type: 'Select',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Select_314728')}
                      {...injectData}
                    />
                    <Input
                      name={'创建人'}
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
                      formItemIndex={12}
                      fieldName={'orgCreateby'}
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
                        id: 'Input_4483666',
                        uid: 'Input_4483666',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_4483666')}
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
                      limitRange={'no'}
                      startTime={''}
                      endTime={''}
                      timeMode={'time'}
                      pickerType={'TimePicker'}
                      placeholder={'请选择时间'}
                      customTip={''}
                      fieldName={'orgCreate'}
                      formItemIndex={13}
                      $$componentItem={{
                        id: 'DatePicker_894548',
                        uid: 'DatePicker_894548',
                        type: 'TimePicker',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      defaultValue={undefined}
                      isFormRootChild={true}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'DatePicker_894548')
                      }
                      {...injectData}
                    />
                    <Input
                      name={'修改人'}
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
                      formItemIndex={14}
                      fieldName={'orgUpdateby'}
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
                        id: 'Input_270361',
                        uid: 'Input_270361',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_270361')}
                      {...injectData}
                    />
                    <TimePicker
                      name={'修改时间'}
                      format={'YYYY-MM-DD HH:mm:ss'}
                      size={'default'}
                      selfSpan={''}
                      labelCol={8}
                      wrapperCol={16}
                      titleTip={'notext'}
                      tipLocation={'after'}
                      tipPlacement={'top'}
                      required={false}
                      limitRange={'no'}
                      startTime={''}
                      endTime={''}
                      timeMode={'time'}
                      pickerType={'TimePicker'}
                      placeholder={'请选择时间'}
                      customTip={''}
                      fieldName={'orgUpdate'}
                      formItemIndex={15}
                      $$componentItem={{
                        id: 'DatePicker_14902132',
                        uid: 'DatePicker_14902132',
                        type: 'TimePicker',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      defaultValue={undefined}
                      isFormRootChild={true}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'DatePicker_14902132')
                      }
                      {...injectData}
                    />
                    <Input
                      name={'组织ID'}
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
                      formItemIndex={16}
                      fieldName={'orgKey'}
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
                        id: 'Input_076117',
                        uid: 'Input_076117',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_076117')}
                      {...injectData}
                    />
                    <View
                      name={'布局容器'}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_443992',
                        uid: 'View_443992',
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
                          formItemIndex: 17,
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
                      ref={(r: any) => refs.setComponentRef(r, 'View_443992')}
                      {...injectData}
                    />
                  </Form>
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_0371899',
                      uid: 'View_0371899',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_0371899')}
                    {...injectData}
                  >
                    <View
                      name={'布局容器'}
                      formItemIndex={19}
                      labelCol={8}
                      wrapperCol={16}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_579073',
                        uid: 'View_579073',
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
                      ref={(r: any) => refs.setComponentRef(r, 'View_579073')}
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
                          id: 'Button_671049',
                          uid: 'Button_671049',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{ width: 'fit-content' }}
                        onClick={(e: any) => {
                          const eventDataifelse531: any = [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '8734372',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$state.mode$',
                                    operate: '==',
                                    manualValue: 'A',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 167843790692037730,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 167843854252667140,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 167843857911655200,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 167843857911683420,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167843866207769380,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167843866207711300,
                                                  children: [
                                                    {
                                                      dataName: 'condition',
                                                      dataId: 167844103526044100,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 167844110541893900,
                                                          children: [],
                                                          todoOptions: [
                                                            'msgType',
                                                            'value',
                                                          ],
                                                          options: {
                                                            compId:
                                                              'showMessage',
                                                            compName: 'system',
                                                            id: '7866596',
                                                            pageJsonId:
                                                              '4868135',
                                                            type: 'success',
                                                            value:
                                                              '修改数据成功！',
                                                          },
                                                          actionObjId:
                                                            'showMessage',
                                                          actionObjName:
                                                            'system',
                                                          value: 'showMessage',
                                                          elseIfs: [],
                                                          line_number: 15,
                                                        },
                                                        {
                                                          dataName: 'action',
                                                          dataId: 167844110806325820,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167844110806339800,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                              elseIfs: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167844110806397060,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
                                                              elseIfs: [],
                                                            },
                                                          ],
                                                          todoOptions: [
                                                            'customFuncName',
                                                            'customFuncParams',
                                                          ],
                                                          options: {
                                                            compId:
                                                              'callSelfFunc',
                                                            compName: 'system',
                                                            id: '191183',
                                                            pageJsonId:
                                                              '4868135',
                                                            customFuncName:
                                                              'refreshOaOrg',
                                                          },
                                                          actionObjId:
                                                            'callSelfFunc',
                                                          actionObjName:
                                                            'system',
                                                          value: 'callSelfFunc',
                                                          elseIfs: [],
                                                          line_number: 16,
                                                        },
                                                        {
                                                          dataName: 'action',
                                                          dataId: 167947152571771970,
                                                          children: [],
                                                          todoOptions: [],
                                                          options: {
                                                            compId:
                                                              'Form_0232295',
                                                            compLib: 'comm',
                                                            pageJsonId:
                                                              '4868135',
                                                            compName: 'Form',
                                                            id: '228365',
                                                          },
                                                          actionObjId:
                                                            'Form_0232295',
                                                          actionObjName: 'Form',
                                                          value:
                                                            'resetCurrentForm',
                                                          compLib: 'comm',
                                                          elseIfs: [],
                                                          line_number: 17,
                                                        },
                                                        {
                                                          dataName: 'action',
                                                          dataId: 167947166276141660,
                                                          children: [],
                                                          todoOptions: [],
                                                          options: {
                                                            compId:
                                                              'TreeSelect_257432',
                                                            compLib: 'comm',
                                                            pageJsonId:
                                                              '4868135',
                                                            compName:
                                                              'TreeSelect',
                                                            id: '888032',
                                                          },
                                                          actionObjId:
                                                            'TreeSelect_257432',
                                                          actionObjName:
                                                            'TreeSelect',
                                                          value: 'clearValue',
                                                          compLib: 'comm',
                                                          elseIfs: [],
                                                          line_number: 18,
                                                        },
                                                        {
                                                          dataName: 'action',
                                                          dataId: 167844111296772320,
                                                          children: [],
                                                          todoOptions: [
                                                            'disabled',
                                                            'selectComp',
                                                          ],
                                                          options: {
                                                            compId: [
                                                              'Form_0232295',
                                                              'Input_076117',
                                                              'Input_434938',
                                                              'Input_38217',
                                                              'Select_02652',
                                                              'Input_175955',
                                                              'Select_905847',
                                                              'Input_0253633',
                                                              'Input_667391',
                                                              'Select_665971',
                                                              'Select_692647',
                                                              'Select_070408',
                                                              'Select_314728',
                                                              'Select_5255812',
                                                              'Input_4483666',
                                                              'DatePicker_894548',
                                                              'Input_270361',
                                                              'DatePicker_14902132',
                                                              'Button_671049',
                                                              'Button_166271',
                                                              'TreeSelect_257432',
                                                            ],
                                                            compLib: 'comm',
                                                            pageJsonId:
                                                              '4868135',
                                                            compName: 'Form',
                                                            id: '108527',
                                                            disabled: 'true',
                                                            compid: [
                                                              'Form_0232295',
                                                              'Input_076117',
                                                              'Input_434938',
                                                              'Input_38217',
                                                              'Select_02652',
                                                              'Input_175955',
                                                              'Select_905847',
                                                              'Input_0253633',
                                                              'Input_667391',
                                                              'Select_665971',
                                                              'Select_692647',
                                                              'Select_070408',
                                                              'Select_314728',
                                                              'Select_5255812',
                                                              'Input_4483666',
                                                              'DatePicker_894548',
                                                              'Input_270361',
                                                              'DatePicker_14902132',
                                                              'Button_671049',
                                                              'Button_166271',
                                                              'TreeSelect_257432',
                                                            ],
                                                          },
                                                          actionObjId:
                                                            'Form_0232295',
                                                          actionObjName: 'Form',
                                                          value: 'setDisable',
                                                          compLib: 'comm',
                                                          elseIfs: [],
                                                          line_number: 19,
                                                        },
                                                        {
                                                          dataName: 'action',
                                                          dataId: 167955020748131360,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167955020748138270,
                                                              children: [
                                                                {
                                                                  dataName:
                                                                    'action',
                                                                  dataId: 167955020748158430,
                                                                  children: [
                                                                    {
                                                                      dataName:
                                                                        'callback',
                                                                      dataId: 167955020748180500,
                                                                      children:
                                                                        [],
                                                                      value:
                                                                        'callback1',
                                                                      params:
                                                                        [],
                                                                      elseIfs:
                                                                        [],
                                                                    },
                                                                  ],
                                                                  todoOptions: [
                                                                    'dataSource',
                                                                    'labelKey',
                                                                    'nodeValueKey',
                                                                    'selectable',
                                                                    'childrenKey',
                                                                  ],
                                                                  options: {
                                                                    compId:
                                                                      'TreeSelect_257432',
                                                                    compLib:
                                                                      'comm',
                                                                    pageJsonId:
                                                                      '4868135',
                                                                    compName:
                                                                      'TreeSelect',
                                                                    id: '419057',
                                                                    data: '$reply_539497?.resultData$',
                                                                    labelKey:
                                                                      'nodeValue',
                                                                    nodeValueKey:
                                                                      'nodeKey',
                                                                    childrenKey:
                                                                      'children',
                                                                    selectable:
                                                                      'isCheck',
                                                                  },
                                                                  actionObjId:
                                                                    'TreeSelect_257432',
                                                                  actionObjName:
                                                                    'TreeSelect',
                                                                  value:
                                                                    'reloadData',
                                                                  compLib:
                                                                    'comm',
                                                                  elseIfs: [],
                                                                  line_number: 21,
                                                                },
                                                              ],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                              elseIfs: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167955020748145150,
                                                              children: [],
                                                              value:
                                                                'callback2',
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
                                                            compId:
                                                              'apiRequest',
                                                            compName: 'system',
                                                            id: '539497',
                                                            pageJsonId:
                                                              '4868135',
                                                            sync: false,
                                                            method: 'post',
                                                            url: '/app/rhin/gateway/callRhinEngine',
                                                            _capabilityCode:
                                                              'qryOrgTreeByParentOrgCode',
                                                            _apiCode:
                                                              'qryOrgTreeByParentOrgCode',
                                                            _source: 'rhin',
                                                            _serviceId:
                                                              '953687613765332992',
                                                            _serviceTitle:
                                                              '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
                                                            params: 'object',
                                                            apiRequestSetParams:
                                                              [
                                                                {
                                                                  code: 'header',
                                                                  name: '请求头参数',
                                                                  attrType:
                                                                    'object',
                                                                  _id: 'header',
                                                                  compType:
                                                                    'Input',
                                                                  parents: [],
                                                                  id: 'header',
                                                                  dataKey:
                                                                    '0790536_header',
                                                                },
                                                                {
                                                                  code: 'path',
                                                                  name: '请求路径参数',
                                                                  attrType:
                                                                    'object',
                                                                  _id: 'path',
                                                                  compType:
                                                                    'Input',
                                                                  parents: [],
                                                                  id: 'path',
                                                                  dataKey:
                                                                    '0790536_path',
                                                                },
                                                                {
                                                                  code: 'query',
                                                                  name: 'URL 参数',
                                                                  attrType:
                                                                    'object',
                                                                  _id: 'query',
                                                                  compType:
                                                                    'Input',
                                                                  parents: [],
                                                                  id: 'query',
                                                                  dataKey:
                                                                    '0790536_query',
                                                                },
                                                                {
                                                                  code: 'body',
                                                                  name: '请求体',
                                                                  attrType:
                                                                    'object',
                                                                  children: [
                                                                    {
                                                                      code: 'parentCode',
                                                                      attrType:
                                                                        'field',
                                                                      type: 'string',
                                                                      mustFlag:
                                                                        'F',
                                                                      _id: 'body.parentCode',
                                                                      compType:
                                                                        'Input',
                                                                      name: 'parentCode',
                                                                      parents: [
                                                                        'body',
                                                                      ],
                                                                      id: 'body.parentCode',
                                                                      dataKey:
                                                                        '0790536_body.parentCode',
                                                                      value: {
                                                                        type: [
                                                                          'customize',
                                                                        ],
                                                                        code: '1',
                                                                      },
                                                                    },
                                                                  ],
                                                                  _id: 'body',
                                                                  compType:
                                                                    'Input',
                                                                  parents: [],
                                                                  id: 'body',
                                                                  dataKey:
                                                                    '0790536_body',
                                                                },
                                                              ],
                                                          },
                                                          actionObjId:
                                                            'apiRequest',
                                                          actionObjName:
                                                            'system',
                                                          value: 'apiRequest',
                                                          elseIfs: [],
                                                          line_number: 20,
                                                        },
                                                      ],
                                                      elseIfs: [],
                                                      condition: [
                                                        {
                                                          condId: '2951417',
                                                          options: {
                                                            useManual: true,
                                                            useObject: false,
                                                            context:
                                                              '$reply_06372?.resultCode$',
                                                            operate: '==',
                                                            manualValue: '0',
                                                          },
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                      ],
                                                      desc: '',
                                                      line_number: 14,
                                                    },
                                                  ],
                                                  value: 'callback1',
                                                  params: [],
                                                  elseIfs: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167843866207701660,
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
                                                id: '06372',
                                                pageJsonId: '4868135',
                                                sync: false,
                                                method: 'post',
                                                url: '/app/rhin/gateway/callRhinEngine',
                                                _capabilityCode: 'modDcOaOrg',
                                                _apiCode: 'modDcOaOrg',
                                                _source: 'rhin',
                                                _serviceId:
                                                  '884346496702455808',
                                                _serviceTitle:
                                                  'OA组织根据主键更新-zzz: modDcOaOrg',
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
                                                    dataKey: '06372_header',
                                                  },
                                                  {
                                                    code: 'path',
                                                    name: '请求路径参数',
                                                    attrType: 'object',
                                                    _id: 'path',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'path',
                                                    dataKey: '06372_path',
                                                  },
                                                  {
                                                    code: 'query',
                                                    name: 'URL 参数',
                                                    attrType: 'object',
                                                    _id: 'query',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'query',
                                                    dataKey: '06372_query',
                                                  },
                                                  {
                                                    code: 'body',
                                                    name: '请求体',
                                                    attrType: 'object',
                                                    children: [
                                                      {
                                                        code: 'orgUpdateby',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgUpdateby',
                                                        compType: 'Input',
                                                        name: 'orgUpdateby',
                                                        parents: ['body'],
                                                        id: 'body.orgUpdateby',
                                                        dataKey:
                                                          '06372_body.orgUpdateby',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgKeyPath',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgKeyPath',
                                                        compType: 'Input',
                                                        name: 'orgKeyPath',
                                                        parents: ['body'],
                                                        id: 'body.orgKeyPath',
                                                        dataKey:
                                                          '06372_body.orgKeyPath',
                                                      },
                                                      {
                                                        code: 'orgUpdate',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgUpdate',
                                                        compType: 'Input',
                                                        name: 'orgUpdate',
                                                        parents: ['body'],
                                                        id: 'body.orgUpdate',
                                                        dataKey:
                                                          '06372_body.orgUpdate',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgDisabled',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgDisabled',
                                                        compType: 'Input',
                                                        name: 'orgDisabled',
                                                        parents: ['body'],
                                                        id: 'body.orgDisabled',
                                                        dataKey:
                                                          '06372_body.orgDisabled',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                      },
                                                      {
                                                        code: 'parentOrgKey',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.parentOrgKey',
                                                        compType: 'Input',
                                                        name: 'parentOrgKey',
                                                        parents: ['body'],
                                                        id: 'body.parentOrgKey',
                                                        dataKey:
                                                          '06372_body.parentOrgKey',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'parentOrgKey',
                                                        },
                                                      },
                                                      {
                                                        code: 'actUdfNum',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.actUdfNum',
                                                        compType: 'Input',
                                                        name: 'actUdfNum',
                                                        parents: ['body'],
                                                        id: 'body.actUdfNum',
                                                        dataKey:
                                                          '06372_body.actUdfNum',
                                                      },
                                                      {
                                                        code: 'isGe',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.isGe',
                                                        compType: 'Input',
                                                        name: 'isGe',
                                                        parents: ['body'],
                                                        id: 'body.isGe',
                                                        dataKey:
                                                          '06372_body.isGe',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'isGe',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgCreateby',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgCreateby',
                                                        compType: 'Input',
                                                        name: 'orgCreateby',
                                                        parents: ['body'],
                                                        id: 'body.orgCreateby',
                                                        dataKey:
                                                          '06372_body.orgCreateby',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgCode',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgCode',
                                                        compType: 'Input',
                                                        name: 'orgCode',
                                                        parents: ['body'],
                                                        id: 'body.orgCode',
                                                        dataKey:
                                                          '06372_body.orgCode',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgCode',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgOrder',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgOrder',
                                                        compType: 'Input',
                                                        name: 'orgOrder',
                                                        parents: ['body'],
                                                        id: 'body.orgOrder',
                                                        dataKey:
                                                          '06372_body.orgOrder',
                                                      },
                                                      {
                                                        code: 'orgKey',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgKey',
                                                        compType: 'Input',
                                                        name: 'orgKey',
                                                        parents: ['body'],
                                                        id: 'body.orgKey',
                                                        dataKey:
                                                          '06372_body.orgKey',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgKey',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgCreate',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgCreate',
                                                        compType: 'Input',
                                                        name: 'orgCreate',
                                                        parents: ['body'],
                                                        id: 'body.orgCreate',
                                                        dataKey:
                                                          '06372_body.orgCreate',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgName',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.orgName',
                                                        compType: 'Input',
                                                        name: 'orgName',
                                                        parents: ['body'],
                                                        id: 'body.orgName',
                                                        dataKey:
                                                          '06372_body.orgName',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgName',
                                                        },
                                                      },
                                                      {
                                                        code: 'lanId',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'body.lanId',
                                                        compType: 'Input',
                                                        parents: ['body'],
                                                        id: 'body.lanId',
                                                        dataKey:
                                                          '06372_body.lanId',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'lanId',
                                                        },
                                                      },
                                                      {
                                                        code: 'areaId',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'body.areaId',
                                                        compType: 'Input',
                                                        parents: ['body'],
                                                        id: 'body.areaId',
                                                        dataKey:
                                                          '06372_body.areaId',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'areaId',
                                                        },
                                                      },
                                                      {
                                                        code: 'provinceId',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'body.provinceId',
                                                        compType: 'Input',
                                                        parents: ['body'],
                                                        id: 'body.provinceId',
                                                        dataKey:
                                                          '06372_body.provinceId',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'provinceId',
                                                        },
                                                      },
                                                      {
                                                        code: 'isImportant',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'body.isImportant',
                                                        compType: 'Input',
                                                        parents: ['body'],
                                                        id: 'body.isImportant',
                                                        dataKey:
                                                          '06372_body.isImportant',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'isImportant',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgLevel',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'body.orgLevel',
                                                        compType: 'Input',
                                                        parents: ['body'],
                                                        id: 'body.orgLevel',
                                                        dataKey:
                                                          '06372_body.orgLevel',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgLevel',
                                                        },
                                                      },
                                                      {
                                                        code: 'orgType',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'body.orgType',
                                                        compType: 'Input',
                                                        parents: ['body'],
                                                        id: 'body.orgType',
                                                        dataKey:
                                                          '06372_body.orgType',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgType',
                                                        },
                                                      },
                                                    ],
                                                    _id: 'body',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'body',
                                                    dataKey: '06372_body',
                                                  },
                                                ],
                                              },
                                              actionObjId: 'apiRequest',
                                              actionObjName: 'system',
                                              value: 'apiRequest',
                                              elseIfs: [],
                                              line_number: 13,
                                            },
                                          ],
                                          value: 'callback1',
                                          params: [],
                                          elseIfs: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 167843857911664700,
                                          children: [],
                                          value: 'callback2',
                                          params: [],
                                          elseIfs: [],
                                        },
                                      ],
                                      todoOptions: [],
                                      options: {
                                        compId: 'Form_0232295',
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Form',
                                        id: '124422',
                                      },
                                      actionObjId: 'Form_0232295',
                                      actionObjName: 'Form',
                                      value: 'validateCurrentForm',
                                      compLib: 'comm',
                                      elseIfs: [],
                                      line_number: 12,
                                    },
                                  ],
                                  condition: [
                                    {
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$state.mode$',
                                        operate: '==',
                                        manualValue: 'M',
                                      },
                                      condId: '617108',
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  desc: '如果是修改操作',
                                  elseIfs: [],
                                  callback: [
                                    {
                                      type: 'validateCurrentForm',
                                      dataId: 167843857911655200,
                                      options: {
                                        compId: 'Form_0232295',
                                        compLib: 'comm',
                                        pageJsonId: '4868135',
                                        compName: 'Form',
                                        id: '124422',
                                      },
                                      line_number: 12,
                                      callback1: [
                                        {
                                          type: 'apiRequest',
                                          dataId: 167843866207769380,
                                          options: {
                                            compId: 'apiRequest',
                                            compName: 'system',
                                            id: '06372',
                                            pageJsonId: '4868135',
                                            sync: false,
                                            method: 'post',
                                            url: '/app/rhin/gateway/callRhinEngine',
                                            _capabilityCode: 'modDcOaOrg',
                                            _apiCode: 'modDcOaOrg',
                                            _source: 'rhin',
                                            _serviceId: '884346496702455808',
                                            _serviceTitle:
                                              'OA组织根据主键更新-zzz: modDcOaOrg',
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
                                                dataKey: '06372_header',
                                              },
                                              {
                                                code: 'path',
                                                name: '请求路径参数',
                                                attrType: 'object',
                                                _id: 'path',
                                                compType: 'Input',
                                                parents: [],
                                                id: 'path',
                                                dataKey: '06372_path',
                                              },
                                              {
                                                code: 'query',
                                                name: 'URL 参数',
                                                attrType: 'object',
                                                _id: 'query',
                                                compType: 'Input',
                                                parents: [],
                                                id: 'query',
                                                dataKey: '06372_query',
                                              },
                                              {
                                                code: 'body',
                                                name: '请求体',
                                                attrType: 'object',
                                                children: [
                                                  {
                                                    code: 'orgUpdateby',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgUpdateby',
                                                    compType: 'Input',
                                                    name: 'orgUpdateby',
                                                    parents: ['body'],
                                                    id: 'body.orgUpdateby',
                                                    dataKey:
                                                      '06372_body.orgUpdateby',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgKeyPath',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgKeyPath',
                                                    compType: 'Input',
                                                    name: 'orgKeyPath',
                                                    parents: ['body'],
                                                    id: 'body.orgKeyPath',
                                                    dataKey:
                                                      '06372_body.orgKeyPath',
                                                  },
                                                  {
                                                    code: 'orgUpdate',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgUpdate',
                                                    compType: 'Input',
                                                    name: 'orgUpdate',
                                                    parents: ['body'],
                                                    id: 'body.orgUpdate',
                                                    dataKey:
                                                      '06372_body.orgUpdate',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgDisabled',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgDisabled',
                                                    compType: 'Input',
                                                    name: 'orgDisabled',
                                                    parents: ['body'],
                                                    id: 'body.orgDisabled',
                                                    dataKey:
                                                      '06372_body.orgDisabled',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    code: 'parentOrgKey',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.parentOrgKey',
                                                    compType: 'Input',
                                                    name: 'parentOrgKey',
                                                    parents: ['body'],
                                                    id: 'body.parentOrgKey',
                                                    dataKey:
                                                      '06372_body.parentOrgKey',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'parentOrgKey',
                                                    },
                                                  },
                                                  {
                                                    code: 'actUdfNum',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.actUdfNum',
                                                    compType: 'Input',
                                                    name: 'actUdfNum',
                                                    parents: ['body'],
                                                    id: 'body.actUdfNum',
                                                    dataKey:
                                                      '06372_body.actUdfNum',
                                                  },
                                                  {
                                                    code: 'isGe',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.isGe',
                                                    compType: 'Input',
                                                    name: 'isGe',
                                                    parents: ['body'],
                                                    id: 'body.isGe',
                                                    dataKey: '06372_body.isGe',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'isGe',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgCreateby',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgCreateby',
                                                    compType: 'Input',
                                                    name: 'orgCreateby',
                                                    parents: ['body'],
                                                    id: 'body.orgCreateby',
                                                    dataKey:
                                                      '06372_body.orgCreateby',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgCode',
                                                    compType: 'Input',
                                                    name: 'orgCode',
                                                    parents: ['body'],
                                                    id: 'body.orgCode',
                                                    dataKey:
                                                      '06372_body.orgCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgCode',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgOrder',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgOrder',
                                                    compType: 'Input',
                                                    name: 'orgOrder',
                                                    parents: ['body'],
                                                    id: 'body.orgOrder',
                                                    dataKey:
                                                      '06372_body.orgOrder',
                                                  },
                                                  {
                                                    code: 'orgKey',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgKey',
                                                    compType: 'Input',
                                                    name: 'orgKey',
                                                    parents: ['body'],
                                                    id: 'body.orgKey',
                                                    dataKey:
                                                      '06372_body.orgKey',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgKey',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgCreate',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgCreate',
                                                    compType: 'Input',
                                                    name: 'orgCreate',
                                                    parents: ['body'],
                                                    id: 'body.orgCreate',
                                                    dataKey:
                                                      '06372_body.orgCreate',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'body.orgName',
                                                    compType: 'Input',
                                                    name: 'orgName',
                                                    parents: ['body'],
                                                    id: 'body.orgName',
                                                    dataKey:
                                                      '06372_body.orgName',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgName',
                                                    },
                                                  },
                                                  {
                                                    code: 'lanId',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'body.lanId',
                                                    compType: 'Input',
                                                    parents: ['body'],
                                                    id: 'body.lanId',
                                                    dataKey: '06372_body.lanId',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'lanId',
                                                    },
                                                  },
                                                  {
                                                    code: 'areaId',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'body.areaId',
                                                    compType: 'Input',
                                                    parents: ['body'],
                                                    id: 'body.areaId',
                                                    dataKey:
                                                      '06372_body.areaId',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'areaId',
                                                    },
                                                  },
                                                  {
                                                    code: 'provinceId',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'body.provinceId',
                                                    compType: 'Input',
                                                    parents: ['body'],
                                                    id: 'body.provinceId',
                                                    dataKey:
                                                      '06372_body.provinceId',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'provinceId',
                                                    },
                                                  },
                                                  {
                                                    code: 'isImportant',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'body.isImportant',
                                                    compType: 'Input',
                                                    parents: ['body'],
                                                    id: 'body.isImportant',
                                                    dataKey:
                                                      '06372_body.isImportant',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'isImportant',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgLevel',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'body.orgLevel',
                                                    compType: 'Input',
                                                    parents: ['body'],
                                                    id: 'body.orgLevel',
                                                    dataKey:
                                                      '06372_body.orgLevel',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgLevel',
                                                    },
                                                  },
                                                  {
                                                    code: 'orgType',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'body.orgType',
                                                    compType: 'Input',
                                                    parents: ['body'],
                                                    id: 'body.orgType',
                                                    dataKey:
                                                      '06372_body.orgType',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgType',
                                                    },
                                                  },
                                                ],
                                                _id: 'body',
                                                compType: 'Input',
                                                parents: [],
                                                id: 'body',
                                                dataKey: '06372_body',
                                              },
                                            ],
                                          },
                                          line_number: 13,
                                          callback1: [
                                            {
                                              type: 'ifelse',
                                              condition: [
                                                {
                                                  condId: '2951417',
                                                  options: {
                                                    useManual: true,
                                                    useObject: false,
                                                    context:
                                                      '$reply_06372?.resultCode$',
                                                    operate: '==',
                                                    manualValue: '0',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              dataId: 167844103526044100,
                                              elseIfs: [],
                                              line_number: 14,
                                              callback1: [
                                                {
                                                  type: 'showMessage',
                                                  dataId: 167844110541893900,
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '7866596',
                                                    pageJsonId: '4868135',
                                                    type: 'success',
                                                    value: '修改数据成功！',
                                                  },
                                                  line_number: 15,
                                                },
                                                {
                                                  type: 'callSelfFunc',
                                                  dataId: 167844110806325820,
                                                  options: {
                                                    compId: 'callSelfFunc',
                                                    compName: 'system',
                                                    id: '191183',
                                                    pageJsonId: '4868135',
                                                    customFuncName:
                                                      'refreshOaOrg',
                                                  },
                                                  line_number: 16,
                                                  callback1: [],
                                                  callback2: [],
                                                },
                                                {
                                                  type: 'resetCurrentForm',
                                                  dataId: 167947152571771970,
                                                  options: {
                                                    compId: 'Form_0232295',
                                                    compLib: 'comm',
                                                    pageJsonId: '4868135',
                                                    compName: 'Form',
                                                    id: '228365',
                                                  },
                                                  line_number: 17,
                                                },
                                                {
                                                  type: 'clearValue',
                                                  dataId: 167947166276141660,
                                                  options: {
                                                    compId: 'TreeSelect_257432',
                                                    compLib: 'comm',
                                                    pageJsonId: '4868135',
                                                    compName: 'TreeSelect',
                                                    id: '888032',
                                                  },
                                                  line_number: 18,
                                                },
                                                {
                                                  type: 'setDisable',
                                                  dataId: 167844111296772320,
                                                  options: {
                                                    compId: [
                                                      'Form_0232295',
                                                      'Input_076117',
                                                      'Input_434938',
                                                      'Input_38217',
                                                      'Select_02652',
                                                      'Input_175955',
                                                      'Select_905847',
                                                      'Input_0253633',
                                                      'Input_667391',
                                                      'Select_665971',
                                                      'Select_692647',
                                                      'Select_070408',
                                                      'Select_314728',
                                                      'Select_5255812',
                                                      'Input_4483666',
                                                      'DatePicker_894548',
                                                      'Input_270361',
                                                      'DatePicker_14902132',
                                                      'Button_671049',
                                                      'Button_166271',
                                                      'TreeSelect_257432',
                                                    ],
                                                    compLib: 'comm',
                                                    pageJsonId: '4868135',
                                                    compName: 'Form',
                                                    id: '108527',
                                                    disabled: 'true',
                                                    compid: [
                                                      'Form_0232295',
                                                      'Input_076117',
                                                      'Input_434938',
                                                      'Input_38217',
                                                      'Select_02652',
                                                      'Input_175955',
                                                      'Select_905847',
                                                      'Input_0253633',
                                                      'Input_667391',
                                                      'Select_665971',
                                                      'Select_692647',
                                                      'Select_070408',
                                                      'Select_314728',
                                                      'Select_5255812',
                                                      'Input_4483666',
                                                      'DatePicker_894548',
                                                      'Input_270361',
                                                      'DatePicker_14902132',
                                                      'Button_671049',
                                                      'Button_166271',
                                                      'TreeSelect_257432',
                                                    ],
                                                  },
                                                  line_number: 19,
                                                },
                                                {
                                                  type: 'apiRequest',
                                                  dataId: 167955020748131360,
                                                  options: {
                                                    compId: 'apiRequest',
                                                    compName: 'system',
                                                    id: '539497',
                                                    pageJsonId: '4868135',
                                                    sync: false,
                                                    method: 'post',
                                                    url: '/app/rhin/gateway/callRhinEngine',
                                                    _capabilityCode:
                                                      'qryOrgTreeByParentOrgCode',
                                                    _apiCode:
                                                      'qryOrgTreeByParentOrgCode',
                                                    _source: 'rhin',
                                                    _serviceId:
                                                      '953687613765332992',
                                                    _serviceTitle:
                                                      '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                                                        dataKey:
                                                          '0790536_header',
                                                      },
                                                      {
                                                        code: 'path',
                                                        name: '请求路径参数',
                                                        attrType: 'object',
                                                        _id: 'path',
                                                        compType: 'Input',
                                                        parents: [],
                                                        id: 'path',
                                                        dataKey: '0790536_path',
                                                      },
                                                      {
                                                        code: 'query',
                                                        name: 'URL 参数',
                                                        attrType: 'object',
                                                        _id: 'query',
                                                        compType: 'Input',
                                                        parents: [],
                                                        id: 'query',
                                                        dataKey:
                                                          '0790536_query',
                                                      },
                                                      {
                                                        code: 'body',
                                                        name: '请求体',
                                                        attrType: 'object',
                                                        children: [
                                                          {
                                                            code: 'parentCode',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'body.parentCode',
                                                            compType: 'Input',
                                                            name: 'parentCode',
                                                            parents: ['body'],
                                                            id: 'body.parentCode',
                                                            dataKey:
                                                              '0790536_body.parentCode',
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '1',
                                                            },
                                                          },
                                                        ],
                                                        _id: 'body',
                                                        compType: 'Input',
                                                        parents: [],
                                                        id: 'body',
                                                        dataKey: '0790536_body',
                                                      },
                                                    ],
                                                  },
                                                  line_number: 20,
                                                  callback1: [
                                                    {
                                                      type: 'reloadData',
                                                      dataId: 167955020748158430,
                                                      options: {
                                                        compId:
                                                          'TreeSelect_257432',
                                                        compLib: 'comm',
                                                        pageJsonId: '4868135',
                                                        compName: 'TreeSelect',
                                                        id: '419057',
                                                        data: '$reply_539497?.resultData$',
                                                        labelKey: 'nodeValue',
                                                        nodeValueKey: 'nodeKey',
                                                        childrenKey: 'children',
                                                        selectable: 'isCheck',
                                                      },
                                                      line_number: 21,
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
                              line_number: 1,
                              callback1: [
                                {
                                  type: 'validateCurrentForm',
                                  dataId: 167843794396127500,
                                  options: {
                                    compId: 'Form_0232295',
                                    compLib: 'comm',
                                    pageJsonId: '4868135',
                                    compName: 'Form',
                                    id: '358792',
                                  },
                                  line_number: 2,
                                  callback1: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 167843795811618140,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '0357173',
                                        pageJsonId: '4868135',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'addDcOaOrg',
                                        _apiCode: 'addDcOaOrg',
                                        _source: 'rhin',
                                        _serviceId: '951396654239199232',
                                        _serviceTitle:
                                          '新增OA组织-hyj: addDcOaOrg',
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
                                            dataKey: '0357173_header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            _id: 'path',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'path',
                                            dataKey: '0357173_path',
                                          },
                                          {
                                            code: 'query',
                                            name: 'URL 参数',
                                            attrType: 'object',
                                            _id: 'query',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'query',
                                            dataKey: '0357173_query',
                                          },
                                          {
                                            code: 'body',
                                            name: '请求体',
                                            attrType: 'object',
                                            children: [
                                              {
                                                code: 'orgName',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgName',
                                                compType: 'Input',
                                                name: 'orgName',
                                                parents: ['body'],
                                                id: 'body.orgName',
                                                dataKey: '0357173_body.orgName',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'orgName',
                                                },
                                              },
                                              {
                                                code: 'orgKeyPath',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgKeyPath',
                                                compType: 'Input',
                                                name: 'orgKeyPath',
                                                parents: ['body'],
                                                id: 'body.orgKeyPath',
                                                dataKey:
                                                  '0357173_body.orgKeyPath',
                                              },
                                              {
                                                code: 'orgDisabled',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgDisabled',
                                                compType: 'Input',
                                                name: 'orgDisabled',
                                                parents: ['body'],
                                                id: 'body.orgDisabled',
                                                dataKey:
                                                  '0357173_body.orgDisabled',
                                              },
                                              {
                                                code: 'parentOrgKey',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.parentOrgKey',
                                                compType: 'Input',
                                                name: 'parentOrgKey',
                                                parents: ['body'],
                                                id: 'body.parentOrgKey',
                                                dataKey:
                                                  '0357173_body.parentOrgKey',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'parentOrgKey',
                                                },
                                              },
                                              {
                                                code: 'orgLevel',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgLevel',
                                                compType: 'Input',
                                                name: 'orgLevel',
                                                parents: ['body'],
                                                id: 'body.orgLevel',
                                                dataKey:
                                                  '0357173_body.orgLevel',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'orgLevel',
                                                },
                                              },
                                              {
                                                code: 'lanId',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.lanId',
                                                compType: 'Input',
                                                name: 'lanId',
                                                parents: ['body'],
                                                id: 'body.lanId',
                                                dataKey: '0357173_body.lanId',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'lanId',
                                                },
                                              },
                                              {
                                                code: 'provinceId',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.provinceId',
                                                compType: 'Input',
                                                name: 'provinceId',
                                                parents: ['body'],
                                                id: 'body.provinceId',
                                                dataKey:
                                                  '0357173_body.provinceId',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'provinceId',
                                                },
                                              },
                                              {
                                                code: 'actUdfNum',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.actUdfNum',
                                                compType: 'Input',
                                                name: 'actUdfNum',
                                                parents: ['body'],
                                                id: 'body.actUdfNum',
                                                dataKey:
                                                  '0357173_body.actUdfNum',
                                              },
                                              {
                                                code: 'orgOrder',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgOrder',
                                                compType: 'Input',
                                                name: 'orgOrder',
                                                parents: ['body'],
                                                id: 'body.orgOrder',
                                                dataKey:
                                                  '0357173_body.orgOrder',
                                              },
                                              {
                                                code: 'orgType',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgType',
                                                compType: 'Input',
                                                name: 'orgType',
                                                parents: ['body'],
                                                id: 'body.orgType',
                                                dataKey: '0357173_body.orgType',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'orgType',
                                                },
                                              },
                                              {
                                                code: 'orgUpdateby',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgUpdateby',
                                                compType: 'Input',
                                                name: 'orgUpdateby',
                                                parents: ['body'],
                                                id: 'body.orgUpdateby',
                                                dataKey:
                                                  '0357173_body.orgUpdateby',
                                                value: { type: [], code: '' },
                                              },
                                              {
                                                code: 'areaId',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.areaId',
                                                compType: 'Input',
                                                name: 'areaId',
                                                parents: ['body'],
                                                id: 'body.areaId',
                                                dataKey: '0357173_body.areaId',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'areaId',
                                                },
                                              },
                                              {
                                                code: 'orgUpdate',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgUpdate',
                                                compType: 'Input',
                                                name: 'orgUpdate',
                                                parents: ['body'],
                                                id: 'body.orgUpdate',
                                                dataKey:
                                                  '0357173_body.orgUpdate',
                                                value: { type: [], code: '' },
                                              },
                                              {
                                                code: 'orgCreateby',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgCreateby',
                                                compType: 'Input',
                                                name: 'orgCreateby',
                                                parents: ['body'],
                                                id: 'body.orgCreateby',
                                                dataKey:
                                                  '0357173_body.orgCreateby',
                                                value: { type: [], code: '' },
                                              },
                                              {
                                                code: 'orgCode',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgCode',
                                                compType: 'Input',
                                                name: 'orgCode',
                                                parents: ['body'],
                                                id: 'body.orgCode',
                                                dataKey: '0357173_body.orgCode',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'orgCode',
                                                },
                                              },
                                              {
                                                code: 'isImportant',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.isImportant',
                                                compType: 'Input',
                                                name: 'isImportant',
                                                parents: ['body'],
                                                id: 'body.isImportant',
                                                dataKey:
                                                  '0357173_body.isImportant',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'isImportant',
                                                },
                                              },
                                              {
                                                code: 'isGe',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.isGe',
                                                compType: 'Input',
                                                name: 'isGe',
                                                parents: ['body'],
                                                id: 'body.isGe',
                                                dataKey: '0357173_body.isGe',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'isGe',
                                                },
                                              },
                                              {
                                                code: 'orgKey',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgKey',
                                                compType: 'Input',
                                                name: 'orgKey',
                                                parents: ['body'],
                                                id: 'body.orgKey',
                                                dataKey: '0357173_body.orgKey',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'orgKey',
                                                },
                                              },
                                              {
                                                code: 'orgCreate',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgCreate',
                                                compType: 'Input',
                                                name: 'orgCreate',
                                                parents: ['body'],
                                                id: 'body.orgCreate',
                                                dataKey:
                                                  '0357173_body.orgCreate',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'orgCreate',
                                                },
                                              },
                                              {
                                                code: 'orgDataType',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'body.orgDataType',
                                                compType: 'Input',
                                                name: 'orgDataType',
                                                parents: ['body'],
                                                id: 'body.orgDataType',
                                                dataKey:
                                                  '0357173_body.orgDataType',
                                                value: {
                                                  type: [
                                                    'form',
                                                    'Form_0232295',
                                                    'validateFields',
                                                  ],
                                                  code: 'orgDataType',
                                                },
                                              },
                                            ],
                                            _id: 'body',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'body',
                                            dataKey: '0357173_body',
                                          },
                                        ],
                                      },
                                      line_number: 3,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '455334',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context:
                                                  '$reply_0357173.resultCode$',
                                                operate: '==',
                                                manualValue: '0',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 167844097521888540,
                                          elseIfs: [],
                                          line_number: 4,
                                          callback1: [
                                            {
                                              type: 'showMessage',
                                              dataId: 167844101175867040,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '253258',
                                                pageJsonId: '4868135',
                                                type: 'success',
                                                value: '新增数据成功！',
                                              },
                                              line_number: 5,
                                            },
                                            {
                                              type: 'callSelfFunc',
                                              dataId: 167844101546066500,
                                              options: {
                                                compId: 'callSelfFunc',
                                                compName: 'system',
                                                id: '1615423',
                                                pageJsonId: '4868135',
                                                customFuncName: 'refreshOaOrg',
                                              },
                                              line_number: 6,
                                              callback1: [],
                                              callback2: [],
                                            },
                                            {
                                              type: 'resetCurrentForm',
                                              dataId: 167947153390046300,
                                              options: {
                                                compId: 'Form_0232295',
                                                compLib: 'comm',
                                                pageJsonId: '4868135',
                                                compName: 'Form',
                                                id: '865901',
                                              },
                                              line_number: 7,
                                            },
                                            {
                                              type: 'clearValue',
                                              dataId: 167947165453618200,
                                              options: {
                                                compId: 'TreeSelect_257432',
                                                compLib: 'comm',
                                                pageJsonId: '4868135',
                                                compName: 'TreeSelect',
                                                id: '288054',
                                              },
                                              line_number: 8,
                                            },
                                            {
                                              type: 'setDisable',
                                              dataId: 167844102317742720,
                                              options: {
                                                compId: [
                                                  'Form_0232295',
                                                  'Input_076117',
                                                  'Input_434938',
                                                  'Input_38217',
                                                  'Select_02652',
                                                  'Input_175955',
                                                  'Select_905847',
                                                  'Input_0253633',
                                                  'Input_667391',
                                                  'Select_665971',
                                                  'Select_692647',
                                                  'Select_070408',
                                                  'Select_314728',
                                                  'Select_5255812',
                                                  'Input_4483666',
                                                  'DatePicker_894548',
                                                  'Input_270361',
                                                  'DatePicker_14902132',
                                                  'Button_671049',
                                                  'Button_166271',
                                                  'TreeSelect_257432',
                                                ],
                                                compLib: 'comm',
                                                pageJsonId: '4868135',
                                                compName: 'Form',
                                                id: '5313863',
                                                disabled: 'true',
                                                compid: [
                                                  'Form_0232295',
                                                  'Input_076117',
                                                  'Input_434938',
                                                  'Input_38217',
                                                  'Select_02652',
                                                  'Input_175955',
                                                  'Select_905847',
                                                  'Input_0253633',
                                                  'Input_667391',
                                                  'Select_665971',
                                                  'Select_692647',
                                                  'Select_070408',
                                                  'Select_314728',
                                                  'Select_5255812',
                                                  'Input_4483666',
                                                  'DatePicker_894548',
                                                  'Input_270361',
                                                  'DatePicker_14902132',
                                                  'Button_671049',
                                                  'Button_166271',
                                                  'TreeSelect_257432',
                                                ],
                                              },
                                              line_number: 9,
                                            },
                                            {
                                              type: 'apiRequest',
                                              dataId: 167955020404081660,
                                              options: {
                                                compId: 'apiRequest',
                                                compName: 'system',
                                                id: '089422',
                                                pageJsonId: '4868135',
                                                sync: false,
                                                method: 'post',
                                                url: '/app/rhin/gateway/callRhinEngine',
                                                _capabilityCode:
                                                  'qryOrgTreeByParentOrgCode',
                                                _apiCode:
                                                  'qryOrgTreeByParentOrgCode',
                                                _source: 'rhin',
                                                _serviceId:
                                                  '953687613765332992',
                                                _serviceTitle:
                                                  '根据父组织编码查询下级所有组织节点-tsm: qryOrgTreeByParentOrgCode',
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
                                                    dataKey: '0790536_header',
                                                  },
                                                  {
                                                    code: 'path',
                                                    name: '请求路径参数',
                                                    attrType: 'object',
                                                    _id: 'path',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'path',
                                                    dataKey: '0790536_path',
                                                  },
                                                  {
                                                    code: 'query',
                                                    name: 'URL 参数',
                                                    attrType: 'object',
                                                    _id: 'query',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'query',
                                                    dataKey: '0790536_query',
                                                  },
                                                  {
                                                    code: 'body',
                                                    name: '请求体',
                                                    attrType: 'object',
                                                    children: [
                                                      {
                                                        code: 'parentCode',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'body.parentCode',
                                                        compType: 'Input',
                                                        name: 'parentCode',
                                                        parents: ['body'],
                                                        id: 'body.parentCode',
                                                        dataKey:
                                                          '0790536_body.parentCode',
                                                        value: {
                                                          type: ['customize'],
                                                          code: '1',
                                                        },
                                                      },
                                                    ],
                                                    _id: 'body',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'body',
                                                    dataKey: '0790536_body',
                                                  },
                                                ],
                                              },
                                              line_number: 10,
                                              callback1: [
                                                {
                                                  type: 'reloadData',
                                                  dataId: 167955020404044960,
                                                  options: {
                                                    compId: 'TreeSelect_257432',
                                                    compLib: 'comm',
                                                    pageJsonId: '4868135',
                                                    compName: 'TreeSelect',
                                                    id: '6489153',
                                                    data: '$reply_089422?.resultData$',
                                                    labelKey: 'nodeValue',
                                                    nodeValueKey: 'nodeKey',
                                                    childrenKey: 'children',
                                                    selectable: 'isCheck',
                                                  },
                                                  line_number: 11,
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
                          ];
                          eventDataifelse531.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(eventDataifelse531, { e }, 'ifelse', {
                            id: 'ifelse',
                            name: 'ifelse',
                            type: 'ifelse',
                            platform: 'pc',
                          });
                        }}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Button_671049')
                        }
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
                          id: 'Button_166271',
                          uid: 'Button_166271',
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
                          const eventDataclearValue192: any = [
                            {
                              type: 'clearValue',
                              dataId: 167954214534232200,
                              options: {
                                compId: 'TreeSelect_257432',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'TreeSelect',
                                id: '881699',
                              },
                              line_number: 1,
                            },
                          ];
                          eventDataclearValue192.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDataclearValue192,
                            { e },
                            'clearValue',
                            {
                              id: 'clearValue',
                              name: 'clearValue',
                              type: 'clearValue',
                              platform: 'pc',
                            },
                          );
                          const forms161 = getFormByCompId(
                            'Form_0232295',
                            refs,
                          );
                          // 支持循环容器中的表单重置
                          (Array.isArray(forms161)
                            ? forms161
                            : [forms161]
                          ).forEach((form) => form?.resetFields());
                          const eventDatasetDisable166: any = [
                            {
                              type: 'setDisable',
                              dataId: 167842941275322370,
                              options: {
                                compId: [
                                  'Form_0232295',
                                  'Button_671049',
                                  'Button_166271',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Select_905847',
                                  'Select_02652',
                                  'Input_175955',
                                  'Input_38217',
                                  'Input_434938',
                                  'Input_076117',
                                  'Select_665971',
                                  'Select_692647',
                                  'Select_070408',
                                  'Select_314728',
                                  'Input_4483666',
                                  'DatePicker_894548',
                                  'Input_270361',
                                  'DatePicker_14902132',
                                  'TreeSelect_257432',
                                ],
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Form',
                                id: '657209',
                                disabled: 'true',
                                compid: [
                                  'Form_0232295',
                                  'Button_671049',
                                  'Button_166271',
                                  'Input_0253633',
                                  'Input_667391',
                                  'Select_905847',
                                  'Select_02652',
                                  'Input_175955',
                                  'Input_38217',
                                  'Input_434938',
                                  'Input_076117',
                                  'Select_665971',
                                  'Select_692647',
                                  'Select_070408',
                                  'Select_314728',
                                  'Input_4483666',
                                  'DatePicker_894548',
                                  'Input_270361',
                                  'DatePicker_14902132',
                                  'TreeSelect_257432',
                                ],
                              },
                              line_number: 3,
                            },
                          ];
                          eventDatasetDisable166.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatasetDisable166,
                            { e },
                            'setDisable',
                            {
                              id: 'setDisable',
                              name: 'setDisable',
                              type: 'setDisable',
                              platform: 'pc',
                            },
                          );
                        }}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Button_166271')
                        }
                        {...injectData}
                      />
                    </View>
                  </View>
                </TabPane>
                <TabPane
                  name={'标签子面板'}
                  tab={'关联用户'}
                  key={'2'}
                  $$componentItem={{
                    id: 'TabPane_421331',
                    uid: 'TabPane_421331',
                    type: 'TabPane',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) => refs.setComponentRef(r, 'TabPane_421331')}
                  {...injectData}
                >
                  <View
                    name={'布局容器'}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_482554',
                      uid: 'View_482554',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_482554')}
                    {...injectData}
                  >
                    <Form
                      name={'用户查询表单'}
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
                        id: 'Form_493328',
                        uid: 'Form_493328',
                        type: 'Form',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        padding: '0px 0px 0px 0px',
                        margin: '0px 0px 8px 0px',
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Form_493328')}
                      {...injectData}
                    >
                      <Input
                        name={'用户名称'}
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
                          id: 'Input_485159',
                          uid: 'Input_485159',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc689: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167877328129437920,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '2408469',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshUserTable',
                                customFuncParams: 'object',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc689.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc689,
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
                          refs.setComponentRef(r, 'Input_485159')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'用户账号'}
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
                          id: 'Input_4717291',
                          uid: 'Input_4717291',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc690: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167877327602814700,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '2368935',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshUserTable',
                                customFuncParams: 'object',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc690.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc690,
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
                          refs.setComponentRef(r, 'Input_4717291')
                        }
                        {...injectData}
                      />
                      <View
                        name={'布局容器'}
                        backgroundType={{
                          type: 'cleanColor',
                          color: undefined,
                        }}
                        $$componentItem={{
                          id: 'View_43339095',
                          uid: 'View_43339095',
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
                          refs.setComponentRef(r, 'View_43339095')
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
                            id: 'Button_213218',
                            uid: 'Button_213218',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={true}
                          readOnly={false}
                          style={{ width: 'fit-content' }}
                          onClick={(e: any) => {
                            const eventDatacallSelfFunc691: any = [
                              {
                                type: 'callSelfFunc',
                                dataId: 167869760423064350,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '919012',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshUserTable',
                                  customFuncParams: 'object',
                                },
                                line_number: 1,
                                callback1: [],
                                callback2: [],
                              },
                            ];
                            eventDatacallSelfFunc691.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatacallSelfFunc691,
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
                            refs.setComponentRef(r, 'Button_213218')
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
                            id: 'Button_221995',
                            uid: 'Button_221995',
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
                            const forms163 = getFormByCompId(
                              'Form_493328',
                              refs,
                            );
                            // 支持循环容器中的表单重置
                            (Array.isArray(forms163)
                              ? forms163
                              : [forms163]
                            ).forEach((form) => form?.resetFields());
                            const eventDatacallSelfFunc692: any = [
                              {
                                type: 'callSelfFunc',
                                dataId: 167877388996477380,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '736657',
                                  pageJsonId: '4868135',
                                  customFuncName: 'refreshUserTable',
                                  customFuncParams: 'object',
                                },
                                line_number: 2,
                                callback1: [],
                                callback2: [],
                              },
                            ];
                            eventDatacallSelfFunc692.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatacallSelfFunc692,
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
                            refs.setComponentRef(r, 'Button_221995')
                          }
                          {...injectData}
                        />
                      </View>
                      <View
                        name={'布局容器'}
                        backgroundType={{
                          type: 'cleanColor',
                          color: undefined,
                        }}
                        $$componentItem={{
                          id: 'View_746273',
                          uid: 'View_746273',
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
                        ref={(r: any) => refs.setComponentRef(r, 'View_746273')}
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
                          formItemIndex={4}
                          labelCol={8}
                          wrapperCol={16}
                          hasIcon={false}
                          $$componentItem={{
                            id: 'Button_8258636',
                            uid: 'Button_8258636',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={true}
                          readOnly={false}
                          style={{ width: 'fit-content' }}
                          onClick={(e: any) => {
                            const eventDatagetTableSelected75: any = [
                              {
                                type: 'getTableSelected',
                                dataId: 167877266448667550,
                                shielding: true,
                                options: {
                                  compId: 'Table_547445',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '946873',
                                },
                                line_number: 1,
                                callback1: [
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '650123',
                                        options: {
                                          context: '$data.pageParam.orgCode$',
                                          operate: 'notEmpty',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 167877266647993660,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 167877279222864830,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 167877279577744800,
                                            children: [],
                                            todoOptions: ['msgType', 'value'],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '819455',
                                              pageJsonId: '4868135',
                                              type: 'info',
                                              value: '请先选择组织！',
                                            },
                                            actionObjId: 'showMessage',
                                            actionObjName: 'system',
                                            value: 'showMessage',
                                            shielding: true,
                                            line_number: 5,
                                          },
                                        ],
                                        condition: [],
                                        shielding: true,
                                        callback: [
                                          {
                                            type: 'showMessage',
                                            dataId: 167877279577744800,
                                            shielding: true,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '819455',
                                              pageJsonId: '4868135',
                                              type: 'info',
                                              value: '请先选择组织！',
                                            },
                                            line_number: 5,
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 2,
                                    callback1: [
                                      {
                                        type: 'showCustomModal',
                                        dataId: 167877278607777280,
                                        shielding: true,
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'page',
                                          id: '5345103',
                                          pageJsonId: '4868135',
                                          modalname:
                                            '/xinzengguanlianyonghu8762',
                                          pageId: '952497066237513728',
                                          modalPath:
                                            '/xinzengguanlianyonghu8762',
                                          paramsObj: {
                                            orgCode: '$data.pageParam.orgCode$',
                                            orgInfo: '$data.pageParam$',
                                          },
                                          paramsObjKeyValueMap: {
                                            orgCode: '$data.pageParam.orgCode$',
                                            orgInfo: '$data.pageParam$',
                                          },
                                        },
                                        line_number: 3,
                                        callback1: [
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 167878171500791600,
                                            shielding: true,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '423639',
                                              pageJsonId: '4868135',
                                              customFuncName:
                                                'refreshUserTable',
                                              customFuncParams: 'object',
                                            },
                                            line_number: 4,
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
                            eventDatagetTableSelected75.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatagetTableSelected75,
                              { e },
                              'getTableSelected',
                              {
                                id: 'getTableSelected',
                                name: 'getTableSelected',
                                type: 'getTableSelected',
                                platform: 'pc',
                              },
                            ); // console 168230329975909660
                            console.log(
                              '------进入用户新增按钮事件---',
                              data?.pageParam,
                            );
                            const eventDatagetTableSelected76: any = [
                              {
                                type: 'getTableSelected',
                                dataId: 168230341924653150,
                                options: {
                                  compId: 'Table_109153',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '0069585',
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '681922',
                                        options: {
                                          context: '$data.pageParam.orgCode$',
                                          operate: 'notEmpty',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 168230349002038050,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 168230481219263460,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 168230482973722340,
                                            children: [],
                                            todoOptions: [
                                              'msgType',
                                              'value',
                                              'duration',
                                            ],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '290745',
                                              pageJsonId: '4868135',
                                              type: 'info',
                                              value: '请先选择组织！',
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
                                        desc: '',
                                        callback: [
                                          {
                                            type: 'showMessage',
                                            dataId: 168230482973722340,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '290745',
                                              pageJsonId: '4868135',
                                              type: 'info',
                                              value: '请先选择组织！',
                                            },
                                            line_number: 11,
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 8,
                                    callback1: [
                                      {
                                        type: 'showCustomModal',
                                        dataId: 168230370098503600,
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'page',
                                          id: '847379',
                                          pageJsonId: '4868135',
                                          modalname:
                                            '/xinzengguanlianyonghu8762',
                                          pageId: '952497066237513728',
                                          modalPath:
                                            '/xinzengguanlianyonghu8762',
                                          paramsObj: {
                                            orgInfo: '$data.pageParam$',
                                          },
                                          paramsObjKeyValueMap: {
                                            orgInfo: '$data.pageParam$',
                                          },
                                        },
                                        line_number: 9,
                                        callback1: [
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 168230514983066600,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '231298',
                                              pageJsonId: '4868135',
                                              customFuncName:
                                                'refreshUserTable',
                                              customFuncParams: 'object',
                                            },
                                            line_number: 10,
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
                            eventDatagetTableSelected76.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatagetTableSelected76,
                              { e },
                              'getTableSelected',
                              {
                                id: 'getTableSelected',
                                name: 'getTableSelected',
                                type: 'getTableSelected',
                                platform: 'pc',
                              },
                            ); // console 168230403789973860
                            console.log(data?.pageParam?.orgCode);
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(r, 'Button_8258636')
                          }
                          {...injectData}
                        />
                      </View>
                    </Form>
                  </View>
                  <Table
                    name={'用户表格'}
                    isFlexColumn={false}
                    extendNum={3}
                    adjustModel={'auto'}
                    pageSize={5}
                    current={
                      data?.qryDcOaUserPageByOrgCode?.resultData?.current
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
                        title: '用户名称',
                        key: 'usrLastName',
                        dataIndex: 'usrLastName',
                        className: '',
                        id: '077526',
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
                        title: '用户账号',
                        key: 'usrLogin',
                        dataIndex: 'usrLogin',
                        className: 'divider',
                        id: '257728',
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
                        title: '手机号码',
                        key: 'usrUdfMobile',
                        dataIndex: 'usrUdfMobile',
                        className: 'divider',
                        id: '897813',
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
                        title: '人员等级名称',
                        key: 'jobLevelName',
                        dataIndex: 'jobLevelName',
                        className: 'divider',
                        id: '788015',
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
                        id: '4949684',
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
                    dataSource={
                      data?.qryDcOaUserPageByOrgCode?.resultData?.records
                    }
                    fieldName={'total'}
                    total={data?.qryDcOaUserPageByOrgCode?.resultData?.total}
                    rowActions={[
                      {
                        title: '编辑',
                        iconPos: 'left',
                        icon: { theme: 'outlined', type: 'edit' },
                        type: 'edit',
                        id: '679354',
                        checked: true,
                      },
                      {
                        title: '删除',
                        iconPos: 'left',
                        icon: { theme: 'outlined', type: 'delete' },
                        type: 'delete',
                        id: '389715',
                        checked: true,
                      },
                    ]}
                    extend={[]}
                    dataSourceFromDataSourceConfig={
                      'data.qryDcOaUserPageByOrgCode.resultData.records'
                    }
                    $$componentItem={{
                      id: 'Table_4678628',
                      uid: 'Table_4678628',
                      type: 'Table',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    onPageChange={(page: any, pageSize: any) => {
                      const eventDatasetLoading216: any = [
                        {
                          type: 'setLoading',
                          dataId: 16786961871038076,
                          options: {
                            compId: 'Table_4678628',
                            compLib: 'comm',
                            pageJsonId: '4868135',
                            compName: 'Table',
                            id: '0148156',
                            loading: true,
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatasetLoading216.params =
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
                        eventDatasetLoading216,
                        { page, pageSize },
                        'setLoading',
                        {
                          id: 'setLoading',
                          name: 'setLoading',
                          type: 'setLoading',
                          platform: 'pc',
                        },
                      );
                      const eventDatareloadDataSource113: any = [
                        {
                          type: 'reloadDataSource',
                          dataId: 167869615636709900,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '634248',
                            pageJsonId: '4868135',
                            dataSourceId: 167868959393058940,
                            dataSourceName: 'qryDcOaUserPageByOrgCode',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '105784',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '99372722',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '227055',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '004917',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '2984317',
                                    code: 'pageSize',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: ['context', '$pageSize$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '902319',
                                    code: 'pageNum',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: ['context', '$page$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '058881',
                                    code: 'orgCode',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: ['datasource', 'pageParam', 'data'],
                                      code: 'orgCode',
                                    },
                                  },
                                  {
                                    attrId: '375091',
                                    code: 'usrLastName',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '955796',
                                    code: 'usrLogin',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '6174899',
                                    code: 'usrUdfMobile',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '742702',
                                    code: 'isQueryOther',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '0' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '265501',
                                    code: 'usrKeys',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                ],
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '810371',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '1279309',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '6175216',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '69169',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '17244282',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0957364',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '498762',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9743775',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '7936483',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '819853',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '305467',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '0261626',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2569676',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '882257',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '460988',
                                        code: 'jobLevel',
                                        name: '新增节点',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '199997',
                                        code: 'isDefault',
                                        name: '新增节点',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '1146655',
                                        code: 'usrUdfEmployeeId',
                                        name: 'usrUdfEmployeeId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '337048',
                                        code: 'usrUdfSex',
                                        name: 'usrUdfSex',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3954138',
                                        code: 'usrUdfShortName',
                                        name: 'usrUdfShortName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '55976',
                                        code: 'usrEmpType',
                                        name: 'usrEmpType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '120465',
                                        code: 'usrStatus',
                                        name: 'usrStatus',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '95462',
                                        code: 'usrUdfMgrErpOrg',
                                        name: 'usrUdfMgrErpOrg',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '7573738',
                                        code: 'usrLogin',
                                        name: 'usrLogin',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '756881',
                                        code: 'subUsrUdfOrgOrders',
                                        name: 'subUsrUdfOrgOrders',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '223239',
                                        code: 'usrUdfMobile',
                                        name: 'usrUdfMobile',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '169477',
                                        code: 'usrLoginAttemptsCtr',
                                        name: 'usrLoginAttemptsCtr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '0190699',
                                        code: 'usrEmail',
                                        name: 'usrEmail',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '916461',
                                        code: 'subUsrUdfOaOrgs',
                                        name: 'subUsrUdfOaOrgs',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '517279',
                                        code: 'usrCreated',
                                        name: 'usrCreated',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '160646',
                                        code: 'usrPassword',
                                        name: 'usrPassword',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '529085',
                                        code: 'usrCreate',
                                        name: 'usrCreate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '234584',
                                        code: 'actName',
                                        name: 'actName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '64297',
                                        code: 'actUdfNum',
                                        name: 'actUdfNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '292215',
                                        code: 'orgName',
                                        name: 'orgName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '5881398',
                                        code: 'usrPwdResetAttemptsCtr',
                                        name: 'usrPwdResetAttemptsCtr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '6695941',
                                        code: 'usrUdfSysMask',
                                        name: 'usrUdfSysMask',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '625817',
                                        code: 'usrUdfDepartment',
                                        name: 'usrUdfDepartment',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '9688296',
                                        code: 'usrProvisionedDate',
                                        name: 'usrProvisionedDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '480537',
                                        code: 'actKey',
                                        name: 'actKey',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '00428',
                                        code: 'usrChangePwdAtNextLogon',
                                        name: 'usrChangePwdAtNextLogon',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '06851565',
                                        code: 'subUsrUdfJobLevels',
                                        name: 'subUsrUdfJobLevels',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '0159619',
                                        code: 'usrKey',
                                        name: 'usrKey',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '312012',
                                        code: 'usrType',
                                        name: 'usrType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '000468',
                                        code: 'usrEndDate',
                                        name: 'usrEndDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '980457',
                                        code: 'orgUserRelId',
                                        name: 'orgUserRelId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '097763',
                                        code: 'usrLocked',
                                        name: 'usrLocked',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '573163',
                                        code: 'usrLastName',
                                        name: 'usrLastName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '993477',
                                        code: 'usrUdfOrgOrder',
                                        name: 'usrUdfOrgOrder',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '6225624',
                                        code: 'cardInfo',
                                        name: 'cardInfo',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '37561239',
                                        code: 'subOrgNames',
                                        name: 'subOrgNames',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '232971',
                                        code: 'usrFirstName',
                                        name: 'usrFirstName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '748128',
                                        code: 'usrUdfIdNum',
                                        name: 'usrUdfIdNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '974123',
                                        code: 'usrUdfBelongComp',
                                        name: 'usrUdfBelongComp',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '14102',
                                        code: 'usrUdfJobLevel',
                                        name: 'usrUdfJobLevel',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '110565',
                                        code: 'usrUdfOaOrg',
                                        name: 'usrUdfOaOrg',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '64428',
                                        code: 'usrUdfOaNum',
                                        name: 'usrUdfOaNum',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '320427',
                                        code: 'usrUpdate',
                                        name: 'usrUpdate',
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
                              dataId: 167869619127979230,
                              options: {
                                compId: 'Table_4678628',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '5737804',
                                loading: false,
                              },
                              line_number: 3,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 167869619738133400,
                              options: {
                                compId: 'Table_4678628',
                                compLib: 'comm',
                                pageJsonId: '4868135',
                                compName: 'Table',
                                id: '3806018',
                                loading: false,
                              },
                              line_number: 4,
                            },
                          ],
                        },
                      ];
                      eventDatareloadDataSource113.params =
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
                        eventDatareloadDataSource113,
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
                      const eventDatacustomActionCode784: any = [
                        {
                          type: 'customActionCode',
                          dataId: 167884528037813000,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '157278',
                            pageJsonId: '4868135',
                            code: 'function main(data,state,success,fail){var ids=[];ids.push(row.orgUserRelId);success(ids)};',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 167884532600124540,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '726973',
                                pageJsonId: '4868135',
                                sync: false,
                                actionTitle: '',
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
                                    dataKey: '726973_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '726973_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '726973_query',
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
                                        dataKey: '726973_body.orgUserRelIds',
                                        value: {
                                          type: ['context', '$data_157278$'],
                                          code: '',
                                        },
                                      },
                                    ],
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '726973_body',
                                  },
                                ],
                                _sourceName: '删除OA组织和用户关系-hyj',
                              },
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167884648599296800,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '40211',
                                    pageJsonId: '4868135',
                                    customFuncName: 'refreshUserTable',
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
                      eventDatacustomActionCode784.params =
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
                        eventDatacustomActionCode784,
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
                    onRowEdit={(rowId: any, row: any, index: any) => {
                      const eventDatashowCustomModal253: any = [
                        {
                          type: 'showCustomModal',
                          dataId: 167879132317798300,
                          options: {
                            compId: 'showCustomModal',
                            compName: 'page',
                            id: '613519',
                            pageJsonId: '4868135',
                            modalname: '/xiugaiOAzuzhiguanlianyonghu0431',
                            pageId: '952860583750815744',
                            paramsObj: { info: '$row$' },
                            paramsObjKeyValueMap: { info: '$row$' },
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 167879672370583500,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '509089',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshUserTable',
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
                      eventDatashowCustomModal253.params =
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
                        eventDatashowCustomModal253,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Table_4678628')}
                    {...injectData}
                  />
                </TabPane>
              </Tabs>
            </View>
          </View>
        </HorizontalView>
      </View>
    </div>
  );
};

export default withPageHOC(OaOrganizationManagementcopy$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { mode: '', associatedUsrKeys: '', associatedUsers: '' },
});
