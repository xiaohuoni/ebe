// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Card, TabPane, Tabs, View, Webview } from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ApproveWorkbench$$Page: React.FC<PageProps> = ({
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
  const refreshTable = (options_040131: any) => {
    const eventDataifelse43: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '802441',
            options: {
              context: '$options_040131.originTab$',
              operate: 'notEmpty',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169459730295724300,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '930794',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$options_040131.originTab$',
                  operate: '==',
                  manualValue: '1',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169459734595637470,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 169459734595696130,
                children: [
                  {
                    dataName: 'action',
                    dataId: 169459734595629120,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 169459734595668700,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 169459734595641000,
                        children: [],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: [
                      'pathname',
                      'customFuncName',
                      'customFuncParams',
                    ],
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '040911',
                      pageJsonId: '212281',
                      pathname: '/myDraft_202212191639',
                      pageId: '922045372277719040',
                      modalPath: '/myDraft_202212191639',
                      customFuncName: 'refreshTable',
                      customFuncParams: 'object',
                    },
                    actionObjId: 'callCustomPageFunc',
                    actionObjName: 'system',
                    value: 'callCustomPageFunc',
                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                    line_number: 4,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$options_040131.originTab$',
                      operate: '==',
                      manualValue: '5',
                    },
                    condId: '780499',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                value: 'elseIf',
                desc: '如果是草稿箱页面',
                callback: [
                  {
                    type: 'callCustomPageFunc',
                    dataId: 169459734595629120,
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '040911',
                      pageJsonId: '212281',
                      pathname: '/myDraft_202212191639',
                      pageId: '922045372277719040',
                      modalPath: '/myDraft_202212191639',
                      customFuncName: 'refreshTable',
                      customFuncParams: 'object',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 169459734595685470,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '265626',
                  pageJsonId: '212281',
                  pathname: '/myOrderTodo_202212191506',
                  pageId: '922008623740616704',
                  modalPath: '/myOrderTodo_202212191506',
                  customFuncName: 'query',
                  customFuncParams: 'object',
                  paramsObj: { pageNum: '1' },
                  paramsObjKeyValueMap: { pageNum: '1' },
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse43.params =
      [
        {
          title: '事件入参',
          name: 'options_040131',
          value: '$options_040131$',
        },
      ] || [];
    CMDGenerator(eventDataifelse43, { options_040131 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169465851128023460
    console.log('进入政企审批工作台：', options_040131);
  };
  const jumpTab = (options_345557: any) => {
    const eventDatacustomActionCode64: any = [
      {
        type: 'customActionCode',
        dataId: 170305400053617180,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '603085',
          pageJsonId: '541575',
          code: 'function main(data,state,success,fail){var localName=window.sessionStorage.getItem("localName")||"";success(localName)};',
          actionTitle: '获取localName',
        },
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 170305400053685950,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '625648',
              pageJsonId: '541575',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'newTabPath',
              _apiCode: 'newTabPath',
              _source: 'rhin',
              _sourceName: '构建新的Tab页路径-hyj',
              _serviceId: '1054639629108600832',
              _serviceTitle: '构建新的Tab页路径-hyj: newTabPath',
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
                      dataKey: '625648_root.header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      children: [
                        {
                          code: 'pagePath',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'T',
                          defaultValue: '',
                          _id: 'root.path.pagePath',
                          compType: 'Input',
                          parents: ['root', 'path'],
                          parentType: 'object',
                          parentKey: '0-1',
                          key: '0-1-0',
                          id: 'root.path.pagePath',
                          dataKey: '625648_root.path.pagePath',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'pagePath',
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
                      dataKey: '625648_root.path',
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
                      dataKey: '625648_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'scene',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.scene',
                          compType: 'Input',
                          name: 'scene',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-14',
                          id: 'root.body.scene',
                          dataKey: '625648_root.body.scene',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'scene',
                          },
                        },
                        {
                          code: 'instNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.instNbr',
                          compType: 'Input',
                          name: 'instNbr',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.instNbr',
                          dataKey: '625648_root.body.instNbr',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'instNbr',
                          },
                        },
                        {
                          code: 'workId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.workId',
                          compType: 'Input',
                          name: 'workId',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.workId',
                          dataKey: '625648_root.body.workId',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'workId',
                          },
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
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-2',
                          id: 'root.body.flowCode',
                          dataKey: '625648_root.body.flowCode',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'flowCode',
                          },
                        },
                        {
                          code: 'tacheName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.tacheName',
                          compType: 'Input',
                          name: 'tacheName',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-3',
                          id: 'root.body.tacheName',
                          dataKey: '625648_root.body.tacheName',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'tacheName',
                          },
                        },
                        {
                          code: 'workItemId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.workItemId',
                          compType: 'Input',
                          name: 'workItemId',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-4',
                          id: 'root.body.workItemId',
                          dataKey: '625648_root.body.workItemId',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'workItemId',
                          },
                        },
                        {
                          code: 'busiObjNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.busiObjNbr',
                          compType: 'Input',
                          name: 'busiObjNbr',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-5',
                          id: 'root.body.busiObjNbr',
                          dataKey: '625648_root.body.busiObjNbr',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'busiObjNbr',
                          },
                        },
                        {
                          code: 'isRollback',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.isRollback',
                          compType: 'Input',
                          name: 'isRollback',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-6',
                          id: 'root.body.isRollback',
                          dataKey: '625648_root.body.isRollback',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'isRollback',
                          },
                        },
                        {
                          code: 'isScreenshoot',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.isScreenshoot',
                          compType: 'Input',
                          name: 'isScreenshoot',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-7',
                          id: 'root.body.isScreenshoot',
                          dataKey: '625648_root.body.isScreenshoot',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'isScreenshoot',
                          },
                        },
                        {
                          code: 'origin',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.origin',
                          compType: 'Input',
                          name: 'origin',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-8',
                          id: 'root.body.origin',
                          dataKey: '625648_root.body.origin',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'origin',
                          },
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
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-9',
                          id: 'root.body.tacheCode',
                          dataKey: '625648_root.body.tacheCode',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'tacheCode',
                          },
                        },
                        {
                          code: 'sceneOrigin',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.sceneOrigin',
                          compType: 'Input',
                          name: 'sceneOrigin',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-10',
                          id: 'root.body.sceneOrigin',
                          dataKey: '625648_root.body.sceneOrigin',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'sceneOrigin',
                          },
                        },
                        {
                          code: 'originTab',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.originTab',
                          compType: 'Input',
                          name: 'originTab',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-11',
                          id: 'root.body.originTab',
                          dataKey: '625648_root.body.originTab',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'originTab',
                          },
                        },
                        {
                          code: 'localName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.localName',
                          compType: 'Input',
                          name: 'localName',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-12',
                          id: 'root.body.localName',
                          dataKey: '625648_root.body.localName',
                          value: {
                            type: ['context', '$data_603085$'],
                            code: '',
                          },
                        },
                        {
                          code: 'title',
                          name: '工单主题',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.title',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-13',
                          id: 'root.body.title',
                          dataKey: '625648_root.body.title',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'title',
                          },
                        },
                        {
                          code: 'approveOrdNbr',
                          name: 'approveOrdNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.approveOrdNbr',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-15',
                          id: 'root.body.approveOrdNbr',
                          dataKey: '625648_root.body.approveOrdNbr',
                          value: {
                            type: ['context', '$options_345557$'],
                            code: 'approveOrdNbr',
                          },
                        },
                        {
                          code: 'openFrom',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.openFrom',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-16',
                          id: 'root.body.openFrom',
                          dataKey: '625648_root.body.openFrom',
                          value: {
                            type: ['context', '$urlParam.openFrom$'],
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
                      dataKey: '625648_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '625648_root',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170305400053613920,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '257686',
                  pageJsonId: '541575',
                  code: 'function main(data,state,success,fail){var _reply_;var url=(_reply_=reply_625648)===null||_reply_===void 0?void 0:_reply_.resultData;console.log("\\u8FD4\\u56DE\\u7684\\u8DF3\\u8F6C\\u94FE\\u63A5\\uFF1A",url);if(url){window.open(url)}else{fail()}};',
                  actionTitle: '打开一个新的tab页面',
                },
                line_number: 3,
                callback1: [],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 170305508865136480,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '843992',
                      pageJsonId: '212281',
                      type: 'error',
                      value: '获取url地址失败！',
                    },
                    line_number: 4,
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
    eventDatacustomActionCode64.params =
      [
        {
          title: '事件入参',
          name: 'options_345557',
          value: '$options_345557$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode64,
      { options_345557 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refreshTable,
    jumpTab,
  }));

  useEffect(() => {
    // console 170306303077930270
    console.log('政企审批工作台url入参：', urlParam);
    const eventDatasetLoading43: any = [
      {
        type: 'setLoading',
        dataId: 167955533301973630,
        options: {
          compId: 'View_212281_1',
          compLib: 'custom',
          pageJsonId: '212281',
          compName: 'View',
          id: '424519',
          loading: true,
        },
        line_number: 2,
      },
    ];
    eventDatasetLoading43.params = [] || [];
    CMDGenerator(eventDatasetLoading43, {}, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDataapiRequest204: any = [
      {
        type: 'apiRequest',
        dataId: 167888137211308670,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9726759',
          pageJsonId: '212281',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: ['root'],
              id: 'header',
              dataKey: '9726759_header',
              parentType: 'object',
              parentKey: '0',
              key: '0-0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: ['root'],
              id: 'path',
              dataKey: '9726759_path',
              parentType: 'object',
              parentKey: '0',
              key: '0-1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: ['root'],
              id: 'query',
              dataKey: '9726759_query',
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
                      _id: 'body.privilegeCodes.listItem',
                      compType: 'Input',
                      parents: ['root', 'body', 'privilegeCodes'],
                      id: 'body.privilegeCodes.listItem',
                      dataKey: '9726759_body.privilegeCodes.listItem',
                      parentType: 'fieldArray',
                      parentKey: '0-3-0',
                      key: '0-3-0-0',
                    },
                  ],
                  _id: 'body.privilegeCodes',
                  compType: 'Input',
                  parents: ['root', 'body'],
                  id: 'body.privilegeCodes',
                  dataKey: '9726759_body.privilegeCodes',
                  value: {
                    type: ['customize'],
                    code: '["M_SYNTHESIZE_QRY","M_EXPORT_RESULT_DOWNLOAD"]',
                  },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '9726759_body',
              parentType: 'object',
              parentKey: '0',
              key: '0-3',
            },
          ],
          actionTitle: '标签页权限查询',
          _sourceName: '查询是否有权限-tsm',
        },
        line_number: 3,
        callback1: [
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '171933',
                options: {
                  context: '$reply_9726759?.resultData.M_SYNTHESIZE_QRY$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888142877197540,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888145717985760,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888147640028130,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: '250009',
                      compLib: 'comm',
                      pageJsonId: '212281',
                      compName: 'TabPane',
                      id: '16438',
                      visible: '',
                    },
                    actionObjId: '250009',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 6,
                  },
                ],
                condition: [],
                desc: '无综合查询权限',
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888147640028130,
                    shielding: true,
                    options: {
                      compId: '250009',
                      compLib: 'comm',
                      pageJsonId: '212281',
                      compName: 'TabPane',
                      id: '16438',
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
                dataId: 167888147020384740,
                shielding: true,
                options: {
                  compId: '250009',
                  compLib: 'comm',
                  pageJsonId: '212281',
                  compName: 'TabPane',
                  id: '876765',
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
                condId: '171933',
                options: {
                  context:
                    '$reply_9726759?.resultData.M_EXPORT_RESULT_DOWNLOAD$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888148291231940,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888148291214800,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888148291276220,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['5036094'],
                      compLib: 'comm',
                      pageJsonId: '212281',
                      compName: 'TabPane',
                      id: '755355',
                      visible: '',
                      compid: ['5036094'],
                    },
                    actionObjId: '250009',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 9,
                  },
                ],
                condition: [],
                desc: '无导出结果下载权限',
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888148291276220,
                    shielding: true,
                    options: {
                      compId: ['5036094'],
                      compLib: 'comm',
                      pageJsonId: '212281',
                      compName: 'TabPane',
                      id: '755355',
                      visible: '',
                      compid: ['5036094'],
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
                dataId: 167888148291207600,
                shielding: true,
                options: {
                  compId: ['5036094'],
                  compLib: 'comm',
                  pageJsonId: '212281',
                  compName: 'TabPane',
                  id: '82276',
                  visible: 'true',
                  compid: ['5036094'],
                },
                line_number: 8,
              },
            ],
          },
          {
            type: 'setDataSource',
            dataId: 167955529538801600,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '6405922',
              pageJsonId: '212281',
              dataSourceId: 167955507504450140,
              dataSourceName: 'rolePrivilege',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '0731073',
                  code: 'M_SYNTHESIZE_QRY',
                  name: '综合查询',
                  type: 'boolean',
                  initialData: { type: 'static', value: 'false' },
                  value: {
                    type: ['customize'],
                    code: '$reply_9726759?.resultData.M_SYNTHESIZE_QRY$',
                  },
                },
                {
                  attrId: '042105',
                  code: 'M_EXPORT_RESULT_DOWNLOAD',
                  name: '导出结果',
                  type: 'boolean',
                  initialData: { type: 'static', value: 'false' },
                  value: {
                    type: ['customize'],
                    code: '$reply_9726759?.resultData.M_EXPORT_RESULT_DOWNLOAD$',
                  },
                },
                {
                  attrId: '241429',
                  code: 'OTHER',
                  name: '其他场景',
                  type: 'boolean',
                  initialData: { type: 'static', value: 'false' },
                  value: { type: ['customize'], code: 'true' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 10,
            callback1: [
              {
                type: 'setLoading',
                dataId: 167955622943682240,
                options: {
                  compId: 'View_212281_1',
                  compLib: 'custom',
                  pageJsonId: '212281',
                  compName: 'View',
                  id: '5393445',
                  loading: false,
                },
                line_number: 11,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest204.params = [] || [];
    CMDGenerator(eventDataapiRequest204, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest205: any = [
      {
        type: 'apiRequest',
        dataId: 170478602078774880,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '814616',
          pageJsonId: '212281',
          sync: false,
          actionTitle: '获取应用上下文地址',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getAppContextPath',
          _apiCode: 'getAppContextPath',
          _source: 'rhin',
          _sourceName: '获取应用上下文地址',
          _serviceId: '1061908861433241600',
          _serviceTitle: '获取应用上下文地址: getAppContextPath',
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
                  dataKey: '814616_root.header',
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
                  dataKey: '814616_root.path',
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
                  dataKey: '814616_root.query',
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
                  dataKey: '814616_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '814616_root',
            },
          ],
        },
        line_number: 12,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170478605144068220,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '06471',
              pageJsonId: '212281',
              actionTitle: '组装高代码页面地址',
              code: 'function main(data,state,success,fail){var _reply_;var url="http://"+((_reply_=reply_814616)===null||_reply_===void 0?void 0:_reply_.resultData.contextPath)+"/sso/core/statistical-report?token="+urlParam.token;success(url)};',
            },
            line_number: 13,
            callback1: [
              {
                type: 'setSrc',
                dataId: 170478605144021470,
                options: {
                  compId: 'Webview_020503',
                  compLib: 'comm',
                  pageJsonId: '212281',
                  compName: 'Webview',
                  id: '10534',
                  value: '$data_06471$',
                },
                line_number: 14,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest205.params = [] || [];
    CMDGenerator(eventDataapiRequest205, {}, 'apiRequest', {
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
      className="__CustomClass_212281__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_212281_1',
          uid: 'View_212281_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_212281_1'] = r)}
        {...injectData}
      >
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          extendNum={3}
          title={'标题'}
          bordered={true}
          size={'default'}
          hasHeader={false}
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
            id: 'Card_7670245',
            uid: 'Card_7670245',
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
          ref={(r: any) => (refs['Card_7670245'] = r)}
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
            $$componentItem={{
              id: 'Tabs_03082616',
              uid: 'Tabs_03082616',
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
            ref={(r: any) => (refs['Tabs_03082616'] = r)}
            {...injectData}
          >
            <TabPane
              name={'发起审批'}
              tab={'发起审批'}
              key={'8'}
              $$componentItem={{
                id: '486332',
                uid: '486332',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['486332'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{ label: '1' }}
                pageSrc={'/auditStart'}
                pageId={'887537833022541824'}
                style={{ height: '650px', width: '100%' }}
                ref={(r: any) => (refs['Pageview_801102_4765882_371096'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'本人待办'}
              tab={'本人待办'}
              key={'1'}
              $$componentItem={{
                id: 'TabPane_9343164',
                uid: 'TabPane_9343164',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['TabPane_9343164'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{
                  origin: '0',
                  originTab: '1',
                  openFrom: urlParam?.openFrom,
                }}
                pageSrc={'/myOrderTodo_202212191506'}
                pageId={'922008623740616704'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_993868'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'本人已办'}
              tab={'本人已办'}
              key={'2'}
              $$componentItem={{
                id: 'TabPane_07071',
                uid: 'TabPane_07071',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['TabPane_07071'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{
                  origin: '0',
                  openFrom: urlParam?.openFrom,
                }}
                pageSrc={'/myOrderDone_202212191506copy'}
                pageId={'922038101271379968'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_208346'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'本人发起'}
              tab={'本人发起'}
              key={'3'}
              $$componentItem={{
                id: '263706',
                uid: '263706',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['263706'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{
                  origin: '0',
                  openFrom: urlParam?.openFrom,
                }}
                pageSrc={'/myOrderInitiatedApplication_202212191621'}
                pageId={'922040879843135488'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_081265'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'本人待阅'}
              tab={'本人待阅'}
              key={'4'}
              $$componentItem={{
                id: '671983',
                uid: '671983',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['671983'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{ origin: '0' }}
                pageSrc={'/myOrderRead_202212191629'}
                pageId={'922042996011565056'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_7458638'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'草稿箱'}
              tab={'草稿箱'}
              key={'5'}
              $$componentItem={{
                id: '5910484',
                uid: '5910484',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['5910484'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{ origin: '0', originTab: '5' }}
                pageSrc={'/myDraft_202212191639'}
                pageId={'922045372277719040'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_6965484'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'综合查询'}
              tab={'综合查询'}
              key={'6'}
              $$componentItem={{
                id: '250009',
                uid: '250009',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_SYNTHESIZE_QRY,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_SYNTHESIZE_QRY,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_SYNTHESIZE_QRY,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['250009'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{
                  origin: '0',
                  openFrom: urlParam?.openFrom,
                }}
                pageSrc={'/approveOrderQuery'}
                pageId={'922050100039012352'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_801102'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'导出结果下载'}
              tab={'导出结果下载'}
              key={'7'}
              $$componentItem={{
                id: '5036094',
                uid: '5036094',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_EXPORT_RESULT_DOWNLOAD,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_EXPORT_RESULT_DOWNLOAD,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_EXPORT_RESULT_DOWNLOAD,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['5036094'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{}}
                pageSrc={'/exportDownLoad'}
                pageId={'940142497926754304'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_801102_4765882'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'统计报表'}
              tab={'统计报表'}
              key={'9'}
              $$componentItem={{
                id: 'TabPane_978363',
                uid: 'TabPane_978363',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['TabPane_978363'] = r)}
              {...injectData}
            >
              <Webview
                name={'web容器'}
                $$componentItem={{
                  id: 'Webview_020503',
                  uid: 'Webview_020503',
                  type: 'Webview',
                  ...componentItem,
                }}
                style={{ height: '653px', width: '100%', border: 'none' }}
                onMessage={(data: any) => {}}
                ref={(r: any) => (refs['Webview_020503'] = r)}
                {...injectData}
              />
            </TabPane>
          </Tabs>
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(ApproveWorkbench$$Page, {
  pageId: '922008281896452096',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
