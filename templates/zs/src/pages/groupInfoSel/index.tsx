// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Select, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '899848269504155648';
const GroupInfoSel$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {
    const eventDatagetTableSelected4: any = [
      {
        type: 'getTableSelected',
        dataId: 169105964624673760,
        options: {
          compId: 'Table_08098',
          compLib: 'comm',
          pageJsonId: '6584614',
          compName: 'Table',
          id: '194041',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '36846',
                options: {
                  context: '$selectedRows_194041$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169105966078690140,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 169105966078630080,
                children: [
                  {
                    dataName: 'action',
                    dataId: 169105966078618660,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '6500873',
                      pageJsonId: '6584614',
                      type: 'error',
                      value: '请选择集团',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    line_number: 11,
                  },
                ],
                condition: [],
                desc: '',
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 169105966078618660,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '6500873',
                      pageJsonId: '6584614',
                      type: 'error',
                      value: '请选择集团',
                    },
                    line_number: 11,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 169105966078698900,
                shielding: true,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '8842575',
                  pageJsonId: '6584614',
                  params: '$currentPageSelectedRows_6399263$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 169105966078670750,
                shielding: true,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '716562',
                  pageJsonId: '6584614',
                },
                line_number: 4,
              },
              {
                type: 'apiRequest',
                dataId: 169105966078603520,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '016251',
                  pageJsonId: '6584614',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'groupCustomerInfo',
                  _apiCode: 'groupCustomerInfo',
                  _source: 'rhin',
                  _serviceId: '915442281117552640',
                  _serviceTitle: '查询集团详情-hdb: groupCustomerInfo',
                  params: 'object',
                  apiRequestSetParams: [
                    {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'orderNbr',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.orderNbr',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.orderNbr',
                              dataKey: '016251_root.body.orderNbr',
                              value: {
                                type: ['context', '$state.orderNbr$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                            },
                            {
                              code: 'instanceList',
                              name: '新增节点',
                              attrType: 'objectArray',
                              _id: 'root.body.instanceList',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.instanceList',
                              dataKey: '016251_root.body.instanceList',
                              value: {
                                type: ['context', '$selectedRows_194041$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-3',
                            },
                            {
                              code: 'objType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.objType',
                              compType: 'Input',
                              name: 'objType',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                            },
                            {
                              code: 'objId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.objId',
                              compType: 'Input',
                              name: 'objId',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'root.body',
                          dataKey: '016251_root.body',
                          key: '0-3',
                          parentType: 'object',
                          parentKey: '0',
                        },
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
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '016251_root',
                    },
                  ],
                  _sourceName: '查询集团详情-hdb',
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 169105966078649440,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '544634',
                      pageJsonId: '6584614',
                      params: '$reply_016251.resultData$',
                    },
                    line_number: 6,
                  },
                  {
                    type: 'closeModal',
                    dataId: 169105966078633150,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '992966',
                      pageJsonId: '6584614',
                    },
                    line_number: 7,
                  },
                  {
                    type: 'console',
                    dataId: 169105966078681100,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '8059526',
                      pageJsonId: '6584614',
                      value: [
                        '======调用父页面自定义事件======',
                        '===DATA====',
                        '$data$',
                        '===urllParam====',
                        '$urlParam$',
                        '===STATE=====',
                        '$state$',
                        '===选择的集团信息===',
                        '$selectedRows_194041$',
                        '$reply_016251$',
                      ],
                    },
                    line_number: 8,
                  },
                  {
                    type: 'callParentCustomFunc',
                    dataId: 169105966078632350,
                    shielding: true,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '941823',
                      pageJsonId: '6584614',
                      pathname: '/auditOrderPrepare',
                      pageId: '884045146848604160',
                      modalPath: '/auditOrderPrepare',
                      customFuncName: 'runEvent',
                      customFuncParams: '$selectedRows_194041[0]$',
                    },
                    line_number: 9,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'callCustomPageFunc',
                    dataId: 169822069977703580,
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '6226565',
                      pageJsonId: '6584614',
                      pathname: '/auditOrderPrepare',
                      pageId: '884045146848604160',
                      modalPath: '/auditOrderPrepare',
                      customFuncName: 'runEvent',
                      customFuncParams: '$selectedRows_194041[0]$',
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
    eventDatagetTableSelected4.params = [] || [];
    CMDGenerator(eventDatagetTableSelected4, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal13: any = [
      {
        type: 'closeModal',
        dataId: '8772976_1',
        options: { compId: 'page', compName: 'page', id: '64313' },
        line_number: 1,
      },
    ];
    eventDatacloseModal13.params = [] || [];
    CMDGenerator(eventDatacloseModal13, {}, 'closeModal', {
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
    const eventDataapiRequest171: any = [
      {
        type: 'apiRequest',
        dataId: 167342757435868260,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '557119',
          pageJsonId: '6584614',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryBopUserIdByOaUserId',
          _apiCode: 'qryBopUserIdByOaUserId',
          _source: 'rhin',
          _serviceId: '910432054329229312',
          _serviceTitle:
            '通过OA工号查询对应的BOP用户-lzs: qryBopUserIdByOaUserId',
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
              dataKey: '557119_header',
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
              dataKey: '557119_path',
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
              dataKey: '557119_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'oaUserId',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.oaUserId',
                  compType: 'Input',
                  name: 'oaUserId',
                  parents: ['body'],
                  id: 'body.oaUserId',
                  dataKey: '557119_body.oaUserId',
                  value: { type: ['context', '$state.userCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '557119_body',
              key: '3',
            },
          ],
          _sourceName: '通过OA工号查询对应的BOP用户-lzs',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 167343111246139420,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '33025',
              pageJsonId: '6584614',
              value: ['$reply_557119?.resultData[0]?.userId$'],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 167342907987279140,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '0850934',
              pageJsonId: '6584614',
              code: 'function main(data,state,success,fail){var _reply_;var userList=(_reply_=reply_557119)===null||_reply_===void 0?void 0:_reply_.resultData;if(userList!=null&&userList!=undefined){userList.forEach(function(v){v.userName=v.userName+"["+v.userId+"]"})}console.log(userList);success(userList)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 167342922841797950,
                shielding: true,
                options: {
                  compId: 'Select_441932',
                  compLib: 'comm',
                  pageJsonId: '6584614',
                  compName: 'Select',
                  id: '576855',
                  labelKey: 'userName',
                  data: '$data_0850934$',
                  valueKey: 'userId',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 167343132805954300,
                    shielding: true,
                    options: {
                      compId: 'Select_441932',
                      compLib: 'comm',
                      pageJsonId: '6584614',
                      compName: 'Select',
                      id: '860335',
                      valueList: {
                        Select_441932: '$reply_557119?.resultData[0].userId$',
                      },
                    },
                    line_number: 5,
                    callback1: [],
                  },
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '863803',
                        options: {
                          context: '$reply_557119?.resultData$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$reply_557119?.resultData[0].userId$',
                          operate: 'notEmpty',
                        },
                        condId: '941134',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169335780929043360,
                    elseIfs: [],
                    line_number: 6,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169335782148498720,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '8853388',
                          pageJsonId: '6584614',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'queryGroupCustomerList',
                          _apiCode: 'queryGroupCustomerList',
                          _source: 'rhin',
                          _serviceId: '876387158751866880',
                          _serviceTitle:
                            '查询集团信息-hdb: queryGroupCustomerList',
                          params: 'object',
                          apiRequestSetParams: [
                            {
                              code: 'root',
                              name: '根节点',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'orderNbr',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.orderNbr',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      id: 'root.body.orderNbr',
                                      dataKey: '8853388_root.body.orderNbr',
                                      value: {
                                        type: ['context', '$state.orderNbr$'],
                                        code: '',
                                      },
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                    },
                                    {
                                      code: 'oaUserId',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.oaUserId',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      id: 'root.body.oaUserId',
                                      dataKey: '8853388_root.body.oaUserId',
                                      value: {
                                        type: ['customize'],
                                        code: '$reply_557119?.resultData[0].userId$',
                                      },
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-1',
                                    },
                                    {
                                      code: 'pageSize',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.pageSize',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-4',
                                      id: 'root.body.pageSize',
                                      dataKey: '8853388_root.body.pageSize',
                                      value: {
                                        type: ['customize'],
                                        code: '10000',
                                      },
                                    },
                                    {
                                      code: 'groupName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.groupName',
                                      compType: 'Input',
                                      name: 'groupName',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-2',
                                    },
                                    {
                                      code: 'groupId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.groupId',
                                      compType: 'Input',
                                      name: 'groupId',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-3',
                                    },
                                  ],
                                  _id: 'root.body',
                                  compType: 'Input',
                                  parents: ['root'],
                                  id: 'root.body',
                                  dataKey: '8853388_root.body',
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-3',
                                },
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
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '8853388_root',
                            },
                          ],
                          _sourceName: '查询集团信息-hdb',
                        },
                        line_number: 7,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 169335782148411520,
                            shielding: true,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '272194',
                              pageJsonId: '6584614',
                              dataSourceId: 166609528011893860,
                              dataSourceName: 'groupList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  code: 'total',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '3933013',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  _codePath: ['total'],
                                  _idpath: ['3933013'],
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_8853388?.resultData.total$',
                                  },
                                },
                                {
                                  code: 'current',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '499923',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  _codePath: ['current'],
                                  _idpath: ['499923'],
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_8853388?.resultData.current$',
                                  },
                                },
                                {
                                  code: 'size',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '61818',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  _codePath: ['size'],
                                  _idpath: ['61818'],
                                  value: { type: ['customize'], code: '5' },
                                },
                                {
                                  code: 'records',
                                  children: [
                                    {
                                      code: 'orgZone',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '099671',
                                      initialData: {
                                        type: 'static',
                                        value: '1010252',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'orgZone'],
                                      _idpath: ['687998', '099671'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'enterpriseKind',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '7374046',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'enterpriseKind'],
                                      _idpath: ['687998', '7374046'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'groupId',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '9406922',
                                      initialData: {
                                        type: 'static',
                                        value: '5911920813',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'groupId'],
                                      _idpath: ['687998', '9406922'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'orgTypeName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '253375',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'orgTypeName'],
                                      _idpath: ['687998', '253375'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'groupLevelName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '349387',
                                      initialData: {
                                        type: 'static',
                                        value: '待定',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'groupLevelName'],
                                      _idpath: ['687998', '349387'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'managerName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '5592773',
                                      initialData: {
                                        type: 'static',
                                        value: '黄娜娜',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'managerName'],
                                      _idpath: ['687998', '5592773'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'contactTel',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '865281',
                                      initialData: {
                                        type: 'static',
                                        value: '13444444444',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'contactTel'],
                                      _idpath: ['687998', '865281'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'orgType',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '779178',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'orgType'],
                                      _idpath: ['687998', '779178'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'tradeclass',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '835847',
                                      initialData: {
                                        type: 'static',
                                        value: '101',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'tradeclass'],
                                      _idpath: ['687998', '835847'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'enterpriseScope',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '796505',
                                      initialData: {
                                        type: 'static',
                                        value: '1',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'enterpriseScope'],
                                      _idpath: ['687998', '796505'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'homeCounty',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '1194342',
                                      initialData: {
                                        type: 'static',
                                        value: '101',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'homeCounty'],
                                      _idpath: ['687998', '1194342'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'orgZoneName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '432661',
                                      initialData: {
                                        type: 'static',
                                        value: '鼓楼后台支撑组',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'orgZoneName'],
                                      _idpath: ['687998', '432661'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'homeCity',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '219497',
                                      initialData: {
                                        type: 'static',
                                        value: '591',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'homeCity'],
                                      _idpath: ['687998', '219497'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'statusName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '536606',
                                      initialData: {
                                        type: 'static',
                                        value: '正使用',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'statusName'],
                                      _idpath: ['687998', '536606'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'tradeclassTopName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '224454',
                                      initialData: {
                                        type: 'static',
                                        value: '农、林、牧、渔业',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: [
                                        'records',
                                        'tradeclassTopName',
                                      ],
                                      _idpath: ['687998', '224454'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'tradeclassName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '842265',
                                      initialData: {
                                        type: 'static',
                                        value: '农业',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'tradeclassName'],
                                      _idpath: ['687998', '842265'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'managerContactTel',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '438869',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: [
                                        'records',
                                        'managerContactTel',
                                      ],
                                      _idpath: ['687998', '438869'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'enterpriseScopeName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '894927',
                                      initialData: {
                                        type: 'static',
                                        value: '跨国集团',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: [
                                        'records',
                                        'enterpriseScopeName',
                                      ],
                                      _idpath: ['687998', '894927'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'homeCityName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '659661',
                                      initialData: {
                                        type: 'static',
                                        value: '福州',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'homeCityName'],
                                      _idpath: ['687998', '659661'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'managerId',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '938307',
                                      initialData: {
                                        type: 'static',
                                        value: '1010161',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'managerId'],
                                      _idpath: ['687998', '938307'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'valueLevel',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '418984',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'valueLevel'],
                                      _idpath: ['687998', '418984'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'groupName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '821461',
                                      initialData: {
                                        type: 'static',
                                        value: 'Test集团Test集团455',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'groupName'],
                                      _idpath: ['687998', '821461'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'enterpriseKindName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '755924',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: [
                                        'records',
                                        'enterpriseKindName',
                                      ],
                                      _idpath: ['687998', '755924'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'tradeclassTop',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '059337',
                                      initialData: {
                                        type: 'static',
                                        value: '1',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'tradeclassTop'],
                                      _idpath: ['687998', '059337'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'valueLevelName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '9398467',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'valueLevelName'],
                                      _idpath: ['687998', '9398467'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'homeCountyName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '005949',
                                      initialData: {
                                        type: 'static',
                                        value: '鼓楼',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'homeCountyName'],
                                      _idpath: ['687998', '005949'],
                                      parentCode: 'records',
                                    },
                                  ],
                                  name: '',
                                  type: 'objectArray',
                                  attrId: '687998',
                                  initialData: { type: 'static' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_8853388?.resultData.instances$',
                                  },
                                  _codePath: ['records'],
                                  _idpath: ['687998'],
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 8,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'reloadTableData',
                            dataId: 169335782148404930,
                            shielding: true,
                            options: {
                              compId: 'Table_08098',
                              compLib: 'comm',
                              pageJsonId: '6584614',
                              compName: 'Table',
                              id: '234615662',
                              data: '$reply_8853388?.resultData.instances$',
                            },
                            line_number: 9,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
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
    eventDataapiRequest171.params = [] || [];
    CMDGenerator(eventDataapiRequest171, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    }); // console 169380700863423040
    console.log(state?.userCode);
    const eventDataifelse104: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '926383',
            options: { context: '$state.userCode$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170607581691954020,
        elseIfs: [],
        line_number: 11,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 170607584685512100,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '567541',
              pageJsonId: '6584614',
              sync: false,
              actionTitle: '',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'qryBopUserIdByOaUserId',
              _apiCode: 'qryBopUserIdByOaUserId',
              _source: 'rhin',
              _serviceId: '910432054329229312',
              _serviceTitle:
                '通过OA工号查询对应的BOP用户-lzs: qryBopUserIdByOaUserId',
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
                  dataKey: '557119_header',
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
                  dataKey: '557119_path',
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
                  dataKey: '557119_query',
                  key: '2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'oaUserId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.oaUserId',
                      compType: 'Input',
                      name: 'oaUserId',
                      parents: ['body'],
                      id: 'body.oaUserId',
                      dataKey: '557119_body.oaUserId',
                      value: {
                        type: ['context', '$state.userCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-0',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '557119_body',
                  key: '3',
                },
              ],
              _sourceName: '通过OA工号查询对应的BOP用户-lzs',
            },
            line_number: 12,
            callback1: [
              {
                type: 'console',
                dataId: 170607584685541730,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '534481',
                  pageJsonId: '6584614',
                  value: ['$reply_567541?.resultData[0]?.userId$'],
                },
                line_number: 13,
              },
              {
                type: 'customActionCode',
                dataId: 170607584685501540,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '887855',
                  pageJsonId: '6584614',
                  code: 'function main(data,state,success,fail){var _reply_;var userList=(_reply_=reply_567541)===null||_reply_===void 0?void 0:_reply_.resultData;if(userList!=null&&userList!=undefined){userList.forEach(function(v){v.userName=v.userName+"["+v.userId+"]"})}console.log(userList);success(userList)};',
                },
                line_number: 14,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 170607584685581700,
                    options: {
                      compId: 'Select_441932',
                      compLib: 'comm',
                      pageJsonId: '6584614',
                      compName: 'Select',
                      id: '453444',
                      labelKey: 'userName',
                      data: '$data_887855$',
                      valueKey: 'userId',
                    },
                    line_number: 15,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 170607584685557570,
                        options: {
                          compId: 'Select_441932',
                          compLib: 'comm',
                          pageJsonId: '6584614',
                          compName: 'Select',
                          id: '51821',
                          valueList: {
                            Select_441932:
                              '$reply_567541?.resultData[0].userId$',
                          },
                        },
                        line_number: 16,
                        callback1: [],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '863803',
                            options: {
                              context: '$reply_567541?.resultData$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              context: '$reply_567541?.resultData[0].userId$',
                              operate: 'notEmpty',
                            },
                            condId: '941134',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170607584685501400,
                        elseIfs: [],
                        line_number: 17,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 170607584685583040,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '179878',
                              pageJsonId: '6584614',
                              sync: false,
                              actionTitle: '',
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'queryGroupCustomerList',
                              _apiCode: 'queryGroupCustomerList',
                              _source: 'rhin',
                              _serviceId: '876387158751866880',
                              _serviceTitle:
                                '查询集团信息-hdb: queryGroupCustomerList',
                              params: 'object',
                              apiRequestSetParams: [
                                {
                                  code: 'root',
                                  name: '根节点',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'orderNbr',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'root.body.orderNbr',
                                          compType: 'Input',
                                          parents: ['root', 'body'],
                                          id: 'root.body.orderNbr',
                                          dataKey: '8853388_root.body.orderNbr',
                                          value: {
                                            type: [
                                              'context',
                                              '$state.orderNbr$',
                                            ],
                                            code: '',
                                          },
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                        },
                                        {
                                          code: 'oaUserId',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'root.body.oaUserId',
                                          compType: 'Input',
                                          parents: ['root', 'body'],
                                          id: 'root.body.oaUserId',
                                          dataKey: '8853388_root.body.oaUserId',
                                          value: {
                                            type: ['customize'],
                                            code: '$reply_567541?.resultData[0].userId$',
                                          },
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-1',
                                        },
                                        {
                                          code: 'pageSize',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'root.body.pageSize',
                                          compType: 'Input',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-4',
                                          id: 'root.body.pageSize',
                                          dataKey: '8853388_root.body.pageSize',
                                          value: {
                                            type: ['customize'],
                                            code: '10000',
                                          },
                                        },
                                        {
                                          code: 'groupName',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'root.body.groupName',
                                          compType: 'Input',
                                          name: 'groupName',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-2',
                                        },
                                        {
                                          code: 'groupId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'root.body.groupId',
                                          compType: 'Input',
                                          name: 'groupId',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-3',
                                        },
                                      ],
                                      _id: 'root.body',
                                      compType: 'Input',
                                      parents: ['root'],
                                      id: 'root.body',
                                      dataKey: '8853388_root.body',
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-3',
                                    },
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
                                  ],
                                  _id: 'root',
                                  compType: 'Input',
                                  isRoot: true,
                                  parents: [],
                                  key: '0',
                                  id: 'root',
                                  dataKey: '8853388_root',
                                },
                              ],
                              _sourceName: '查询集团信息-hdb',
                            },
                            line_number: 18,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 170607584685535900,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '18062574',
                                  pageJsonId: '6584614',
                                  dataSourceId: 166609528011893860,
                                  dataSourceName: 'groupList',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
                                    {
                                      code: 'total',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '3933013',
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      parentKey: '1',
                                      parentType: 'object',
                                      showInput: true,
                                      _codePath: ['total'],
                                      _idpath: ['3933013'],
                                      value: {
                                        type: ['customize'],
                                        code: '$reply_179878?.resultData.total$',
                                      },
                                    },
                                    {
                                      code: 'current',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '499923',
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      parentKey: '1',
                                      parentType: 'object',
                                      showInput: true,
                                      _codePath: ['current'],
                                      _idpath: ['499923'],
                                      value: {
                                        type: ['customize'],
                                        code: '$reply_179878?.resultData.current$',
                                      },
                                    },
                                    {
                                      code: 'size',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '61818',
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      parentKey: '1',
                                      parentType: 'object',
                                      showInput: true,
                                      _codePath: ['size'],
                                      _idpath: ['61818'],
                                      value: { type: ['customize'], code: '5' },
                                    },
                                    {
                                      code: 'records',
                                      children: [
                                        {
                                          code: 'orgZone',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '099671',
                                          initialData: {
                                            type: 'static',
                                            value: '1010252',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'orgZone'],
                                          _idpath: ['687998', '099671'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'enterpriseKind',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '7374046',
                                          initialData: { type: 'static' },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'enterpriseKind',
                                          ],
                                          _idpath: ['687998', '7374046'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'groupId',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '9406922',
                                          initialData: {
                                            type: 'static',
                                            value: '5911920813',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'groupId'],
                                          _idpath: ['687998', '9406922'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'orgTypeName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '253375',
                                          initialData: { type: 'static' },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'orgTypeName'],
                                          _idpath: ['687998', '253375'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'groupLevelName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '349387',
                                          initialData: {
                                            type: 'static',
                                            value: '待定',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'groupLevelName',
                                          ],
                                          _idpath: ['687998', '349387'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'managerName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '5592773',
                                          initialData: {
                                            type: 'static',
                                            value: '黄娜娜',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'managerName'],
                                          _idpath: ['687998', '5592773'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'contactTel',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '865281',
                                          initialData: {
                                            type: 'static',
                                            value: '13444444444',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'contactTel'],
                                          _idpath: ['687998', '865281'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'orgType',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '779178',
                                          initialData: { type: 'static' },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'orgType'],
                                          _idpath: ['687998', '779178'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'tradeclass',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '835847',
                                          initialData: {
                                            type: 'static',
                                            value: '101',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'tradeclass'],
                                          _idpath: ['687998', '835847'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'enterpriseScope',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '796505',
                                          initialData: {
                                            type: 'static',
                                            value: '1',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'enterpriseScope',
                                          ],
                                          _idpath: ['687998', '796505'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'homeCounty',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '1194342',
                                          initialData: {
                                            type: 'static',
                                            value: '101',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'homeCounty'],
                                          _idpath: ['687998', '1194342'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'orgZoneName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '432661',
                                          initialData: {
                                            type: 'static',
                                            value: '鼓楼后台支撑组',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'orgZoneName'],
                                          _idpath: ['687998', '432661'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'homeCity',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '219497',
                                          initialData: {
                                            type: 'static',
                                            value: '591',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'homeCity'],
                                          _idpath: ['687998', '219497'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'statusName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '536606',
                                          initialData: {
                                            type: 'static',
                                            value: '正使用',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'statusName'],
                                          _idpath: ['687998', '536606'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'tradeclassTopName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '224454',
                                          initialData: {
                                            type: 'static',
                                            value: '农、林、牧、渔业',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'tradeclassTopName',
                                          ],
                                          _idpath: ['687998', '224454'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'tradeclassName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '842265',
                                          initialData: {
                                            type: 'static',
                                            value: '农业',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'tradeclassName',
                                          ],
                                          _idpath: ['687998', '842265'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'managerContactTel',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '438869',
                                          initialData: { type: 'static' },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'managerContactTel',
                                          ],
                                          _idpath: ['687998', '438869'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'enterpriseScopeName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '894927',
                                          initialData: {
                                            type: 'static',
                                            value: '跨国集团',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'enterpriseScopeName',
                                          ],
                                          _idpath: ['687998', '894927'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'homeCityName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '659661',
                                          initialData: {
                                            type: 'static',
                                            value: '福州',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'homeCityName',
                                          ],
                                          _idpath: ['687998', '659661'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'managerId',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '938307',
                                          initialData: {
                                            type: 'static',
                                            value: '1010161',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'managerId'],
                                          _idpath: ['687998', '938307'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'valueLevel',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '418984',
                                          initialData: { type: 'static' },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'valueLevel'],
                                          _idpath: ['687998', '418984'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'groupName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '821461',
                                          initialData: {
                                            type: 'static',
                                            value: 'Test集团Test集团455',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: ['records', 'groupName'],
                                          _idpath: ['687998', '821461'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'enterpriseKindName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '755924',
                                          initialData: { type: 'static' },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'enterpriseKindName',
                                          ],
                                          _idpath: ['687998', '755924'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'tradeclassTop',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '059337',
                                          initialData: {
                                            type: 'static',
                                            value: '1',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'tradeclassTop',
                                          ],
                                          _idpath: ['687998', '059337'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'valueLevelName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '9398467',
                                          initialData: { type: 'static' },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'valueLevelName',
                                          ],
                                          _idpath: ['687998', '9398467'],
                                          parentCode: 'records',
                                        },
                                        {
                                          code: 'homeCountyName',
                                          name: '属性',
                                          type: 'string',
                                          attrId: '005949',
                                          initialData: {
                                            type: 'static',
                                            value: '鼓楼',
                                          },
                                          parentKey: 'records',
                                          parentType: 'object',
                                          showInput: false,
                                          _codePath: [
                                            'records',
                                            'homeCountyName',
                                          ],
                                          _idpath: ['687998', '005949'],
                                          parentCode: 'records',
                                        },
                                      ],
                                      name: '',
                                      type: 'objectArray',
                                      attrId: '687998',
                                      initialData: { type: 'static' },
                                      parentKey: '1',
                                      parentType: 'object',
                                      showInput: true,
                                      value: {
                                        type: ['customize'],
                                        code: '$reply_179878?.resultData.instances$',
                                      },
                                      _codePath: ['records'],
                                      _idpath: ['687998'],
                                    },
                                  ],
                                  operateType: 1,
                                  onlySetPatch: true,
                                  otherObjectArrayOptions: {},
                                  targetDataSourcePaths: [],
                                },
                                line_number: 19,
                                callback1: [],
                                callback2: [],
                              },
                              {
                                type: 'reloadTableData',
                                dataId: 170607584685505660,
                                options: {
                                  compId: 'Table_08098',
                                  compLib: 'comm',
                                  pageJsonId: '6584614',
                                  compName: 'Table',
                                  id: '4332004',
                                  data: '$reply_179878?.resultData.instances$',
                                },
                                line_number: 20,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
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
    eventDataifelse104.params = [] || [];
    CMDGenerator(eventDataifelse104, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_6584614__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_6584614_1',
          uid: 'View_6584614_1',
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
          overflowY: 'visible',
          width: 'auto',
          height: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_6584614_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_921869',
            uid: 'View_921869',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_921869')}
          {...injectData}
        >
          <Form
            name={'查询条件表单'}
            colSpan={6}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_0032615'}
            $$componentItem={{
              id: 'Form_0032615',
              uid: 'Form_0032615',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_0032615')}
            {...injectData}
          >
            <Select
              name={'工号'}
              size={'default'}
              selfSpan={6}
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
              formItemIndex={0}
              fieldName={'oaUserId'}
              allowClear={true}
              $$componentItem={{
                id: 'Select_441932',
                uid: 'Select_441932',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatasetDataSource78: any = [
                  {
                    type: 'setDataSource',
                    dataId: 169079596255414850,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '69017',
                      pageJsonId: '6584614',
                      dataSourceId: 169079595648383260,
                      dataSourceName: 'pageParam',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '778101',
                          code: 'isChanage',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: { type: ['customize'], code: '1' },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource78.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatasetDataSource78, { e }, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_441932')}
              {...injectData}
            />
            <Input
              name={'集团编码'}
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
              fieldName={'groupId'}
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
                id: 'Input_054313',
                uid: 'Input_054313',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_054313')}
              {...injectData}
            />
            <Input
              name={'集团名称'}
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
              formItemIndex={2}
              fieldName={'groupName'}
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
                id: 'Input_3720854',
                uid: 'Input_3720854',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3720854')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_394487_610869',
                uid: 'View_394487_610869',
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
                textAlign: 'left',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_394487_610869')}
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
                  id: 'Button_67568_744242',
                  uid: 'Button_67568_744242',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                onClick={(e: any) => {
                  const eventDatagetCurrentFormValues21: any = [
                    {
                      type: 'getCurrentFormValues',
                      dataId: 167947031274284400,
                      options: {
                        compId: 'Form_0032615',
                        compLib: 'comm',
                        pageJsonId: '6584614',
                        compName: 'Form',
                        id: '359239',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 167947075322876350,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '730763',
                            pageJsonId: '6584614',
                            value: ['$Form_0032615$'],
                          },
                          line_number: 2,
                        },
                        {
                          type: 'customActionCode',
                          dataId: 167947339454988100,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '226637',
                            pageJsonId: '6584614',
                            code: 'function main(data,state,success,fail){if(Form_0032615.oaUserId||Form_0032615.groupId||Form_0032615.groupName){success()}else{fail()}};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'ifelse',
                              shielding: true,
                              condition: [
                                {
                                  condId: '626396',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$data.pageParam.isChanage$',
                                    operate: '==',
                                    manualValue: '1',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 169079605649336740,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 169079608776372400,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 169079609932521700,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 169079609932686050,
                                          children: [
                                            {
                                              dataName: 'condition',
                                              dataId: 169079609932626270,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169079609932632100,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169079609932607740,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169079609932650140,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169079609932622460,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                              shielding: true,
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169079609932647200,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
                                                              shielding: true,
                                                            },
                                                          ],
                                                          todoOptions: [
                                                            'selectAllDataSource',
                                                            'dataSourceSetValue',
                                                            'onlySetPatch',
                                                          ],
                                                          options: {
                                                            compId:
                                                              'setDataSource',
                                                            compName: 'page',
                                                            id: '4923263',
                                                            pageJsonId:
                                                              '6584614',
                                                            dataSourceId: 166609528011893860,
                                                            dataSourceName:
                                                              'groupList',
                                                            dataSourceRelType:
                                                              'custom',
                                                            dataSourceSetValue:
                                                              [
                                                                {
                                                                  code: 'total',
                                                                  name: '属性',
                                                                  type: 'string',
                                                                  attrId:
                                                                    '3933013',
                                                                  initialData: {
                                                                    type: 'static',
                                                                    value: '',
                                                                  },
                                                                  parentKey:
                                                                    '1',
                                                                  parentType:
                                                                    'object',
                                                                  showInput: true,
                                                                  _codePath: [
                                                                    'total',
                                                                  ],
                                                                  _idpath: [
                                                                    '3933013',
                                                                  ],
                                                                },
                                                                {
                                                                  code: 'current',
                                                                  name: '属性',
                                                                  type: 'string',
                                                                  attrId:
                                                                    '499923',
                                                                  initialData: {
                                                                    type: 'static',
                                                                    value: '',
                                                                  },
                                                                  parentKey:
                                                                    '1',
                                                                  parentType:
                                                                    'object',
                                                                  showInput: true,
                                                                  _codePath: [
                                                                    'current',
                                                                  ],
                                                                  _idpath: [
                                                                    '499923',
                                                                  ],
                                                                },
                                                                {
                                                                  code: 'size',
                                                                  name: '属性',
                                                                  type: 'string',
                                                                  attrId:
                                                                    '61818',
                                                                  initialData: {
                                                                    type: 'static',
                                                                    value: '',
                                                                  },
                                                                  parentKey:
                                                                    '1',
                                                                  parentType:
                                                                    'object',
                                                                  showInput: true,
                                                                  _codePath: [
                                                                    'size',
                                                                  ],
                                                                  _idpath: [
                                                                    '61818',
                                                                  ],
                                                                },
                                                                {
                                                                  code: 'records',
                                                                  children: [
                                                                    {
                                                                      code: 'orgZone',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '099671',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '1010252',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'orgZone',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '099671',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'enterpriseKind',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '7374046',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'enterpriseKind',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '7374046',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'groupId',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '9406922',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '5911920813',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'groupId',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '9406922',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'orgTypeName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '253375',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'orgTypeName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '253375',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'groupLevelName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '349387',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '待定',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'groupLevelName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '349387',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'managerName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '5592773',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '黄娜娜',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'managerName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '5592773',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'contactTel',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '865281',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '13444444444',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'contactTel',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '865281',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'orgType',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '779178',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'orgType',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '779178',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'tradeclass',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '835847',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '101',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'tradeclass',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '835847',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'enterpriseScope',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '796505',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '1',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'enterpriseScope',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '796505',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'homeCounty',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '1194342',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '101',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'homeCounty',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '1194342',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'orgZoneName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '432661',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '鼓楼后台支撑组',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'orgZoneName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '432661',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'homeCity',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '219497',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '591',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'homeCity',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '219497',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'statusName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '536606',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '正使用',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'statusName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '536606',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'tradeclassTopName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '224454',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '农、林、牧、渔业',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'tradeclassTopName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '224454',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'tradeclassName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '842265',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '农业',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'tradeclassName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '842265',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'managerContactTel',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '438869',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'managerContactTel',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '438869',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'enterpriseScopeName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '894927',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '跨国集团',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'enterpriseScopeName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '894927',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'homeCityName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '659661',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '福州',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'homeCityName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '659661',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'managerId',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '938307',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '1010161',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'managerId',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '938307',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'valueLevel',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '418984',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'valueLevel',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '418984',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'groupName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '821461',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            'Test集团Test集团455',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'groupName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '821461',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'enterpriseKindName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '755924',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'enterpriseKindName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '755924',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'tradeclassTop',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '059337',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '1',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'tradeclassTop',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '059337',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'valueLevelName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '9398467',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'valueLevelName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '9398467',
                                                                      ],
                                                                    },
                                                                    {
                                                                      code: 'homeCountyName',
                                                                      name: '属性',
                                                                      type: 'string',
                                                                      attrId:
                                                                        '005949',
                                                                      initialData:
                                                                        {
                                                                          type: 'static',
                                                                          value:
                                                                            '鼓楼',
                                                                        },
                                                                      parentKey:
                                                                        'records',
                                                                      parentType:
                                                                        'object',
                                                                      showInput: false,
                                                                      _codePath:
                                                                        [
                                                                          'records',
                                                                          'homeCountyName',
                                                                        ],
                                                                      _idpath: [
                                                                        '687998',
                                                                        '005949',
                                                                      ],
                                                                    },
                                                                  ],
                                                                  name: '',
                                                                  type: 'objectArray',
                                                                  attrId:
                                                                    '687998',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  parentKey:
                                                                    '1',
                                                                  parentType:
                                                                    'object',
                                                                  showInput: true,
                                                                  _codePath: [
                                                                    'records',
                                                                  ],
                                                                  _idpath: [
                                                                    '687998',
                                                                  ],
                                                                },
                                                              ],
                                                            operateType: 1,
                                                            onlySetPatch: true,
                                                            otherObjectArrayOptions:
                                                              {},
                                                            targetDataSourcePaths:
                                                              [],
                                                          },
                                                          actionObjId:
                                                            'setDataSource',
                                                          actionObjName: 'page',
                                                          value:
                                                            'setDataSource',
                                                          shielding: true,
                                                          line_number: 15,
                                                        },
                                                      ],
                                                      value: 'callback1',
                                                      params: [],
                                                      shielding: true,
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169079609932674780,
                                                      children: [],
                                                      value: 'callback2',
                                                      params: [],
                                                      shielding: true,
                                                    },
                                                  ],
                                                  todoOptions: [
                                                    'actionTitle',
                                                    'editorCode',
                                                  ],
                                                  options: {
                                                    compId: 'customActionCode',
                                                    compName: 'page',
                                                    id: '3287548',
                                                    pageJsonId: '6584614',
                                                    code: 'function main(data,state,success,fail){data.groupList.records=[];data.groupList.total=0;data.groupList.current=1;data.groupList.size=5;success()};',
                                                  },
                                                  actionObjId:
                                                    'customActionCode',
                                                  actionObjName: 'page',
                                                  value: 'customActionCode',
                                                  shielding: true,
                                                  line_number: 14,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 169079609932692380,
                                                  children: [],
                                                  todoOptions: ['valueArray'],
                                                  options: {
                                                    compId: 'debug',
                                                    compName: 'system',
                                                    id: '45722',
                                                    pageJsonId: '6584614',
                                                    value: ['这边？？？？？'],
                                                  },
                                                  actionObjId: 'debug',
                                                  actionObjName: 'system',
                                                  value: 'console',
                                                  shielding: true,
                                                  line_number: 16,
                                                },
                                              ],
                                              elseIfs: [
                                                {
                                                  dataName: 'elseIf',
                                                  dataId: 169079609932672260,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 169079609932603650,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 169079609932665020,
                                                          children: [],
                                                          value: 'callback1',
                                                          params: [],
                                                          shielding: true,
                                                        },
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 169079609932699100,
                                                          children: [],
                                                          value: 'callback2',
                                                          params: [],
                                                          shielding: true,
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
                                                        id: '944871',
                                                        pageJsonId: '6584614',
                                                        dataSourceId: 166609528011893860,
                                                        dataSourceName:
                                                          'groupList',
                                                        dataSourceRelType:
                                                          'custom',
                                                        dataSourceSetValue: [
                                                          {
                                                            code: 'total',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '3933013',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '$reply_1258424.resultData.total$',
                                                            },
                                                          },
                                                          {
                                                            code: 'current',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '499923',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '$reply_1258424.resultData.current$',
                                                            },
                                                          },
                                                          {
                                                            code: 'size',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '61818',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '$reply_1258424.resultData.size$',
                                                            },
                                                          },
                                                          {
                                                            code: 'records',
                                                            children: [
                                                              {
                                                                code: 'orgZone',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '099671',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '1010252',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'enterpriseKind',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '7374046',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'groupId',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '9406922',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '5911920813',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'orgTypeName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '253375',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'groupLevelName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '349387',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '待定',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'managerName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '5592773',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '黄娜娜',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'contactTel',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '865281',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '13444444444',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'orgType',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '779178',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'tradeclass',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '835847',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '101',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'enterpriseScope',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '796505',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '1',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'homeCounty',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '1194342',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '101',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'orgZoneName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '432661',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '鼓楼后台支撑组',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'homeCity',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '219497',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '591',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'statusName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '536606',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '正使用',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'tradeclassTopName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '224454',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '农、林、牧、渔业',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'tradeclassName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '842265',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '农业',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'managerContactTel',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '438869',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'enterpriseScopeName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '894927',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '跨国集团',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'homeCityName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '659661',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '福州',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'managerId',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '938307',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '1010161',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'valueLevel',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '418984',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'groupName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '821461',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    'Test集团Test集团455',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'enterpriseKindName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '755924',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'tradeclassTop',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '059337',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '1',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'valueLevelName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '9398467',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'homeCountyName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '005949',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '鼓楼',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                            ],
                                                            name: '',
                                                            type: 'object',
                                                            attrId: '687998',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '$reply_1258424.resultData.records$',
                                                            },
                                                          },
                                                        ],
                                                        operateType: 1,
                                                        onlySetPatch: true,
                                                        otherObjectArrayOptions:
                                                          {},
                                                        targetDataSourcePaths:
                                                          [],
                                                      },
                                                      actionObjId:
                                                        'setDataSource',
                                                      actionObjName: 'page',
                                                      value: 'setDataSource',
                                                      shielding: true,
                                                      line_number: 17,
                                                    },
                                                    {
                                                      dataName: 'action',
                                                      dataId: 169079609932686900,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 169079609932607040,
                                                          children: [],
                                                          value: 'callback1',
                                                          params: [],
                                                          shielding: true,
                                                        },
                                                      ],
                                                      todoOptions: [
                                                        'dataSource',
                                                        'total',
                                                        'curPage',
                                                      ],
                                                      options: {
                                                        compId: 'Table_08098',
                                                        compLib: 'comm',
                                                        pageJsonId: '6584614',
                                                        compName: 'Table',
                                                        id: '060439',
                                                        data: '$reply_1258424?.resultData.records$',
                                                        total:
                                                          '$reply_1258424?.resultData.total$',
                                                        current:
                                                          '$reply_1258424?.resultData.current$',
                                                      },
                                                      actionObjId:
                                                        'Table_08098',
                                                      actionObjName: 'Table',
                                                      value: 'reloadTableData',
                                                      compLib: 'comm',
                                                      shielding: true,
                                                      line_number: 18,
                                                    },
                                                  ],
                                                  condition: [],
                                                  shielding: true,
                                                  callback: [
                                                    {
                                                      type: 'setDataSource',
                                                      dataId: 169079609932603650,
                                                      shielding: true,
                                                      options: {
                                                        compId: 'setDataSource',
                                                        compName: 'page',
                                                        id: '944871',
                                                        pageJsonId: '6584614',
                                                        dataSourceId: 166609528011893860,
                                                        dataSourceName:
                                                          'groupList',
                                                        dataSourceRelType:
                                                          'custom',
                                                        dataSourceSetValue: [
                                                          {
                                                            code: 'total',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '3933013',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '$reply_1258424.resultData.total$',
                                                            },
                                                          },
                                                          {
                                                            code: 'current',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '499923',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '$reply_1258424.resultData.current$',
                                                            },
                                                          },
                                                          {
                                                            code: 'size',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '61818',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '$reply_1258424.resultData.size$',
                                                            },
                                                          },
                                                          {
                                                            code: 'records',
                                                            children: [
                                                              {
                                                                code: 'orgZone',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '099671',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '1010252',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'enterpriseKind',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '7374046',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'groupId',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '9406922',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '5911920813',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'orgTypeName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '253375',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'groupLevelName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '349387',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '待定',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'managerName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '5592773',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '黄娜娜',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'contactTel',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '865281',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '13444444444',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'orgType',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '779178',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'tradeclass',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '835847',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '101',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'enterpriseScope',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '796505',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '1',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'homeCounty',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '1194342',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '101',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'orgZoneName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '432661',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '鼓楼后台支撑组',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'homeCity',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '219497',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '591',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'statusName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '536606',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '正使用',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'tradeclassTopName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '224454',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '农、林、牧、渔业',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'tradeclassName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '842265',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '农业',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'managerContactTel',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '438869',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'enterpriseScopeName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '894927',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '跨国集团',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'homeCityName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '659661',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '福州',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'managerId',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '938307',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    '1010161',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'valueLevel',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '418984',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'groupName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '821461',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value:
                                                                    'Test集团Test集团455',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'enterpriseKindName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '755924',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'tradeclassTop',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '059337',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '1',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'valueLevelName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '9398467',
                                                                initialData: {
                                                                  type: 'static',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                              {
                                                                code: 'homeCountyName',
                                                                name: '属性',
                                                                type: 'string',
                                                                attrId:
                                                                  '005949',
                                                                initialData: {
                                                                  type: 'static',
                                                                  value: '鼓楼',
                                                                },
                                                                parentKey:
                                                                  'records',
                                                                parentType:
                                                                  'object',
                                                                showInput: true,
                                                              },
                                                            ],
                                                            name: '',
                                                            type: 'object',
                                                            attrId: '687998',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: '$reply_1258424.resultData.records$',
                                                            },
                                                          },
                                                        ],
                                                        operateType: 1,
                                                        onlySetPatch: true,
                                                        otherObjectArrayOptions:
                                                          {},
                                                        targetDataSourcePaths:
                                                          [],
                                                      },
                                                      line_number: 17,
                                                      callback1: [],
                                                      callback2: [],
                                                    },
                                                    {
                                                      type: 'reloadTableData',
                                                      dataId: 169079609932686900,
                                                      shielding: true,
                                                      options: {
                                                        compId: 'Table_08098',
                                                        compLib: 'comm',
                                                        pageJsonId: '6584614',
                                                        compName: 'Table',
                                                        id: '060439',
                                                        data: '$reply_1258424?.resultData.records$',
                                                        total:
                                                          '$reply_1258424?.resultData.total$',
                                                        current:
                                                          '$reply_1258424?.resultData.current$',
                                                      },
                                                      line_number: 18,
                                                      callback1: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                              condition: [
                                                {
                                                  condId: '521618',
                                                  options: {
                                                    context:
                                                      '$reply_1258424.resultData.records$',
                                                    operate: 'empty',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              shielding: true,
                                              line_number: 13,
                                            },
                                          ],
                                          value: 'callback1',
                                          params: [],
                                          shielding: true,
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 169079609932622530,
                                          children: [],
                                          value: 'callback2',
                                          params: [],
                                          shielding: true,
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
                                        id: '1258424',
                                        pageJsonId: '6584614',
                                        sync: false,
                                        actionTitle: '',
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode:
                                          'queryGroupCustomerPage',
                                        _apiCode: 'queryGroupCustomerPage',
                                        _source: 'rhin',
                                        _sourceName: '集团列表分页',
                                        _serviceId: '985117767971278848',
                                        _serviceTitle:
                                          '集团列表分页: queryGroupCustomerPage',
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
                                                dataKey: '46814_root.header',
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
                                                dataKey: '46814_root.path',
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
                                                dataKey: '46814_root.query',
                                              },
                                              {
                                                code: 'body',
                                                name: '请求体',
                                                attrType: 'object',
                                                children: [
                                                  {
                                                    code: 'pageSize',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.pageSize',
                                                    compType: 'Input',
                                                    name: 'pageSize',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-0',
                                                    id: 'root.body.pageSize',
                                                    dataKey:
                                                      '46814_root.body.pageSize',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '5',
                                                    },
                                                  },
                                                  {
                                                    code: 'pageNum',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.pageNum',
                                                    compType: 'Input',
                                                    name: 'pageNum',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-1',
                                                    id: 'root.body.pageNum',
                                                    dataKey:
                                                      '46814_root.body.pageNum',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '1',
                                                    },
                                                  },
                                                  {
                                                    code: 'oaUserId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.oaUserId',
                                                    compType: 'Input',
                                                    name: 'oaUserId',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-2',
                                                    id: 'root.body.oaUserId',
                                                    dataKey:
                                                      '46814_root.body.oaUserId',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'oaUserId',
                                                    },
                                                  },
                                                  {
                                                    code: 'groupName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.groupName',
                                                    compType: 'Input',
                                                    name: 'groupName',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-3',
                                                    id: 'root.body.groupName',
                                                    dataKey:
                                                      '46814_root.body.groupName',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'groupName',
                                                    },
                                                  },
                                                  {
                                                    code: 'groupId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.groupId',
                                                    compType: 'Input',
                                                    name: 'groupId',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-4',
                                                    id: 'root.body.groupId',
                                                    dataKey:
                                                      '46814_root.body.groupId',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'groupId',
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
                                                dataKey: '46814_root.body',
                                              },
                                            ],
                                            _id: 'root',
                                            compType: 'Input',
                                            isRoot: true,
                                            parents: [],
                                            key: '0',
                                            id: 'root',
                                            dataKey: '46814_root',
                                          },
                                        ],
                                      },
                                      actionObjId: 'apiRequest',
                                      actionObjName: 'system',
                                      value: 'apiRequest',
                                      shielding: true,
                                      line_number: 12,
                                    },
                                  ],
                                  condition: [],
                                  value: 'elseIf',
                                  shielding: true,
                                  callback: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 169079609932521700,
                                      shielding: true,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '1258424',
                                        pageJsonId: '6584614',
                                        sync: false,
                                        actionTitle: '',
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode:
                                          'queryGroupCustomerPage',
                                        _apiCode: 'queryGroupCustomerPage',
                                        _source: 'rhin',
                                        _sourceName: '集团列表分页',
                                        _serviceId: '985117767971278848',
                                        _serviceTitle:
                                          '集团列表分页: queryGroupCustomerPage',
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
                                                dataKey: '46814_root.header',
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
                                                dataKey: '46814_root.path',
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
                                                dataKey: '46814_root.query',
                                              },
                                              {
                                                code: 'body',
                                                name: '请求体',
                                                attrType: 'object',
                                                children: [
                                                  {
                                                    code: 'pageSize',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.pageSize',
                                                    compType: 'Input',
                                                    name: 'pageSize',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-0',
                                                    id: 'root.body.pageSize',
                                                    dataKey:
                                                      '46814_root.body.pageSize',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '5',
                                                    },
                                                  },
                                                  {
                                                    code: 'pageNum',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.pageNum',
                                                    compType: 'Input',
                                                    name: 'pageNum',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-1',
                                                    id: 'root.body.pageNum',
                                                    dataKey:
                                                      '46814_root.body.pageNum',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '1',
                                                    },
                                                  },
                                                  {
                                                    code: 'oaUserId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.oaUserId',
                                                    compType: 'Input',
                                                    name: 'oaUserId',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-2',
                                                    id: 'root.body.oaUserId',
                                                    dataKey:
                                                      '46814_root.body.oaUserId',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'oaUserId',
                                                    },
                                                  },
                                                  {
                                                    code: 'groupName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.groupName',
                                                    compType: 'Input',
                                                    name: 'groupName',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-3',
                                                    id: 'root.body.groupName',
                                                    dataKey:
                                                      '46814_root.body.groupName',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'groupName',
                                                    },
                                                  },
                                                  {
                                                    code: 'groupId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.groupId',
                                                    compType: 'Input',
                                                    name: 'groupId',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-4',
                                                    id: 'root.body.groupId',
                                                    dataKey:
                                                      '46814_root.body.groupId',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'groupId',
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
                                                dataKey: '46814_root.body',
                                              },
                                            ],
                                            _id: 'root',
                                            compType: 'Input',
                                            isRoot: true,
                                            parents: [],
                                            key: '0',
                                            id: 'root',
                                            dataKey: '46814_root',
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
                                              condId: '521618',
                                              options: {
                                                context:
                                                  '$reply_1258424.resultData.records$',
                                                operate: 'empty',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 169079609932626270,
                                          elseIfs: [
                                            {
                                              dataName: 'elseIf',
                                              dataId: 169079609932672260,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169079609932603650,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169079609932665020,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                      shielding: true,
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169079609932699100,
                                                      children: [],
                                                      value: 'callback2',
                                                      params: [],
                                                      shielding: true,
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
                                                    id: '944871',
                                                    pageJsonId: '6584614',
                                                    dataSourceId: 166609528011893860,
                                                    dataSourceName: 'groupList',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceSetValue: [
                                                      {
                                                        code: 'total',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '3933013',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$reply_1258424.resultData.total$',
                                                        },
                                                      },
                                                      {
                                                        code: 'current',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '499923',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$reply_1258424.resultData.current$',
                                                        },
                                                      },
                                                      {
                                                        code: 'size',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '61818',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$reply_1258424.resultData.size$',
                                                        },
                                                      },
                                                      {
                                                        code: 'records',
                                                        children: [
                                                          {
                                                            code: 'orgZone',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '099671',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1010252',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'enterpriseKind',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '7374046',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'groupId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '9406922',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '5911920813',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'orgTypeName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '253375',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'groupLevelName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '349387',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '待定',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'managerName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '5592773',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '黄娜娜',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'contactTel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '865281',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '13444444444',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'orgType',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '779178',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'tradeclass',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '835847',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '101',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'enterpriseScope',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '796505',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'homeCounty',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '1194342',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '101',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'orgZoneName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '432661',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '鼓楼后台支撑组',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'homeCity',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '219497',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '591',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'statusName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '536606',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '正使用',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'tradeclassTopName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '224454',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '农、林、牧、渔业',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'tradeclassName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '842265',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '农业',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'managerContactTel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '438869',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'enterpriseScopeName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '894927',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '跨国集团',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'homeCityName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '659661',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '福州',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'managerId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '938307',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1010161',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'valueLevel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '418984',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'groupName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '821461',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                'Test集团Test集团455',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'enterpriseKindName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '755924',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'tradeclassTop',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '059337',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'valueLevelName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '9398467',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'homeCountyName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '005949',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '鼓楼',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                        ],
                                                        name: '',
                                                        type: 'object',
                                                        attrId: '687998',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$reply_1258424.resultData.records$',
                                                        },
                                                      },
                                                    ],
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                    targetDataSourcePaths: [],
                                                  },
                                                  actionObjId: 'setDataSource',
                                                  actionObjName: 'page',
                                                  value: 'setDataSource',
                                                  shielding: true,
                                                  line_number: 17,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 169079609932686900,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169079609932607040,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                      shielding: true,
                                                    },
                                                  ],
                                                  todoOptions: [
                                                    'dataSource',
                                                    'total',
                                                    'curPage',
                                                  ],
                                                  options: {
                                                    compId: 'Table_08098',
                                                    compLib: 'comm',
                                                    pageJsonId: '6584614',
                                                    compName: 'Table',
                                                    id: '060439',
                                                    data: '$reply_1258424?.resultData.records$',
                                                    total:
                                                      '$reply_1258424?.resultData.total$',
                                                    current:
                                                      '$reply_1258424?.resultData.current$',
                                                  },
                                                  actionObjId: 'Table_08098',
                                                  actionObjName: 'Table',
                                                  value: 'reloadTableData',
                                                  compLib: 'comm',
                                                  shielding: true,
                                                  line_number: 18,
                                                },
                                              ],
                                              condition: [],
                                              shielding: true,
                                              callback: [
                                                {
                                                  type: 'setDataSource',
                                                  dataId: 169079609932603650,
                                                  shielding: true,
                                                  options: {
                                                    compId: 'setDataSource',
                                                    compName: 'page',
                                                    id: '944871',
                                                    pageJsonId: '6584614',
                                                    dataSourceId: 166609528011893860,
                                                    dataSourceName: 'groupList',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceSetValue: [
                                                      {
                                                        code: 'total',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '3933013',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$reply_1258424.resultData.total$',
                                                        },
                                                      },
                                                      {
                                                        code: 'current',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '499923',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$reply_1258424.resultData.current$',
                                                        },
                                                      },
                                                      {
                                                        code: 'size',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '61818',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$reply_1258424.resultData.size$',
                                                        },
                                                      },
                                                      {
                                                        code: 'records',
                                                        children: [
                                                          {
                                                            code: 'orgZone',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '099671',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1010252',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'enterpriseKind',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '7374046',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'groupId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '9406922',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '5911920813',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'orgTypeName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '253375',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'groupLevelName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '349387',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '待定',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'managerName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '5592773',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '黄娜娜',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'contactTel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '865281',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '13444444444',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'orgType',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '779178',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'tradeclass',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '835847',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '101',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'enterpriseScope',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '796505',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'homeCounty',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '1194342',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '101',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'orgZoneName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '432661',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '鼓楼后台支撑组',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'homeCity',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '219497',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '591',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'statusName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '536606',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '正使用',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'tradeclassTopName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '224454',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '农、林、牧、渔业',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'tradeclassName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '842265',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '农业',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'managerContactTel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '438869',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'enterpriseScopeName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '894927',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '跨国集团',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'homeCityName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '659661',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '福州',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'managerId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '938307',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1010161',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'valueLevel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '418984',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'groupName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '821461',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                'Test集团Test集团455',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'enterpriseKindName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '755924',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'tradeclassTop',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '059337',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'valueLevelName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '9398467',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                          {
                                                            code: 'homeCountyName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '005949',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '鼓楼',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: true,
                                                          },
                                                        ],
                                                        name: '',
                                                        type: 'object',
                                                        attrId: '687998',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        value: {
                                                          type: ['customize'],
                                                          code: '$reply_1258424.resultData.records$',
                                                        },
                                                      },
                                                    ],
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                    targetDataSourcePaths: [],
                                                  },
                                                  line_number: 17,
                                                  callback1: [],
                                                  callback2: [],
                                                },
                                                {
                                                  type: 'reloadTableData',
                                                  dataId: 169079609932686900,
                                                  shielding: true,
                                                  options: {
                                                    compId: 'Table_08098',
                                                    compLib: 'comm',
                                                    pageJsonId: '6584614',
                                                    compName: 'Table',
                                                    id: '060439',
                                                    data: '$reply_1258424?.resultData.records$',
                                                    total:
                                                      '$reply_1258424?.resultData.total$',
                                                    current:
                                                      '$reply_1258424?.resultData.current$',
                                                  },
                                                  line_number: 18,
                                                  callback1: [],
                                                },
                                              ],
                                            },
                                          ],
                                          line_number: 13,
                                          callback1: [
                                            {
                                              type: 'customActionCode',
                                              dataId: 169079609932632100,
                                              shielding: true,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '3287548',
                                                pageJsonId: '6584614',
                                                code: 'function main(data,state,success,fail){data.groupList.records=[];data.groupList.total=0;data.groupList.current=1;data.groupList.size=5;success()};',
                                              },
                                              line_number: 14,
                                              callback1: [
                                                {
                                                  type: 'setDataSource',
                                                  dataId: 169079609932650140,
                                                  shielding: true,
                                                  options: {
                                                    compId: 'setDataSource',
                                                    compName: 'page',
                                                    id: '4923263',
                                                    pageJsonId: '6584614',
                                                    dataSourceId: 166609528011893860,
                                                    dataSourceName: 'groupList',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceSetValue: [
                                                      {
                                                        code: 'total',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '3933013',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        _codePath: ['total'],
                                                        _idpath: ['3933013'],
                                                      },
                                                      {
                                                        code: 'current',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '499923',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        _codePath: ['current'],
                                                        _idpath: ['499923'],
                                                      },
                                                      {
                                                        code: 'size',
                                                        name: '属性',
                                                        type: 'string',
                                                        attrId: '61818',
                                                        initialData: {
                                                          type: 'static',
                                                          value: '',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        _codePath: ['size'],
                                                        _idpath: ['61818'],
                                                      },
                                                      {
                                                        code: 'records',
                                                        children: [
                                                          {
                                                            code: 'orgZone',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '099671',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1010252',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'orgZone',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '099671',
                                                            ],
                                                          },
                                                          {
                                                            code: 'enterpriseKind',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '7374046',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'enterpriseKind',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '7374046',
                                                            ],
                                                          },
                                                          {
                                                            code: 'groupId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '9406922',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '5911920813',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'groupId',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '9406922',
                                                            ],
                                                          },
                                                          {
                                                            code: 'orgTypeName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '253375',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'orgTypeName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '253375',
                                                            ],
                                                          },
                                                          {
                                                            code: 'groupLevelName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '349387',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '待定',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'groupLevelName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '349387',
                                                            ],
                                                          },
                                                          {
                                                            code: 'managerName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '5592773',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '黄娜娜',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'managerName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '5592773',
                                                            ],
                                                          },
                                                          {
                                                            code: 'contactTel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '865281',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '13444444444',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'contactTel',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '865281',
                                                            ],
                                                          },
                                                          {
                                                            code: 'orgType',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '779178',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'orgType',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '779178',
                                                            ],
                                                          },
                                                          {
                                                            code: 'tradeclass',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '835847',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '101',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'tradeclass',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '835847',
                                                            ],
                                                          },
                                                          {
                                                            code: 'enterpriseScope',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '796505',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'enterpriseScope',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '796505',
                                                            ],
                                                          },
                                                          {
                                                            code: 'homeCounty',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '1194342',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '101',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'homeCounty',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '1194342',
                                                            ],
                                                          },
                                                          {
                                                            code: 'orgZoneName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '432661',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '鼓楼后台支撑组',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'orgZoneName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '432661',
                                                            ],
                                                          },
                                                          {
                                                            code: 'homeCity',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '219497',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '591',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'homeCity',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '219497',
                                                            ],
                                                          },
                                                          {
                                                            code: 'statusName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '536606',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '正使用',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'statusName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '536606',
                                                            ],
                                                          },
                                                          {
                                                            code: 'tradeclassTopName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '224454',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                '农、林、牧、渔业',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'tradeclassTopName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '224454',
                                                            ],
                                                          },
                                                          {
                                                            code: 'tradeclassName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '842265',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '农业',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'tradeclassName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '842265',
                                                            ],
                                                          },
                                                          {
                                                            code: 'managerContactTel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '438869',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'managerContactTel',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '438869',
                                                            ],
                                                          },
                                                          {
                                                            code: 'enterpriseScopeName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '894927',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '跨国集团',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'enterpriseScopeName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '894927',
                                                            ],
                                                          },
                                                          {
                                                            code: 'homeCityName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '659661',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '福州',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'homeCityName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '659661',
                                                            ],
                                                          },
                                                          {
                                                            code: 'managerId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '938307',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1010161',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'managerId',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '938307',
                                                            ],
                                                          },
                                                          {
                                                            code: 'valueLevel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '418984',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'valueLevel',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '418984',
                                                            ],
                                                          },
                                                          {
                                                            code: 'groupName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '821461',
                                                            initialData: {
                                                              type: 'static',
                                                              value:
                                                                'Test集团Test集团455',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'groupName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '821461',
                                                            ],
                                                          },
                                                          {
                                                            code: 'enterpriseKindName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '755924',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'enterpriseKindName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '755924',
                                                            ],
                                                          },
                                                          {
                                                            code: 'tradeclassTop',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '059337',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '1',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'tradeclassTop',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '059337',
                                                            ],
                                                          },
                                                          {
                                                            code: 'valueLevelName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '9398467',
                                                            initialData: {
                                                              type: 'static',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'valueLevelName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '9398467',
                                                            ],
                                                          },
                                                          {
                                                            code: 'homeCountyName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '005949',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '鼓楼',
                                                            },
                                                            parentKey:
                                                              'records',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                            _codePath: [
                                                              'records',
                                                              'homeCountyName',
                                                            ],
                                                            _idpath: [
                                                              '687998',
                                                              '005949',
                                                            ],
                                                          },
                                                        ],
                                                        name: '',
                                                        type: 'objectArray',
                                                        attrId: '687998',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        parentKey: '1',
                                                        parentType: 'object',
                                                        showInput: true,
                                                        _codePath: ['records'],
                                                        _idpath: ['687998'],
                                                      },
                                                    ],
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                    targetDataSourcePaths: [],
                                                  },
                                                  line_number: 15,
                                                  callback1: [],
                                                  callback2: [],
                                                },
                                              ],
                                              callback2: [],
                                            },
                                            {
                                              type: 'console',
                                              dataId: 169079609932692380,
                                              shielding: true,
                                              options: {
                                                compId: 'debug',
                                                compName: 'system',
                                                id: '45722',
                                                pageJsonId: '6584614',
                                                value: ['这边？？？？？'],
                                              },
                                              line_number: 16,
                                            },
                                          ],
                                        },
                                      ],
                                      callback2: [],
                                    },
                                  ],
                                },
                              ],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'apiRequest',
                                  dataId: 169079615718146880,
                                  shielding: true,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '5456133',
                                    pageJsonId: '6584614',
                                    sync: false,
                                    actionTitle: '',
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode: 'qryBopUserIdByOaUserId',
                                    _apiCode: 'qryBopUserIdByOaUserId',
                                    _source: 'rhin',
                                    _serviceId: '910432054329229312',
                                    _serviceTitle:
                                      '通过OA工号查询对应的BOP用户-lzs: qryBopUserIdByOaUserId',
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
                                        dataKey: '557119_header',
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
                                        dataKey: '557119_path',
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
                                        dataKey: '557119_query',
                                        key: '2',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'oaUserId',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'body.oaUserId',
                                            compType: 'Input',
                                            name: 'oaUserId',
                                            parents: ['body'],
                                            id: 'body.oaUserId',
                                            dataKey: '557119_body.oaUserId',
                                            value: {
                                              type: [
                                                'context',
                                                '$state.userCode$',
                                              ],
                                              code: '',
                                            },
                                            parentType: 'object',
                                            parentKey: '3',
                                            key: '3-0',
                                          },
                                        ],
                                        _id: 'body',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'body',
                                        dataKey: '557119_body',
                                        key: '3',
                                      },
                                    ],
                                    _sourceName:
                                      '通过OA工号查询对应的BOP用户-lzs',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'console',
                                      dataId: 169079615718194430,
                                      shielding: true,
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '7403355',
                                        pageJsonId: '6584614',
                                        value: [
                                          '$reply_5456133?.resultData[0].userId$',
                                        ],
                                      },
                                      line_number: 6,
                                    },
                                    {
                                      type: 'apiRequest',
                                      dataId: 169079615718151600,
                                      shielding: true,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '2315214',
                                        pageJsonId: '6584614',
                                        sync: false,
                                        actionTitle: '',
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode:
                                          'queryGroupCustomerList',
                                        _apiCode: 'queryGroupCustomerList',
                                        _source: 'rhin',
                                        _serviceId: '876387158751866880',
                                        _serviceTitle:
                                          '查询集团信息-hdb: queryGroupCustomerList',
                                        params: 'object',
                                        apiRequestSetParams: [
                                          {
                                            code: 'root',
                                            name: '根节点',
                                            attrType: 'object',
                                            children: [
                                              {
                                                code: 'body',
                                                name: '请求体',
                                                attrType: 'object',
                                                children: [
                                                  {
                                                    code: 'orderNbr',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.orderNbr',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.orderNbr',
                                                    dataKey:
                                                      '2315214_root.body.orderNbr',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$state.orderNbr$',
                                                      ],
                                                      code: '',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-0',
                                                  },
                                                  {
                                                    code: 'oaUserId',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.oaUserId',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.oaUserId',
                                                    dataKey:
                                                      '2315214_root.body.oaUserId',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'oaUserId',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-1',
                                                  },
                                                  {
                                                    code: 'pageSize',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.pageSize',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-4',
                                                    id: 'root.body.pageSize',
                                                    dataKey:
                                                      '2315214_root.body.pageSize',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '5',
                                                    },
                                                  },
                                                  {
                                                    code: 'groupName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.groupName',
                                                    compType: 'Input',
                                                    name: 'groupName',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-2',
                                                    id: 'root.body.groupName',
                                                    dataKey:
                                                      '2315214_root.body.groupName',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'groupName',
                                                    },
                                                  },
                                                  {
                                                    code: 'groupId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.groupId',
                                                    compType: 'Input',
                                                    name: 'groupId',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-3',
                                                    id: 'root.body.groupId',
                                                    dataKey:
                                                      '2315214_root.body.groupId',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$Form_0032615$',
                                                      ],
                                                      code: 'groupId',
                                                    },
                                                  },
                                                ],
                                                _id: 'root.body',
                                                compType: 'Input',
                                                parents: ['root'],
                                                id: 'root.body',
                                                dataKey: '2315214_root.body',
                                                parentType: 'object',
                                                parentKey: '0',
                                                key: '0-3',
                                              },
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
                                                dataKey: '2315214_root.header',
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
                                                dataKey: '2315214_root.path',
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
                                                dataKey: '2315214_root.query',
                                              },
                                            ],
                                            _id: 'root',
                                            compType: 'Input',
                                            isRoot: true,
                                            parents: [],
                                            key: '0',
                                            id: 'root',
                                            dataKey: '2315214_root',
                                          },
                                        ],
                                        _sourceName: '查询集团信息-hdb',
                                      },
                                      line_number: 7,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 169079615718122980,
                                          shielding: true,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '288824',
                                            pageJsonId: '6584614',
                                            dataSourceId: 166609528011893860,
                                            dataSourceName: 'groupList',
                                            dataSourceRelType: 'custom',
                                            dataSourceReloadFilter: [],
                                            dataSourceSetValue: [
                                              {
                                                code: 'size',
                                                name: '属性',
                                                type: 'string',
                                                attrId: '61818',
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                parentKey: '1',
                                                parentType: 'object',
                                                showInput: true,
                                                _codePath: ['size'],
                                                _idpath: ['61818'],
                                              },
                                              {
                                                code: 'current',
                                                name: '属性',
                                                type: 'string',
                                                attrId: '499923',
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                parentKey: '1',
                                                parentType: 'object',
                                                showInput: true,
                                                _codePath: ['current'],
                                                _idpath: ['499923'],
                                              },
                                              {
                                                code: 'records',
                                                children: [
                                                  {
                                                    code: 'orgZone',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '099671',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '1010252',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'orgZone',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '099671',
                                                    ],
                                                  },
                                                  {
                                                    code: 'enterpriseKind',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '7374046',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'enterpriseKind',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '7374046',
                                                    ],
                                                  },
                                                  {
                                                    code: 'groupId',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '9406922',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '5911920813',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'groupId',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '9406922',
                                                    ],
                                                  },
                                                  {
                                                    code: 'orgTypeName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '253375',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'orgTypeName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '253375',
                                                    ],
                                                  },
                                                  {
                                                    code: 'groupLevelName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '349387',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '待定',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'groupLevelName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '349387',
                                                    ],
                                                  },
                                                  {
                                                    code: 'managerName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '5592773',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '黄娜娜',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'managerName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '5592773',
                                                    ],
                                                  },
                                                  {
                                                    code: 'contactTel',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '865281',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '13444444444',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'contactTel',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '865281',
                                                    ],
                                                  },
                                                  {
                                                    code: 'orgType',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '779178',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'orgType',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '779178',
                                                    ],
                                                  },
                                                  {
                                                    code: 'tradeclass',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '835847',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '101',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'tradeclass',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '835847',
                                                    ],
                                                  },
                                                  {
                                                    code: 'enterpriseScope',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '796505',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '1',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'enterpriseScope',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '796505',
                                                    ],
                                                  },
                                                  {
                                                    code: 'homeCounty',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '1194342',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '101',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'homeCounty',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '1194342',
                                                    ],
                                                  },
                                                  {
                                                    code: 'orgZoneName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '432661',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '鼓楼后台支撑组',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'orgZoneName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '432661',
                                                    ],
                                                  },
                                                  {
                                                    code: 'homeCity',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '219497',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '591',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'homeCity',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '219497',
                                                    ],
                                                  },
                                                  {
                                                    code: 'statusName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '536606',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '正使用',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'statusName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '536606',
                                                    ],
                                                  },
                                                  {
                                                    code: 'tradeclassTopName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '224454',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '农、林、牧、渔业',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'tradeclassTopName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '224454',
                                                    ],
                                                  },
                                                  {
                                                    code: 'tradeclassName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '842265',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '农业',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'tradeclassName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '842265',
                                                    ],
                                                  },
                                                  {
                                                    code: 'managerContactTel',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '438869',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'managerContactTel',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '438869',
                                                    ],
                                                  },
                                                  {
                                                    code: 'enterpriseScopeName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '894927',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '跨国集团',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'enterpriseScopeName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '894927',
                                                    ],
                                                  },
                                                  {
                                                    code: 'homeCityName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '659661',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '福州',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'homeCityName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '659661',
                                                    ],
                                                  },
                                                  {
                                                    code: 'managerId',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '938307',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '1010161',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'managerId',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '938307',
                                                    ],
                                                  },
                                                  {
                                                    code: 'valueLevel',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '418984',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'valueLevel',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '418984',
                                                    ],
                                                  },
                                                  {
                                                    code: 'groupName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '821461',
                                                    initialData: {
                                                      type: 'static',
                                                      value:
                                                        'Test集团Test集团455',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'groupName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '821461',
                                                    ],
                                                  },
                                                  {
                                                    code: 'enterpriseKindName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '755924',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'enterpriseKindName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '755924',
                                                    ],
                                                  },
                                                  {
                                                    code: 'tradeclassTop',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '059337',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '1',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'tradeclassTop',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '059337',
                                                    ],
                                                  },
                                                  {
                                                    code: 'valueLevelName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '9398467',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'valueLevelName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '9398467',
                                                    ],
                                                  },
                                                  {
                                                    code: 'homeCountyName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '005949',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '鼓楼',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'homeCountyName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '005949',
                                                    ],
                                                  },
                                                ],
                                                name: '',
                                                type: 'objectArray',
                                                attrId: '687998',
                                                initialData: { type: 'static' },
                                                parentKey: '1',
                                                parentType: 'object',
                                                showInput: true,
                                                _codePath: ['records'],
                                                _idpath: ['687998'],
                                              },
                                              {
                                                code: 'total',
                                                name: '属性',
                                                type: 'string',
                                                attrId: '3933013',
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                parentKey: '1',
                                                parentType: 'object',
                                                showInput: true,
                                                _codePath: ['total'],
                                                _idpath: ['3933013'],
                                              },
                                            ],
                                            newData:
                                              '$reply_2315214?.resultData$',
                                            operateType: 3,
                                            onlySetPatch: true,
                                            otherObjectArrayOptions: {},
                                          },
                                          line_number: 8,
                                          callback1: [],
                                          callback2: [],
                                        },
                                        {
                                          type: 'setDataSource',
                                          dataId: 169079615718119400,
                                          shielding: true,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '9222385',
                                            pageJsonId: '6584614',
                                            dataSourceId: 166727124949965000,
                                            dataSourceName: 'groupObj',
                                            dataSourceRelType: 'object',
                                            dataSourceReloadFilter: [
                                              {
                                                attrId: '209519',
                                                code: 'managerName',
                                                name: '客户经理姓名',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'managerName',
                                              },
                                              {
                                                attrId: '048321',
                                                code: 'accountName',
                                                name: '集团账户名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'accountName',
                                              },
                                              {
                                                attrId: '4215179',
                                                code: 'orgType',
                                                name: '机构类型',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'orgType',
                                              },
                                              {
                                                attrId: '668183',
                                                code: 'accountId',
                                                name: '集团账户ID',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'accountId',
                                              },
                                              {
                                                attrId: '59957246',
                                                code: 'tradeclassTop',
                                                name: '行业类型(大类)',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'tradeclassTop',
                                              },
                                              {
                                                attrId: '406633',
                                                code: 'valueLevel',
                                                name: '集团价值等级',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'valueLevel',
                                              },
                                              {
                                                attrId: '649057',
                                                code: 'homeCityName',
                                                name: '归属地市名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'homeCityName',
                                              },
                                              {
                                                attrId: '224611',
                                                code: 'groupId',
                                                name: '集团编码',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'groupId',
                                              },
                                              {
                                                attrId: '5366178',
                                                code: 'orgTypeName',
                                                name: '机构类型名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'orgTypeName',
                                              },
                                              {
                                                attrId: '432999',
                                                code: 'homeCountyName',
                                                name: '归属区县名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'homeCountyName',
                                              },
                                              {
                                                attrId: '118831',
                                                code: 'tradeclassTopName',
                                                name: '行业大类名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'tradeclassTopName',
                                              },
                                              {
                                                attrId: '24697',
                                                code: 'channelAgentName',
                                                name: '代理商',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'channelAgentName',
                                              },
                                              {
                                                attrId: '203948',
                                                code: 'groupName',
                                                name: '集团名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'groupName',
                                              },
                                              {
                                                attrId: '219157',
                                                code: 'homeCity',
                                                name: '归属地市',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'homeCity',
                                              },
                                              {
                                                attrId: '8233446',
                                                code: 'homeCounty',
                                                name: '归属县市',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'homeCounty',
                                              },
                                              {
                                                attrId: '218368',
                                                code: 'orgZoneName',
                                                name: '归属区域名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'orgZoneName',
                                              },
                                              {
                                                attrId: '0093336',
                                                code: 'orgZone',
                                                name: '归属区域',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'orgZone',
                                              },
                                              {
                                                attrId: '619383',
                                                code: 'income',
                                                name: '收入',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'income',
                                              },
                                              {
                                                attrId: '425694',
                                                code: 'managerContactTel',
                                                name: '客户经理电话',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'managerContactTel',
                                              },
                                              {
                                                attrId: '143936',
                                                code: 'valueLevelName',
                                                name: '集团价值等级名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'valueLevelName',
                                              },
                                              {
                                                attrId: '7797967',
                                                code: 'pageNum',
                                                name: '页数',
                                                type: 'long',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'pageNum',
                                              },
                                              {
                                                attrId: '792999',
                                                code: 'pageSize',
                                                name: '每页数量',
                                                type: 'long',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'pageSize',
                                              },
                                              {
                                                attrId: '987901',
                                                code: 'childNode',
                                                name: '从表子节点',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                key: 'childNode',
                                                value: '',
                                              },
                                            ],
                                            dataSourceSetValue: [
                                              {
                                                attrId: '3812395',
                                                code: 'groupId',
                                                name: '集团编码',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '8817237',
                                                code: 'groupName',
                                                name: '集团名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '969603',
                                                code: 'valueLevel',
                                                name: '集团价值等级',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '9539514',
                                                code: 'orgType',
                                                name: '机构类型',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '183321',
                                                code: 'managerName',
                                                name: '客户经理姓名',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '244146',
                                                code: 'managerContactTel',
                                                name: '客户经理电话',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '990739',
                                                code: 'homeCity',
                                                name: '归属地市',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '266585',
                                                code: 'homeCounty',
                                                name: '归属县市',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '207756',
                                                code: 'tradeclassTop',
                                                name: '行业类型(大类)',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '31267',
                                                code: 'channelAgentName',
                                                name: '代理商',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '8343014',
                                                code: 'accountName',
                                                name: '集团账户名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '129344',
                                                code: 'accountId',
                                                name: '集团账户ID',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '166098',
                                                code: 'income',
                                                name: '收入',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '944909',
                                                code: 'valueLevelName',
                                                name: '集团价值等级名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '600947',
                                                code: 'orgTypeName',
                                                name: '机构类型名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '345235',
                                                code: 'homeCityName',
                                                name: '归属地市名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '444331',
                                                code: 'homeCountyName',
                                                name: '归属区县名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '528614',
                                                code: 'tradeclassTopName',
                                                name: '行业大类名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '883893',
                                                code: 'orgZone',
                                                name: '归属区域',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '070745',
                                                code: 'orgZoneName',
                                                name: '归属区域名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '430334',
                                                code: 'managerId',
                                                name: '客户经理工号',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '147752',
                                                code: 'enterpriseKind',
                                                name: '企业类型',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '336169',
                                                code: 'enterpriseKindName',
                                                name: '企业类型名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '9965352',
                                                code: 'contactTel',
                                                name: '联系人',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '443185',
                                                code: 'enterpriseScope',
                                                name: '企业类型',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                              {
                                                attrId: '812981',
                                                code: 'enterpriseScopeName',
                                                name: '企业类型名称',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: null,
                                                },
                                              },
                                            ],
                                            newData:
                                              '$reply_2315214?.resultData$',
                                            operateType: 3,
                                            onlySetPatch: true,
                                            otherObjectArrayOptions: {},
                                          },
                                          line_number: 9,
                                          callback1: [],
                                          callback2: [],
                                        },
                                        {
                                          type: 'setDataSource',
                                          dataId: 169079615718196000,
                                          shielding: true,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '603289',
                                            pageJsonId: '6584614',
                                            dataSourceId: 166609528011893860,
                                            dataSourceName: 'groupList',
                                            dataSourceRelType: 'custom',
                                            dataSourceSetValue: [
                                              {
                                                code: 'total',
                                                name: '属性',
                                                type: 'string',
                                                attrId: '3933013',
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                parentKey: '1',
                                                parentType: 'object',
                                                showInput: true,
                                                _codePath: ['total'],
                                                _idpath: ['3933013'],
                                                value: {
                                                  type: ['customize'],
                                                  code: '$reply_2315214?.resultData.total$',
                                                },
                                              },
                                              {
                                                code: 'current',
                                                name: '属性',
                                                type: 'string',
                                                attrId: '499923',
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                parentKey: '1',
                                                parentType: 'object',
                                                showInput: true,
                                                _codePath: ['current'],
                                                _idpath: ['499923'],
                                                value: {
                                                  type: ['customize'],
                                                  code: '$reply_2315214?.resultData.current$',
                                                },
                                              },
                                              {
                                                code: 'size',
                                                name: '属性',
                                                type: 'string',
                                                attrId: '61818',
                                                initialData: {
                                                  type: 'static',
                                                  value: '',
                                                },
                                                parentKey: '1',
                                                parentType: 'object',
                                                showInput: true,
                                                _codePath: ['size'],
                                                _idpath: ['61818'],
                                                value: {
                                                  type: ['customize'],
                                                  code: '5',
                                                },
                                              },
                                              {
                                                code: 'records',
                                                children: [
                                                  {
                                                    code: 'orgZone',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '099671',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '1010252',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'orgZone',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '099671',
                                                    ],
                                                  },
                                                  {
                                                    code: 'enterpriseKind',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '7374046',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'enterpriseKind',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '7374046',
                                                    ],
                                                  },
                                                  {
                                                    code: 'groupId',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '9406922',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '5911920813',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'groupId',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '9406922',
                                                    ],
                                                  },
                                                  {
                                                    code: 'orgTypeName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '253375',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'orgTypeName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '253375',
                                                    ],
                                                  },
                                                  {
                                                    code: 'groupLevelName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '349387',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '待定',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'groupLevelName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '349387',
                                                    ],
                                                  },
                                                  {
                                                    code: 'managerName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '5592773',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '黄娜娜',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'managerName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '5592773',
                                                    ],
                                                  },
                                                  {
                                                    code: 'contactTel',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '865281',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '13444444444',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'contactTel',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '865281',
                                                    ],
                                                  },
                                                  {
                                                    code: 'orgType',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '779178',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'orgType',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '779178',
                                                    ],
                                                  },
                                                  {
                                                    code: 'tradeclass',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '835847',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '101',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'tradeclass',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '835847',
                                                    ],
                                                  },
                                                  {
                                                    code: 'enterpriseScope',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '796505',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '1',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'enterpriseScope',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '796505',
                                                    ],
                                                  },
                                                  {
                                                    code: 'homeCounty',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '1194342',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '101',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'homeCounty',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '1194342',
                                                    ],
                                                  },
                                                  {
                                                    code: 'orgZoneName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '432661',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '鼓楼后台支撑组',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'orgZoneName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '432661',
                                                    ],
                                                  },
                                                  {
                                                    code: 'homeCity',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '219497',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '591',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'homeCity',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '219497',
                                                    ],
                                                  },
                                                  {
                                                    code: 'statusName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '536606',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '正使用',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'statusName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '536606',
                                                    ],
                                                  },
                                                  {
                                                    code: 'tradeclassTopName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '224454',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '农、林、牧、渔业',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'tradeclassTopName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '224454',
                                                    ],
                                                  },
                                                  {
                                                    code: 'tradeclassName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '842265',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '农业',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'tradeclassName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '842265',
                                                    ],
                                                  },
                                                  {
                                                    code: 'managerContactTel',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '438869',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'managerContactTel',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '438869',
                                                    ],
                                                  },
                                                  {
                                                    code: 'enterpriseScopeName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '894927',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '跨国集团',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'enterpriseScopeName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '894927',
                                                    ],
                                                  },
                                                  {
                                                    code: 'homeCityName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '659661',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '福州',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'homeCityName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '659661',
                                                    ],
                                                  },
                                                  {
                                                    code: 'managerId',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '938307',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '1010161',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'managerId',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '938307',
                                                    ],
                                                  },
                                                  {
                                                    code: 'valueLevel',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '418984',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'valueLevel',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '418984',
                                                    ],
                                                  },
                                                  {
                                                    code: 'groupName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '821461',
                                                    initialData: {
                                                      type: 'static',
                                                      value:
                                                        'Test集团Test集团455',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'groupName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '821461',
                                                    ],
                                                  },
                                                  {
                                                    code: 'enterpriseKindName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '755924',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'enterpriseKindName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '755924',
                                                    ],
                                                  },
                                                  {
                                                    code: 'tradeclassTop',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '059337',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '1',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'tradeclassTop',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '059337',
                                                    ],
                                                  },
                                                  {
                                                    code: 'valueLevelName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '9398467',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'valueLevelName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '9398467',
                                                    ],
                                                  },
                                                  {
                                                    code: 'homeCountyName',
                                                    name: '属性',
                                                    type: 'string',
                                                    attrId: '005949',
                                                    initialData: {
                                                      type: 'static',
                                                      value: '鼓楼',
                                                    },
                                                    parentKey: 'records',
                                                    parentType: 'object',
                                                    showInput: false,
                                                    _codePath: [
                                                      'records',
                                                      'homeCountyName',
                                                    ],
                                                    _idpath: [
                                                      '687998',
                                                      '005949',
                                                    ],
                                                  },
                                                ],
                                                name: '',
                                                type: 'objectArray',
                                                attrId: '687998',
                                                initialData: { type: 'static' },
                                                parentKey: '1',
                                                parentType: 'object',
                                                showInput: true,
                                                value: {
                                                  type: ['customize'],
                                                  code: '$reply_2315214?.resultData.instances$',
                                                },
                                                _codePath: ['records'],
                                                _idpath: ['687998'],
                                              },
                                            ],
                                            operateType: 1,
                                            onlySetPatch: true,
                                            otherObjectArrayOptions: {},
                                            targetDataSourcePaths: [],
                                          },
                                          line_number: 10,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                      callback2: [],
                                    },
                                  ],
                                  callback2: [],
                                },
                                {
                                  type: 'setDataSource',
                                  dataId: 169079616758073180,
                                  shielding: true,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '258893',
                                    pageJsonId: '6584614',
                                    dataSourceId: 169079595648383260,
                                    dataSourceName: 'pageParam',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '778101',
                                        code: 'isChanage',
                                        name: '属性',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        value: {
                                          type: ['customize'],
                                          code: '0',
                                        },
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 11,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                            {
                              type: 'apiRequest',
                              dataId: 169321386880098240,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '803778',
                                pageJsonId: '6584614',
                                sync: false,
                                actionTitle: '',
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'queryGroupCustomerList',
                                _apiCode: 'queryGroupCustomerList',
                                _source: 'rhin',
                                _serviceId: '876387158751866880',
                                _serviceTitle:
                                  '查询集团信息-hdb: queryGroupCustomerList',
                                params: 'object',
                                apiRequestSetParams: [
                                  {
                                    code: 'root',
                                    name: '根节点',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'orderNbr',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.orderNbr',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            id: 'root.body.orderNbr',
                                            dataKey:
                                              '803778_root.body.orderNbr',
                                            value: {
                                              type: [
                                                'context',
                                                '$state.orderNbr$',
                                              ],
                                              code: '',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-0',
                                          },
                                          {
                                            code: 'oaUserId',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.oaUserId',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            id: 'root.body.oaUserId',
                                            dataKey:
                                              '803778_root.body.oaUserId',
                                            value: {
                                              type: [
                                                'context',
                                                '$Form_0032615$',
                                              ],
                                              code: 'oaUserId',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-1',
                                          },
                                          {
                                            code: 'pageSize',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.pageSize',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-4',
                                            id: 'root.body.pageSize',
                                            dataKey:
                                              '803778_root.body.pageSize',
                                            value: {
                                              type: ['customize'],
                                              code: '5',
                                            },
                                          },
                                          {
                                            code: 'groupName',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.groupName',
                                            compType: 'Input',
                                            name: 'groupName',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-2',
                                            id: 'root.body.groupName',
                                            dataKey:
                                              '803778_root.body.groupName',
                                            value: {
                                              type: [
                                                'context',
                                                '$Form_0032615$',
                                              ],
                                              code: 'groupName',
                                            },
                                          },
                                          {
                                            code: 'groupId',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.groupId',
                                            compType: 'Input',
                                            name: 'groupId',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-3',
                                            id: 'root.body.groupId',
                                            dataKey: '803778_root.body.groupId',
                                            value: {
                                              type: [
                                                'context',
                                                '$Form_0032615$',
                                              ],
                                              code: 'groupId',
                                            },
                                          },
                                        ],
                                        _id: 'root.body',
                                        compType: 'Input',
                                        parents: ['root'],
                                        id: 'root.body',
                                        dataKey: '803778_root.body',
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-3',
                                      },
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
                                        dataKey: '803778_root.header',
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
                                        dataKey: '803778_root.path',
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
                                        dataKey: '803778_root.query',
                                      },
                                    ],
                                    _id: 'root',
                                    compType: 'Input',
                                    isRoot: true,
                                    parents: [],
                                    key: '0',
                                    id: 'root',
                                    dataKey: '803778_root',
                                  },
                                ],
                                _sourceName: '查询集团信息-hdb',
                              },
                              line_number: 19,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 169321386880026240,
                                  shielding: true,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '154816',
                                    pageJsonId: '6584614',
                                    dataSourceId: 166609528011893860,
                                    dataSourceName: 'groupList',
                                    dataSourceRelType: 'custom',
                                    dataSourceReloadFilter: [],
                                    dataSourceSetValue: [
                                      {
                                        code: 'size',
                                        name: '属性',
                                        type: 'string',
                                        attrId: '61818',
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        parentKey: '1',
                                        parentType: 'object',
                                        showInput: true,
                                        _codePath: ['size'],
                                        _idpath: ['61818'],
                                      },
                                      {
                                        code: 'current',
                                        name: '属性',
                                        type: 'string',
                                        attrId: '499923',
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        parentKey: '1',
                                        parentType: 'object',
                                        showInput: true,
                                        _codePath: ['current'],
                                        _idpath: ['499923'],
                                      },
                                      {
                                        code: 'records',
                                        children: [
                                          {
                                            code: 'orgZone',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '099671',
                                            initialData: {
                                              type: 'static',
                                              value: '1010252',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'orgZone'],
                                            _idpath: ['687998', '099671'],
                                          },
                                          {
                                            code: 'enterpriseKind',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '7374046',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'enterpriseKind',
                                            ],
                                            _idpath: ['687998', '7374046'],
                                          },
                                          {
                                            code: 'groupId',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '9406922',
                                            initialData: {
                                              type: 'static',
                                              value: '5911920813',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'groupId'],
                                            _idpath: ['687998', '9406922'],
                                          },
                                          {
                                            code: 'orgTypeName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '253375',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'orgTypeName',
                                            ],
                                            _idpath: ['687998', '253375'],
                                          },
                                          {
                                            code: 'groupLevelName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '349387',
                                            initialData: {
                                              type: 'static',
                                              value: '待定',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'groupLevelName',
                                            ],
                                            _idpath: ['687998', '349387'],
                                          },
                                          {
                                            code: 'managerName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '5592773',
                                            initialData: {
                                              type: 'static',
                                              value: '黄娜娜',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'managerName',
                                            ],
                                            _idpath: ['687998', '5592773'],
                                          },
                                          {
                                            code: 'contactTel',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '865281',
                                            initialData: {
                                              type: 'static',
                                              value: '13444444444',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'contactTel',
                                            ],
                                            _idpath: ['687998', '865281'],
                                          },
                                          {
                                            code: 'orgType',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '779178',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'orgType'],
                                            _idpath: ['687998', '779178'],
                                          },
                                          {
                                            code: 'tradeclass',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '835847',
                                            initialData: {
                                              type: 'static',
                                              value: '101',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'tradeclass',
                                            ],
                                            _idpath: ['687998', '835847'],
                                          },
                                          {
                                            code: 'enterpriseScope',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '796505',
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'enterpriseScope',
                                            ],
                                            _idpath: ['687998', '796505'],
                                          },
                                          {
                                            code: 'homeCounty',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '1194342',
                                            initialData: {
                                              type: 'static',
                                              value: '101',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'homeCounty',
                                            ],
                                            _idpath: ['687998', '1194342'],
                                          },
                                          {
                                            code: 'orgZoneName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '432661',
                                            initialData: {
                                              type: 'static',
                                              value: '鼓楼后台支撑组',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'orgZoneName',
                                            ],
                                            _idpath: ['687998', '432661'],
                                          },
                                          {
                                            code: 'homeCity',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '219497',
                                            initialData: {
                                              type: 'static',
                                              value: '591',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'homeCity'],
                                            _idpath: ['687998', '219497'],
                                          },
                                          {
                                            code: 'statusName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '536606',
                                            initialData: {
                                              type: 'static',
                                              value: '正使用',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'statusName',
                                            ],
                                            _idpath: ['687998', '536606'],
                                          },
                                          {
                                            code: 'tradeclassTopName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '224454',
                                            initialData: {
                                              type: 'static',
                                              value: '农、林、牧、渔业',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'tradeclassTopName',
                                            ],
                                            _idpath: ['687998', '224454'],
                                          },
                                          {
                                            code: 'tradeclassName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '842265',
                                            initialData: {
                                              type: 'static',
                                              value: '农业',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'tradeclassName',
                                            ],
                                            _idpath: ['687998', '842265'],
                                          },
                                          {
                                            code: 'managerContactTel',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '438869',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'managerContactTel',
                                            ],
                                            _idpath: ['687998', '438869'],
                                          },
                                          {
                                            code: 'enterpriseScopeName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '894927',
                                            initialData: {
                                              type: 'static',
                                              value: '跨国集团',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'enterpriseScopeName',
                                            ],
                                            _idpath: ['687998', '894927'],
                                          },
                                          {
                                            code: 'homeCityName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '659661',
                                            initialData: {
                                              type: 'static',
                                              value: '福州',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'homeCityName',
                                            ],
                                            _idpath: ['687998', '659661'],
                                          },
                                          {
                                            code: 'managerId',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '938307',
                                            initialData: {
                                              type: 'static',
                                              value: '1010161',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'managerId'],
                                            _idpath: ['687998', '938307'],
                                          },
                                          {
                                            code: 'valueLevel',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '418984',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'valueLevel',
                                            ],
                                            _idpath: ['687998', '418984'],
                                          },
                                          {
                                            code: 'groupName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '821461',
                                            initialData: {
                                              type: 'static',
                                              value: 'Test集团Test集团455',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'groupName'],
                                            _idpath: ['687998', '821461'],
                                          },
                                          {
                                            code: 'enterpriseKindName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '755924',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'enterpriseKindName',
                                            ],
                                            _idpath: ['687998', '755924'],
                                          },
                                          {
                                            code: 'tradeclassTop',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '059337',
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'tradeclassTop',
                                            ],
                                            _idpath: ['687998', '059337'],
                                          },
                                          {
                                            code: 'valueLevelName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '9398467',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'valueLevelName',
                                            ],
                                            _idpath: ['687998', '9398467'],
                                          },
                                          {
                                            code: 'homeCountyName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '005949',
                                            initialData: {
                                              type: 'static',
                                              value: '鼓楼',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'homeCountyName',
                                            ],
                                            _idpath: ['687998', '005949'],
                                          },
                                        ],
                                        name: '',
                                        type: 'objectArray',
                                        attrId: '687998',
                                        initialData: { type: 'static' },
                                        parentKey: '1',
                                        parentType: 'object',
                                        showInput: true,
                                        _codePath: ['records'],
                                        _idpath: ['687998'],
                                      },
                                      {
                                        code: 'total',
                                        name: '属性',
                                        type: 'string',
                                        attrId: '3933013',
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        parentKey: '1',
                                        parentType: 'object',
                                        showInput: true,
                                        _codePath: ['total'],
                                        _idpath: ['3933013'],
                                      },
                                    ],
                                    newData: '$reply_803778?.resultData$',
                                    operateType: 3,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                  },
                                  line_number: 20,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'setDataSource',
                                  dataId: 169321386880051500,
                                  shielding: true,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '057842',
                                    pageJsonId: '6584614',
                                    dataSourceId: 166727124949965000,
                                    dataSourceName: 'groupObj',
                                    dataSourceRelType: 'object',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '209519',
                                        code: 'managerName',
                                        name: '客户经理姓名',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'managerName',
                                      },
                                      {
                                        attrId: '048321',
                                        code: 'accountName',
                                        name: '集团账户名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'accountName',
                                      },
                                      {
                                        attrId: '4215179',
                                        code: 'orgType',
                                        name: '机构类型',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'orgType',
                                      },
                                      {
                                        attrId: '668183',
                                        code: 'accountId',
                                        name: '集团账户ID',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'accountId',
                                      },
                                      {
                                        attrId: '59957246',
                                        code: 'tradeclassTop',
                                        name: '行业类型(大类)',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'tradeclassTop',
                                      },
                                      {
                                        attrId: '406633',
                                        code: 'valueLevel',
                                        name: '集团价值等级',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'valueLevel',
                                      },
                                      {
                                        attrId: '649057',
                                        code: 'homeCityName',
                                        name: '归属地市名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'homeCityName',
                                      },
                                      {
                                        attrId: '224611',
                                        code: 'groupId',
                                        name: '集团编码',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'groupId',
                                      },
                                      {
                                        attrId: '5366178',
                                        code: 'orgTypeName',
                                        name: '机构类型名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'orgTypeName',
                                      },
                                      {
                                        attrId: '432999',
                                        code: 'homeCountyName',
                                        name: '归属区县名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'homeCountyName',
                                      },
                                      {
                                        attrId: '118831',
                                        code: 'tradeclassTopName',
                                        name: '行业大类名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'tradeclassTopName',
                                      },
                                      {
                                        attrId: '24697',
                                        code: 'channelAgentName',
                                        name: '代理商',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'channelAgentName',
                                      },
                                      {
                                        attrId: '203948',
                                        code: 'groupName',
                                        name: '集团名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'groupName',
                                      },
                                      {
                                        attrId: '219157',
                                        code: 'homeCity',
                                        name: '归属地市',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'homeCity',
                                      },
                                      {
                                        attrId: '8233446',
                                        code: 'homeCounty',
                                        name: '归属县市',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'homeCounty',
                                      },
                                      {
                                        attrId: '218368',
                                        code: 'orgZoneName',
                                        name: '归属区域名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'orgZoneName',
                                      },
                                      {
                                        attrId: '0093336',
                                        code: 'orgZone',
                                        name: '归属区域',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'orgZone',
                                      },
                                      {
                                        attrId: '619383',
                                        code: 'income',
                                        name: '收入',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'income',
                                      },
                                      {
                                        attrId: '425694',
                                        code: 'managerContactTel',
                                        name: '客户经理电话',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'managerContactTel',
                                      },
                                      {
                                        attrId: '143936',
                                        code: 'valueLevelName',
                                        name: '集团价值等级名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'valueLevelName',
                                      },
                                      {
                                        attrId: '7797967',
                                        code: 'pageNum',
                                        name: '页数',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'pageNum',
                                      },
                                      {
                                        attrId: '792999',
                                        code: 'pageSize',
                                        name: '每页数量',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'pageSize',
                                      },
                                      {
                                        attrId: '987901',
                                        code: 'childNode',
                                        name: '从表子节点',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        key: 'childNode',
                                        value: '',
                                      },
                                    ],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '3812395',
                                        code: 'groupId',
                                        name: '集团编码',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '8817237',
                                        code: 'groupName',
                                        name: '集团名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '969603',
                                        code: 'valueLevel',
                                        name: '集团价值等级',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '9539514',
                                        code: 'orgType',
                                        name: '机构类型',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '183321',
                                        code: 'managerName',
                                        name: '客户经理姓名',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '244146',
                                        code: 'managerContactTel',
                                        name: '客户经理电话',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '990739',
                                        code: 'homeCity',
                                        name: '归属地市',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '266585',
                                        code: 'homeCounty',
                                        name: '归属县市',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '207756',
                                        code: 'tradeclassTop',
                                        name: '行业类型(大类)',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '31267',
                                        code: 'channelAgentName',
                                        name: '代理商',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '8343014',
                                        code: 'accountName',
                                        name: '集团账户名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '129344',
                                        code: 'accountId',
                                        name: '集团账户ID',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '166098',
                                        code: 'income',
                                        name: '收入',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '944909',
                                        code: 'valueLevelName',
                                        name: '集团价值等级名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '600947',
                                        code: 'orgTypeName',
                                        name: '机构类型名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '345235',
                                        code: 'homeCityName',
                                        name: '归属地市名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '444331',
                                        code: 'homeCountyName',
                                        name: '归属区县名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '528614',
                                        code: 'tradeclassTopName',
                                        name: '行业大类名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '883893',
                                        code: 'orgZone',
                                        name: '归属区域',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '070745',
                                        code: 'orgZoneName',
                                        name: '归属区域名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '430334',
                                        code: 'managerId',
                                        name: '客户经理工号',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '147752',
                                        code: 'enterpriseKind',
                                        name: '企业类型',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '336169',
                                        code: 'enterpriseKindName',
                                        name: '企业类型名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '9965352',
                                        code: 'contactTel',
                                        name: '联系人',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '443185',
                                        code: 'enterpriseScope',
                                        name: '企业类型',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                      {
                                        attrId: '812981',
                                        code: 'enterpriseScopeName',
                                        name: '企业类型名称',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: null,
                                        },
                                      },
                                    ],
                                    newData: '$reply_803778?.resultData$',
                                    operateType: 3,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                  },
                                  line_number: 21,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'setDataSource',
                                  dataId: 169321386880055330,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '379419',
                                    pageJsonId: '6584614',
                                    dataSourceId: 166609528011893860,
                                    dataSourceName: 'groupList',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        code: 'total',
                                        name: '属性',
                                        type: 'string',
                                        attrId: '3933013',
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        parentKey: '1',
                                        parentType: 'object',
                                        showInput: true,
                                        _codePath: ['total'],
                                        _idpath: ['3933013'],
                                        value: {
                                          type: ['customize'],
                                          code: '$reply_803778?.resultData.total$',
                                        },
                                      },
                                      {
                                        code: 'current',
                                        name: '属性',
                                        type: 'string',
                                        attrId: '499923',
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        parentKey: '1',
                                        parentType: 'object',
                                        showInput: true,
                                        _codePath: ['current'],
                                        _idpath: ['499923'],
                                        value: {
                                          type: ['customize'],
                                          code: '$reply_803778?.resultData.current$',
                                        },
                                      },
                                      {
                                        code: 'size',
                                        name: '属性',
                                        type: 'string',
                                        attrId: '61818',
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        parentKey: '1',
                                        parentType: 'object',
                                        showInput: true,
                                        _codePath: ['size'],
                                        _idpath: ['61818'],
                                        value: {
                                          type: ['customize'],
                                          code: '5',
                                        },
                                      },
                                      {
                                        code: 'records',
                                        children: [
                                          {
                                            code: 'orgZone',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '099671',
                                            initialData: {
                                              type: 'static',
                                              value: '1010252',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'orgZone'],
                                            _idpath: ['687998', '099671'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'enterpriseKind',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '7374046',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'enterpriseKind',
                                            ],
                                            _idpath: ['687998', '7374046'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'groupId',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '9406922',
                                            initialData: {
                                              type: 'static',
                                              value: '5911920813',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'groupId'],
                                            _idpath: ['687998', '9406922'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'orgTypeName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '253375',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'orgTypeName',
                                            ],
                                            _idpath: ['687998', '253375'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'groupLevelName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '349387',
                                            initialData: {
                                              type: 'static',
                                              value: '待定',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'groupLevelName',
                                            ],
                                            _idpath: ['687998', '349387'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'managerName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '5592773',
                                            initialData: {
                                              type: 'static',
                                              value: '黄娜娜',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'managerName',
                                            ],
                                            _idpath: ['687998', '5592773'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'contactTel',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '865281',
                                            initialData: {
                                              type: 'static',
                                              value: '13444444444',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'contactTel',
                                            ],
                                            _idpath: ['687998', '865281'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'orgType',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '779178',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'orgType'],
                                            _idpath: ['687998', '779178'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'tradeclass',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '835847',
                                            initialData: {
                                              type: 'static',
                                              value: '101',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'tradeclass',
                                            ],
                                            _idpath: ['687998', '835847'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'enterpriseScope',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '796505',
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'enterpriseScope',
                                            ],
                                            _idpath: ['687998', '796505'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'homeCounty',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '1194342',
                                            initialData: {
                                              type: 'static',
                                              value: '101',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'homeCounty',
                                            ],
                                            _idpath: ['687998', '1194342'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'orgZoneName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '432661',
                                            initialData: {
                                              type: 'static',
                                              value: '鼓楼后台支撑组',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'orgZoneName',
                                            ],
                                            _idpath: ['687998', '432661'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'homeCity',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '219497',
                                            initialData: {
                                              type: 'static',
                                              value: '591',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'homeCity'],
                                            _idpath: ['687998', '219497'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'statusName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '536606',
                                            initialData: {
                                              type: 'static',
                                              value: '正使用',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'statusName',
                                            ],
                                            _idpath: ['687998', '536606'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'tradeclassTopName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '224454',
                                            initialData: {
                                              type: 'static',
                                              value: '农、林、牧、渔业',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'tradeclassTopName',
                                            ],
                                            _idpath: ['687998', '224454'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'tradeclassName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '842265',
                                            initialData: {
                                              type: 'static',
                                              value: '农业',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'tradeclassName',
                                            ],
                                            _idpath: ['687998', '842265'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'managerContactTel',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '438869',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'managerContactTel',
                                            ],
                                            _idpath: ['687998', '438869'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'enterpriseScopeName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '894927',
                                            initialData: {
                                              type: 'static',
                                              value: '跨国集团',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'enterpriseScopeName',
                                            ],
                                            _idpath: ['687998', '894927'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'homeCityName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '659661',
                                            initialData: {
                                              type: 'static',
                                              value: '福州',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'homeCityName',
                                            ],
                                            _idpath: ['687998', '659661'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'managerId',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '938307',
                                            initialData: {
                                              type: 'static',
                                              value: '1010161',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'managerId'],
                                            _idpath: ['687998', '938307'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'valueLevel',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '418984',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'valueLevel',
                                            ],
                                            _idpath: ['687998', '418984'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'groupName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '821461',
                                            initialData: {
                                              type: 'static',
                                              value: 'Test集团Test集团455',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: ['records', 'groupName'],
                                            _idpath: ['687998', '821461'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'enterpriseKindName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '755924',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'enterpriseKindName',
                                            ],
                                            _idpath: ['687998', '755924'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'tradeclassTop',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '059337',
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'tradeclassTop',
                                            ],
                                            _idpath: ['687998', '059337'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'valueLevelName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '9398467',
                                            initialData: { type: 'static' },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'valueLevelName',
                                            ],
                                            _idpath: ['687998', '9398467'],
                                            parentCode: 'records',
                                          },
                                          {
                                            code: 'homeCountyName',
                                            name: '属性',
                                            type: 'string',
                                            attrId: '005949',
                                            initialData: {
                                              type: 'static',
                                              value: '鼓楼',
                                            },
                                            parentKey: 'records',
                                            parentType: 'object',
                                            showInput: false,
                                            _codePath: [
                                              'records',
                                              'homeCountyName',
                                            ],
                                            _idpath: ['687998', '005949'],
                                            parentCode: 'records',
                                          },
                                        ],
                                        name: '',
                                        type: 'objectArray',
                                        attrId: '687998',
                                        initialData: { type: 'static' },
                                        parentKey: '1',
                                        parentType: 'object',
                                        showInput: true,
                                        value: {
                                          type: ['customize'],
                                          code: '$reply_803778?.resultData.instances$',
                                        },
                                        _codePath: ['records'],
                                        _idpath: ['687998'],
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 22,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'reloadTableData',
                                  dataId: 169321499193050140,
                                  options: {
                                    compId: 'Table_08098',
                                    compLib: 'comm',
                                    pageJsonId: '6584614',
                                    compName: 'Table',
                                    id: '6927173',
                                    data: '$reply_803778?.resultData.instances$',
                                  },
                                  line_number: 23,
                                  callback1: [],
                                },
                              ],
                              callback2: [],
                            },
                          ],
                          callback2: [
                            {
                              type: 'showMessage',
                              dataId: 167947357888708960,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '5290393',
                                pageJsonId: '6584614',
                                type: 'info',
                                value:
                                  '请添加工号、集团编码或集团名称做为查询条件！',
                              },
                              line_number: 24,
                            },
                          ],
                        },
                      ],
                    },
                  ];
                  eventDatagetCurrentFormValues21.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetCurrentFormValues21,
                    { e },
                    'getCurrentFormValues',
                    {
                      id: 'getCurrentFormValues',
                      name: 'getCurrentFormValues',
                      type: 'getCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_67568_744242')}
                {...injectData}
              />
              <Button
                name={'清空'}
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
                  id: 'Button_151377_2341566',
                  uid: 'Button_151377_2341566',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 10px' }}
                onClick={(e: any) => {
                  const forms35 = getFormByCompId('Form_0032615', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms35) ? forms35 : [forms35]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_151377_2341566')
                }
                {...injectData}
              />
            </View>
          </Form>
        </View>
        <Table
          name={'表格'}
          isFlexColumn={false}
          pageSize={5}
          current={data?.groupList?.current}
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
              type: 'orderCol',
              title: '序号',
              dataIndex: '-',
              id: '745347',
              className: '',
              width: 50,
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
              title: '集团编码',
              key: 'groupId',
              dataIndex: 'groupId',
              className: 'divider',
              id: '313725',
              width: 200,
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
              title: '集团名称',
              key: 'groupName',
              dataIndex: 'groupName',
              className: 'divider',
              id: '7740572',
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
              title: '行业类型',
              key: 'tradeclassTopName',
              dataIndex: 'tradeclassTopName',
              className: 'divider',
              id: '115695',
              width: 200,
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
              title: '客户经理名称',
              key: 'managerName',
              dataIndex: 'managerName',
              className: 'divider',
              id: '0130494',
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
          ]}
          page={false}
          rowKeyType={'auto'}
          editMode={'single'}
          selectType={functorsMap?.IF(
            state?.groupCode === '1000',
            'radio',
            'checkbox',
          )}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={{
            type: functorsMap?.IF(
              state?.groupCode === '1000',
              'radio',
              'checkbox',
            ),
          }}
          showHead={false}
          showTotal={true}
          showSizeChanger={false}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          dataSource={data?.groupList?.records}
          total={data?.groupList?.total}
          adjustModel={'auto'}
          scroll={{ x: 950, y: 355 }}
          rowKey={undefined}
          dataSourceFromDataSourceConfig={'data.groupList.records'}
          $$componentItem={{
            id: 'Table_08098',
            uid: 'Table_08098',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          onRowDoubleClick={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode436: any = [
              {
                type: 'customActionCode',
                dataId: 166626647793565200,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '204694',
                  pageJsonId: '6584614',
                  code: 'function main(data,state,success,fail){var rowObj=row;var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;rowObj.id=rowId;success(rowObj)};',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 166626648048705340,
                    shielding: true,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '4502255',
                      pageJsonId: '6584614',
                      params: '$data_204694$',
                    },
                    line_number: 2,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166626648277605340,
                    shielding: true,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '420657',
                      pageJsonId: '6584614',
                    },
                    line_number: 3,
                  },
                ],
                callback2: [],
              },
            ];
            eventDatacustomActionCode436.params =
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
              eventDatacustomActionCode436,
              { rowId, row, index },
              'customActionCode',
              {
                id: 'customActionCode',
                name: 'customActionCode',
                type: 'customActionCode',
                platform: 'pc',
              },
            );
            const eventDataapiRequest696: any = [
              {
                type: 'apiRequest',
                dataId: 167023463097224580,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '941618',
                  pageJsonId: '6584614',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'groupCustomerInfo',
                  _apiCode: 'groupCustomerInfo',
                  _source: 'rhin',
                  _serviceId: '915442281117552640',
                  _serviceTitle: '查询集团详情-hdb: groupCustomerInfo',
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
                      dataKey: '941618_header',
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
                      dataKey: '941618_path',
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
                      dataKey: '941618_query',
                      key: '2',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'objType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.objType',
                          compType: 'Input',
                          name: 'objType',
                          parents: ['body'],
                          id: 'body.objType',
                          dataKey: '941618_body.objType',
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-0',
                        },
                        {
                          code: 'objId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.objId',
                          compType: 'Input',
                          name: 'objId',
                          parents: ['body'],
                          id: 'body.objId',
                          dataKey: '941618_body.objId',
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-2',
                        },
                        {
                          code: 'instanceList',
                          name: '新增节点',
                          attrType: 'objectArray',
                          _id: 'body.instanceList',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.instanceList',
                          dataKey: '941618_body.instanceList',
                          value: { type: ['customize'], code: '$row$' },
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-3',
                        },
                        {
                          code: 'orderNbr',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.orderNbr',
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
                      dataKey: '941618_body',
                      key: '3',
                    },
                  ],
                  _sourceName: '查询集团详情-hdb',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 167023463097235100,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '04466',
                      pageJsonId: '6584614',
                      params: '$reply_941618.resultData$',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'closeModal',
                    dataId: 167023463097223500,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '186148',
                      pageJsonId: '6584614',
                    },
                    line_number: 6,
                  },
                ],
                callback2: [],
              },
            ];
            eventDataapiRequest696.params =
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
              eventDataapiRequest696,
              { rowId, row, index },
              'apiRequest',
              {
                id: 'apiRequest',
                name: 'apiRequest',
                type: 'apiRequest',
                platform: 'pc',
              },
            ); // console 167023481968468700
            console.log('行对象');
            // console 167023475218958340
            console.log(row);
          }}
          onPageChange={(page: any, pageSize: any) => {
            const eventDatagetCurrentFormValues22: any = [
              {
                type: 'getCurrentFormValues',
                dataId: 168649306703462720,
                options: {
                  compId: 'Form_0032615',
                  compLib: 'comm',
                  pageJsonId: '6584614',
                  compName: 'Form',
                  id: '365414',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'console',
                    dataId: 168649306703419140,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '491694',
                      pageJsonId: '6584614',
                      value: ['$Form_0032615$'],
                    },
                    line_number: 2,
                  },
                  {
                    type: 'customActionCode',
                    dataId: 168649306703446600,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '821084',
                      pageJsonId: '6584614',
                      code: 'function main(data,state,success,fail){if(Form_0032615.oaUserId||Form_0032615.groupId||Form_0032615.groupName){success()}else{fail()}};',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 168649306703443840,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '665644',
                          pageJsonId: '6584614',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'queryGroupCustomerPage',
                          _apiCode: 'queryGroupCustomerPage',
                          _source: 'rhin',
                          _sourceName: '集团列表分页',
                          _serviceId: '985117767971278848',
                          _serviceTitle: '集团列表分页: queryGroupCustomerPage',
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
                                  dataKey: '665644_root.header',
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
                                  dataKey: '665644_root.path',
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
                                  dataKey: '665644_root.query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'pageSize',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.pageSize',
                                      compType: 'Input',
                                      name: 'pageSize',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.pageSize',
                                      dataKey: '665644_root.body.pageSize',
                                      value: {
                                        type: ['context', '$pageSize$'],
                                        code: '',
                                        hideAttr: true,
                                      },
                                    },
                                    {
                                      code: 'pageNum',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.pageNum',
                                      compType: 'Input',
                                      name: 'pageNum',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-1',
                                      id: 'root.body.pageNum',
                                      dataKey: '665644_root.body.pageNum',
                                      value: {
                                        type: ['context', '$page$'],
                                        code: '',
                                        hideAttr: true,
                                      },
                                    },
                                    {
                                      code: 'oaUserId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.oaUserId',
                                      compType: 'Input',
                                      name: 'oaUserId',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-2',
                                      id: 'root.body.oaUserId',
                                      dataKey: '665644_root.body.oaUserId',
                                      value: {
                                        type: ['context', '$Form_0032615$'],
                                        code: 'oaUserId',
                                      },
                                    },
                                    {
                                      code: 'groupName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.groupName',
                                      compType: 'Input',
                                      name: 'groupName',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-3',
                                      id: 'root.body.groupName',
                                      dataKey: '665644_root.body.groupName',
                                      value: {
                                        type: ['context', '$Form_0032615$'],
                                        code: 'groupName',
                                      },
                                    },
                                    {
                                      code: 'groupId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.groupId',
                                      compType: 'Input',
                                      name: 'groupId',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-4',
                                      id: 'root.body.groupId',
                                      dataKey: '665644_root.body.groupId',
                                      value: {
                                        type: ['context', '$Form_0032615$'],
                                        code: 'groupId',
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
                                  dataKey: '665644_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '665644_root',
                            },
                          ],
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'reloadTableData',
                            dataId: 168649315289471650,
                            shielding: true,
                            options: {
                              compId: 'Table_08098',
                              compLib: 'comm',
                              pageJsonId: '6584614',
                              compName: 'Table',
                              id: '0095897',
                              data: '$reply_665644?.resultData.records$',
                              total: '$reply_665644?.resultData.total$',
                              current: '$reply_665644?.resultData.current$',
                            },
                            line_number: 5,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'apiRequest',
                        dataId: 169321363918304160,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '9599858',
                          pageJsonId: '6584614',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'queryGroupCustomerList',
                          _apiCode: 'queryGroupCustomerList',
                          _source: 'rhin',
                          _serviceId: '876387158751866880',
                          _serviceTitle:
                            '查询集团信息-hdb: queryGroupCustomerList',
                          params: 'object',
                          apiRequestSetParams: [
                            {
                              code: 'root',
                              name: '根节点',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'orderNbr',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.orderNbr',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      id: 'root.body.orderNbr',
                                      dataKey: '813739_root.body.orderNbr',
                                      value: {
                                        type: ['context', '$state.orderNbr$'],
                                        code: '',
                                      },
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                    },
                                    {
                                      code: 'oaUserId',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.oaUserId',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      id: 'root.body.oaUserId',
                                      dataKey: '813739_root.body.oaUserId',
                                      value: {
                                        type: ['customize'],
                                        code: '$reply_557119?.resultData[0].userId$',
                                      },
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-1',
                                    },
                                    {
                                      code: 'pageSize',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.pageSize',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-4',
                                      id: 'root.body.pageSize',
                                      dataKey: '813739_root.body.pageSize',
                                      value: { type: ['customize'], code: '5' },
                                    },
                                    {
                                      code: 'groupName',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.groupName',
                                      compType: 'Input',
                                      name: 'groupName',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-2',
                                    },
                                    {
                                      code: 'groupId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.groupId',
                                      compType: 'Input',
                                      name: 'groupId',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-3',
                                    },
                                  ],
                                  _id: 'root.body',
                                  compType: 'Input',
                                  parents: ['root'],
                                  id: 'root.body',
                                  dataKey: '813739_root.body',
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-3',
                                },
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
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '813739_root',
                            },
                          ],
                          _sourceName: '查询集团信息-hdb',
                        },
                        line_number: 6,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 169321363918302530,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '0178537',
                              pageJsonId: '6584614',
                              dataSourceId: 166609528011893860,
                              dataSourceName: 'groupList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  code: 'total',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '3933013',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  _codePath: ['total'],
                                  _idpath: ['3933013'],
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_9599858?.resultData.total$',
                                  },
                                },
                                {
                                  code: 'current',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '499923',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  _codePath: ['current'],
                                  _idpath: ['499923'],
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_9599858?.resultData.current$',
                                  },
                                },
                                {
                                  code: 'size',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '61818',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  _codePath: ['size'],
                                  _idpath: ['61818'],
                                  value: { type: ['customize'], code: '5' },
                                },
                                {
                                  code: 'records',
                                  children: [
                                    {
                                      code: 'orgZone',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '099671',
                                      initialData: {
                                        type: 'static',
                                        value: '1010252',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'orgZone'],
                                      _idpath: ['687998', '099671'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'enterpriseKind',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '7374046',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'enterpriseKind'],
                                      _idpath: ['687998', '7374046'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'groupId',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '9406922',
                                      initialData: {
                                        type: 'static',
                                        value: '5911920813',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'groupId'],
                                      _idpath: ['687998', '9406922'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'orgTypeName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '253375',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'orgTypeName'],
                                      _idpath: ['687998', '253375'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'groupLevelName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '349387',
                                      initialData: {
                                        type: 'static',
                                        value: '待定',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'groupLevelName'],
                                      _idpath: ['687998', '349387'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'managerName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '5592773',
                                      initialData: {
                                        type: 'static',
                                        value: '黄娜娜',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'managerName'],
                                      _idpath: ['687998', '5592773'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'contactTel',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '865281',
                                      initialData: {
                                        type: 'static',
                                        value: '13444444444',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'contactTel'],
                                      _idpath: ['687998', '865281'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'orgType',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '779178',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'orgType'],
                                      _idpath: ['687998', '779178'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'tradeclass',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '835847',
                                      initialData: {
                                        type: 'static',
                                        value: '101',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'tradeclass'],
                                      _idpath: ['687998', '835847'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'enterpriseScope',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '796505',
                                      initialData: {
                                        type: 'static',
                                        value: '1',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'enterpriseScope'],
                                      _idpath: ['687998', '796505'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'homeCounty',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '1194342',
                                      initialData: {
                                        type: 'static',
                                        value: '101',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'homeCounty'],
                                      _idpath: ['687998', '1194342'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'orgZoneName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '432661',
                                      initialData: {
                                        type: 'static',
                                        value: '鼓楼后台支撑组',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'orgZoneName'],
                                      _idpath: ['687998', '432661'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'homeCity',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '219497',
                                      initialData: {
                                        type: 'static',
                                        value: '591',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'homeCity'],
                                      _idpath: ['687998', '219497'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'statusName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '536606',
                                      initialData: {
                                        type: 'static',
                                        value: '正使用',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'statusName'],
                                      _idpath: ['687998', '536606'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'tradeclassTopName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '224454',
                                      initialData: {
                                        type: 'static',
                                        value: '农、林、牧、渔业',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: [
                                        'records',
                                        'tradeclassTopName',
                                      ],
                                      _idpath: ['687998', '224454'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'tradeclassName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '842265',
                                      initialData: {
                                        type: 'static',
                                        value: '农业',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'tradeclassName'],
                                      _idpath: ['687998', '842265'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'managerContactTel',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '438869',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: [
                                        'records',
                                        'managerContactTel',
                                      ],
                                      _idpath: ['687998', '438869'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'enterpriseScopeName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '894927',
                                      initialData: {
                                        type: 'static',
                                        value: '跨国集团',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: [
                                        'records',
                                        'enterpriseScopeName',
                                      ],
                                      _idpath: ['687998', '894927'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'homeCityName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '659661',
                                      initialData: {
                                        type: 'static',
                                        value: '福州',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'homeCityName'],
                                      _idpath: ['687998', '659661'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'managerId',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '938307',
                                      initialData: {
                                        type: 'static',
                                        value: '1010161',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'managerId'],
                                      _idpath: ['687998', '938307'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'valueLevel',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '418984',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'valueLevel'],
                                      _idpath: ['687998', '418984'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'groupName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '821461',
                                      initialData: {
                                        type: 'static',
                                        value: 'Test集团Test集团455',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'groupName'],
                                      _idpath: ['687998', '821461'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'enterpriseKindName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '755924',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: [
                                        'records',
                                        'enterpriseKindName',
                                      ],
                                      _idpath: ['687998', '755924'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'tradeclassTop',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '059337',
                                      initialData: {
                                        type: 'static',
                                        value: '1',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'tradeclassTop'],
                                      _idpath: ['687998', '059337'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'valueLevelName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '9398467',
                                      initialData: { type: 'static' },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'valueLevelName'],
                                      _idpath: ['687998', '9398467'],
                                      parentCode: 'records',
                                    },
                                    {
                                      code: 'homeCountyName',
                                      name: '属性',
                                      type: 'string',
                                      attrId: '005949',
                                      initialData: {
                                        type: 'static',
                                        value: '鼓楼',
                                      },
                                      parentKey: 'records',
                                      parentType: 'object',
                                      showInput: false,
                                      _codePath: ['records', 'homeCountyName'],
                                      _idpath: ['687998', '005949'],
                                      parentCode: 'records',
                                    },
                                  ],
                                  name: '',
                                  type: 'objectArray',
                                  attrId: '687998',
                                  initialData: { type: 'static' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: ['customize'],
                                    code: '$reply_9599858?.resultData.instances$',
                                  },
                                  _codePath: ['records'],
                                  _idpath: ['687998'],
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
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 168649306703400930,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '674935',
                          pageJsonId: '6584614',
                          type: 'info',
                          value: '请添加集团编码、集团名称或工号做为查询条件！',
                        },
                        line_number: 8,
                      },
                    ],
                  },
                ],
              },
            ];
            eventDatagetCurrentFormValues22.params =
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
              eventDatagetCurrentFormValues22,
              { page, pageSize },
              'getCurrentFormValues',
              {
                id: 'getCurrentFormValues',
                name: 'getCurrentFormValues',
                type: 'getCurrentFormValues',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Table_08098')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(GroupInfoSel$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    groupCode: '',
    userCode: '',
    orderNbr: '',
  },
});
