// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Button, Form, Input, Table, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ChoosePostUserRel$$Modal: React.FC<PageProps> = ({
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
  const refreshPostInfo = (options_966448: any) => {
    const eventDatasetLoading33: any = [
      {
        type: 'setLoading',
        dataId: 166262535063177400,
        options: {
          compId: 'Table_7975706_122',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Table',
          id: '628555',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading33.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading33, { options_966448 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource45: any = [
      {
        type: 'reloadDataSource',
        dataId: 166264638885886530,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '347783',
          pageJsonId: '7975706',
          dataSourceId: 166303552386861820,
          dataSourceName: 'qryDcPostInfoExcludeUsrKey',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '685305',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '686452',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '305031',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '7275226',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '2520695',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageSize' },
                  type: 'long',
                  key: 'body.pageSize',
                },
                {
                  attrId: '53317',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageNum' },
                  type: 'long',
                  key: 'body.pageNum',
                },
                {
                  attrId: '481052',
                  code: 'postCode',
                  name: 'postCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.postCode',
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644',
                      'getFieldsValue',
                    ],
                    code: 'postCode',
                  },
                },
                {
                  attrId: '8663463',
                  code: 'postName',
                  name: 'postName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.postName',
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644',
                      'getFieldsValue',
                    ],
                    code: 'postName',
                  },
                },
                {
                  attrId: '847548',
                  code: 'usrKey',
                  name: 'usrKey',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.usrKey',
                  value: { type: ['customize'], code: '$state.usrKey$' },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '758106',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '8329997',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '498137',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '732303',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '667779',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '875973',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '407339',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '567961',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '210852',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '410965',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '912846',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '121216',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '725954',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '4890558',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '360745',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '4884576',
                      code: 'statusDate',
                      name: 'statusDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '852827',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '621929',
                      code: 'postDesc',
                      name: 'postDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6969707',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8115536',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '75302',
                      code: 'postId',
                      name: 'postId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '754954',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3723445',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '34803',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '939156',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6904557',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '29527154',
                      code: 'postName',
                      name: 'postName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '294397',
                      code: 'postCode',
                      name: 'postCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '880042',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '156508',
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
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166264641868662800,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '5587715',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166264642034565340,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '0912265',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource45.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource45,
      { options_966448 },
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
    refreshPostInfo,
  }));

  const onOk = () => {
    const eventDatagetValue114: any = [
      {
        type: 'getValue',
        dataId: 166264304914864220,
        options: {
          compId: 'Input_33684855_8070024_3641753_139214_098087',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Input',
          id: '9345805',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '5628915',
                options: { operate: 'notEmpty', manualValue: '0' },
                conditionType: 'checkValue',
                objType: 'Input',
                objId: 'Input_33684855_8070024_3641753_139214_098087',
              },
            ],
            dataId: 166264305850807600,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'getTableSelectedKey',
                dataId: 166264310619873540,
                options: {
                  compId: 'Table_7975706_122',
                  compLib: 'comm',
                  pageJsonId: '7975706',
                  compName: 'Table',
                  id: '560189',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '1566493',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$selectedRowKeys_560189.length$',
                          operate: '>',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166264310619862180,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166264438556039550,
                        options: {
                          compId: 'console',
                          compName: 'system',
                          id: '3131955',
                          pageJsonId: '7975706',
                          value: ['$selectedRowKeys_560189$'],
                        },
                        line_number: 5,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 167895207182344770,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '39539077',
                          pageJsonId: '7975706',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'addBatchDcPostUserRel',
                          _apiCode: 'addBatchDcPostUserRel',
                          _source: 'rhin',
                          _serviceId: '885146583064903680',
                          _serviceTitle:
                            '批量新增岗位人员关联关系-zzz: addBatchDcPostUserRel',
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
                              dataKey: '39539077_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '39539077_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '39539077_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'postId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.postId',
                                  compType: 'Input',
                                  name: 'postId',
                                  parents: ['body'],
                                  id: 'body.postId',
                                  dataKey: '39539077_body.postId',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'usrKey',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.usrKey',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.usrKey',
                                  dataKey: '39539077_body.usrKey',
                                  value: {
                                    type: ['context', '$state.usrKey$'],
                                    code: '',
                                  },
                                },
                                {
                                  code: 'postIds',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.postIds',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.postIds',
                                  dataKey: '39539077_body.postIds',
                                  value: {
                                    type: [
                                      'context',
                                      '$selectedRowKeys_560189$',
                                    ],
                                    code: '',
                                  },
                                },
                                {
                                  code: 'userKeys',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.userKeys',
                                  compType: 'Input',
                                  name: 'userKeys',
                                  parents: ['body'],
                                  id: 'body.userKeys',
                                  dataKey: '39539077_body.userKeys',
                                  value: { type: [], code: '' },
                                },
                                {
                                  code: 'orgUserRelIds',
                                  name: '组织和用户关系ID列表',
                                  attrType: 'fieldArray',
                                  mustFlag: 'F',
                                  children: [
                                    {
                                      code: 'listItem',
                                      name: '列表元素',
                                      attrType: 'field',
                                      type: 'object',
                                      _id: 'body.orgUserRelIds.listItem',
                                      compType: 'Input',
                                      parents: ['body', 'orgUserRelIds'],
                                      id: 'body.orgUserRelIds.listItem',
                                      dataKey:
                                        '39539077_body.orgUserRelIds.listItem',
                                    },
                                  ],
                                  _id: 'body.orgUserRelIds',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.orgUserRelIds',
                                  dataKey: '39539077_body.orgUserRelIds',
                                  value: { type: [], code: '' },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '39539077_body',
                            },
                          ],
                        },
                        line_number: 6,
                        callback1: [
                          {
                            type: 'okCallbackData',
                            dataId: 167895365780701150,
                            shielding: true,
                            options: {
                              compId: 'okCallbackData',
                              compName: 'page',
                              id: '095948',
                              pageJsonId: '7975706',
                            },
                            line_number: 7,
                          },
                          {
                            type: 'closeModal',
                            dataId: 167895252754407520,
                            shielding: true,
                            options: {
                              compId: 'page',
                              compName: 'page',
                              id: '904028',
                            },
                            line_number: 8,
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'customActionCode',
                        dataId: 167897832283911580,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '2515326',
                          pageJsonId: '7975706',
                          code: 'function main(data,state,success,fail){var arr=selectedRowKeys_560189;success(JSON.stringify(arr))};',
                        },
                        line_number: 9,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 167897843289373700,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '4832637',
                              pageJsonId: '7975706',
                              sync: false,
                              actionTitle: '',
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'addBatchDcPostUserRel',
                              _apiCode: 'addBatchDcPostUserRel',
                              _source: 'rhin',
                              _serviceId: '885146583064903680',
                              _serviceTitle:
                                '批量新增岗位人员关联关系-zzz: addBatchDcPostUserRel',
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
                                  dataKey: '4832637_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '4832637_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '4832637_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'postId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.postId',
                                      compType: 'Input',
                                      name: 'postId',
                                      parents: ['body'],
                                      id: 'body.postId',
                                      dataKey: '4832637_body.postId',
                                      value: { type: [], code: '' },
                                    },
                                    {
                                      code: 'usrKey',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.usrKey',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.usrKey',
                                      dataKey: '4832637_body.usrKey',
                                      value: {
                                        type: ['context', '$state.usrKey$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      code: 'postIds',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.postIds',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.postIds',
                                      dataKey: '4832637_body.postIds',
                                      value: {
                                        type: ['context', '$data_2515326$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      code: 'userKeys',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.userKeys',
                                      compType: 'Input',
                                      name: 'userKeys',
                                      parents: ['body'],
                                      id: 'body.userKeys',
                                      dataKey: '4832637_body.userKeys',
                                      value: { type: [], code: '' },
                                    },
                                    {
                                      code: 'orgUserRelIds',
                                      name: '组织和用户关系ID列表',
                                      attrType: 'fieldArray',
                                      mustFlag: 'F',
                                      children: [
                                        {
                                          code: 'listItem',
                                          name: '列表元素',
                                          attrType: 'field',
                                          type: 'object',
                                          _id: 'body.orgUserRelIds.listItem',
                                          compType: 'Input',
                                          parents: ['body', 'orgUserRelIds'],
                                          id: 'body.orgUserRelIds.listItem',
                                          dataKey:
                                            '4832637_body.orgUserRelIds.listItem',
                                        },
                                      ],
                                      _id: 'body.orgUserRelIds',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.orgUserRelIds',
                                      dataKey: '4832637_body.orgUserRelIds',
                                      value: { type: [], code: '' },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '4832637_body',
                                },
                              ],
                            },
                            line_number: 10,
                            callback1: [
                              {
                                type: 'okCallbackData',
                                dataId: 167897843289349200,
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '604124',
                                  pageJsonId: '7975706',
                                },
                                line_number: 11,
                              },
                              {
                                type: 'closeModal',
                                dataId: 167897843289311940,
                                options: {
                                  compId: 'page',
                                  compName: 'page',
                                  id: '845409',
                                },
                                line_number: 12,
                              },
                            ],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '7928036',
                        options: {
                          context: '$selectedRowKeys_560189$',
                          operate: 'empty',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166264310619857020,
                    elseIfs: [],
                    line_number: 13,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 166264310619842200,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '0603793',
                          pageJsonId: '7975706',
                          type: 'info',
                          value: '请先选中需要关联人员',
                        },
                        line_number: 14,
                      },
                    ],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '200047',
                options: { operate: 'empty' },
                conditionType: 'checkValue',
                objType: 'Input',
                objId: 'Input_33684855_8070024_3641753_139214_098087',
              },
            ],
            dataId: 166264310964545730,
            elseIfs: [],
            line_number: 15,
            callback1: [
              {
                type: 'showMessage',
                dataId: 166264319203545280,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '3456431',
                  pageJsonId: '7975706',
                  type: 'info',
                  value: '请先在父页面选择需要关联的用户',
                },
                line_number: 16,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue114.params = [] || [];
    CMDGenerator(eventDatagetValue114, {}, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal81: any = [
      {
        type: 'closeModal',
        dataId: '0475626_1',
        options: { compId: 'page', compName: 'page', id: '759522' },
        line_number: 1,
      },
    ];
    eventDatacloseModal81.params = [] || [];
    CMDGenerator(eventDatacloseModal81, {}, 'closeModal', {
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
    const eventDataapiRequest553: any = [
      {
        type: 'apiRequest',
        dataId: 166315364574315500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '247681',
          pageJsonId: '7975706',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCountyRegionListByProvinceId',
          _apiCode: 'qryCountyRegionListByProvinceId',
          _source: 'rhin',
          _serviceId: '887289928231636992',
          _serviceTitle:
            '根据省份ID查询所有该省份下的区县列表-tsm: qryCountyRegionListByProvinceId',
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
              dataKey: '247681_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'provinceId',
                  name: '省份ID',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.provinceId',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.provinceId',
                  dataKey: '247681_path.provinceId',
                  value: { type: ['customize'], code: '350000' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '247681_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '247681_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '247681_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166315369039834080,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '781334',
              colName: 'areaId',
              data: '$reply_247681?.resultData$',
            },
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest553.params = [] || [];
    CMDGenerator(eventDataapiRequest553, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest554: any = [
      {
        type: 'apiRequest',
        dataId: 166935692346801500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '489004',
          pageJsonId: '7975706',
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
              dataKey: '489004_header',
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
                  dataKey: '489004_path.attrCode',
                  value: { type: ['customize'], code: 'POST_FILTER_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '489004_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '489004_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '489004_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166935695857760260,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '1132886',
              colName: 'postFilterType',
              data: '$reply_489004?.resultData$',
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest554.params = [] || [];
    CMDGenerator(eventDataapiRequest554, {}, 'apiRequest', {
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
      className="__CustomClass_7975706__"
    >
      <View
        name={'布局容器'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_7975706_1',
          uid: 'View_7975706_1',
          type: 'View',
          ...componentItem,
        }}
        style={{ minHeight: '100%' }}
        ref={(r: any) => (refs['View_7975706_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'View_7975706_12',
            uid: 'View_7975706_12',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            padding: '20px 20px 16px 20px',
          }}
          ref={(r: any) => (refs['View_7975706_12'] = r)}
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
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_148709'}
            $$componentItem={{
              id: 'Form_148709_997679_5118644_1310676',
              uid: 'Form_148709_997679_5118644_1310676',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_148709_997679_5118644_1310676'] = r)}
            {...injectData}
          >
            <Input
              name={'关联用户编码'}
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
              fieldName={'usrLogin'}
              disabled={true}
              visible={true}
              readOnly={false}
              value={state?.usrLogin}
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
                id: 'Input_3889064_769378_089515_27277304',
                uid: 'Input_3889064_769378_089515_27277304',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_3889064_769378_089515_27277304'] = r)
              }
              {...injectData}
            />
            <Input
              name={'关联用户名称'}
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
              fieldName={'usrLastName'}
              disabled={true}
              visible={true}
              readOnly={false}
              value={state?.usrLastName}
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
                id: 'Input_33684855_8070024_3641753_139214',
                uid: 'Input_33684855_8070024_3641753_139214',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_33684855_8070024_3641753_139214'] = r)
              }
              {...injectData}
            />
            <Input
              name={'用户ID'}
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
              formItemIndex={2}
              fieldName={'usrKey'}
              disabled={false}
              visible={false}
              readOnly={false}
              value={state?.usrKey}
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
                id: 'Input_33684855_8070024_3641753_139214_098087',
                uid: 'Input_33684855_8070024_3641753_139214_098087',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_33684855_8070024_3641753_139214_098087'] = r)
              }
              {...injectData}
            />
          </Form>
          <Form
            name={'表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_148709'}
            $$componentItem={{
              id: 'Form_148709_997679_5118644',
              uid: 'Form_148709_997679_5118644',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '12px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_148709_997679_5118644'] = r)}
            {...injectData}
          >
            <Input
              name={'岗位编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
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
              fieldName={'postCode'}
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
                id: 'Input_3889064_769378_089515',
                uid: 'Input_3889064_769378_089515',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc766: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158470687467620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2038827',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshPostInfo',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc766.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc766, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_3889064_769378_089515'] = r)}
              {...injectData}
            />
            <Input
              name={'岗位名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
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
              fieldName={'postName'}
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
                id: 'Input_33684855_8070024_3641753',
                uid: 'Input_33684855_8070024_3641753',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc767: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158471466083070,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '64209',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshPostInfo',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc767.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc767, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_33684855_8070024_3641753'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_841498_323645_360219',
                uid: 'View_841498_323645_360219',
                type: 'View',
                ...componentItem,
              }}
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
                textAlign: 'center',
              }}
              ref={(r: any) => (refs['View_841498_323645_360219'] = r)}
              {...injectData}
            >
              <Button
                name={'查询'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'primary'}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_224226_335492_451924',
                  uid: 'Button_224226_335492_451924',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc768: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166158469460298370,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '6966413',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshPostInfo',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc768.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc768,
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
                ref={(r: any) => (refs['Button_224226_335492_451924'] = r)}
                {...injectData}
              />
              <Button
                name={'重置'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'default'}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_499055_286527_9962765',
                  uid: 'Button_499055_286527_9962765',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDataclearValue203: any = [
                    {
                      type: 'clearValue',
                      dataId: 166303871439003940,
                      options: {
                        compId: 'Input_3889064_769378_089515',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Input',
                        id: '8311747',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue203.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue203, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue204: any = [
                    {
                      type: 'clearValue',
                      dataId: 166303871761443740,
                      options: {
                        compId: 'Input_33684855_8070024_3641753',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Input',
                        id: '882298',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue204.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue204, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_499055_286527_9962765'] = r)}
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'网格列表'}
            columns={[
              {
                title: '岗位编码',
                key: 'postCode',
                dataIndex: 'postCode',
                className: '',
                id: '6822216',
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
                title: '岗位名称',
                key: 'postName',
                dataIndex: 'postName',
                className: 'divider',
                id: '279607',
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
                type: 'staticCol',
                id: '256496',
                title: '岗位过滤类型',
                dataIndex: 'postFilterType',
                key: '256496',
                className: 'divider',
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
                title: '省份',
                key: 'provinceId',
                dataIndex: 'provinceId',
                className: 'divider',
                id: '92845',
                staticDataSource: attrDataMap['PROVINCE_CODE'],
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
                title: '地市',
                key: 'lanId',
                dataIndex: 'lanId',
                className: 'divider',
                id: '859713',
                staticDataSource: attrDataMap['CITY_CODE'],
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
                title: '区县',
                key: 'areaId',
                dataIndex: 'areaId',
                className: 'divider',
                id: '222299',
                staticService: { labelKey: 'regionName', valueKey: 'regionId' },
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
                title: '状态',
                key: 'statusCd',
                dataIndex: 'statusCd',
                className: 'divider',
                id: '050084',
                staticDataSource: attrDataMap['STATUS_CD'],
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
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
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
            rowKey={'postId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '0527531',
                checked: true,
              },
            ]}
            pageSize={5}
            current={data?.qryDcPostInfoExcludeUsrKey?.resultData?.current}
            total={data?.qryDcPostInfoExcludeUsrKey?.resultData?.total}
            dataSource={data?.qryDcPostInfoExcludeUsrKey?.resultData?.records}
            fieldName={'data.qryDcOaUserPage.resultData.size'}
            extend={[]}
            dataSourceFromDataSourceConfig={
              'data.qryDcPostInfoExcludeUsrKey.resultData.records'
            }
            $$componentItem={{
              id: 'Table_7975706_122',
              uid: 'Table_7975706_122',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '20px 0px 0px 0px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatareloadDataSource115: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166262602492121020,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '301184',
                    pageJsonId: '7975706',
                    dataSourceId: 166303552386861820,
                    dataSourceName: 'qryDcPostInfoExcludeUsrKey',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '685305',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'header',
                      },
                      {
                        attrId: '686452',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'path',
                      },
                      {
                        attrId: '305031',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'query',
                      },
                      {
                        attrId: '7275226',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '2520695',
                            code: 'pageSize',
                            name: 'pageSize',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: 'pageSize' },
                            type: 'long',
                            key: 'body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '53317',
                            code: 'pageNum',
                            name: 'pageNum',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: 'pageNum' },
                            type: 'long',
                            key: 'body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '481052',
                            code: 'postCode',
                            name: 'postCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.postCode',
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644',
                                'getFieldsValue',
                              ],
                              code: 'postCode',
                            },
                          },
                          {
                            attrId: '8663463',
                            code: 'postName',
                            name: 'postName',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.postName',
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644',
                                'getFieldsValue',
                              ],
                              code: 'postName',
                            },
                          },
                          {
                            attrId: '847548',
                            code: 'usrKey',
                            name: 'usrKey',
                            sort: { isSort: true },
                            initialData: {
                              type: 'static',
                              value: '$state.usrKey$',
                            },
                            type: 'string',
                            key: 'body.usrKey',
                            value: {
                              type: ['customize'],
                              code: '$state.usrKey$',
                            },
                          },
                        ],
                        key: 'body',
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '494867',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '990389',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '63559',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '6804042',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '12647',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'fieldArray',
                            children: [
                              {
                                attrId: '893626',
                                code: 'listItem',
                                name: '列表元素',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                              },
                            ],
                          },
                          {
                            attrId: '6240647',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '923058',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '0412956',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '913814',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '946874',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '246891',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '4360788',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '778007',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '850031',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '906214',
                                code: 'statusDate',
                                name: 'statusDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '2215748',
                                code: 'updateDate',
                                name: 'updateDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '131004',
                                code: 'postDesc',
                                name: 'postDesc',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '7511926',
                                code: 'statusCd',
                                name: 'statusCd',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '0121528',
                                code: 'remark',
                                name: 'remark',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '931862',
                                code: 'postId',
                                name: 'postId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '958453',
                                code: 'lanId',
                                name: 'lanId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '649555',
                                code: 'provinceId',
                                name: 'provinceId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '335817',
                                code: 'createStaff',
                                name: 'createStaff',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '965915',
                                code: 'createStaffName',
                                name: 'createStaffName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9607727',
                                code: 'areaId',
                                name: 'areaId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '706486',
                                code: 'postName',
                                name: 'postName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '8426129',
                                code: 'postCode',
                                name: 'postCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '485053',
                                code: 'createDate',
                                name: 'createDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '1284766',
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
              eventDatareloadDataSource115.params =
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
                eventDatareloadDataSource115,
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
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal273: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166262912519746340,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '60546',
                    pageJsonId: '7975706',
                    modalname: '/detailPostInfo',
                    pageId: '886805014632988672',
                    paramsObj: {
                      sceneCode: 'V',
                      bizId: '$rowId$',
                      dcOaOrg: '$row$',
                      dcOaUser: '$row$',
                      dcPostInfo: '$row$',
                    },
                    paramsObjKeyValueMap: {
                      sceneCode: 'V',
                      bizId: '$rowId$',
                      dcOaOrg: '$row$',
                      dcOaUser: '$row$',
                      dcPostInfo: '$row$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal273.params =
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
                eventDatashowCustomModal273,
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
            ref={(r: any) => (refs['Table_7975706_122'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ChoosePostUserRel$$Modal, {
  pageId: '885432827305742336',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    usrKey: '',
    usrLogin: '',
    usrLastName: '',
  },
});
