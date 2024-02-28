// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  HorizontalView,
  Card,
  Input,
  Tree,
  Form,
  Select,
  Button,
  Table,
  Tabs,
  TabPane,
  TreeSelect,
  TimePicker,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '884248856254066688';
const OaOrganizationManagement$$Page: React.FC<PageProps> = ({
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
    const eventDatasetLoading19: any = [
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
    eventDatasetLoading19.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading19, { options_618734 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource18: any = [
      {
        type: 'reloadDataSource',
        dataId: 166244941124861440,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '37341',
          pageJsonId: '4868135',
          dataSourceId: 168230732581386100,
          dataSourceName: 'qryDcOaOrgPageByParentOrgKey',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '600799',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '776597',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '759431',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '351962',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '3621503',
                  code: 'parentOrgKey',
                  name: 'parentOrgKey',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['datasource', 'orgObj', 'data'],
                    code: 'parentOrgKey',
                  },
                },
                {
                  attrId: '5566443',
                  code: 'orgCode',
                  name: 'orgCode',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'orgCode',
                  },
                },
                {
                  attrId: '674381',
                  code: 'orgName',
                  name: 'orgName',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'orgName',
                  },
                },
                {
                  attrId: '42561',
                  code: 'orgDataType',
                  name: 'orgDataType',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_148709_2103377', 'getFieldsValue'],
                    code: 'orgDataType',
                  },
                },
                {
                  attrId: '0630196',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: [], code: '' },
                },
                {
                  attrId: '752069',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
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
    eventDatareloadDataSource18.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource18,
      { options_618734 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const forms4 = getFormByCompId('Form_0232295', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms4) ? forms4 : [forms4]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasysSetDisable1: any = [
      {
        type: 'sysSetDisable',
        dataId: 168328275882294560,
        options: {
          compId: ['Form_0232295'],
          compName: 'page',
          id: '772383',
          pageJsonId: '4868135',
          disabled: 'true',
          compid: ['Form_0232295'],
        },
        line_number: 6,
      },
    ];
    eventDatasysSetDisable1.params =
      [
        {
          title: '事件入参',
          name: 'options_618734',
          value: '$options_618734$',
        },
      ] || [];
    CMDGenerator(eventDatasysSetDisable1, { options_618734 }, 'sysSetDisable', {
      id: 'sysSetDisable',
      name: 'sysSetDisable',
      type: 'sysSetDisable',
      platform: 'undefined',
    });
  };
  const refreshUserTable = (options_380766: any) => {
    const eventDatasetLoading20: any = [
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
    eventDatasetLoading20.params =
      [
        {
          title: '事件入参',
          name: 'options_380766',
          value: '$options_380766$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading20, { options_380766 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource19: any = [
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
              code: 'function main(data,state,success,fail){var _data$qryDcOaUserPage,_data$qryDcOaUserPage2;state.associatedUsers=((_data$qryDcOaUserPage=data.qryDcOaUserPageByOrgCode)===null||_data$qryDcOaUserPage===void 0?void 0:(_data$qryDcOaUserPage2=_data$qryDcOaUserPage.resultData)===null||_data$qryDcOaUserPage2===void 0?void 0:_data$qryDcOaUserPage2.records)||[];success()};',
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
    eventDatareloadDataSource19.params =
      [
        {
          title: '事件入参',
          name: 'options_380766',
          value: '$options_380766$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource19,
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
    const eventDatasetDisable48: any = [
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
    eventDatasetDisable48.params = [] || [];
    CMDGenerator(eventDatasetDisable48, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDataapiRequest302: any = [
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '781709_header',
              key: '0',
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
                  dataKey: '781709_path.attrCode',
                  value: { type: ['customize'], code: 'ORG_LEVEL' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '781709_path',
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
              dataKey: '781709_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '781709_body',
              key: '3',
            },
          ],
          actionTitle: '查询组织等级',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 2,
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
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest302.params = [] || [];
    CMDGenerator(eventDataapiRequest302, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest303: any = [
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '8464425_header',
              key: '0',
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
                  dataKey: '8464425_path.attrCode',
                  value: { type: ['customize'], code: 'ORG_TYPE' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '8464425_path',
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
              dataKey: '8464425_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '8464425_body',
              key: '3',
            },
          ],
          actionTitle: '查询组织类型',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 4,
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
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest303.params = [] || [];
    CMDGenerator(eventDataapiRequest303, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest304: any = [
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '0698047827_header',
              key: '0',
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
                  dataKey: '0698047827_path.attrCode',
                  value: { type: ['customize'], code: 'orgDataType' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '0698047827_path',
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
              dataKey: '0698047827_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '0698047827_body',
              key: '3',
            },
          ],
          actionTitle: '查询组织数据类型',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 6,
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
            line_number: 7,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest304.params = [] || [];
    CMDGenerator(eventDataapiRequest304, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest305: any = [
      {
        type: 'apiRequest',
        dataId: 168231444215334660,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '751204',
          pageJsonId: '4868135',
          sync: false,
          actionTitle: '加载默认组织树',
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
                  dataKey: '751204_root.header',
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
                  dataKey: '751204_root.path',
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
                  dataKey: '751204_root.query',
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
                      dataKey: '751204_root.body.parentCode',
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
                      key: '0-3-1',
                      id: 'root.body.filterId',
                      dataKey: '751204_root.body.filterId',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '751204_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '751204_root',
            },
          ],
          params: 'object',
        },
        line_number: 8,
        callback1: [
          {
            type: 'reloadData',
            dataId: 168930131085013280,
            options: {
              compId: 'TreeSelect_257432',
              compLib: 'comm',
              pageJsonId: '4868135',
              compName: 'TreeSelect',
              id: '04992',
              data: '$reply_751204?.resultData$',
              labelKey: 'nodeValue',
              nodeValueKey: 'nodeKey',
              childrenKey: 'children',
            },
            line_number: 9,
            callback1: [],
          },
          {
            type: 'customActionCode',
            dataId: 168930033997290460,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '206709',
              pageJsonId: '4868135',
              code: 'function main(data,state,success,fail){var _reply_;var result=(_reply_=reply_751204)===null||_reply_===void 0?void 0:_reply_.resultData;result.isCheck=true;success(result)};',
            },
            line_number: 10,
            callback1: [
              {
                type: 'reloadData',
                dataId: 168930132218379200,
                options: {
                  compId: 'Tree_461182',
                  compLib: 'comm',
                  pageJsonId: '4868135',
                  compName: 'Tree',
                  id: '9097417',
                  data: '$data_206709$',
                  labelKey: 'nodeValue',
                  nodeValueKey: 'nodeKey',
                  childrenKey: 'children',
                },
                line_number: 11,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 168930132218378530,
                    options: {
                      compId: ['Tree_461182'],
                      compName: 'page',
                      id: '2714386',
                      pageJsonId: '4868135',
                      visible: 'true',
                      compid: ['Tree_461182'],
                    },
                    line_number: 12,
                  },
                  {
                    type: 'console',
                    dataId: 168930132218351230,
                    shielding: true,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '897636',
                      pageJsonId: '4868135',
                      value: ['加载成功后', '$reply_751204?.resultData$'],
                    },
                    line_number: 13,
                  },
                ],
              },
              {
                type: 'setDataSource',
                dataId: 169034057488598340,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '034153',
                  pageJsonId: '4868135',
                  dataSourceId: 167867151981180260,
                  dataSourceName: 'pageParam',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '233349',
                      code: 'orgLevel',
                      name: '组织等级',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '1125932',
                      code: 'orgCode',
                      name: '组织编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '1311656',
                      code: 'orgName',
                      name: '组织名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '742488',
                      code: 'orgShortName',
                      name: '组织简写名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '262612',
                      code: 'orgOrder',
                      name: '组织排序',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '6931794',
                      code: 'treeData',
                      name: '组织树数据',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: { type: ['context', '$data_206709$'], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 14,
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
    eventDataapiRequest305.params = [] || [];
    CMDGenerator(eventDataapiRequest305, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest306: any = [
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
                      key: '0-3-1',
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
        line_number: 15,
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
            line_number: 16,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest306.params = [] || [];
    CMDGenerator(eventDataapiRequest306, {}, 'apiRequest', {
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
            id: 'HorizontalView_779241',
            uid: 'HorizontalView_779241',
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
          ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_779241')}
          {...injectData}
        >
          <View
            className="View_View_648461"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_648461',
              uid: 'View_648461',
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
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_648461')}
            {...injectData}
          >
            <View
              className="View_View_905382"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_905382',
                uid: 'View_905382',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_905382')}
              {...injectData}
            >
              <Card
                name={'组织树卡片'}
                cardIconType={'middle'}
                extendNum={3}
                title={'组织树'}
                bordered={true}
                size={'default'}
                hasHeader={true}
                hasIcon={true}
                titleColor={'#1c242e'}
                headerColor={'#ffffff'}
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
                  id: 'Card_9994704',
                  uid: 'Card_9994704',
                  type: 'Card',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  padding: '20px 20px 20px 20px',
                  overflowY: 'visible',
                  margin: '0px 5px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Card_9994704')}
                {...injectData}
              >
                <Input
                  name={'输入框'}
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
                  fieldName={'search'}
                  icon={{
                    type: 'search',
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
                    id: 'Input_2580565',
                    uid: 'Input_2580565',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ margin: '0px 0px 8px 0px' }}
                  onIconClick={() => {
                    const eventDatagetValue185: any = [
                      {
                        type: 'getValue',
                        dataId: 169035436564530750,
                        options: {
                          compId: 'Input_2580565',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Input',
                          id: '861533',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169035437131311040,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '8120698',
                              pageJsonId: '4868135',
                              code: 'function main(data,state,success,fail){var _value_;var treeData=data.pageParam.treeData;console.log("\\u5F53\\u524D\\u641C\\u7D22\\u5185\\u5BB9 = ",value_861533);console.log("\\u5F53\\u524D\\u4FDD\\u5B58\\u7684\\u7EC4\\u7EC7\\u6811\\u6570\\u636E = ",treeData);var searchContent=(_value_=value_861533)===null||_value_===void 0?void 0:_value_.trim();var regex=new RegExp("^(.*)".concat(searchContent,"(.*)$"));function filterRecursive(layoutData){var copiedLayoutData=layoutData.map(function(item){return item});copiedLayoutData=copiedLayoutData.map(function(item){var filteredChildren;if(!item.children){return regex.test(item.nodeValue)?item:null}else if(regex.test(item.nodeValue)){filteredChildren=item.children}else{filteredChildren=filterRecursive(item.children);if(!filteredChildren&&!regex.test(item.nodeValue)){return null}}var copiedItem=Object.assign({},item);copiedItem.children=filteredChildren;return copiedItem}).filter(function(item){return item!=null});if(copiedLayoutData.length<=0){return null}return copiedLayoutData}var finalData=filterRecursive(treeData);console.log("finalData = ",finalData);if(!finalData){success([])}else{success(finalData)}};',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'reloadData',
                                dataId: 169035437131456770,
                                options: {
                                  compId: 'Tree_461182',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Tree',
                                  id: '656568',
                                  data: '$data_8120698$',
                                  labelKey: 'nodeValue',
                                  nodeValueKey: 'nodeKey',
                                  childrenKey: 'children',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169035437131447460,
                                    options: {
                                      compId: ['Tree_461182'],
                                      compName: 'page',
                                      id: '37664',
                                      pageJsonId: '4868135',
                                      visible: 'true',
                                      compid: ['Tree_461182'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'console',
                                    dataId: 169035437131442050,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '109033',
                                      pageJsonId: '4868135',
                                      value: [
                                        '加载成功后',
                                        '$reply_751204?.resultData$',
                                      ],
                                    },
                                    line_number: 5,
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ];
                    eventDatagetValue185.params = [] || [];
                    CMDGenerator(eventDatagetValue185, {}, 'getValue', {
                      id: 'getValue',
                      name: 'getValue',
                      type: 'getValue',
                      platform: 'pc',
                    });
                  }}
                  onPressEnter={(e: any) => {
                    const eventDatagetValue186: any = [
                      {
                        type: 'getValue',
                        dataId: 169035513816374370,
                        options: {
                          compId: 'Input_2580565',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'Input',
                          id: '692093',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169035513816366140,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '975713',
                              pageJsonId: '4868135',
                              code: 'function main(data,state,success,fail){var _value_;var treeData=data.pageParam.treeData;console.log("\\u5F53\\u524D\\u641C\\u7D22\\u5185\\u5BB9 = ",value_692093);console.log("\\u5F53\\u524D\\u4FDD\\u5B58\\u7684\\u7EC4\\u7EC7\\u6811\\u6570\\u636E = ",treeData);var searchContent=(_value_=value_692093)===null||_value_===void 0?void 0:_value_.trim();var regex=new RegExp("^(.*)".concat(searchContent,"(.*)$"));function filterRecursive(layoutData){var copiedLayoutData=layoutData.map(function(item){return item});copiedLayoutData=copiedLayoutData.map(function(item){var filteredChildren;if(!item.children){return regex.test(item.nodeValue)?item:null}else if(regex.test(item.nodeValue)){filteredChildren=item.children}else{filteredChildren=filterRecursive(item.children);if(!filteredChildren&&!regex.test(item.nodeValue)){return null}}var copiedItem=Object.assign({},item);copiedItem.children=filteredChildren;return copiedItem}).filter(function(item){return item!=null});if(copiedLayoutData.length<=0){return null}return copiedLayoutData}var finalData=filterRecursive(treeData);console.log("finalData = ",finalData);if(!finalData){success([])}else{success(finalData)};};',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'reloadData',
                                dataId: 169035513816324380,
                                options: {
                                  compId: 'Tree_461182',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Tree',
                                  id: '9463953',
                                  data: '$data_975713$',
                                  labelKey: 'nodeValue',
                                  nodeValueKey: 'nodeKey',
                                  childrenKey: 'children',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169035513816382880,
                                    options: {
                                      compId: ['Tree_461182'],
                                      compName: 'page',
                                      id: '662128',
                                      pageJsonId: '4868135',
                                      visible: 'true',
                                      compid: ['Tree_461182'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'console',
                                    dataId: 169035513816318500,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '2403965',
                                      pageJsonId: '4868135',
                                      value: [
                                        '加载成功后',
                                        '$reply_751204?.resultData$',
                                      ],
                                    },
                                    line_number: 5,
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ];
                    eventDatagetValue186.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(eventDatagetValue186, { e }, 'getValue', {
                      id: 'getValue',
                      name: 'getValue',
                      type: 'getValue',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_2580565')}
                  {...injectData}
                />
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
                  showSearch={false}
                  checkable={false}
                  className={'huiqianchulirenxuanze'}
                  $$componentItem={{
                    id: 'Tree_461182',
                    uid: 'Tree_461182',
                    type: 'Tree',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  onSelect={(selectedKeys: any, { node }: any) => {
                    const eventDatasetLoading167: any = [
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
                    eventDatasetLoading167.params =
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
                      eventDatasetLoading167,
                      { selectedKeys, node },
                      'setLoading',
                      {
                        id: 'setLoading',
                        name: 'setLoading',
                        type: 'setLoading',
                        platform: 'pc',
                      },
                    );
                    const eventDataclearValue125: any = [
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
                    eventDataclearValue125.params =
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
                      eventDataclearValue125,
                      { selectedKeys, node },
                      'clearValue',
                      {
                        id: 'clearValue',
                        name: 'clearValue',
                        type: 'clearValue',
                        platform: 'pc',
                      },
                    );
                    const eventDataclearValue126: any = [
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
                    eventDataclearValue126.params =
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
                      eventDataclearValue126,
                      { selectedKeys, node },
                      'clearValue',
                      {
                        id: 'clearValue',
                        name: 'clearValue',
                        type: 'clearValue',
                        platform: 'pc',
                      },
                    );
                    const eventDataclearValue127: any = [
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
                    eventDataclearValue127.params =
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
                      eventDataclearValue127,
                      { selectedKeys, node },
                      'clearValue',
                      {
                        id: 'clearValue',
                        name: 'clearValue',
                        type: 'clearValue',
                        platform: 'pc',
                      },
                    );
                    const eventDatagetTreeSelectedKey3: any = [
                      {
                        type: 'getTreeSelectedKey',
                        dataId: 168224547068434780,
                        options: {
                          compId: 'Tree_461182',
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
                              dataSourceId: 168230732581386100,
                              dataSourceName: 'qryDcOaOrgPageByParentOrgKey',
                              dataSourceRelType: 'service',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '600799',
                                  code: 'header',
                                  name: '请求头参数',
                                  type: 'object',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '776597',
                                  code: 'path',
                                  name: '请求路径参数',
                                  type: 'object',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '759431',
                                  code: 'query',
                                  name: 'URL 参数',
                                  type: 'object',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '351962',
                                  code: 'body',
                                  name: '请求体',
                                  type: 'object',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  children: [
                                    {
                                      attrId: '3621503',
                                      code: 'parentOrgKey',
                                      name: 'parentOrgKey',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['context', '$selectedKeys[0]$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      attrId: '5566443',
                                      code: 'orgCode',
                                      name: 'orgCode',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '674381',
                                      code: 'orgName',
                                      name: 'orgName',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '42561',
                                      code: 'orgDataType',
                                      name: 'orgDataType',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '0630196',
                                      code: 'pageNum',
                                      name: 'pageNum',
                                      type: 'long',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '752069',
                                      code: 'pageSize',
                                      name: 'pageSize',
                                      type: 'long',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                    },
                                  ],
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
                                  dataSourceId: 168231111961506400,
                                  dataSourceName: 'orgObj',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
                                    {
                                      attrId: '917368',
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
                                      _idpath: ['917368'],
                                    },
                                    {
                                      attrId: '771513',
                                      code: 'treeType',
                                      name: '属性',
                                      type: 'boolean',
                                      initialData: {
                                        type: 'static',
                                        value: 'true',
                                      },
                                      showInput: true,
                                      _codePath: ['treeType'],
                                      _idpath: ['771513'],
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
                              {
                                type: 'setLoading',
                                dataId: 168231597919255300,
                                options: {
                                  compId: 'Table_547445',
                                  compLib: 'comm',
                                  pageJsonId: '4868135',
                                  compName: 'Table',
                                  id: '8701508',
                                  loading: false,
                                },
                                line_number: 8,
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ];
                    eventDatagetTreeSelectedKey3.params =
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
                      eventDatagetTreeSelectedKey3,
                      { selectedKeys, node },
                      'getTreeSelectedKey',
                      {
                        id: 'getTreeSelectedKey',
                        name: 'getTreeSelectedKey',
                        type: 'getTreeSelectedKey',
                        platform: 'pc',
                      },
                    );
                    const eventDatasysSetVisible3: any = [
                      {
                        type: 'sysSetVisible',
                        dataId: 168230278992102880,
                        shielding: true,
                        options: {
                          compId: ['Button_224226_9699964'],
                          compName: 'page',
                          id: '850714',
                          pageJsonId: '4868135',
                          visible: 'true',
                          compid: ['Button_224226_9699964'],
                        },
                        line_number: 9,
                      },
                    ];
                    eventDatasysSetVisible3.params =
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
                      eventDatasysSetVisible3,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Tree_461182')}
                  {...injectData}
                />
              </Card>
            </View>
          </View>
          <View
            className="View_View_015853"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_015853',
              uid: 'View_015853',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_015853')}
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
              extend={[
                {
                  id: '293129',
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
                const eventDatashowCustomModal141: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166097860339693730,
                    shielding: true,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '224256',
                      pageJsonId: '4868135',
                      modalname: '/addAttrSpec',
                      paramsObj: { sceneCode: 'A' },
                      paramsObjKeyValueMap: { sceneCode: 'A' },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166158503467206600,
                        shielding: true,
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
                eventDatashowCustomModal141.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal141,
                  { e },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
                const eventDatasetActiveTabPane4: any = [
                  {
                    type: 'setActiveTabPane',
                    dataId: 168232073701823070,
                    options: {
                      compId: 'Tabs_283124',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Tabs',
                      id: '494222',
                      paramsObj: { activiKey: '1' },
                      paramsObjKeyValueMap: { activiKey: '1' },
                    },
                    line_number: 3,
                  },
                ];
                eventDatasetActiveTabPane4.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatasetActiveTabPane4,
                  { e },
                  'setActiveTabPane',
                  {
                    id: 'setActiveTabPane',
                    name: 'setActiveTabPane',
                    type: 'setActiveTabPane',
                    platform: 'pc',
                  },
                );
                const forms101 = getFormByCompId('Form_0232295', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms101) ? forms101 : [forms101]).forEach(
                  (form) => form?.resetFields(),
                );
                const eventDatasetValue33: any = [
                  {
                    type: 'setValue',
                    dataId: 169016561209857630,
                    options: {
                      compId: 'Select_905847',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'Select',
                      id: '857657',
                      valueList: { Select_905847: '0' },
                    },
                    line_number: 5,
                    callback1: [],
                  },
                ];
                eventDatasetValue33.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetValue33, { e }, 'setValue', {
                  id: 'setValue',
                  name: 'setValue',
                  type: 'setValue',
                  platform: 'pc',
                });
                const eventDataclearValue128: any = [
                  {
                    type: 'clearValue',
                    dataId: 168232093175761120,
                    options: {
                      compId: 'TreeSelect_257432',
                      compLib: 'comm',
                      pageJsonId: '4868135',
                      compName: 'TreeSelect',
                      id: '1470231',
                    },
                    line_number: 6,
                  },
                ];
                eventDataclearValue128.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataclearValue128, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataapiRequest724: any = [
                  {
                    type: 'apiRequest',
                    dataId: 168232095679243040,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '790605',
                      pageJsonId: '4868135',
                      sync: false,
                      actionTitle: '',
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
                              dataKey: '790605_root.header',
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
                              dataKey: '790605_root.path',
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
                              dataKey: '790605_root.query',
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
                                  dataKey: '790605_root.body.parentCode',
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
                                  dataKey: '790605_root.body.isDefault',
                                  value: {
                                    type: ['datasource', 'orgObj', 'data'],
                                    code: 'treeType',
                                  },
                                  _deletable: true,
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
                                  key: '0-3-1',
                                  id: 'root.body.filterId',
                                  dataKey: '790605_root.body.filterId',
                                },
                              ],
                              _id: 'root.body',
                              compType: 'Input',
                              parents: ['root'],
                              parentType: 'object',
                              parentKey: '0',
                              key: '0-3',
                              id: 'root.body',
                              dataKey: '790605_root.body',
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '790605_root',
                        },
                      ],
                      params: 'object',
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'reloadData',
                        dataId: 168232107305551700,
                        options: {
                          compId: 'TreeSelect_257432',
                          compLib: 'comm',
                          pageJsonId: '4868135',
                          compName: 'TreeSelect',
                          id: '114661',
                          data: '$reply_790605?.resultData$',
                          labelKey: 'nodeValue',
                          nodeValueKey: 'nodeKey',
                          selectable: 'isCheck',
                          childrenKey: 'children',
                        },
                        line_number: 8,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest724.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest724, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
                const eventDatacustomActionCode534: any = [
                  {
                    type: 'customActionCode',
                    dataId: 168232115639390050,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '669063',
                      pageJsonId: '4868135',
                      code: 'function main(data,state,success,fail){state.mode="A";success()};',
                    },
                    line_number: 9,
                    callback1: [
                      {
                        type: 'sysSetDisable',
                        dataId: 168232121549711800,
                        options: {
                          compId: [
                            'Input_38217',
                            'TreeSelect_257432',
                            'Input_0253633',
                            'Select_02652',
                            'Input_667391',
                            'Select_905847',
                            'Button_671049',
                            'Button_166271',
                          ],
                          compName: 'page',
                          id: '544343',
                          pageJsonId: '4868135',
                          disabled: '',
                          compid: [
                            'Input_38217',
                            'TreeSelect_257432',
                            'Input_0253633',
                            'Select_02652',
                            'Input_667391',
                            'Select_905847',
                            'Button_671049',
                            'Button_166271',
                          ],
                        },
                        line_number: 10,
                      },
                      {
                        type: 'sysSetValue',
                        dataId: 168232135547368960,
                        options: {
                          compId: [
                            'Select_5255812',
                            'Select_665971',
                            'Select_692647',
                          ],
                          compName: 'page',
                          id: '468175',
                          pageJsonId: '4868135',
                          compid: [
                            'Select_5255812',
                            'Select_665971',
                            'Select_692647',
                          ],
                          valueList: {
                            Select_665971: '1002',
                            Select_5255812: '0',
                            Select_692647: '350000',
                          },
                        },
                        line_number: 11,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode534.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatacustomActionCode534,
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
              onClickBtn2={(e: any) => {
                const eventDataapiRequest725: any = [
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
                eventDataapiRequest725.params =
                  [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(eventDataapiRequest725, { e }, 'apiRequest', {
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
                    const eventDatacallSelfFunc434: any = [
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
                    eventDatacallSelfFunc434.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc434,
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
                    const eventDatacallSelfFunc435: any = [
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
                    eventDatacallSelfFunc435.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc435,
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
                  className="View_View_110211"
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
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatacallSelfFunc436: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166244950814363230,
                          shielding: true,
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
                      eventDatacallSelfFunc436.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc436,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                      const eventDataifelse466: any = [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '1123414',
                              options: {
                                context: '$data.orgObj.parentOrgKey$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 168231869921469120,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 168231886331392220,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 168231888159318300,
                                  children: [],
                                  todoOptions: ['msgType', 'value', 'duration'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '835822',
                                    pageJsonId: '4868135',
                                    type: 'info',
                                    value: '请选择组织节点',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                  line_number: 4,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              desc: '',
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 168231888159318300,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '835822',
                                    pageJsonId: '4868135',
                                    type: 'info',
                                    value: '请选择组织节点',
                                  },
                                  line_number: 4,
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 168231894427648900,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '257088',
                                pageJsonId: '4868135',
                                customFuncName: 'refreshOaOrg',
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ];
                      eventDataifelse466.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDataifelse466, { e }, 'ifelse', {
                        id: 'ifelse',
                        name: 'ifelse',
                        type: 'ifelse',
                        platform: 'pc',
                      });
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
                      margin: '0px 12px 0px 12px',
                    }}
                    onClick={(e: any) => {
                      const forms103 = getFormByCompId(
                        'Form_148709_2103377',
                        refs,
                      );
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms103) ? forms103 : [forms103]).forEach(
                        (form) => form?.resetFields(),
                      );
                      const eventDatacallSelfFunc437: any = [
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
                      eventDatacallSelfFunc437.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc437,
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
                  <Button
                    name={'文件模板下载'}
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
                      id: 'Button_089042',
                      uid: 'Button_089042',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_089042')}
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
                    id: '6728576',
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
                    id: '716381',
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
                    id: '060562',
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
                    id: '4411636',
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
                    id: '4463123',
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
                    title: '是否省重客',
                    key: 'lanId',
                    dataIndex: 'isImportant',
                    className: 'divider',
                    id: '9957285',
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
                    id: '44626',
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
                    id: '6910004',
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
                    key: 'orgCreateby',
                    dataIndex: 'orgDataType',
                    className: 'divider',
                    id: '2997476',
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
                      '    let fontColor = "#0000FF";',
                      '',
                      '      if (row.orgDisabled === "2") {',
                      '        fontColor = "#FF0000";',
                      '      }',
                      '    ',
                      '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                      '}',
                    ],
                    staticDataSource: [
                      { id: '147986', label: '接口同步', value: '1001' },
                      { id: '712085', label: '人工新增', value: '1002' },
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
                    key: 'isImportant',
                    dataIndex: 'orgDisabled',
                    className: 'divider',
                    id: '3075987',
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
                      '     let fontColor = "#0000FF";',
                      '',
                      '      if (row.orgDisabled === "2") {',
                      '        fontColor = "#FF0000";',
                      '      }',
                      '    ',
                      '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                      '}',
                    ],
                    staticDataSource: [
                      { id: '143629', label: '生效', value: '0' },
                      { id: '068566', label: '失效', value: '2' },
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
                    rule: '',
                    checked: true,
                  },
                ]}
                extend={[]}
                total={data?.qryDcOaOrgPageByParentOrgKey?.resultData?.total}
                dataSourceFromDataSourceConfig={
                  'data.qryDcOaOrgPageByParentOrgKey.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_547445',
                  uid: 'Table_547445',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDataapiRequest726: any = [
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
                  eventDataapiRequest726.params =
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
                    eventDataapiRequest726,
                    { rowId, row, index },
                    'apiRequest',
                    {
                      id: 'apiRequest',
                      name: 'apiRequest',
                      type: 'apiRequest',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetCurrentFormValues19: any = [
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
                  eventDatasetCurrentFormValues19.params =
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
                    eventDatasetCurrentFormValues19,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDataclearOptions: any = [
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
                  eventDataclearOptions.params =
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
                    eventDataclearOptions,
                    { rowId, row, index },
                    'clearOptions',
                    {
                      id: 'clearOptions',
                      name: 'clearOptions',
                      type: 'clearOptions',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse467: any = [
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
                  eventDataifelse467.params =
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
                    eventDataifelse467,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable94: any = [
                    {
                      type: 'setDisable',
                      dataId: 168776545408775600,
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
                          'TreeSelect_257432',
                        ],
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Form',
                        id: '78113',
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
                          'TreeSelect_257432',
                        ],
                      },
                      line_number: 8,
                    },
                  ];
                  eventDatasetDisable94.params =
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
                    eventDatasetDisable94,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse468: any = [
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
                      line_number: 9,
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
                          line_number: 10,
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
                              line_number: 11,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse468.params =
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
                    eventDataifelse468,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode535: any = [
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
                      line_number: 12,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode535.params =
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
                    eventDatacustomActionCode535,
                    { rowId, row, index },
                    'customActionCode',
                    {
                      id: 'customActionCode',
                      name: 'customActionCode',
                      type: 'customActionCode',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource135: any = [
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
                            showInput: true,
                            _codePath: ['orgLevel'],
                            _idpath: ['233349'],
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
                            showInput: true,
                            _codePath: ['orgCode'],
                            _idpath: ['1125932'],
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
                            showInput: true,
                            _codePath: ['orgName'],
                            _idpath: ['1311656'],
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
                            showInput: true,
                            _codePath: ['orgShortName'],
                            _idpath: ['742488'],
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
                            showInput: true,
                            _codePath: ['orgOrder'],
                            _idpath: ['262612'],
                          },
                          {
                            attrId: '6931794',
                            code: 'treeData',
                            name: '组织树数据',
                            type: 'objectArray',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['treeData'],
                            _idpath: ['6931794'],
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 13,
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
                          line_number: 14,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource135.params =
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
                    eventDatasetDataSource135,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetActiveTabPane5: any = [
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
                      line_number: 15,
                    },
                  ];
                  eventDatasetActiveTabPane5.params =
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
                    eventDatasetActiveTabPane5,
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
                  const eventDatacallSelfFunc438: any = [
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
                  eventDatacallSelfFunc438.params =
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
                    eventDatacallSelfFunc438,
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
                  const eventDatasetLoading168: any = [
                    {
                      type: 'setLoading',
                      dataId: 167843292752521470,
                      options: {
                        compId: 'Table_547445',
                        compLib: 'comm',
                        pageJsonId: '4868135',
                        compName: 'Table',
                        id: '9267837',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading168.params =
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
                    eventDatasetLoading168,
                    { page, pageSize },
                    'setLoading',
                    {
                      id: 'setLoading',
                      name: 'setLoading',
                      type: 'setLoading',
                      platform: 'pc',
                    },
                  );
                  const eventDatareloadDataSource84: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 167842700451969470,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '1130715',
                        pageJsonId: '4868135',
                        dataSourceId: 168230732581386100,
                        dataSourceName: 'qryDcOaOrgPageByParentOrgKey',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '600799',
                            code: 'header',
                            name: '请求头参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '776597',
                            code: 'path',
                            name: '请求路径参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '759431',
                            code: 'query',
                            name: 'URL 参数',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '351962',
                            code: 'body',
                            name: '请求体',
                            type: 'object',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            children: [
                              {
                                attrId: '3621503',
                                code: 'parentOrgKey',
                                name: 'parentOrgKey',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                value: {
                                  type: ['datasource', 'orgObj', 'data'],
                                  code: 'parentOrgKey',
                                },
                              },
                              {
                                attrId: '5566443',
                                code: 'orgCode',
                                name: 'orgCode',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709_2103377',
                                    'getFieldsValue',
                                  ],
                                  code: 'orgCode',
                                },
                              },
                              {
                                attrId: '674381',
                                code: 'orgName',
                                name: 'orgName',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709_2103377',
                                    'getFieldsValue',
                                  ],
                                  code: 'orgName',
                                },
                              },
                              {
                                attrId: '42561',
                                code: 'orgDataType',
                                name: 'orgDataType',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_148709_2103377',
                                    'getFieldsValue',
                                  ],
                                  code: 'orgDataType',
                                },
                              },
                              {
                                attrId: '0630196',
                                code: 'pageNum',
                                name: 'pageNum',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                value: {
                                  type: ['context', '$page$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                              {
                                attrId: '752069',
                                code: 'pageSize',
                                name: 'pageSize',
                                type: 'long',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                value: {
                                  type: ['context', '$pageSize$'],
                                  hideAttr: true,
                                  code: '',
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
                          dataId: 167843293442705400,
                          options: {
                            compId: 'Table_547445',
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
                            compId: 'Table_547445',
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
                  eventDatareloadDataSource84.params =
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
                    eventDatareloadDataSource84,
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
                  const eventDatasetCurrentFormValues20: any = [
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
                  eventDatasetCurrentFormValues20.params =
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
                    eventDatasetCurrentFormValues20,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse469: any = [
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
                  eventDataifelse469.params =
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
                    eventDataifelse469,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable95: any = [
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
                  eventDatasetDisable95.params =
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
                    eventDatasetDisable95,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDataifelse470: any = [
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
                  eventDataifelse470.params =
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
                    eventDataifelse470,
                    { rowId, row, index },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource136: any = [
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
                            showInput: true,
                            _codePath: ['orgLevel'],
                            _idpath: ['233349'],
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
                            showInput: true,
                            _codePath: ['orgCode'],
                            _idpath: ['1125932'],
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
                            showInput: true,
                            _codePath: ['orgName'],
                            _idpath: ['1311656'],
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
                            showInput: true,
                            _codePath: ['orgShortName'],
                            _idpath: ['742488'],
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
                            showInput: true,
                            _codePath: ['orgOrder'],
                            _idpath: ['262612'],
                          },
                          {
                            attrId: '6931794',
                            code: 'treeData',
                            name: '组织树数据',
                            type: 'objectArray',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['treeData'],
                            _idpath: ['6931794'],
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
                  eventDatasetDataSource136.params =
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
                    eventDatasetDataSource136,
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
                ref={(r: any) => refs.setComponentRef(r, 'Table_547445')}
                {...injectData}
              />
            </Card>
            <View
              className="View_View_086921"
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
                      required={true}
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
                      onSelect={(value: any, node: any) => {
                        // console 168238565714068580
                        console.log(
                          '---------------选中下拉组织----------',
                          node?.props?.data,
                        );
                        const eventDatasysSetValue3: any = [
                          {
                            type: 'sysSetValue',
                            dataId: 168238569059491840,
                            options: {
                              compId: [
                                'Input_3829214',
                                'Select_070408',
                                'Select_314728',
                              ],
                              compName: 'page',
                              id: '1649723',
                              pageJsonId: '4868135',
                              compid: [
                                'Input_3829214',
                                'Select_070408',
                                'Select_314728',
                              ],
                              valueList: {
                                Input_3829214: '$node.props.data.roleCode$',
                                Select_070408: '$node.props.data.lanId$',
                                Select_314728: '$node.props.data.areaId$',
                              },
                            },
                            line_number: 2,
                            callback1: [],
                          },
                        ];
                        eventDatasysSetValue3.params =
                          [
                            {
                              title: '节点key',
                              name: 'value',
                              value: '$value$',
                            },
                            {
                              title: '节点数据',
                              name: 'node',
                              value: '$node.props.data$',
                              attrType: 'object',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatasysSetValue3,
                          { value, node },
                          'sysSetValue',
                          {
                            id: 'sysSetValue',
                            name: 'sysSetValue',
                            type: 'sysSetValue',
                            platform: 'pc',
                          },
                        );
                        const eventDataifelse472: any = [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '542577',
                                options: {
                                  context: '$node.props.data$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  context: '$node.props.data.areaId$',
                                  operate: 'notEmpty',
                                },
                                condId: '24279146',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 168923622084098400,
                            elseIfs: [],
                            line_number: 3,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 168923626259111900,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '8632663',
                                  pageJsonId: '4868135',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode:
                                    'SYS_qryRegionListByParentId',
                                  _apiCode: 'qryRegionListByParentId',
                                  _source: 'rhin',
                                  _sourceName: '根据父区域ID查询所有子区域-tsm',
                                  _serviceId: '878100790201982976',
                                  _serviceTitle:
                                    '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                                          dataKey: '8632663_root.header',
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
                                          dataKey: '8632663_root.path',
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
                                          dataKey: '8632663_root.query',
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
                                              _id: 'root.body.includeParent',
                                              compType: 'Input',
                                              name: 'includeParent',
                                              parents: ['root', 'body'],
                                              parentType: 'object',
                                              parentKey: '0-3',
                                              key: '0-3-0',
                                              id: 'root.body.includeParent',
                                              dataKey:
                                                '8632663_root.body.includeParent',
                                              value: {
                                                type: ['customize'],
                                                code: 'false',
                                              },
                                            },
                                            {
                                              code: 'parentRegionId',
                                              attrType: 'field',
                                              type: 'long',
                                              mustFlag: 'F',
                                              _id: 'root.body.parentRegionId',
                                              compType: 'Input',
                                              name: 'parentRegionId',
                                              parents: ['root', 'body'],
                                              parentType: 'object',
                                              parentKey: '0-3',
                                              key: '0-3-1',
                                              id: 'root.body.parentRegionId',
                                              dataKey:
                                                '8632663_root.body.parentRegionId',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$node.props.data$',
                                                ],
                                                hideAttr: false,
                                                code: 'lanId',
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
                                          dataKey: '8632663_root.body',
                                        },
                                      ],
                                      _id: 'root',
                                      compType: 'Input',
                                      isRoot: true,
                                      parents: [],
                                      key: '0',
                                      id: 'root',
                                      dataKey: '8632663_root',
                                    },
                                  ],
                                  params: 'object',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'reloadSelectData',
                                    dataId: 168923631321435700,
                                    options: {
                                      compId: 'Select_314728',
                                      compLib: 'comm',
                                      pageJsonId: '4868135',
                                      compName: 'Select',
                                      id: '00381',
                                      data: '$reply_8632663?.resultData$',
                                      labelKey: 'regionName',
                                      valueKey: 'regionId',
                                    },
                                    line_number: 5,
                                    callback1: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                          },
                        ];
                        eventDataifelse472.params =
                          [
                            {
                              title: '节点key',
                              name: 'value',
                              value: '$value$',
                            },
                            {
                              title: '节点数据',
                              name: 'node',
                              value: '$node.props.data$',
                              attrType: 'object',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDataifelse472,
                          { value, node },
                          'ifelse',
                          {
                            id: 'ifelse',
                            name: 'ifelse',
                            type: 'ifelse',
                            platform: 'pc',
                          },
                        );
                      }}
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
                        const eventDatagetSelectedData242: any = [
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
                        eventDatagetSelectedData242.params =
                          [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                          [];
                        CMDGenerator(
                          eventDatagetSelectedData242,
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
                      disabled={false}
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
                      name={'是否省重客'}
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
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onChange={(e: any) => {
                        const eventDatagetValue188: any = [
                          {
                            type: 'getValue',
                            dataId: 167844082935685470,
                            shielding: true,
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
                                shielding: true,
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
                                shielding: true,
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
                                shielding: true,
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
                                shielding: true,
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
                                    shielding: true,
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
                                        shielding: true,
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
                        eventDatagetValue188.params =
                          [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                          [];
                        CMDGenerator(eventDatagetValue188, { e }, 'getValue', {
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
                      disabled={true}
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
                      disabled={false}
                      visible={false}
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
                        id: 'Input_164842',
                        uid: 'Input_164842',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={false}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_164842')}
                      {...injectData}
                    />
                    <Input
                      name={'身份角色'}
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
                      fieldName={'roleCode'}
                      allowClear={false}
                      formItemIndex={17}
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
                        id: 'Input_3829214',
                        uid: 'Input_3829214',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={false}
                      readOnly={false}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_3829214')}
                      {...injectData}
                    />
                  </Form>
                  <View
                    className="View_View_0371899"
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
                      className="View_View_579073"
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
                          const eventDataifelse473: any = [
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
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167844110806397060,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
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
                                                                  line_number: 21,
                                                                },
                                                              ],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167955020748145150,
                                                              children: [],
                                                              value:
                                                                'callback2',
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
                                                            _sourceName:
                                                              '根据父组织编码查询下级所有组织节点-tsm',
                                                          },
                                                          actionObjId:
                                                            'apiRequest',
                                                          actionObjName:
                                                            'system',
                                                          value: 'apiRequest',
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
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167843866207701660,
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
                                                        dataKey:
                                                          '06372_root.header',
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
                                                        dataKey:
                                                          '06372_root.path',
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
                                                        dataKey:
                                                          '06372_root.query',
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
                                                            code: 'orgUpdateby',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgUpdateby',
                                                            compType: 'Input',
                                                            name: 'orgUpdateby',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgUpdateby',
                                                            dataKey:
                                                              '06372_root.body.orgUpdateby',
                                                            value: {
                                                              type: [],
                                                              code: '',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-5',
                                                          },
                                                          {
                                                            code: 'orgKeyPath',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgKeyPath',
                                                            compType: 'Input',
                                                            name: 'orgKeyPath',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgKeyPath',
                                                            dataKey:
                                                              '06372_root.body.orgKeyPath',
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-6',
                                                          },
                                                          {
                                                            code: 'orgUpdate',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgUpdate',
                                                            compType: 'Input',
                                                            name: 'orgUpdate',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgUpdate',
                                                            dataKey:
                                                              '06372_root.body.orgUpdate',
                                                            value: {
                                                              type: [],
                                                              code: '',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-7',
                                                          },
                                                          {
                                                            code: 'orgDisabled',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgDisabled',
                                                            compType: 'Input',
                                                            name: 'orgDisabled',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgDisabled',
                                                            dataKey:
                                                              '06372_root.body.orgDisabled',
                                                            value: {
                                                              type: [],
                                                              code: '',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-0',
                                                          },
                                                          {
                                                            code: 'parentOrgKey',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.parentOrgKey',
                                                            compType: 'Input',
                                                            name: 'parentOrgKey',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.parentOrgKey',
                                                            dataKey:
                                                              '06372_root.body.parentOrgKey',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'parentOrgKey',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-1',
                                                          },
                                                          {
                                                            code: 'actUdfNum',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.actUdfNum',
                                                            compType: 'Input',
                                                            name: 'actUdfNum',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.actUdfNum',
                                                            dataKey:
                                                              '06372_root.body.actUdfNum',
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-8',
                                                          },
                                                          {
                                                            code: 'isGe',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.isGe',
                                                            compType: 'Input',
                                                            name: 'isGe',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.isGe',
                                                            dataKey:
                                                              '06372_root.body.isGe',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'isGe',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-9',
                                                          },
                                                          {
                                                            code: 'orgCreateby',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgCreateby',
                                                            compType: 'Input',
                                                            name: 'orgCreateby',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgCreateby',
                                                            dataKey:
                                                              '06372_root.body.orgCreateby',
                                                            value: {
                                                              type: [],
                                                              code: '',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-11',
                                                          },
                                                          {
                                                            code: 'orgCode',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgCode',
                                                            compType: 'Input',
                                                            name: 'orgCode',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgCode',
                                                            dataKey:
                                                              '06372_root.body.orgCode',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'orgCode',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-12',
                                                          },
                                                          {
                                                            code: 'orgOrder',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgOrder',
                                                            compType: 'Input',
                                                            name: 'orgOrder',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgOrder',
                                                            dataKey:
                                                              '06372_root.body.orgOrder',
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-13',
                                                          },
                                                          {
                                                            code: 'orgKey',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgKey',
                                                            compType: 'Input',
                                                            name: 'orgKey',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgKey',
                                                            dataKey:
                                                              '06372_root.body.orgKey',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'orgKey',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-14',
                                                          },
                                                          {
                                                            code: 'orgCreate',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgCreate',
                                                            compType: 'Input',
                                                            name: 'orgCreate',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgCreate',
                                                            dataKey:
                                                              '06372_root.body.orgCreate',
                                                            value: {
                                                              type: [],
                                                              code: '',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-16',
                                                          },
                                                          {
                                                            code: 'orgName',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            _id: 'root.body.orgName',
                                                            compType: 'Input',
                                                            name: 'orgName',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgName',
                                                            dataKey:
                                                              '06372_root.body.orgName',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'orgName',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-18',
                                                          },
                                                          {
                                                            code: 'lanId',
                                                            name: '新增节点',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            defaultValue: '',
                                                            _id: 'root.body.lanId',
                                                            compType: 'Input',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.lanId',
                                                            dataKey:
                                                              '06372_root.body.lanId',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'lanId',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-17',
                                                          },
                                                          {
                                                            code: 'areaId',
                                                            name: '新增节点',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            defaultValue: '',
                                                            _id: 'root.body.areaId',
                                                            compType: 'Input',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.areaId',
                                                            dataKey:
                                                              '06372_root.body.areaId',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'areaId',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-2',
                                                          },
                                                          {
                                                            code: 'provinceId',
                                                            name: '新增节点',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            defaultValue: '',
                                                            _id: 'root.body.provinceId',
                                                            compType: 'Input',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.provinceId',
                                                            dataKey:
                                                              '06372_root.body.provinceId',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'provinceId',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-15',
                                                          },
                                                          {
                                                            code: 'isImportant',
                                                            name: '新增节点',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            defaultValue: '',
                                                            _id: 'root.body.isImportant',
                                                            compType: 'Input',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.isImportant',
                                                            dataKey:
                                                              '06372_root.body.isImportant',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'isImportant',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-10',
                                                          },
                                                          {
                                                            code: 'orgLevel',
                                                            name: '新增节点',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            defaultValue: '',
                                                            _id: 'root.body.orgLevel',
                                                            compType: 'Input',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgLevel',
                                                            dataKey:
                                                              '06372_root.body.orgLevel',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'orgLevel',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-19',
                                                          },
                                                          {
                                                            code: 'orgType',
                                                            name: '新增节点',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            defaultValue: '',
                                                            _id: 'root.body.orgType',
                                                            compType: 'Input',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.orgType',
                                                            dataKey:
                                                              '06372_root.body.orgType',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'validateFields',
                                                              ],
                                                              code: 'orgType',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-3',
                                                          },
                                                          {
                                                            code: 'roleCode',
                                                            name: '身份角色编码',
                                                            attrType: 'field',
                                                            type: 'string',
                                                            mustFlag: 'F',
                                                            defaultValue: '',
                                                            _id: 'root.body.roleCode',
                                                            compType: 'Input',
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-4',
                                                            id: 'root.body.roleCode',
                                                            dataKey:
                                                              '06372_root.body.roleCode',
                                                            value: {
                                                              type: [
                                                                'form',
                                                                'Form_0232295',
                                                                'getFieldsValue',
                                                              ],
                                                              code: 'roleCode',
                                                            },
                                                          },
                                                        ],
                                                        _id: 'root.body',
                                                        compType: 'Input',
                                                        parents: ['root'],
                                                        id: 'root.body',
                                                        dataKey:
                                                          '06372_root.body',
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
                                                    dataKey: '06372_root',
                                                  },
                                                ],
                                                _sourceName:
                                                  'OA组织根据主键更新-zzz',
                                              },
                                              actionObjId: 'apiRequest',
                                              actionObjName: 'system',
                                              value: 'apiRequest',
                                              line_number: 13,
                                            },
                                            {
                                              dataName: 'action',
                                              dataId: 168241191112131870,
                                              children: [],
                                              todoOptions: ['valueArray'],
                                              options: {
                                                compId: 'debug',
                                                compName: 'system',
                                                id: '852643',
                                                pageJsonId: '4868135',
                                                value: [
                                                  '----组织角色-------',
                                                  '$Form_0232295$',
                                                ],
                                              },
                                              actionObjId: 'debug',
                                              actionObjName: 'system',
                                              value: 'console',
                                              line_number: 22,
                                            },
                                          ],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 167843857911664700,
                                          children: [],
                                          value: 'callback2',
                                          params: [],
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
                                                    dataKey:
                                                      '06372_root.header',
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
                                                    dataKey: '06372_root.path',
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
                                                    dataKey: '06372_root.query',
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
                                                        code: 'orgUpdateby',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgUpdateby',
                                                        compType: 'Input',
                                                        name: 'orgUpdateby',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgUpdateby',
                                                        dataKey:
                                                          '06372_root.body.orgUpdateby',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-5',
                                                      },
                                                      {
                                                        code: 'orgKeyPath',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgKeyPath',
                                                        compType: 'Input',
                                                        name: 'orgKeyPath',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgKeyPath',
                                                        dataKey:
                                                          '06372_root.body.orgKeyPath',
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-6',
                                                      },
                                                      {
                                                        code: 'orgUpdate',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgUpdate',
                                                        compType: 'Input',
                                                        name: 'orgUpdate',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgUpdate',
                                                        dataKey:
                                                          '06372_root.body.orgUpdate',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-7',
                                                      },
                                                      {
                                                        code: 'orgDisabled',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgDisabled',
                                                        compType: 'Input',
                                                        name: 'orgDisabled',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgDisabled',
                                                        dataKey:
                                                          '06372_root.body.orgDisabled',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-0',
                                                      },
                                                      {
                                                        code: 'parentOrgKey',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.parentOrgKey',
                                                        compType: 'Input',
                                                        name: 'parentOrgKey',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.parentOrgKey',
                                                        dataKey:
                                                          '06372_root.body.parentOrgKey',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'parentOrgKey',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-1',
                                                      },
                                                      {
                                                        code: 'actUdfNum',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.actUdfNum',
                                                        compType: 'Input',
                                                        name: 'actUdfNum',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.actUdfNum',
                                                        dataKey:
                                                          '06372_root.body.actUdfNum',
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-8',
                                                      },
                                                      {
                                                        code: 'isGe',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.isGe',
                                                        compType: 'Input',
                                                        name: 'isGe',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.isGe',
                                                        dataKey:
                                                          '06372_root.body.isGe',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'isGe',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-9',
                                                      },
                                                      {
                                                        code: 'orgCreateby',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgCreateby',
                                                        compType: 'Input',
                                                        name: 'orgCreateby',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgCreateby',
                                                        dataKey:
                                                          '06372_root.body.orgCreateby',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-11',
                                                      },
                                                      {
                                                        code: 'orgCode',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgCode',
                                                        compType: 'Input',
                                                        name: 'orgCode',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgCode',
                                                        dataKey:
                                                          '06372_root.body.orgCode',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgCode',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-12',
                                                      },
                                                      {
                                                        code: 'orgOrder',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgOrder',
                                                        compType: 'Input',
                                                        name: 'orgOrder',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgOrder',
                                                        dataKey:
                                                          '06372_root.body.orgOrder',
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-13',
                                                      },
                                                      {
                                                        code: 'orgKey',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgKey',
                                                        compType: 'Input',
                                                        name: 'orgKey',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgKey',
                                                        dataKey:
                                                          '06372_root.body.orgKey',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgKey',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-14',
                                                      },
                                                      {
                                                        code: 'orgCreate',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgCreate',
                                                        compType: 'Input',
                                                        name: 'orgCreate',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgCreate',
                                                        dataKey:
                                                          '06372_root.body.orgCreate',
                                                        value: {
                                                          type: [],
                                                          code: '',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-16',
                                                      },
                                                      {
                                                        code: 'orgName',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.orgName',
                                                        compType: 'Input',
                                                        name: 'orgName',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgName',
                                                        dataKey:
                                                          '06372_root.body.orgName',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgName',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-18',
                                                      },
                                                      {
                                                        code: 'lanId',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'root.body.lanId',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.lanId',
                                                        dataKey:
                                                          '06372_root.body.lanId',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'lanId',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-17',
                                                      },
                                                      {
                                                        code: 'areaId',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'root.body.areaId',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.areaId',
                                                        dataKey:
                                                          '06372_root.body.areaId',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'areaId',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-2',
                                                      },
                                                      {
                                                        code: 'provinceId',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'root.body.provinceId',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.provinceId',
                                                        dataKey:
                                                          '06372_root.body.provinceId',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'provinceId',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-15',
                                                      },
                                                      {
                                                        code: 'isImportant',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'root.body.isImportant',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.isImportant',
                                                        dataKey:
                                                          '06372_root.body.isImportant',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'isImportant',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-10',
                                                      },
                                                      {
                                                        code: 'orgLevel',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'root.body.orgLevel',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgLevel',
                                                        dataKey:
                                                          '06372_root.body.orgLevel',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgLevel',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-19',
                                                      },
                                                      {
                                                        code: 'orgType',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'root.body.orgType',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.orgType',
                                                        dataKey:
                                                          '06372_root.body.orgType',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'validateFields',
                                                          ],
                                                          code: 'orgType',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-3',
                                                      },
                                                      {
                                                        code: 'roleCode',
                                                        name: '身份角色编码',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'root.body.roleCode',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-4',
                                                        id: 'root.body.roleCode',
                                                        dataKey:
                                                          '06372_root.body.roleCode',
                                                        value: {
                                                          type: [
                                                            'form',
                                                            'Form_0232295',
                                                            'getFieldsValue',
                                                          ],
                                                          code: 'roleCode',
                                                        },
                                                      },
                                                    ],
                                                    _id: 'root.body',
                                                    compType: 'Input',
                                                    parents: ['root'],
                                                    id: 'root.body',
                                                    dataKey: '06372_root.body',
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
                                                dataKey: '06372_root',
                                              },
                                            ],
                                            _sourceName:
                                              'OA组织根据主键更新-zzz',
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
                                                    _sourceName:
                                                      '根据父组织编码查询下级所有组织节点-tsm',
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
                                        {
                                          type: 'console',
                                          dataId: 168241191112131870,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '852643',
                                            pageJsonId: '4868135',
                                            value: [
                                              '----组织角色-------',
                                              '$Form_0232295$',
                                            ],
                                          },
                                          line_number: 22,
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
                                                dataKey: '0357173_root.header',
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
                                                dataKey: '0357173_root.path',
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
                                                dataKey: '0357173_root.query',
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
                                                    code: 'orgName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgName',
                                                    compType: 'Input',
                                                    name: 'orgName',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgName',
                                                    dataKey:
                                                      '0357173_root.body.orgName',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgName',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-10',
                                                  },
                                                  {
                                                    code: 'orgKeyPath',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgKeyPath',
                                                    compType: 'Input',
                                                    name: 'orgKeyPath',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgKeyPath',
                                                    dataKey:
                                                      '0357173_root.body.orgKeyPath',
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-11',
                                                  },
                                                  {
                                                    code: 'orgDisabled',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgDisabled',
                                                    compType: 'Input',
                                                    name: 'orgDisabled',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgDisabled',
                                                    dataKey:
                                                      '0357173_root.body.orgDisabled',
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-12',
                                                  },
                                                  {
                                                    code: 'parentOrgKey',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.parentOrgKey',
                                                    compType: 'Input',
                                                    name: 'parentOrgKey',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.parentOrgKey',
                                                    dataKey:
                                                      '0357173_root.body.parentOrgKey',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'parentOrgKey',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-13',
                                                  },
                                                  {
                                                    code: 'orgLevel',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgLevel',
                                                    compType: 'Input',
                                                    name: 'orgLevel',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgLevel',
                                                    dataKey:
                                                      '0357173_root.body.orgLevel',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgLevel',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-14',
                                                  },
                                                  {
                                                    code: 'lanId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.lanId',
                                                    compType: 'Input',
                                                    name: 'lanId',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.lanId',
                                                    dataKey:
                                                      '0357173_root.body.lanId',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'lanId',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-15',
                                                  },
                                                  {
                                                    code: 'provinceId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.provinceId',
                                                    compType: 'Input',
                                                    name: 'provinceId',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.provinceId',
                                                    dataKey:
                                                      '0357173_root.body.provinceId',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'provinceId',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-16',
                                                  },
                                                  {
                                                    code: 'actUdfNum',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.actUdfNum',
                                                    compType: 'Input',
                                                    name: 'actUdfNum',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.actUdfNum',
                                                    dataKey:
                                                      '0357173_root.body.actUdfNum',
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-17',
                                                  },
                                                  {
                                                    code: 'orgOrder',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgOrder',
                                                    compType: 'Input',
                                                    name: 'orgOrder',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgOrder',
                                                    dataKey:
                                                      '0357173_root.body.orgOrder',
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-18',
                                                  },
                                                  {
                                                    code: 'orgType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgType',
                                                    compType: 'Input',
                                                    name: 'orgType',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgType',
                                                    dataKey:
                                                      '0357173_root.body.orgType',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgType',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-19',
                                                  },
                                                  {
                                                    code: 'orgUpdateby',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgUpdateby',
                                                    compType: 'Input',
                                                    name: 'orgUpdateby',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgUpdateby',
                                                    dataKey:
                                                      '0357173_root.body.orgUpdateby',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-20',
                                                  },
                                                  {
                                                    code: 'areaId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.areaId',
                                                    compType: 'Input',
                                                    name: 'areaId',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.areaId',
                                                    dataKey:
                                                      '0357173_root.body.areaId',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'areaId',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-7',
                                                  },
                                                  {
                                                    code: 'orgUpdate',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgUpdate',
                                                    compType: 'Input',
                                                    name: 'orgUpdate',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgUpdate',
                                                    dataKey:
                                                      '0357173_root.body.orgUpdate',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-9',
                                                  },
                                                  {
                                                    code: 'orgCreateby',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgCreateby',
                                                    compType: 'Input',
                                                    name: 'orgCreateby',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgCreateby',
                                                    dataKey:
                                                      '0357173_root.body.orgCreateby',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-0',
                                                  },
                                                  {
                                                    code: 'orgCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgCode',
                                                    compType: 'Input',
                                                    name: 'orgCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgCode',
                                                    dataKey:
                                                      '0357173_root.body.orgCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-1',
                                                  },
                                                  {
                                                    code: 'isImportant',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isImportant',
                                                    compType: 'Input',
                                                    name: 'isImportant',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isImportant',
                                                    dataKey:
                                                      '0357173_root.body.isImportant',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'isImportant',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-2',
                                                  },
                                                  {
                                                    code: 'isGe',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isGe',
                                                    compType: 'Input',
                                                    name: 'isGe',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isGe',
                                                    dataKey:
                                                      '0357173_root.body.isGe',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'isGe',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-3',
                                                  },
                                                  {
                                                    code: 'orgKey',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgKey',
                                                    compType: 'Input',
                                                    name: 'orgKey',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgKey',
                                                    dataKey:
                                                      '0357173_root.body.orgKey',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgKey',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-4',
                                                  },
                                                  {
                                                    code: 'orgCreate',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgCreate',
                                                    compType: 'Input',
                                                    name: 'orgCreate',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgCreate',
                                                    dataKey:
                                                      '0357173_root.body.orgCreate',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgCreate',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-5',
                                                  },
                                                  {
                                                    code: 'orgDataType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.orgDataType',
                                                    compType: 'Input',
                                                    name: 'orgDataType',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orgDataType',
                                                    dataKey:
                                                      '0357173_root.body.orgDataType',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'validateFields',
                                                      ],
                                                      code: 'orgDataType',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-6',
                                                  },
                                                  {
                                                    code: 'roleCode',
                                                    name: '身份角色编码',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.roleCode',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-8',
                                                    id: 'root.body.roleCode',
                                                    dataKey:
                                                      '0357173_root.body.roleCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_0232295',
                                                        'getFieldsValue',
                                                      ],
                                                      code: 'roleCode',
                                                    },
                                                  },
                                                ],
                                                _id: 'root.body',
                                                compType: 'Input',
                                                parents: ['root'],
                                                id: 'root.body',
                                                dataKey: '0357173_root.body',
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
                                            dataKey: '0357173_root',
                                          },
                                        ],
                                        _sourceName: '新增OA组织-hyj',
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
                                                    dataKey: '0790536_path',
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
                                                    dataKey: '0790536_query',
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
                                                        dataKey:
                                                          '0790536_body.parentCode',
                                                        value: {
                                                          type: ['customize'],
                                                          code: '1',
                                                        },
                                                        parentType: 'object',
                                                        parentKey: '3',
                                                        key: '3-0',
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
                                                        parentType: 'object',
                                                        parentKey: '3',
                                                        key: '3-2',
                                                      },
                                                    ],
                                                    _id: 'body',
                                                    compType: 'Input',
                                                    parents: [],
                                                    id: 'body',
                                                    dataKey: '0790536_body',
                                                    key: '3',
                                                  },
                                                ],
                                                _sourceName:
                                                  '根据父组织编码查询下级所有组织节点-tsm',
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
                          eventDataifelse473.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(eventDataifelse473, { e }, 'ifelse', {
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
                          const eventDataclearValue129: any = [
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
                          eventDataclearValue129.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDataclearValue129,
                            { e },
                            'clearValue',
                            {
                              id: 'clearValue',
                              name: 'clearValue',
                              type: 'clearValue',
                              platform: 'pc',
                            },
                          );
                          const forms104 = getFormByCompId(
                            'Form_0232295',
                            refs,
                          );
                          // 支持循环容器中的表单重置
                          (Array.isArray(forms104)
                            ? forms104
                            : [forms104]
                          ).forEach((form) => form?.resetFields());
                          const eventDatasetDisable96: any = [
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
                          eventDatasetDisable96.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatasetDisable96,
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
                    className="View_View_482554"
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
                          const eventDatacallSelfFunc443: any = [
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
                          eventDatacallSelfFunc443.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc443,
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
                          const eventDatacallSelfFunc444: any = [
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
                          eventDatacallSelfFunc444.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc444,
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
                        className="View_View_43339095"
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
                            const eventDatacallSelfFunc445: any = [
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
                            eventDatacallSelfFunc445.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatacallSelfFunc445,
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
                            const forms106 = getFormByCompId(
                              'Form_493328',
                              refs,
                            );
                            // 支持循环容器中的表单重置
                            (Array.isArray(forms106)
                              ? forms106
                              : [forms106]
                            ).forEach((form) => form?.resetFields());
                            const eventDatacallSelfFunc446: any = [
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
                            eventDatacallSelfFunc446.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatacallSelfFunc446,
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
                        className="View_View_746273"
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
                            const eventDatagetTableSelected56: any = [
                              {
                                type: 'getTableSelected',
                                dataId: 167877266448667550,
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
                                            elseIfs: [],
                                            line_number: 5,
                                          },
                                        ],
                                        condition: [],
                                        elseIfs: [],
                                        callback: [
                                          {
                                            type: 'showMessage',
                                            dataId: 167877279577744800,
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
                            eventDatagetTableSelected56.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatagetTableSelected56,
                              { e },
                              'getTableSelected',
                              {
                                id: 'getTableSelected',
                                name: 'getTableSelected',
                                type: 'getTableSelected',
                                platform: 'pc',
                              },
                            );
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
                      const eventDatasetLoading169: any = [
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
                      eventDatasetLoading169.params =
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
                        eventDatasetLoading169,
                        { page, pageSize },
                        'setLoading',
                        {
                          id: 'setLoading',
                          name: 'setLoading',
                          type: 'setLoading',
                          platform: 'pc',
                        },
                      );
                      const eventDatareloadDataSource85: any = [
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
                      eventDatareloadDataSource85.params =
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
                        eventDatareloadDataSource85,
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
                      const eventDatacustomActionCode536: any = [
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
                      eventDatacustomActionCode536.params =
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
                        eventDatacustomActionCode536,
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
                      const eventDatashowCustomModal142: any = [
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
                      eventDatashowCustomModal142.params =
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
                        eventDatashowCustomModal142,
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

export default withPageHOC(OaOrganizationManagement$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { mode: '', associatedUsrKeys: '', associatedUsers: '' },
});
