// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Form,
  Input,
  Table,
  Text,
  Tree,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const MeetingSelectuserlist$$Modal: React.FC<PageProps> = ({
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
}) => {
  const onOk = () => {
    const eventDatagetCurrentFormValues14: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 166061894447757800,
        options: {
          compId: 'Form_486003',
          compLib: 'comm',
          pageJsonId: '2310769',
          compName: 'Form',
          id: '7230334',
        },
        line_number: 1,
        callback1: [
          {
            type: 'okCallbackData',
            dataId: 166061895947703200,
            options: {
              compId: 'okCallbackData',
              compName: 'page',
              id: '7882048',
              pageJsonId: '2310769',
              params: '$Form_486003$',
            },
            line_number: 2,
          },
          {
            type: 'closeModal',
            dataId: 166061896871060480,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '876086',
              pageJsonId: '2310769',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDatagetCurrentFormValues14.params = [] || [];
    CMDGenerator(eventDatagetCurrentFormValues14, {}, 'getCurrentFormValues', {
      id: 'getCurrentFormValues',
      name: 'getCurrentFormValues',
      type: 'getCurrentFormValues',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal51: any = [
      {
        type: 'closeModal',
        dataId: '285762_1',
        options: { compId: 'page', compName: 'page', id: '059026' },
        line_number: 1,
      },
    ];
    eventDatacloseModal51.params = [] || [];
    CMDGenerator(eventDatacloseModal51, {}, 'closeModal', {
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
    const eventDataapiRequest393: any = [
      {
        type: 'apiRequest',
        dataId: 166056541728129250,
        options: {
          compId: 'sys',
          compName: 'system',
          pageJsonId: '2310769',
          id: '122621',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'fetchUserOrgTree',
          _apiCode: 'fetchUserOrgTree',
          _source: 'rhin',
          _serviceId: '876407465902501888',
          _serviceTitle: '查询用户机构树信息: fetchUserOrgTree',
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
                  dataKey: '122621_root.header',
                  key: '0-0',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '122621_root.path',
                  key: '0-1',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '122621_root.query',
                  key: '0-2',
                  parentType: 'object',
                  parentKey: '0',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'meetingFlag',
                      name: '是否会签',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.meetingFlag',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      id: 'root.body.meetingFlag',
                      dataKey: '122621_root.body.meetingFlag',
                      value: { type: ['customize'], code: 'Y' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-3',
                    },
                    {
                      code: 'flowCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.flowCode',
                      compType: 'Input',
                      name: 'flowCode',
                      parents: ['root', 'body'],
                      id: 'root.body.flowCode',
                      dataKey: '122621_root.body.flowCode',
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                    {
                      code: 'tacheCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.tacheCode',
                      compType: 'Input',
                      name: 'tacheCode',
                      parents: ['root', 'body'],
                      id: 'root.body.tacheCode',
                      dataKey: '122621_root.body.tacheCode',
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                    },
                    {
                      code: 'workItemId',
                      name: '流程环节实例id',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.workItemId',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.workItemId',
                      dataKey: '122621_root.body.workItemId',
                      value: {
                        type: ['context', '$state.workItemId$'],
                        code: '',
                      },
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '122621_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '122621_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166056541728106750,
            options: {
              compId: 'Tree_443137',
              compName: 'Tree',
              compLib: 'comm',
              pageJsonId: '2310769',
              id: '673281',
              data: '$reply_122621?.resultData.treeNodes$',
              labelKey: 'orgName',
              nodeValueKey: 'orgId',
              childrenKey: 'children',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '774459',
                    options: {
                      context: '$reply_122621?.resultData.defualtOrgCode$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167051098485056450,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'setTreeSelectedKey',
                    dataId: 167051098485087740,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '50131',
                      value: '$reply_122621?.resultData.defualtOrgCode$',
                    },
                    line_number: 4,
                    callback1: [],
                  },
                  {
                    type: 'setExpandedKey',
                    dataId: 167051098485065660,
                    options: {
                      compId: 'Tree_443137',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Tree',
                      id: '2332174',
                      value: '$reply_122621?.resultData.defualtOrgCode$',
                    },
                    line_number: 5,
                  },
                ],
              },
              {
                type: 'setLoading',
                dataId: 169692265582725000,
                options: {
                  compId: 'Table_2310769_112',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Table',
                  id: '6499533',
                  loading: true,
                },
                line_number: 6,
              },
              {
                type: 'getTreeSelectedKey',
                dataId: 169692266874875680,
                options: {
                  compId: 'Tree_443137',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Tree',
                  id: '653948',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'getValue',
                    dataId: 169692266874861700,
                    options: {
                      compId: 'Input_262276',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Input',
                      id: '911961',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'reloadDataSource',
                        dataId: 169692266874893220,
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '761521',
                          pageJsonId: '2310769',
                          dataSourceId: 166057056526189100,
                          dataSourceName: 'staffList',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '873162',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              _codePath: ['header'],
                              _idpath: ['873162'],
                            },
                            {
                              attrId: '6952216',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              _codePath: ['path'],
                              _idpath: ['6952216'],
                            },
                            {
                              attrId: '321962',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              _codePath: ['query'],
                              _idpath: ['321962'],
                            },
                            {
                              attrId: '3621852',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '716607',
                                  code: 'keyLike',
                                  name: 'keyLike',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: ['context', '$value_911961$'],
                                    code: '',
                                  },
                                  _codePath: ['body', 'keyLike'],
                                  _idpath: ['3621852', '716607'],
                                },
                                {
                                  attrId: '882351',
                                  code: 'orgId',
                                  name: 'orgId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: [
                                      'context',
                                      '$reply_122621?.resultData.defualtOrgCode$',
                                    ],
                                    code: '',
                                    hideAttr: true,
                                  },
                                  _codePath: ['body', 'orgId'],
                                  _idpath: ['3621852', '882351'],
                                },
                                {
                                  attrId: '879186',
                                  code: 'pageNum',
                                  name: 'pageNum',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  value: { type: ['customize'], code: '1' },
                                  _codePath: ['body', 'pageNum'],
                                  _idpath: ['3621852', '879186'],
                                },
                                {
                                  attrId: '8683064',
                                  code: 'pageSize',
                                  name: 'pageSize',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                  value: { type: ['customize'], code: '10' },
                                  _codePath: ['body', 'pageSize'],
                                  _idpath: ['3621852', '8683064'],
                                },
                                {
                                  attrId: '623196',
                                  code: 'flowCode',
                                  name: '流程编码',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  _codePath: ['body', 'flowCode'],
                                  _idpath: ['3621852', '623196'],
                                },
                                {
                                  attrId: '275837',
                                  code: 'meetingFlag',
                                  name: '是否会签',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: { type: ['customize'], code: 'Y' },
                                  _codePath: ['body', 'meetingFlag'],
                                  _idpath: ['3621852', '275837'],
                                },
                                {
                                  attrId: '015829',
                                  code: 'tacheCode',
                                  name: '环节编码',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  _codePath: ['body', 'tacheCode'],
                                  _idpath: ['3621852', '015829'],
                                },
                                {
                                  attrId: '226886',
                                  code: 'workItemId',
                                  name: '流程环节实例id',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  _codePath: ['body', 'workItemId'],
                                  _idpath: ['3621852', '226886'],
                                  value: {
                                    type: ['context', '$state.workItemId$'],
                                    code: '',
                                  },
                                },
                              ],
                              _codePath: ['body'],
                              _idpath: ['3621852'],
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '8231372',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '977921',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '239828',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '199262',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '261807',
                                  code: 'total',
                                  name: 'total',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '009955',
                                  code: 'size',
                                  name: 'size',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '881268',
                                  code: 'current',
                                  name: 'current',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '548601',
                                  code: 'pages',
                                  name: 'pages',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'long',
                                },
                                {
                                  attrId: '636447',
                                  code: 'records',
                                  name: 'records',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'objectArray',
                                  children: [
                                    {
                                      attrId: '0654394',
                                      code: 'userName',
                                      name: 'userName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '70561',
                                      code: 'userId',
                                      name: 'userId',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '526672',
                                      code: 'userCode',
                                      name: 'userCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '2509664',
                                      code: 'userText',
                                      name: 'userText',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '557295',
                                      code: 'orgName',
                                      name: 'orgName',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '4060293',
                                      code: 'orgCode',
                                      name: 'orgCode',
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
                        line_number: 9,
                        callback1: [
                          {
                            type: 'setLoading',
                            dataId: 169692266874812350,
                            options: {
                              compId: 'Table_2310769_112',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Table',
                              id: '44013',
                              loading: false,
                            },
                            line_number: 10,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 169692266874842200,
                            options: {
                              compId: 'Table_2310769_112',
                              compLib: 'comm',
                              pageJsonId: '2310769',
                              compName: 'Table',
                              id: '674114',
                              loading: false,
                            },
                            line_number: 11,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'getTreeSelectedKey',
            dataId: 167051115577881400,
            shielding: true,
            options: {
              compId: 'Tree_443137',
              compLib: 'comm',
              pageJsonId: '2310769',
              compName: 'Tree',
              id: '2330226',
            },
            line_number: 12,
            callback1: [
              {
                type: 'console',
                dataId: 169692140700440600,
                shielding: true,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '660335',
                  pageJsonId: '2310769',
                  value: ['$selectedKeys_2330226[0]$'],
                },
                line_number: 13,
              },
              {
                type: 'getValue',
                dataId: 167051115577845120,
                shielding: true,
                options: {
                  compId: 'Input_262276',
                  compLib: 'comm',
                  pageJsonId: '2310769',
                  compName: 'Input',
                  id: '700014',
                },
                line_number: 14,
                callback1: [
                  {
                    type: 'reloadDataSource',
                    dataId: 167051115577835200,
                    shielding: true,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '334763',
                      pageJsonId: '2310769',
                      dataSourceId: 166057056526189100,
                      dataSourceName: 'staffList',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '873162',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          _codePath: ['header'],
                          _idpath: ['873162'],
                        },
                        {
                          attrId: '6952216',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          _codePath: ['path'],
                          _idpath: ['6952216'],
                        },
                        {
                          attrId: '321962',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          _codePath: ['query'],
                          _idpath: ['321962'],
                        },
                        {
                          attrId: '3621852',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '716607',
                              code: 'keyLike',
                              name: 'keyLike',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: ['context', '$value_700014$'],
                                code: '',
                              },
                              _codePath: ['body', 'keyLike'],
                              _idpath: ['3621852', '716607'],
                            },
                            {
                              attrId: '882351',
                              code: 'orgId',
                              name: 'orgId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: {
                                type: ['context', '$selectedKeys_2330226[0]$'],
                                code: '',
                              },
                              _codePath: ['body', 'orgId'],
                              _idpath: ['3621852', '882351'],
                            },
                            {
                              attrId: '879186',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              value: { type: ['customize'], code: '1' },
                              _codePath: ['body', 'pageNum'],
                              _idpath: ['3621852', '879186'],
                            },
                            {
                              attrId: '8683064',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              value: { type: ['customize'], code: '10' },
                              _codePath: ['body', 'pageSize'],
                              _idpath: ['3621852', '8683064'],
                            },
                            {
                              attrId: '623196',
                              code: 'flowCode',
                              name: '流程编码',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              _codePath: ['body', 'flowCode'],
                              _idpath: ['3621852', '623196'],
                            },
                            {
                              attrId: '275837',
                              code: 'meetingFlag',
                              name: '是否会签',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: { type: ['customize'], code: 'Y' },
                              _codePath: ['body', 'meetingFlag'],
                              _idpath: ['3621852', '275837'],
                            },
                            {
                              attrId: '015829',
                              code: 'tacheCode',
                              name: '环节编码',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              _codePath: ['body', 'tacheCode'],
                              _idpath: ['3621852', '015829'],
                            },
                            {
                              attrId: '226886',
                              code: 'workItemId',
                              name: '流程环节实例id',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'workItemId'],
                              _idpath: ['3621852', '226886'],
                            },
                          ],
                          _codePath: ['body'],
                          _idpath: ['3621852'],
                        },
                      ],
                      dataSourceSetValue: [
                        {
                          attrId: '8231372',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '977921',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '239828',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '199262',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '261807',
                              code: 'total',
                              name: 'total',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '009955',
                              code: 'size',
                              name: 'size',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '881268',
                              code: 'current',
                              name: 'current',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '548601',
                              code: 'pages',
                              name: 'pages',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                            },
                            {
                              attrId: '636447',
                              code: 'records',
                              name: 'records',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'objectArray',
                              children: [
                                {
                                  attrId: '0654394',
                                  code: 'userName',
                                  name: 'userName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '70561',
                                  code: 'userId',
                                  name: 'userId',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '526672',
                                  code: 'userCode',
                                  name: 'userCode',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '2509664',
                                  code: 'userText',
                                  name: 'userText',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '557295',
                                  code: 'orgName',
                                  name: 'orgName',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '4060293',
                                  code: 'orgCode',
                                  name: 'orgCode',
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
                    line_number: 15,
                    callback1: [
                      {
                        type: 'setLoading',
                        dataId: 167051115577871650,
                        shielding: true,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '2784914',
                          loading: false,
                        },
                        line_number: 16,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 167051115577845540,
                        shielding: true,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '370209',
                          loading: false,
                        },
                        line_number: 17,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest393.params = [] || [];
    CMDGenerator(eventDataapiRequest393, {}, 'apiRequest', {
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
      className="__CustomClass_2310769__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_2310769_1',
          uid: 'View_2310769_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'row',
          padding: 0,
        }}
        ref={(r: any) => (refs['View_2310769_1'] = r)}
        {...injectData}
      >
        <Card
          name={'查询面板'}
          title={'查询条件'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          cardIconType={'middle'}
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
            id: 'Card_2310769_12',
            uid: 'Card_2310769_12',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            width: '300px',
            padding: '12px 12px 12px 12px',
            height: '100%',
          }}
          ref={(r: any) => (refs['Card_2310769_12'] = r)}
          {...injectData}
        >
          <Form
            name={'查询表单'}
            header={'标题'}
            colSpan={24}
            colSpace={16}
            rowSpace={16}
            labelCol={24}
            wrapperCol={24}
            layout={'vertical'}
            genRuleType={'key'}
            formType={'query'}
            relationDataSource={''}
            $$componentItem={{
              id: 'Form_2310769_121',
              uid: 'Form_2310769_121',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '16px 16px 16px 16px' }}
            ref={(r: any) => (refs['Form_2310769_121'] = r)}
            {...injectData}
          >
            <Tree
              name={'组织树'}
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
              labelCol={24}
              wrapperCol={24}
              treeColumns={{
                key: 'orgId',
                title: 'orgName',
                children: 'children',
                selectedService: {
                  busiApiId: '876407465902501888',
                  busiApiNbr: 'fetchUserOrgTree',
                  busiApiName: '查询用户机构树信息',
                  busiObjId: '876407465902501888',
                  apiParam:
                    '[{"apiId":876407465902501888,"apiParamId":876407465957027840,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"1000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222144,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222144,"serviceObjectPath":"876407465961222144","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222144,"paramType":"1000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222145,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"2000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222146,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222146,"serviceObjectPath":"876407465961222146","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222146,"paramType":"2000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222147,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"3000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222148,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222148,"serviceObjectPath":"876407465961222148","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222148,"paramType":"3000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222149,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"4000","remark":"根节点，这个节点不能删除","rootServiceObjectId":876407465961222150,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":876407465961222150,"serviceObjectPath":"876407465961222150","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222150,"paramType":"4000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"},{"apiId":876407465902501888,"apiParamId":876407465961222151,"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"objId":876407465902501888,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660558222730,"createStaff":50169,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"5000","remark":"根节点","rootServiceObjectId":876407465961222152,"serviceObject":[{"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"isList":"T","level":2,"parServiceObjectId":876407465961222152,"paramType":"5000","rootServiceObjectId":876407465961222152,"serviceObject":[],"serviceObjectAttrs":[{"attrId":1516,"attrSpec":{"attrId":1516,"attrName":"orgId","attrNbr":"orgId","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"1","mustFlag":"F","serviceObjAttrId":876452546446012416,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},{"attrId":1512,"attrSpec":{"attrId":1512,"attrName":"orgName","attrNbr":"orgName","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"福建省公司","mustFlag":"F","serviceObjAttrId":876452546450206720,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},{"attrId":876452546450206723,"attrSpec":{"attrId":876452546450206723,"attrName":"children","attrNbr":"children","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"mustFlag":"F","serviceObjAttrId":876452546450206722,"serviceObjectId":876452546202742784,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"}],"serviceObjectCode":"resultData","serviceObjectId":876452546202742784,"serviceObjectPath":"876407465961222152,876452546202742784","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":842306878819315712,"attrSpec":{"attrId":842306878819315712,"attrName":"resultCode","attrNbr":"resultCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"0","mustFlag":"F","serviceObjAttrId":876452546508926976,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},{"attrId":842306878819315714,"attrSpec":{"attrId":842306878819315714,"attrName":"resultMsg","attrNbr":"resultMsg","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"exampleValue":"SUCCESS","mustFlag":"F","serviceObjAttrId":876452546508926977,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},{"attrId":874132034551685121,"attrSpec":{"attrId":874132034551685121,"attrName":"resultMsgCode","attrNbr":"resultMsgCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1660568970181,"createStaff":50171,"mustFlag":"F","serviceObjAttrId":876452546508926978,"serviceObjectId":876407465961222152,"statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":876407465961222152,"serviceObjectPath":"876407465961222152","statusCd":"1000","statusDate":1660569794715,"tenantCode":"868768414651416576"},"paramObjectId":876407465961222152,"paramType":"5000","statusCd":"1000","statusDate":1660558222730,"tenantCode":"868768414651416576"}]',
                  request: {
                    code: 'root',
                    name: '根节点',
                    attrType: 'object',
                    children: [
                      {
                        code: 'header',
                        name: '请求头参数',
                        attrType: 'object',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                      },
                      { code: 'query', name: 'URL 参数', attrType: 'object' },
                      { code: 'body', name: '请求体', attrType: 'object' },
                    ],
                  },
                  response: {
                    code: 'root',
                    name: '根节点',
                    attrType: 'object',
                    children: [
                      {
                        code: 'resultCode',
                        attrType: 'field',
                        type: '1200',
                        mustFlag: 'F',
                      },
                      {
                        code: 'resultMsg',
                        attrType: 'field',
                        type: '1200',
                        mustFlag: 'F',
                      },
                      {
                        code: 'resultMsgCode',
                        attrType: 'field',
                        type: '1200',
                        mustFlag: 'F',
                      },
                      {
                        code: 'resultData',
                        attrType: 'objectArray',
                        children: [
                          {
                            code: 'orgId',
                            attrType: 'field',
                            type: '1200',
                            mustFlag: 'F',
                          },
                          {
                            code: 'orgName',
                            attrType: 'field',
                            type: '1200',
                            mustFlag: 'F',
                          },
                          {
                            code: 'children',
                            attrType: 'field',
                            type: '1200',
                            mustFlag: 'F',
                          },
                        ],
                      },
                    ],
                  },
                  productId: '11052',
                  api: '/app/rhin/gateway/callRhinEngine',
                  _source: 'rhin',
                  _serviceId: '876407465902501888',
                  _serviceTitle: '查询用户机构树信息: fetchUserOrgTree',
                  _capabilityCode: 'fetchUserOrgTree',
                  _apiCode: 'fetchUserOrgTree',
                  isServiceParam: true,
                  requestType: 'object',
                  responseType: 'object',
                },
              }}
              treeService={{
                appId: '871672424566726656',
                _serviceId: '876407465902501888',
                _source: 'rhin',
                api: '/app/rhin/gateway/callRhinEngine',
                key: 'orgId',
                title: 'orgName',
                children: 'children',
              }}
              asyncColumns={{ selectedService: null }}
              checkable={false}
              className={'huiqianchulirenxuanze'}
              $$componentItem={{
                id: 'Tree_443137',
                uid: 'Tree_443137',
                type: 'Tree',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 3,
                props: {
                  formItemIndex: 0,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              onSelect={(selectedKeys: any, { node }: any) => {
                const eventDatasetLoading194: any = [
                  {
                    type: 'setLoading',
                    dataId: 166366204910037800,
                    options: {
                      compId: 'Table_2310769_112',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '0040435',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading194.params =
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
                  eventDatasetLoading194,
                  { selectedKeys, node },
                  'setLoading',
                  {
                    id: 'setLoading',
                    name: 'setLoading',
                    type: 'setLoading',
                    platform: 'pc',
                  },
                ); // console 166057071693987300
                console.log(node?.props?.data);
                const eventDataifelse485: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '217069',
                        options: {
                          context: '$selectedKeys[0]$',
                          operate: 'empty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166366195796566900,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166366198784546140,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 16636619893428332,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166366198934284930,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                            ],
                            todoOptions: ['value'],
                            options: {
                              compId: 'Text_895823',
                              compLib: 'custom',
                              pageJsonId: '2310769',
                              compName: 'Text',
                              id: '414669',
                              value: '$node.props.data.data.orgName$',
                            },
                            actionObjId: 'Text_895823',
                            actionObjName: 'Text',
                            value: 'setCompContentValue',
                            compLib: 'custom',
                            line_number: 5,
                          },
                        ],
                        condition: [],
                        callback: [
                          {
                            type: 'setCompContentValue',
                            dataId: 16636619893428332,
                            options: {
                              compId: 'Text_895823',
                              compLib: 'custom',
                              pageJsonId: '2310769',
                              compName: 'Text',
                              id: '414669',
                              value: '$node.props.data.data.orgName$',
                            },
                            line_number: 5,
                            callback1: [],
                          },
                        ],
                      },
                    ],
                    line_number: 3,
                    callback1: [
                      {
                        type: 'setCompContentValue',
                        dataId: 166366198630181700,
                        options: {
                          compId: 'Text_895823',
                          compLib: 'custom',
                          pageJsonId: '2310769',
                          compName: 'Text',
                          id: '8577567',
                          value: '默认查询所有组织下的用户',
                        },
                        line_number: 4,
                        callback1: [],
                      },
                    ],
                  },
                ];
                eventDataifelse485.params =
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
                  eventDataifelse485,
                  { selectedKeys, node },
                  'ifelse',
                  {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  },
                );
                const eventDataclearValue152: any = [
                  {
                    type: 'clearValue',
                    dataId: 166185791224698000,
                    options: {
                      compId: 'Input_262276',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Input',
                      id: '5945497',
                    },
                    line_number: 6,
                  },
                ];
                eventDataclearValue152.params =
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
                  eventDataclearValue152,
                  { selectedKeys, node },
                  'clearValue',
                  {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  },
                );
                const eventDatareloadDataSource87: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 166057047314173800,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '541624',
                      pageJsonId: '2310769',
                      dataSourceId: 166057056526189100,
                      dataSourceName: 'staffList',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '873162',
                          code: 'header',
                          name: '请求头参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          key: 'header',
                          _codePath: ['header'],
                          _idpath: ['873162'],
                        },
                        {
                          attrId: '6952216',
                          code: 'path',
                          name: '请求路径参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          key: 'path',
                          _codePath: ['path'],
                          _idpath: ['6952216'],
                        },
                        {
                          attrId: '321962',
                          code: 'query',
                          name: 'URL 参数',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          key: 'query',
                          _codePath: ['query'],
                          _idpath: ['321962'],
                        },
                        {
                          attrId: '3621852',
                          code: 'body',
                          name: '请求体',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                          children: [
                            {
                              attrId: '882351',
                              code: 'orgId',
                              name: 'orgId',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              key: 'body.orgId',
                              value: {
                                type: ['context', '$selectedKeys[0]$'],
                                code: '',
                              },
                              _codePath: ['body', 'orgId'],
                              _idpath: ['3621852', '882351'],
                            },
                            {
                              attrId: '716607',
                              code: 'keyLike',
                              name: 'keyLike',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              _codePath: ['body', 'keyLike'],
                              _idpath: ['3621852', '716607'],
                            },
                            {
                              attrId: '8683064',
                              code: 'pageSize',
                              name: 'pageSize',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              value: { type: ['customize'], code: '10' },
                              _codePath: ['body', 'pageSize'],
                              _idpath: ['3621852', '8683064'],
                            },
                            {
                              attrId: '879186',
                              code: 'pageNum',
                              name: 'pageNum',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'long',
                              value: { type: ['customize'], code: '1' },
                              _codePath: ['body', 'pageNum'],
                              _idpath: ['3621852', '879186'],
                            },
                            {
                              attrId: '623196',
                              code: 'flowCode',
                              name: '流程编码',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              _codePath: ['body', 'flowCode'],
                              _idpath: ['3621852', '623196'],
                            },
                            {
                              attrId: '275837',
                              code: 'meetingFlag',
                              name: '是否会签',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              value: { type: ['customize'], code: 'Y' },
                              _codePath: ['body', 'meetingFlag'],
                              _idpath: ['3621852', '275837'],
                            },
                            {
                              attrId: '015829',
                              code: 'tacheCode',
                              name: '环节编码',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                              _codePath: ['body', 'tacheCode'],
                              _idpath: ['3621852', '015829'],
                            },
                            {
                              attrId: '226886',
                              code: 'workItemId',
                              name: '流程环节实例id',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              _codePath: ['body', 'workItemId'],
                              _idpath: ['3621852', '226886'],
                              value: {
                                type: ['context', '$state.workItemId$'],
                                code: '',
                              },
                            },
                          ],
                          key: 'body',
                          _codePath: ['body'],
                          _idpath: ['3621852'],
                        },
                      ],
                      dataSourceSetValue: [
                        {
                          attrId: '8231372',
                          code: 'resultCode',
                          name: 'resultCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '977921',
                          code: 'resultMsg',
                          name: 'resultMsg',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '239828',
                          code: 'resultMsgCode',
                          name: 'resultMsgCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '199262',
                          code: 'resultData',
                          name: 'resultData',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'objectArray',
                          children: [
                            {
                              attrId: '378013405',
                              code: 'userName',
                              name: '用户名',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '1145924',
                              code: 'userId',
                              name: '用户id',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                          ],
                        },
                      ],
                      otherObjectArrayOptions: {},
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'setLoading',
                        dataId: 166366206023601730,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '903994',
                          loading: false,
                        },
                        line_number: 8,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 166366206181375600,
                        options: {
                          compId: 'Table_2310769_112',
                          compLib: 'comm',
                          pageJsonId: '2310769',
                          compName: 'Table',
                          id: '752733',
                          loading: false,
                        },
                        line_number: 9,
                      },
                    ],
                  },
                ];
                eventDatareloadDataSource87.params =
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
                  eventDatareloadDataSource87,
                  { selectedKeys, node },
                  'reloadDataSource',
                  {
                    id: 'reloadDataSource',
                    name: 'reloadDataSource',
                    type: 'reloadDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Tree_443137'] = r)}
              {...injectData}
            />
          </Form>
        </Card>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_2310769_11',
            uid: 'View_2310769_11',
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
            padding: '12px 12px 12px 12px',
            width: '600px',
            overflowY: 'hidden',
          }}
          ref={(r: any) => (refs['View_2310769_11'] = r)}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'默认查询所有组织下的用户'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_895823',
              uid: 'Text_895823',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{
              fontSize: '14px',
              lineHeight: '24px',
              color: 'rgba(208, 2, 27, 1)',
              fontWeight: '',
            }}
            ref={(r: any) => (refs['Text_895823'] = r)}
            {...injectData}
          />
          <Input
            name={'用户条件'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'查询'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入用户查询信息'}
            fieldName={'keyLike'}
            postfixStyle={'3'}
            allowClear={true}
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
              id: 'Input_262276',
              uid: 'Input_262276',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onIconClick={() => {
              const eventDatasetLoading195: any = [
                {
                  type: 'setLoading',
                  dataId: 166366207968525800,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '775871',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading195.params = [] || [];
              CMDGenerator(eventDatasetLoading195, {}, 'setLoading', {
                id: 'setLoading',
                name: 'setLoading',
                type: 'setLoading',
                platform: 'pc',
              });
              const eventDatagetTreeSelectedKey5: any = [
                {
                  type: 'getTreeSelectedKey',
                  dataId: 166185779197514560,
                  options: {
                    compId: 'Tree_443137',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Tree',
                    id: '290214',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'getValue',
                      dataId: 166185780129423900,
                      options: {
                        compId: 'Input_262276',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '4195108',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'reloadDataSource',
                          dataId: 166185783703143870,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '503449',
                            pageJsonId: '2310769',
                            dataSourceId: 166057056526189100,
                            dataSourceName: 'staffList',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '873162',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['header'],
                                _idpath: ['873162'],
                              },
                              {
                                attrId: '6952216',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['path'],
                                _idpath: ['6952216'],
                              },
                              {
                                attrId: '321962',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['query'],
                                _idpath: ['321962'],
                              },
                              {
                                attrId: '3621852',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '716607',
                                    code: 'keyLike',
                                    name: 'keyLike',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: ['context', '$value_4195108$'],
                                      code: '',
                                    },
                                    _codePath: ['body', 'keyLike'],
                                    _idpath: ['3621852', '716607'],
                                  },
                                  {
                                    attrId: '882351',
                                    code: 'orgId',
                                    name: 'orgId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'context',
                                        '$selectedKeys_290214[0]$',
                                      ],
                                      code: '',
                                    },
                                    _codePath: ['body', 'orgId'],
                                    _idpath: ['3621852', '882351'],
                                  },
                                  {
                                    attrId: '879186',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '1' },
                                    _codePath: ['body', 'pageNum'],
                                    _idpath: ['3621852', '879186'],
                                  },
                                  {
                                    attrId: '8683064',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '10' },
                                    _codePath: ['body', 'pageSize'],
                                    _idpath: ['3621852', '8683064'],
                                  },
                                  {
                                    attrId: '623196',
                                    code: 'flowCode',
                                    name: '流程编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    _codePath: ['body', 'flowCode'],
                                    _idpath: ['3621852', '623196'],
                                  },
                                  {
                                    attrId: '275837',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'Y' },
                                    _codePath: ['body', 'meetingFlag'],
                                    _idpath: ['3621852', '275837'],
                                  },
                                  {
                                    attrId: '015829',
                                    code: 'tacheCode',
                                    name: '环节编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    _codePath: ['body', 'tacheCode'],
                                    _idpath: ['3621852', '015829'],
                                  },
                                  {
                                    attrId: '226886',
                                    code: 'workItemId',
                                    name: '流程环节实例id',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    _codePath: ['body', 'workItemId'],
                                    _idpath: ['3621852', '226886'],
                                    value: {
                                      type: ['context', '$state.workItemId$'],
                                      code: '',
                                    },
                                  },
                                ],
                                _codePath: ['body'],
                                _idpath: ['3621852'],
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '8231372',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '977921',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '239828',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '199262',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '261807',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '009955',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '881268',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '548601',
                                    code: 'pages',
                                    name: 'pages',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '636447',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '0654394',
                                        code: 'userName',
                                        name: 'userName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '70561',
                                        code: 'userId',
                                        name: 'userId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '526672',
                                        code: 'userCode',
                                        name: 'userCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2509664',
                                        code: 'userText',
                                        name: 'userText',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '557295',
                                        code: 'orgName',
                                        name: 'orgName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4060293',
                                        code: 'orgCode',
                                        name: 'orgCode',
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
                              dataId: 166366208769535500,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '570138',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 166366208926168100,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '68951',
                                loading: false,
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ];
              eventDatagetTreeSelectedKey5.params = [] || [];
              CMDGenerator(
                eventDatagetTreeSelectedKey5,
                {},
                'getTreeSelectedKey',
                {
                  id: 'getTreeSelectedKey',
                  name: 'getTreeSelectedKey',
                  type: 'getTreeSelectedKey',
                  platform: 'pc',
                },
              );
            }}
            onPressEnter={(e: any) => {
              const eventDatasetLoading196: any = [
                {
                  type: 'setLoading',
                  dataId: 167004610220808000,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '9070466',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading196.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatasetLoading196, { e }, 'setLoading', {
                id: 'setLoading',
                name: 'setLoading',
                type: 'setLoading',
                platform: 'pc',
              });
              const eventDatagetTreeSelectedKey6: any = [
                {
                  type: 'getTreeSelectedKey',
                  dataId: 167004611120848500,
                  options: {
                    compId: 'Tree_443137',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Tree',
                    id: '985717',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'getValue',
                      dataId: 167004611121701250,
                      options: {
                        compId: 'Input_262276',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '970466',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'reloadDataSource',
                          dataId: 167004611121716380,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '266101',
                            pageJsonId: '2310769',
                            dataSourceId: 166057056526189100,
                            dataSourceName: 'staffList',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '873162',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['header'],
                                _idpath: ['873162'],
                              },
                              {
                                attrId: '6952216',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['path'],
                                _idpath: ['6952216'],
                              },
                              {
                                attrId: '321962',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['query'],
                                _idpath: ['321962'],
                              },
                              {
                                attrId: '3621852',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '716607',
                                    code: 'keyLike',
                                    name: 'keyLike',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: ['context', '$value_970466$'],
                                      code: '',
                                    },
                                    _codePath: ['body', 'keyLike'],
                                    _idpath: ['3621852', '716607'],
                                  },
                                  {
                                    attrId: '882351',
                                    code: 'orgId',
                                    name: 'orgId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'context',
                                        '$selectedKeys_985717[0]$',
                                      ],
                                      code: '',
                                    },
                                    _codePath: ['body', 'orgId'],
                                    _idpath: ['3621852', '882351'],
                                  },
                                  {
                                    attrId: '879186',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '1' },
                                    _codePath: ['body', 'pageNum'],
                                    _idpath: ['3621852', '879186'],
                                  },
                                  {
                                    attrId: '8683064',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: { type: ['customize'], code: '10' },
                                    _codePath: ['body', 'pageSize'],
                                    _idpath: ['3621852', '8683064'],
                                  },
                                  {
                                    attrId: '623196',
                                    code: 'flowCode',
                                    name: '流程编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    _codePath: ['body', 'flowCode'],
                                    _idpath: ['3621852', '623196'],
                                  },
                                  {
                                    attrId: '275837',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'Y' },
                                    _codePath: ['body', 'meetingFlag'],
                                    _idpath: ['3621852', '275837'],
                                  },
                                  {
                                    attrId: '015829',
                                    code: 'tacheCode',
                                    name: '环节编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    _codePath: ['body', 'tacheCode'],
                                    _idpath: ['3621852', '015829'],
                                  },
                                  {
                                    attrId: '226886',
                                    code: 'workItemId',
                                    name: '流程环节实例id',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    _codePath: ['body', 'workItemId'],
                                    _idpath: ['3621852', '226886'],
                                    value: {
                                      type: ['context', '$state.workItemId$'],
                                      code: '',
                                    },
                                  },
                                ],
                                _codePath: ['body'],
                                _idpath: ['3621852'],
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '8231372',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '977921',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '239828',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '199262',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '261807',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '009955',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '881268',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '548601',
                                    code: 'pages',
                                    name: 'pages',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '636447',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '0654394',
                                        code: 'userName',
                                        name: 'userName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '70561',
                                        code: 'userId',
                                        name: 'userId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '526672',
                                        code: 'userCode',
                                        name: 'userCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2509664',
                                        code: 'userText',
                                        name: 'userText',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '557295',
                                        code: 'orgName',
                                        name: 'orgName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4060293',
                                        code: 'orgCode',
                                        name: 'orgCode',
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
                              dataId: 167004611121732260,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '6631856',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 167004611121748400,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '309504',
                                loading: false,
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ];
              eventDatagetTreeSelectedKey6.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(
                eventDatagetTreeSelectedKey6,
                { e },
                'getTreeSelectedKey',
                {
                  id: 'getTreeSelectedKey',
                  name: 'getTreeSelectedKey',
                  type: 'getTreeSelectedKey',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Input_262276'] = r)}
            {...injectData}
          />
          <Table
            name={'total'}
            columns={[
              {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                className: '',
                id: '996483',
                width: 150,
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
                key: 'userCode',
                dataIndex: 'userCode',
                className: 'divider',
                id: '414664',
                width: 150,
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
                title: '部门',
                key: 'orgName',
                dataIndex: 'orgName',
                className: 'divider',
                id: '356793',
                width: 300,
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
            rowKey={'orgUserRelId'}
            scroll={{ y: 190 }}
            pageSize={data?.staffList?.resultData?.size}
            current={data?.staffList?.resultData?.current}
            total={data?.staffList?.resultData?.total}
            dataSource={data?.staffList?.resultData?.records}
            fieldName={'data.staffList.resultData.total'}
            adjustModel={'auto'}
            className={'Table_2310769_112'}
            dataSourceFromDataSourceConfig={'data.staffList.resultData.records'}
            $$componentItem={{
              id: 'Table_2310769_112',
              uid: 'Table_2310769_112',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px', flex: null }}
            onSelectChange={(selectedRowKeys: any, selectedRows: any) => {
              const eventDatagetTableSelected65: any = [
                {
                  type: 'getTableSelected',
                  dataId: 166027340676290750,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '273329',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setValue',
                      dataId: 166027451911338560,
                      options: {
                        compId: 'Input_3184618',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '674378',
                        value: '$selectedRows$',
                        valueList: { Input_3184618: '$selectedRows$' },
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'getValue',
                          dataId: 166028671884136900,
                          options: {
                            compId: 'Input_3184618',
                            compLib: 'comm',
                            pageJsonId: '2310769',
                            compName: 'Input',
                            id: '401664',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 166028673212361860,
                              shielding: true,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '616605',
                                pageJsonId: '2310769',
                                value: ['$value_401664$'],
                              },
                              line_number: 4,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'setValue',
                      dataId: 166027386516010140,
                      options: {
                        compId: 'Input_1845436',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '747766',
                        value:
                          "$selectedRows?.map((value, item) => {return value?.userName}).join(',')$",
                        valueList: {
                          Input_1845436:
                            "$(selectedRows || []).map(function (value, item) {return value && value.userName;}).join(',')$",
                        },
                      },
                      line_number: 5,
                      callback1: [],
                    },
                    {
                      type: 'console',
                      dataId: 166817777582561020,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '615861',
                        pageJsonId: '2310769',
                        value: [
                          "$selectedRows?.map((value, item) => {return value?.userName}).join(',')$",
                        ],
                      },
                      line_number: 6,
                    },
                    {
                      type: 'console',
                      dataId: 166817779180365540,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '815803',
                        pageJsonId: '2310769',
                        value: ['$selectedRowKeys$'],
                      },
                      line_number: 7,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelected65.params =
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
                eventDatagetTableSelected65,
                { selectedRowKeys, selectedRows },
                'getTableSelected',
                {
                  id: 'getTableSelected',
                  name: 'getTableSelected',
                  type: 'getTableSelected',
                  platform: 'pc',
                },
              );
            }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatasetLoading197: any = [
                {
                  type: 'setLoading',
                  dataId: 166366210194307070,
                  options: {
                    compId: 'Table_2310769_112',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Table',
                    id: '7593027',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading197.params =
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
                eventDatasetLoading197,
                { page, pageSize },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDatagetTreeSelectedKey7: any = [
                {
                  type: 'getTreeSelectedKey',
                  dataId: 166185330121298100,
                  options: {
                    compId: 'Tree_443137',
                    compLib: 'comm',
                    pageJsonId: '2310769',
                    compName: 'Tree',
                    id: '8050697',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'getValue',
                      dataId: 166185794207993380,
                      options: {
                        compId: 'Input_262276',
                        compLib: 'comm',
                        pageJsonId: '2310769',
                        compName: 'Input',
                        id: '039273',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'reloadDataSource',
                          dataId: 166185794725525950,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '4591678',
                            pageJsonId: '2310769',
                            dataSourceId: 166057056526189100,
                            dataSourceName: 'staffList',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '873162',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['header'],
                                _idpath: ['873162'],
                              },
                              {
                                attrId: '6952216',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['path'],
                                _idpath: ['6952216'],
                              },
                              {
                                attrId: '321962',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                _codePath: ['query'],
                                _idpath: ['321962'],
                              },
                              {
                                attrId: '3621852',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '716607',
                                    code: 'keyLike',
                                    name: 'keyLike',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: ['context', '$value_039273$'],
                                      code: '',
                                    },
                                    _codePath: ['body', 'keyLike'],
                                    _idpath: ['3621852', '716607'],
                                  },
                                  {
                                    attrId: '882351',
                                    code: 'orgId',
                                    name: 'orgId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'context',
                                        '$selectedKeys_8050697[0]$',
                                      ],
                                      code: '',
                                    },
                                    _codePath: ['body', 'orgId'],
                                    _idpath: ['3621852', '882351'],
                                  },
                                  {
                                    attrId: '879186',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: {
                                      type: ['context', '$page$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                    _codePath: ['body', 'pageNum'],
                                    _idpath: ['3621852', '879186'],
                                  },
                                  {
                                    attrId: '8683064',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                    value: {
                                      type: ['context', '$pageSize$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                    _codePath: ['body', 'pageSize'],
                                    _idpath: ['3621852', '8683064'],
                                  },
                                  {
                                    attrId: '623196',
                                    code: 'flowCode',
                                    name: '流程编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    _codePath: ['body', 'flowCode'],
                                    _idpath: ['3621852', '623196'],
                                  },
                                  {
                                    attrId: '275837',
                                    code: 'meetingFlag',
                                    name: '是否会签',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: { type: ['customize'], code: 'Y' },
                                    _codePath: ['body', 'meetingFlag'],
                                    _idpath: ['3621852', '275837'],
                                  },
                                  {
                                    attrId: '015829',
                                    code: 'tacheCode',
                                    name: '环节编码',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    _codePath: ['body', 'tacheCode'],
                                    _idpath: ['3621852', '015829'],
                                  },
                                  {
                                    attrId: '226886',
                                    code: 'workItemId',
                                    name: '流程环节实例id',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    _codePath: ['body', 'workItemId'],
                                    _idpath: ['3621852', '226886'],
                                    value: {
                                      type: ['context', '$state.workItemId$'],
                                      code: '',
                                    },
                                  },
                                ],
                                _codePath: ['body'],
                                _idpath: ['3621852'],
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '8231372',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '977921',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '239828',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '199262',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '261807',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '009955',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '881268',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '548601',
                                    code: 'pages',
                                    name: 'pages',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '636447',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '0654394',
                                        code: 'userName',
                                        name: 'userName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '70561',
                                        code: 'userId',
                                        name: 'userId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '526672',
                                        code: 'userCode',
                                        name: 'userCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '2509664',
                                        code: 'userText',
                                        name: 'userText',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '557295',
                                        code: 'orgName',
                                        name: 'orgName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4060293',
                                        code: 'orgCode',
                                        name: 'orgCode',
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
                              dataId: 166366210590949380,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '47848',
                                loading: false,
                              },
                              line_number: 5,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 166366210745363650,
                              options: {
                                compId: 'Table_2310769_112',
                                compLib: 'comm',
                                pageJsonId: '2310769',
                                compName: 'Table',
                                id: '3152',
                                loading: false,
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ];
              eventDatagetTreeSelectedKey7.params =
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
                eventDatagetTreeSelectedKey7,
                { page, pageSize },
                'getTreeSelectedKey',
                {
                  id: 'getTreeSelectedKey',
                  name: 'getTreeSelectedKey',
                  type: 'getTreeSelectedKey',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_2310769_112'] = r)}
            {...injectData}
          />
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_486003'}
            $$componentItem={{
              id: 'Form_486003',
              uid: 'Form_486003',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '8px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_486003'] = r)}
            {...injectData}
          >
            <Input
              name={'已选用户'}
              size={'default'}
              selfSpan={24}
              labelCol={'4'}
              wrapperCol={20}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'清空'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'staffNameList'}
              postfixStyle={'2'}
              icon={{ theme: 'outlined', type: 'delete', isIconFont: false }}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_1845436',
                uid: 'Input_1845436',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              style={{ flex: '' }}
              onIconClick={() => {
                const eventDataclearTableSelected9: any = [
                  {
                    type: 'clearTableSelected',
                    dataId: 166115507313936670,
                    options: {
                      compId: 'Table_2310769_112',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Table',
                      id: '083599',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearTableSelected9.params = [] || [];
                CMDGenerator(
                  eventDataclearTableSelected9,
                  {},
                  'clearTableSelected',
                  {
                    id: 'clearTableSelected',
                    name: 'clearTableSelected',
                    type: 'clearTableSelected',
                    platform: 'pc',
                  },
                );
                const eventDataclearValue155: any = [
                  {
                    type: 'clearValue',
                    dataId: 166115509531483170,
                    options: {
                      compId: 'Input_1845436',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Input',
                      id: '8784126',
                    },
                    line_number: 2,
                  },
                ];
                eventDataclearValue155.params = [] || [];
                CMDGenerator(eventDataclearValue155, {}, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue156: any = [
                  {
                    type: 'clearValue',
                    dataId: 166115510137801470,
                    options: {
                      compId: 'Input_3184618',
                      compLib: 'comm',
                      pageJsonId: '2310769',
                      compName: 'Input',
                      id: '032033',
                    },
                    line_number: 3,
                  },
                ];
                eventDataclearValue156.params = [] || [];
                CMDGenerator(eventDataclearValue156, {}, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_1845436'] = r)}
              {...injectData}
            />
            <Input
              name={'用户id隐藏框'}
              size={'default'}
              selfSpan={24}
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
              fieldName={'staffIdList'}
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
                id: 'Input_3184618',
                uid: 'Input_3184618',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_3184618'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(MeetingSelectuserlist$$Modal, {
  pageId: '875208988329263104',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', workItemId: '' },
});
