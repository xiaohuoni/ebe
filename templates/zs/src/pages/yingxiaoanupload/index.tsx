// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, StdUpload } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '914506771948519424';
const Yingxiaoanupload$$Modal: React.FC<PageProps> = ({
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
    const eventDataifelse326: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '2306865',
            options: { context: '$state.saleCfgId$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166927104408072500,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166927121839196900,
            children: [
              {
                dataName: 'action',
                dataId: 166927204169380860,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 166927204169342340,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166927205230277950,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 16692720523022088,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 166927761153438270,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166927784306186340,
                                    children: [],
                                    todoOptions: ['msgType', 'value'],
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '816694',
                                      pageJsonId: 30,
                                      type: 'success',
                                      value: '新增成功',
                                    },
                                    actionObjId: 'showMessage',
                                    actionObjName: 'system',
                                    value: 'showMessage',
                                    elseIfs: [],
                                    line_number: 13,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 166927762515812930,
                                    children: [],
                                    todoOptions: [],
                                    options: {
                                      compId: 'closeModal',
                                      compName: 'page',
                                      id: '1914461',
                                      pageJsonId: 30,
                                    },
                                    actionObjId: 'closeModal',
                                    actionObjName: 'page',
                                    value: 'closeModal',
                                    elseIfs: [],
                                    line_number: 14,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 166927762989886530,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166927762989825340,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                        elseIfs: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166927762989831200,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: [
                                      'pathname',
                                      'customFuncName',
                                      'customFuncParams',
                                    ],
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '441568',
                                      pageJsonId: 30,
                                      pathname: '/yingxiaoanfangweiguanli',
                                      pageId: '912611949612380160',
                                      modalPath: '/yingxiaoanfangweiguanli',
                                      customFuncName: 'cleanQuery',
                                      customFuncParams: 'object',
                                      paramsObj: { pageNum: '1' },
                                      paramsObjKeyValueMap: { pageNum: '1' },
                                    },
                                    actionObjId: 'callParentCustomFunc',
                                    actionObjName: 'system',
                                    value: 'callParentCustomFunc',
                                    elseIfs: [],
                                    line_number: 15,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166927763683876060,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166927764135457020,
                                        children: [],
                                        todoOptions: ['msgType', 'value'],
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '537864',
                                          pageJsonId: 30,
                                          type: 'error',
                                          value: '$reply_350123?.resultMsg$',
                                        },
                                        actionObjId: 'showMessage',
                                        actionObjName: 'system',
                                        value: 'showMessage',
                                        elseIfs: [],
                                        line_number: 16,
                                      },
                                    ],
                                    condition: [],
                                    elseIfs: [],
                                    callback: [
                                      {
                                        type: 'showMessage',
                                        dataId: 166927764135457020,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '537864',
                                          pageJsonId: 30,
                                          type: 'error',
                                          value: '$reply_350123?.resultMsg$',
                                        },
                                        line_number: 16,
                                      },
                                    ],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '673242',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: '$reply_350123?.resultCode$',
                                      operate: '==',
                                      manualValue: '0',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                line_number: 12,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166927205230282780,
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
                          id: '350123',
                          pageJsonId: 30,
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'addDcSaleConfig',
                          _apiCode: 'addDcSaleConfig',
                          _source: 'rhin',
                          _serviceId: '912649207100563456',
                          _serviceTitle: '营销案新增-tsm: addDcSaleConfig',
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
                              dataKey: '0189686_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '0189686_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '0189686_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'saleCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleCode',
                                  compType: 'Input',
                                  name: 'saleCode',
                                  parents: ['body'],
                                  id: 'body.saleCode',
                                  dataKey: '0189686_body.saleCode',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'validateFields',
                                    ],
                                    code: 'saleCode',
                                  },
                                },
                                {
                                  code: 'saleName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleName',
                                  compType: 'Input',
                                  name: 'saleName',
                                  parents: ['body'],
                                  id: 'body.saleName',
                                  dataKey: '0189686_body.saleName',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'validateFields',
                                    ],
                                    code: 'saleName',
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
                                  dataKey: '0189686_body.lanId',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'validateFields',
                                    ],
                                    code: 'lanId',
                                  },
                                },
                                {
                                  code: 'saleStatus',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleStatus',
                                  compType: 'Input',
                                  name: 'saleStatus',
                                  parents: ['body'],
                                  id: 'body.saleStatus',
                                  dataKey: '0189686_body.saleStatus',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'validateFields',
                                    ],
                                    code: 'saleStatus',
                                  },
                                },
                                {
                                  code: 'saleDesc',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.saleDesc',
                                  compType: 'Input',
                                  name: 'saleDesc',
                                  parents: ['body'],
                                  id: 'body.saleDesc',
                                  dataKey: '0189686_body.saleDesc',
                                  value: {
                                    type: [
                                      'form',
                                      'Form_30_1121',
                                      'validateFields',
                                    ],
                                    code: 'saleDesc',
                                  },
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
                                  dataKey: '0189686_body.remark',
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '0189686_body',
                            },
                          ],
                        },
                        actionObjId: 'apiRequest',
                        actionObjName: 'system',
                        value: 'apiRequest',
                        elseIfs: [],
                        line_number: 11,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                    elseIfs: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 166927204169383260,
                    children: [],
                    value: 'callback2',
                    params: [],
                    elseIfs: [],
                  },
                ],
                todoOptions: [],
                options: {
                  compId: 'Form_30_1121',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Form',
                  id: '2694456',
                },
                actionObjId: 'Form_30_1121',
                actionObjName: 'Form',
                value: 'validateCurrentForm',
                compLib: 'comm',
                elseIfs: [],
                line_number: 10,
              },
            ],
            condition: [],
            elseIfs: [],
            callback: [
              {
                type: 'validateCurrentForm',
                dataId: 166927204169380860,
                options: {
                  compId: 'Form_30_1121',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Form',
                  id: '2694456',
                },
                line_number: 10,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166927205230277950,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '350123',
                      pageJsonId: 30,
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'addDcSaleConfig',
                      _apiCode: 'addDcSaleConfig',
                      _source: 'rhin',
                      _serviceId: '912649207100563456',
                      _serviceTitle: '营销案新增-tsm: addDcSaleConfig',
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
                          dataKey: '0189686_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '0189686_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '0189686_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'saleCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleCode',
                              compType: 'Input',
                              name: 'saleCode',
                              parents: ['body'],
                              id: 'body.saleCode',
                              dataKey: '0189686_body.saleCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_30_1121',
                                  'validateFields',
                                ],
                                code: 'saleCode',
                              },
                            },
                            {
                              code: 'saleName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleName',
                              compType: 'Input',
                              name: 'saleName',
                              parents: ['body'],
                              id: 'body.saleName',
                              dataKey: '0189686_body.saleName',
                              value: {
                                type: [
                                  'form',
                                  'Form_30_1121',
                                  'validateFields',
                                ],
                                code: 'saleName',
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
                              dataKey: '0189686_body.lanId',
                              value: {
                                type: [
                                  'form',
                                  'Form_30_1121',
                                  'validateFields',
                                ],
                                code: 'lanId',
                              },
                            },
                            {
                              code: 'saleStatus',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleStatus',
                              compType: 'Input',
                              name: 'saleStatus',
                              parents: ['body'],
                              id: 'body.saleStatus',
                              dataKey: '0189686_body.saleStatus',
                              value: {
                                type: [
                                  'form',
                                  'Form_30_1121',
                                  'validateFields',
                                ],
                                code: 'saleStatus',
                              },
                            },
                            {
                              code: 'saleDesc',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleDesc',
                              compType: 'Input',
                              name: 'saleDesc',
                              parents: ['body'],
                              id: 'body.saleDesc',
                              dataKey: '0189686_body.saleDesc',
                              value: {
                                type: [
                                  'form',
                                  'Form_30_1121',
                                  'validateFields',
                                ],
                                code: 'saleDesc',
                              },
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
                              dataKey: '0189686_body.remark',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '0189686_body',
                        },
                      ],
                    },
                    line_number: 11,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '673242',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_350123?.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166927761153438270,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166927763683876060,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166927764135457020,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '537864',
                                  pageJsonId: 30,
                                  type: 'error',
                                  value: '$reply_350123?.resultMsg$',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                                line_number: 16,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166927764135457020,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '537864',
                                  pageJsonId: 30,
                                  type: 'error',
                                  value: '$reply_350123?.resultMsg$',
                                },
                                line_number: 16,
                              },
                            ],
                          },
                        ],
                        line_number: 12,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166927784306186340,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '816694',
                              pageJsonId: 30,
                              type: 'success',
                              value: '新增成功',
                            },
                            line_number: 13,
                          },
                          {
                            type: 'closeModal',
                            dataId: 166927762515812930,
                            options: {
                              compId: 'closeModal',
                              compName: 'page',
                              id: '1914461',
                              pageJsonId: 30,
                            },
                            line_number: 14,
                          },
                          {
                            type: 'callParentCustomFunc',
                            dataId: 166927762989886530,
                            options: {
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '441568',
                              pageJsonId: 30,
                              pathname: '/yingxiaoanfangweiguanli',
                              pageId: '912611949612380160',
                              modalPath: '/yingxiaoanfangweiguanli',
                              customFuncName: 'cleanQuery',
                              customFuncParams: 'object',
                              paramsObj: { pageNum: '1' },
                              paramsObjKeyValueMap: { pageNum: '1' },
                            },
                            line_number: 15,
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
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'validateCurrentForm',
            dataId: 166927191951007940,
            shielding: true,
            options: {
              compId: 'Form_30_1121',
              compLib: 'comm',
              pageJsonId: 30,
              compName: 'Form',
              id: '246243',
            },
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 166927192872704400,
                shielding: true,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '885726',
                  pageJsonId: 30,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'modDcSaleConfig',
                  _apiCode: 'modDcSaleConfig',
                  _source: 'rhin',
                  _serviceId: '912649490086060032',
                  _serviceTitle: '营销案修改-tsm: modDcSaleConfig',
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
                      dataKey: '885726_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '885726_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '885726_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'saleCfgId',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.saleCfgId',
                          compType: 'Input',
                          name: 'saleCfgId',
                          parents: ['body'],
                          id: 'body.saleCfgId',
                          dataKey: '885726_body.saleCfgId',
                          value: {
                            type: ['context', '$state.saleCfgId$'],
                            code: '',
                          },
                        },
                        {
                          code: 'saleCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.saleCode',
                          compType: 'Input',
                          name: 'saleCode',
                          parents: ['body'],
                          id: 'body.saleCode',
                          dataKey: '885726_body.saleCode',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'saleCode',
                          },
                        },
                        {
                          code: 'saleName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.saleName',
                          compType: 'Input',
                          name: 'saleName',
                          parents: ['body'],
                          id: 'body.saleName',
                          dataKey: '885726_body.saleName',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'saleName',
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
                          dataKey: '885726_body.lanId',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'lanId',
                          },
                        },
                        {
                          code: 'saleStatus',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.saleStatus',
                          compType: 'Input',
                          name: 'saleStatus',
                          parents: ['body'],
                          id: 'body.saleStatus',
                          dataKey: '885726_body.saleStatus',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'saleStatus',
                          },
                        },
                        {
                          code: 'saleDesc',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.saleDesc',
                          compType: 'Input',
                          name: 'saleDesc',
                          parents: ['body'],
                          id: 'body.saleDesc',
                          dataKey: '885726_body.saleDesc',
                          value: {
                            type: ['form', 'Form_30_1121', 'getFieldsValue'],
                            code: 'saleDesc',
                          },
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
                          dataKey: '885726_body.remark',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '885726_body',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '3949567',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_885726?.resultCode$',
                          operate: '==',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166927754834577250,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166927756913356060,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166927757390254700,
                            children: [],
                            todoOptions: ['msgType', 'value'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '761399',
                              pageJsonId: 30,
                              type: 'error',
                              value: '$reply_885726?.resultMsg$',
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            elseIfs: [],
                            shielding: true,
                            line_number: 8,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
                        shielding: true,
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 166927757390254700,
                            shielding: true,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '761399',
                              pageJsonId: 30,
                              type: 'error',
                              value: '$reply_885726?.resultMsg$',
                            },
                            line_number: 8,
                          },
                        ],
                      },
                    ],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 166927782554161470,
                        shielding: true,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '16216',
                          pageJsonId: 30,
                          type: 'success',
                          value: '修改成功',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'closeModal',
                        dataId: 166927756357514800,
                        shielding: true,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '376539',
                          pageJsonId: 30,
                        },
                        line_number: 6,
                      },
                      {
                        type: 'callParentCustomFunc',
                        dataId: 166927756765447040,
                        shielding: true,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '022199',
                          pageJsonId: 30,
                          pathname: '/yingxiaoanfangweiguanli',
                          pageId: '912611949612380160',
                          modalPath: '/yingxiaoanfangweiguanli',
                          customFuncName: 'query',
                          customFuncParams: 'object',
                          paramsObj: { pageNum: '$state.pageNum$' },
                          paramsObjKeyValueMap: { pageNum: '$state.pageNum$' },
                        },
                        line_number: 7,
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
          {
            type: 'showMessage',
            dataId: 166971862222198140,
            options: {
              compId: 'showMessage',
              compName: 'system',
              id: '4920396',
              pageJsonId: 30,
              type: 'success',
              value: '新增成功',
            },
            line_number: 9,
          },
        ],
      },
    ];
    eventDataifelse326.params = [] || [];
    CMDGenerator(eventDataifelse326, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal110: any = [
      {
        type: 'closeModal',
        dataId: '996948_1',
        options: { compId: 'page', compName: 'page', id: '817529' },
        line_number: 1,
      },
    ];
    eventDatacloseModal110.params = [] || [];
    CMDGenerator(eventDatacloseModal110, {}, 'closeModal', {
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
    <div style={{ height: '100%', ...style }} className="__CustomClass_30__">
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_30_1_60178',
          uid: 'View_30_1_60178',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_30_1_60178')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_30_11_020045',
            uid: 'VerticalView_30_11_020045',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_30_11_020045')}
          {...injectData}
        >
          <Form
            name={'表单'}
            header={'标题'}
            colSpan={24}
            colSpace={16}
            rowSpace={16}
            labelCol={'6'}
            wrapperCol={18}
            layout={'horizontal'}
            colon={true}
            labelAlign={'right'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={''}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Form_30_1121_0479746',
              uid: 'Form_30_1121_0479746',
              type: 'Form',
              ...componentItem,
            }}
            style={{
              minHeight: 80,
              width: '100%',
              padding: '20px 20px 20px 20px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_30_1121_0479746')}
            {...injectData}
          >
            <Input
              name={'文件名'}
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
              fieldName={'fileName'}
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
                id: 'Input_0845739',
                uid: 'Input_0845739',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_0845739')}
              {...injectData}
            />
            <StdUpload
              name={'文件上传'}
              uploadStyle={'click'}
              listType={'text'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              fileNameEncode={false}
              isWatermark={false}
              optionalFile={false}
              fileName={'file'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'16'}
              acceptType={[]}
              visible={true}
              withCredentials={true}
              numberLimit={5}
              singleFileMaxSize={50}
              uploadText={'点击上传'}
              uploadTimeout={30000}
              deleteIcon={{
                deleteIconTheme: 'outlined',
                deleteIconType: 'delete',
                deleteIconIsIconFont: false,
                showRemoveIcon: true,
              }}
              downloadIcon={{
                downloadIconTheme: 'outlined',
                downloadIconType: 'download',
                downloadIconIsIconFont: false,
                showDownloadIcon: true,
              }}
              previewIcon={{
                previewIconTheme: 'outlined',
                previewIconType: 'eye',
                previewIconIsIconFont: false,
                showPreviewIcon: true,
              }}
              formItemIndex={1}
              fieldName={'code'}
              icon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'StdUpload_7846717',
                uid: 'StdUpload_7846717',
                type: 'StdUpload',
                ...componentItem,
              }}
              disabled={false}
              readOnly={false}
              isFormRootChild={true}
              onListenUploading={(
                file: any,
                fileList: any,
                fileResponseList: any,
                fileId: any,
                fileSize: any,
                fileName: any,
                fileResponse: any,
              ) => {
                const eventDatacustomActionCode896: any = [
                  {
                    type: 'customActionCode',
                    dataId: 166964190104236670,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '105118',
                      pageJsonId: 30,
                      code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode896.params =
                  [
                    {
                      title: '文件对象',
                      name: 'file',
                      value: '$file$',
                      attrType: 'object',
                    },
                    {
                      title: '上传信息列表',
                      name: 'fileList',
                      value: '$fileList$',
                    },
                    {
                      title: '文件列表',
                      name: 'fileResponseList',
                      value: '$fileResponseList$',
                    },
                    {
                      title: '文件ID',
                      name: 'fileId',
                      value: '$file?.response?.resultObject?.fileId$',
                    },
                    {
                      title: '文件大小',
                      name: 'fileSize',
                      value: '$file?.size$',
                    },
                    {
                      title: '文件名称',
                      name: 'fileName',
                      value: '$file?.name$',
                    },
                    {
                      title: '响应信息',
                      name: 'fileResponse',
                      value: '$file?.response$',
                      attrType: 'object',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatacustomActionCode896,
                  {
                    file,
                    fileList,
                    fileResponseList,
                    fileId,
                    fileSize,
                    fileName,
                    fileResponse,
                  },
                  'customActionCode',
                  {
                    id: 'customActionCode',
                    name: 'customActionCode',
                    type: 'customActionCode',
                    platform: 'pc',
                  },
                );
              }}
              onFinishUpload={(
                file: any,
                fileList: any,
                fileResponseList: any,
                fileId: any,
                fileSize: any,
                fileName: any,
                fileResponse: any,
              ) => {
                const eventDatasetValue44: any = [
                  {
                    type: 'setValue',
                    dataId: 166971829563839260,
                    options: {
                      compId: 'Input_0845739',
                      compLib: 'comm',
                      pageJsonId: 30,
                      compName: 'Input',
                      id: '2887952',
                      valueList: { Input_0845739: '$file.name$' },
                    },
                    line_number: 1,
                    callback1: [],
                  },
                ];
                eventDatasetValue44.params =
                  [
                    {
                      title: '文件对象',
                      name: 'file',
                      value: '$file$',
                      attrType: 'object',
                    },
                    {
                      title: '上传信息列表',
                      name: 'fileList',
                      value: '$fileList$',
                    },
                    {
                      title: '文件列表',
                      name: 'fileResponseList',
                      value: '$fileResponseList$',
                    },
                    {
                      title: '文件ID',
                      name: 'fileId',
                      value: '$file?.response?.resultObject?.fileId$',
                    },
                    {
                      title: '文件大小',
                      name: 'fileSize',
                      value: '$file?.size$',
                    },
                    {
                      title: '文件名称',
                      name: 'fileName',
                      value: '$file?.name$',
                    },
                    {
                      title: '响应信息',
                      name: 'fileResponse',
                      value: '$file?.response$',
                      attrType: 'object',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatasetValue44,
                  {
                    file,
                    fileList,
                    fileResponseList,
                    fileId,
                    fileSize,
                    fileName,
                    fileResponse,
                  },
                  'setValue',
                  {
                    id: 'setValue',
                    name: 'setValue',
                    type: 'setValue',
                    platform: 'pc',
                  },
                ); // console 166971830670681500
                console.log(file);
              }}
              ref={(r: any) => refs.setComponentRef(r, 'StdUpload_7846717')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Yingxiaoanupload$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    saleCfgId: '',
    saleCode: '',
    saleName: '',
    saleStatus: '',
    lanId: '',
    saleDesc: '',
    pageNum: '',
  },
});
