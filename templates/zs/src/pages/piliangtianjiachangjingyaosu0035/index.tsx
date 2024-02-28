// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '900710694944481280';
const Piliangtianjiachangjingyaosu0035$$Modal: React.FC<PageProps> = ({
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
  const onLoadTable = (options_193804: any) => {
    const eventDatareloadDataSource20: any = [
      {
        type: 'reloadDataSource',
        dataId: 166635222860298600,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '415381',
          pageJsonId: '3571093',
          dataSourceId: 166635219796521600,
          dataSourceName: 'qryAttrSpecPageByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '255785',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '732001',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '9938604',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '0712076',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '01731001',
                  code: 'sceneId',
                  name: 'sceneId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.sceneId',
                  value: { type: ['context', '$state.bizId$'], code: '' },
                },
                {
                  attrId: '250361',
                  code: 'attrName',
                  name: 'attrName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.attrName',
                  value: {
                    type: ['form', 'Form_6318236', 'getFieldsValue'],
                    code: 'attrName',
                  },
                },
                {
                  attrId: '86801',
                  code: 'attrCode',
                  name: 'attrCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.attrCode',
                  value: {
                    type: ['form', 'Form_6318236', 'getFieldsValue'],
                    code: 'attrCode',
                  },
                },
                {
                  attrId: '3370425',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['context', '$options_193804$'], code: '' },
                },
                {
                  attrId: '086485',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
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
              attrId: '8335499',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '3666193',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '2996647',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '854103',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '5642789',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '044581',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '6927784',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '768728',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '90734',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '335768',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '565855',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '573961',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '172913',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '860213',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '5334173',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '2124224',
                      code: 'isRequired',
                      name: 'isRequired',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9032904',
                      code: 'isReadonly',
                      name: 'isReadonly',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '473891',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '104132',
                      code: 'attrCode',
                      name: 'attrCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '353625',
                      code: 'attrValueDataType',
                      name: 'attrValueDataType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '828326',
                      code: 'maxValue',
                      name: 'maxValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '820098',
                      code: 'isUnique',
                      name: 'isUnique',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9504944',
                      code: 'attrDefaultValue',
                      name: 'attrDefaultValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8649755',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '66785',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '996286',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '795985',
                      code: 'attrUnit',
                      name: 'attrUnit',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '687333',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '402968',
                      code: 'attrValueType',
                      name: 'attrValueType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '74525',
                      code: 'minValue',
                      name: 'minValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7200895',
                      code: 'attrId',
                      name: 'attrId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '535351',
                      code: 'isNullable',
                      name: 'isNullable',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7926435',
                      code: 'attrName',
                      name: 'attrName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7691692',
                      code: 'attrDesc',
                      name: 'attrDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '13654',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '93028',
                      code: 'updateStaff',
                      name: 'updateStaff',
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
    eventDatareloadDataSource20.params =
      [
        {
          title: '事件入参',
          name: 'options_193804',
          value: '$options_193804$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource20,
      { options_193804 },
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
    onLoadTable,
  }));

  const onOk = () => {
    const eventDatagetTableSelectedKey2: any = [
      {
        type: 'getTableSelectedKey',
        dataId: 166635376784245200,
        options: {
          compId: 'Table_862612',
          compLib: 'comm',
          pageJsonId: '3571093',
          compName: 'Table',
          id: '48467385',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '638976',
                options: {
                  context: '$selectedRowKeys_48467385$',
                  operate: 'empty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166635404577182600,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166635407174318750,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166635544232034750,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 166635544232060740,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 166635564171494300,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166635566314659600,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '757971',
                                  pageJsonId: '3571093',
                                  type: 'success',
                                  value: '批量新增场景要素成功！',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                line_number: 6,
                              },
                              {
                                dataName: 'action',
                                dataId: 166635569671754080,
                                children: [],
                                todoOptions: [],
                                options: {
                                  compId: 'closeModal',
                                  compName: 'page',
                                  id: '997664',
                                  pageJsonId: '3571093',
                                },
                                actionObjId: 'closeModal',
                                actionObjName: 'page',
                                value: 'closeModal',
                                line_number: 7,
                              },
                              {
                                dataName: 'action',
                                dataId: 166635570003382080,
                                children: [],
                                todoOptions: ['setParams'],
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '81552',
                                  pageJsonId: '3571093',
                                },
                                actionObjId: 'okCallbackData',
                                actionObjName: 'page',
                                value: 'okCallbackData',
                                line_number: 8,
                              },
                            ],
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166635565662677760,
                                children: [],
                                condition: [],
                                desc: '失败',
                              },
                            ],
                            condition: [
                              {
                                condId: '658327',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_581428?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '成功',
                            line_number: 5,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 166635544232007870,
                        children: [],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '581428',
                      pageJsonId: '3571093',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'batchAddDcSceneAttr',
                      _apiCode: 'batchAddDcSceneAttr',
                      _source: 'rhin',
                      _serviceId: '900722640498167808',
                      _serviceTitle:
                        '批量新增场景要素-tsm: batchAddDcSceneAttr',
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
                          dataKey: '581428_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '581428_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '581428_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'sceneId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.sceneId',
                              compType: 'Input',
                              name: 'sceneId',
                              parents: ['body'],
                              id: 'body.sceneId',
                              dataKey: '581428_body.sceneId',
                              value: {
                                type: ['context', '$state.bizId$'],
                                code: '',
                              },
                            },
                            {
                              code: 'attrIds',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.attrIds.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'attrIds'],
                                  id: 'body.attrIds.listItem',
                                  dataKey: '581428_body.attrIds.listItem',
                                },
                              ],
                              _id: 'body.attrIds',
                              compType: 'Input',
                              name: 'attrIds',
                              parents: ['body'],
                              id: 'body.attrIds',
                              dataKey: '581428_body.attrIds',
                              value: {
                                type: ['context', '$selectedRowKeys_48467385$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '581428_body',
                        },
                      ],
                    },
                    actionObjId: 'apiRequest',
                    actionObjName: 'system',
                    value: 'apiRequest',
                    line_number: 4,
                  },
                ],
                condition: [],
                desc: '已选择',
                elseIfs: [],
                callback: [
                  {
                    type: 'apiRequest',
                    dataId: 166635544232034750,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '581428',
                      pageJsonId: '3571093',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'batchAddDcSceneAttr',
                      _apiCode: 'batchAddDcSceneAttr',
                      _source: 'rhin',
                      _serviceId: '900722640498167808',
                      _serviceTitle:
                        '批量新增场景要素-tsm: batchAddDcSceneAttr',
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
                          dataKey: '581428_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '581428_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '581428_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'sceneId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.sceneId',
                              compType: 'Input',
                              name: 'sceneId',
                              parents: ['body'],
                              id: 'body.sceneId',
                              dataKey: '581428_body.sceneId',
                              value: {
                                type: ['context', '$state.bizId$'],
                                code: '',
                              },
                            },
                            {
                              code: 'attrIds',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.attrIds.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'attrIds'],
                                  id: 'body.attrIds.listItem',
                                  dataKey: '581428_body.attrIds.listItem',
                                },
                              ],
                              _id: 'body.attrIds',
                              compType: 'Input',
                              name: 'attrIds',
                              parents: ['body'],
                              id: 'body.attrIds',
                              dataKey: '581428_body.attrIds',
                              value: {
                                type: ['context', '$selectedRowKeys_48467385$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '581428_body',
                        },
                      ],
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '658327',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_581428?.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166635564171494300,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166635565662677760,
                            children: [],
                            condition: [],
                            desc: '失败',
                          },
                        ],
                        line_number: 5,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166635566314659600,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '757971',
                              pageJsonId: '3571093',
                              type: 'success',
                              value: '批量新增场景要素成功！',
                            },
                            line_number: 6,
                          },
                          {
                            type: 'closeModal',
                            dataId: 166635569671754080,
                            options: {
                              compId: 'closeModal',
                              compName: 'page',
                              id: '997664',
                              pageJsonId: '3571093',
                            },
                            line_number: 7,
                          },
                          {
                            type: 'okCallbackData',
                            dataId: 166635570003382080,
                            options: {
                              compId: 'okCallbackData',
                              compName: 'page',
                              id: '81552',
                              pageJsonId: '3571093',
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
            line_number: 2,
            callback1: [
              {
                type: 'showMessage',
                dataId: 166635408685261920,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '625254',
                  pageJsonId: '3571093',
                  type: 'info',
                  value: '请选择后再提交！',
                },
                line_number: 3,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelectedKey2.params = [] || [];
    CMDGenerator(eventDatagetTableSelectedKey2, {}, 'getTableSelectedKey', {
      id: 'getTableSelectedKey',
      name: 'getTableSelectedKey',
      type: 'getTableSelectedKey',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal44: any = [
      {
        type: 'closeModal',
        dataId: '391632_1',
        options: { compId: 'page', compName: 'page', id: '319426' },
        line_number: 1,
      },
    ];
    eventDatacloseModal44.params = [] || [];
    CMDGenerator(eventDatacloseModal44, {}, 'closeModal', {
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
    const eventDatacallSelfFunc35: any = [
      {
        type: 'callSelfFunc',
        dataId: 166635370531751550,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '02337',
          pageJsonId: '3571093',
          customFuncName: 'onLoadTable',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc35.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc35, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataapiRequest365: any = [
      {
        type: 'apiRequest',
        dataId: 166657242485526240,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '762357',
          pageJsonId: '3571093',
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
              dataKey: '762357_header',
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
                  dataKey: '762357_path.attrCode',
                  value: { type: ['customize'], code: 'ATTR_VALUE_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '762357_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '762357_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '762357_body',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166657246614230980,
            options: {
              compId: 'Table_862612',
              compLib: 'comm',
              pageJsonId: '3571093',
              compName: 'Table',
              id: '805808',
              colName: 'attrValueType',
              data: '$reply_762357?.resultData$',
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest365.params = [] || [];
    CMDGenerator(eventDataapiRequest365, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest366: any = [
      {
        type: 'apiRequest',
        dataId: 166657247660200960,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5619727',
          pageJsonId: '3571093',
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
              dataKey: '5619727_header',
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
                  dataKey: '5619727_path.attrCode',
                  value: { type: ['customize'], code: 'ATTR_VALUE_DATA_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '5619727_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '5619727_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '5619727_body',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166657247660380740,
            options: {
              compId: 'Table_862612',
              compLib: 'comm',
              pageJsonId: '3571093',
              compName: 'Table',
              id: '285888',
              colName: 'attrValueDataType',
              data: '$reply_5619727?.resultData$',
            },
            line_number: 5,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest366.params = [] || [];
    CMDGenerator(eventDataapiRequest366, {}, 'apiRequest', {
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
      className="__CustomClass_3571093__"
    >
      <View
        className="View_View_3571093_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_3571093_1',
          uid: 'View_3571093_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_3571093_1')}
        {...injectData}
      >
        <View
          className="View_View_308023"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_308023',
            uid: 'View_308023',
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
            margin: '0px 0px 12px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_308023')}
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
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_6318236'}
            $$componentItem={{
              id: 'Form_6318236',
              uid: 'Form_6318236',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_6318236')}
            {...injectData}
          >
            <Input
              name={'属性名称'}
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
              fieldName={'attrName'}
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
                id: 'Input_845175',
                uid: 'Input_845175',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc458: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 170044770388735300,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '674721',
                      pageJsonId: '3571093',
                      customFuncName: 'onLoadTable',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc458.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc458, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_845175')}
              {...injectData}
            />
            <Input
              name={'属性编码'}
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
              fieldName={'attrCode'}
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
                id: 'Input_551346',
                uid: 'Input_551346',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc459: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 170044770994552260,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '642465',
                      pageJsonId: '3571093',
                      customFuncName: 'onLoadTable',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc459.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc459, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_551346')}
              {...injectData}
            />
            <View
              className="View_View_1070585"
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_1070585',
                uid: 'View_1070585',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_1070585')}
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
                  id: 'Button_538501',
                  uid: 'Button_538501',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 20px 0px 20px' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc460: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166635254550227870,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '3107457',
                        pageJsonId: '3571093',
                        customFuncName: 'onLoadTable',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc460.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc460,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_538501')}
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
                  id: 'Button_447004',
                  uid: 'Button_447004',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const forms108 = getFormByCompId('Form_6318236', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms108) ? forms108 : [forms108]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_447004')}
                {...injectData}
              />
            </View>
          </Form>
        </View>
        <View
          className="View_View_9548358"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_9548358',
            uid: 'View_9548358',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_9548358')}
          {...injectData}
        >
          <Table
            name={'属性表格'}
            isFlexColumn={false}
            pageSize={data?.qryAttrSpecPageByReq?.resultData?.size}
            current={data?.qryAttrSpecPageByReq?.resultData?.current}
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
                title: '属性名称',
                key: 'attrName',
                dataIndex: 'attrName',
                className: '',
                id: '427676',
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
                title: '属性编码',
                key: 'attrCode',
                dataIndex: 'attrCode',
                className: 'divider',
                id: '163661',
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
                title: '属性值类型',
                key: 'attrValueType',
                dataIndex: 'attrValueType',
                className: 'divider',
                id: '365226',
                staticService: {
                  labelKey: 'attrValueName',
                  valueKey: 'attrValue',
                },
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
                title: '属性值数据类型',
                key: 'attrValueDataType',
                dataIndex: 'attrValueDataType',
                className: 'divider',
                id: '1878275',
                staticService: {
                  labelKey: 'attrValueName',
                  valueKey: 'attrValue',
                },
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
                title: '属性单位',
                key: 'attrUnit',
                dataIndex: 'attrUnit',
                className: 'divider',
                id: '569302',
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
                id: '360043',
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
            dataSource={data?.qryAttrSpecPageByReq?.resultData?.records}
            rowKey={'attrId'}
            fieldName={'data.qryAttrSpecPageByReq.resultData.total'}
            total={data?.qryAttrSpecPageByReq?.resultData?.total}
            dataSourceFromDataSourceConfig={
              'data.qryAttrSpecPageByReq.resultData.records'
            }
            $$componentItem={{
              id: 'Table_862612',
              uid: 'Table_862612',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatacallSelfFunc461: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 166635255660615040,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '7098843',
                    pageJsonId: '3571093',
                    customFuncName: 'onLoadTable',
                    customFuncParams: '$page$',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc461.params =
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
                eventDatacallSelfFunc461,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_862612')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Piliangtianjiachangjingyaosu0035$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '' },
});
