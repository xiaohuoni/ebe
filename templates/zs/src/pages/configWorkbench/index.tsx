// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { TabPane, Tabs, View } from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ConfigWorkbench$$Page: React.FC<PageProps> = ({
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
}) => {
  useEffect(() => {
    const eventDatasetLoading45: any = [
      {
        type: 'setLoading',
        dataId: 167955350940824900,
        shielding: true,
        options: {
          compId: 'View_177297_1',
          compLib: 'custom',
          pageJsonId: '177297',
          compName: 'View',
          id: '876584',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading45.params = [] || [];
    CMDGenerator(eventDatasetLoading45, {}, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDataapiRequest469: any = [
      {
        type: 'apiRequest',
        dataId: 167888334206927070,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5270217',
          pageJsonId: '177297',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryHasPrivilege',
          _apiCode: 'qryHasPrivilege',
          _source: 'rhin',
          _serviceId: '952926171550470144',
          _serviceTitle: '查询是否有权限-tsm: qryHasPrivilege',
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
                  dataKey: '5270217_root.header',
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
                  dataKey: '5270217_root.path',
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
                  dataKey: '5270217_root.query',
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
                      code: 'privilegeCodes',
                      name: '权限编码数组，格式：["A","B"]',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'root.body.privilegeCodes.listItem',
                          compType: 'Input',
                          parents: ['root', 'body', 'privilegeCodes'],
                          id: 'root.body.privilegeCodes.listItem',
                          dataKey: '5270217_root.body.privilegeCodes.listItem',
                          parentType: 'fieldArray',
                          parentKey: '0-3-0',
                          key: '0-3-0-0',
                          parentCode: 'privilegeCodes',
                        },
                      ],
                      _id: 'root.body.privilegeCodes',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      id: 'root.body.privilegeCodes',
                      dataKey: '5270217_root.body.privilegeCodes',
                      value: {
                        type: ['customize'],
                        code: '["M_SCENE_MANAGE","M_SCENE_ATTR_MANAGE","M_MATRIX_CONFIG_MANAGE","M_FLOW_CONFIG_MANAGE","M_MARKET_CASE_MANAGE","M_ORG_MANAGE","M_USER_MANAGE","M_ROLE_MANAGE","M_PRIVILEGE_MANAGE","M_POST_MANAGE","M_AUTHORIZATION_APPROVAL_MANAGE"]',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '5270217_root.body',
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
              dataKey: '5270217_root',
            },
          ],
          _sourceName: '查询是否有权限-tsm',
        },
        line_number: 2,
        callback1: [
          {
            type: 'console',
            dataId: 167949030002865180,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '9214946',
              pageJsonId: '177297',
              value: [
                '$reply_5270217?.resultData.M_SCENE_ATTR_MANAGE$',
                '$reply_5270217?.resultData.M_SCENE_ATTR_MANAGE$',
                '$reply_5270217?.resultData.M_MATRIX_CONFIG_MANAGE$',
                '$reply_5270217?.resultData.M_FLOW_CONFIG_MANAGE$',
                '$reply_5270217?.resultData.M_MARKET_CASE_MANAGE$',
                '$reply_5270217?.resultData.M_ORG_MANAGE$',
                '$reply_5270217?.resultData.M_USER_MANAGE$',
                '$reply_5270217?.resultData.M_ROLE_MANAGE$',
                '$reply_5270217?.resultData.M_PRIVILEGE_MANAGE$',
                '$reply_5270217?.resultData.M_PRIVILEGE_MANAGE$',
                '$reply_5270217?.resultData.M_POST_MANAGE$',
              ],
            },
            line_number: 3,
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_SCENE_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888336605512900,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888340400819420,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888341535483100,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: 'TabPane_628101',
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '997365',
                      visible: '',
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 6,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888341535483100,
                    shielding: true,
                    options: {
                      compId: 'TabPane_628101',
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '997365',
                      visible: '',
                    },
                    line_number: 6,
                  },
                ],
              },
            ],
            line_number: 4,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888340974541920,
                shielding: true,
                options: {
                  compId: 'TabPane_628101',
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '594435',
                  visible: 'true',
                },
                line_number: 5,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_SCENE_ATTR_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888342315087230,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888342315046620,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888342315036350,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['TabPane_461269'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '225673',
                      visible: '',
                      compid: ['TabPane_461269'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 9,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888342315036350,
                    shielding: true,
                    options: {
                      compId: ['TabPane_461269'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '225673',
                      visible: '',
                      compid: ['TabPane_461269'],
                    },
                    line_number: 9,
                  },
                ],
              },
            ],
            line_number: 7,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888342315064320,
                shielding: true,
                options: {
                  compId: ['TabPane_461269'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '93233',
                  visible: 'true',
                  compid: ['TabPane_461269'],
                },
                line_number: 8,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_MATRIX_CONFIG_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888342495747070,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888342495714750,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888342495786850,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['3431177'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '007886',
                      visible: '',
                      compid: ['3431177'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 12,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888342495786850,
                    shielding: true,
                    options: {
                      compId: ['3431177'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '007886',
                      visible: '',
                      compid: ['3431177'],
                    },
                    line_number: 12,
                  },
                ],
              },
            ],
            line_number: 10,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888342495780700,
                shielding: true,
                options: {
                  compId: ['3431177'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '385683',
                  visible: 'true',
                  compid: ['3431177'],
                },
                line_number: 11,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_FLOW_CONFIG_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888342570480220,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888342570403360,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888342570448480,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['0550217'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '95450405',
                      visible: '',
                      compid: ['0550217'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 15,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888342570448480,
                    shielding: true,
                    options: {
                      compId: ['0550217'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '95450405',
                      visible: '',
                      compid: ['0550217'],
                    },
                    line_number: 15,
                  },
                ],
              },
            ],
            line_number: 13,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888342570424130,
                shielding: true,
                options: {
                  compId: ['0550217'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '782091',
                  visible: 'true',
                  compid: ['0550217'],
                },
                line_number: 14,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_MARKET_CASE_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888342645203600,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888342645259780,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888342645228060,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['799507'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '711835',
                      visible: '',
                      compid: ['799507'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 18,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888342645228060,
                    shielding: true,
                    options: {
                      compId: ['799507'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '711835',
                      visible: '',
                      compid: ['799507'],
                    },
                    line_number: 18,
                  },
                ],
              },
            ],
            line_number: 16,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888342645276700,
                shielding: true,
                options: {
                  compId: ['799507'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '3119775',
                  visible: 'true',
                  compid: ['799507'],
                },
                line_number: 17,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_ORG_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888342723314780,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888342723350660,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888342723373200,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['479481'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '218773',
                      visible: '',
                      compid: ['479481'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 21,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888342723373200,
                    shielding: true,
                    options: {
                      compId: ['479481'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '218773',
                      visible: '',
                      compid: ['479481'],
                    },
                    line_number: 21,
                  },
                ],
              },
            ],
            line_number: 19,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888342723307600,
                shielding: true,
                options: {
                  compId: ['479481'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '748206',
                  visible: 'true',
                  compid: ['479481'],
                },
                line_number: 20,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_USER_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888342803704930,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888342803751650,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888342803796300,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['78046'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '873373',
                      visible: '',
                      compid: ['78046'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 24,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888342803796300,
                    shielding: true,
                    options: {
                      compId: ['78046'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '873373',
                      visible: '',
                      compid: ['78046'],
                    },
                    line_number: 24,
                  },
                ],
              },
            ],
            line_number: 22,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888342803788900,
                shielding: true,
                options: {
                  compId: ['78046'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '6644473',
                  visible: 'true',
                  compid: ['78046'],
                },
                line_number: 23,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_ROLE_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888342882442750,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888342882411460,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888342882467700,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['288511'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '166952',
                      visible: '',
                      compid: ['288511'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 27,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888342882467700,
                    shielding: true,
                    options: {
                      compId: ['288511'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '166952',
                      visible: '',
                      compid: ['288511'],
                    },
                    line_number: 27,
                  },
                ],
              },
            ],
            line_number: 25,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888342882494620,
                shielding: true,
                options: {
                  compId: ['288511'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '7192556',
                  visible: 'true',
                  compid: ['288511'],
                },
                line_number: 26,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_PRIVILEGE_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888342962686530,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888342962617300,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888342962640700,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['9328823'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '2545018',
                      visible: '',
                      compid: ['9328823'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 30,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888342962640700,
                    shielding: true,
                    options: {
                      compId: ['9328823'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '2545018',
                      visible: '',
                      compid: ['9328823'],
                    },
                    line_number: 30,
                  },
                ],
              },
            ],
            line_number: 28,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888342962685600,
                shielding: true,
                options: {
                  compId: ['9328823'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '41168',
                  visible: 'true',
                  compid: ['9328823'],
                },
                line_number: 29,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '473851',
                options: {
                  context: '$reply_5270217?.resultData.M_POST_MANAGE$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888343045196130,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888343045101000,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888343045185630,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['4566142'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '973473',
                      visible: '',
                      compid: ['4566142'],
                    },
                    actionObjId: 'TabPane_628101',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 33,
                  },
                ],
                condition: [],
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888343045185630,
                    shielding: true,
                    options: {
                      compId: ['4566142'],
                      compLib: 'comm',
                      pageJsonId: '177297',
                      compName: 'TabPane',
                      id: '973473',
                      visible: '',
                      compid: ['4566142'],
                    },
                    line_number: 33,
                  },
                ],
              },
            ],
            line_number: 31,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888343045153900,
                shielding: true,
                options: {
                  compId: ['4566142'],
                  compLib: 'comm',
                  pageJsonId: '177297',
                  compName: 'TabPane',
                  id: '5478172',
                  visible: 'true',
                  compid: ['4566142'],
                },
                line_number: 32,
              },
            ],
          },
          {
            type: 'setDataSource',
            dataId: 167955288895055780,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '372966',
              pageJsonId: '177297',
              dataSourceId: 167955224298076000,
              dataSourceName: 'rolePrivilege',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  code: 'M_ORG_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '026078',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_ORG_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_ORG_MANAGE'],
                  _idpath: ['026078'],
                },
                {
                  code: 'M_FLOW_CONFIG_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '64467',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_FLOW_CONFIG_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_FLOW_CONFIG_MANAGE'],
                  _idpath: ['64467'],
                },
                {
                  code: 'M_USER_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '962147',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_USER_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_USER_MANAGE'],
                  _idpath: ['962147'],
                },
                {
                  code: 'M_POST_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '105881',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_POST_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_POST_MANAGE'],
                  _idpath: ['105881'],
                },
                {
                  code: 'M_SCENE_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '5777296',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_SCENE_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_SCENE_MANAGE'],
                  _idpath: ['5777296'],
                },
                {
                  code: 'M_PRIVILEGE_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '370576',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_PRIVILEGE_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_PRIVILEGE_MANAGE'],
                  _idpath: ['370576'],
                },
                {
                  code: 'M_ROLE_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '99669',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_ROLE_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_ROLE_MANAGE'],
                  _idpath: ['99669'],
                },
                {
                  code: 'M_SCENE_ATTR_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '88544',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_SCENE_ATTR_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_SCENE_ATTR_MANAGE'],
                  _idpath: ['88544'],
                },
                {
                  code: 'M_MATRIX_CONFIG_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'true',
                  defaultValue: '',
                  name: '属性',
                  attrId: '081586',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_MATRIX_CONFIG_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_MATRIX_CONFIG_MANAGE'],
                  _idpath: ['081586'],
                },
                {
                  code: 'M_MARKET_CASE_MANAGE',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  exampleValue: 'false',
                  defaultValue: '',
                  name: '属性',
                  attrId: '152745',
                  initialData: { type: 'static', value: 'false' },
                  parentKey: '1',
                  parentType: 'object',
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_MARKET_CASE_MANAGE',
                  },
                  showInput: true,
                  _codePath: ['M_MARKET_CASE_MANAGE'],
                  _idpath: ['152745'],
                },
                {
                  attrId: '092617',
                  code: 'M_AUTHORIZATION_APPROVAL_MANAGE',
                  name: '属性',
                  type: 'boolean',
                  initialData: { type: 'static', value: 'false' },
                  showInput: true,
                  _codePath: ['M_AUTHORIZATION_APPROVAL_MANAGE'],
                  _idpath: ['092617'],
                  value: {
                    type: ['context', '$reply_5270217?.resultData$'],
                    hideAttr: false,
                    code: 'M_AUTHORIZATION_APPROVAL_MANAGE',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 34,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 167955248024222000,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '7631013',
              pageJsonId: '177297',
              code: 'function main(data,state,success,fail){var activeKey=["M_SCENE_MANAGE","M_SCENE_ATTR_MANAGE","M_MATRIX_CONFIG_MANAGE","M_FLOW_CONFIG_MANAGE","M_MARKET_CASE_MANAGE","M_ORG_MANAGE","M_USER_MANAGE","M_ROLE_MANAGE","M_PRIVILEGE_MANAGE","M_POST_MANAGE","M_AUTHORIZATION_APPROVAL_MANAGE"].findIndex(function(c){var _reply_,_reply_2;((_reply_=reply_5270217)===null||_reply_===void 0?void 0:_reply_.resultData)&&((_reply_2=reply_5270217)===null||_reply_2===void 0?void 0:_reply_2.resultData[c])===true});success(activeKey>-1?activeKey+1:1)};',
            },
            line_number: 35,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167955287465295300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '80566555',
                  pageJsonId: '177297',
                  dataSourceId: 167955285327378800,
                  dataSourceName: 'activeKey',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '865788',
                      code: 'value',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static', value: '1' },
                      value: { type: ['context', '$data_7631013$'], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 36,
                callback1: [
                  {
                    type: 'setLoading',
                    dataId: 167955352214753820,
                    options: {
                      compId: 'View_177297_1',
                      compLib: 'custom',
                      pageJsonId: '177297',
                      compName: 'View',
                      id: '3063425',
                      loading: false,
                    },
                    line_number: 37,
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
    eventDataapiRequest469.params = [] || [];
    CMDGenerator(eventDataapiRequest469, {}, 'apiRequest', {
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
      className="__CustomClass_177297__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_177297_1',
          uid: 'View_177297_1',
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
        ref={(r: any) => (refs['View_177297_1'] = r)}
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
          extendProps={{}}
          activeKey={data?.visible?.value}
          $$componentItem={{
            id: 'Tabs_818152',
            uid: 'Tabs_818152',
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
          ref={(r: any) => (refs['Tabs_818152'] = r)}
          {...injectData}
        >
          <TabPane
            name={'场景管理'}
            tab={'场景配置'}
            key={'1'}
            $$componentItem={{
              id: 'TabPane_628101',
              uid: 'TabPane_628101',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_SCENE_MANAGE,
                1,
                2,
              )}` === '3'
            }
            visible={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_SCENE_MANAGE,
                1,
                2,
              )}` !== '2'
            }
            readOnly={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_SCENE_MANAGE,
                1,
                2,
              )}` === '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['TabPane_628101'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/sceneManage'}
              pageId={'871695112643387392'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_454167'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'场景要素管理'}
            tab={'场景要素配置'}
            key={'2'}
            $$componentItem={{
              id: 'TabPane_461269',
              uid: 'TabPane_461269',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_SCENE_ATTR_MANAGE,
                1,
                2,
              )}` === '3'
            }
            visible={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_SCENE_ATTR_MANAGE,
                1,
                2,
              )}` !== '2'
            }
            readOnly={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_SCENE_ATTR_MANAGE,
                1,
                2,
              )}` === '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['TabPane_461269'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/sceneAttrManage'}
              pageId={'900661977310531584'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_2618866'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'矩阵配置管理'}
            tab={'矩阵配置'}
            key={'3'}
            $$componentItem={{
              id: '3431177',
              uid: '3431177',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_MATRIX_CONFIG_MANAGE,
                1,
                2,
              )}` === '3'
            }
            visible={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_MATRIX_CONFIG_MANAGE,
                1,
                2,
              )}` !== '2'
            }
            readOnly={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_MATRIX_CONFIG_MANAGE,
                1,
                2,
              )}` === '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['3431177'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/sceneMatrixManage'}
              pageId={'882184557321994240'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_423277'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'流程配置管理'}
            tab={'流程配置'}
            key={'4'}
            $$componentItem={{
              id: '0550217',
              uid: '0550217',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_FLOW_CONFIG_MANAGE,
                1,
                2,
              )}` === '3'
            }
            visible={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_FLOW_CONFIG_MANAGE,
                1,
                2,
              )}` !== '2'
            }
            readOnly={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_FLOW_CONFIG_MANAGE,
                1,
                2,
              )}` === '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['0550217'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/flowConfigManage'}
              pageId={'899899936245522432'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_480473'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'营销案配置管理'}
            tab={'营销案配置'}
            key={'5'}
            $$componentItem={{
              id: '799507',
              uid: '799507',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_MARKET_CASE_MANAGE,
                1,
                2,
              )}` === '3'
            }
            visible={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_MARKET_CASE_MANAGE,
                1,
                2,
              )}` !== '2'
            }
            readOnly={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_MARKET_CASE_MANAGE,
                1,
                2,
              )}` === '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['799507'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/saleConfigManage'}
              pageId={'912611949612380160'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_000894'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'组织管理'}
            tab={'组织管理'}
            key={'6'}
            $$componentItem={{
              id: '479481',
              uid: '479481',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(data?.rolePrivilege?.M_ORG_MANAGE, 1, 2)}` ===
              '3'
            }
            visible={
              `${functorsMap?.IF(data?.rolePrivilege?.M_ORG_MANAGE, 1, 2)}` !==
              '2'
            }
            readOnly={
              `${functorsMap?.IF(data?.rolePrivilege?.M_ORG_MANAGE, 1, 2)}` ===
              '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['479481'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/oaOrganizationManagement'}
              pageId={'884248856254066688'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_245544'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'用户管理'}
            tab={'用户管理'}
            key={'7'}
            $$componentItem={{
              id: '78046',
              uid: '78046',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(data?.rolePrivilege?.M_USER_MANAGE, 1, 2)}` ===
              '3'
            }
            visible={
              `${functorsMap?.IF(data?.rolePrivilege?.M_USER_MANAGE, 1, 2)}` !==
              '2'
            }
            readOnly={
              `${functorsMap?.IF(data?.rolePrivilege?.M_USER_MANAGE, 1, 2)}` ===
              '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['78046'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/oaUserManage'}
              pageId={'885366956034052096'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_468694'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'角色管理'}
            tab={'角色管理'}
            key={'8'}
            $$componentItem={{
              id: '288511',
              uid: '288511',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(data?.rolePrivilege?.M_ROLE_MANAGE, 1, 2)}` ===
              '3'
            }
            visible={
              `${functorsMap?.IF(data?.rolePrivilege?.M_ROLE_MANAGE, 1, 2)}` !==
              '2'
            }
            readOnly={
              `${functorsMap?.IF(data?.rolePrivilege?.M_ROLE_MANAGE, 1, 2)}` ===
              '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['288511'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/oaRoleManage'}
              pageId={'953182638975242240'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_34524'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'权限管理'}
            tab={'权限管理'}
            key={'9'}
            $$componentItem={{
              id: '9328823',
              uid: '9328823',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_PRIVILEGE_MANAGE,
                1,
                2,
              )}` === '3'
            }
            visible={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_PRIVILEGE_MANAGE,
                1,
                2,
              )}` !== '2'
            }
            readOnly={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_PRIVILEGE_MANAGE,
                1,
                2,
              )}` === '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['9328823'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/oaPrivilegeManage'}
              pageId={'952389338433073152'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_6773'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'岗位管理'}
            tab={'岗位管理'}
            key={'10'}
            $$componentItem={{
              id: '4566142',
              uid: '4566142',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(data?.rolePrivilege?.M_POST_MANAGE, 1, 2)}` ===
              '3'
            }
            visible={
              `${functorsMap?.IF(data?.rolePrivilege?.M_POST_MANAGE, 1, 2)}` !==
              '2'
            }
            readOnly={
              `${functorsMap?.IF(data?.rolePrivilege?.M_POST_MANAGE, 1, 2)}` ===
              '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['4566142'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/postStaffManage'}
              pageId={'884615633470709760'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_0201706'] = r)}
              {...injectData}
            />
          </TabPane>
          <TabPane
            name={'授权管理'}
            tab={'授权管理'}
            key={'661918'}
            $$componentItem={{
              id: 'TabPane_908704',
              uid: 'TabPane_908704',
              type: 'TabPane',
              ...componentItem,
            }}
            disabled={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_AUTHORIZATION_APPROVAL_MANAGE,
                1,
                2,
              )}` === '3'
            }
            visible={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_AUTHORIZATION_APPROVAL_MANAGE,
                1,
                2,
              )}` !== '2'
            }
            readOnly={
              `${functorsMap?.IF(
                data?.rolePrivilege?.M_AUTHORIZATION_APPROVAL_MANAGE,
                1,
                2,
              )}` === '4'
            }
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['TabPane_908704'] = r)}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/authorizationApproval'}
              pageId={'993406268634288128'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => (refs['Pageview_9165806'] = r)}
              {...injectData}
            />
          </TabPane>
        </Tabs>
      </View>
    </div>
  );
};

export default withPageHOC(ConfigWorkbench$$Page, {
  pageId: '953262679608012800',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
