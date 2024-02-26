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
  Tabs,
  TabPane,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '953182638975242240';
const OaRoleManage$$Page: React.FC<PageProps> = ({
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
  const reloadRolePage = (options_4923572: any) => {
    const eventDataclearTableSelected2: any = [
      {
        type: 'clearTableSelected',
        dataId: 167893511762264770,
        options: {
          compId: 'Table_49_112_5440223',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Table',
          id: '910779',
        },
        line_number: 1,
      },
    ];
    eventDataclearTableSelected2.params =
      [
        {
          title: '事件入参',
          name: 'options_4923572',
          value: '$options_4923572$',
        },
      ] || [];
    CMDGenerator(
      eventDataclearTableSelected2,
      { options_4923572 },
      'clearTableSelected',
      {
        id: 'clearTableSelected',
        name: 'clearTableSelected',
        type: 'clearTableSelected',
        platform: 'undefined',
      },
    );
    const eventDatavalidateCurrentForm10: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167887338965704800,
        options: {
          compId: 'Form_7756987_259648_20402',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Form',
          id: '4193894',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 167887339840304030,
            options: {
              compId: 'Table_49_112',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Table',
              id: '4741267',
              loading: true,
            },
            line_number: 3,
          },
          {
            type: 'reloadDataSource',
            dataId: 167887340884335200,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '524243',
              pageJsonId: 49,
              dataSourceId: 167887279793870180,
              dataSourceName: 'rolePage',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '652681',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'header',
                },
                {
                  attrId: '956049',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'path',
                },
                {
                  attrId: '6092407',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  key: 'query',
                },
                {
                  attrId: '599828',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '0891596',
                      code: 'roleCode',
                      name: 'roleCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.roleCode',
                      value: {
                        type: ['context', '$Form_7756987_259648_20402$'],
                        code: 'roleCode',
                      },
                    },
                    {
                      attrId: '699189',
                      code: 'roleName',
                      name: 'roleName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      key: 'body.roleName',
                      value: {
                        type: ['context', '$Form_7756987_259648_20402$'],
                        code: 'roleName',
                      },
                    },
                    {
                      attrId: '548821',
                      code: 'pageNum',
                      name: 'pageNum',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '1' },
                      type: 'long',
                      key: 'body.pageNum',
                      value: { type: ['customize'], code: '1' },
                    },
                    {
                      attrId: '3543976',
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
                  attrId: '610642',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '037371',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '001429',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '27191536',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  children: [
                    {
                      attrId: '817912',
                      code: 'total',
                      name: 'total',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '9677103',
                      code: 'current',
                      name: 'current',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '8005701',
                      code: 'hitCount',
                      name: 'hitCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '571656',
                      code: 'size',
                      name: 'size',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '511172',
                      code: 'optimizeCountSql',
                      name: 'optimizeCountSql',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '232319',
                      code: 'maxLimit',
                      name: 'maxLimit',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '967222',
                      code: 'orders',
                      name: 'orders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'fieldArray',
                      children: [
                        {
                          attrId: '3294423',
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
                      attrId: '870305',
                      code: 'countId',
                      name: 'countId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '987012',
                      code: 'isSearchCount',
                      name: 'isSearchCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '7627642',
                      code: 'records',
                      name: 'records',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '331838',
                          code: 'createStaffName',
                          name: 'createStaffName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '938959',
                          code: 'updateDate',
                          name: 'updateDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '293211',
                          code: 'roleDesc',
                          name: 'roleDesc',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '575357',
                          code: 'roleId',
                          name: 'roleId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '895896',
                          code: 'roleCode',
                          name: 'roleCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '633827',
                          code: 'roleName',
                          name: 'roleName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '154115',
                          code: 'statusCd',
                          name: 'statusCd',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '343041',
                          code: 'remark',
                          name: 'remark',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '2621304',
                          code: 'createDate',
                          name: 'createDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '08404',
                          code: 'createStaff',
                          name: 'createStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                          parentCode: 'records',
                          parentKey: 'records',
                        },
                        {
                          attrId: '531852',
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
            line_number: 4,
            callback1: [
              {
                type: 'setLoading',
                dataId: 167887340884320500,
                options: {
                  compId: 'Table_49_112',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Table',
                  id: '0728342',
                  loading: false,
                },
                line_number: 5,
              },
            ],
            callback2: [
              {
                type: 'setLoading',
                dataId: 167887340884392830,
                options: {
                  compId: 'Table_49_112',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Table',
                  id: '2374103',
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
    eventDatavalidateCurrentForm10.params =
      [
        {
          title: '事件入参',
          name: 'options_4923572',
          value: '$options_4923572$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm10,
      { options_4923572 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const showRoleDetail = (options_778665: any) => {
    const eventDataifelse53: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '651602',
            options: {
              useManual: true,
              useObject: false,
              context: '$data.roleParam.mode$',
              operate: '==',
              manualValue: 'U',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167868859978753900,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167868865601656160,
            children: [
              {
                dataName: 'action',
                dataId: 167889475952216030,
                children: [],
                todoOptions: [],
                options: {
                  compId: 'Form_7756987_259648_631751_7847953',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '7248468',
                },
                actionObjId: 'Form_7756987_259648_631751_7847953',
                actionObjName: 'Form',
                value: 'resetCurrentForm',
                compLib: 'comm',
                elseIfs: [],
                line_number: 6,
              },
              {
                dataName: 'action',
                dataId: 167889476332232830,
                children: [],
                todoOptions: ['params'],
                options: {
                  compId: 'Form_7756987_259648_631751_7847953',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '6181782',
                  params: '$options_778665$',
                },
                actionObjId: 'Form_7756987_259648_631751_7847953',
                actionObjName: 'Form',
                value: 'setCurrentFormValues',
                compLib: 'comm',
                elseIfs: [],
                line_number: 7,
              },
              {
                dataName: 'action',
                dataId: 167889479489279400,
                children: [],
                todoOptions: ['disabled', 'selectComp'],
                options: {
                  compId: 'Form_7756987_259648_631751_7847953',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '2635714',
                  disabled: 'true',
                },
                actionObjId: 'Form_7756987_259648_631751_7847953',
                actionObjName: 'Form',
                value: 'setDisable',
                compLib: 'comm',
                line_number: 8,
              },
              {
                dataName: 'action',
                dataId: 167889477308385570,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: [
                    'View_30_1122_56129022_411221_7870947_044507',
                    'Button_30_121_490898_246542_8903187_156753',
                    'Button_262564',
                  ],
                  compLib: 'custom',
                  pageJsonId: 49,
                  compName: 'View',
                  id: '923921',
                  visible: '',
                  compid: [
                    'View_30_1122_56129022_411221_7870947_044507',
                    'Button_30_121_490898_246542_8903187_156753',
                    'Button_262564',
                  ],
                },
                actionObjId: 'View_30_1122_56129022_411221_7870947_044507',
                actionObjName: 'View',
                value: 'setVisible',
                compLib: 'custom',
                elseIfs: [],
                line_number: 9,
              },
            ],
            condition: [],
            desc: '详情（其他）',
            elseIfs: [],
            callback: [
              {
                type: 'resetCurrentForm',
                dataId: 167889475952216030,
                options: {
                  compId: 'Form_7756987_259648_631751_7847953',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '7248468',
                },
                line_number: 6,
              },
              {
                type: 'setCurrentFormValues',
                dataId: 167889476332232830,
                options: {
                  compId: 'Form_7756987_259648_631751_7847953',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '6181782',
                  params: '$options_778665$',
                },
                line_number: 7,
              },
              {
                type: 'setDisable',
                dataId: 167889479489279400,
                options: {
                  compId: 'Form_7756987_259648_631751_7847953',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '2635714',
                  disabled: 'true',
                },
                line_number: 8,
              },
              {
                type: 'setVisible',
                dataId: 167889477308385570,
                options: {
                  compId: [
                    'View_30_1122_56129022_411221_7870947_044507',
                    'Button_30_121_490898_246542_8903187_156753',
                    'Button_262564',
                  ],
                  compLib: 'custom',
                  pageJsonId: 49,
                  compName: 'View',
                  id: '923921',
                  visible: '',
                  compid: [
                    'View_30_1122_56129022_411221_7870947_044507',
                    'Button_30_121_490898_246542_8903187_156753',
                    'Button_262564',
                  ],
                },
                line_number: 9,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'resetCurrentForm',
            dataId: 167887408664711970,
            options: {
              compId: 'Form_7756987_259648_631751_7847953',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '522069',
            },
            line_number: 2,
          },
          {
            type: 'setCurrentFormValues',
            dataId: 167889474696505150,
            options: {
              compId: 'Form_7756987_259648_631751_7847953',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '4746654',
              params: '$options_778665$',
            },
            line_number: 3,
          },
          {
            type: 'setDisable',
            dataId: 167889481794602530,
            options: {
              compId: 'Form_7756987_259648_631751_7847953',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '386138',
              disabled: '',
            },
            line_number: 4,
          },
          {
            type: 'setVisible',
            dataId: 167887409162382660,
            options: {
              compId: [
                'View_30_1122_56129022_411221_7870947_044507',
                'Button_30_121_490898_246542_8903187_156753',
                'Button_262564',
              ],
              compLib: 'custom',
              pageJsonId: 49,
              compName: 'View',
              id: '792912',
              visible: 'true',
              compid: [
                'View_30_1122_56129022_411221_7870947_044507',
                'Button_30_121_490898_246542_8903187_156753',
                'Button_262564',
              ],
            },
            line_number: 5,
          },
        ],
      },
    ];
    eventDataifelse53.params =
      [
        {
          title: '事件入参',
          name: 'options_778665',
          value: '$options_778665$',
        },
      ] || [];
    CMDGenerator(eventDataifelse53, { options_778665 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const saveRoleDetail = (options_304542: any) => {
    const eventDatavalidateCurrentForm11: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167897091612806370,
        options: {
          compId: 'Form_7756987_259648_631751_7847953',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Form',
          id: '50736',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '651602',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$data.roleParam.mode$',
                  operate: '==',
                  manualValue: 'A',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167897092826833300,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167897092826848450,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167897092826847420,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 167897092826820540,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 167897092826801020,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167897092826869220,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '923382',
                                  pageJsonId: 49,
                                  type: 'success',
                                  value: '编辑成功',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                line_number: 12,
                              },
                              {
                                dataName: 'action',
                                dataId: 167897092826862530,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 167897092826872740,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 167897092826846660,
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
                                  id: '952589',
                                  pageJsonId: 49,
                                  customFuncName: 'reloadRolePage',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                                line_number: 13,
                              },
                            ],
                            elseIfs: [],
                            condition: [
                              {
                                condId: '777708',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_2390076.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            line_number: 11,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                        elseIfs: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 167897092826844480,
                        children: [],
                        value: 'callback2',
                        params: [],
                        elseIfs: [],
                      },
                    ],
                    todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '2390076',
                      pageJsonId: 49,
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'modDcOaRole',
                      _apiCode: 'modDcOaRole',
                      _source: 'rhin',
                      _serviceId: '953204938633150464',
                      _serviceTitle: '修改角色信息--tzp: modDcOaRole',
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
                          dataKey: '712308_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '712308_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '712308_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'createStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaffName',
                              compType: 'Input',
                              name: 'createStaffName',
                              parents: ['body'],
                              id: 'body.createStaffName',
                              dataKey: '712308_body.createStaffName',
                            },
                            {
                              code: 'updateDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateDate',
                              compType: 'Input',
                              name: 'updateDate',
                              parents: ['body'],
                              id: 'body.updateDate',
                              dataKey: '712308_body.updateDate',
                            },
                            {
                              code: 'roleDesc',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.roleDesc',
                              compType: 'Input',
                              name: 'roleDesc',
                              parents: ['body'],
                              id: 'body.roleDesc',
                              dataKey: '712308_body.roleDesc',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751_7847953',
                                  'getFieldsValue',
                                ],
                                code: 'roleDesc',
                              },
                            },
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
                              dataKey: '712308_body.roleId',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751_7847953',
                                  'getFieldsValue',
                                ],
                                code: 'roleId',
                              },
                            },
                            {
                              code: 'roleCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.roleCode',
                              compType: 'Input',
                              name: 'roleCode',
                              parents: ['body'],
                              id: 'body.roleCode',
                              dataKey: '712308_body.roleCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751_7847953',
                                  'getFieldsValue',
                                ],
                                code: 'roleCode',
                              },
                            },
                            {
                              code: 'roleName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.roleName',
                              compType: 'Input',
                              name: 'roleName',
                              parents: ['body'],
                              id: 'body.roleName',
                              dataKey: '712308_body.roleName',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751_7847953',
                                  'getFieldsValue',
                                ],
                                code: 'roleName',
                              },
                            },
                            {
                              code: 'statusCd',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.statusCd',
                              compType: 'Input',
                              name: 'statusCd',
                              parents: ['body'],
                              id: 'body.statusCd',
                              dataKey: '712308_body.statusCd',
                            },
                            {
                              code: 'remark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.remark',
                              compType: 'Input',
                              name: 'remark',
                              parents: ['body'],
                              id: 'body.remark',
                              dataKey: '712308_body.remark',
                            },
                            {
                              code: 'createDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createDate',
                              compType: 'Input',
                              name: 'createDate',
                              parents: ['body'],
                              id: 'body.createDate',
                              dataKey: '712308_body.createDate',
                            },
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body'],
                              id: 'body.createStaff',
                              dataKey: '712308_body.createStaff',
                            },
                            {
                              code: 'updateStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateStaff',
                              compType: 'Input',
                              name: 'updateStaff',
                              parents: ['body'],
                              id: 'body.updateStaff',
                              dataKey: '712308_body.updateStaff',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '712308_body',
                        },
                      ],
                    },
                    actionObjId: 'apiRequest',
                    actionObjName: 'system',
                    value: 'apiRequest',
                    elseIfs: [],
                    line_number: 10,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data.roleParam.mode$',
                      operate: '==',
                      manualValue: 'U',
                    },
                    condId: '0712083',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '更新(mode=U)',
                elseIfs: [],
                callback: [
                  {
                    type: 'apiRequest',
                    dataId: 167897092826847420,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '2390076',
                      pageJsonId: 49,
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'modDcOaRole',
                      _apiCode: 'modDcOaRole',
                      _source: 'rhin',
                      _serviceId: '953204938633150464',
                      _serviceTitle: '修改角色信息--tzp: modDcOaRole',
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
                          dataKey: '712308_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '712308_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '712308_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'createStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaffName',
                              compType: 'Input',
                              name: 'createStaffName',
                              parents: ['body'],
                              id: 'body.createStaffName',
                              dataKey: '712308_body.createStaffName',
                            },
                            {
                              code: 'updateDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateDate',
                              compType: 'Input',
                              name: 'updateDate',
                              parents: ['body'],
                              id: 'body.updateDate',
                              dataKey: '712308_body.updateDate',
                            },
                            {
                              code: 'roleDesc',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.roleDesc',
                              compType: 'Input',
                              name: 'roleDesc',
                              parents: ['body'],
                              id: 'body.roleDesc',
                              dataKey: '712308_body.roleDesc',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751_7847953',
                                  'getFieldsValue',
                                ],
                                code: 'roleDesc',
                              },
                            },
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
                              dataKey: '712308_body.roleId',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751_7847953',
                                  'getFieldsValue',
                                ],
                                code: 'roleId',
                              },
                            },
                            {
                              code: 'roleCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.roleCode',
                              compType: 'Input',
                              name: 'roleCode',
                              parents: ['body'],
                              id: 'body.roleCode',
                              dataKey: '712308_body.roleCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751_7847953',
                                  'getFieldsValue',
                                ],
                                code: 'roleCode',
                              },
                            },
                            {
                              code: 'roleName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.roleName',
                              compType: 'Input',
                              name: 'roleName',
                              parents: ['body'],
                              id: 'body.roleName',
                              dataKey: '712308_body.roleName',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751_7847953',
                                  'getFieldsValue',
                                ],
                                code: 'roleName',
                              },
                            },
                            {
                              code: 'statusCd',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.statusCd',
                              compType: 'Input',
                              name: 'statusCd',
                              parents: ['body'],
                              id: 'body.statusCd',
                              dataKey: '712308_body.statusCd',
                            },
                            {
                              code: 'remark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.remark',
                              compType: 'Input',
                              name: 'remark',
                              parents: ['body'],
                              id: 'body.remark',
                              dataKey: '712308_body.remark',
                            },
                            {
                              code: 'createDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createDate',
                              compType: 'Input',
                              name: 'createDate',
                              parents: ['body'],
                              id: 'body.createDate',
                              dataKey: '712308_body.createDate',
                            },
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body'],
                              id: 'body.createStaff',
                              dataKey: '712308_body.createStaff',
                            },
                            {
                              code: 'updateStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateStaff',
                              compType: 'Input',
                              name: 'updateStaff',
                              parents: ['body'],
                              id: 'body.updateStaff',
                              dataKey: '712308_body.updateStaff',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '712308_body',
                        },
                      ],
                    },
                    line_number: 10,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '777708',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_2390076.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167897092826801020,
                        elseIfs: [],
                        line_number: 11,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 167897092826869220,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '923382',
                              pageJsonId: 49,
                              type: 'success',
                              value: '编辑成功',
                            },
                            line_number: 12,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 167897092826862530,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '952589',
                              pageJsonId: 49,
                              customFuncName: 'reloadRolePage',
                            },
                            line_number: 13,
                            callback1: [],
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
                dataName: 'elseIf',
                dataId: 167897092826822000,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167897092826876540,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '1510911',
                      pageJsonId: 49,
                      type: 'error',
                      value: '不支持的保存类型',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    elseIfs: [],
                    line_number: 14,
                  },
                ],
                condition: [],
                desc: '详情（其他）',
                elseIfs: [],
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 167897092826876540,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '1510911',
                      pageJsonId: 49,
                      type: 'error',
                      value: '不支持的保存类型',
                    },
                    line_number: 14,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 167897092826873400,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '216505',
                  pageJsonId: 49,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'addDcOaRole',
                  _apiCode: 'addDcOaRole',
                  _source: 'rhin',
                  _serviceId: '953205302900830208',
                  _serviceTitle: '新增角色信息--tzp: addDcOaRole',
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
                      dataKey: '41083_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '41083_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '41083_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'createStaffName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.createStaffName',
                          compType: 'Input',
                          name: 'createStaffName',
                          parents: ['body'],
                          id: 'body.createStaffName',
                          dataKey: '41083_body.createStaffName',
                        },
                        {
                          code: 'updateDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.updateDate',
                          compType: 'Input',
                          name: 'updateDate',
                          parents: ['body'],
                          id: 'body.updateDate',
                          dataKey: '41083_body.updateDate',
                        },
                        {
                          code: 'roleDesc',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.roleDesc',
                          compType: 'Input',
                          name: 'roleDesc',
                          parents: ['body'],
                          id: 'body.roleDesc',
                          dataKey: '41083_body.roleDesc',
                          value: {
                            type: [
                              'form',
                              'Form_7756987_259648_631751_7847953',
                              'getFieldsValue',
                            ],
                            code: 'roleDesc',
                          },
                        },
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
                          dataKey: '41083_body.roleId',
                        },
                        {
                          code: 'roleCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.roleCode',
                          compType: 'Input',
                          name: 'roleCode',
                          parents: ['body'],
                          id: 'body.roleCode',
                          dataKey: '41083_body.roleCode',
                          value: {
                            type: [
                              'form',
                              'Form_7756987_259648_631751_7847953',
                              'getFieldsValue',
                            ],
                            code: 'roleCode',
                          },
                        },
                        {
                          code: 'roleName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.roleName',
                          compType: 'Input',
                          name: 'roleName',
                          parents: ['body'],
                          id: 'body.roleName',
                          dataKey: '41083_body.roleName',
                          value: {
                            type: [
                              'form',
                              'Form_7756987_259648_631751_7847953',
                              'getFieldsValue',
                            ],
                            code: 'roleName',
                          },
                        },
                        {
                          code: 'statusCd',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.statusCd',
                          compType: 'Input',
                          name: 'statusCd',
                          parents: ['body'],
                          id: 'body.statusCd',
                          dataKey: '41083_body.statusCd',
                        },
                        {
                          code: 'remark',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.remark',
                          compType: 'Input',
                          name: 'remark',
                          parents: ['body'],
                          id: 'body.remark',
                          dataKey: '41083_body.remark',
                        },
                        {
                          code: 'createDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.createDate',
                          compType: 'Input',
                          name: 'createDate',
                          parents: ['body'],
                          id: 'body.createDate',
                          dataKey: '41083_body.createDate',
                        },
                        {
                          code: 'createStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.createStaff',
                          compType: 'Input',
                          name: 'createStaff',
                          parents: ['body'],
                          id: 'body.createStaff',
                          dataKey: '41083_body.createStaff',
                        },
                        {
                          code: 'updateStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.updateStaff',
                          compType: 'Input',
                          name: 'updateStaff',
                          parents: ['body'],
                          id: 'body.updateStaff',
                          dataKey: '41083_body.updateStaff',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '41083_body',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '165645',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_216505.resultCode$',
                          operate: '==',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167897092826822660,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 167897092826873900,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '128528',
                          pageJsonId: 49,
                          type: 'success',
                          value: '新增成功',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 167897092826887550,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '243741',
                          pageJsonId: 49,
                          customFuncName: 'reloadRolePage',
                        },
                        line_number: 6,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'resetCurrentForm',
                        dataId: 167897092826849470,
                        options: {
                          compId: 'Form_7756987_259648_631751_7847953',
                          compLib: 'comm',
                          pageJsonId: 49,
                          compName: 'Form',
                          id: '85839',
                        },
                        line_number: 7,
                      },
                      {
                        type: 'setDisable',
                        dataId: 167897092826885570,
                        options: {
                          compId: 'Form_7756987_259648_631751_7847953',
                          compLib: 'comm',
                          pageJsonId: 49,
                          compName: 'Form',
                          id: '5947936',
                          disabled: 'toggle',
                        },
                        line_number: 8,
                      },
                      {
                        type: 'setVisible',
                        dataId: 167897092826879840,
                        options: {
                          compId: 'View_30_1122_56129022_411221_7870947_044507',
                          compLib: 'custom',
                          pageJsonId: 49,
                          compName: 'View',
                          id: '4602803',
                          visible: '',
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
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm11.params =
      [
        {
          title: '事件入参',
          name: 'options_304542',
          value: '$options_304542$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm11,
      { options_304542 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const reloadRolePrivilegePage = (options_2945305: any) => {
    const eventDataifelse54: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '375589',
            options: {
              context: '$data.roleParam.roleId$',
              operate: 'notEmpty',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167870141330196350,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'validateCurrentForm',
            dataId: 167887437107089570,
            options: {
              compId: 'Form_5336927_4844899',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '397452',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setLoading',
                dataId: 167887438611666080,
                options: {
                  compId: 'Table_554268_7374246',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Table',
                  id: '6855044',
                  loading: true,
                },
                line_number: 3,
              },
              {
                type: 'apiRequest',
                dataId: 167887439452402000,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '70191534',
                  pageJsonId: 49,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryPrivilegeHaveRolePage',
                  _apiCode: 'qryPrivilegeHaveRolePage',
                  _source: 'rhin',
                  _serviceId: '953222570548678656',
                  _serviceTitle:
                    '包含该角色的权限列表分页--tzp: qryPrivilegeHaveRolePage',
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
                      dataKey: '70191534_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '70191534_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '70191534_query',
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
                          dataKey: '70191534_body.roleId',
                          value: {
                            type: ['datasource', 'roleParam', 'data'],
                            code: 'roleId',
                          },
                        },
                        {
                          code: 'privilegeCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.privilegeCode',
                          compType: 'Input',
                          name: 'privilegeCode',
                          parents: ['body'],
                          id: 'body.privilegeCode',
                          dataKey: '70191534_body.privilegeCode',
                          value: {
                            type: ['context', '$Form_5336927_4844899$'],
                            code: 'privilegeCode',
                          },
                        },
                        {
                          code: 'privilegeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.privilegeName',
                          compType: 'Input',
                          name: 'privilegeName',
                          parents: ['body'],
                          id: 'body.privilegeName',
                          dataKey: '70191534_body.privilegeName',
                          value: {
                            type: ['context', '$Form_5336927_4844899$'],
                            code: 'privilegeName',
                          },
                        },
                        {
                          code: 'pageNum',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.pageNum',
                          compType: 'Input',
                          name: 'pageNum',
                          parents: ['body'],
                          id: 'body.pageNum',
                          dataKey: '70191534_body.pageNum',
                          value: {
                            type: ['context', '$options_2945305$'],
                            code: 'pageNum',
                          },
                        },
                        {
                          code: 'pageSize',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.pageSize',
                          compType: 'Input',
                          name: 'pageSize',
                          parents: ['body'],
                          id: 'body.pageSize',
                          dataKey: '70191534_body.pageSize',
                          value: { type: ['customize'], code: '5' },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '70191534_body',
                    },
                  ],
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'reloadTableData',
                    dataId: 167889493741738880,
                    options: {
                      compId: 'Table_554268_7374246',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '622057',
                      data: '$reply_70191534?.resultData.records$',
                      total: '$reply_70191534?.resultData.total$',
                      current: '$reply_70191534?.resultData.current$',
                    },
                    line_number: 5,
                    callback1: [],
                  },
                  {
                    type: 'setLoading',
                    dataId: 167887442934698800,
                    options: {
                      compId: 'Table_554268_7374246',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '134402',
                      loading: false,
                    },
                    line_number: 6,
                  },
                ],
                callback2: [
                  {
                    type: 'setLoading',
                    dataId: 167887443132225060,
                    options: {
                      compId: 'Table_554268_7374246',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '8294644',
                      loading: false,
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse54.params =
      [
        {
          title: '事件入参',
          name: 'options_2945305',
          value: '$options_2945305$',
        },
      ] || [];
    CMDGenerator(eventDataifelse54, { options_2945305 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const emptyBelow = (options_3938694: any) => {
    const eventDatacustomActionCode198: any = [
      {
        type: 'customActionCode',
        dataId: 167877759213510200,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '51444894',
          pageJsonId: 49,
          code: 'function main(data,state,success,fail){success([])};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 167887464632580930,
            options: {
              compId: 'Table_554268_7374246',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Table',
              id: '816186',
              data: '$data_51444894$',
              total: '0',
              current: '1',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'reloadTableData',
            dataId: 167895838729975170,
            options: {
              compId: 'Table_554268_7374246_75782',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Table',
              id: '369606',
              data: '$data_51444894$',
              total: '0',
              current: '1',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode198.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode198,
      { options_3938694 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
    const forms7 = getFormByCompId('Form_7756987_259648_631751_7847953', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms7) ? forms7 : [forms7]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetVisible7: any = [
      {
        type: 'setVisible',
        dataId: 167889504679771900,
        options: {
          compId: 'View_30_1122_56129022_411221_7870947_044507',
          compLib: 'custom',
          pageJsonId: 49,
          compName: 'View',
          id: '056008',
          visible: '',
        },
        line_number: 5,
      },
    ];
    eventDatasetVisible7.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(eventDatasetVisible7, { options_3938694 }, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const eventDatasetDisable15: any = [
      {
        type: 'setDisable',
        dataId: 167889506264028160,
        options: {
          compId: 'Form_7756987_259648_631751_7847953',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Form',
          id: '849349',
          disabled: 'true',
        },
        line_number: 6,
      },
    ];
    eventDatasetDisable15.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable15, { options_3938694 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const forms8 = getFormByCompId('Form_5336927_4844899', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms8) ? forms8 : [forms8]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetVisible8: any = [
      {
        type: 'setVisible',
        dataId: 167889509339826140,
        options: {
          compId: 'Button_508625_7684763_98176_283668_501388',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Button',
          id: '9422315',
          visible: '',
        },
        line_number: 8,
      },
    ];
    eventDatasetVisible8.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(eventDatasetVisible8, { options_3938694 }, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const forms9 = getFormByCompId('Form_5336927_4844899_195662', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms9) ? forms9 : [forms9]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetVisible9: any = [
      {
        type: 'setVisible',
        dataId: 167895836910418560,
        options: {
          compId: 'Button_508625_7684763_98176_283668_501388_7531295',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Button',
          id: '995011',
          visible: '',
        },
        line_number: 10,
      },
    ];
    eventDatasetVisible9.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(eventDatasetVisible9, { options_3938694 }, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
  };
  const reloadRoleUserPage = (options_477598: any) => {
    const eventDataifelse55: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '375589',
            options: {
              context: '$data.roleParam.roleId$',
              operate: 'notEmpty',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167895807100047260,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'validateCurrentForm',
            dataId: 167895814767772450,
            options: {
              compId: 'Form_5336927_4844899_195662',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '700488',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setLoading',
                dataId: 167895816129667400,
                options: {
                  compId: 'Table_554268_7374246_75782',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Table',
                  id: '844918',
                  loading: true,
                },
                line_number: 3,
              },
              {
                type: 'apiRequest',
                dataId: 167895816665816500,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '250228',
                  pageJsonId: 49,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryUserHaveRolePage',
                  _apiCode: 'qryUserHaveRolePage',
                  _source: 'rhin',
                  _serviceId: '953577298717323264',
                  _serviceTitle:
                    '包含该角色的用户列表--tzp: qryUserHaveRolePage',
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
                      dataKey: '250228_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '250228_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '250228_query',
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
                          dataKey: '250228_body.roleId',
                          value: {
                            type: ['datasource', 'roleParam', 'data'],
                            code: 'roleId',
                          },
                        },
                        {
                          code: 'usrLogin',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.usrLogin',
                          compType: 'Input',
                          name: 'usrLogin',
                          parents: ['body'],
                          id: 'body.usrLogin',
                          dataKey: '250228_body.usrLogin',
                          value: {
                            type: ['context', '$Form_5336927_4844899_195662$'],
                            code: 'usrLogin',
                          },
                        },
                        {
                          code: 'usrLastName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.usrLastName',
                          compType: 'Input',
                          name: 'usrLastName',
                          parents: ['body'],
                          id: 'body.usrLastName',
                          dataKey: '250228_body.usrLastName',
                          value: {
                            type: ['context', '$Form_5336927_4844899_195662$'],
                            code: 'usrLastName',
                          },
                        },
                        {
                          code: 'pageNum',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.pageNum',
                          compType: 'Input',
                          name: 'pageNum',
                          parents: ['body'],
                          id: 'body.pageNum',
                          dataKey: '250228_body.pageNum',
                          value: {
                            type: ['context', '$options_477598$'],
                            code: 'pageNum',
                          },
                        },
                        {
                          code: 'pageSize',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.pageSize',
                          compType: 'Input',
                          name: 'pageSize',
                          parents: ['body'],
                          id: 'body.pageSize',
                          dataKey: '250228_body.pageSize',
                          value: { type: ['customize'], code: '5' },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '250228_body',
                    },
                  ],
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'reloadTableData',
                    dataId: 167895823770968640,
                    options: {
                      compId: 'Table_554268_7374246_75782',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '021792',
                      data: '$reply_250228?.resultData.records$',
                      total: '$reply_250228?.resultData.total$',
                      current: '$reply_250228?.resultData.current$',
                    },
                    line_number: 5,
                    callback1: [],
                  },
                  {
                    type: 'setLoading',
                    dataId: 167895822264806560,
                    options: {
                      compId: 'Table_554268_7374246_75782',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '345779',
                      loading: false,
                    },
                    line_number: 6,
                  },
                ],
                callback2: [
                  {
                    type: 'setLoading',
                    dataId: 167895822487247170,
                    options: {
                      compId: 'Table_554268_7374246_75782',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '469427',
                      loading: false,
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse55.params =
      [
        {
          title: '事件入参',
          name: 'options_477598',
          value: '$options_477598$',
        },
      ] || [];
    CMDGenerator(eventDataifelse55, { options_477598 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    reloadRolePage,
    showRoleDetail,
    saveRoleDetail,
    reloadRolePrivilegePage,
    emptyBelow,
    reloadRoleUserPage,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_49__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: '#ffffff' }}
        $$componentItem={{
          id: 'View_49_1_67055',
          uid: 'View_49_1_67055',
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
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_49_1_67055')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_849982',
            uid: 'VerticalView_849982',
            type: 'VerticalView',
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
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_849982')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_98383',
              uid: 'View_98383',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_98383')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              extendNum={3}
              title={'角色列表'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
              extend={[
                {
                  id: '003208',
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
                id: 'Card_148054',
                uid: 'Card_148054',
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
                const eventDataclearTableSelected12: any = [
                  {
                    type: 'clearTableSelected',
                    dataId: 168195825448987620,
                    options: {
                      compId: 'Table_49_112_5440223',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '620205',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearTableSelected12.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDataclearTableSelected12,
                  { e },
                  'clearTableSelected',
                  {
                    id: 'clearTableSelected',
                    name: 'clearTableSelected',
                    type: 'clearTableSelected',
                    platform: 'pc',
                  },
                );
                const eventDatasetDataSource245: any = [
                  {
                    type: 'setDataSource',
                    dataId: 168195827022550700,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '060478',
                      pageJsonId: 49,
                      dataSourceId: 167868890039758200,
                      dataSourceName: 'roleParam',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '994448',
                          code: 'mode',
                          name: '处理模式',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: { type: ['customize'], code: 'A' },
                        },
                        {
                          attrId: '4193153',
                          code: 'roleId',
                          name: '角色主键',
                          type: 'string',
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
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource245.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatasetDataSource245,
                  { e },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
                const eventDatacallSelfFunc700: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168195828585252160,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2445381',
                      pageJsonId: 49,
                      customFuncName: 'emptyBelow',
                    },
                    line_number: 3,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc700.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacallSelfFunc700, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatasetDisable167: any = [
                  {
                    type: 'setDisable',
                    dataId: 168195830226881100,
                    options: {
                      compId: 'Form_7756987_259648_631751_7847953',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Form',
                      id: '213223',
                      disabled: '',
                    },
                    line_number: 4,
                  },
                ];
                eventDatasetDisable167.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable167, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetVisible27: any = [
                  {
                    type: 'setVisible',
                    dataId: 168195831438797860,
                    options: {
                      compId: [
                        'View_30_1122_56129022_411221_7870947_044507',
                        'Button_30_121_490898_246542_8903187_156753',
                        'Button_262564',
                      ],
                      compLib: 'custom',
                      pageJsonId: 49,
                      compName: 'View',
                      id: '3168928',
                      visible: 'true',
                      compid: [
                        'View_30_1122_56129022_411221_7870947_044507',
                        'Button_30_121_490898_246542_8903187_156753',
                        'Button_262564',
                      ],
                    },
                    line_number: 5,
                  },
                ];
                eventDatasetVisible27.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetVisible27, { e }, 'setVisible', {
                  id: 'setVisible',
                  name: 'setVisible',
                  type: 'setVisible',
                  platform: 'pc',
                });
                const eventDatasetActiveTabPane11: any = [
                  {
                    type: 'setActiveTabPane',
                    dataId: 168195832840353950,
                    options: {
                      compId: 'Tabs_289434_553153',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Tabs',
                      id: '198362',
                      paramsObj: { activiKey: '1' },
                      paramsObjKeyValueMap: { activiKey: '1' },
                    },
                    line_number: 6,
                  },
                ];
                eventDatasetActiveTabPane11.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatasetActiveTabPane11,
                  { e },
                  'setActiveTabPane',
                  {
                    id: 'setActiveTabPane',
                    name: 'setActiveTabPane',
                    type: 'setActiveTabPane',
                    platform: 'pc',
                  },
                );
                const eventDatasetVisible28: any = [
                  {
                    type: 'setVisible',
                    dataId: 168195833982176640,
                    options: {
                      compId: [
                        'Button_508625_7684763_98176_283668_501388',
                        'Button_508625_7684763_98176_283668_501388_7531295',
                      ],
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Button',
                      id: '923605',
                      visible: '',
                      compid: [
                        'Button_508625_7684763_98176_283668_501388',
                        'Button_508625_7684763_98176_283668_501388_7531295',
                      ],
                    },
                    line_number: 7,
                  },
                ];
                eventDatasetVisible28.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetVisible28, { e }, 'setVisible', {
                  id: 'setVisible',
                  name: 'setVisible',
                  type: 'setVisible',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_148054')}
              {...injectData}
            >
              <Form
                name={'角色查询表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_7756987'}
                $$componentItem={{
                  id: 'Form_7756987_259648_20402',
                  uid: 'Form_7756987_259648_20402',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Form_7756987_259648_20402')
                }
                {...injectData}
              >
                <Input
                  name={'角色编码'}
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
                    id: 'Input_650422_201996_367102',
                    uid: 'Input_650422_201996_367102',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc705: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166671258219248900,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '8695752',
                          pageJsonId: '8383459',
                          customFuncName: 'reloadRolePage',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc705.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc705,
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
                    refs.setComponentRef(r, 'Input_650422_201996_367102')
                  }
                  {...injectData}
                />
                <Input
                  name={'角色名称'}
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
                    id: 'Input_984985_229345_946567',
                    uid: 'Input_984985_229345_946567',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc706: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166671259378888060,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '80086',
                          pageJsonId: '8383459',
                          customFuncName: 'reloadRolePage',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc706.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc706,
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
                    refs.setComponentRef(r, 'Input_984985_229345_946567')
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_756929_0062074_149525',
                    uid: 'View_756929_0062074_149525',
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
                    refs.setComponentRef(r, 'View_756929_0062074_149525')
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
                      id: 'Button_508625_7684763_2284761',
                      uid: 'Button_508625_7684763_2284761',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                    onClick={(e: any) => {
                      const eventDatasetDataSource247: any = [
                        {
                          type: 'setDataSource',
                          dataId: 167889519753076300,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '190029',
                            pageJsonId: 49,
                            dataSourceId: 167868890039758200,
                            dataSourceName: 'privilegeParam',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '994448',
                                code: 'mode',
                                name: '处理模式',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: { type: ['customize'], code: 'R' },
                              },
                              {
                                attrId: '4193153',
                                code: 'roleId',
                                name: '角色主键',
                                type: 'string',
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
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatasetDataSource247.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatasetDataSource247,
                        { e },
                        'setDataSource',
                        {
                          id: 'setDataSource',
                          name: 'setDataSource',
                          type: 'setDataSource',
                          platform: 'pc',
                        },
                      );
                      const eventDatacallSelfFunc707: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 167867804901210460,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '3309166',
                            pageJsonId: 49,
                            customFuncName: 'reloadRolePage',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc707.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc707,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                      const eventDatacallSelfFunc708: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 167889521133097600,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '142409',
                            pageJsonId: 49,
                            customFuncName: 'emptyBelow',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc708.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc708,
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
                      refs.setComponentRef(r, 'Button_508625_7684763_2284761')
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
                      id: 'Button_228714_24039_290211',
                      uid: 'Button_228714_24039_290211',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                    onClick={(e: any) => {
                      const forms167 = getFormByCompId(
                        'Form_7756987_259648_20402',
                        refs,
                      );
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms167) ? forms167 : [forms167]).forEach(
                        (form) => form?.resetFields(),
                      );
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Button_228714_24039_290211')
                    }
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'表格'}
                columns={[
                  {
                    title: '角色ID',
                    key: 'roleId',
                    dataIndex: 'roleId',
                    className: '',
                    id: '1095902',
                    width: 120,
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
                    title: '角色编码',
                    key: 'roleCode',
                    dataIndex: 'roleCode',
                    className: 'divider',
                    id: '957343',
                    width: null,
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
                    id: '710903',
                    width: null,
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
                    id: '801393',
                    width: null,
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
                    id: '6366498',
                    width: null,
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
                extendNum={3}
                customNum={3}
                rowKey={'roleId'}
                rowActions={[
                  {
                    title: '编辑',
                    iconPos: 'left',
                    type: 'edit',
                    id: '965169',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    type: 'delete',
                    id: '5521378',
                    checked: true,
                  },
                ]}
                pageSize={data?.rolePage?.resultData?.size}
                current={data?.rolePage?.resultData?.current}
                total={data?.rolePage?.resultData?.total}
                dataSource={data?.rolePage?.resultData?.records}
                fieldName={'total'}
                dataSourceFromDataSourceConfig={
                  'data.rolePage.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_49_112_5440223',
                  uid: 'Table_49_112_5440223',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0px 0px 0px' }}
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatavalidateCurrentForm85: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 167877389495061280,
                      options: {
                        compId: 'Form_7756987_259648_20402',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Form',
                        id: '85444',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167889529941950430,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '103615',
                            pageJsonId: 49,
                            dataSourceId: 167868890039758200,
                            dataSourceName: 'roleParam',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '994448',
                                code: 'mode',
                                name: '处理模式',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: { type: ['customize'], code: 'R' },
                              },
                              {
                                attrId: '4193153',
                                code: 'roleId',
                                name: '角色主键',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'reloadDataSource',
                          dataId: 167877390530139740,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '377453',
                            pageJsonId: 49,
                            dataSourceId: 167887279793870180,
                            dataSourceName: 'rolePage',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '652681',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'header',
                              },
                              {
                                attrId: '956049',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'path',
                              },
                              {
                                attrId: '6092407',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                key: 'query',
                              },
                              {
                                attrId: '599828',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '0891596',
                                    code: 'roleCode',
                                    name: 'roleCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.roleCode',
                                    value: {
                                      type: [
                                        'context',
                                        '$Form_7756987_259648_20402$',
                                      ],
                                      code: 'roleCode',
                                    },
                                  },
                                  {
                                    attrId: '699189',
                                    code: 'roleName',
                                    name: 'roleName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    key: 'body.roleName',
                                    value: {
                                      type: [
                                        'context',
                                        '$Form_7756987_259648_20402$',
                                      ],
                                      code: 'roleName',
                                    },
                                  },
                                  {
                                    attrId: '548821',
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
                                    attrId: '3543976',
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
                                attrId: '610642',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '037371',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '001429',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '27191536',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '817912',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    parentKey: 'resultData',
                                  },
                                  {
                                    attrId: '9677103',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    parentKey: 'resultData',
                                  },
                                  {
                                    attrId: '8005701',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                    parentKey: 'resultData',
                                  },
                                  {
                                    attrId: '571656',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    parentKey: 'resultData',
                                  },
                                  {
                                    attrId: '511172',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                    parentKey: 'resultData',
                                  },
                                  {
                                    attrId: '232319',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentKey: 'resultData',
                                  },
                                  {
                                    attrId: '967222',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '3294423',
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
                                    attrId: '870305',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    parentKey: 'resultData',
                                  },
                                  {
                                    attrId: '987012',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                    parentKey: 'resultData',
                                  },
                                  {
                                    attrId: '7627642',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '331838',
                                        code: 'createStaffName',
                                        name: 'createStaffName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '938959',
                                        code: 'updateDate',
                                        name: 'updateDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '293211',
                                        code: 'roleDesc',
                                        name: 'roleDesc',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '575357',
                                        code: 'roleId',
                                        name: 'roleId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '895896',
                                        code: 'roleCode',
                                        name: 'roleCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '633827',
                                        code: 'roleName',
                                        name: 'roleName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '154115',
                                        code: 'statusCd',
                                        name: 'statusCd',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '343041',
                                        code: 'remark',
                                        name: 'remark',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '2621304',
                                        code: 'createDate',
                                        name: 'createDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '08404',
                                        code: 'createStaff',
                                        name: 'createStaff',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                        parentCode: 'records',
                                        parentKey: 'records',
                                      },
                                      {
                                        attrId: '531852',
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
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 167878081320113660,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '673643',
                            pageJsonId: 49,
                            customFuncName: 'emptyBelow',
                          },
                          line_number: 4,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatavalidateCurrentForm85.params =
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
                    eventDatavalidateCurrentForm85,
                    { page, pageSize },
                    'validateCurrentForm',
                    {
                      id: 'validateCurrentForm',
                      name: 'validateCurrentForm',
                      type: 'validateCurrentForm',
                      platform: 'pc',
                    },
                  );
                }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDataclearTableSelected13: any = [
                    {
                      type: 'clearTableSelected',
                      dataId: 167878285606617470,
                      options: {
                        compId: 'Table_49_112_5440223',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Table',
                        id: '841792',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearTableSelected13.params =
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
                    eventDataclearTableSelected13,
                    { rowId, row, index },
                    'clearTableSelected',
                    {
                      id: 'clearTableSelected',
                      name: 'clearTableSelected',
                      type: 'clearTableSelected',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource248: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167893409231721900,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '263368',
                        pageJsonId: 49,
                        dataSourceId: 167893408182166500,
                        dataSourceName: 'fromEdit',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '984479',
                            code: 'flag',
                            name: '属性',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'Y' },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource248.params =
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
                    eventDatasetDataSource248,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetSelectedRowKeys1: any = [
                    {
                      type: 'setSelectedRowKeys',
                      dataId: 167878286624241760,
                      options: {
                        compId: 'Table_49_112_5440223',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Table',
                        id: '3571796',
                        value: '$row$',
                      },
                      line_number: 3,
                      callback1: [],
                    },
                  ];
                  eventDatasetSelectedRowKeys1.params =
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
                    eventDatasetSelectedRowKeys1,
                    { rowId, row, index },
                    'setSelectedRowKeys',
                    {
                      id: 'setSelectedRowKeys',
                      name: 'setSelectedRowKeys',
                      type: 'setSelectedRowKeys',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource249: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167868898822332740,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '478755',
                        pageJsonId: 49,
                        dataSourceId: 167868890039758200,
                        dataSourceName: 'roleParam',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '994448',
                            code: 'mode',
                            name: '处理模式',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'U' },
                          },
                          {
                            attrId: '4193153',
                            code: 'roleId',
                            name: '角色主键',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['context', '$rowId$'], code: '' },
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
                  ];
                  eventDatasetDataSource249.params =
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
                    eventDatasetDataSource249,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatacallSelfFunc709: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167868916168773470,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '227185',
                        pageJsonId: 49,
                        customFuncName: 'showRoleDetail',
                        customFuncParams: '$row$',
                      },
                      line_number: 5,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc709.params =
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
                    eventDatacallSelfFunc709,
                    { rowId, row, index },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatacallSelfFunc710: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167870164494809200,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '858941',
                        pageJsonId: 49,
                        customFuncName: 'reloadRolePrivilegePage',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc710.params =
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
                    eventDatacallSelfFunc710,
                    { rowId, row, index },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatacallSelfFunc711: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167896028316080640,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '353885',
                        pageJsonId: 49,
                        customFuncName: 'reloadRoleUserPage',
                        customFuncParams: 'object',
                        paramsObj: { pageNum: '1' },
                        paramsObjKeyValueMap: { pageNum: '1' },
                      },
                      line_number: 7,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc711.params =
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
                    eventDatacallSelfFunc711,
                    { rowId, row, index },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetVisible29: any = [
                    {
                      type: 'setVisible',
                      dataId: 167893532861795140,
                      options: {
                        compId: [
                          'Button_508625_7684763_98176_283668_501388',
                          'Button_508625_7684763_98176_283668_501388_7531295',
                        ],
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Button',
                        id: '0425924',
                        visible: 'true',
                        compid: [
                          'Button_508625_7684763_98176_283668_501388',
                          'Button_508625_7684763_98176_283668_501388_7531295',
                        ],
                      },
                      line_number: 8,
                    },
                  ];
                  eventDatasetVisible29.params =
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
                    eventDatasetVisible29,
                    { rowId, row, index },
                    'setVisible',
                    {
                      id: 'setVisible',
                      name: 'setVisible',
                      type: 'setVisible',
                      platform: 'pc',
                    },
                  );
                }}
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDatagetTableSelectedKey79: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 167869064810584860,
                      options: {
                        compId: 'Table_49_112_5440223',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Table',
                        id: '5465822',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showModal',
                          dataId: 167869417141981920,
                          options: {
                            compId: 'showModal',
                            compName: 'page',
                            id: '928873',
                            pageJsonId: 49,
                            type: 'confirm',
                            title: '删除确认',
                            content:
                              '删除角色会同步删除角色和权限、角色和用户的关联关系，是否确定删除？',
                            okText: '确认',
                            cancelText: '取消',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 167869417141973600,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '6134432',
                                pageJsonId: 49,
                                sync: false,
                                actionTitle: '',
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'delDcOaRoleById',
                                _apiCode: 'delDcOaRoleById',
                                _source: 'rhin',
                                _serviceId: '953210013074096128',
                                _serviceTitle:
                                  '删除角色信息--tzp: delDcOaRoleById',
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
                                    dataKey: '6134432_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'dcOaRoleId',
                                        name: '角色id',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'T',
                                        defaultValue: '',
                                        _id: 'path.dcOaRoleId',
                                        compType: 'Input',
                                        parents: ['path'],
                                        id: 'path.dcOaRoleId',
                                        dataKey: '6134432_path.dcOaRoleId',
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
                                    dataKey: '6134432_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '6134432_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '6134432_body',
                                  },
                                ],
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '527096',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$reply_6134432.resultCode$',
                                        operate: '==',
                                        manualValue: '0',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 167869438034742980,
                                  elseIfs: [],
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'showMessage',
                                      dataId: 167869440608205020,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '399584',
                                        pageJsonId: 49,
                                        type: 'success',
                                        value: '删除成功',
                                      },
                                      line_number: 5,
                                    },
                                    {
                                      type: 'setDataSource',
                                      dataId: 167889527207526140,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '6361',
                                        pageJsonId: 49,
                                        dataSourceId: 167868890039758200,
                                        dataSourceName: 'roleParam',
                                        dataSourceRelType: 'custom',
                                        dataSourceReloadFilter: [],
                                        dataSourceSetValue: [
                                          {
                                            attrId: '994448',
                                            code: 'mode',
                                            name: '处理模式',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: 'R',
                                            },
                                          },
                                          {
                                            attrId: '4193153',
                                            code: 'roleId',
                                            name: '角色主键',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['context', '$rowId$'],
                                              code: '',
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
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 167869442010607550,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '47353',
                                        pageJsonId: 49,
                                        customFuncName: 'reloadRolePage',
                                      },
                                      line_number: 7,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 167878497905574700,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '5374277',
                                        pageJsonId: 49,
                                        customFuncName: 'emptyBelow',
                                      },
                                      line_number: 8,
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
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelectedKey79.params =
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
                    eventDatagetTableSelectedKey79,
                    { rowId, row, index },
                    'getTableSelectedKey',
                    {
                      id: 'getTableSelectedKey',
                      name: 'getTableSelectedKey',
                      type: 'getTableSelectedKey',
                      platform: 'pc',
                    },
                  );
                }}
                onSelectChange={(selectedRowKeys: any, selectedRows: any) => {
                  const eventDataifelse532: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '105191',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$data.fromEdit.flag$',
                            operate: '==',
                            manualValue: 'Y',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167893411622945540,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167893414702953470,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167893415349206180,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 167893415349287230,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 167893415349230940,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'selectAllDataSource',
                                'dataSourceSetValue',
                                'onlySetPatch',
                              ],
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '730305',
                                pageJsonId: 49,
                                dataSourceId: 167868890039758200,
                                dataSourceName: 'roleParam',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '994448',
                                    code: 'mode',
                                    name: '处理模式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: { type: ['customize'], code: 'V' },
                                  },
                                  {
                                    attrId: '4193153',
                                    code: 'roleId',
                                    name: '角色主键',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$selectedRowKeys[0]$'],
                                      code: '',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              actionObjId: 'setDataSource',
                              actionObjName: 'page',
                              value: 'setDataSource',
                              elseIfs: [],
                              line_number: 3,
                            },
                            {
                              dataName: 'action',
                              dataId: 167893416017308830,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 167893416017391740,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 167893416017392900,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'customFuncName',
                                'customFuncParams',
                              ],
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '646063',
                                pageJsonId: 49,
                                customFuncName: 'showRoleDetail',
                                customFuncParams: '$selectedRows[0]$',
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              elseIfs: [],
                              line_number: 4,
                            },
                            {
                              dataName: 'action',
                              dataId: 167893416531621700,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 167893416531632320,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 167893416531640600,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'customFuncName',
                                'customFuncParams',
                              ],
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '1455584',
                                pageJsonId: 49,
                                customFuncName: 'reloadRolePrivilegePage',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              elseIfs: [],
                              line_number: 5,
                            },
                            {
                              dataName: 'action',
                              dataId: 167896030838040420,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 167896030838004580,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 167896030838054270,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'customFuncName',
                                'customFuncParams',
                              ],
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '1679976',
                                pageJsonId: 49,
                                customFuncName: 'reloadRoleUserPage',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              elseIfs: [],
                              line_number: 6,
                            },
                            {
                              dataName: 'action',
                              dataId: 167893534069297800,
                              children: [],
                              todoOptions: ['visible', 'selectComp'],
                              options: {
                                compId: [
                                  'Button_508625_7684763_98176_283668_501388',
                                  'Button_508625_7684763_98176_283668_501388_7531295',
                                ],
                                compLib: 'comm',
                                pageJsonId: 49,
                                compName: 'Button',
                                id: '4618185',
                                visible: 'true',
                                compid: [
                                  'Button_508625_7684763_98176_283668_501388',
                                  'Button_508625_7684763_98176_283668_501388_7531295',
                                ],
                              },
                              actionObjId:
                                'Button_508625_7684763_98176_283668_501388',
                              actionObjName: 'Button',
                              value: 'setVisible',
                              compLib: 'comm',
                              line_number: 7,
                            },
                          ],
                          condition: [],
                          elseIfs: [],
                          callback: [
                            {
                              type: 'setDataSource',
                              dataId: 167893415349206180,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '730305',
                                pageJsonId: 49,
                                dataSourceId: 167868890039758200,
                                dataSourceName: 'roleParam',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '994448',
                                    code: 'mode',
                                    name: '处理模式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: { type: ['customize'], code: 'V' },
                                  },
                                  {
                                    attrId: '4193153',
                                    code: 'roleId',
                                    name: '角色主键',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$selectedRowKeys[0]$'],
                                      code: '',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 167893416017308830,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '646063',
                                pageJsonId: 49,
                                customFuncName: 'showRoleDetail',
                                customFuncParams: '$selectedRows[0]$',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 167893416531621700,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '1455584',
                                pageJsonId: 49,
                                customFuncName: 'reloadRolePrivilegePage',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 167896030838040420,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '1679976',
                                pageJsonId: 49,
                                customFuncName: 'reloadRoleUserPage',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              line_number: 6,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setVisible',
                              dataId: 167893534069297800,
                              options: {
                                compId: [
                                  'Button_508625_7684763_98176_283668_501388',
                                  'Button_508625_7684763_98176_283668_501388_7531295',
                                ],
                                compLib: 'comm',
                                pageJsonId: 49,
                                compName: 'Button',
                                id: '4618185',
                                visible: 'true',
                                compid: [
                                  'Button_508625_7684763_98176_283668_501388',
                                  'Button_508625_7684763_98176_283668_501388_7531295',
                                ],
                              },
                              line_number: 7,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167893418612636540,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '112019',
                            pageJsonId: 49,
                            dataSourceId: 167893408182166500,
                            dataSourceName: 'fromEdit',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '984479',
                                code: 'flag',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: { type: ['customize'], code: 'N' },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse532.params =
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
                    eventDataifelse532,
                    { selectedRowKeys, selectedRows },
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
                  refs.setComponentRef(r, 'Table_49_112_5440223')
                }
                {...injectData}
              />
            </Card>
          </View>
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_8862728',
              uid: 'View_8862728',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_8862728')}
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
                id: 'Tabs_289434_553153',
                uid: 'Tabs_289434_553153',
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
              ref={(r: any) => refs.setComponentRef(r, 'Tabs_289434_553153')}
              {...injectData}
            >
              <TabPane
                name={'表单标签子面板'}
                tab={'角色信息'}
                key={'1'}
                $$componentItem={{
                  id: 'TabPane_61107_459245',
                  uid: 'TabPane_61107_459245',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TabPane_61107_459245')
                }
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_49_21119_565356',
                    uid: 'View_49_21119_565356',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: '100%' }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_49_21119_565356')
                  }
                  {...injectData}
                >
                  <Card
                    name={'表单面板'}
                    title={'采集状态详情'}
                    bordered={true}
                    size={'default'}
                    hasHeader={false}
                    hasIcon={true}
                    cardIconType={'middle'}
                    titleColor={'#1c242e'}
                    headerColor={'#ffffff'}
                    extendNum={3}
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
                      id: 'Card_49_21114_192888',
                      uid: 'Card_49_21114_192888',
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Card_49_21114_192888')
                    }
                    {...injectData}
                  >
                    <Form
                      name={'详情表单'}
                      colSpan={12}
                      labelCol={8}
                      wrapperCol={16}
                      colon={true}
                      layout={'horizontal'}
                      labelAlign={'right'}
                      header={'标题'}
                      colSpace={0}
                      rowSpace={16}
                      formCode={'Form_7756987'}
                      $$componentItem={{
                        id: 'Form_7756987_259648_631751_7847953',
                        uid: 'Form_7756987_259648_631751_7847953',
                        type: 'Form',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ padding: '0px 0px 0px 0px' }}
                      ref={(r: any) =>
                        refs.setComponentRef(
                          r,
                          'Form_7756987_259648_631751_7847953',
                        )
                      }
                      {...injectData}
                    >
                      <Input
                        name={'角色编码'}
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
                        required={true}
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
                          id: 'Input_650422_201996_788381_6178676_7567953',
                          uid: 'Input_650422_201996_788381_6178676_7567953',
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
                            'Input_650422_201996_788381_6178676_7567953',
                          )
                        }
                        {...injectData}
                      />
                      <Input
                        name={'角色名称'}
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
                        required={true}
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
                          id: 'Input_984985_229345_5159784_98625',
                          uid: 'Input_984985_229345_5159784_98625',
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
                            'Input_984985_229345_5159784_98625',
                          )
                        }
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
                        formItemIndex={2}
                        fieldName={'createStaffName'}
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
                          id: 'Input_406219_191123',
                          uid: 'Input_406219_191123',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_406219_191123')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'创建时间'}
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
                        formItemIndex={3}
                        fieldName={'createDate'}
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
                          id: 'Input_104648_778286',
                          uid: 'Input_104648_778286',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_104648_778286')
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
                        formItemIndex={4}
                        fieldName={'updateStaff'}
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
                          id: 'Input_001443',
                          uid: 'Input_001443',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_001443')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'修改时间'}
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
                        formItemIndex={5}
                        fieldName={'updateDate'}
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
                          id: 'Input_84498515',
                          uid: 'Input_84498515',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_84498515')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'角色ID'}
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
                        formItemIndex={6}
                        fieldName={'roleId'}
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
                          id: 'Input_650422_201996_788381_597941',
                          uid: 'Input_650422_201996_788381_597941',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={false}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc713: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 166671258219248900,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '8695752',
                                pageJsonId: '8383459',
                                customFuncName: 'reloadFlowTableList',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc713.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc713,
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
                          refs.setComponentRef(
                            r,
                            'Input_650422_201996_788381_597941',
                          )
                        }
                        {...injectData}
                      />
                      <TextArea
                        name={'角色描述'}
                        selfSpan={24}
                        labelCol={'4'}
                        wrapperCol={20}
                        titleTip={'notext'}
                        tipLocation={'after'}
                        tipPlacement={'top'}
                        required={true}
                        placeholder={'请输入'}
                        formItemIndex={7}
                        fieldName={'roleDesc'}
                        $$componentItem={{
                          id: 'TextArea_7406107_193398',
                          uid: 'TextArea_7406107_193398',
                          type: 'TextArea',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'TextArea_7406107_193398')
                        }
                        {...injectData}
                      />
                    </Form>
                  </Card>
                  <View
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_30_1122_56129022_411221_7870947_044507',
                      uid: 'View_30_1122_56129022_411221_7870947_044507',
                      type: 'View',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '12px 0px 12px 0px',
                      width: '100%',
                      borderRadius: '0px 0px 2px 2px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 1px 0px 0px #e7e8ea inset',
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(
                        r,
                        'View_30_1122_56129022_411221_7870947_044507',
                      )
                    }
                    {...injectData}
                  >
                    <Button
                      name={'确定'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      classification={'default'}
                      type={'primary'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      hasIcon={false}
                      $$componentItem={{
                        id: 'Button_30_121_490898_246542_8903187_156753',
                        uid: 'Button_30_121_490898_246542_8903187_156753',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ margin: '0px 0px 0px 24px' }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc714: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167869307541150300,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '605284',
                              pageJsonId: 49,
                              customFuncName: 'saveRoleDetail',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc714.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc714,
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
                        refs.setComponentRef(
                          r,
                          'Button_30_121_490898_246542_8903187_156753',
                        )
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
                        id: 'Button_262564',
                        uid: 'Button_262564',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 0px 0px 10px',
                      }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc715: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167896614192712670,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '762867',
                              pageJsonId: 49,
                              customFuncName: 'emptyBelow',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc715.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc715,
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
                      ref={(r: any) => refs.setComponentRef(r, 'Button_262564')}
                      {...injectData}
                    />
                  </View>
                </View>
              </TabPane>
              <TabPane
                name={'关联权限标签子面板'}
                tab={'关联权限'}
                key={'2'}
                $$componentItem={{
                  id: 'TabPane_27172808_1786752',
                  uid: 'TabPane_27172808_1786752',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TabPane_27172808_1786752')
                }
                {...injectData}
              >
                <VerticalView
                  name={'上下布局'}
                  $$componentItem={{
                    id: 'VerticalView_53096_900784',
                    uid: 'VerticalView_53096_900784',
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
                    refs.setComponentRef(r, 'VerticalView_53096_900784')
                  }
                  {...injectData}
                >
                  <View
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_3326182_3268316',
                      uid: 'View_3326182_3268316',
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
                      height: '0%',
                      width: '100%',
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'View_3326182_3268316')
                    }
                    {...injectData}
                  >
                    <Form
                      name={'权限查询表单'}
                      colSpan={8}
                      labelCol={8}
                      wrapperCol={16}
                      colon={true}
                      layout={'horizontal'}
                      labelAlign={'right'}
                      header={'标题'}
                      colSpace={0}
                      rowSpace={16}
                      formCode={'Form_5336927'}
                      $$componentItem={{
                        id: 'Form_5336927_4844899',
                        uid: 'Form_5336927_4844899',
                        type: 'Form',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ padding: '0px 0px 0px 0px' }}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'Form_5336927_4844899')
                      }
                      {...injectData}
                    >
                      <Input
                        name={'权限编码'}
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
                        fieldName={'privilegeCode'}
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
                          id: 'Input_510699_6740813',
                          uid: 'Input_510699_6740813',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc719: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167896869084658880,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '767743',
                                pageJsonId: 49,
                                customFuncName: 'reloadRolePrivilegePage',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc719.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc719,
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
                          refs.setComponentRef(r, 'Input_510699_6740813')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'权限名称'}
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
                        formItemIndex={1}
                        fieldName={'privilegeName'}
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
                          id: 'Input_0129142_410003',
                          uid: 'Input_0129142_410003',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc720: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167896870454224450,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '55112',
                                pageJsonId: 49,
                                customFuncName: 'reloadRolePrivilegePage',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc720.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc720,
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
                          refs.setComponentRef(r, 'Input_0129142_410003')
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
                          id: 'View_756929_0062074_7390883_702261',
                          uid: 'View_756929_0062074_7390883_702261',
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
                          refs.setComponentRef(
                            r,
                            'View_756929_0062074_7390883_702261',
                          )
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
                            id: 'Button_508625_7684763_98176_917748',
                            uid: 'Button_508625_7684763_98176_917748',
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
                            const eventDatacallSelfFunc721: any = [
                              {
                                type: 'callSelfFunc',
                                dataId: 167867804901210460,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '3309166',
                                  pageJsonId: 49,
                                  customFuncName: 'reloadRolePrivilegePage',
                                },
                                line_number: 1,
                                callback1: [],
                                callback2: [],
                              },
                            ];
                            eventDatacallSelfFunc721.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatacallSelfFunc721,
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
                            refs.setComponentRef(
                              r,
                              'Button_508625_7684763_98176_917748',
                            )
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
                            id: 'Button_228714_24039_080445_176283',
                            uid: 'Button_228714_24039_080445_176283',
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
                            const forms169 = getFormByCompId(
                              'Form_5336927_4844899',
                              refs,
                            );
                            // 支持循环容器中的表单重置
                            (Array.isArray(forms169)
                              ? forms169
                              : [forms169]
                            ).forEach((form) => form?.resetFields());
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(
                              r,
                              'Button_228714_24039_080445_176283',
                            )
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
                            id: 'Button_508625_7684763_98176_283668_501388',
                            uid: 'Button_508625_7684763_98176_283668_501388',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={false}
                          readOnly={false}
                          style={{
                            width: 'fit-content',
                            margin: '0px 0px 0px 12px',
                          }}
                          onClick={(e: any) => {
                            const eventDatashowCustomModal257: any = [
                              {
                                type: 'showCustomModal',
                                dataId: 167870979488057300,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '678858',
                                  pageJsonId: 49,
                                  modalname: '/roleNotHavePrivilegePopup',
                                  pageId: '953183095901683712',
                                  paramsObj: {
                                    bizId: '$data.roleParam.roleId$',
                                  },
                                  paramsObjKeyValueMap: {
                                    bizId: '$data.roleParam.roleId$',
                                  },
                                },
                                line_number: 1,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167871003087258300,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '501129',
                                      pageJsonId: 49,
                                      customFuncName: 'reloadRolePrivilegePage',
                                    },
                                    line_number: 2,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ];
                            eventDatashowCustomModal257.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatashowCustomModal257,
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
                            refs.setComponentRef(
                              r,
                              'Button_508625_7684763_98176_283668_501388',
                            )
                          }
                          {...injectData}
                        />
                      </View>
                    </Form>
                  </View>
                  <View
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_184463_000997',
                      uid: 'View_184463_000997',
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'View_184463_000997')
                    }
                    {...injectData}
                  >
                    <Table
                      name={'权限表格'}
                      isFlexColumn={false}
                      extendNum={3}
                      adjustModel={'auto'}
                      pageSize={5}
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
                          title: '权限ID',
                          dataIndex: 'privilegeId',
                          key: 'column1',
                          className: '',
                          id: '1755783',
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
                          title: '权限编码',
                          dataIndex: 'privilegeCode',
                          key: 'column2',
                          className: 'divider',
                          id: '329886',
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
                          title: '权限名称',
                          dataIndex: 'privilegeName',
                          key: 'column3',
                          className: 'divider',
                          id: '923719',
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
                          dataIndex: 'createStaffName',
                          key: 'column4',
                          className: 'divider',
                          id: '225326',
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
                          dataIndex: 'createDate',
                          key: 'column5',
                          className: 'divider',
                          id: '7384615',
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
                      rowKey={'rolePrivilegeRelId'}
                      dataSource={''}
                      rowActions={[
                        {
                          title: '删除',
                          iconPos: 'left',
                          icon: { theme: 'outlined', type: 'delete' },
                          type: 'delete',
                          id: '254695',
                          checked: true,
                        },
                      ]}
                      extend={[]}
                      fieldName={'current$"'}
                      scroll={{ y: 240 }}
                      $$componentItem={{
                        id: 'Table_554268_7374246',
                        uid: 'Table_554268_7374246',
                        type: 'Table',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        margin: '20px 0px 0px 0px',
                        flex: '',
                        width: '100%',
                      }}
                      onRowDelete={(rowId: any, row: any, index: any) => {
                        const eventDatagetTableSelectedKey80: any = [
                          {
                            type: 'getTableSelectedKey',
                            dataId: 167870205467546660,
                            options: {
                              compId: 'Table_49_112_5440223',
                              compLib: 'comm',
                              pageJsonId: 49,
                              compName: 'Table',
                              id: '6794225',
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'showModal',
                                dataId: 167870205467689920,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '5357713',
                                  pageJsonId: 49,
                                  type: 'confirm',
                                  title: '删除确认',
                                  content: '您确定要删除该权限角色关联信息吗？',
                                  okText: '确认',
                                  cancelText: '取消',
                                },
                                line_number: 2,
                                callback1: [
                                  {
                                    type: 'apiRequest',
                                    dataId: 167870205467690140,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '5926084',
                                      pageJsonId: 49,
                                      sync: false,
                                      actionTitle: '',
                                      method: 'post',
                                      url: '/app/rhin/gateway/callRhinEngine',
                                      _capabilityCode:
                                        'delDcOaRolePrivilegeRelById',
                                      _apiCode: 'delDcOaRolePrivilegeRelById',
                                      _source: 'rhin',
                                      _serviceId: '952498283450941440',
                                      _serviceTitle:
                                        '删除角色权限关联关系--tzp: delDcOaRolePrivilegeRelById',
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
                                          dataKey: '5926084_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          children: [
                                            {
                                              code: 'dcOaRolePrivilegeRelId',
                                              name: '关联主键',
                                              attrType: 'field',
                                              type: 'long',
                                              mustFlag: 'T',
                                              defaultValue: '',
                                              _id: 'path.dcOaRolePrivilegeRelId',
                                              compType: 'Input',
                                              parents: ['path'],
                                              id: 'path.dcOaRolePrivilegeRelId',
                                              dataKey:
                                                '5926084_path.dcOaRolePrivilegeRelId',
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
                                          dataKey: '5926084_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '5926084_query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '5926084_body',
                                        },
                                      ],
                                    },
                                    line_number: 3,
                                    callback1: [
                                      {
                                        type: 'ifelse',
                                        condition: [
                                          {
                                            condId: '968688',
                                            options: {
                                              useManual: true,
                                              context:
                                                '$reply_5926084.resultCode$',
                                              operate: '==',
                                              manualValue: '0',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 167870213299686460,
                                        elseIfs: [],
                                        line_number: 4,
                                        callback1: [
                                          {
                                            type: 'showMessage',
                                            dataId: 167870217693115800,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '2891924',
                                              pageJsonId: 49,
                                              type: 'success',
                                              value: '删除成功',
                                            },
                                            line_number: 5,
                                          },
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 167870618015090800,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '725948',
                                              pageJsonId: 49,
                                              customFuncName:
                                                'reloadRolePrivilegePage',
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
                            ],
                            callback2: [],
                          },
                        ];
                        eventDatagetTableSelectedKey80.params =
                          [
                            { title: '行id', name: 'rowId', value: '$rowId$' },
                            {
                              title: '行对象',
                              name: 'row',
                              value: '$row$',
                              attrType: 'object',
                            },
                            {
                              title: '行索引',
                              name: 'index',
                              value: '$index$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatagetTableSelectedKey80,
                          { rowId, row, index },
                          'getTableSelectedKey',
                          {
                            id: 'getTableSelectedKey',
                            name: 'getTableSelectedKey',
                            type: 'getTableSelectedKey',
                            platform: 'pc',
                          },
                        );
                      }}
                      onPageChange={(page: any, pageSize: any) => {
                        const eventDatacallSelfFunc722: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167877355410988860,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '765899',
                              pageJsonId: 49,
                              customFuncName: 'reloadRolePrivilegePage',
                              customFuncParams: 'object',
                              paramsObj: { pageNum: '$page$' },
                              paramsObjKeyValueMap: { pageNum: '$page$' },
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc722.params =
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
                          eventDatacallSelfFunc722,
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
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'Table_554268_7374246')
                      }
                      {...injectData}
                    />
                  </View>
                </VerticalView>
              </TabPane>
              <TabPane
                name={'关联用户标签子面板'}
                tab={'关联用户'}
                key={'269814'}
                $$componentItem={{
                  id: '558741',
                  uid: '558741',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, '558741')}
                {...injectData}
              >
                <VerticalView
                  name={'上下布局'}
                  $$componentItem={{
                    id: 'VerticalView_53096_900784_705332',
                    uid: 'VerticalView_53096_900784_705332',
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
                    refs.setComponentRef(r, 'VerticalView_53096_900784_705332')
                  }
                  {...injectData}
                >
                  <View
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_3326182_3268316_5894046',
                      uid: 'View_3326182_3268316_5894046',
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
                      height: '0%',
                      width: '100%',
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'View_3326182_3268316_5894046')
                    }
                    {...injectData}
                  >
                    <Form
                      name={'用户查询表单'}
                      colSpan={8}
                      labelCol={8}
                      wrapperCol={16}
                      colon={true}
                      layout={'horizontal'}
                      labelAlign={'right'}
                      header={'标题'}
                      colSpace={0}
                      rowSpace={16}
                      formCode={'Form_5336927'}
                      $$componentItem={{
                        id: 'Form_5336927_4844899_195662',
                        uid: 'Form_5336927_4844899_195662',
                        type: 'Form',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ padding: '0px 0px 0px 0px' }}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'Form_5336927_4844899_195662')
                      }
                      {...injectData}
                    >
                      <Input
                        name={'用户编码'}
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
                          id: 'Input_510699_6740813_802217',
                          uid: 'Input_510699_6740813_802217',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc726: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167896872186593300,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '008073',
                                pageJsonId: 49,
                                customFuncName: 'reloadRoleUserPage',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc726.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc726,
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
                          refs.setComponentRef(r, 'Input_510699_6740813_802217')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'用户名称'}
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
                          id: 'Input_0129142_410003_742934',
                          uid: 'Input_0129142_410003_742934',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc727: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167896873316621280,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '270536',
                                pageJsonId: 49,
                                customFuncName: 'reloadRoleUserPage',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc727.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc727,
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
                          refs.setComponentRef(r, 'Input_0129142_410003_742934')
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
                          id: 'View_756929_0062074_7390883_702261_9817202',
                          uid: 'View_756929_0062074_7390883_702261_9817202',
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
                          refs.setComponentRef(
                            r,
                            'View_756929_0062074_7390883_702261_9817202',
                          )
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
                            id: 'Button_508625_7684763_98176_917748_8923665',
                            uid: 'Button_508625_7684763_98176_917748_8923665',
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
                            const eventDatacallSelfFunc728: any = [
                              {
                                type: 'callSelfFunc',
                                dataId: 167867804901210460,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '3309166',
                                  pageJsonId: 49,
                                  customFuncName: 'reloadRoleUserPage',
                                  customFuncParams: 'object',
                                  paramsObj: { pageNum: '1' },
                                  paramsObjKeyValueMap: { pageNum: '1' },
                                },
                                line_number: 1,
                                callback1: [],
                                callback2: [],
                              },
                            ];
                            eventDatacallSelfFunc728.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatacallSelfFunc728,
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
                            refs.setComponentRef(
                              r,
                              'Button_508625_7684763_98176_917748_8923665',
                            )
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
                            id: 'Button_228714_24039_080445_176283_7724355',
                            uid: 'Button_228714_24039_080445_176283_7724355',
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
                            const forms171 = getFormByCompId(
                              'Form_5336927_4844899_195662',
                              refs,
                            );
                            // 支持循环容器中的表单重置
                            (Array.isArray(forms171)
                              ? forms171
                              : [forms171]
                            ).forEach((form) => form?.resetFields());
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(
                              r,
                              'Button_228714_24039_080445_176283_7724355',
                            )
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
                            id: 'Button_508625_7684763_98176_283668_501388_7531295',
                            uid: 'Button_508625_7684763_98176_283668_501388_7531295',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={false}
                          readOnly={false}
                          style={{
                            width: 'fit-content',
                            margin: '0px 0px 0px 12px',
                          }}
                          onClick={(e: any) => {
                            const eventDatashowCustomModal259: any = [
                              {
                                type: 'showCustomModal',
                                dataId: 167870979488057300,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '678858',
                                  pageJsonId: 49,
                                  modalname: '/roleNotHaveUserPop',
                                  pageId: '953566352405966848',
                                  paramsObj: {
                                    bizId: '$data.roleParam.roleId$',
                                  },
                                  paramsObjKeyValueMap: {
                                    bizId: '$data.roleParam.roleId$',
                                  },
                                },
                                line_number: 1,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167871003087258300,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '501129',
                                      pageJsonId: 49,
                                      customFuncName: 'reloadRoleUserPage',
                                      customFuncParams: 'object',
                                      paramsObj: { pageNum: '1' },
                                      paramsObjKeyValueMap: { pageNum: '1' },
                                    },
                                    line_number: 2,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ];
                            eventDatashowCustomModal259.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatashowCustomModal259,
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
                            refs.setComponentRef(
                              r,
                              'Button_508625_7684763_98176_283668_501388_7531295',
                            )
                          }
                          {...injectData}
                        />
                      </View>
                    </Form>
                  </View>
                  <View
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_184463_000997_356501',
                      uid: 'View_184463_000997_356501',
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'View_184463_000997_356501')
                    }
                    {...injectData}
                  >
                    <Table
                      name={'用户表格'}
                      isFlexColumn={false}
                      extendNum={3}
                      adjustModel={'auto'}
                      pageSize={5}
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
                          title: '用户ID',
                          dataIndex: 'usrKey',
                          key: 'column1',
                          className: '',
                          id: '1755783',
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
                          title: '用户编码',
                          dataIndex: 'usrLogin',
                          key: 'column2',
                          className: 'divider',
                          id: '329886',
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
                          title: '用户名称',
                          dataIndex: 'usrLastName',
                          key: 'column3',
                          className: 'divider',
                          id: '923719',
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
                          dataIndex: 'usrUdfMobile',
                          key: 'column4',
                          className: 'divider',
                          id: '225326',
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
                          dataIndex: 'orgName',
                          key: 'column5',
                          className: 'divider',
                          id: '7384615',
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
                      rowKey={'userRoleRelId'}
                      dataSource={''}
                      rowActions={[
                        {
                          title: '详情',
                          iconPos: 'left',
                          icon: { theme: 'outlined', type: 'file-search' },
                          type: 'detail',
                          id: '633661',
                          checked: true,
                        },
                        {
                          title: '删除',
                          iconPos: 'left',
                          icon: { theme: 'outlined', type: 'delete' },
                          type: 'delete',
                          id: '254695',
                          checked: true,
                        },
                      ]}
                      extend={[]}
                      fieldName={'current$"'}
                      scroll={{ y: 240 }}
                      $$componentItem={{
                        id: 'Table_554268_7374246_75782',
                        uid: 'Table_554268_7374246_75782',
                        type: 'Table',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        margin: '20px 0px 0px 0px',
                        flex: '',
                        width: '100%',
                      }}
                      onRowDelete={(rowId: any, row: any, index: any) => {
                        const eventDatagetTableSelectedKey81: any = [
                          {
                            type: 'getTableSelectedKey',
                            dataId: 167870205467546660,
                            options: {
                              compId: 'Table_49_112_5440223',
                              compLib: 'comm',
                              pageJsonId: 49,
                              compName: 'Table',
                              id: '6794225',
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'showModal',
                                dataId: 167870205467689920,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '5357713',
                                  pageJsonId: 49,
                                  type: 'confirm',
                                  title: '删除确认',
                                  content: '您确定要删除该用户角色关联信息吗？',
                                  okText: '确认',
                                  cancelText: '取消',
                                },
                                line_number: 2,
                                callback1: [
                                  {
                                    type: 'apiRequest',
                                    dataId: 167870205467690140,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '5926084',
                                      pageJsonId: 49,
                                      sync: false,
                                      actionTitle: '',
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
                                          dataKey: '5926084_header',
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
                                              dataKey:
                                                '5926084_path.dcOaUserRoleRelId',
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
                                          dataKey: '5926084_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '5926084_query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '5926084_body',
                                        },
                                      ],
                                    },
                                    line_number: 3,
                                    callback1: [
                                      {
                                        type: 'ifelse',
                                        condition: [
                                          {
                                            condId: '968688',
                                            options: {
                                              useManual: true,
                                              context:
                                                '$reply_5926084.resultCode$',
                                              operate: '==',
                                              manualValue: '0',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 167870213299686460,
                                        elseIfs: [],
                                        line_number: 4,
                                        callback1: [
                                          {
                                            type: 'showMessage',
                                            dataId: 167870217693115800,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '2891924',
                                              pageJsonId: 49,
                                              type: 'success',
                                              value: '删除成功',
                                            },
                                            line_number: 5,
                                          },
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 167870618015090800,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '725948',
                                              pageJsonId: 49,
                                              customFuncName:
                                                'reloadRoleUserPage',
                                              customFuncParams: 'object',
                                              paramsObj: { pageNum: '1' },
                                              paramsObjKeyValueMap: {
                                                pageNum: '1',
                                              },
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
                            ],
                            callback2: [],
                          },
                        ];
                        eventDatagetTableSelectedKey81.params =
                          [
                            { title: '行id', name: 'rowId', value: '$rowId$' },
                            {
                              title: '行对象',
                              name: 'row',
                              value: '$row$',
                              attrType: 'object',
                            },
                            {
                              title: '行索引',
                              name: 'index',
                              value: '$index$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatagetTableSelectedKey81,
                          { rowId, row, index },
                          'getTableSelectedKey',
                          {
                            id: 'getTableSelectedKey',
                            name: 'getTableSelectedKey',
                            type: 'getTableSelectedKey',
                            platform: 'pc',
                          },
                        );
                      }}
                      onPageChange={(page: any, pageSize: any) => {
                        const eventDatacallSelfFunc729: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167877355410988860,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '765899',
                              pageJsonId: 49,
                              customFuncName: 'reloadRoleUserPage',
                              customFuncParams: 'object',
                              paramsObj: { pageNum: '$page$' },
                              paramsObjKeyValueMap: { pageNum: '$page$' },
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc729.params =
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
                          eventDatacallSelfFunc729,
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
                      onRowDetail={(rowId: any, row: any, index: any) => {
                        const eventDatashowCustomModal260: any = [
                          {
                            type: 'showCustomModal',
                            dataId: 167895877016731840,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '275561',
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
                        eventDatashowCustomModal260.params =
                          [
                            { title: '行id', name: 'rowId', value: '$rowId$' },
                            {
                              title: '行对象',
                              name: 'row',
                              value: '$row$',
                              attrType: 'object',
                            },
                            {
                              title: '行索引',
                              name: 'index',
                              value: '$index$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatashowCustomModal260,
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
                        refs.setComponentRef(r, 'Table_554268_7374246_75782')
                      }
                      {...injectData}
                    />
                  </View>
                </VerticalView>
              </TabPane>
            </Tabs>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(OaRoleManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
