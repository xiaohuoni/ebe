// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  MultipleSelect,
  HorizontalView,
  Text,
  Input,
  Button,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '993430674647535616';
const AuthorizationApprovalPopup$$Modal: React.FC<PageProps> = ({
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
    // console 168862184913602800
    console.log(data?.pageData, '');
    const eventDataapiRequest443: any = [
      {
        type: 'apiRequest',
        dataId: 168863066224685250,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '511531',
          pageJsonId: '0433935',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'addDcImpowerApproval',
          _apiCode: 'addDcImpowerApproval',
          _source: 'rhin',
          _sourceName: '新增授权审批数据',
          _serviceId: '994155208378396672',
          _serviceTitle: '新增授权审批数据: addDcImpowerApproval',
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
                  dataKey: '511531_root.header',
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
                  dataKey: '511531_root.path',
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
                  dataKey: '511531_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'delegatedCode',
                      name: 'delegatedCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.delegatedCode',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                      id: 'root.body.delegatedCode',
                      dataKey: '511531_root.body.delegatedCode',
                      value: {
                        type: ['datasource', 'pageData', 'data'],
                        code: 'delegatedCode',
                      },
                    },
                    {
                      code: 'delegatedPowerCode',
                      name: 'delegatedPowerCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.delegatedPowerCode',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.delegatedPowerCode',
                      dataKey: '511531_root.body.delegatedPowerCode',
                      value: {
                        type: ['datasource', 'pageData', 'data'],
                        code: 'delegatedPowerCode',
                      },
                    },
                    {
                      code: 'catalogCodes',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [],
                      _id: 'root.body.catalogCodes',
                      compType: 'Input',
                      name: 'catalogCodes',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.catalogCodes',
                      dataKey: '511531_root.body.catalogCodes',
                      value: {
                        type: ['datasource', 'pageData', 'data'],
                        code: 'catalogCodes',
                      },
                      _deletable: true,
                    },
                    {
                      code: 'sceneCodes',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'root.body.sceneCodes.listItem',
                          compType: 'Input',
                          parents: ['root', 'body', 'sceneCodes'],
                          parentType: 'fieldArray',
                          parentKey: '0-3-1',
                          key: '0-3-1-0',
                        },
                      ],
                      _id: 'root.body.sceneCodes',
                      compType: 'Input',
                      name: 'sceneCodes',
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
                  id: 'root.body',
                  dataKey: '511531_root.body',
                  value: { type: [], code: '' },
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '511531_root',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'console',
            dataId: 168863076510787870,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '483219',
              pageJsonId: '0433935',
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest443.params = [] || [];
    CMDGenerator(eventDataapiRequest443, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse236: any = [
      {
        type: 'ifelse',
        shielding: true,
        condition: [
          {
            condId: '306244',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168871529012754200,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 168871530476713600,
            children: [
              {
                dataName: 'action',
                dataId: 168871531119092060,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 168871531119057180,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168871875269564160,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168871875269592960,
                            children: [],
                            value: 'callback1',
                            params: [],
                            shielding: true,
                          },
                          {
                            dataName: 'callback',
                            dataId: 168871875269543260,
                            children: [],
                            value: 'callback2',
                            params: [],
                            shielding: true,
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
                          id: '744221',
                          pageJsonId: '0433935',
                          pathname: '/authorizationApproval',
                          pageId: '993406268634288128',
                          modalPath: '/authorizationApproval',
                          customFuncName: 'refreshAuthorizationApproval',
                          customFuncParams: '$data.pageData$',
                        },
                        actionObjId: 'callParentCustomFunc',
                        actionObjName: 'system',
                        value: 'callParentCustomFunc',
                        shielding: true,
                        line_number: 9,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                    shielding: true,
                  },
                  {
                    dataName: 'callback',
                    dataId: 168871531119091680,
                    children: [],
                    value: 'callback2',
                    params: [],
                    shielding: true,
                  },
                ],
                todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '6875184',
                  pageJsonId: '0433935',
                  sync: false,
                  actionTitle: '',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'addDcImpowerApproval',
                  _apiCode: 'addDcImpowerApproval',
                  _source: 'rhin',
                  _sourceName: '新增授权审批数据',
                  _serviceId: '994155208378396672',
                  _serviceTitle: '新增授权审批数据: addDcImpowerApproval',
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
                          dataKey: '511531_root.header',
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
                          dataKey: '511531_root.path',
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
                          dataKey: '511531_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'delegatedCode',
                              name: 'delegatedCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.delegatedCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                              id: 'root.body.delegatedCode',
                              dataKey: '511531_root.body.delegatedCode',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'delegatedCode',
                              },
                            },
                            {
                              code: 'delegatedPowerCode',
                              name: 'delegatedPowerCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.delegatedPowerCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.delegatedPowerCode',
                              dataKey: '511531_root.body.delegatedPowerCode',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'delegatedPowerCode',
                              },
                            },
                            {
                              code: 'catalogCodes',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'root.body.catalogCodes.listItem',
                                  compType: 'Input',
                                  parents: ['root', 'body', 'catalogCodes'],
                                  parentType: 'fieldArray',
                                  parentKey: '0-3-1',
                                  key: '0-3-1-0',
                                  parentCode: 'catalogCodes',
                                  id: 'root.body.catalogCodes.listItem',
                                  dataKey:
                                    '511531_root.body.catalogCodes.listItem',
                                },
                              ],
                              _id: 'root.body.catalogCodes',
                              compType: 'Input',
                              name: 'catalogCodes',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.catalogCodes',
                              dataKey: '511531_root.body.catalogCodes',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'catalogCodes',
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
                          dataKey: '511531_root.body',
                          value: { type: [], code: '' },
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '511531_root',
                    },
                  ],
                },
                actionObjId: 'apiRequest',
                actionObjName: 'system',
                value: 'apiRequest',
                shielding: true,
                line_number: 8,
              },
            ],
            condition: [],
            value: 'elseIf',
            shielding: true,
            callback: [
              {
                type: 'apiRequest',
                dataId: 168871531119092060,
                shielding: true,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '6875184',
                  pageJsonId: '0433935',
                  sync: false,
                  actionTitle: '',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'addDcImpowerApproval',
                  _apiCode: 'addDcImpowerApproval',
                  _source: 'rhin',
                  _sourceName: '新增授权审批数据',
                  _serviceId: '994155208378396672',
                  _serviceTitle: '新增授权审批数据: addDcImpowerApproval',
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
                          dataKey: '511531_root.header',
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
                          dataKey: '511531_root.path',
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
                          dataKey: '511531_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'delegatedCode',
                              name: 'delegatedCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.delegatedCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                              id: 'root.body.delegatedCode',
                              dataKey: '511531_root.body.delegatedCode',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'delegatedCode',
                              },
                            },
                            {
                              code: 'delegatedPowerCode',
                              name: 'delegatedPowerCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.delegatedPowerCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.delegatedPowerCode',
                              dataKey: '511531_root.body.delegatedPowerCode',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'delegatedPowerCode',
                              },
                            },
                            {
                              code: 'catalogCodes',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'root.body.catalogCodes.listItem',
                                  compType: 'Input',
                                  parents: ['root', 'body', 'catalogCodes'],
                                  parentType: 'fieldArray',
                                  parentKey: '0-3-1',
                                  key: '0-3-1-0',
                                  parentCode: 'catalogCodes',
                                  id: 'root.body.catalogCodes.listItem',
                                  dataKey:
                                    '511531_root.body.catalogCodes.listItem',
                                },
                              ],
                              _id: 'root.body.catalogCodes',
                              compType: 'Input',
                              name: 'catalogCodes',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.catalogCodes',
                              dataKey: '511531_root.body.catalogCodes',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'catalogCodes',
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
                          dataKey: '511531_root.body',
                          value: { type: [], code: '' },
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '511531_root',
                    },
                  ],
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'callParentCustomFunc',
                    dataId: 168871875269564160,
                    shielding: true,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '744221',
                      pageJsonId: '0433935',
                      pathname: '/authorizationApproval',
                      pageId: '993406268634288128',
                      modalPath: '/authorizationApproval',
                      customFuncName: 'refreshAuthorizationApproval',
                      customFuncParams: '$data.pageData$',
                    },
                    line_number: 9,
                    callback1: [],
                    callback2: [],
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
            type: 'console',
            dataId: 168871705507400030,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '097807',
              pageJsonId: '0433935',
              value: ['修改界面，发送请求之前数据源', '$data.pageData$'],
            },
            line_number: 5,
          },
          {
            type: 'apiRequest',
            dataId: 168871837134563870,
            shielding: true,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '7658554',
              pageJsonId: '0433935',
              sync: false,
              actionTitle: '',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'modDcImpowerApproval',
              _apiCode: 'modDcImpowerApproval',
              _source: 'rhin',
              _sourceName: '修改授权审批数据',
              _serviceId: '994516815761281024',
              _serviceTitle: '修改授权审批数据: modDcImpowerApproval',
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
                      dataKey: '7658554_root.header',
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
                      dataKey: '7658554_root.path',
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
                      dataKey: '7658554_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'catalogCode',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.catalogCode',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.catalogCode',
                          dataKey: '7658554_root.body.catalogCode',
                          value: {
                            type: ['datasource', 'pageData', 'data'],
                            code: 'catalogCode',
                          },
                          _deletable: true,
                        },
                        {
                          code: 'impowerId',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.impowerId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.impowerId',
                          dataKey: '7658554_root.body.impowerId',
                          value: {
                            type: ['datasource', 'pageData', 'data'],
                            code: 'impowerId',
                          },
                        },
                        {
                          code: 'delegatedPowerCode',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.delegatedPowerCode',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.delegatedPowerCode',
                          dataKey: '7658554_root.body.delegatedPowerCode',
                          value: {
                            type: ['datasource', 'pageData', 'data'],
                            code: 'delegatedPowerCode',
                          },
                        },
                        {
                          code: 'delegatedCode',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.delegatedCode',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-2',
                          id: 'root.body.delegatedCode',
                          dataKey: '7658554_root.body.delegatedCode',
                          value: {
                            type: ['datasource', 'pageData', 'data'],
                            code: 'delegatedCode',
                          },
                        },
                        {
                          code: 'sceneCode',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.sceneCode',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-3',
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                      id: 'root.body',
                      dataKey: '7658554_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '7658554_root',
                },
              ],
            },
            line_number: 6,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 168871874402945000,
                shielding: true,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '6892726',
                  pageJsonId: '0433935',
                  pathname: '/authorizationApproval',
                  pageId: '993406268634288128',
                  modalPath: '/authorizationApproval',
                  customFuncName: 'refreshAuthorizationApproval',
                  customFuncParams: '$data.pageData$',
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
    eventDataifelse236.params = [] || [];
    CMDGenerator(eventDataifelse236, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacloseModal64: any = [
      {
        type: 'closeModal',
        dataId: 168871861574243140,
        shielding: true,
        options: {
          compId: 'closeModal',
          compName: 'page',
          id: '4668154',
          pageJsonId: '0433935',
        },
        line_number: 10,
      },
    ];
    eventDatacloseModal64.params = [] || [];
    CMDGenerator(eventDatacloseModal64, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
    const eventDatavalidateAllForm: any = [
      {
        type: 'validateAllForm',
        dataId: 168904295559698940,
        options: {
          compId: 'validateAllForm',
          compName: 'page',
          id: '6883078',
          pageJsonId: '0433935',
        },
        line_number: 11,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '306244',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.sceneCode$',
                  operate: '==',
                  manualValue: 'M',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168904296442754180,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 168904296442795230,
                children: [
                  {
                    dataName: 'action',
                    dataId: 168904296442736000,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 168904296442712640,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168904296442755330,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 168904296442750750,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 168904296442772480,
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
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '178854',
                              pageJsonId: '0433935',
                              pathname: '/authorizationApproval',
                              pageId: '993406268634288128',
                              modalPath: '/authorizationApproval',
                              customFuncName: 'refreshAuthorizationApproval',
                              customFuncParams: '$data.pageData$',
                            },
                            actionObjId: 'callParentCustomFunc',
                            actionObjName: 'system',
                            value: 'callParentCustomFunc',
                            line_number: 17,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 168904296442796220,
                        children: [],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '816394',
                      pageJsonId: '0433935',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'addDcImpowerApproval',
                      _apiCode: 'addDcImpowerApproval',
                      _source: 'rhin',
                      _sourceName: '新增授权审批数据',
                      _serviceId: '994155208378396672',
                      _serviceTitle: '新增授权审批数据: addDcImpowerApproval',
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
                              dataKey: '816394_root.header',
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
                              dataKey: '816394_root.path',
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
                              dataKey: '816394_root.query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'delegatedCode',
                                  name: 'delegatedCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.delegatedCode',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-2',
                                  id: 'root.body.delegatedCode',
                                  dataKey: '816394_root.body.delegatedCode',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'delegatedCode',
                                  },
                                },
                                {
                                  code: 'delegatedPowerCode',
                                  name: 'delegatedPowerCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.delegatedPowerCode',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-0',
                                  id: 'root.body.delegatedPowerCode',
                                  dataKey:
                                    '816394_root.body.delegatedPowerCode',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'delegatedPowerCode',
                                  },
                                },
                                {
                                  code: 'sceneCodes',
                                  attrType: 'fieldArray',
                                  mustFlag: 'F',
                                  children: [
                                    {
                                      code: 'listItem',
                                      name: '列表元素',
                                      attrType: 'field',
                                      type: 'object',
                                      _id: 'root.body.sceneCodes.listItem',
                                      compType: 'Input',
                                      parents: ['root', 'body', 'sceneCodes'],
                                      parentType: 'fieldArray',
                                      parentKey: '0-3-1',
                                      key: '0-3-1-0',
                                      parentCode: 'sceneCodes',
                                      id: 'root.body.sceneCodes.listItem',
                                      dataKey:
                                        '816394_root.body.sceneCodes.listItem',
                                    },
                                  ],
                                  _id: 'root.body.sceneCodes',
                                  compType: 'Input',
                                  name: 'sceneCodes',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-1',
                                  id: 'root.body.sceneCodes',
                                  dataKey: '816394_root.body.sceneCodes',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'catalogCodes',
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
                              dataKey: '816394_root.body',
                              value: { type: [], code: '' },
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '816394_root',
                        },
                      ],
                    },
                    actionObjId: 'apiRequest',
                    actionObjName: 'system',
                    value: 'apiRequest',
                    line_number: 16,
                  },
                ],
                condition: [],
                value: 'elseIf',
                callback: [
                  {
                    type: 'apiRequest',
                    dataId: 168904296442736000,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '816394',
                      pageJsonId: '0433935',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'addDcImpowerApproval',
                      _apiCode: 'addDcImpowerApproval',
                      _source: 'rhin',
                      _sourceName: '新增授权审批数据',
                      _serviceId: '994155208378396672',
                      _serviceTitle: '新增授权审批数据: addDcImpowerApproval',
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
                              dataKey: '816394_root.header',
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
                              dataKey: '816394_root.path',
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
                              dataKey: '816394_root.query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'delegatedCode',
                                  name: 'delegatedCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.delegatedCode',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-2',
                                  id: 'root.body.delegatedCode',
                                  dataKey: '816394_root.body.delegatedCode',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'delegatedCode',
                                  },
                                },
                                {
                                  code: 'delegatedPowerCode',
                                  name: 'delegatedPowerCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.delegatedPowerCode',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-0',
                                  id: 'root.body.delegatedPowerCode',
                                  dataKey:
                                    '816394_root.body.delegatedPowerCode',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'delegatedPowerCode',
                                  },
                                },
                                {
                                  code: 'sceneCodes',
                                  attrType: 'fieldArray',
                                  mustFlag: 'F',
                                  children: [
                                    {
                                      code: 'listItem',
                                      name: '列表元素',
                                      attrType: 'field',
                                      type: 'object',
                                      _id: 'root.body.sceneCodes.listItem',
                                      compType: 'Input',
                                      parents: ['root', 'body', 'sceneCodes'],
                                      parentType: 'fieldArray',
                                      parentKey: '0-3-1',
                                      key: '0-3-1-0',
                                      parentCode: 'sceneCodes',
                                      id: 'root.body.sceneCodes.listItem',
                                      dataKey:
                                        '816394_root.body.sceneCodes.listItem',
                                    },
                                  ],
                                  _id: 'root.body.sceneCodes',
                                  compType: 'Input',
                                  name: 'sceneCodes',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-1',
                                  id: 'root.body.sceneCodes',
                                  dataKey: '816394_root.body.sceneCodes',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'catalogCodes',
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
                              dataKey: '816394_root.body',
                              value: { type: [], code: '' },
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '816394_root',
                        },
                      ],
                    },
                    line_number: 16,
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 168904296442755330,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '178854',
                          pageJsonId: '0433935',
                          pathname: '/authorizationApproval',
                          pageId: '993406268634288128',
                          modalPath: '/authorizationApproval',
                          customFuncName: 'refreshAuthorizationApproval',
                          customFuncParams: '$data.pageData$',
                        },
                        line_number: 17,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
            line_number: 12,
            callback1: [
              {
                type: 'console',
                dataId: 168904296442755400,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '771651',
                  pageJsonId: '0433935',
                  value: ['修改界面，发送请求之前数据源', '$data.pageData$'],
                },
                line_number: 13,
              },
              {
                type: 'apiRequest',
                dataId: 168904296442798660,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '160186',
                  pageJsonId: '0433935',
                  sync: false,
                  actionTitle: '',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'modDcImpowerApproval',
                  _apiCode: 'modDcImpowerApproval',
                  _source: 'rhin',
                  _sourceName: '修改授权审批数据',
                  _serviceId: '994516815761281024',
                  _serviceTitle: '修改授权审批数据: modDcImpowerApproval',
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
                          dataKey: '160186_root.header',
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
                          dataKey: '160186_root.path',
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
                          dataKey: '160186_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'impowerId',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.impowerId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.impowerId',
                              dataKey: '160186_root.body.impowerId',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'impowerId',
                              },
                            },
                            {
                              code: 'delegatedPowerCode',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.delegatedPowerCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.delegatedPowerCode',
                              dataKey: '160186_root.body.delegatedPowerCode',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'delegatedPowerCode',
                              },
                            },
                            {
                              code: 'delegatedCode',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.delegatedCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                              id: 'root.body.delegatedCode',
                              dataKey: '160186_root.body.delegatedCode',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'delegatedCode',
                              },
                            },
                            {
                              code: 'sceneCode',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.sceneCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-3',
                              id: 'root.body.sceneCode',
                              dataKey: '160186_root.body.sceneCode',
                              value: {
                                type: ['datasource', 'pageData', 'data'],
                                code: 'catalogCode',
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
                          dataKey: '160186_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '160186_root',
                    },
                  ],
                },
                line_number: 14,
                callback1: [
                  {
                    type: 'callParentCustomFunc',
                    dataId: 168904296442786720,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '1145093',
                      pageJsonId: '0433935',
                      pathname: '/authorizationApproval',
                      pageId: '993406268634288128',
                      modalPath: '/authorizationApproval',
                      customFuncName: 'refreshAuthorizationApproval',
                      customFuncParams: '$data.pageData$',
                    },
                    line_number: 15,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            type: 'closeModal',
            dataId: 168904298769633920,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '456314',
              pageJsonId: '0433935',
            },
            line_number: 18,
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateAllForm.params = [] || [];
    CMDGenerator(eventDatavalidateAllForm, {}, 'validateAllForm', {
      id: 'validateAllForm',
      name: 'validateAllForm',
      type: 'validateAllForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal65: any = [
      {
        type: 'closeModal',
        dataId: '992943_1',
        options: { compId: 'page', compName: 'page', id: '739937' },
        line_number: 1,
      },
    ];
    eventDatacloseModal65.params = [] || [];
    CMDGenerator(eventDatacloseModal65, {}, 'closeModal', {
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
    const eventDataapiRequest444: any = [
      {
        type: 'apiRequest',
        dataId: 168860872932915230,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '775808',
          pageJsonId: '0433935',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAllowAuthorizationApprovalSceneList',
          _apiCode: 'qryAllowAuthorizationApprovalSceneList',
          _source: 'rhin',
          _sourceName: '查询允许授权审批场景',
          _serviceId: '994056568305594368',
          _serviceTitle:
            '查询允许授权审批场景: qryAllowAuthorizationApprovalSceneList',
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
                  dataKey: '775808_root.header',
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
                  dataKey: '775808_root.path',
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
                  dataKey: '775808_root.query',
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
                  dataKey: '775808_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '775808_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 168860874715440600,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '817606',
              pageJsonId: '0433935',
              value: ['$reply_775808?.resultData$', '$state.bizData$'],
            },
            line_number: 2,
          },
          {
            type: 'reloadSelectData',
            dataId: 168860945138755360,
            shielding: true,
            options: {
              compId: 'MultipleSelect_0191438',
              compLib: 'comm',
              pageJsonId: '0433935',
              compName: 'MultipleSelect',
              id: '264356',
              data: '$reply_775808?.resultData$',
              labelKey: 'catalogName',
              valueKey: 'catalogCode',
            },
            line_number: 3,
            callback1: [],
          },
          {
            type: 'customActionCode',
            dataId: 169027632064777280,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '187843',
              pageJsonId: '0433935',
              actionTitle: '过滤已授权的场景',
              code: 'function main(data,state,success,fail){var selectedData=state.bizData;var filteredData=reply_775808.resultData;var res=[];console.log(selectedData,"\\u5DF2\\u9009\\u62E9\\u573A\\u666F",filteredData);for(var i=0;i<filteredData.length;i++){var flag=1;for(var j=0;j<selectedData.length;j++){if(filteredData[i].catalogCode===selectedData[j].sceneCode){flag=0}}if(flag==1){res.push(filteredData[i])}}console.log(res,"\\u8FC7\\u6EE4\\u7ED3\\u679C");success(res)};',
            },
            line_number: 4,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 169027796417516060,
                options: {
                  compId: 'MultipleSelect_0191438',
                  compLib: 'comm',
                  pageJsonId: '0433935',
                  compName: 'MultipleSelect',
                  id: '980817',
                  data: '$data_187843$',
                  labelKey: 'catalogName',
                  valueKey: 'catalogCode',
                },
                line_number: 5,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest444.params = [] || [];
    CMDGenerator(eventDataapiRequest444, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetDataSource18: any = [
      {
        type: 'setDataSource',
        dataId: 168861193938897120,
        shielding: true,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '297541',
          pageJsonId: '0433935',
          dataSourceId: 16886110098162668,
          dataSourceName: 'pageData',
          dataSourceRelType: 'custom',
          dataSourceSetValue: [
            {
              attrId: '792355',
              code: 'catalogCode',
              name: '场景编码',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['catalogCode'],
              _idpath: ['792355'],
            },
            {
              attrId: '49055',
              code: 'catalogName',
              name: '场景名称',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['catalogName'],
              _idpath: ['49055'],
            },
            {
              attrId: '189267',
              code: 'delegatedCode',
              name: '授权人编码',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              value: {
                type: ['context', '$state.bizData$'],
                code: 'row_usr_login',
              },
              _codePath: ['delegatedCode'],
              _idpath: ['189267'],
            },
            {
              attrId: '878829',
              code: 'delegatedPowerCode',
              name: '被授权人编码',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['delegatedPowerCode'],
              _idpath: ['878829'],
            },
            {
              attrId: '61061',
              code: 'delegatedName',
              name: '授权人姓名',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              value: {
                type: ['context', '$state.bizData$'],
                code: 'row_usr_last_name',
              },
              _codePath: ['delegatedName'],
              _idpath: ['61061'],
            },
            {
              attrId: '27578',
              code: 'delegatedPowerName',
              name: '被授权人姓名',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['delegatedPowerName'],
              _idpath: ['27578'],
            },
            {
              attrId: '491819',
              code: 'jobLevelName',
              name: '人员等级',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['jobLevelName'],
              _idpath: ['491819'],
            },
            {
              attrId: '039233',
              code: 'orgName',
              name: '组织名称',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['orgName'],
              _idpath: ['039233'],
            },
            {
              attrId: '903623',
              code: 'catalogCodes',
              name: '场景编码数组',
              type: 'array',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['catalogCodes'],
              _idpath: ['903623'],
              children: [],
            },
            {
              attrId: '538317',
              code: 'impowerId',
              name: '授权审批主键id',
              type: 'number',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['impowerId'],
              _idpath: ['538317'],
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
    ];
    eventDatasetDataSource18.params = [] || [];
    CMDGenerator(eventDatasetDataSource18, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    });
    const eventDataifelse237: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '99375',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168871517386194530,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 168871522065767170,
            children: [
              {
                dataName: 'action',
                dataId: 168871522800528420,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 168871522800538200,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 168871522800569100,
                    children: [],
                    value: 'callback2',
                    params: [],
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
                  id: '906762',
                  pageJsonId: '0433935',
                  dataSourceId: 16886110098162668,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '792355',
                      code: 'catalogCode',
                      name: '场景编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogCode'],
                      _idpath: ['792355'],
                    },
                    {
                      attrId: '49055',
                      code: 'catalogName',
                      name: '场景名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogName'],
                      _idpath: ['49055'],
                    },
                    {
                      attrId: '189267',
                      code: 'delegatedCode',
                      name: '授权人编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.authorizedPersonInfo$'],
                        code: 'row_usr_login',
                      },
                      _codePath: ['delegatedCode'],
                      _idpath: ['189267'],
                    },
                    {
                      attrId: '878829',
                      code: 'delegatedPowerCode',
                      name: '被授权人编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['delegatedPowerCode'],
                      _idpath: ['878829'],
                    },
                    {
                      attrId: '61061',
                      code: 'delegatedName',
                      name: '授权人姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.authorizedPersonInfo$'],
                        code: 'row_usr_last_name',
                      },
                      _codePath: ['delegatedName'],
                      _idpath: ['61061'],
                    },
                    {
                      attrId: '27578',
                      code: 'delegatedPowerName',
                      name: '被授权人姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['delegatedPowerName'],
                      _idpath: ['27578'],
                    },
                    {
                      attrId: '491819',
                      code: 'jobLevelName',
                      name: '人员等级',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['jobLevelName'],
                      _idpath: ['491819'],
                    },
                    {
                      attrId: '039233',
                      code: 'orgName',
                      name: '组织名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['orgName'],
                      _idpath: ['039233'],
                    },
                    {
                      attrId: '903623',
                      code: 'catalogCodes',
                      name: '场景编码数组',
                      type: 'array',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogCodes'],
                      _idpath: ['903623'],
                      children: [],
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
                line_number: 13,
              },
              {
                dataName: 'action',
                dataId: 168871630792989340,
                children: [],
                todoOptions: ['valueArray'],
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '4395535',
                  pageJsonId: '0433935',
                  value: ['这是添加界面'],
                },
                actionObjId: 'debug',
                actionObjName: 'system',
                value: 'console',
                line_number: 14,
              },
            ],
            condition: [],
            value: 'elseIf',
            callback: [
              {
                type: 'setDataSource',
                dataId: 168871522800528420,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '906762',
                  pageJsonId: '0433935',
                  dataSourceId: 16886110098162668,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '792355',
                      code: 'catalogCode',
                      name: '场景编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogCode'],
                      _idpath: ['792355'],
                    },
                    {
                      attrId: '49055',
                      code: 'catalogName',
                      name: '场景名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogName'],
                      _idpath: ['49055'],
                    },
                    {
                      attrId: '189267',
                      code: 'delegatedCode',
                      name: '授权人编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.authorizedPersonInfo$'],
                        code: 'row_usr_login',
                      },
                      _codePath: ['delegatedCode'],
                      _idpath: ['189267'],
                    },
                    {
                      attrId: '878829',
                      code: 'delegatedPowerCode',
                      name: '被授权人编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['delegatedPowerCode'],
                      _idpath: ['878829'],
                    },
                    {
                      attrId: '61061',
                      code: 'delegatedName',
                      name: '授权人姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.authorizedPersonInfo$'],
                        code: 'row_usr_last_name',
                      },
                      _codePath: ['delegatedName'],
                      _idpath: ['61061'],
                    },
                    {
                      attrId: '27578',
                      code: 'delegatedPowerName',
                      name: '被授权人姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['delegatedPowerName'],
                      _idpath: ['27578'],
                    },
                    {
                      attrId: '491819',
                      code: 'jobLevelName',
                      name: '人员等级',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['jobLevelName'],
                      _idpath: ['491819'],
                    },
                    {
                      attrId: '039233',
                      code: 'orgName',
                      name: '组织名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['orgName'],
                      _idpath: ['039233'],
                    },
                    {
                      attrId: '903623',
                      code: 'catalogCodes',
                      name: '场景编码数组',
                      type: 'array',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['catalogCodes'],
                      _idpath: ['903623'],
                      children: [],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 13,
                callback1: [],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 168871630792989340,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '4395535',
                  pageJsonId: '0433935',
                  value: ['这是添加界面'],
                },
                line_number: 14,
              },
            ],
          },
        ],
        line_number: 7,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168871557078198400,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '755382',
              pageJsonId: '0433935',
              dataSourceId: 16886110098162668,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '792355',
                  code: 'catalogCode',
                  name: '场景编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'sceneCode',
                  },
                  _codePath: ['catalogCode'],
                  _idpath: ['792355'],
                },
                {
                  attrId: '49055',
                  code: 'catalogName',
                  name: '场景名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'catalogName',
                  },
                  _codePath: ['catalogName'],
                  _idpath: ['49055'],
                },
                {
                  attrId: '189267',
                  code: 'delegatedCode',
                  name: '授权人编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.authorizedPersonInfo$'],
                    code: 'row_usr_login',
                  },
                  _codePath: ['delegatedCode'],
                  _idpath: ['189267'],
                },
                {
                  attrId: '878829',
                  code: 'delegatedPowerCode',
                  name: '被授权人编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'delegatedPowerCode',
                  },
                  _codePath: ['delegatedPowerCode'],
                  _idpath: ['878829'],
                },
                {
                  attrId: '61061',
                  code: 'delegatedName',
                  name: '授权人姓名',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.authorizedPersonInfo$'],
                    code: 'row_usr_last_name',
                  },
                  _codePath: ['delegatedName'],
                  _idpath: ['61061'],
                },
                {
                  attrId: '27578',
                  code: 'delegatedPowerName',
                  name: '被授权人姓名',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'usrLastName',
                  },
                  _codePath: ['delegatedPowerName'],
                  _idpath: ['27578'],
                },
                {
                  attrId: '491819',
                  code: 'jobLevelName',
                  name: '人员等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'jobLevel',
                  },
                  _codePath: ['jobLevelName'],
                  _idpath: ['491819'],
                },
                {
                  attrId: '039233',
                  code: 'orgName',
                  name: '组织名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'orgName',
                  },
                  _codePath: ['orgName'],
                  _idpath: ['039233'],
                },
                {
                  attrId: '903623',
                  code: 'catalogCodes',
                  name: '场景编码数组',
                  type: 'array',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['catalogCodes'],
                  _idpath: ['903623'],
                },
                {
                  attrId: '538317',
                  code: 'impowerId',
                  name: '授权审批主键id',
                  type: 'number',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['impowerId'],
                  _idpath: ['538317'],
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'impowerId',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 8,
            callback1: [
              {
                type: 'console',
                dataId: 168871620555657250,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '018588',
                  pageJsonId: '0433935',
                  value: ['$data.pageData$', '修改数据源'],
                },
                line_number: 9,
              },
              {
                type: 'setValue',
                dataId: 168871678890795870,
                options: {
                  compId: 'MultipleSelect_0191438',
                  compLib: 'comm',
                  pageJsonId: '0433935',
                  compName: 'MultipleSelect',
                  id: '3090524',
                  valueList: {
                    MultipleSelect_0191438: '$data.pageData.catalogName$',
                  },
                },
                line_number: 10,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168871629604094200,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '2288445',
              pageJsonId: '0433935',
              value: ['这是修改界面'],
            },
            line_number: 11,
          },
          {
            type: 'sysSetDisable',
            dataId: 168871672955575740,
            options: {
              compId: ['MultipleSelect_0191438'],
              compName: 'page',
              id: '381037',
              pageJsonId: '0433935',
              disabled: 'true',
              compid: ['MultipleSelect_0191438'],
            },
            line_number: 12,
          },
        ],
      },
    ];
    eventDataifelse237.params = [] || [];
    CMDGenerator(eventDataifelse237, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169027580559142430
    console.log(state?.bizData, '已授权审批场景');

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_0433935__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_0433935_1',
          uid: 'View_0433935_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_0433935_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_580561',
            uid: 'View_580561',
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
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_580561')}
          {...injectData}
        >
          <Card
            name={'卡片'}
            cardIconType={'none'}
            extendNum={3}
            title={data?.pageData?.delegatedName + '正在为他人授权'}
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
              id: 'Card_722949',
              uid: 'Card_722949',
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
            ref={(r: any) => refs.setComponentRef(r, 'Card_722949')}
            {...injectData}
          >
            <Form
              name={'表单'}
              colSpan={12}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_7248776'}
              $$componentItem={{
                id: 'Form_7248776',
                uid: 'Form_7248776',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_7248776')}
              {...injectData}
            >
              <MultipleSelect
                name={'审批场景'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={true}
                filter={'local'}
                attr={{}}
                placeholder={'请选择'}
                mode={'multiple'}
                formItemIndex={0}
                fieldName={'catalogCode'}
                max={'TODO: 语法错误'}
                $$componentItem={{
                  id: 'MultipleSelect_0191438',
                  uid: 'MultipleSelect_0191438',
                  type: 'MultipleSelect',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  // console 168861237293216320
                  console.log(e);
                  const eventDatasetDataSource196: any = [
                    {
                      type: 'setDataSource',
                      dataId: 168863314265982080,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '8293069',
                        pageJsonId: '0433935',
                        dataSourceId: 16886110098162668,
                        dataSourceName: 'pageData',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '792355',
                            code: 'catalogCode',
                            name: '场景编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['catalogCode'],
                            _idpath: ['792355'],
                          },
                          {
                            attrId: '49055',
                            code: 'catalogName',
                            name: '场景名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['catalogName'],
                            _idpath: ['49055'],
                          },
                          {
                            attrId: '189267',
                            code: 'delegatedCode',
                            name: '授权人编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['delegatedCode'],
                            _idpath: ['189267'],
                          },
                          {
                            attrId: '878829',
                            code: 'delegatedPowerCode',
                            name: '被授权人编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['delegatedPowerCode'],
                            _idpath: ['878829'],
                          },
                          {
                            attrId: '61061',
                            code: 'delegatedName',
                            name: '授权人姓名',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['delegatedName'],
                            _idpath: ['61061'],
                          },
                          {
                            attrId: '27578',
                            code: 'delegatedPowerName',
                            name: '被授权人姓名',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['delegatedPowerName'],
                            _idpath: ['27578'],
                          },
                          {
                            attrId: '491819',
                            code: 'jobLevelName',
                            name: '人员等级',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['jobLevelName'],
                            _idpath: ['491819'],
                          },
                          {
                            attrId: '039233',
                            code: 'orgName',
                            name: '组织名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['orgName'],
                            _idpath: ['039233'],
                          },
                          {
                            attrId: '903623',
                            code: 'catalogCodes',
                            name: '场景编码数组',
                            type: 'array',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: { type: ['context', '$e$'], code: '' },
                            _codePath: ['catalogCodes'],
                            _idpath: ['903623'],
                          },
                          {
                            attrId: '538317',
                            code: 'impowerId',
                            name: '授权审批主键id',
                            type: 'number',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['impowerId'],
                            _idpath: ['538317'],
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource196.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatasetDataSource196,
                    { e },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'MultipleSelect_0191438')
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_558677',
                  uid: 'View_558677',
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
                    formItemIndex: 1,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                style={{
                  textAlign: 'left',
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_558677')}
                {...injectData}
              />
              <HorizontalView
                name={'左右布局'}
                $$componentItem={{
                  id: 'HorizontalView_921552',
                  uid: 'HorizontalView_921552',
                  type: 'HorizontalView',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                schema={{
                  compType: 6,
                  props: {
                    formItemIndex: 2,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'HorizontalView_921552')
                }
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_476468',
                    uid: 'View_476468',
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
                    width: '140%',
                    height: '100%',
                    overflowY: 'auto',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_476468')}
                  {...injectData}
                >
                  <HorizontalView
                    name={'左右布局'}
                    $$componentItem={{
                      id: 'HorizontalView_808041',
                      uid: 'HorizontalView_808041',
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'HorizontalView_808041')
                    }
                    {...injectData}
                  >
                    <View
                      name={'布局容器'}
                      $$componentItem={{
                        id: 'View_6401829',
                        uid: 'View_6401829',
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
                        width: '51%',
                        height: '100%',
                        overflowY: 'auto',
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'View_6401829')}
                      {...injectData}
                    >
                      <Text
                        name={'文本'}
                        content={'被授权人：'}
                        textType={'span'}
                        version={'1.0'}
                        showHtml={false}
                        $$componentItem={{
                          id: 'Text_779954',
                          uid: 'Text_779954',
                          type: 'Text',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          textAlign: 'right',
                          fontSize: 12,
                          lineHeight: '24px',
                          color: '#1c242e',
                          backgroundColor: 'rgba(255, 255, 255,0)',
                          margin: '8px 8px 8px 8px',
                        }}
                        ref={(r: any) => refs.setComponentRef(r, 'Text_779954')}
                        {...injectData}
                      />
                    </View>
                    <View
                      name={'布局容器'}
                      $$componentItem={{
                        id: 'View_1936224',
                        uid: 'View_1936224',
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
                        width: '80%',
                        height: '100%',
                        overflowY: 'auto',
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'View_1936224')}
                      {...injectData}
                    >
                      <Input
                        name={'被授权人'}
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
                        formItemIndex={2}
                        fieldName={'usrLastName'}
                        value={data?.pageData?.delegatedPowerName}
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
                          id: 'Input_1422086',
                          uid: 'Input_1422086',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_1422086')
                        }
                        {...injectData}
                      />
                    </View>
                  </HorizontalView>
                </View>
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_175491',
                    uid: 'View_175491',
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
                    width: '20%',
                    height: '100%',
                    overflowY: 'auto',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_175491')}
                  {...injectData}
                >
                  <Button
                    name={'选择'}
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
                      id: 'Button_8668672',
                      uid: 'Button_8668672',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatashowCustomModal218: any = [
                        {
                          type: 'showCustomModal',
                          dataId: 168845990841350820,
                          options: {
                            compId: 'showCustomModal',
                            compName: 'page',
                            id: '6499304',
                            pageJsonId: '0433935',
                            modalname: '/userSelectList',
                            pageId: '993433830689329152',
                            modalPath: '/userSelectList',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 168860997542483520,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '0351222',
                                pageJsonId: '0433935',
                                value: ['$okData_6499304$'],
                              },
                              line_number: 2,
                            },
                            {
                              type: 'setDataSource',
                              dataId: 168861222552304000,
                              shielding: true,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '972289',
                                pageJsonId: '0433935',
                                dataSourceId: 16886110098162668,
                                dataSourceName: 'pageData',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '792355',
                                    code: 'catalogCode',
                                    name: '场景编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['catalogCode'],
                                    _idpath: ['792355'],
                                  },
                                  {
                                    attrId: '49055',
                                    code: 'catalogName',
                                    name: '场景名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['catalogName'],
                                    _idpath: ['49055'],
                                  },
                                  {
                                    attrId: '189267',
                                    code: 'delegatedCode',
                                    name: '授权人编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: { type: [], code: '' },
                                    _codePath: ['delegatedCode'],
                                    _idpath: ['189267'],
                                  },
                                  {
                                    attrId: '878829',
                                    code: 'delegatedPowerCode',
                                    name: '被授权人编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['context', '$okData_6499304$'],
                                      code: 'usrLogin',
                                    },
                                    _codePath: ['delegatedPowerCode'],
                                    _idpath: ['878829'],
                                  },
                                  {
                                    attrId: '61061',
                                    code: 'delegatedName',
                                    name: '授权人姓名',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['delegatedName'],
                                    _idpath: ['61061'],
                                  },
                                  {
                                    attrId: '27578',
                                    code: 'delegatedPowerName',
                                    name: '被授权人姓名',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['context', '$okData_6499304$'],
                                      code: 'usrLastName',
                                    },
                                    _codePath: ['delegatedPowerName'],
                                    _idpath: ['27578'],
                                  },
                                  {
                                    attrId: '491819',
                                    code: 'jobLevelName',
                                    name: '人员等级',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['jobLevelName'],
                                    _idpath: ['491819'],
                                  },
                                  {
                                    attrId: '039233',
                                    code: 'orgName',
                                    name: '组织名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['orgName'],
                                    _idpath: ['039233'],
                                  },
                                  {
                                    attrId: '903623',
                                    code: 'catalogCodes',
                                    name: '场景编码数组',
                                    type: 'array',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['catalogCodes'],
                                    _idpath: ['903623'],
                                    children: [],
                                  },
                                  {
                                    attrId: '538317',
                                    code: 'impowerId',
                                    name: '授权审批主键id',
                                    type: 'number',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['impowerId'],
                                    _idpath: ['538317'],
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
                            {
                              type: 'apiRequest',
                              dataId: 168861260011215260,
                              shielding: true,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '814648',
                                pageJsonId: '0433935',
                                sync: false,
                                actionTitle: '',
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'qryDcOaOrgRelPage',
                                _apiCode: 'qryDcOaOrgRelPage',
                                _source: 'rhin',
                                _sourceName: '分页查询用户关联组织-hyj',
                                _serviceId: '953209188524261376',
                                _serviceTitle:
                                  '分页查询用户关联组织-hyj: qryDcOaOrgRelPage',
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
                                        dataKey: '814648_root.header',
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
                                        dataKey: '814648_root.path',
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
                                        dataKey: '814648_root.query',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
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
                                            key: '0-3-0',
                                            id: 'root.body.pageNum',
                                            dataKey: '814648_root.body.pageNum',
                                          },
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
                                            key: '0-3-1',
                                            id: 'root.body.pageSize',
                                            dataKey:
                                              '814648_root.body.pageSize',
                                          },
                                          {
                                            code: 'usrKey',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.usrKey',
                                            compType: 'Input',
                                            name: 'usrKey',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-2',
                                            id: 'root.body.usrKey',
                                            dataKey: '814648_root.body.usrKey',
                                            value: {
                                              type: [
                                                'context',
                                                '$okData_6499304$',
                                              ],
                                              code: 'usrKey',
                                            },
                                          },
                                          {
                                            code: 'orgCode',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.orgCode',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-3',
                                            id: 'root.body.orgCode',
                                            dataKey: '814648_root.body.orgCode',
                                          },
                                          {
                                            code: 'orgName',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.orgName',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-4',
                                            id: 'root.body.orgName',
                                            dataKey: '814648_root.body.orgName',
                                          },
                                        ],
                                        _id: 'root.body',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-3',
                                        id: 'root.body',
                                        dataKey: '814648_root.body',
                                      },
                                    ],
                                    _id: 'root',
                                    compType: 'Input',
                                    isRoot: true,
                                    parents: [],
                                    key: '0',
                                    id: 'root',
                                    dataKey: '814648_root',
                                  },
                                ],
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'console',
                                  dataId: 168861265281993920,
                                  shielding: true,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '7984851',
                                    pageJsonId: '0433935',
                                    value: [
                                      '$reply_814648?.resultData$',
                                      '0000000000000',
                                    ],
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'setDataSource',
                                  dataId: 168861394560756900,
                                  shielding: true,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '635287',
                                    pageJsonId: '0433935',
                                    dataSourceId: 16886110098162668,
                                    dataSourceName: 'pageData',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '792355',
                                        code: 'catalogCode',
                                        name: '场景编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['catalogCode'],
                                        _idpath: ['792355'],
                                      },
                                      {
                                        attrId: '49055',
                                        code: 'catalogName',
                                        name: '场景名称',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['catalogName'],
                                        _idpath: ['49055'],
                                      },
                                      {
                                        attrId: '189267',
                                        code: 'delegatedCode',
                                        name: '授权人编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['delegatedCode'],
                                        _idpath: ['189267'],
                                      },
                                      {
                                        attrId: '878829',
                                        code: 'delegatedPowerCode',
                                        name: '被授权人编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['delegatedPowerCode'],
                                        _idpath: ['878829'],
                                      },
                                      {
                                        attrId: '61061',
                                        code: 'delegatedName',
                                        name: '授权人姓名',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['delegatedName'],
                                        _idpath: ['61061'],
                                      },
                                      {
                                        attrId: '27578',
                                        code: 'delegatedPowerName',
                                        name: '被授权人姓名',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['delegatedPowerName'],
                                        _idpath: ['27578'],
                                      },
                                      {
                                        attrId: '491819',
                                        code: 'jobLevelName',
                                        name: '人员等级',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['jobLevelName'],
                                        _idpath: ['491819'],
                                        value: {
                                          type: [
                                            'context',
                                            '$reply_814648?.resultData$',
                                          ],
                                          code: '',
                                        },
                                      },
                                      {
                                        attrId: '039233',
                                        code: 'orgName',
                                        name: '组织名称',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['orgName'],
                                        _idpath: ['039233'],
                                      },
                                      {
                                        attrId: '903623',
                                        code: 'catalogCodes',
                                        name: '场景编码数组',
                                        type: 'array',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['catalogCodes'],
                                        _idpath: ['903623'],
                                        children: [],
                                      },
                                      {
                                        attrId: '538317',
                                        code: 'impowerId',
                                        name: '授权审批主键id',
                                        type: 'number',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['impowerId'],
                                        _idpath: ['538317'],
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
                                {
                                  type: 'ifelse',
                                  shielding: true,
                                  condition: [
                                    {
                                      condId: '5924415',
                                      options: {
                                        context:
                                          '$reply_814648?.resultData.records[0]$',
                                        operate: 'notEmpty',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 168861414229183870,
                                  elseIfs: [],
                                  line_number: 7,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 168861419231162140,
                                      shielding: true,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '484001',
                                        pageJsonId: '0433935',
                                        dataSourceId: 16886110098162668,
                                        dataSourceName: 'pageData',
                                        dataSourceRelType: 'custom',
                                        dataSourceSetValue: [
                                          {
                                            attrId: '792355',
                                            code: 'catalogCode',
                                            name: '场景编码',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['catalogCode'],
                                            _idpath: ['792355'],
                                          },
                                          {
                                            attrId: '49055',
                                            code: 'catalogName',
                                            name: '场景名称',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['catalogName'],
                                            _idpath: ['49055'],
                                          },
                                          {
                                            attrId: '189267',
                                            code: 'delegatedCode',
                                            name: '授权人编码',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['delegatedCode'],
                                            _idpath: ['189267'],
                                          },
                                          {
                                            attrId: '878829',
                                            code: 'delegatedPowerCode',
                                            name: '被授权人编码',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['delegatedPowerCode'],
                                            _idpath: ['878829'],
                                          },
                                          {
                                            attrId: '61061',
                                            code: 'delegatedName',
                                            name: '授权人姓名',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['delegatedName'],
                                            _idpath: ['61061'],
                                          },
                                          {
                                            attrId: '27578',
                                            code: 'delegatedPowerName',
                                            name: '被授权人姓名',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['delegatedPowerName'],
                                            _idpath: ['27578'],
                                          },
                                          {
                                            attrId: '491819',
                                            code: 'jobLevelName',
                                            name: '人员等级',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['jobLevelName'],
                                            _idpath: ['491819'],
                                            value: {
                                              type: ['customize'],
                                              code: '$reply_814648?.resultData.records[0].jobLevelName$',
                                            },
                                          },
                                          {
                                            attrId: '039233',
                                            code: 'orgName',
                                            name: '组织名称',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['orgName'],
                                            _idpath: ['039233'],
                                            value: {
                                              type: ['customize'],
                                              code: '$reply_814648?.resultData.records[0].orgName$',
                                            },
                                          },
                                          {
                                            attrId: '903623',
                                            code: 'catalogCodes',
                                            name: '场景编码数组',
                                            type: 'array',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['catalogCodes'],
                                            _idpath: ['903623'],
                                            children: [],
                                          },
                                          {
                                            attrId: '538317',
                                            code: 'impowerId',
                                            name: '授权审批主键id',
                                            type: 'number',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['impowerId'],
                                            _idpath: ['538317'],
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
                                  ],
                                },
                              ],
                              callback2: [],
                            },
                            {
                              type: 'setDataSource',
                              dataId: 168862223740143780,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '2450367',
                                pageJsonId: '0433935',
                                dataSourceId: 16886110098162668,
                                dataSourceName: 'pageData',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '792355',
                                    code: 'catalogCode',
                                    name: '场景编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['catalogCode'],
                                    _idpath: ['792355'],
                                  },
                                  {
                                    attrId: '49055',
                                    code: 'catalogName',
                                    name: '场景名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['catalogName'],
                                    _idpath: ['49055'],
                                  },
                                  {
                                    attrId: '189267',
                                    code: 'delegatedCode',
                                    name: '授权人编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['delegatedCode'],
                                    _idpath: ['189267'],
                                  },
                                  {
                                    attrId: '878829',
                                    code: 'delegatedPowerCode',
                                    name: '被授权人编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['EMPTY_DATA', 'string'],
                                      code: '$EMPTY_DATA.string$',
                                      hideAttr: true,
                                    },
                                    _codePath: ['delegatedPowerCode'],
                                    _idpath: ['878829'],
                                  },
                                  {
                                    attrId: '61061',
                                    code: 'delegatedName',
                                    name: '授权人姓名',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: { type: [], code: '' },
                                    _codePath: ['delegatedName'],
                                    _idpath: ['61061'],
                                  },
                                  {
                                    attrId: '27578',
                                    code: 'delegatedPowerName',
                                    name: '被授权人姓名',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['EMPTY_DATA', 'string'],
                                      code: '$EMPTY_DATA.string$',
                                      hideAttr: true,
                                    },
                                    _codePath: ['delegatedPowerName'],
                                    _idpath: ['27578'],
                                  },
                                  {
                                    attrId: '491819',
                                    code: 'jobLevelName',
                                    name: '人员等级',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['EMPTY_DATA', 'string'],
                                      code: '$EMPTY_DATA.string$',
                                      hideAttr: true,
                                    },
                                    _codePath: ['jobLevelName'],
                                    _idpath: ['491819'],
                                  },
                                  {
                                    attrId: '039233',
                                    code: 'orgName',
                                    name: '组织名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['EMPTY_DATA', 'string'],
                                      code: '$EMPTY_DATA.string$',
                                      hideAttr: true,
                                    },
                                    _codePath: ['orgName'],
                                    _idpath: ['039233'],
                                  },
                                  {
                                    attrId: '903623',
                                    code: 'catalogCodes',
                                    name: '场景编码数组',
                                    type: 'array',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['catalogCodes'],
                                    _idpath: ['903623'],
                                    children: [],
                                  },
                                  {
                                    attrId: '538317',
                                    code: 'impowerId',
                                    name: '授权审批主键id',
                                    type: 'number',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    _codePath: ['impowerId'],
                                    _idpath: ['538317'],
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              line_number: 9,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 168862229846525400,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '292397',
                                    pageJsonId: '0433935',
                                    dataSourceId: 16886110098162668,
                                    dataSourceName: 'pageData',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '792355',
                                        code: 'catalogCode',
                                        name: '场景编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['catalogCode'],
                                        _idpath: ['792355'],
                                      },
                                      {
                                        attrId: '49055',
                                        code: 'catalogName',
                                        name: '场景名称',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['catalogName'],
                                        _idpath: ['49055'],
                                      },
                                      {
                                        attrId: '189267',
                                        code: 'delegatedCode',
                                        name: '授权人编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        value: { type: [], code: '' },
                                        _codePath: ['delegatedCode'],
                                        _idpath: ['189267'],
                                      },
                                      {
                                        attrId: '878829',
                                        code: 'delegatedPowerCode',
                                        name: '被授权人编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        value: {
                                          type: ['context', '$okData_6499304$'],
                                          code: 'usrLogin',
                                        },
                                        _codePath: ['delegatedPowerCode'],
                                        _idpath: ['878829'],
                                      },
                                      {
                                        attrId: '61061',
                                        code: 'delegatedName',
                                        name: '授权人姓名',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['delegatedName'],
                                        _idpath: ['61061'],
                                      },
                                      {
                                        attrId: '27578',
                                        code: 'delegatedPowerName',
                                        name: '被授权人姓名',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        value: {
                                          type: ['context', '$okData_6499304$'],
                                          code: 'usrLastName',
                                        },
                                        _codePath: ['delegatedPowerName'],
                                        _idpath: ['27578'],
                                      },
                                      {
                                        attrId: '491819',
                                        code: 'jobLevelName',
                                        name: '人员等级',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['jobLevelName'],
                                        _idpath: ['491819'],
                                      },
                                      {
                                        attrId: '039233',
                                        code: 'orgName',
                                        name: '组织名称',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['orgName'],
                                        _idpath: ['039233'],
                                      },
                                      {
                                        attrId: '903623',
                                        code: 'catalogCodes',
                                        name: '场景编码数组',
                                        type: 'array',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['catalogCodes'],
                                        _idpath: ['903623'],
                                        children: [],
                                      },
                                      {
                                        attrId: '538317',
                                        code: 'impowerId',
                                        name: '授权审批主键id',
                                        type: 'number',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['impowerId'],
                                        _idpath: ['538317'],
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
                                {
                                  type: 'apiRequest',
                                  dataId: 168862230864391360,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '104515',
                                    pageJsonId: '0433935',
                                    sync: false,
                                    actionTitle: '',
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode: 'qryDcOaOrgRelPage',
                                    _apiCode: 'qryDcOaOrgRelPage',
                                    _source: 'rhin',
                                    _sourceName: '分页查询用户关联组织-hyj',
                                    _serviceId: '953209188524261376',
                                    _serviceTitle:
                                      '分页查询用户关联组织-hyj: qryDcOaOrgRelPage',
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
                                            dataKey: '814648_root.header',
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
                                            dataKey: '814648_root.path',
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
                                            dataKey: '814648_root.query',
                                          },
                                          {
                                            code: 'body',
                                            name: '请求体',
                                            attrType: 'object',
                                            children: [
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
                                                key: '0-3-0',
                                                id: 'root.body.pageNum',
                                                dataKey:
                                                  '814648_root.body.pageNum',
                                              },
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
                                                key: '0-3-1',
                                                id: 'root.body.pageSize',
                                                dataKey:
                                                  '814648_root.body.pageSize',
                                              },
                                              {
                                                code: 'usrKey',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'root.body.usrKey',
                                                compType: 'Input',
                                                name: 'usrKey',
                                                parents: ['root', 'body'],
                                                parentType: 'object',
                                                parentKey: '0-3',
                                                key: '0-3-2',
                                                id: 'root.body.usrKey',
                                                dataKey:
                                                  '814648_root.body.usrKey',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$okData_6499304$',
                                                  ],
                                                  code: 'usrKey',
                                                },
                                              },
                                              {
                                                code: 'orgCode',
                                                name: '新增节点',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                defaultValue: '',
                                                _id: 'root.body.orgCode',
                                                compType: 'Input',
                                                parents: ['root', 'body'],
                                                parentType: 'object',
                                                parentKey: '0-3',
                                                key: '0-3-3',
                                                id: 'root.body.orgCode',
                                                dataKey:
                                                  '814648_root.body.orgCode',
                                              },
                                              {
                                                code: 'orgName',
                                                name: '新增节点',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                defaultValue: '',
                                                _id: 'root.body.orgName',
                                                compType: 'Input',
                                                parents: ['root', 'body'],
                                                parentType: 'object',
                                                parentKey: '0-3',
                                                key: '0-3-4',
                                                id: 'root.body.orgName',
                                                dataKey:
                                                  '814648_root.body.orgName',
                                              },
                                            ],
                                            _id: 'root.body',
                                            compType: 'Input',
                                            parents: ['root'],
                                            parentType: 'object',
                                            parentKey: '0',
                                            key: '0-3',
                                            id: 'root.body',
                                            dataKey: '814648_root.body',
                                          },
                                        ],
                                        _id: 'root',
                                        compType: 'Input',
                                        isRoot: true,
                                        parents: [],
                                        key: '0',
                                        id: 'root',
                                        dataKey: '814648_root',
                                      },
                                    ],
                                  },
                                  line_number: 11,
                                  callback1: [
                                    {
                                      type: 'console',
                                      dataId: 168862230864473000,
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '125093',
                                        pageJsonId: '0433935',
                                        value: [
                                          '$reply_104515?.resultData$',
                                          '0000000000000',
                                        ],
                                      },
                                      line_number: 12,
                                    },
                                    {
                                      type: 'setDataSource',
                                      dataId: 168862230864452900,
                                      shielding: true,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '323079',
                                        pageJsonId: '0433935',
                                        dataSourceId: 16886110098162668,
                                        dataSourceName: 'pageData',
                                        dataSourceRelType: 'custom',
                                        dataSourceSetValue: [
                                          {
                                            attrId: '792355',
                                            code: 'catalogCode',
                                            name: '场景编码',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['catalogCode'],
                                            _idpath: ['792355'],
                                          },
                                          {
                                            attrId: '49055',
                                            code: 'catalogName',
                                            name: '场景名称',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['catalogName'],
                                            _idpath: ['49055'],
                                          },
                                          {
                                            attrId: '189267',
                                            code: 'delegatedCode',
                                            name: '授权人编码',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['delegatedCode'],
                                            _idpath: ['189267'],
                                          },
                                          {
                                            attrId: '878829',
                                            code: 'delegatedPowerCode',
                                            name: '被授权人编码',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['delegatedPowerCode'],
                                            _idpath: ['878829'],
                                          },
                                          {
                                            attrId: '61061',
                                            code: 'delegatedName',
                                            name: '授权人姓名',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['delegatedName'],
                                            _idpath: ['61061'],
                                          },
                                          {
                                            attrId: '27578',
                                            code: 'delegatedPowerName',
                                            name: '被授权人姓名',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['delegatedPowerName'],
                                            _idpath: ['27578'],
                                          },
                                          {
                                            attrId: '491819',
                                            code: 'jobLevelName',
                                            name: '人员等级',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['jobLevelName'],
                                            _idpath: ['491819'],
                                            value: {
                                              type: [
                                                'context',
                                                '$reply_104515?.resultData$',
                                              ],
                                              code: '',
                                            },
                                          },
                                          {
                                            attrId: '039233',
                                            code: 'orgName',
                                            name: '组织名称',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['orgName'],
                                            _idpath: ['039233'],
                                          },
                                          {
                                            attrId: '903623',
                                            code: 'catalogCodes',
                                            name: '场景编码数组',
                                            type: 'array',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['catalogCodes'],
                                            _idpath: ['903623'],
                                            children: [],
                                          },
                                          {
                                            attrId: '538317',
                                            code: 'impowerId',
                                            name: '授权审批主键id',
                                            type: 'number',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['impowerId'],
                                            _idpath: ['538317'],
                                          },
                                        ],
                                        operateType: 1,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                        targetDataSourcePaths: [],
                                      },
                                      line_number: 13,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '5924415',
                                          options: {
                                            context:
                                              '$reply_104515?.resultData.records[0]$',
                                            operate: 'notEmpty',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 168862230864474940,
                                      elseIfs: [],
                                      line_number: 14,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 168862230864460580,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '620512',
                                            pageJsonId: '0433935',
                                            dataSourceId: 16886110098162668,
                                            dataSourceName: 'pageData',
                                            dataSourceRelType: 'custom',
                                            dataSourceSetValue: [
                                              {
                                                attrId: '792355',
                                                code: 'catalogCode',
                                                name: '场景编码',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: ['catalogCode'],
                                                _idpath: ['792355'],
                                              },
                                              {
                                                attrId: '49055',
                                                code: 'catalogName',
                                                name: '场景名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: ['catalogName'],
                                                _idpath: ['49055'],
                                              },
                                              {
                                                attrId: '189267',
                                                code: 'delegatedCode',
                                                name: '授权人编码',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: ['delegatedCode'],
                                                _idpath: ['189267'],
                                              },
                                              {
                                                attrId: '878829',
                                                code: 'delegatedPowerCode',
                                                name: '被授权人编码',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: [
                                                  'delegatedPowerCode',
                                                ],
                                                _idpath: ['878829'],
                                              },
                                              {
                                                attrId: '61061',
                                                code: 'delegatedName',
                                                name: '授权人姓名',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: ['delegatedName'],
                                                _idpath: ['61061'],
                                              },
                                              {
                                                attrId: '27578',
                                                code: 'delegatedPowerName',
                                                name: '被授权人姓名',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: [
                                                  'delegatedPowerName',
                                                ],
                                                _idpath: ['27578'],
                                              },
                                              {
                                                attrId: '491819',
                                                code: 'jobLevelName',
                                                name: '人员等级',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: ['jobLevelName'],
                                                _idpath: ['491819'],
                                                value: {
                                                  type: ['customize'],
                                                  code: '$reply_104515?.resultData.records[0].jobLevelName$',
                                                },
                                              },
                                              {
                                                attrId: '039233',
                                                code: 'orgName',
                                                name: '组织名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: ['orgName'],
                                                _idpath: ['039233'],
                                                value: {
                                                  type: ['customize'],
                                                  code: '$reply_104515?.resultData.records[0].orgName$',
                                                },
                                              },
                                              {
                                                attrId: '903623',
                                                code: 'catalogCodes',
                                                name: '场景编码数组',
                                                type: 'array',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: ['catalogCodes'],
                                                _idpath: ['903623'],
                                                children: [],
                                              },
                                              {
                                                attrId: '538317',
                                                code: 'impowerId',
                                                name: '授权审批主键id',
                                                type: 'number',
                                                initialData: { type: 'static' },
                                                showInput: true,
                                                _codePath: ['impowerId'],
                                                _idpath: ['538317'],
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
                      eventDatashowCustomModal218.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatashowCustomModal218,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_8668672')}
                    {...injectData}
                  />
                </View>
              </HorizontalView>
              <Input
                name={'工号'}
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
                formItemIndex={3}
                fieldName={'delegatedPowerCode$'}
                value={data?.pageData?.delegatedPowerCode}
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
                  id: 'Input_287437',
                  uid: 'Input_287437',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_287437')}
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
                required={false}
                placeholder={'请输入'}
                formItemIndex={4}
                fieldName={'orgName$'}
                value={data?.pageData?.orgName}
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
                  id: 'Input_231478',
                  uid: 'Input_231478',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_231478')}
                {...injectData}
              />
              <Input
                name={'人员等级'}
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
                fieldName={'jobLevelName$'}
                value={data?.pageData?.jobLevelName}
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
                  id: 'Input_5550554',
                  uid: 'Input_5550554',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_5550554')}
                {...injectData}
              />
            </Form>
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AuthorizationApprovalPopup$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    authorizedPersonInfo: '',
  },
});
