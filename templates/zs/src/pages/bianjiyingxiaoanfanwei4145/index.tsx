// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, Select, TextArea, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Bianjiyingxiaoanfanwei4145$$Modal: React.FC<PageProps> = ({
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
    const eventDataifelse300: any = [
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
                                    line_number: 12,
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
                                    line_number: 13,
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
                                    line_number: 14,
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
                                        line_number: 15,
                                      },
                                    ],
                                    condition: [],
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
                                        line_number: 15,
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
                                line_number: 11,
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
                        line_number: 10,
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
                line_number: 9,
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
                line_number: 9,
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
                    line_number: 10,
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
                                line_number: 15,
                              },
                            ],
                            condition: [],
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
                                line_number: 15,
                              },
                            ],
                          },
                        ],
                        line_number: 11,
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
                            line_number: 12,
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
                            line_number: 13,
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
                            line_number: 14,
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
                            line_number: 8,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 166927757390254700,
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
        ],
      },
    ];
    eventDataifelse300.params = [] || [];
    CMDGenerator(eventDataifelse300, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal93: any = [
      {
        type: 'closeModal',
        dataId: '996948_1',
        options: { compId: 'page', compName: 'page', id: '817529' },
        line_number: 1,
      },
    ];
    eventDatacloseModal93.params = [] || [];
    CMDGenerator(eventDatacloseModal93, {}, 'closeModal', {
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
    const eventDataifelse301: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '987572',
            options: { context: '$state.saleCfgId$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166927078989161660,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166927085345918340,
            children: [
              {
                dataName: 'action',
                dataId: 166927085919185920,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 166927085919120740,
                    children: [],
                    value: 'callback1',
                    params: [],
                    elseIfs: [],
                  },
                ],
                todoOptions: ['compId', 'valueList'],
                options: {
                  compId: 'Select_30_11213',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Select',
                  id: '930589',
                  valueList: { Select_30_11213: '1000' },
                },
                actionObjId: 'Select_30_11213',
                actionObjName: 'Select',
                value: 'setValue',
                compLib: 'comm',
                elseIfs: [],
                line_number: 4,
              },
              {
                dataName: 'action',
                dataId: 166927088887173000,
                children: [],
                todoOptions: ['disabled', 'selectComp'],
                options: {
                  compId: 'Select_30_11213',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Select',
                  id: '189569',
                  disabled: 'true',
                },
                actionObjId: 'Select_30_11213',
                actionObjName: 'Select',
                value: 'setDisable',
                compLib: 'comm',
                elseIfs: [],
                line_number: 5,
              },
            ],
            condition: [],
            elseIfs: [],
            callback: [
              {
                type: 'setValue',
                dataId: 166927085919185920,
                options: {
                  compId: 'Select_30_11213',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Select',
                  id: '930589',
                  valueList: { Select_30_11213: '1000' },
                },
                line_number: 4,
                callback1: [],
              },
              {
                type: 'setDisable',
                dataId: 166927088887173000,
                options: {
                  compId: 'Select_30_11213',
                  compLib: 'comm',
                  pageJsonId: 30,
                  compName: 'Select',
                  id: '189569',
                  disabled: 'true',
                },
                line_number: 5,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 166927250327106800,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '11723',
              pageJsonId: 30,
              value: ['营销案Id', '$state.saleCfgId$'],
            },
            line_number: 2,
          },
          {
            type: 'setValue',
            dataId: 166927081219255140,
            options: {
              compId: [
                'Input_30_11211',
                'Input_30_11212',
                'Select_30_11213',
                'Select_30_11217',
                'TextArea_30_11219',
              ],
              compLib: 'comm',
              pageJsonId: 30,
              compName: 'Input',
              id: '470412',
              valueList: {
                Input_30_11211: '$state.saleCode$',
                Input_30_11212: '$state.saleName$',
                Select_30_11213: '$state.saleStatus$',
                Select_30_11217: '$state.lanId$',
                TextArea_30_11219: '$state.saleDesc$',
              },
              compid: [
                'Input_30_11211',
                'Input_30_11212',
                'Select_30_11213',
                'Select_30_11217',
                'TextArea_30_11219',
              ],
            },
            line_number: 3,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse301.params = [] || [];
    CMDGenerator(eventDataifelse301, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

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
          id: 'View_30_1',
          uid: 'View_30_1',
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
        ref={(r: any) => (refs['View_30_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_30_11',
            uid: 'VerticalView_30_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => (refs['VerticalView_30_11'] = r)}
          {...injectData}
        >
          <Form
            name={'表单'}
            header={'标题'}
            colSpan={24}
            colSpace={16}
            rowSpace={16}
            labelCol={6}
            wrapperCol={'14'}
            layout={'horizontal'}
            colon={true}
            labelAlign={'right'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={''}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Form_30_1121',
              uid: 'Form_30_1121',
              type: 'Form',
              ...componentItem,
            }}
            style={{
              minHeight: 80,
              width: '100%',
              padding: '20px 20px 20px 20px',
            }}
            ref={(r: any) => (refs['Form_30_1121'] = r)}
            {...injectData}
          >
            <Input
              name={'营销案编码'}
              placeholder={'请输入'}
              titleTip={'notext'}
              fieldName={'saleCode'}
              required={true}
              formItemIndex={0}
              wrapperCol={'14'}
              labelCol={6}
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
                id: 'Input_30_11211',
                uid: 'Input_30_11211',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_30_11211'] = r)}
              {...injectData}
            />
            <Input
              name={'营销案名称'}
              placeholder={'请输入'}
              titleTip={'notext'}
              fieldName={'saleName'}
              required={true}
              formItemIndex={1}
              wrapperCol={'14'}
              labelCol={6}
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
                id: 'Input_30_11212',
                uid: 'Input_30_11212',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_30_11212'] = r)}
              {...injectData}
            />
            <Select
              name={'状态'}
              placeholder={'请选择'}
              classification={'default'}
              fieldName={'saleStatus'}
              required={true}
              formItemIndex={2}
              wrapperCol={'14'}
              labelCol={6}
              dataSource={[
                { id: '122789', label: '生效', value: '1000' },
                { id: '723813', label: '失效', value: '1100' },
              ]}
              $$componentItem={{
                id: 'Select_30_11213',
                uid: 'Select_30_11213',
                type: 'Select',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_30_11213'] = r)}
              {...injectData}
            />
            <Select
              name={'地市'}
              placeholder={'请选择'}
              classification={'default'}
              required={true}
              fieldName={'lanId'}
              formItemIndex={3}
              wrapperCol={'14'}
              labelCol={6}
              dataSource={attrDataMap['CITY_CODE']}
              $$componentItem={{
                id: 'Select_30_11217',
                uid: 'Select_30_11217',
                type: 'Select',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_30_11217'] = r)}
              {...injectData}
            />
            <TextArea
              name={'营销案描述'}
              placeholder={'请输入'}
              fieldName={'saleDesc'}
              formItemIndex={4}
              wrapperCol={'14'}
              labelCol={6}
              $$componentItem={{
                id: 'TextArea_30_11219',
                uid: 'TextArea_30_11219',
                type: 'TextArea',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_30_11219'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Bianjiyingxiaoanfanwei4145$$Modal, {
  pageId: '912619917963702272',
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
